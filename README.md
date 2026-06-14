# AI Farming Copilot

Website source for AI Farming Copilot.

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The Cloudflare-ready build is generated in:

- Static assets: `.output/public`
- Worker bundle: `.output/server`
- Wrangler config: `.output/server/wrangler.json`

## Cloudflare Deployment

Use the GitHub repository as the source for Cloudflare Pages/Workers.

- Build command: `npm run build`
- Build output directory: `.output/public`
- Framework preset: none/custom
