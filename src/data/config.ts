import { StoreConfig } from '@/types';

export const storeConfig: StoreConfig = {
  storeName: 'APEX MOBILE HUB',
  tagline: "Sri Lanka's Premier Mobile Parts, Repair Tools & Accessories Hub",
  currency: 'LKR',
  currencySymbol: 'Rs.',
  whatsappNumber: '+94771234567',
  phone: '+94 11 234 5678',
  email: 'sales@apexmobilehub.lk',
  address: 'No. 45, Galle Road, Colombo 04, Sri Lanka',
  city: 'Colombo 04',
  postalCode: '00400',
  announcementText: '⚡ DEMO STORE: Islandwide Delivery Across Sri Lanka | Direct WhatsApp Orders Available',
  isDemo: true,
  openingHours: 'Mon - Sat: 9:00 AM - 7:30 PM | Sunday: 10:00 AM - 4:00 PM',
  deliveryNotice: 'Prompt Islandwide Delivery via Courier (1-3 Business Days). COD & Bank Transfer Available.',
  socialLinks: {
    facebook: 'https://facebook.com/apexmobilehub.lk',
    instagram: 'https://instagram.com/apexmobilehub.lk',
    tiktok: 'https://tiktok.com/@apexmobilehub.lk',
    youtube: 'https://youtube.com/@apexmobilehub',
  },
};

export const defaultBanners = [
  {
    id: "banner-1",
    title: "Original OLED & AMOLED Displays",
    subtitle: "High precision LCD assemblies with 6-month checking warranty for Apple, Samsung & Xiaomi",
    linkText: "Shop Displays",
    linkUrl: "/shop?category=displays-lcd",
    bgGradient: "from-blue-900 via-indigo-900 to-slate-900",
    badge: "Top Technician Choice",
    image: "/images/banners/banner-display.svg",
  },
  {
    id: "banner-2",
    title: "Master Mobile Repair Tools & Stations",
    subtitle: "Professional microscopes, precision soldering stations, and thermal separation kits",
    linkText: "Explore Tools",
    linkUrl: "/shop?category=repair-tools",
    bgGradient: "from-slate-900 via-blue-950 to-blue-900",
    badge: "Lab Grade Equipment",
    image: "/images/banners/banner-tools.svg",
  },
  {
    id: "banner-3",
    title: "High-Capacity Replacement Batteries",
    subtitle: "0-Cycle Li-ion batteries with safety IC protection for iPhone & Android models",
    linkText: "Browse Batteries",
    linkUrl: "/shop?category=batteries",
    bgGradient: "from-blue-950 via-cyan-950 to-slate-900",
    badge: "100% Health Guaranteed",
    image: "/images/banners/banner-battery.svg",
  },
];
