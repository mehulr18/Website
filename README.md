# Personal CV site

A single-file static personal site. Drop in your own content, ship to GitHub Pages.

## Files

- `index.html` — the site. Self-contained, no build step, no framework.
- `cv.pdf` — your CV. Add this file (the Download CV button links to it).
- `explore.html` — the original 3-direction canvas (Editorial / Minimal / Terminal). Keep or delete.

## Editing

All content lives directly in `index.html`. Open it in any editor, find the section you want to change, and type. No npm, no build.

Things to swap in:
- `<title>` and `<meta name="description">` in `<head>`
- Hero: name, role, lede, meta-row stats
- Each `<section class="sec">` — about, experience, education, projects, skills, writing
- Contact list — email + social links
- Colophon footer

To swap the profile photo: replace the `<div class="photo">…</div>` block in the "The brief" section with `<img src="me.jpg" alt="" />` and add a `me.jpg` to the repo.

## Publishing to GitHub Pages

1. Create a new repo on GitHub (e.g. `your-username.github.io` for a root site, or any name for a project site).
2. Add `index.html` (and `cv.pdf` if you have one) to the repo root.
3. In the repo → **Settings → Pages**, set Source to your default branch / root.
4. Wait ~30 seconds. Your site is live at `https://your-username.github.io/` or `https://your-username.github.io/repo-name/`.

## Colors / typography

Tweak the `:root` block at the top of the `<style>` tag in `index.html`:

```css
:root {
  --ink:    #1c1814;  /* primary text */
  --paper:  #f3ece0;  /* page background */
  --paper-2:#ece2d0;  /* alt section background */
  --accent: #b6452a;  /* terracotta accent */
  --muted:  #6e5e4c;
  --soft:   #d9cdb8;
}
```

Fonts are loaded from Google Fonts (Newsreader + JetBrains Mono). To swap, change the `<link>` in `<head>` and the `font-family` rules.
