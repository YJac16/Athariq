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

## Deployment

The production site is a static Vite build on Vercel. `vercel.json` rewrites client routes to `index.html` so direct visits to `/games`, `/about`, and `/studio` load the app. Files that exist in the build, including `/assets` and images, are served as themselves.

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
└── vercel.json         # SPA rewrites for client routes
```

## Design Principles

- Minimal, clean design
- Dark charcoal background (#1a1a1a)
- Off-white text (#f5f5f5)
- No bright colors or gradients
- Generous spacing and typography
- Mobile-first responsive layout




