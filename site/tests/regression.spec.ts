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

test.describe('Navigation Links', () => {
  test('all nav links are valid', async ({ page }) => {
    await page.goto(`${BASE}/`);
    
    // Get all navigation links
    const navLinks = page.locator('nav a[href^="/"]');
    const count = await navLinks.count();
    
    expect(count).toBeGreaterThan(0);
    
    for (let i = 0; i < count; i++) {
      const href = await navLinks.nth(i).getAttribute('href');
      if (href) {
        const response = await page.request.get(href);
        expect(response.status(), `Link ${href} should return 200`).toBe(200);
      }
    }
  });
});

test.describe('Internal Links', () => {
  for (const pageInfo of pages) {
    test(`${pageInfo.path} has no broken internal links`, async ({ page }) => {
      await page.goto(pageInfo.path);
      
      // Get all internal links (starting with the base URL)
      const internalLinks = page.locator(`a[href^="${BASE}"]`);
      const count = await internalLinks.count();
      
      const checkedUrls = new Set<string>();
      
      for (let i = 0; i < count; i++) {
        const href = await internalLinks.nth(i).getAttribute('href');
        if (href && !checkedUrls.has(href)) {
          checkedUrls.add(href);
          const response = await page.request.get(href);
          expect(response.status(), `Link ${href} on ${pageInfo.path} should not be broken`).toBeLessThan(400);
        }
      }
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
  test('skip link exists', async ({ page }) => {
    await page.goto(`${BASE}/`);
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeAttached();
  });

  test('main content has id for skip link', async ({ page }) => {
    await page.goto(`${BASE}/`);
    const main = page.locator('main#main-content, #main-content');
    await expect(main).toBeAttached();
  });

  test('images have alt text', async ({ page }) => {
    await page.goto(`${BASE}/`);
    const images = page.locator('img');
    const count = await images.count();
    
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      const src = await images.nth(i).getAttribute('src');
      // Allow empty alt for decorative images, but attribute must exist
      expect(alt, `Image ${src} should have alt attribute`).not.toBeNull();
    }
  });
});
