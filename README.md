# Microcraft Engineering – React Website

A professional multi-page React website for Microcraft Engineering, targeting European aerospace, defence, and industrial clients.

## Pages

| Page | Route (state) | Description |
|------|--------------|-------------|
| Home | `home` | Hero slider, strengths, CTA |
| About | `about` | Company story, stats |
| Capabilities | `capabilities` | CNC services, materials |
| Industries | `industries` | 5 industry sectors |
| Quality | `quality` | QMS, case studies |
| Certifications | `certifications` | ISO 9001, AS9100, ISO 14001 |
| Testimonials | `testimonials` | 6 reviews, platform ratings |
| Contact | `contact` | RFQ form, export info |

## Project Structure

```
microcraft-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Nav.js          ← Sticky navigation
│   │   ├── Footer.js       ← Site-wide footer
│   │   └── PageHero.js     ← Shared page hero banner
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Capabilities.js
│   │   ├── Industries.js
│   │   ├── Quality.js
│   │   ├── Certifications.js
│   │   ├── Testimonials.js
│   │   └── Contact.js
│   ├── App.js              ← Page router
│   ├── index.css           ← Global styles
│   └── index.js            ← Entry point
└── package.json
```

## Setup & Run

### Requirements
- Node.js 16+ 
- npm or yarn

### Install & Start

```bash
# Install dependencies
npm install

# Start development server (opens at http://localhost:3000)
npm start

# Build for production
npm run build
```

## Customisation

- **Company details**: Edit `src/pages/Contact.js` — update email, phone
- **Colors**: Edit CSS variables in `src/index.css` `:root` block
- **Images**: Replace Unsplash URLs with your own hosted images
- **Content**: Each page is a self-contained component in `src/pages/`

## Design

- Color palette: Navy (#0a1628), Steel Blue (#1a4a8a), Amber accent (#e8a020)
- Fonts: Barlow Condensed (headings) + Barlow (body) — loaded from Google Fonts
- Fully responsive — mobile hamburger menu included
- Image slider on home hero with auto-advance
