# StellarMadic Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Visit http://localhost:3000
```

### Build for Production

```bash
pnpm build
```

## 📁 Project Structure

```
stellar-madic/
├── client/
│   ├── src/
│   │   ├── main.tsx           # React entry point
│   │   ├── App.tsx            # Main component
│   │   ├── index.css          # Tailwind + custom styles
│   │   ├── pages/
│   │   │   └── Home.tsx       # Home page
│   │   └── components/
│   │       └── ErrorBoundary.tsx
│   └── index.html             # HTML template
├── package.json               # Dependencies
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
├── vercel.json                # Vercel deployment config
└── README.md
```

## 🎨 Customization

### Update Content

Edit `client/src/pages/Home.tsx` to customize:
- Hero section heading and intro
- Principles/fit section
- Portfolio projects
- Contact section
- Footer

### Update Styles

Edit `client/src/index.css` to customize:
- Colors and typography
- Spacing and sizing
- Dark mode colors
- Responsive breakpoints

Use Tailwind CSS classes in components for additional styling.

### Update Contact

Replace `your-email@example.com` in Home.tsx with your actual email.

## 🌐 Deploy to Vercel

### Prerequisites
- GitHub account
- Vercel account (free)

### Steps

1. Push this code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Select your GitHub repository
5. Click "Import"
6. Vercel auto-detects the settings (Vite, `dist` output)
7. Click "Deploy"

That's it! Your site is live at `your-project.vercel.app`

### Add Custom Domain

1. In Vercel dashboard → Project Settings → Domains
2. Add your domain (e.g., `stellarmadic.com`)
3. Vercel shows DNS records to add
4. Add records at your domain registrar
5. Wait 24-48 hours for DNS propagation

## 📦 Technologies

- **React 18** - UI framework
- **Vite 7** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **TypeScript** - Type safety
- **Wouter** - Lightweight router

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally

## ❓ Troubleshooting

### Port 3000 already in use?
Vite will automatically use the next available port (3001, 3002, etc.)

### Vercel deployment fails?
Check the Vercel logs:
1. Go to Vercel dashboard
2. Click your project
3. Click "Deployments"
4. Click the failed deployment
5. Click "Logs" to see error details

### Styles not loading?
Make sure `client/src/index.css` is imported in `client/src/main.tsx`

## 📝 License

© 2024 StellarMadic. All rights reserved.
