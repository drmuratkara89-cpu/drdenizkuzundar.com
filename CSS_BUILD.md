# CSS production build

This static site uses a committed, minified Tailwind CSS stylesheet at `assets/css/tailwind-built.css` instead of the Tailwind CDN runtime.

For future design changes:

1. Install pinned dependencies: `npm ci`
2. Build the static stylesheet: `npm run build:css`
3. Verify mobile breakpoints and navigation before publishing.
4. Commit `assets/css/tailwind-built.css` with any changed HTML/CSS classes.

Source: `assets/css/tailwind-input.css`. Config: `tailwind.config.cjs`, scans all HTML and JavaScript in the site. Custom styles remain in `assets/css/styles.css` and are loaded after Tailwind.

The public GitHub Pages deployment serves only static CSS, with no client-side Tailwind compiler.
