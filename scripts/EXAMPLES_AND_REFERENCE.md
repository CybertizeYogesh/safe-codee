# Image Optimization Script - Examples & Reference

## Example Output

### Dry-Run Mode Output

```
═══════════════════════════════════════════════════════
IMAGE OPTIMIZATION SCRIPT
═══════════════════════════════════════════════════════
Project Root: c:\Users\Yogesh Poonia\Desktop\temp\safe-codee
Max WebP Size: 120 KB
Dry Run: YES

⚠️  DRY RUN MODE: No files will be modified

[2024-01-15T10:30:45.123Z] [INFO] Step 1: Discovering images...
[2024-01-15T10:30:45.234Z] [SUCCESS] Found 42 image(s)

[2024-01-15T10:30:45.345Z] [INFO] Step 2: Converting images to WebP...
[2024-01-15T10:30:45.456Z] [INFO] Processing: public/images/hero/banner.jpg
[2024-01-15T10:30:45.567Z] [INFO]   Original: 450.25 KB (1920x1080, jpeg)
[2024-01-15T10:30:45.678Z] [INFO]   Converted with quality 75, dimensions 1920x1080: 89.45 KB
[2024-01-15T10:30:45.789Z] [SUCCESS]   ✓ Created: banner.webp

[2024-01-15T10:30:46.890Z] [INFO] Processing: public/images/about/team.png
[2024-01-15T10:30:46.901Z] [INFO]   Original: 285.60 KB (1200x800, png)
[2024-01-15T10:30:46.912Z] [INFO]   Converted with quality 80, dimensions 1200x800: 65.32 KB
[2024-01-15T10:30:46.923Z] [SUCCESS]   ✓ Created: team.webp

[2024-01-15T10:30:47.934Z] [SUCCESS] Conversion complete: 42 succeeded, 0 failed

[2024-01-15T10:30:47.945Z] [INFO] Step 3: Updating code references...
[2024-01-15T10:30:47.956Z] [INFO]   Updated 2 reference(s) in: src/app/page.js
[2024-01-15T10:30:47.967Z] [INFO]   Updated 1 reference(s) in: src/components/HeroSlider.jsx
[2024-01-15T10:30:47.978Z] [INFO]   Updated 3 reference(s) in: src/styles/style.css
[2024-01-15T10:30:47.989Z] [SUCCESS] Updated 127 reference(s) across all source files

[2024-01-15T10:30:48.990Z] [INFO] Step 4: Cleaning up original files...
[2024-01-15T10:30:49.901Z] [INFO]   Deleted: public/images/hero/banner.jpg
[2024-01-15T10:30:49.912Z] [INFO]   Deleted: public/images/about/team.png
[2024-01-15T10:30:49.923Z] [SUCCESS] Cleanup complete: 42 deleted, 0 failed

═══════════════════════════════════════════════════════
IMAGE OPTIMIZATION COMPLETED SUCCESSFULLY!
═══════════════════════════════════════════════════════
✓ Converted: 42 images
✗ Failed: 0 images
Space Saved: 2,458.50 KB (75.43%)
Log file saved to: c:\Users\Yogesh Poonia\Desktop\temp\safe-codee\image-optimization.log
```

### Real Execution Output

Same as above, but files are actually created and modified.

---

## Code Examples

### Before Optimization

**HTML:**
```html
<img src="/images/hero.jpg" alt="Hero">
<img src="/images/about.png" alt="About Us">
<picture>
  <source srcset="/images/banner.jpg">
  <img src="/images/banner.jpg" alt="Banner">
</picture>
```

**CSS:**
```css
.hero-bg {
  background-image: url('/images/hero-bg.jpg');
}
.about-bg {
  background-image: url('../images/about.png');
}
```

**JavaScript/JSX:**
```javascript
import heroImage from '@/public/images/hero.jpg';
const bannerImg = require('/images/banner.png');

export default function Page() {
  return <img src="/images/logo.jpg" />;
}
```

### After Optimization

**HTML:**
```html
<img src="/images/hero.webp" alt="Hero">
<img src="/images/about.webp" alt="About Us">
<picture>
  <source srcset="/images/banner.webp">
  <img src="/images/banner.webp" alt="Banner">
</picture>
```

**CSS:**
```css
.hero-bg {
  background-image: url('/images/hero-bg.webp');
}
.about-bg {
  background-image: url('../images/about.webp');
}
```

**JavaScript/JSX:**
```javascript
import heroImage from '@/public/images/hero.webp';
const bannerImg = require('/images/banner.webp');

export default function Page() {
  return <img src="/images/logo.webp" />;
}
```

---

## Image Size Comparison Examples

| Image | Original | WebP | Saved | Percent |
|-------|----------|------|-------|---------|
| Large Hero (1920x1080) | 450 KB | 89 KB | 361 KB | 80% |
| Medium Product (800x600) | 280 KB | 65 KB | 215 KB | 77% |
| Small Icon (200x200) | 45 KB | 8 KB | 37 KB | 82% |
| PNG Chart (600x400) | 320 KB | 72 KB | 248 KB | 77% |
| **Total** | **1,095 KB** | **234 KB** | **861 KB** | **78%** |

---

## Configuration Scenarios

### Scenario 1: Maximum Compression (Lower Quality)

Edit `scripts/optimize-images.js`:

```javascript
const CONFIG = {
  maxWebPSize: 100 * 1024,    // Reduce to 100 KB
  qualityStart: 70,            // Lower starting quality
  qualityMin: 20,              // Allow very low quality if needed
  // ...
};
```

**Result:** Smaller files, but visible quality loss

### Scenario 2: High Quality (Larger Files)

```javascript
const CONFIG = {
  maxWebPSize: 150 * 1024,    // Increase to 150 KB
  qualityStart: 90,            // Higher starting quality
  qualityMin: 50,              // Don't go below 50% quality
  // ...
};
```

**Result:** Larger files, but excellent quality

### Scenario 3: Photo-Heavy Site (Aggressive Scaling)

```javascript
const CONFIG = {
  maxWebPSize: 80 * 1024,     // Strict 80 KB limit
  qualityStart: 75,
  qualityMin: 25,
  // ...
};
```

The script will aggressively scale down dimensions if needed.

---

## File Structure After Optimization

### Before

```
public/
├── images/
│   ├── hero.jpg (450 KB)
│   ├── about.png (280 KB)
│   ├── banner.jpg (320 KB)
│   └── logo.png (45 KB)
```

### After

```
public/
├── images/
│   ├── hero.webp (89 KB)      ✓ Created
│   ├── about.webp (65 KB)     ✓ Created
│   ├── banner.webp (72 KB)    ✓ Created
│   └── logo.webp (8 KB)       ✓ Created
```

Original files are deleted automatically.

---

## Common Issues & Solutions

### Issue: "Process timed out"

**Cause:** Too many large images

**Solution:**
- Run script again (it will process successfully)
- Or split into smaller batches using exclude patterns

### Issue: "WebP file larger than original"

**Cause:** Small PNG files (lossless) don't compress well to WebP

**Solution:** This is expected and handled - script adjusts quality/size

### Issue: "Reference not updated"

**Cause:** Unusual image reference format

**Example patterns that may be missed:**
```javascript
// These might not be caught:
const img = '`public/images/hero.jpg`';
const path = " . '/images/hero.jpg' . ";
```

**Solution:** Manually update or review log file

### Issue: "Still seeing old images in browser"

**Cause:** Browser cache

**Solution:**
```bash
# Hard refresh in browser
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)

# Or clear cache completely
# Settings → Privacy → Clear browsing data → Images and files
```

---

## Monitoring Script Progress

### Real-Time Progress

The script outputs progress as it runs. For large projects:

```
[TIME] [INFO] Processing: public/images/1-hero.jpg
[TIME] [INFO] Processing: public/images/2-banner.jpg
[TIME] [INFO] Processing: public/images/3-about.jpg
...
```

### Estimated Times

- **< 50 images**: 1-2 minutes
- **50-200 images**: 3-5 minutes
- **200+ images**: 5-15 minutes

*Times vary based on image sizes and disk speed*

---

## Integration with CI/CD

### GitHub Actions Example

```yaml
name: Optimize Images

on:
  workflow_dispatch:

jobs:
  optimize:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run optimize-images
      - run: git add .
      - run: git commit -m "Auto: optimize images"
      - run: git push
```

### Vercel Pre-Build Hook

Add to `vercel.json`:

```json
{
  "buildCommand": "npm run optimize-images && npm run build"
}
```

---

## Statistics Tracking

The log file contains detailed statistics:

```
Total Images: 42
Successful: 42
Failed: 0

Conversion Metrics:
- Average compression: 75.43%
- Average quality: 78
- Average dimensions change: 0% (no scaling needed)

Code Updates:
- HTML files updated: 8
- CSS files updated: 12
- JS files updated: 15
- Total references: 127

Cleanup:
- Files deleted: 42
- Space freed: 2.46 GB
```

---

## Browser Support Verification

After optimization, WebP images are supported in:

```
✅ Chrome 23+ (desktop & mobile)
✅ Edge 18+ (desktop & mobile)
✅ Firefox 65+ (desktop & mobile)
✅ Safari 16+ (Mac) / 16+ (iOS)
✅ Samsung Internet 4+
✅ Opera 12.1+
```

For older browser support, implement fallbacks:

```jsx
<picture>
  <source srcset="/image.webp" type="image/webp">
  <source srcset="/image.jpg" type="image/jpeg">
  <img src="/image.jpg" alt="Description">
</picture>
```

---

**Last Updated:** 2024  
**Tested With:** Node.js 16-20, Sharp 0.32-0.33
