# Homestead Roots — Cloud Kitchen Website

> **Homemade Food. Heartfelt Taste.**  
> *A Classic Taste • A Homely Touch*

A modern, premium, and fully responsive cloud kitchen website designed for **Homestead Roots**, offering fresh 100% vegetarian homemade meals, breakfast, lunch, dinner, artisanal cakes, baked goods, desserts, and catering services.

---

## 📁 Project Structure

```text
cloud-kitchen/
│
├── index.html                  # Main website markup (Semantic, SEO-friendly HTML5)
│
├── css/
│   └── style.css               # Design system, responsive styles, animations & theme variables
│
├── js/
│   └── script.js               # Interactive menu tabs, sticky navigation, animations & WhatsApp link handler
│
├── assets/
│   ├── images/
│   │   ├── hero/               # Hero background food spreads
│   │   │   └── hero_food_bg_1788940767447.jpg
│   │   │
│   │   ├── menu/               # Food photography for breakfast, lunch & snacks
│   │   │   ├── menu_poha_1788940780094.jpg
│   │   │   ├── menu_pasta_1788940919417.jpg
│   │   │   └── menu_sandwich_1788940943547.jpg
│   │   │
│   │   ├── cakes/              # Bakery and celebration cake imagery
│   │   │   ├── cake_chocolate_truffle_1788940960636.jpg
│   │   │   └── cake_pineapple_1788940978706.jpg
│   │   │
│   │   ├── branding/           # Official Homestead Roots logos and badges
│   │   │   ├── logo-badge.png
│   │   │   └── logo-horizontal.png
│   │   │
│   │   └── other/              # Placeholder for additional graphics and promotional media
│   │
│   ├── icons/                  # Reserved for custom SVG icons or favicon assets
│   └── videos/                 # Reserved for kitchen reels or promotional videos
│
└── README.md                   # Project documentation & reference guide
```

---

## 🎨 Visual Identity & Color Palette

- **Primary Canvas:** Warm White (`#FFFFFF`, `#FDF8F3`) & Soft Cream Beige (`#F5EDE0`, `#FAF4EC`)
- **Brand Brown:** Warm Earth Brown (`#8B5E3C`) & Roasted Brown (`#A07848`)
- **Deep Contrast:** Rich Dark Chocolate (`#3E2010`, `#5C3D20`)
- **Warm Accents:** Honey Gold (`#C8A97A`, `#F0D5A8`) & Fresh Veg Green (`#2E7D32`)
- **Typography:**
  - Headings: *Playfair Display* (Classic, warm, artisanal serif)
  - Body & UI: *Inter* & *Lato* (Clean, legible, modern sans-serif)

---

## 🍽️ Website Sections

1. **Header & Sticky Navigation:**
   - Official horizontal logo (`assets/images/branding/logo-horizontal.png`).
   - Sticky blur effect on scroll with active section tracking (ScrollSpy).
   - Mobile-optimized drawer menu with animated hamburger toggle.
2. **Hero Section:**
   - Full-width hero background food photography.
   - Circular brand emblem badge (`assets/images/branding/logo-badge.png`).
   - Slogan: *"A Classic Taste • A Homely Touch"*.
   - Direct CTA buttons: **Order Now** and **Explore Our Menu**.
   - Key stats: `100% Vegetarian`, `Freshly Prepared Daily`, and `Home Style Cooking`.
3. **About Us:**
   - Brand story and kitchen philosophy.
   - Dual-image photo stack with floating guarantee badge.
   - 6 Core Pillars: *100% Vegetarian*, *Freshly Prepared*, *Homemade Taste*, *Hygienic Kitchen*, *Quality Ingredients*, and *Made With Care*.
4. **Interactive Menu:**
   - Filter tabs: **Breakfast**, **Lunch**, **Dinner**, **Snacks**, **Cakes & Bakes**, and **Desserts**.
   - Elegant food cards with image hover zoom, vegetarian tags, and direct order buttons.
5. **Cakes & Bakery Showcase:**
   - Feature displays for Chocolate Truffle and Pineapple Cream Cakes.
   - Quick-select cards for Red Velvet, Black Forest, Butterscotch, and Mango Cake.
   - Bakery chips for Cookies, Brownies, Muffins, and Donuts.
6. **Desserts Section:**
   - Sweet treat cards with soft hover elevation and quick enquiry hooks.
7. **Catering & Events:**
   - Dedicated celebration section for *Birthday Parties*, *Kitty Parties*, *Corporate Events*, *Family Gatherings*, and *Small Functions*.
8. **Why Choose Us (Trust Badges):**
   - 6 high-impact trust benefit cards.
9. **Order & Contact Section:**
   - High-visibility **Order on WhatsApp** CTA.
   - Operational hours: 7 AM – 10 PM daily.
   - 3-step visual ordering guide.
10. **Footer & Quick Links:**
    - Brand summary, full site directory, Instagram link, and 100% pure vegetarian emblem.
11. **Floating WhatsApp Button:**
    - Persistent bottom-right floating quick-order button with attention pulse animation.

---

## 📱 WhatsApp Integration

All order buttons are integrated with dynamic WhatsApp links connecting to:
- **Phone / WhatsApp:** `+91-80766-86588`
- Clicking **"Order →"** on any menu item automatically pre-populates a WhatsApp message specifying the item name for swift ordering.
- **Instagram:** [@homesteadroots06](https://www.instagram.com/homesteadroots06)

---

## 🚀 How to Run Locally

1. Simply double-click `index.html` or open it in any modern web browser (Google Chrome, Firefox, Safari, Edge).
2. Or use any local static server (e.g. VS Code Live Server, Python HTTP server):
   ```bash
   # Using Python:
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000` in your browser.

---

## 📄 License & Brand Notice

© 2024 Homestead Roots. All rights reserved.  
Tasty & delicious 100% homemade products. Prepared with love in Nagpur.
