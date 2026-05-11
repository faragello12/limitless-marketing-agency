# Limitless Marketing Agency - Pages

This directory contains all the individual pages for the Limitless Marketing Agency website.

## Available Pages & Routes

### 1. Home Page (`/`)
- **Component**: `App.jsx`
- **Content**: Hero, Services, Brands, Timeline, Creative, Contact sections

### 2. About Us (`/about`)
- **Component**: `AboutUs.jsx`
- **Content**: Company overview, what sets them apart, clients, and final CTA

### 3. Social Media Marketing (`/social-media`)
- **Component**: `SocialMediaMarketing.jsx`
- **Content**: Social media services, who it's for, and CTA

### 4. Media Buying (`/media-buying`)
- **Component**: `MediaBuying.jsx`
- **Content**: Ad campaign services, platforms, what's included, and CTA

### 5. Website Creation (`/website-creation`)
- **Component**: `WebsiteCreation.jsx`
- **Content**: Website development services, what they build, process, and CTA

### 6. Influencer Campaigns & UGC (`/influencer-campaigns`)
- **Component**: `InfluencerCampaigns.jsx`
- **Content**: Influencer marketing services, what they do, use cases, and CTA

### 7. Contact Us (`/contact`)
- **Component**: `ContactUs.jsx`
- **Content**: Contact form, contact information, and final CTA

## Navigation

The Navbar automatically highlights the active page based on the current route. All CTAs and buttons navigate to the appropriate pages using React Router.

## Design Consistency

All pages maintain:
- Same design system as homepage
- Consistent layout structure
- Same container widths and spacing
- Same typography scale and colors
- Same button styles and hover effects
- Same animation logic
- Same responsive behavior
- Same Navbar and Footer

## Technical Implementation

- **React Router DOM**: For client-side routing
- **Active Link Detection**: Navbar uses `useLocation` to highlight current page
- **Consistent Components**: All pages share Navbar and Footer components
- **Lazy Loading**: Components are lazy-loaded for better performance