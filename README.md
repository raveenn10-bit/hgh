# APEX MOBILE HUB (Sri Lanka) 📱⚡
**Premier Phone Shop & Mobile Parts E-Commerce Demo Platform**

A full-stack, responsive electronics commerce web application crafted for the Sri Lankan mobile repair and retail market (inspired by reference structures like Vancon Mobiles Galle).

---

## 🌟 Key Highlights

- **Demonstration Store Branding:** APEX MOBILE HUB
- **Market & Currency:** Sri Lanka (LKR - Rs.)
- **Direct WhatsApp Checkout:** Instant, pre-filled, URL-encoded WhatsApp order summaries formatted with item breakdown, customer address, and total in LKR. No online payment gateway needed.
- **Centrally Editable:** Store name, logo, contact numbers, address, banners, and WhatsApp number editable directly through the browser.
- **Complete Taxonomy (15 Categories):**
  1. Smartphones (Apple iPhone, Samsung Galaxy, Xiaomi, Pixel)
  2. Displays / LCD (Original Service Pack AMOLED, Hard OLED, Incell)
  3. Batteries (0-Cycle High Capacity Plus, OEM Original cells)
  4. Charging Flex (Type-C sub-boards with fast charge IC, Lightning flex)
  5. Phone Parts (Camera lens glass, Loudspeakers, Vibrator motors, SIM trays)
  6. Housing & Frames (Middle chassis, rear glass covers)
  7. Repair Tools (Relife trinocular microscopes, Quick 861DW hot air rework stations, Mechanic T12 soldering irons, Sunshine UV lamps)
  8. Chargers & Adapters (20W PD, 65W GaN 3-port, 45W SFC 2.0)
  9. Earbuds & TWS (Anker Soundcore ANC, AirPods Pro Demo, Redmi Buds 5 Pro)
  10. Power Banks (Remax 20000mAh, Baseus Blade 100W laptop power banks)
  11. Cables (Baseus 100W braided Type-C, Anker MFi silicone Lightning)
  12. Phone Cases (MagSafe frosted matte with kickstand, heavy armor rugged)
  13. Screen Protectors (9H Super D matte gaming glass, 28° privacy anti-spy)
  14. Bluetooth Speakers (JBL Go 3 waterproof, Anker Motion 300 30W)
  15. Memory Cards (SanDisk Extreme Pro 128GB 200MB/s, Samsung EVO Plus 256GB)
- **45 Realistic Seed Demonstration Products** with full technical specifications, brand tags, model compatibility matrices, and LKR prices.
- **Bulletproof Visual Asset System:** 42+ custom vector SVG packshots + Unsplash photography + graceful fallback component so zero broken images ever appear.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom electric-blue palette & glassmorphism
- **Icons:** [Lucide React](https://lucide.dev/)
- **State & Persistence:** React Context + `localStorage` persistence

---

## 📁 Application Structure

```
├── public/
│   └── images/
│       ├── products/       # Vector SVG packshot assets
│       ├── banners/        # Hero and promotional banner assets
│       └── categories/     # Category taxonomy illustrations
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Global layout, AnnouncementBar, Header & Footer
│   │   ├── page.tsx        # Editorial Home page with hero, categories, best sellers
│   │   ├── shop/           # Shop page with live search, multi-filter & sorting
│   │   ├── products/[slug] # Dynamic product details, specs table & related items
│   │   ├── categories/     # Taxonomy directory (all 15 categories)
│   │   ├── cart/           # Shopping cart & WhatsApp order URL generator
│   │   ├── about/          # About Us & technician mission
│   │   ├── contact/        # Contact details & showroom location in Colombo
│   │   ├── admin/login/    # Demo admin login
│   │   └── admin/          # Interactive Admin dashboard (CRUD, stock toggles, settings)
│   ├── components/
│   │   ├── layout/         # Header, Footer, AnnouncementBar
│   │   ├── shop/           # ProductCard, QuickViewModal
│   │   └── ui/             # ProductImage with skeleton loader & fallback
│   ├── context/
│   │   ├── CartContext.tsx # Shopping cart state + WhatsApp URL builder
│   │   └── StoreContext.tsx# Central config & product catalog CRUD synced to localStorage
│   ├── data/
│   │   ├── categories.ts   # 15 category definitions
│   │   ├── config.ts       # Central store configuration (LKR, WhatsApp, Phone, Address)
│   │   └── products.ts     # 45 realistic demonstration products
│   └── types/              # TypeScript interfaces
```

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
# Open http://localhost:3000

# 3. Production build & test
npm run build
npm start
```

---

## 🔐 Demo Admin Access

- **URL:** `/admin` (or `/admin/login`)
- **Demo Email:** `admin@apexmobilehub.lk`
- **Demo Password:** `admin123`
- *Note:* Changes are persisted directly in browser `localStorage` for immediate client presentations without requiring an external backend database.
