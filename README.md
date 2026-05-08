# FreeFileConverter.org

Free, unlimited, browser-based file converter. All conversions happen client-side — no files are ever uploaded to a server.

## Live site

[freefileconverter.org](https://freefileconverter.org)

## Supported conversions

| Category | Formats |
|---|---|
| Images | PNG ↔ JPG ↔ WebP ↔ BMP ↔ GIF ↔ ICO |
| Data | CSV ↔ JSON ↔ TSV ↔ XML |
| Documents | TXT ↔ Markdown ↔ HTML |
| CAD / Vector | DXF → SVG, SVG → PNG |

## How it works

Pure static HTML/CSS/JS. No build step, no dependencies, no server-side processing. Conversions use:

- **Images** — HTML5 Canvas API
- **Data** — Native JS parsing and serialization
- **Documents** — Regex-based Markdown/HTML transformers
- **DXF** — Custom lightweight DXF parser (lines, arcs, circles, polylines)

## Stack

- **Hosting**: Cloudflare Pages
- **Fonts**: Google Fonts (Syne, IBM Plex Mono, Instrument Serif)
- **Monetization**: Infolinks + clean display banner placements
- **Analytics**: Cloudflare Web Analytics

## File structure

```
index.html          — main converter tool
blog.html           — blog index
about.html          — about page
privacy.html        — privacy policy
feedback.js         — feedback toast + exit intent modal
sitemap.xml
robots.txt
ads.txt
og-image.svg        — 1200×630 Open Graph image
favicon.svg         — reference (inline base64 used in HTML)
.well-known/
  security.txt
```

## Issues / Feedback

[github.com/SMSNYDER81/freefileconverter/issues](https://github.com/SMSNYDER81/freefileconverter/issues)

## License

MIT
