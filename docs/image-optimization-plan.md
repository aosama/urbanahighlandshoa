# Image Optimization Plan

**Issue:** [#12 - Optimize images (size/compression/srcset where helpful)](https://github.com/aosama/urbanahighlandshoa/issues/12)  
**Status:** Planning Complete - Awaiting Final Assets  
**Created:** 2026-01-31  
**Estimated Effort:** 2-4 hours (immediate wins) + 4-8 hours (full implementation)

---

## Executive Summary

This plan provides a comprehensive strategy for optimizing images on the Urbana Highlands HOA website to improve web performance, reduce bandwidth usage, and enhance user experience. The optimization focuses on compression, appropriate dimensions, and modern image formats while maintaining visual quality.

**Key Finding:** Current site has ~12MB of assets with hero image (823KB) as the primary performance bottleneck. **Potential savings: 1-2MB on initial page load.**

---

## Current State Analysis

### Image Inventory

#### Community Images (`site/public/assets/community/`)
| Image | Size | Status | Notes |
|-------|------|--------|-------|
| `hero-welcome-original.jpg` | **9.9MB** | ⚠️ Unused | Original uncompressed |
| `hero-welcome.jpg` | **823KB** | ✅ In Use | Primary bottleneck |
| `aerial-view.jpg` | 352KB | ⚠️ Unused | Not in code |
| `mountain-view.jpg` | 340KB | ⚠️ Unused | Not in code |
| `neighborhood-road.jpg` | 113KB | ✅ In Use | Homepage |
| `walking-path.jpg` | 111KB | ✅ In Use | Homepage |
| `playground.jpg` | 117KB | ✅ In Use | Homepage |
| `community-entrance.jpg` | 99KB | ❓ Unclear | 2528×1696px |
| `pool.jpg` | 13KB | ⚠️ Unused | Not in code |

#### Other Assets (`site/public/assets/`)
| Image | Size | Status | Usage |
|-------|------|--------|-------|
| `urbana-highlands-pic.jpg` | 62KB | ❓ Unclear | - |
| `UH-logo.jpg` | 3.2KB | ✅ In Use | Header/Footer (3×) |
| `pool-button.jpg` | 6.5KB | ⚠️ Legacy | Likely unused |
| `ciraconnect-button.jpg` | 6.0KB | ⚠️ Legacy | Likely unused |
| `facebook-button.jpg` | 4.7KB | ⚠️ Legacy | Likely unused |

#### Icons
| Icon | Size | Dimensions | Issue |
|------|------|------------|-------|
| `apple-touch-icon.png` | 14KB | 180×149 | ❌ Not square (should be 180×180) |
| `favicon-64.png` | 3.7KB | 64×53 | ❌ Not square (should be 64×64) |

#### Source Images (`Community Images/` directory)
- `Hero Welcome.png` - **9.9MB** (original source)
- Additional community photos available

**Total Assets Size:** ~12MB

### Current Implementation

**Technology Stack:**
- Standard `<img>` tags (no optimization)
- No responsive images (srcset)
- No modern formats (WebP/AVIF)
- No build-time optimization pipeline
- No Sharp, Squoosh, or Astro Image integration

**Image Usage:**
- **Homepage (`index.astro`):** Hero image + 3 community showcase images
- **Header (`Header.astro`):** Logo (2 variants)
- **Footer (`Footer.astro`):** Logo

### Key Findings

1. ⚠️ **Large Hero Image:** `hero-welcome.jpg` at 823KB is the largest performance bottleneck
2. ❌ **No Modern Formats:** No WebP or AVIF usage
3. ❌ **No Responsive Images:** No srcset or picture elements for different screen sizes
4. ⚠️ **Unused Assets:** Several community images not referenced in code (692KB total)
5. ❌ **Icon Issues:** Favicons have incorrect aspect ratios
6. ❌ **No Optimization Pipeline:** No automated image processing
7. ✅ **Good Base:** Most images already reasonably sized (except hero)

---

## Optimization Strategy

### Phase 1: Dimension Analysis & Validation

**Hero Image Requirements:**
- **Desktop:** Full viewport height (~800-1080px typical)
- **Mobile:** Full viewport height (~667-844px typical)
- **Aspect ratio:** 16:9 or wider landscape
- **Current usage:** Full-bleed background with `object-cover`
- **Recommendation:** Max 2400px width for desktop

**Community Images Requirements:**
- **Bento grid cards:** Large card ~560×560px, small cards ~280×280px
- **Current sizing:** Adequate
- **Opportunity:** Compression (30-40% reduction target)

**Logo & Icons:**
- **Logo:** Appropriately sized at 3.2KB ✅
- **Favicons:** Need dimension correction to proper squares

### Phase 2: Compression Strategy

#### Option A: Manual Optimization (Recommended First)
**Quick win with immediate impact, no code changes required**

**Tools:**
- [Squoosh.app](https://squoosh.app/) - Web-based image optimizer
- [TinyJPG](https://tinyjpg.com/) - Batch JPEG/PNG compression
- [ImageOptim](https://imageoptim.com/) - macOS app

**Targets:**
- Hero image: Quality 80-85 → Target <400KB
- Community images: Quality 75-80 → Target 30-40% reduction

#### Option B: Astro Image Integration (Recommended for Future)
**Automated optimization at build time**

- Install `@astrojs/image` or use Astro's built-in `<Image />` component
- Automatic optimization during build
- Multiple format generation (WebP, AVIF)
- Responsive srcset generation

#### Option C: NPM Scripts Approach
**Custom build pipeline**

- Add `sharp` or `imagemin` as dev dependency
- Create npm script for image optimization
- Integrate into build process

**Recommendation:** Start with **Option A** (manual) for immediate impact, then migrate to **Option B** for ongoing optimization.

### Phase 3: Responsive Images (srcset)

**Where srcset Provides Material Benefit:**

#### ✅ Hero Image (HIGH PRIORITY)
**Potential savings: 300-500KB for mobile users**

- Serves full viewport background
- Different optimal sizes needed:
  - Mobile: 750w
  - Tablet: 1536w
  - Desktop: 2400w

**Implementation Example:**
```astro
<picture>
  <source media="(min-width: 1536px)" srcset="${basePath}assets/community/hero-welcome-2400w.jpg" />
  <source media="(min-width: 768px)" srcset="${basePath}assets/community/hero-welcome-1536w.jpg" />
  <img 
    src="${basePath}assets/community/hero-welcome-750w.jpg"
    alt="Urbana Highlands community entrance, playground, and scenic mountain views"
    class="h-full w-full object-cover"
    loading="eager"
  />
</picture>
```

#### ⚠️ Community Images (MEDIUM PRIORITY)
- Cards render at relatively fixed sizes in bento grid
- Less benefit than hero image
- Consider only if compression alone isn't sufficient

#### ❌ Logo & Small Assets (LOW/NO PRIORITY)
- Already small (3-7KB)
- Minimal benefit from srcset
- Not worth the complexity

### Phase 4: Modern Formats (WebP/AVIF)

**Benefits:**
- **WebP:** 25-35% smaller than JPEG at same quality
- **AVIF:** 40-50% smaller than JPEG (less browser support)

**Browser Support:**
- WebP: ~97% global (excellent)
- AVIF: ~87% global (good, improving)

**Implementation Example:**
```astro
<picture>
  <source type="image/avif" srcset="${basePath}assets/community/hero-welcome.avif" />
  <source type="image/webp" srcset="${basePath}assets/community/hero-welcome.webp" />
  <img 
    src="${basePath}assets/community/hero-welcome.jpg"
    alt="..."
    class="h-full w-full object-cover"
  />
</picture>
```

**Recommendation:** Start with WebP (excellent support), add AVIF if further optimization needed.

### Phase 5: Asset Management

#### Cleanup Actions

**Remove or Relocate Unused Images:**
- `aerial-view.jpg` (352KB) - Not referenced
- `mountain-view.jpg` (340KB) - Not referenced
- `pool.jpg` (13KB) - Not referenced
- `*-button.jpg` images - Likely legacy

**Organize Source Files:**
- Move `Hero Welcome.png` (9.9MB) out of public assets
- Move `Community Images/` directory outside site/public
- Keep only optimized, production-ready images in public/

**Documentation:**
- Document image usage and optimization settings
- Create process guide for adding new images

---

## Implementation Priorities

### 🟢 IMMEDIATE (Quick Wins - No Code Changes)

#### 1. Compress Hero Image ⭐ **HIGHEST IMPACT**
- **Current:** 823KB
- **Target:** <400KB (ideally 300-350KB)
- **Tool:** Squoosh.app or TinyJPG
- **Quality:** 80-85
- **Expected Savings:** 400-500KB on initial page load

#### 2. Fix Favicon Dimensions
- **apple-touch-icon.png:** Correct to 180×180 (currently 180×149)
- **favicon-64.png:** Correct to 64×64 (currently 64×53)
- Ensures proper display across devices

#### 3. Compress Community Images
**Target: 30-40% file size reduction**

| Image | Current | Target | Savings |
|-------|---------|--------|---------|
| `playground.jpg` | 117KB | ~70KB | ~47KB |
| `walking-path.jpg` | 111KB | ~65KB | ~46KB |
| `neighborhood-road.jpg` | 113KB | ~70KB | ~43KB |
| `community-entrance.jpg` | 99KB | ~60KB | ~39KB |
| **Total** | **440KB** | **~265KB** | **~175KB** |

#### 4. Remove Unused Assets
- Delete or move unused images
- Reduce deployment package size
- Keep repository clean

**Total Immediate Impact:** ~575-675KB savings with zero code changes

---

### 🟡 SHORT TERM (Requires Code Changes)

#### 5. Add Responsive Hero Image (srcset)
**Expected additional savings: 300-500KB for mobile users**

- Generate 3 hero sizes: 750w, 1536w, 2400w
- Implement `<picture>` element with media queries
- Update `site/src/pages/index.astro`

#### 6. Generate WebP Variants
**Expected savings: 25-35% beyond JPEG compression**

- Create WebP versions of hero + community images
- Implement `<picture>` elements with `type="image/webp"`
- Maintain JPEG fallbacks

**Total Short-Term Impact:** Additional 300-700KB savings

---

### 🔵 FUTURE (Requires Infrastructure)

#### 7. Integrate Astro Image Component
- Install and configure image optimization
- Refactor image tags to `<Image />` component
- Enable automatic optimization and format generation

#### 8. Implement Build-Time Optimization
- Add Sharp or imagemin to build pipeline
- Automate compression and format generation
- Ensure new images are optimized automatically

---

## Acceptance Criteria

### ✅ No Broken Images
- All current images display correctly
- Fallback formats work for older browsers
- Alt text preserved
- Responsive images adapt to viewport

### ✅ Build Passes
- `npm run build` completes successfully
- No new build warnings or errors
- Optimized assets included in `dist/`
- Deployment succeeds to GitHub Pages

### ✅ Performance Improvements (Target Metrics)
- **Hero image:** <400KB (target 300-350KB)
- **Total page weight:** <2MB (including all assets)
- **Lighthouse Performance:** >90 (if previously lower)
- **LCP (Largest Contentful Paint):** <2.5s (good)

### ✅ Maintainability
- Clear documentation of optimization process
- Repeatable process for future image additions
- Source files organized and accessible
- Build process documented

---

## Estimated Impact

### Page Load Improvements

| Optimization | Savings | Cumulative |
|-------------|---------|------------|
| Hero compression | 400-500KB | 400-500KB |
| Community compression | ~150KB | 550-650KB |
| Responsive hero (mobile) | 300-500KB | 850-1,150KB |
| WebP conversion | 200-400KB | 1,050-1,550KB |

**Total Potential Savings:** 1-2MB on initial page load

### User Experience Improvements

- ⚡ **Faster initial page load** (especially on slower connections)
- 📱 **Reduced mobile data usage** (300-500KB savings with responsive images)
- 📈 **Improved Lighthouse scores** (Performance, Best Practices)
- 🎯 **Better Core Web Vitals** (LCP improvement)
- 🌍 **Better experience for users with limited bandwidth**

---

## Risks & Considerations

### ⚠️ Quality vs. Size Trade-off
- Over-compression can degrade visual quality
- Hero image is prominent - quality is critical
- **Mitigation:** Test on actual devices, use quality 80-85 for hero

### ⚠️ Browser Support
- AVIF: ~87% global support (as of Dec 2023)
- WebP: ~97% global support
- **Mitigation:** Always provide JPEG fallback in `<picture>` element

### ⚠️ Maintenance Overhead
- Manual optimization requires repeating for new images
- **Mitigation:** Document process, consider automated pipeline

### ⚠️ Build Time
- Image optimization adds to build duration
- **Mitigation:** Cache optimized images, only regenerate when source changes

---

## Recommendations

### Given Issue Status: Deprioritized

Since final images are not yet finalized, here's the recommended approach:

#### 📋 NOW (Immediate)
1. ✅ **Document optimization plan** (this document)
2. 🔧 **Fix favicon dimensions** (technical debt, quick fix)
3. 📚 **Keep process lightweight** - no major infrastructure changes yet

#### ⏳ WHEN READY (Once final images available)
1. 🎯 **Start with compression** (Option A: Manual) - Quick, high impact
2. 📱 **Add responsive hero image** - Significant mobile benefit
3. 🔄 **Consider Astro Image integration** - For ongoing optimization

#### 🧪 Testing Approach
1. **Build verification:** `cd site && npm run build`
2. **Visual verification:** Use Playwright to capture before/after screenshots
3. **Performance testing:** Lighthouse or WebPageTest comparison

---

## Implementation Checklist

### Phase 1: Immediate Wins (No Code Changes)
- [ ] Compress `hero-welcome.jpg` (823KB → <400KB)
- [ ] Compress community images (440KB → ~265KB)
- [ ] Fix `apple-touch-icon.png` dimensions (180×180)
- [ ] Fix `favicon-64.png` dimensions (64×64)
- [ ] Remove/relocate unused images
- [ ] Test build passes
- [ ] Visual QA check

### Phase 2: Responsive Hero (Code Changes)
- [ ] Generate hero variants (750w, 1536w, 2400w)
- [ ] Update `site/src/pages/index.astro` with `<picture>`
- [ ] Test responsive behavior (mobile, tablet, desktop)
- [ ] Verify build passes
- [ ] Performance test comparison

### Phase 3: Modern Formats (Code Changes)
- [ ] Generate WebP variants for hero + community images
- [ ] Update image elements with `<picture>` + WebP sources
- [ ] Test browser fallback (older browsers)
- [ ] Verify build passes
- [ ] Performance test comparison

### Phase 4: Infrastructure (Future)
- [ ] Research Astro Image vs. Sharp vs. imagemin
- [ ] Install chosen image optimization package
- [ ] Configure build pipeline
- [ ] Refactor image tags to use optimization
- [ ] Document process for adding new images

---

## Tools & Resources

### Online Compression Tools
- **Squoosh:** https://squoosh.app/ - Google's web-based optimizer (recommended)
- **TinyJPG:** https://tinyjpg.com/ - Batch compression for JPEG/PNG
- **ImageOptim:** https://imageoptim.com/ - macOS desktop app

### NPM Packages
- **Sharp:** https://sharp.pixelplumbing.com/ - High-performance Node.js image processing
- **@astrojs/image:** https://docs.astro.build/en/guides/images/ - Astro's image optimization
- **imagemin:** https://github.com/imagemin/imagemin - Minify images seamlessly

### Testing & Analysis
- **Lighthouse:** https://developers.google.com/web/tools/lighthouse - Performance auditing
- **WebPageTest:** https://www.webpagetest.org/ - Real-world performance testing
- **PageSpeed Insights:** https://pagespeed.web.dev/ - Google's performance analysis

---

## Next Steps

1. ✅ **Planning Complete** - This comprehensive plan documented
2. ⏸️ **Awaiting User Decision** - Issue deprioritized until final images ready
3. 🔜 **When Approved:**
   - Execute immediate optimizations (Phase 1)
   - Test and validate changes
   - Report results with before/after metrics
   - Proceed to subsequent phases as needed

---

**Plan Status:** ✅ COMPLETE - READY FOR REVIEW  
**Documentation Location:** `docs/image-optimization-plan.md`  
**Related Issue:** [#12](https://github.com/aosama/urbanahighlandshoa/issues/12)  
**Related PR:** Will be created when implementation begins  

---

_This plan can be executed in phases, allowing for incremental improvements with measurable results at each stage._
