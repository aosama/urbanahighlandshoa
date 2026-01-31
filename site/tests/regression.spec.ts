import { test, expect } from '@playwright/test';

// Base path for GitHub Pages project site
const BASE = '/urbanahighlandshoa';

const pages = [
  { path: `${BASE}/`, title: 'Urbana Highlands' },
  { path: `${BASE}/announcements/`, title: 'Announcements' },
  { path: `${BASE}/events/`, title: 'Events' },
  { path: `${BASE}/documents/`, title: 'Documents' },
  { path: `${BASE}/contact/`, title: 'Contact' },
];

test.describe('Page Loading', () => {
  for (const page of pages) {
    test(`${page.path} loads successfully`, async ({ page: browserPage }) => {
      const response = await browserPage.goto(page.path);
      
      // Check response status
      expect(response?.status()).toBe(200);
      
      // Check title contains expected text
      await expect(browserPage).toHaveTitle(new RegExp(page.title, 'i'));
      
      // Check main content area exists
      await expect(browserPage.locator('main')).toBeVisible();
      
      // Check navigation exists (header or nav element)
      const hasNav = await browserPage.locator('header, nav').first().isVisible();
      expect(hasNav).toBe(true);
      
      // Check footer exists
      await expect(browserPage.locator('footer')).toBeVisible();
    });
  }
});

test.describe('All Links Verification', () => {
  for (const pageInfo of pages) {
    test(`${pageInfo.path} - all internal hyperlinks are valid`, async ({ page }) => {
      await page.goto(pageInfo.path);
      
      // Get all internal anchor links (starting with / or the base path)
      const internalLinks = page.locator('a[href^="/"]');
      const count = await internalLinks.count();
      
      const checkedUrls = new Set<string>();
      const brokenLinks: string[] = [];
      
      for (let i = 0; i < count; i++) {
        const href = await internalLinks.nth(i).getAttribute('href');
        if (!href || checkedUrls.has(href)) continue;
        checkedUrls.add(href);
        
        // Skip anchor-only links
        if (href === '#' || href.startsWith('#')) continue;
        
        try {
          const response = await page.request.get(href, { timeout: 10000 });
          if (response.status() >= 400) {
            brokenLinks.push(`${href} (status: ${response.status()})`);
          }
        } catch (error) {
          brokenLinks.push(`${href} (failed to fetch)`);
        }
      }
      
      expect(brokenLinks, `Broken internal links on ${pageInfo.path}:\n${brokenLinks.join('\n')}`).toHaveLength(0);
    });

    test(`${pageInfo.path} - external links have valid format`, async ({ page }) => {
      await page.goto(pageInfo.path);
      
      // Get all external links
      const externalLinks = page.locator('a[href^="http"]');
      const count = await externalLinks.count();
      
      const invalidLinks: string[] = [];
      const checkedUrls = new Set<string>();
      
      for (let i = 0; i < count; i++) {
        const href = await externalLinks.nth(i).getAttribute('href');
        if (!href || checkedUrls.has(href)) continue;
        checkedUrls.add(href);
        
        // Verify URL is well-formed
        try {
          new URL(href);
        } catch {
          invalidLinks.push(`${href} (malformed URL)`);
        }
      }
      
      expect(invalidLinks, `Invalid external URLs on ${pageInfo.path}:\n${invalidLinks.join('\n')}`).toHaveLength(0);
    });

    test(`${pageInfo.path} - all images load successfully`, async ({ page }) => {
      await page.goto(pageInfo.path);
      
      // Get all images
      const images = page.locator('img[src]');
      const count = await images.count();
      
      const brokenImages: string[] = [];
      const checkedSrcs = new Set<string>();
      
      for (let i = 0; i < count; i++) {
        const src = await images.nth(i).getAttribute('src');
        if (!src || checkedSrcs.has(src)) continue;
        checkedSrcs.add(src);
        
        // Skip data URIs and external images
        if (src.startsWith('data:') || src.startsWith('http://') || src.startsWith('https://')) continue;
        
        try {
          const response = await page.request.get(src, { timeout: 10000 });
          if (response.status() >= 400) {
            brokenImages.push(`${src} (status: ${response.status()})`);
          }
        } catch (error) {
          brokenImages.push(`${src} (failed to fetch)`);
        }
      }
      
      expect(brokenImages, `Broken images on ${pageInfo.path}:\n${brokenImages.join('\n')}`).toHaveLength(0);
    });

    test(`${pageInfo.path} - all images have alt attributes`, async ({ page }) => {
      await page.goto(pageInfo.path);
      
      const images = page.locator('img');
      const count = await images.count();
      
      const missingAlt: string[] = [];
      
      for (let i = 0; i < count; i++) {
        const alt = await images.nth(i).getAttribute('alt');
        const src = await images.nth(i).getAttribute('src') || 'unknown';
        
        if (alt === null) {
          missingAlt.push(src);
        }
      }
      
      expect(missingAlt, `Images missing alt on ${pageInfo.path}:\n${missingAlt.join('\n')}`).toHaveLength(0);
    });
  }
});

test.describe('Essential Content', () => {
  test('homepage has hero section', async ({ page }) => {
    await page.goto(`${BASE}/`);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText(/Urbana Highlands/i);
  });

  test('homepage has resident portal link', async ({ page }) => {
    await page.goto(`${BASE}/`);
    const portalLink = page.locator('a[href*="ciranet.com"]');
    await expect(portalLink.first()).toBeVisible();
  });

  test('contact page has phone number', async ({ page }) => {
    await page.goto(`${BASE}/contact/`);
    await expect(page.locator('text=855-477-2267').first()).toBeVisible();
  });

  test('documents page has document links', async ({ page }) => {
    await page.goto(`${BASE}/documents/`);
    const docLinks = page.locator('a[href*=".pdf"]');
    const count = await docLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('footer has management contact', async ({ page }) => {
    await page.goto(`${BASE}/`);
    await expect(page.locator('footer')).toContainText('855-477-2267');
  });
});

test.describe('Accessibility Basics', () => {
  test('skip link exists and target is valid', async ({ page }) => {
    await page.goto(`${BASE}/`);
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeAttached();
    
    // Verify the target element exists
    const target = page.locator('#main-content');
    await expect(target).toBeAttached();
  });
});
