export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string; // matches Category slug (e.g. 'smartphones', 'displays-lcd')
  subcategory?: string;
  brand: string;
  modelCompatibility?: string[];
  price: number; // in LKR
  originalPrice?: number; // for discount strikethrough
  images: string[];
  specifications: Record<string, string>;
  description: string;
  inStock: boolean;
  stockCount: number;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  tags: string[];
  rating: number; // 0 to 5
  reviewCount: number;
  warranty?: string;
  condition?: 'Brand New' | 'OEM Original' | 'Grade A High Copy' | 'Refurbished';
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string; // Lucide icon name (e.g. 'Smartphone', 'Tv', 'Wrench')
  iconName?: string; // Lucide icon name alias
  description: string;
  count: number;
  subcategories: string[];
  featuredImage?: string;
  image?: string;
}

export interface StoreConfig {
  storeName: string;
  tagline: string;
  currency: string;
  currencySymbol: string;
  whatsappNumber: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  postalCode?: string;
  announcementText: string;
  isDemo: boolean;
  openingHours?: string;
  deliveryNotice?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
    youtube?: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: string;
}

export interface FilterState {
  category?: string;
  brand?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  inStockOnly?: boolean;
  sortBy?: 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';
}

export interface PromoBanner {
  id: string;
  title: string;
  subtitle: string;
  linkText: string;
  linkUrl: string;
  bgGradient: string;
  badge?: string;
  image?: string;
}
