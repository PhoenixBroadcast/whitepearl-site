# White Pearl Tours & Travels — whitepearltravels.com

The website of White Pearl Tours & Travels (Mukkoottuthara, Erumeli, Kerala).
A plain static site: HTML, CSS and JavaScript, no build step.

## How it goes live

Hosted on Cloudflare (Workers, static assets), connected to this GitHub store.
**Every change saved to the `main` branch is live on whitepearltravels.com
about a minute later.** A change on any other branch gets its own preview
link for checking first.

- `public/` is the website. Nothing outside it is served.
- `wrangler.jsonc` is the Cloudflare setting.
- `public/_headers` adds security headers and caches the photos.

## Change the details

Almost everything is in **`public/content.js`**: phone numbers, WhatsApp,
email, Instagram, address, vehicles, services, popular trips and prices,
tours, pilgrim packages, hotels, reviews. Translations (Malayalam, Tamil,
Telugu, Kannada — drafts for a native speaker to check) are in
`public/i18n.js`.

Anything marked `confirm: true` or `₹ ____` still needs Jobin's answer. The
**Show what to confirm** button in the yellow strip at the top outlines it.

## Before the real launch

1. Fill in every `₹ ____` and `confirm: true` item.
2. Delete the yellow prototype strip (`<div class="proto" id="proto">` in
   `public/index.html`).
3. Delete the `<meta name="robots" content="noindex">` line in
   `public/index.html`, so Google can list the site.
4. Get the customers' OK for `public/img/airport-group.jpg`.

## Try it on this computer

```
npx wrangler dev
```
