# JAWORA FINAL Website

This is the single final website package using the three approved slides in order: 1) Homepage, 2) Sportswear collage, 3) Neon brand poster.

## Files
- `index.html` — one page with three vertically stacked sections
- `css/styles.css` — responsive styling, neon gradient and hover animations
- `js/main.js` — mobile navigation, pointer glow and gentle desktop tilt
- `assets/` — three HD-upscaled poster images

## Image resolution
The supplied artwork was 1024×1536 pixels. Each image is upscaled to 3072×4608 pixels using Lanczos resampling, light sharpening and WebP quality 98. Upscaling increases pixel dimensions but cannot recover detail absent in the original. The 2:3 portrait ratio is preserved without cropping or stretching.

## GitHub Pages setup (beginner guide)
1. Visit https://github.com/ and sign in.
2. Click `+` → **New repository**.
3. Name it `jawora-sportswear`, select **Public**, then **Create repository**.
4. Extract this ZIP on your computer.
5. In the new repository select **Add file → Upload files**.
6. Upload the *contents* of the extracted folder (`index.html`, `css`, `js`, `assets`, README and checklist). Do not upload only the ZIP.
7. Confirm `index.html` is at the repository root, not inside a nested folder.
8. Click **Commit changes**.
9. Go to **Settings → Pages**.
10. Select **Deploy from a branch**, branch `main`, folder `/(root)`, then **Save**.
11. Wait a few minutes. The published link will appear in Pages, usually `https://YOUR-USERNAME.github.io/jawora-sportswear/`.

## Included effects
Neon ambient gradient, artwork hover shine, gentle desktop pointer tilt, cursor glow, smooth anchor scrolling, mobile menu, and reduced-motion accessibility support.

The text and products printed inside each poster are still part of the image. To animate those elements separately, they must be rebuilt as individual HTML/CSS components. This is a static front-end; cart, product database, admin panel and payment features are not included yet.
