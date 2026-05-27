# 🚀 Quick Start Guide - Image Optimization Script

## What This Script Does

- ✅ Finds all .jpg, .jpeg, .png images in your project
- ✅ Converts them to WebP format (60-80% smaller files)
- ✅ Automatically adjusts quality/dimensions to stay under 120 KB
- ✅ Updates all code references (.html, .css, .js, .jsx, etc.)
- ✅ Deletes original image files
- ✅ Creates a detailed log of all changes

## Step 1: Install Dependencies (2 minutes)

### Option A: Using npm (Recommended)

```bash
npm install sharp
```

### Option B: Using Batch Script (Windows)

Double-click: `scripts/install-dependencies.bat`

### Option C: Using Bash Script (Mac/Linux)

```bash
bash scripts/install-dependencies.sh
```

## Step 2: Test with Dry-Run Mode (Recommended!)

**IMPORTANT**: Always test first without making changes:

```bash
npm run optimize-images:dry-run
```

Or using direct node:

```bash
node scripts/optimize-images.js --dry-run
```

**What you'll see:**
- How many images will be converted
- Original size vs WebP size
- All code references that will be updated
- All files that will be deleted

**Review the output carefully!** If something looks wrong, stop here.

## Step 3: Create a Backup (Safety First!)

```bash
git add .
git commit -m "Backup before image optimization"
```

If anything goes wrong later, you can simply run:
```bash
git reset --hard HEAD~1
```

## Step 4: Run the Actual Optimization

Once you're satisfied with the dry-run output:

```bash
npm run optimize-images
```

Or directly:

```bash
node scripts/optimize-images.js
```

**This will:**
1. Create .webp versions of all images (takes 1-5 minutes depending on quantity)
2. Update all code references automatically
3. Delete original .jpg and .png files
4. Generate `image-optimization.log` with complete details

## Step 5: Verify Everything Works

### Check the Log File

```bash
cat image-optimization.log
```

You should see:
```
[2024-01-15T...] [SUCCESS] Found 42 image(s)
[2024-01-15T...] [SUCCESS] Converted 42 images
[2024-01-15T...] [SUCCESS] Updated 127 reference(s)
[2024-01-15T...] [SUCCESS] Deleted: 42 files
```

### Test Your Website Locally

```bash
npm run dev
```

Visit `http://localhost:3000` and check:
- ✓ All images load correctly
- ✓ No broken image errors in console
- ✓ Styling looks the same

### Check What Changed

```bash
git diff --stat
git diff src/
```

## Step 6: Deploy (Optional)

If everything looks good:

```bash
git add .
git commit -m "Optimize images: converted to WebP format"
git push
```

---

## Common Commands

| Command | Purpose |
|---------|---------|
| `npm run optimize-images:dry-run` | Test without making changes |
| `npm run optimize-images` | Run the actual optimization |
| `node scripts/optimize-images.js --dry-run` | Alternative syntax for dry-run |
| `node scripts/optimize-images.js` | Alternative syntax for running |

## What Gets Updated?

The script finds and updates images in:

```
✓ public/assets/img/...          (all image directories)
✓ public/images/...              (nested subdirectories)
✓ src/components/*.jsx           (component files)
✓ src/app/**/*.js                (app routes)
✓ Any .html, .css, .js file      (across entire project)
```

## Excluded Directories (Not Scanned)

```
✗ node_modules/        (dependencies)
✗ .next/               (Next.js build)
✗ .git/                (git data)
✗ dist/, build/        (build outputs)
```

## Expected Results

Based on your project size:

- **Before**: ~40 images, ~2-4 MB total
- **After**: ~40 WebP images, ~500-800 KB total
- **Savings**: 60-80% file size reduction
- **Time**: 1-5 minutes depending on image count

## Troubleshooting

### Issue: "Cannot find module 'sharp'"

**Solution:**
```bash
npm install sharp
```

### Issue: Images not updating in browser

**Solution:**
- Clear browser cache: `Ctrl+Shift+Delete`
- Restart dev server: `npm run dev`

### Issue: Some images failed conversion

**Solution:**
- Check `image-optimization.log` for errors
- Verify image files are not corrupted
- Run dry-run again to see details: `npm run optimize-images:dry-run`

### Issue: Want to rollback?

**Solution:**
```bash
git reset --hard HEAD~1
```

This restores original images and all code references.

## Performance Impact

✅ **What improves:**
- Page load speed: 10-40% faster
- Bandwidth usage: 60-80% less
- SEO: Better Core Web Vitals scores
- User experience: Faster image loading

## Next Steps (Optional)

After optimization:

1. **Add WebP fallback** for older browsers (configure in Next.js `<Image>` component)
2. **Implement lazy loading** for better performance
3. **Monitor Core Web Vitals** to see improvements
4. **Set up automated optimization** in your CI/CD pipeline

## Support

If you encounter issues:

1. Check `image-optimization.log` for detailed error messages
2. Run dry-run mode to understand what would happen: `npm run optimize-images:dry-run`
3. Review the full documentation: `scripts/OPTIMIZE_IMAGES_README.md`

---

**Ready to optimize?** Start with:
```bash
npm run optimize-images:dry-run
```

Then review the output and proceed with confidence! 🎉
