# Triller Media Website

A modern, minimal, and high-end website for Triller Media, a Dubai-based creative agency focused on helping brands and creators look as good as they deserve.

## Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Luxury Design**: Sleek, confident aesthetic with strong typography and structured spacing
- **Smooth Animations**: Framer Motion for page transitions and micro-interactions
- **Responsive**: Fully responsive design optimized for all devices
- **SEO Optimized**: Server-side rendering and proper meta tags

## Tech Stack

- **Framework**: Next.js 15 (App Router) with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide Icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
trillermedia/
├── app/
│   ├── about/          # About page
│   ├── clients/        # Clients & Partners page
│   ├── contact/        # Contact page
│   ├── services/       # Services page
│   ├── work/           # Work/Portfolio page
│   ├── globals.css     # Global styles and theme
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── navigation.tsx  # Navigation component
│   ├── footer.tsx      # Footer component
│   └── ui/             # shadcn/ui components
└── lib/
    └── utils.ts        # Utility functions
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

The site will be live with:
- Automatic HTTPS
- Global CDN
- Automatic deployments on push
- Preview deployments for PRs

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `.next` folder.

## Customization

### Colors

The luxury color palette is defined in `app/globals.css`:
- **Matte Black**: Primary text and buttons
- **Off-White**: Background and primary foreground
- **Metallic Tones**: Accent colors for highlights

### Typography

The site uses Geist Sans and Geist Mono fonts from Next.js, optimized for readability and luxury aesthetics.

## License

© 2024 Triller Media. All rights reserved.
