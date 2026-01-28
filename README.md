# Āthariq Website

A minimal, dark-themed website for the Āthariq interactive games brand.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Railway Deployment

The site is configured for Railway deployment:

- **Build Command**: `npm run build`
- **Start Command**: `npm run preview`

The preview server automatically uses the `PORT` environment variable provided by Railway and binds to all interfaces with `--host`.

## Project Structure

```
├── index.html          # Main HTML file
├── style.css           # Global styles
├── main.js             # Router and navigation
├── pages/              # Page components
│   ├── home.js
│   ├── games.js
│   ├── about.js
│   └── studio.js
├── package.json
├── vite.config.js
└── railway.json        # Railway deployment config
```

## Design Principles

- Minimal, clean design
- Dark charcoal background (#1a1a1a)
- Off-white text (#f5f5f5)
- No bright colors or gradients
- Generous spacing and typography
- Mobile-first responsive layout




