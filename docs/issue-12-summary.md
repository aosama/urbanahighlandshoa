# Image Optimization Plan - Issue #12 Summary

🎯 **Planning Complete** - Comprehensive analysis and strategy documented

---

## Quick Summary

**Current State:** ~12MB assets, hero image (823KB) is primary bottleneck  
**Potential Savings:** 1-2MB on initial page load  
**Status:** Ready for implementation when final images are available

---

## Key Findings

### 📊 Image Inventory Analysis

**In Use (Homepage):**
- `hero-welcome.jpg` - **823KB** ⚠️ Primary bottleneck
- `playground.jpg` - 117KB
- `walking-path.jpg` - 111KB  
- `neighborhood-road.jpg` - 113KB
- `UH-logo.jpg` - 3.2KB ✅ (Header/Footer)

**Unused Assets:**
- `aerial-view.jpg` - 352KB
- `mountain-view.jpg` - 340KB
- `hero-welcome-original.jpg` - **9.9MB** (original)
- Legacy button images - ~17KB total
- Total unused: ~692KB

**Issues Found:**
- ❌ No responsive images (srcset)
- ❌ No modern formats (WebP/AVIF)
- ❌ Favicon dimensions incorrect (180×149, 64×53 instead of square)
- ❌ No optimization pipeline

---

## Optimization Strategy

### 🟢 Phase 1: Immediate Wins (No Code Changes)

**1. Compress Hero Image** ⭐ **Highest Impact**
- Current: 823KB → Target: <400KB (300-350KB ideal)
- Tool: [Squoosh.app](https://squoosh.app/) or [TinyJPG](https://tinyjpg.com/)
- Quality: 80-85
- **Savings: 400-500KB**

**2. Compress Community Images**
- playground, walking-path, neighborhood-road: ~175KB savings (30-40% reduction)
- Quality: 75-80

**3. Fix Favicons**
- apple-touch-icon: 180×180 (currently 180×149)
- favicon-64: 64×64 (currently 64×53)

**4. Remove Unused Assets**
- Clean up 692KB of unused images

**Phase 1 Total Savings: ~575-675KB with zero code changes**

---

### 🟡 Phase 2: Short Term (Code Changes Required)

**5. Responsive Hero Image (srcset)**
- Generate 3 sizes: 750w (mobile), 1536w (tablet), 2400w (desktop)
- Implement `<picture>` element in `index.astro`
- **Additional savings: 300-500KB for mobile users**

**6. WebP Variants**
- Create WebP versions with `<picture>` fallback
- **Additional savings: 25-35% beyond JPEG compression**

---

### 🔵 Phase 3: Future (Infrastructure)

**7. Astro Image Integration**
- Automated optimization at build time
- Multiple format generation
- Responsive srcset

**8. Build Pipeline**
- Sharp or imagemin integration
- Automate for future images

---

## Recommended Approach

Given the issue is **deprioritized until final images are available:**

### Now (No Code Work)
1. ✅ Document plan (complete)
2. 🔧 Could fix favicon dimensions (small technical debt item)
3. 📚 Keep lightweight - avoid infrastructure changes

### When Ready (Final Images Available)
1. Execute Phase 1 (compression) - Quick, high impact, no code changes
2. Add Phase 2 (responsive hero) - Significant mobile benefit
3. Consider Phase 3 (automation) - For ongoing optimization

---

## Testing Strategy

**Build Verification:**
```bash
cd site && npm run build
```

**Visual Verification:**
- Use Playwright for before/after screenshots
- Test on mobile, tablet, desktop viewports

**Performance Testing:**
- Lighthouse comparison
- WebPageTest before/after

---

## Acceptance Criteria

✅ No broken images  
✅ Build passes (`npm run build`)  
✅ Hero image <400KB  
✅ Total page <2MB  
✅ Process documented for future images

---

## Estimated Impact Summary

| Optimization | Savings | Effort | Priority |
|-------------|---------|--------|----------|
| Hero compression | 400-500KB | Low | ⭐⭐⭐ |
| Community compression | ~150KB | Low | ⭐⭐ |
| Remove unused | ~692KB | Low | ⭐ |
| Responsive hero | 300-500KB | Medium | ⭐⭐⭐ |
| WebP variants | 200-400KB | Medium | ⭐⭐ |

**Total Potential:** 1-2MB savings on initial page load

---

## Documentation

📄 **Full Detailed Plan:** `docs/image-optimization-plan.md`  
🔗 **Related Issue:** #12  
📅 **Created:** 2026-01-31

---

_This plan is ready to execute in phases when final images are available. Each phase delivers measurable improvements and can be implemented independently._
