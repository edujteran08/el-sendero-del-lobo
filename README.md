<!-- markdownlint-disable MD033 -->
# 🐺 El Sendero del Lobo - Premium Nature & Gastronomy Website

A world-class premium website for **El Sendero del Lobo**, an exclusive eco-tourism destination combining breathtaking natural landscapes, authentic gastronomy, and unforgettable family experiences.

**🏆 Portfolio Project for Rafael's Agency** - Demonstrating award-winning web design comparable to Awwwards & CSS Design Awards standards.

---

## ✨ Project Overview

This website serves as the digital flagship for El Sendero del Lobo, showcasing how a local ecotourism destination can elevate its brand through exceptional design, immersive storytelling, and premium user experience.

### 🎯 Design Philosophy

- **Elegant & Organic** - Naturally refined aesthetics
- **Premium & Immersive** - Cinematic visuals and editorial layouts
- **Emotional & Authentic** - Storytelling focused on connection with nature
- **Accessible & Fast** - Performance-first responsive design

### 🌟 Key Features

- ✅ Full-screen cinematic hero section with smooth animations
- ✅ Advanced scroll-triggered animations and parallax effects
- ✅ Premium testimonials slider with auto-play
- ✅ Masonry gallery with hover effects
- ✅ Responsive mobile-first design
- ✅ Glassmorphism navigation
- ✅ SEO optimized semantic HTML
- ✅ Lazy loading and performance optimizations
- ✅ Accessibility best practices (WCAG compliant)
- ✅ Dark mode support

---

## 📁 Project Structure

```
el-sendero-del-lobo/
├── index.html                 # Main HTML file
├── css/
│   ├── styles.css            # Main styles & design system
│   ├── animations.css        # Animation keyframes & effects
│   └── responsive.css        # Mobile-first responsive design
├── js/
│   ├── main.js               # Core interactions & DOM handling
│   ├── animations.js         # Advanced scroll & hover animations
│   └── scroll-effects.js     # Parallax & scroll-linked effects
├── assets/
│   ├── logo.svg              # Brand logo
│   ├── favicon.ico           # Website favicon
│   ├── hero-image.jpg        # Hero section background
│   └── gallery-*.jpg         # Gallery images
├── README.md                 # This file
└── package.json             # Project metadata
```

---

## 🎨 Design System

### Color Palette

```css
/* Primary Colors - Earthy & Premium */
--forest-green: #4F6651;      /* Main brand color */
--deep-olive: #6C7B59;        /* Secondary accent */
--dark-brown: #3B2B23;        /* Typography */
--earth-beige: #D9CDBD;       /* Light accent */
--warm-cream: #F6F2EB;        /* Background */

/* Accent Colors */
--soft-gold: #D4AF37;         /* Premium accents */
--stone-gray: #8B8A86;        /* Secondary text */
```

### Typography

- **Headings**: Cormorant Garamond (serif) - Elegant, editorial
- **Body**: Inter (sans-serif) - Clean, modern, highly readable
- **Large typography** with generous spacing
- **Letter-spacing**: 0.3-2px for premium feel

---

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required - vanilla HTML/CSS/JavaScript
- Local server recommended for development

### Installation

```bash
# Clone the repository
git clone https://github.com/edujteran08/el-sendero-del-lobo.git

# Navigate to project
cd el-sendero-del-lobo

# Start local server (Python 3)
python -m http.server 8000

# Or use Node.js
npx http-server
```

Visit `http://localhost:8000` in your browser.

---

## 📱 Responsive Breakpoints

| Device | Breakpoint | Features |
|--------|-----------|----------|
| Mobile (Small) | 320px - 479px | Very small phones |
| Mobile | 480px - 767px | Standard mobile |
| Tablet | 768px - 1024px | iPad, tablets |
| Desktop | 1025px - 2559px | Laptops, desktops |
| Ultra-Wide | 2560px+ | Large monitors |

---

## 🎬 Animation System

### CSS Animations

Located in `css/animations.css`:

- `fadeInUp` - Fade in with upward movement
- `fadeInDown` - Fade in with downward movement
- `scaleIn` - Scale zoom effect
- `slideInLeft/Right` - Horizontal slide entrance
- `float` - Floating motion effect
- `pulse` - Pulsing opacity
- `glow` - Glowing shadow effect
- `morphShape` - Shape morphing animation

### JavaScript Animation Classes

**Scroll Triggers** (`js/scroll-effects.js`):
- Advanced parallax with depth control
- Section reveals on scroll
- Staggered animations
- Scroll-linked progress effects

**Hover Effects** (`js/animations.js`):
- 3D card rotation on hover
- Image zoom effects
- Button ripple animation
- Gradient shifts

---

## ⚡ Performance Optimizations

### Image Optimization

- Lazy loading with Intersection Observer
- Responsive image sizes
- Optimized image formats

### JavaScript Optimization

- Vanilla JavaScript (no frameworks)
- Debounce/throttle for scroll events
- Event delegation for performance
- Deferred script loading

### Network Optimization

- Gzip compression ready
- Minified assets
- Font subsetting
- CDN ready

---

## ♿ Accessibility Features

### WCAG 2.1 Compliance

- ✅ Semantic HTML5 structure
- ✅ ARIA labels for interactive elements
- ✅ Color contrast ratios > 4.5:1
- ✅ Keyboard navigation support
- ✅ Focus indicators visible
- ✅ Alt text on all images
- ✅ Reduced motion support
- ✅ Dark mode support

---

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest 2 | ✅ Full |
| Firefox | Latest 2 | ✅ Full |
| Safari | Latest 2 | ✅ Full |
| Edge | Latest 2 | ✅ Full |
| Mobile Safari | iOS 12+ | ✅ Full |

---

## 📦 Zero Dependencies

This project uses **pure HTML, CSS, and JavaScript** - no frameworks required.

```json
{
    "name": "el-sendero-del-lobo",
    "version": "1.0.0",
    "description": "Premium nature & gastronomy website",
    "author": "Rafael's Agency",
    "license": "MIT"
}
```

---

## 🔧 Customization Guide

### Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --forest-green: #4F6651;  /* Change brand color */
    --soft-gold: #D4AF37;      /* Change accent color */
}
```

### Typography

Update Google Fonts import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont" rel="stylesheet">
```

Then update CSS variables:

```css
--font-heading: 'Your Font', serif;
--font-body: 'Your Font', sans-serif;
```

### Content

Simply edit text in `index.html`. All sections use semantic HTML for easy editing.

### Images

Replace images in `assets/` folder while keeping the same filenames.

---

## 📊 Target Performance Metrics

### Google Lighthouse

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Core Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## 📞 Contact

**Rafael's Agency**
- 📧 Email: info@rafaelsagency.com
- 🌐 Website: Coming Soon

**El Sendero del Lobo**
- 📍 Location: Mountain Region
- 🐺 Tagline: Naturaleza & Gastronomía

---

## 📜 License

This project is provided as a portfolio demonstration for Rafael's Agency.

**Usage:**
- ✅ Personal use
- ✅ Client projects (with credit)
- ✅ Educational use
- ⚠️ Attribution required

---

<div align="center">

**Built with ❤️ by Rafael's Agency**

*Creating premium digital experiences for luxury brands*

🐺 El Sendero del Lobo - Naturaleza & Gastronomía

</div>
