# Shree Jee Jewellers

This is a static, client-only brochure site. Enquiries go directly to WhatsApp, phone, Instagram, and Google Maps; the site does not need a backend.

## Before publishing

The Lovable download contains metadata for the shop logo, hero image, and eight product images, but not the image files themselves. GitHub Pages cannot serve the Lovable-only URLs in that metadata.

Get the original image files from Lovable and place them in `src/assets/` with these exact names:

- `Logo.jpg`
- `hero-unsplash.jpg`
- `2.png` through `9.png`

The site bundles these local files into the build. The Pages workflow checks they are present before publishing.

## Publish on GitHub Pages

1. Create a GitHub repository and upload/push this project to its `main` branch.
2. In the repository, open **Settings → Pages** and choose **GitHub Actions** under **Build and deployment → Source**.
3. Push to `main` (or run **Deploy to GitHub Pages** from the Actions tab). The workflow builds the static site and publishes it.

The workflow sets the base path for either a normal project repository (`https://OWNER.github.io/REPOSITORY/`) or the account site repository (`https://OWNER.github.io/`).

## Run locally

Install [Bun](https://bun.sh/), then run:

```sh
bun install --frozen-lockfile
bun run dev
```

To build locally for a project repository, set `VITE_BASE_PATH` to `/<repository-name>/` before `bun run build`. Leave it unset for local root hosting or a custom domain.
