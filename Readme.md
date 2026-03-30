# Data Portfolio: Analysis & Web Solutions

This repository contains the source code for my professional digital portfolio. It highlights my transition from Full-Stack development into Data Analysis, showcasing my ability to translate complex datasets into actionable business insights.

## 🚀 Live Demo
[Insert your GitHub Pages link here]

## 🛠️ Tech Stack
* **Data Analytics:** Python (Pandas, NumPy, Matplotlib), SQL, Excel
* **Web Development:** HTML5, CSS3 (Custom Properties, Flexbox/Grid), Vanilla JavaScript
* **Tools:** Git, Jupyter Notebooks, Tableau

## ✨ Key Features
* **Dynamic Tagline:** A custom JavaScript typewriter effect highlighting my core competencies.
* **Case Study Framework:** A structured "Business Problem -> Methodology -> Results" layout for data projects.
* **Responsive UI:** A "Mobile-First" approach ensuring the portfolio looks perfect on phones, tablets, and desktops.
* **Interactive Resume:** Hover-animated skill pills and headers to keep recruiters engaged.

## 📂 Project Structure
```text
├── index.html       # Main content and semantic structure
├── style.css        # Professional Data-Analysis aesthetic (Dark Mode)
├── script.js        # Typewriter logic & UI micro-interactions
├── more-projects.html # Additional project listings page
└── /images          # Visualization exports and project screenshots
```

## 📝 What was updated
- Added a fixed `navbar` logo and fully visible hamburger menu toggle (desktop + mobile).
- Implemented a responsive slide-out side menu for navigation links (Projects, Labs, Contact, etc.).
- Fixed the “Lab Writeups” anchor target by ensuring `id="labs"` exists for navigation.
- Corrected resume “experience” links so they stay inside the card container and don’t overflow.
- Kept the featured projects section and added a new “See More Projects” card linking to `more-projects.html`.
- Created `more-projects.html` with additional project placeholders.
- Added explicit “More Projects” nav item to support additional project exploration.
## 🎨 Latest Enhancements (March 30, 2026)

### Contact Section Redesign
- **Modern Gradient Background:** Blue-to-purple gradient with subtle radial overlays
- **Glassmorphism Effect:** Cards with backdrop blur and transparency for modern aesthetic
- **Interactive Contact Cards:**
  - Email with copy-to-clipboard functionality
  - Phone with direct calling capability
  - WhatsApp integration for instant messaging
- **Enhanced Social Links:** Font Awesome icons with hover animations for LinkedIn, GitHub, Credly, and Email
- **Back-to-Top Button:** Smooth scroll functionality with hover effects
- **Responsive Design:** Optimized layouts for mobile, tablet, and desktop devices

### New Case Studies Page
- **Created `more-case-studies.html`:** Dedicated page for comprehensive case study showcases
- **5 Detailed Case Studies:**
  1. **E-Commerce Sales Insights** - Seasonal churn analysis and CLV optimization (15% retention improvement)
  2. **Healthcare Patient Analytics** - Predictive no-show model (87% accuracy, 31% reduction in no-shows)
  3. **Multi-Channel Marketing Attribution** - Data-driven budget optimization (23% ROI improvement)
  4. **Supply Chain Demand Forecasting** - Time-series analysis (94% forecast accuracy)
  5. **Customer Segmentation & Lifetime Value** - Behavioral clustering (18% retention improvement)
- **Each Case Study Features:**
  - Business Problem statement
  - Methodology and technical approach
  - Tech stack used
  - Project duration
  - Key insights and quantifiable results
- **Call-to-Action Section:** Encourages visitors to get in touch

### Navigation Improvements
- **Added "View More Case Studies" link** in the lab writeups section pointing to `more-case-studies.html`
- **Updated navbar** across all pages (index.html, more-projects.html, more-case-studies.html)
- **Fixed nav-toggle functionality:**
  - Added proper Font Awesome CDN CSS link (`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css`)
  - Fixed smooth scrolling code to handle non-existent anchor targets gracefully
  - Protected typeEffect function to only execute on pages with the typewriter element
  - Mobile menu now works seamlessly on all pages

### Technical Fixes
- **Font Awesome Integration:** Replaced placeholder kit link with working CDN for proper icon rendering
- **JavaScript Error Handling:** Fixed DOMContentLoaded event listener to check for element existence before calling functions
- **Cross-Page Compatibility:** Ensured all functionality works consistently across index.html, more-projects.html, and more-case-studies.html