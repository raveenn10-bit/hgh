import { Product } from '@/types';

export const products: Product[] = [
  // 1. SMARTPHONES
  {
    id: 'prod-iphone-15-pro',
    name: 'Apple iPhone 15 Pro (128GB) - Natural Titanium',
    slug: 'apple-iphone-15-pro-128gb-natural-titanium',
    category: 'smartphones',
    subcategory: 'iOS Devices',
    brand: 'Apple',
    modelCompatibility: ['A2848', 'A3101', 'A3102'],
    price: 365000,
    originalPrice: 389000,
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Display': '6.1-inch Super Retina XDR OLED 120Hz ProMotion',
      'Processor': 'Apple A17 Pro (3nm)',
      'Storage': '128GB NVMe',
      'Camera': '48MP Main + 12MP Telephoto 3x + 12MP Ultra-Wide',
      'Battery': '3274 mAh with 20W Fast Charging & MagSafe',
      'Build': 'Titanium Frame with Ceramic Shield Front'
    },
    description: 'The forged titanium design Apple iPhone 15 Pro with the groundbreaking A17 Pro chip, customizable Action button, and versatile pro camera system. Includes 1-year hardware warranty.',
    inStock: true,
    stockCount: 8,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['Apple', 'iPhone', 'Titanium', 'A17 Pro', '5G', 'Type-C'],
    rating: 4.9,
    reviewCount: 42,
    warranty: '1 Year Apple Care / Store Warranty',
    condition: 'Brand New'
  },
  {
    id: 'prod-samsung-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra 5G (256GB) - Titanium Gray',
    slug: 'samsung-galaxy-s24-ultra-5g-256gb',
    category: 'smartphones',
    subcategory: 'Android Devices',
    brand: 'Samsung',
    modelCompatibility: ['SM-S928B', 'SM-S928U'],
    price: 395000,
    originalPrice: 420000,
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Display': '6.8-inch Dynamic LTPO AMOLED 2X 120Hz 2600 nits',
      'Processor': 'Snapdragon 8 Gen 3 for Galaxy (4nm)',
      'RAM & Storage': '12GB RAM + 256GB UFS 4.0',
      'Camera': '200MP Main + 50MP 5x Periscope + 10MP 3x + 12MP UW',
      'Battery': '5000 mAh with 45W Fast Charging',
      'Features': 'Integrated S-Pen, Galaxy AI, Titanium Frame'
    },
    description: 'Galaxy AI is here. The premier Samsung flagship with built-in S Pen, anti-reflective Gorilla Armor glass, titanium armor frame, and quad telephoto zoom.',
    inStock: true,
    stockCount: 6,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: true,
    tags: ['Samsung', 'Galaxy AI', 'S24 Ultra', 'S-Pen', '200MP'],
    rating: 4.8,
    reviewCount: 35,
    warranty: '1 Year Company Warranty with TRCSL Approval',
    condition: 'Brand New'
  },
  {
    id: 'prod-xiaomi-14',
    name: 'Xiaomi 14 5G (512GB / 12GB RAM) - Black',
    slug: 'xiaomi-14-5g-512gb-black',
    category: 'smartphones',
    subcategory: 'Android Devices',
    brand: 'Xiaomi',
    modelCompatibility: ['23127PN0CG'],
    price: 245000,
    originalPrice: 260000,
    images: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Display': '6.36-inch LTPO OLED 120Hz Dolby Vision 3000 nits',
      'Processor': 'Qualcomm Snapdragon 8 Gen 3 (4nm)',
      'Camera': 'Leica Summilux Lens 50MP + 50MP Telephoto + 50MP UW',
      'Charging': '90W HyperCharge (100% in 31 mins) + 50W Wireless',
      'OS': 'Xiaomi HyperOS'
    },
    description: 'Compact size with flagship power. Featuring Leica optical lenses with Light Fusion 900 sensor and lightning fast 90W HyperCharge.',
    inStock: true,
    stockCount: 5,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    tags: ['Xiaomi', 'Leica', 'Snapdragon 8 Gen 3', 'HyperOS'],
    rating: 4.7,
    reviewCount: 19,
    warranty: '1 Year Software & Hardware Warranty',
    condition: 'Brand New'
  },
  {
    id: 'prod-pixel-8-pro',
    name: 'Google Pixel 8 Pro (128GB) - Bay Blue',
    slug: 'google-pixel-8-pro-128gb-bay-blue',
    category: 'smartphones',
    subcategory: 'Android Devices',
    brand: 'Google',
    modelCompatibility: ['GC3VE', 'G1MNW'],
    price: 285000,
    originalPrice: 305000,
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Display': '6.7-inch Super Actua LTPO OLED 1-120Hz 2400 nits',
      'Processor': 'Google Tensor G3 (4nm) with Titan M2 security',
      'Camera': '50MP Main + 48MP 5x Telephoto + 48MP Ultra-Wide',
      'Features': 'Best Take, Magic Editor, Thermometer Sensor',
      'Updates': '7 Years of OS, Security & Feature Drops'
    },
    description: 'Google AI excellence with the best photography experience on Android. Pure Pixel Android 14 with guaranteed 7 years of full software support.',
    inStock: true,
    stockCount: 4,
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: false,
    tags: ['Google', 'Pixel', 'Tensor G3', 'Clean Android', 'AI Camera'],
    rating: 4.8,
    reviewCount: 28,
    warranty: '6 Months Comprehensive Store Warranty',
    condition: 'Brand New'
  },

  // 2. DISPLAYS / LCD
  {
    id: 'prod-display-iphone-14-pro-max-oled',
    name: 'iPhone 14 Pro Max Hard OLED Replacement Display Assembly',
    slug: 'iphone-14-pro-max-hard-oled-display-assembly',
    category: 'displays-lcd',
    subcategory: 'OLED & Super AMOLED',
    brand: 'Apple',
    modelCompatibility: ['iPhone 14 Pro Max', 'A2651', 'A2893', 'A2894'],
    price: 48500,
    originalPrice: 56000,
    images: [
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Panel Type': 'Hard OLED with IC Transfer Support',
      'Resolution': '2796 x 1290 pixels at 460 ppi',
      'Refresh Rate': '120Hz ProMotion Responsive Touch',
      'Features': 'TrueTone IC Programmable, 3D Touch Compatible',
      'Grade': 'OEM Standard Grade AAA+'
    },
    description: 'High color accuracy replacement OLED screen for iPhone 14 Pro Max. Supports TrueTone reprogrammer and chip transfer to eliminate display warning messages.',
    inStock: true,
    stockCount: 14,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['LCD', 'OLED', 'iPhone 14 Pro Max', 'Screen Replacement', 'TrueTone'],
    rating: 4.9,
    reviewCount: 51,
    warranty: '6 Months Checking Warranty (Before Film Removal)',
    condition: 'OEM Original'
  },
  {
    id: 'prod-display-samsung-s23-ultra-amoled',
    name: 'Samsung Galaxy S23 Ultra Original Service Pack Dynamic AMOLED 2X Screen with Frame',
    slug: 'samsung-galaxy-s23-ultra-service-pack-screen-with-frame',
    category: 'displays-lcd',
    subcategory: 'Original Service Pack',
    brand: 'Samsung',
    modelCompatibility: ['SM-S918B', 'SM-S918U', 'SM-S9180'],
    price: 82000,
    originalPrice: 89000,
    images: [
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Type': 'Original Samsung Service Pack (GH82-31180A)',
      'Panel': 'Dynamic AMOLED 2X 120Hz Curved Display',
      'Assembly': 'Includes Pre-installed Frame, Speaker Mesh, Buttons',
      'Fingerprint': 'Ultrasonic in-display fingerprint sensor calibrated'
    },
    description: '100% Genuine Samsung Service Pack replacement module with factory fitted chassis. Direct fit with zero gap, authentic brightness and S-Pen pressure sensitivity.',
    inStock: true,
    stockCount: 7,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['Samsung', 'S23 Ultra', 'Service Pack', 'Dynamic AMOLED', 'Original Frame'],
    rating: 5.0,
    reviewCount: 38,
    warranty: '3 Months Checking Warranty',
    condition: 'OEM Original'
  },
  {
    id: 'prod-display-redmi-note-12-pro-oled',
    name: 'Redmi Note 12 Pro 5G Original OLED Display Assembly with Touch',
    slug: 'redmi-note-12-pro-5g-original-oled-display-assembly',
    category: 'displays-lcd',
    subcategory: 'OLED & Super AMOLED',
    brand: 'Xiaomi',
    modelCompatibility: ['22101316C', '22101316I', '22101316G'],
    price: 18500,
    originalPrice: 22000,
    images: [
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Display Tech': 'FHD+ OLED 120Hz 10-bit Color',
      'Peak Brightness': '900 nits',
      'Touch Sampling': '240Hz High Sensitivity Digitizer'
    },
    description: 'Crisp factory quality replacement OLED for Redmi Note 12 Pro. Vibrant colors, deep blacks and smooth touch response for gaming and daily use.',
    inStock: true,
    stockCount: 18,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['Xiaomi', 'Redmi', 'Note 12 Pro', 'OLED Display'],
    rating: 4.7,
    reviewCount: 29,
    warranty: '1 Month Checking Warranty',
    condition: 'Grade A High Copy'
  },
  {
    id: 'prod-display-iphone-11-incell',
    name: 'iPhone 11 Incell LCD Display Touch Screen Digitizer Assembly (JK / GX Brand)',
    slug: 'iphone-11-incell-lcd-display-assembly',
    category: 'displays-lcd',
    subcategory: 'Incell LCD Displays',
    brand: 'Apple',
    modelCompatibility: ['iPhone 11', 'A2111', 'A2223', 'A2221'],
    price: 8500,
    originalPrice: 10500,
    images: [
      'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Technology': 'High-Color Incell Liquid Retina HD',
      'TrueTone': 'Fully Programmable',
      'Bezel Size': 'Ultra-slim 1:1 original thickness'
    },
    description: 'Cost-effective high quality Incell LCD for iPhone 11. Easy installation with TrueTone support and responsive capacitive touch digitizer.',
    inStock: true,
    stockCount: 25,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['iPhone 11', 'Incell', 'Budget Repair', 'TrueTone'],
    rating: 4.6,
    reviewCount: 64,
    warranty: '1 Month Checking Warranty',
    condition: 'Grade A High Copy'
  },

  // 3. BATTERIES
  {
    id: 'prod-battery-iphone-13-high-capacity',
    name: 'iPhone 13 High Capacity 3550mAh Li-ion Battery with TI Gas Gauge IC',
    slug: 'iphone-13-high-capacity-3550mah-li-ion-battery',
    category: 'batteries',
    subcategory: 'High Capacity Plus',
    brand: 'Apple',
    modelCompatibility: ['iPhone 13', 'A2482', 'A2631', 'A2633', 'A2634'],
    price: 6800,
    originalPrice: 7900,
    images: [
      'https://images.unsplash.com/photo-1619725002198-6a689b72f41d?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Rated Capacity': '3550 mAh (10% higher than OEM standard)',
      'Cycle Count': '0 Cycles Brand New Cells',
      'Controller': 'Texas Instruments Gas Gauge Chip',
      'Certifications': 'CE, RoHS, UN38.3, MSDS'
    },
    description: 'Premium grade zero-cycle high capacity battery replacement for iPhone 13. Provides up to 2 extra hours of screen on time compared to standard replacement cells.',
    inStock: true,
    stockCount: 22,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['iPhone Battery', 'iPhone 13', 'High Capacity', '0 Cycle'],
    rating: 4.9,
    reviewCount: 47,
    warranty: '6 Months Full Replacement Warranty',
    condition: 'OEM Original'
  },
  {
    id: 'prod-battery-samsung-s21-ultra-original',
    name: 'Samsung Galaxy S21 Ultra Original Replacement Battery EB-BG998ABY (5000mAh)',
    slug: 'samsung-galaxy-s21-ultra-original-battery-5000mah',
    category: 'batteries',
    subcategory: 'Samsung Batteries',
    brand: 'Samsung',
    modelCompatibility: ['SM-G998B', 'SM-G998U', 'SM-G9980'],
    price: 5900,
    originalPrice: 6800,
    images: [
      'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Model Number': 'EB-BG998ABY',
      'Capacity': '5000 mAh / 19.35 Wh',
      'Voltage': '3.88V (Charge Limit 4.45V)',
      'Chemistry': 'Lithium-Ion Polymer'
    },
    description: 'Original grade battery cell for Samsung Galaxy S21 Ultra. Restores battery health back to 100% with stable voltage curve and full thermal cutoff protections.',
    inStock: true,
    stockCount: 16,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['Samsung Battery', 'S21 Ultra', 'EB-BG998ABY', '5000mAh'],
    rating: 4.8,
    reviewCount: 31,
    warranty: '6 Months Replacement Warranty',
    condition: 'OEM Original'
  },
  {
    id: 'prod-battery-redmi-note-11-bn5d',
    name: 'Xiaomi Redmi Note 11 Original Battery BN5D (5000mAh)',
    slug: 'xiaomi-redmi-note-11-original-battery-bn5d',
    category: 'batteries',
    subcategory: 'Xiaomi Batteries',
    brand: 'Xiaomi',
    modelCompatibility: ['Redmi Note 11', 'Redmi Note 11S', '2201117TG'],
    price: 4200,
    originalPrice: 4900,
    images: [
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Battery Code': 'BN5D',
      'Capacity': '5000 mAh (Typical)',
      'Fast Charge Support': '33W Pro Fast Charging',
      'Protection': 'Dual IC Overcharge & Short Circuit Safety'
    },
    description: 'Factory spec replacement battery for Redmi Note 11 and Note 11S. Tested for heat dissipation and rapid 33W charge cycles.',
    inStock: true,
    stockCount: 20,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['Redmi Battery', 'BN5D', 'Note 11', '5000mAh'],
    rating: 4.7,
    reviewCount: 22,
    warranty: '3 Months Replacement Warranty',
    condition: 'OEM Original'
  },
  {
    id: 'prod-battery-iphone-12-pro-max',
    name: 'iPhone 12 Pro Max OEM Replacement Battery (3687mAh)',
    slug: 'iphone-12-pro-max-oem-replacement-battery',
    category: 'batteries',
    subcategory: 'iPhone Batteries',
    brand: 'Apple',
    modelCompatibility: ['iPhone 12 Pro Max', 'A2342', 'A2410', 'A2411'],
    price: 6200,
    originalPrice: 7200,
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Capacity': '3687 mAh',
      'Cycles': '0 Cycle',
      'Adhesive': 'Includes Pre-cut Battery Pull Tabs',
      'Type': 'Li-ion Polymer'
    },
    description: 'Reliable 0-cycle OEM battery replacement for iPhone 12 Pro Max. Includes easy-pull battery adhesive strips for technician installation.',
    inStock: true,
    stockCount: 15,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    tags: ['iPhone 12 Pro Max', 'Battery', 'Apple Parts', '0 Cycle'],
    rating: 4.8,
    reviewCount: 19,
    warranty: '6 Months Replacement Warranty',
    condition: 'OEM Original'
  },

  // 4. CHARGING FLEX
  {
    id: 'prod-flex-iphone-14-charging-port',
    name: 'iPhone 14 OEM USB-C / Lightning Charging Port Sub-Flex Cable with Dual Microphones',
    slug: 'iphone-14-charging-port-sub-flex-cable',
    category: 'charging-flex',
    subcategory: 'Lightning Port Flex',
    brand: 'Apple',
    modelCompatibility: ['iPhone 14', 'A2649', 'A2881', 'A2882'],
    price: 4500,
    originalPrice: 5200,
    images: [
      'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Connector': 'Original Gold Plated Lightning Pinout',
      'Sensors': 'Integrated Bottom Microphone & Signal Antenna',
      'Color Options': 'Midnight, Starlight, Blue, Purple'
    },
    description: 'Fixes slow charging, unrecognized cable, microphone audio issues during calls, and weak cellular signal in iPhone 14.',
    inStock: true,
    stockCount: 12,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['iPhone 14', 'Charging Port', 'Flex Cable', 'Microphone Flex'],
    rating: 4.8,
    reviewCount: 16,
    warranty: '3 Months Checking Warranty',
    condition: 'OEM Original'
  },
  {
    id: 'prod-flex-samsung-a53-5g',
    name: 'Samsung Galaxy A53 5G USB Type-C Charging Port PCB Board with IC',
    slug: 'samsung-galaxy-a53-5g-usb-c-charging-board-pcb',
    category: 'charging-flex',
    subcategory: 'Type-C Flex Boards',
    brand: 'Samsung',
    modelCompatibility: ['SM-A536B', 'SM-A536U', 'SM-A5360'],
    price: 2800,
    originalPrice: 3500,
    images: [
      'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'IC Component': 'Fast Charge IC Included (Supports 25W Super Fast Charging)',
      'Sub-board': 'SIM Socket + Microphone + Type-C Connector',
      'Grade': 'Original Service Quality with Fast IC'
    },
    description: 'Complete lower sub-board with authentic charging IC. Supports Samsung 25W Super Fast Charging and clear audio microphone input.',
    inStock: true,
    stockCount: 22,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['Samsung A53', 'Charging Sub Board', 'Type-C', 'Fast Charge IC'],
    rating: 4.9,
    reviewCount: 24,
    warranty: '1 Month Checking Warranty',
    condition: 'OEM Original'
  },
  {
    id: 'prod-flex-redmi-note-10-pro',
    name: 'Xiaomi Redmi Note 10 Pro USB-C Fast Charging Port Board with IC',
    slug: 'xiaomi-redmi-note-10-pro-fast-charging-board',
    category: 'charging-flex',
    subcategory: 'Type-C Flex Boards',
    brand: 'Xiaomi',
    modelCompatibility: ['M2101K6G', 'M2101K6R'],
    price: 2200,
    originalPrice: 2800,
    images: [
      'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Charging Speed': 'Turbo 33W Fast Charging Protocol',
      'Ports': 'Type-C Port + Primary MIC + RF Antenna connector'
    },
    description: 'Restores rapid Turbo 33W charging capability and fixes loose port wobble on Redmi Note 10 Pro.',
    inStock: true,
    stockCount: 19,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    tags: ['Redmi Note 10 Pro', 'Charging Port', 'Xiaomi Flex'],
    rating: 4.7,
    reviewCount: 18,
    warranty: '1 Month Checking Warranty',
    condition: 'Grade A High Copy'
  },

  // 5. PHONE PARTS
  {
    id: 'prod-part-iphone-13-pro-camera-lens',
    name: 'iPhone 13 Pro / 13 Pro Max Rear Camera Lens Glass Ring Set (3 Pieces) with Adhesive',
    slug: 'iphone-13-pro-rear-camera-lens-glass-set',
    category: 'phone-parts',
    subcategory: 'Camera Modules',
    brand: 'Apple',
    modelCompatibility: ['iPhone 13 Pro', 'iPhone 13 Pro Max'],
    price: 1800,
    originalPrice: 2400,
    images: [
      'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Material': 'Sapphire Coated Crystal Glass with Bezel Rim',
      'Transparency': '99.9% Optical Clarity without Flash Glare',
      'Includes': 'Pre-cut 3M Adhesive Ring for Dustproof Seal'
    },
    description: 'Complete 3-lens replacement set for cracked outer camera glass. Protects internal camera sensor from dust and restores clear photo quality without blur.',
    inStock: true,
    stockCount: 30,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['Camera Glass', 'iPhone 13 Pro', 'Sapphire Glass', 'Lens Repair'],
    rating: 4.8,
    reviewCount: 35,
    warranty: 'Checking Warranty on Delivery',
    condition: 'Brand New'
  },
  {
    id: 'prod-part-s22-ultra-loudspeaker',
    name: 'Samsung Galaxy S22 Ultra Original Loudspeaker Buzzer Ringer Module',
    slug: 'samsung-galaxy-s22-ultra-original-loudspeaker-buzzer',
    category: 'phone-parts',
    subcategory: 'Loudspeakers',
    brand: 'Samsung',
    modelCompatibility: ['SM-S908B', 'SM-S908U'],
    price: 3600,
    originalPrice: 4200,
    images: [
      'https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Component': 'Lower Bottom Ringer Speaker Box',
      'Audio Quality': 'Dolby Atmos Tuned Original Sound Profile',
      'Enclosure': 'Sealed Acoustic Cavity'
    },
    description: 'Fixes crackling, muffled or no sound during music playback and speakerphone calls on Galaxy S22 Ultra.',
    inStock: true,
    stockCount: 11,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    tags: ['Samsung S22 Ultra', 'Loudspeaker', 'Ringer Buzzer', 'Audio Parts'],
    rating: 4.9,
    reviewCount: 14,
    warranty: '1 Month Checking Warranty',
    condition: 'OEM Original'
  },
  {
    id: 'prod-part-sim-trays-universal-set',
    name: 'Heavy Duty Metal SIM Card Tray Ejector Pin Kit (Pack of 10 with Keychain Ring)',
    slug: 'metal-sim-card-tray-ejector-pin-kit',
    category: 'phone-parts',
    subcategory: 'SIM Trays',
    brand: 'Apex Parts',
    modelCompatibility: ['Universal All Smartphones'],
    price: 450,
    originalPrice: 600,
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Material': 'Stainless Steel anti-bend pin',
      'Quantity': '10 pieces per pack + protective holder',
      'Fit': 'iPhone, Samsung, Xiaomi, Huawei, OnePlus, iPad'
    },
    description: 'Durable technician and consumer SIM removal tools. Precision tip fits all smartphone SIM and MicroSD card trays safely without bending.',
    inStock: true,
    stockCount: 100,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    tags: ['SIM Ejector', 'SIM Pin', 'Phone Tools', 'Universal'],
    rating: 4.9,
    reviewCount: 88,
    warranty: 'Lifetime Durability',
    condition: 'Brand New'
  },

  // 6. HOUSING & FRAMES
  {
    id: 'prod-housing-iphone-14-pro-chassis',
    name: 'iPhone 14 Pro Full Housing Chassis Middle Frame Assembly with Buttons & SIM Tray (Deep Purple)',
    slug: 'iphone-14-pro-full-housing-chassis-deep-purple',
    category: 'housing',
    subcategory: 'Full Chassis',
    brand: 'Apple',
    modelCompatibility: ['iPhone 14 Pro', 'A2890', 'A2650'],
    price: 24500,
    originalPrice: 28000,
    images: [
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Material': 'Surgical Grade Stainless Steel Frame with Matte Back Glass',
      'Included Components': 'Power/Volume Flex, Wireless Charging Coil, SIM Tray, Camera Rings',
      'Color': 'Deep Purple OEM Finish'
    },
    description: 'Transform bent, scratched, or heavily shattered iPhones into brand new condition with this pre-assembled housing chassis.',
    inStock: true,
    stockCount: 6,
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    tags: ['iPhone 14 Pro', 'Housing', 'Chassis', 'Deep Purple', 'Back Glass'],
    rating: 4.8,
    reviewCount: 20,
    warranty: 'Checking Warranty on Delivery',
    condition: 'OEM Original'
  },
  {
    id: 'prod-housing-samsung-s22-ultra-back-glass',
    name: 'Samsung Galaxy S22 Ultra Rear Glass Back Cover with Camera Lens & Pre-cut Adhesive (Phantom Black)',
    slug: 'samsung-galaxy-s22-ultra-rear-glass-back-cover-phantom-black',
    category: 'housing',
    subcategory: 'Back Glass',
    brand: 'Samsung',
    modelCompatibility: ['SM-S908B', 'SM-S908U'],
    price: 5200,
    originalPrice: 6500,
    images: [
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Glass Type': 'Corning Gorilla Glass Victus+ OEM Feel',
      'Finish': 'Satin Matte Texture with Camera Ring Moldings',
      'Adhesive': 'Pre-installed Waterproof 3M Die-cut Seal'
    },
    description: 'High quality replacement rear glass door for Galaxy S22 Ultra. Comes with camera lens and laser-cut adhesive for easy direct replacement.',
    inStock: true,
    stockCount: 15,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['Samsung Back Glass', 'S22 Ultra', 'Rear Housing', 'Phantom Black'],
    rating: 4.7,
    reviewCount: 27,
    warranty: 'Checking Warranty',
    condition: 'OEM Original'
  },

  // 7. REPAIR TOOLS
  {
    id: 'prod-tool-relife-rl-m3t-microscope',
    name: 'Relife RL-M3T Trinocular Stereo Microscope (7X-45X Continuous Zoom) with LED Ring Light & Base',
    slug: 'relife-rl-m3t-trinocular-stereo-microscope-7x-45x',
    category: 'repair-tools',
    subcategory: 'Microscopes',
    brand: 'Relife',
    modelCompatibility: ['PCB Motherboard Repair', 'Microsoldering Lab'],
    price: 78000,
    originalPrice: 85000,
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Optical Zoom': '0.7X - 4.5X Trinocular Head (Simul-Focal)',
      'Eyepieces': 'WF10X/20mm Wide Angle Field with Rubber Eyecups',
      'Illumination': '56-LED Adjustable Brightness Ring Light (6500K)',
      'Base': 'Large B1 Heavy Aluminum Workplate with Silicone Mat'
    },
    description: 'The golden standard microsoldering microscope for Sri Lankan mobile repair labs. Features high depth of field, clear optics, and trinocular port for HDMI camera connection.',
    inStock: true,
    stockCount: 5,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['Microscope', 'Relife RL-M3T', 'Microsoldering', 'Repair Lab', 'Trinocular'],
    rating: 5.0,
    reviewCount: 43,
    warranty: '1 Year Technician Hardware Warranty',
    condition: 'Brand New'
  },
  {
    id: 'prod-tool-quick-861dw-hot-air-station',
    name: 'Quick 861DW 1000W Lead-Free Digital Hot Air Rework Station (Original Genuine)',
    slug: 'quick-861dw-1000w-lead-free-digital-hot-air-rework-station',
    category: 'repair-tools',
    subcategory: 'Soldering & Heat Guns',
    brand: 'Quick',
    modelCompatibility: ['BGA Chip Desoldering', 'Motherboard IC Rework'],
    price: 68500,
    originalPrice: 75000,
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Power Output': '1000 Watts High Output Ceramic Heater',
      'Temperature Range': '100°C - 500°C Digital Calibration',
      'Airflow': '120L / min Brushless Vortex Blower',
      'Channels': '3 Programmable Preset Memory Channels (CH1, CH2, CH3)'
    },
    description: 'The world famous Quick 861DW hot air rework station. Ultra-fast heating in 3 seconds, magnetic sleep handle holster, and pin-point accuracy for CPU and NAND BGA rework.',
    inStock: true,
    stockCount: 7,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['Quick 861DW', 'Hot Air Rework', 'Soldering Station', 'BGA IC'],
    rating: 4.9,
    reviewCount: 39,
    warranty: '1 Year Warranty with Free Heating Element Spare',
    condition: 'Brand New'
  },
  {
    id: 'prod-tool-mechanic-soldering-iron',
    name: 'Mechanic T12 Pro Intelligent Precision Digital Soldering Station (72W)',
    slug: 'mechanic-t12-pro-digital-soldering-station-72w',
    category: 'repair-tools',
    subcategory: 'Soldering & Heat Guns',
    brand: 'Mechanic',
    modelCompatibility: ['Jumper Wire Repair', 'Component Soldering'],
    price: 19500,
    originalPrice: 23000,
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Heating Speed': 'Heats up to 350°C in just 4 Seconds',
      'Tip Standard': 'T12 Integrated Core Cartridge',
      'Display': '1.3-inch OLED Temperature Screen',
      'Sleep Mode': 'Auto Smart Standby Sensor'
    },
    description: 'Compact high-speed soldering station. Provides ultra-responsive temperature recovery when working on dense ground planes and micro jumper wires.',
    inStock: true,
    stockCount: 12,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: true,
    tags: ['Mechanic', 'T12 Pro', 'Soldering Station', 'Jumper Wire'],
    rating: 4.8,
    reviewCount: 26,
    warranty: '6 Months Electrical Warranty',
    condition: 'Brand New'
  },
  {
    id: 'prod-tool-sunshine-ss057-uv-lamp',
    name: 'Sunshine SS-057 UV Intelligent Green Oil Solder Mask Curing Lamp',
    slug: 'sunshine-ss-057-uv-green-oil-curing-lamp',
    category: 'repair-tools',
    subcategory: 'Screen Separators',
    brand: 'Sunshine',
    modelCompatibility: ['Jumper Wire Fix', 'UV Glue Curing', 'Green Oil Mask'],
    price: 3800,
    originalPrice: 4500,
    images: [
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Wavelength': '395nm High Intensity Optical UV',
      'Curing Time': 'Cures UV mask in 3 - 5 seconds',
      'Power': 'Type-C USB Powered with Built-in Timer'
    },
    description: 'Pocket-sized UV curing light essential for drying solder mask insulation green oil over jumper wire repairs and dot matrix Face ID flex repairs.',
    inStock: true,
    stockCount: 25,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    tags: ['UV Lamp', 'Sunshine', 'Green Oil', 'Motherboard Jumper'],
    rating: 4.7,
    reviewCount: 31,
    warranty: '3 Months Warranty',
    condition: 'Brand New'
  },

  // 8. CHARGERS & ADAPTERS
  {
    id: 'prod-charger-anker-20w-powerport',
    name: 'Anker PowerPort III 20W Cube USB-C PD Fast Wall Charger',
    slug: 'anker-powerport-iii-20w-cube-usb-c-charger',
    category: 'chargers',
    subcategory: '20W-30W PD Fast Chargers',
    brand: 'Anker',
    modelCompatibility: ['iPhone 12/13/14/15', 'iPad Pro', 'Samsung Galaxy'],
    price: 4900,
    originalPrice: 5800,
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Output': '20W PowerIQ 3.0 (USB Power Delivery)',
      'Size': 'Ultra-compact foldable 1-inch cube',
      'Safety': 'MultiProtect 11-point safety system'
    },
    description: 'Charges your iPhone up to 50% in just 25 minutes. 3x faster than standard 5W chargers in a tiny form factor that fits any pocket.',
    inStock: true,
    stockCount: 35,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['Anker', '20W PD', 'Fast Charger', 'iPhone Charger'],
    rating: 4.9,
    reviewCount: 78,
    warranty: '18 Months Anker Official Warranty',
    condition: 'Brand New'
  },
  {
    id: 'prod-charger-baseus-65w-gan',
    name: 'Baseus GaN5 Pro 65W Fast Charger (2x USB-C + 1x USB-A) with 100W Cable',
    slug: 'baseus-gan5-pro-65w-fast-charger-3-port',
    category: 'chargers',
    subcategory: '65W-100W GaN Chargers',
    brand: 'Baseus',
    modelCompatibility: ['MacBook Air/Pro', 'iPhone', 'Samsung 45W PPS', 'Laptops'],
    price: 9800,
    originalPrice: 11500,
    images: [
      'https://images.unsplash.com/photo-1622445268045-8f69dc976ff2?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Total Output': '65W GaN5 Technology',
      'Ports': 'Type-C1 (65W) + Type-C2 (30W) + USB-A (30W)',
      'Protocol': 'PD3.0, QC4+, PPS, AFC, FCP',
      'Bonus': 'Includes 100W E-Marker Type-C Cable'
    },
    description: 'Power your laptop, smartphone, and tablet simultaneously from one compact wall plug. Features GaN5 heat cooling architecture and Samsung 45W PPS fast charge.',
    inStock: true,
    stockCount: 18,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: true,
    tags: ['Baseus', '65W GaN', 'MacBook Charger', 'Laptop Power'],
    rating: 4.9,
    reviewCount: 45,
    warranty: '1 Year Replacement Warranty',
    condition: 'Brand New'
  },
  {
    id: 'prod-charger-samsung-45w-original',
    name: 'Samsung 45W Power Adapter with 5A Type-C Cable (EP-T4510)',
    slug: 'samsung-45w-power-adapter-ep-t4510',
    category: 'chargers',
    subcategory: '65W-100W GaN Chargers',
    brand: 'Samsung',
    modelCompatibility: ['Galaxy S24 Ultra', 'S23 Ultra', 'S22 Ultra', 'Galaxy Tab S9'],
    price: 8500,
    originalPrice: 9900,
    images: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Super Fast Charging': 'SFC 2.0 (45W Max)',
      'Cable': 'Original 1.8M 5A E-mark Type-C to Type-C cord',
      'Protection': 'Overcurrent, High Temperature, Leakage Safety'
    },
    description: 'Official Samsung 45W Super Fast Charging 2.0 power brick. Reaches peak 45W charging speed on compatible Galaxy Ultra smartphones and Tab devices.',
    inStock: true,
    stockCount: 20,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['Samsung Charger', '45W', 'EP-T4510', 'SFC 2.0'],
    rating: 4.8,
    reviewCount: 52,
    warranty: '6 Months Store Warranty',
    condition: 'Brand New'
  },

  // 9. EARBUDS & TWS
  {
    id: 'prod-earbuds-soundcore-life-p3',
    name: 'Anker Soundcore Life P3 ANC True Wireless Earbuds with BassUp & 6 Mics',
    slug: 'anker-soundcore-life-p3-anc-true-wireless-earbuds',
    category: 'earbuds',
    subcategory: 'ANC Earbuds',
    brand: 'Anker',
    modelCompatibility: ['Bluetooth 5.2 Universal', 'iOS', 'Android'],
    price: 18500,
    originalPrice: 22000,
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Noise Cancellation': 'Multi-Mode Hybrid ANC (Transport, Outdoor, Indoor)',
      'Drivers': '11mm Bio-composite Composite Diaphragm',
      'Battery Life': '10 Hours (35 Hours with Wireless Charging Case)',
      'Calls': '6 Microphones with AI Noise Reduction'
    },
    description: 'Incredible sound quality with custom 11mm oversized drivers and immersive Thumping BassUp technology. Full EQ customization via Soundcore App.',
    inStock: true,
    stockCount: 14,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['Anker', 'Soundcore', 'Life P3', 'ANC Earbuds', 'Wireless Earphones'],
    rating: 4.8,
    reviewCount: 63,
    warranty: '18 Months Anker Official Warranty',
    condition: 'Brand New'
  },
  {
    id: 'prod-earbuds-airpods-pro-2-demo',
    name: 'Apple AirPods Pro (2nd Generation) with MagSafe Case (USB-C) - Demo Stock',
    slug: 'apple-airpods-pro-2-magsafe-case-usb-c',
    category: 'earbuds',
    subcategory: 'ANC Earbuds',
    brand: 'Apple',
    modelCompatibility: ['iPhone', 'iPad', 'MacBook', 'Apple Watch'],
    price: 78000,
    originalPrice: 85000,
    images: [
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Chipset': 'Apple H2 Headphone Chip + U1 Case Chip',
      'Audio': 'Up to 2x more Active Noise Cancellation + Adaptive Audio',
      'Spatial Audio': 'Personalized Spatial Audio with Dynamic Head Tracking',
      'Case': 'MagSafe Case (USB-C) with Speaker and Lanyard Loop'
    },
    description: 'The pinnacle of wireless audio with H2 chip intelligence, pro-level noise cancellation, transparency mode, and dust/sweat resistance.',
    inStock: true,
    stockCount: 6,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: true,
    tags: ['Apple', 'AirPods Pro 2', 'USB-C', 'H2 Chip', 'Active Noise Cancelling'],
    rating: 4.9,
    reviewCount: 48,
    warranty: '1 Year Apple Warranty',
    condition: 'Brand New'
  },
  {
    id: 'prod-earbuds-redmi-buds-5-pro',
    name: 'Xiaomi Redmi Buds 5 Pro Hi-Res LDAC Dual Coaxial Drivers ANC Earbuds',
    slug: 'xiaomi-redmi-buds-5-pro-hi-res-ldac-anc',
    category: 'earbuds',
    subcategory: 'ANC Earbuds',
    brand: 'Xiaomi',
    modelCompatibility: ['Universal Bluetooth 5.3', 'LDAC Codec'],
    price: 15500,
    originalPrice: 18000,
    images: [
      'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Noise Cancellation': '52dB / 4kHz Ultra-Wide Frequency ANC',
      'Acoustics': 'Dual Coaxial Drivers (10mm Piezoelectric + 11mm Titanium)',
      'Audio Quality': 'Certified Hi-Res Audio Wireless with LDAC support',
      'Battery': '38 Hours Total with Quick Charge'
    },
    description: 'Flagship tier acoustics on a budget. Certified Hi-Res wireless streaming with LDAC codec and industry leading 52dB deep noise cancellation.',
    inStock: true,
    stockCount: 16,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: true,
    tags: ['Redmi Buds 5 Pro', 'Hi-Res', 'LDAC', '52dB ANC'],
    rating: 4.7,
    reviewCount: 30,
    warranty: '6 Months Xiaomi Local Warranty',
    condition: 'Brand New'
  },

  // 10. POWER BANKS
  {
    id: 'prod-powerbank-remax-20000',
    name: 'Remax RPP-292 20000mAh 22.5W Fast Charging Power Bank with Digital Display',
    slug: 'remax-rpp-292-20000mah-22-5w-power-bank',
    category: 'power-banks',
    subcategory: '20,000mAh High Capacity',
    brand: 'Remax',
    modelCompatibility: ['Universal Smartphones', 'iPhone', 'Android'],
    price: 7800,
    originalPrice: 9200,
    images: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Capacity': '20,000 mAh (74Wh) High Density Polymer Cell',
      'Output': '22.5W Huawei SuperCharge + 20W USB-C PD',
      'Display': 'Accurate Real-Time LED Percentage Meter',
      'Input': 'Dual Input (Type-C + Micro USB)'
    },
    description: 'The Sri Lankan crowd favorite power bank. Delivers up to 4 full charges for modern smartphones with transparent battery percentage indicator.',
    inStock: true,
    stockCount: 28,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['Remax', 'Power Bank', '20000mAh', '22.5W Fast Charge'],
    rating: 4.8,
    reviewCount: 92,
    warranty: '6 Months Replacement Warranty',
    condition: 'Brand New'
  },
  {
    id: 'prod-powerbank-baseus-blade-100w',
    name: 'Baseus Blade 100W 20000mAh Ultra-Thin Laptop Power Bank with HD Status Screen',
    slug: 'baseus-blade-100w-20000mah-laptop-power-bank',
    category: 'power-banks',
    subcategory: '20,000mAh High Capacity',
    brand: 'Baseus',
    modelCompatibility: ['MacBook Pro', 'Dell XPS', 'iPhone', 'Steam Deck', 'Laptops'],
    price: 24500,
    originalPrice: 28000,
    images: [
      'https://images.unsplash.com/photo-1622445268045-8f69dc976ff2?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Maximum Power': '100W Two-Way USB-C Fast Charging',
      'Thickness': '0.7-inch Ultra-Slim Profile for Laptop Bags',
      'Screen': 'Real-time Wattage, Voltage, Time-to-Empty Display',
      'Ports': '2x USB-C (100W) + 2x USB-A (30W)'
    },
    description: 'Charges high-power laptops like MacBook Pro 16" and Dell XPS at full 100W speed while on the move. Features real-time charging status telemetry.',
    inStock: true,
    stockCount: 8,
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    tags: ['Baseus', '100W Power Bank', 'Laptop Charger', 'Ultra Thin'],
    rating: 4.9,
    reviewCount: 34,
    warranty: '1 Year Warranty',
    condition: 'Brand New'
  },

  // 11. CABLES
  {
    id: 'prod-cable-baseus-100w-type-c',
    name: 'Baseus Cafule 100W (5A) Type-C to Type-C Nylon Braided Fast Charging Cable (2M)',
    slug: 'baseus-cafule-100w-type-c-to-type-c-braided-cable-2m',
    category: 'cables',
    subcategory: 'Type-C to Type-C 100W',
    brand: 'Baseus',
    modelCompatibility: ['MacBook', 'iPad Pro', 'Samsung Galaxy', 'Xiaomi', 'Pixel'],
    price: 2400,
    originalPrice: 2900,
    images: [
      'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Power Delivery': '100W (20V/5A) with E-Marker Chip',
      'Length': '2 Meters (6.6 Feet)',
      'Build': 'High-density ballistic nylon braiding + zinc alloy shell',
      'Data Rate': '480 Mbps high speed sync'
    },
    description: 'Tangle-free, heavy duty 100W cable built to last. Supports 5A high current for fast charging laptops, tablets, and flagship smartphones.',
    inStock: true,
    stockCount: 45,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['100W Cable', 'Baseus', 'Type-C', 'Nylon Braided', 'Fast Charge'],
    rating: 4.9,
    reviewCount: 81,
    warranty: '1 Year Replacement Warranty',
    condition: 'Brand New'
  },
  {
    id: 'prod-cable-anker-flow-lightning',
    name: 'Anker PowerLine III Flow Silicone USB-C to Lightning Cable (MFi Certified 0.9M)',
    slug: 'anker-powerline-iii-flow-silicone-lightning-cable',
    category: 'cables',
    subcategory: 'Type-C to Lightning',
    brand: 'Anker',
    modelCompatibility: ['iPhone 14/13/12/11/X/8', 'AirPods', 'iPad'],
    price: 4200,
    originalPrice: 4900,
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Texture': 'Super Soft Food-Grade Silicone Finish',
      'Bend Lifespan': '25,000 Bends Durability Tested',
      'Certification': 'Apple MFi Certified with C94 Connector'
    },
    description: 'Feels delightfully soft in hand and never tangles. Officially Apple MFi approved to safely charge iPhones at maximum 20W PD speed.',
    inStock: true,
    stockCount: 24,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['Anker', 'PowerLine Flow', 'Silicone Cable', 'MFi Certified', 'iPhone Cable'],
    rating: 4.9,
    reviewCount: 65,
    warranty: '18 Months Anker Warranty',
    condition: 'Brand New'
  },

  // 12. PHONE CASES
  {
    id: 'prod-case-iphone-15-pro-magsafe-frosted',
    name: 'Magnetic Frosted Matte Shockproof Case with Camera Metal Stand for iPhone 15 Pro',
    slug: 'magnetic-frosted-matte-shockproof-case-iphone-15-pro',
    category: 'phone-cases',
    subcategory: 'MagSafe Clear',
    brand: 'Apex Shield',
    modelCompatibility: ['iPhone 15 Pro (6.1-inch)'],
    price: 2800,
    originalPrice: 3500,
    images: [
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Magnets': 'N52 Strong Neodymium MagSafe Ring',
      'Drop Protection': 'Military-Grade 10FT Drop Tested Airbags',
      'Backplane': 'Anti-Fingerprint Translucent Frosted PC',
      'Kickstand': 'Zinc-Alloy Camera Ring Foldable Stand'
    },
    description: 'Sleek frosted back showcases the Apple logo without attracting smudges or yellowing. Built-in camera frame kicks out as a sturdy hands-free stand.',
    inStock: true,
    stockCount: 30,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: true,
    tags: ['MagSafe Case', 'iPhone 15 Pro', 'Kickstand', 'Frosted Matte'],
    rating: 4.8,
    reviewCount: 37,
    warranty: 'Checking Warranty',
    condition: 'Brand New'
  },
  {
    id: 'prod-case-samsung-s24-ultra-armor',
    name: 'Heavy Duty Hybrid Rugged Armor Defense Case with S-Pen Cutout for Galaxy S24 Ultra',
    slug: 'samsung-s24-ultra-rugged-armor-defense-case',
    category: 'phone-cases',
    subcategory: 'Armor Heavy Duty',
    brand: 'Apex Shield',
    modelCompatibility: ['Samsung Galaxy S24 Ultra (6.8-inch)'],
    price: 3200,
    originalPrice: 3900,
    images: [
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Construction': 'Dual Layer TPU Cushion + Hard Polycarbonate Shell',
      'Bezel Raised': '1.5mm Screen Lip & 2.0mm Camera Lens Shield',
      'Port Cover': 'Integrated Dust Flap for Type-C Port'
    },
    description: 'Ultimate rugged drop defense for your investment. Textured anti-slip side grips and reinforced bumper corners absorb heavy accidental falls.',
    inStock: true,
    stockCount: 22,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['Galaxy S24 Ultra', 'Armor Case', 'Shockproof', 'Rugged Cover'],
    rating: 4.7,
    reviewCount: 29,
    warranty: 'Checking Warranty',
    condition: 'Brand New'
  },

  // 13. SCREEN PROTECTORS
  {
    id: 'prod-screen-iphone-15-pro-9h-matte',
    name: '9H Super D Matte Anti-Glare Gaming Tempered Glass for iPhone 15 Pro (Edge-to-Edge)',
    slug: '9h-super-d-matte-anti-glare-tempered-glass-iphone-15-pro',
    category: 'screen-protectors',
    subcategory: '9H Tempered Glass',
    brand: 'Apex Shield',
    modelCompatibility: ['iPhone 15 Pro'],
    price: 1200,
    originalPrice: 1600,
    images: [
      'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Hardness': '9H Diamond-Coated Scratch Resistance',
      'Surface': 'Silky Smooth Matte Micro-Etched Oleophobic Layer',
      'Coverage': 'Full Screen 2.5D Curved Edge with Dust Filter Mesh'
    },
    description: 'Zero fingerprint stains and zero sunlight reflection. The preferred choice for mobile gamers demanding fluid touch swiping and crystal display clarity.',
    inStock: true,
    stockCount: 60,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['Screen Protector', 'Matte Glass', 'iPhone 15 Pro', 'Gaming Glass'],
    rating: 4.8,
    reviewCount: 74,
    warranty: 'Guaranteed Fitment Warranty',
    condition: 'Brand New'
  },
  {
    id: 'prod-screen-s24-ultra-privacy',
    name: 'Anti-Spy 28-Degree Privacy Tempered Glass for Samsung Galaxy S24 Ultra',
    slug: 'anti-spy-privacy-tempered-glass-samsung-s24-ultra',
    category: 'screen-protectors',
    subcategory: 'Privacy Filters',
    brand: 'Apex Shield',
    modelCompatibility: ['Samsung Galaxy S24 Ultra'],
    price: 1800,
    originalPrice: 2400,
    images: [
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Privacy Angle': 'Blocks Side Viewing Angle Beyond 28 Degrees',
      'Transparency': 'Front HD Clarity with True Colors',
      'Fingerprint': 'Optically Tuned for High Fingerprint Recognition'
    },
    description: 'Keep your confidential bank balances and WhatsApp chats private from prying eyes on buses and public places while keeping your screen safe from cracks.',
    inStock: true,
    stockCount: 40,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['Privacy Glass', 'Anti Spy', 'S24 Ultra Screen Protector'],
    rating: 4.7,
    reviewCount: 41,
    warranty: 'Checking Warranty',
    condition: 'Brand New'
  },

  // 14. SPEAKERS
  {
    id: 'prod-speaker-jbl-go-3',
    name: 'JBL Go 3 Ultra-Portable Waterproof & Dustproof Bluetooth Speaker (Original Genuine)',
    slug: 'jbl-go-3-portable-waterproof-bluetooth-speaker',
    category: 'speakers',
    subcategory: 'Portable Mini',
    brand: 'JBL',
    modelCompatibility: ['Bluetooth Universal'],
    price: 13500,
    originalPrice: 15500,
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Sound': 'JBL Pro Sound with Punchy Bass',
      'Waterproof': 'IP67 Waterproof and Dustproof Body',
      'Battery Life': 'Up to 5 Hours of Continuous Playtime',
      'Design': 'Edgy Street-style Fabric with Integrated Loop'
    },
    description: 'Grab and go. Bold JBL Pro Sound in a pocket-sized package ready for trips, hikes, and beach outings across Sri Lanka.',
    inStock: true,
    stockCount: 15,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['JBL', 'JBL Go 3', 'Bluetooth Speaker', 'IP67 Waterproof'],
    rating: 4.9,
    reviewCount: 58,
    warranty: '1 Year JBL Authorized Agent Warranty',
    condition: 'Brand New'
  },
  {
    id: 'prod-speaker-anker-motion-300',
    name: 'Anker Soundcore Motion 300 Wireless Hi-Res Portable Stereo Speaker (30W)',
    slug: 'anker-soundcore-motion-300-hi-res-stereo-speaker-30w',
    category: 'speakers',
    subcategory: 'Rugged Outdoor',
    brand: 'Anker',
    modelCompatibility: ['Bluetooth 5.3', 'LDAC Compatible'],
    price: 26500,
    originalPrice: 31000,
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Audio Output': '30W Stereo Sound with SmartTune Adaptive EQ',
      'Hi-Res Audio': 'Wireless LDAC 3X Detail Codec',
      'Water Resistance': 'IPX7 Fully Submersible Waterproof',
      'Battery': 'Up to 13 Hours Playtime'
    },
    description: 'Incredible acoustic depth that automatically adapts its sound profile whether hanging, standing, or lying flat. Features BassUp dual passive radiators.',
    inStock: true,
    stockCount: 9,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    tags: ['Anker Soundcore', 'Motion 300', '30W Speaker', 'Hi-Res LDAC'],
    rating: 4.9,
    reviewCount: 23,
    warranty: '18 Months Anker Official Warranty',
    condition: 'Brand New'
  },

  // 15. MEMORY CARDS
  {
    id: 'prod-memory-sandisk-extreme-pro-128gb',
    name: 'SanDisk Extreme PRO 128GB MicroSDXC UHS-I Card with SD Adapter (Up to 200MB/s V30 A2)',
    slug: 'sandisk-extreme-pro-128gb-microsdxc-card-200mbps',
    category: 'memory-cards',
    subcategory: '128GB High Speed',
    brand: 'SanDisk',
    modelCompatibility: ['Smartphones', 'Action Cams', 'Drones', 'Nintendo Switch'],
    price: 6800,
    originalPrice: 7900,
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Read Speed': 'Up to 200 MB/s SanDisk QuickFlow Technology',
      'Write Speed': 'Up to 90 MB/s for 4K UHD Video Recording',
      'Speed Class': 'C10, U3, V30, A2 App Performance',
      'Durability': 'Shockproof, Temperature-proof, Waterproof, X-ray proof'
    },
    description: 'Pro performance card engineered for 4K UHD video recording and blazing fast app execution on modern smartphones and cameras.',
    inStock: true,
    stockCount: 35,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    tags: ['SanDisk', 'Extreme Pro', 'MicroSD', '128GB', '4K Video'],
    rating: 4.9,
    reviewCount: 67,
    warranty: '5 Years SanDisk Official Replacement Warranty',
    condition: 'Brand New'
  },
  {
    id: 'prod-memory-samsung-evo-plus-256gb',
    name: 'Samsung EVO Plus 256GB MicroSDXC UHS-I Card with Adapter (130MB/s U3 A2 V30)',
    slug: 'samsung-evo-plus-256gb-microsdxc-card-130mbps',
    category: 'memory-cards',
    subcategory: '256GB Ultra Extreme',
    brand: 'Samsung',
    modelCompatibility: ['Smartphones', 'Tablets', 'Laptops', 'Gaming Consoles'],
    price: 9900,
    originalPrice: 11500,
    images: [
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Transfer Speed': 'Up to 130 MB/s Fast Transfer',
      'Capacity': '256GB (Stores over 70,000 Photos or 15 Hours 4K)',
      'Protection': '6-Proof Protection against Water, Magnet, Drop & Wear'
    },
    description: 'Massive dependable storage for photos, 4K videos, heavy gaming files, and offline media on Android phones and tablets.',
    inStock: true,
    stockCount: 25,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: true,
    tags: ['Samsung EVO Plus', '256GB', 'MicroSD', 'High Capacity Storage'],
    rating: 4.8,
    reviewCount: 44,
    warranty: '10 Years Samsung Limited Warranty',
    condition: 'Brand New'
  }
];
