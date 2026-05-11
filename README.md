# Limitless Marketing Agency Website

A modern, cinematic marketing agency website built with React, Vite, and Tailwind CSS.

## 🚀 Live Demo

The website is running at: **http://localhost:5175/**

## 📄 Pages & Navigation

### Available Routes:
- **`/`** - Home Page (Hero, Services, Brands, Timeline, Creative, Contact)
- **`/about`** - About Us (Company overview & what sets them apart)
- **`/social-media`** - Social Media Marketing Services
- **`/media-buying`** - Media Buying & Advertising Services
- **`/website-creation`** - Website Development Services
- **`/influencer-campaigns`** - Influencer Marketing & UGC Services
- **`/contact`** - Contact Form & Information

### Navigation Features:
- ✅ **Active Link Highlighting** - Navbar shows current page
- ✅ **Responsive Design** - Works on all devices
- ✅ **Smooth Animations** - Framer Motion powered
- ✅ **Consistent Design** - Same look & feel across all pages

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **Vite** - Fast build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lenis** - Smooth scrolling

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation with active states
│   ├── Footer.jsx      # Footer with routing links
│   ├── ServicesSection.jsx
│   ├── ContactSection.jsx
│   └── ...
├── pages/              # Individual page components
│   ├── AboutUs.jsx
│   ├── SocialMediaMarketing.jsx
│   ├── MediaBuying.jsx
│   ├── WebsiteCreation.jsx
│   ├── InfluencerCampaigns.jsx
│   ├── ContactUs.jsx
│   ├── index.js        # Page exports
│   └── README.md       # Pages documentation
├── hooks/              # Custom hooks
├── lib/                # Utilities & motion configs
├── Router.jsx          # React Router setup
├── App.jsx             # Home page component
├── main.jsx            # App entry point
└── styles.css          # Global styles
```

## 🎨 Design System

### Colors:
- **Primary**: Gold (`#E5B133`)
- **Background**: Dark (`#161616`, `#222222`)
- **Text**: White with opacity variations

### Typography:
- **Font**: Custom font stack
- **Sizes**: Responsive scale (text-4xl to text-7xl)
- **Weights**: Regular to bold

### Components:
- **Buttons**: Gold background with hover effects
- **Cards**: Dark background with gold borders on hover
- **Forms**: Custom styled inputs with focus states

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:5175`

## 📱 Responsive Design

- **Mobile**: Single column layouts, smaller text
- **Tablet**: 2-column grids, medium text
- **Desktop**: Multi-column layouts, large text
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)

## ✨ Features

- **Cinematic Loading** - Animated intro sequence
- **Smooth Scrolling** - Lenis-powered smooth scroll
- **Magnetic Cursor** - Interactive cursor effects
- **Scroll Progress** - Visual progress indicator
- **Floating Icons** - Animated background elements
- **Form Validation** - Contact form with proper validation
- **SEO Friendly** - Semantic HTML5 structure

## 🔗 Navigation Flow

```
Home (/) → Services → Social Media (/social-media)
                    → Media Buying (/media-buying)
                    → Website Creation (/website-creation)
                    → Influencer Campaigns (/influencer-campaigns)
                    → Contact (/contact)

About (/about) → Contact (/contact)
All CTAs → Contact (/contact)
```

## 📞 Contact

For inquiries: info@limitlessmarketingagency.net

---

**Built with ❤️ for Limitless Marketing Agency**