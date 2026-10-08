const fs = require('fs');
const path = require('path');

const PRODUCTS_DIR = path.join(__dirname, '..', 'public', 'images', 'products');
const BANNERS_DIR = path.join(__dirname, '..', 'public', 'images', 'banners');
const CATEGORIES_DIR = path.join(__dirname, '..', 'public', 'images', 'categories');
const PUBLIC_DIR = path.join(__dirname, '..', 'public', 'images');

[PRODUCTS_DIR, BANNERS_DIR, CATEGORIES_DIR, PUBLIC_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

function wrapPackshot(title, brandTag, innerSvg, accentColor = '#0066FF', lightColor = '#38BDF8') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.18"/>
      <stop offset="45%" stop-color="#0F172A" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#020617" stop-opacity="1"/>
    </radialGradient>
    <radialGradient id="pedestal" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.25"/>
      <stop offset="40%" stop-color="#020617" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#020617" stop-opacity="0"/>
    </radialGradient>
    <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="24" stdDeviation="28" flood-color="#000000" flood-opacity="0.65"/>
    </filter>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.45"/>
    </filter>
    <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <linearGradient id="titaniumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E2E8F0"/>
      <stop offset="25%" stop-color="#94A3B8"/>
      <stop offset="50%" stop-color="#CBD5E1"/>
      <stop offset="75%" stop-color="#64748B"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FEF08A"/>
      <stop offset="50%" stop-color="#EAB308"/>
      <stop offset="100%" stop-color="#A16207"/>
    </linearGradient>
    <linearGradient id="pcbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#064E3B"/>
      <stop offset="50%" stop-color="#065F46"/>
      <stop offset="100%" stop-color="#022C22"/>
    </linearGradient>
    <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.25"/>
      <stop offset="35%" stop-color="#FFFFFF" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${lightColor}"/>
      <stop offset="100%" stop-color="${accentColor}"/>
    </linearGradient>
  </defs>

  <!-- Studio Background -->
  <rect width="800" height="800" fill="url(#bgGlow)"/>

  <!-- Subtle Studio Grid -->
  <g opacity="0.07" stroke="#94A3B8" stroke-width="1">
    <line x1="100" y1="0" x2="100" y2="800"/>
    <line x1="200" y1="0" x2="200" y2="800"/>
    <line x1="300" y1="0" x2="300" y2="800"/>
    <line x1="400" y1="0" x2="400" y2="800"/>
    <line x1="500" y1="0" x2="500" y2="800"/>
    <line x1="600" y1="0" x2="600" y2="800"/>
    <line x1="700" y1="0" x2="700" y2="800"/>
    <line x1="0" y1="100" x2="800" y2="100"/>
    <line x1="0" y1="200" x2="800" y2="200"/>
    <line x1="0" y1="300" x2="800" y2="300"/>
    <line x1="0" y1="400" x2="800" y2="400"/>
    <line x1="0" y1="500" x2="800" y2="500"/>
    <line x1="0" y1="600" x2="800" y2="600"/>
    <line x1="0" y1="700" x2="800" y2="700"/>
  </g>

  <!-- Ambient Floor Shadow -->
  <ellipse cx="400" cy="690" rx="280" ry="42" fill="url(#pedestal)"/>

  <!-- Product Asset Graphic -->
  <g id="packshot-object" filter="url(#dropShadow)">
    ${innerSvg}
  </g>

  <!-- Technical Packshot Watermark & Badge -->
  <g opacity="0.75">
    <rect x="40" y="40" width="160" height="26" rx="6" fill="#0F172A" stroke="#1E293B" stroke-width="1"/>
    <circle cx="54" cy="53" r="4" fill="${accentColor}"/>
    <text x="66" y="57" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#94A3B8" letter-spacing="1">APEX VERIFIED</text>
  </g>

  <g opacity="0.6" transform="translate(620, 40)">
    <text x="140" y="16" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600" fill="#64748B" letter-spacing="1.5">${brandTag.toUpperCase()}</text>
  </g>

  <!-- Bottom Spec Label -->
  <g opacity="0.85" transform="translate(400, 755)">
    <text text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#CBD5E1" letter-spacing="0.5">${title}</text>
  </g>
</svg>`;
}

// 1. PHONE / SMARTPHONE PACKSHOT
function generatePhoneSvg() {
  const inner = `
    <!-- Main Flagship Smartphone (Natural Titanium) -->
    <g transform="translate(230, 110)">
      <!-- Outer Metal Frame -->
      <rect x="0" y="0" width="340" height="560" rx="48" fill="url(#titaniumGrad)" stroke="#64748B" stroke-width="2"/>
      
      <!-- Screen Bezel -->
      <rect x="8" y="8" width="324" height="544" rx="42" fill="#090D16" stroke="#1E293B" stroke-width="1.5"/>
      
      <!-- OLED Display Content -->
      <rect x="12" y="12" width="316" height="536" rx="38" fill="#050811"/>
      
      <!-- Vivid Abstract Screen Wallpaper Graphic -->
      <path d="M 12 280 C 80 180, 200 350, 328 200 L 328 548 L 12 548 Z" fill="url(#accentGrad)" opacity="0.85"/>
      <path d="M 12 360 C 120 280, 220 460, 328 340 L 328 548 L 12 548 Z" fill="#4F46E5" opacity="0.75"/>
      <path d="M 12 440 C 140 380, 240 500, 328 420 L 328 548 L 12 548 Z" fill="#06B6D4" opacity="0.6"/>
      
      <!-- Glossy Diagonal Reflection -->
      <path d="M 12 12 L 220 12 L 12 400 Z" fill="url(#glassReflection)"/>

      <!-- Dynamic Island / Top Pill -->
      <rect x="120" y="24" width="100" height="28" rx="14" fill="#000000"/>
      <!-- TrueDepth Camera Lens -->
      <circle cx="142" cy="38" r="5" fill="#0F172A" stroke="#1E293B" stroke-width="1"/>
      <circle cx="142" cy="38" r="2" fill="#0284C7"/>
      <!-- Ambient sensor -->
      <circle cx="198" cy="38" r="3.5" fill="#0A0E1A"/>

      <!-- Status Bar -->
      <text x="36" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">9:41</text>
      <!-- Battery & Signal -->
      <rect x="274" y="32" width="22" height="12" rx="3" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
      <rect x="276" y="34" width="15" height="8" rx="1.5" fill="#10B981"/>
      <rect x="297" y="35" width="2" height="6" rx="1" fill="#FFFFFF"/>

      <!-- Home Indicator Bar -->
      <rect x="105" y="534" width="130" height="5" rx="2.5" fill="#FFFFFF" opacity="0.8"/>
      
      <!-- Side Button Accents -->
      <rect x="-3" y="120" width="3" height="48" rx="1.5" fill="#94A3B8"/>
      <rect x="-3" y="180" width="3" height="48" rx="1.5" fill="#94A3B8"/>
      <rect x="340" y="150" width="3" height="75" rx="1.5" fill="#94A3B8"/>
    </g>
  `;
  return wrapPackshot('APEX PRO SMARTPHONE 5G', 'FLAGSHIP OEM', inner, '#0066FF', '#38BDF8');
}

// 2. LCD / OLED SCREEN DISPLAY PACKSHOT
function generateLcdScreenSvg() {
  const inner = `
    <g transform="translate(240, 90)">
      <!-- Glass Screen Assembly Panel -->
      <rect x="0" y="0" width="320" height="520" rx="34" fill="#0B0F19" stroke="#334155" stroke-width="2"/>
      
      <!-- Active OLED Display Area with Test Grid -->
      <rect x="8" y="8" width="304" height="504" rx="28" fill="#030712"/>
      
      <!-- Display Diagnostic / Factory Test Graphic -->
      <circle cx="160" cy="220" r="110" fill="none" stroke="#0066FF" stroke-width="1.5" opacity="0.4" stroke-dasharray="6,4"/>
      <circle cx="160" cy="220" r="70" fill="none" stroke="#38BDF8" stroke-width="1" opacity="0.6"/>
      <circle cx="160" cy="220" r="30" fill="url(#accentGrad)" opacity="0.2"/>
      
      <!-- Factory Test Text Graphic -->
      <text x="160" y="215" text-anchor="middle" font-family="monospace" font-size="14" font-weight="700" fill="#38BDF8" letter-spacing="2">SUPER OLED XDR</text>
      <text x="160" y="235" text-anchor="middle" font-family="monospace" font-size="10" fill="#94A3B8">120Hz • TRUETONE OK</text>
      <text x="160" y="255" text-anchor="middle" font-family="monospace" font-size="9" fill="#10B981">FACTORY CALIBRATED</text>

      <!-- Gloss Glass Reflection -->
      <path d="M 8 8 L 220 8 L 8 420 Z" fill="url(#glassReflection)"/>
      
      <!-- Top Speaker Grill Cutout & Camera Sensor Holes -->
      <rect x="120" y="16" width="80" height="5" rx="2.5" fill="#1E293B" stroke="#475569" stroke-width="0.5"/>
      <circle cx="100" cy="18" r="3.5" fill="#1E293B"/>
      
      <!-- Holographic QC Inspection Sticker -->
      <g transform="translate(190, 360)">
        <rect x="0" y="0" width="90" height="45" rx="6" fill="#1E293B" stroke="url(#goldGrad)" stroke-width="1.5"/>
        <text x="45" y="18" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#FBBF24">QC PASSED</text>
        <text x="45" y="32" text-anchor="middle" font-family="monospace" font-size="8" fill="#E2E8F0">100% TESTED</text>
      </g>
      
      <!-- Extended Bottom Flex Cable Ribbon (Orange/Gold Polyimide PCB) -->
      <g transform="translate(80, 516)">
        <path d="M 0 0 L 0 85 Q 0 110 30 110 L 130 110 Q 160 110 160 85 L 160 0 Z" fill="#B45309" stroke="#78350F" stroke-width="1.5"/>
        <path d="M 15 0 L 15 80 Q 15 95 35 95 L 125 95 Q 145 95 145 80 L 145 0 Z" fill="#92400E"/>
        <!-- Golden Circuit Traces -->
        <g stroke="url(#goldGrad)" stroke-width="1.2" opacity="0.9">
          <line x1="30" y1="10" x2="30" y2="75"/>
          <line x1="45" y1="10" x2="45" y2="75"/>
          <line x1="60" y1="10" x2="60" y2="75"/>
          <line x1="100" y1="10" x2="100" y2="75"/>
          <line x1="115" y1="10" x2="115" y2="75"/>
          <line x1="130" y1="10" x2="130" y2="75"/>
        </g>
        <!-- Touch Display IC Controller Chip -->
        <rect x="55" y="25" width="50" height="40" rx="3" fill="#0F172A" stroke="#334155" stroke-width="1"/>
        <circle cx="62" cy="32" r="2" fill="#64748B"/>
        <text x="80" y="48" text-anchor="middle" font-family="monospace" font-size="7" font-weight="700" fill="#94A3B8">TOUCH IC</text>
        <!-- Board-to-Board Gold Pin Connector -->
        <rect x="40" y="98" width="80" height="18" rx="3" fill="#18181B" stroke="#F59E0B" stroke-width="1.5"/>
        <line x1="45" y1="107" x2="115" y2="107" stroke="#FBBF24" stroke-width="3" stroke-dasharray="2,2"/>
      </g>
    </g>
  `;
  return wrapPackshot('ORIGINAL OLED DISPLAY ASSEMBLY', 'SERVICE PACK', inner, '#0066FF', '#60A5FA');
}

// 3. BATTERY PACKSHOT
function generateBatterySvg() {
  const inner = `
    <g transform="translate(240, 140)">
      <!-- Battery Pouch Cell Body -->
      <rect x="0" y="40" width="320" height="480" rx="18" fill="#18181B" stroke="#3F3F46" stroke-width="2"/>
      <!-- Metallic Edge Highlights -->
      <rect x="6" y="46" width="308" height="468" rx="14" fill="#09090B" stroke="#27272A" stroke-width="1"/>

      <!-- Top Safety Protective Flex Circuit & Gold Terminals -->
      <rect x="90" y="10" width="140" height="34" rx="6" fill="#1E293B" stroke="#475569" stroke-width="1"/>
      <rect x="110" y="0" width="30" height="12" rx="2" fill="url(#goldGrad)" stroke="#B45309" stroke-width="0.5"/>
      <rect x="180" y="0" width="30" height="12" rx="2" fill="url(#goldGrad)" stroke="#B45309" stroke-width="0.5"/>
      <!-- Flexible connector ribbon -->
      <path d="M 200 44 L 200 70 L 260 70 L 260 90" fill="none" stroke="#F59E0B" stroke-width="6" stroke-linecap="round"/>
      <rect x="250" y="85" width="24" height="16" rx="2" fill="#18181B" stroke="#FBBF24" stroke-width="1.5"/>

      <!-- Matte Laser Etched Technical Typography -->
      <g transform="translate(30, 85)">
        <text x="0" y="20" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" font-weight="900" fill="#FFFFFF" letter-spacing="1">APEX POWER CORE</text>
        <text x="0" y="40" font-family="monospace" font-size="12" font-weight="700" fill="#10B981">● 100% ZERO-CYCLE HEALTH</text>
        
        <line x1="0" y1="55" x2="260" y2="55" stroke="#27272A" stroke-width="1"/>

        <!-- Specifications Grid -->
        <text x="0" y="80" font-family="monospace" font-size="11" fill="#A1A1AA">Model: AP-IP15P-MAX</text>
        <text x="0" y="100" font-family="monospace" font-size="11" fill="#A1A1AA">Rated Capacity: 4,422 mAh</text>
        <text x="0" y="120" font-family="monospace" font-size="11" fill="#A1A1AA">Nominal Voltage: 3.87 V</text>
        <text x="0" y="140" font-family="monospace" font-size="11" fill="#A1A1AA">Watt-Hour: 17.11 Whr</text>
        <text x="0" y="160" font-family="monospace" font-size="11" fill="#A1A1AA">Chemistry: Li-ion Polymer</text>

        <!-- Warnings & Regulatory Icons -->
        <rect x="0" y="185" width="260" height="70" rx="8" fill="#18181B" stroke="#27272A" stroke-width="1"/>
        <text x="12" y="208" font-family="sans-serif" font-size="10" font-weight="700" fill="#F59E0B">⚠️ CAUTION / PRECAUCIÓN</text>
        <text x="12" y="225" font-family="sans-serif" font-size="8.5" fill="#71717A">Dual Over-charge &amp; Thermal Protection IC.</text>
        <text x="12" y="240" font-family="sans-serif" font-size="8.5" fill="#71717A">Do not puncture, crush, or incinerate.</text>

        <!-- Golden Holographic Seal -->
        <g transform="translate(180, 290)">
          <circle cx="35" cy="35" r="35" fill="none" stroke="url(#goldGrad)" stroke-width="2"/>
          <circle cx="35" cy="35" r="28" fill="#18181B"/>
          <text x="35" y="32" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="900" fill="#FBBF24">ORIGINAL</text>
          <text x="35" y="44" text-anchor="middle" font-family="monospace" font-size="7" font-weight="700" fill="#E2E8F0">GAS GAUGE</text>
        </g>

        <!-- Barcode Graphic -->
        <g transform="translate(10, 310)" fill="#71717A">
          <rect x="0" y="0" width="3" height="30"/>
          <rect x="5" y="0" width="6" height="30"/>
          <rect x="14" y="0" width="2" height="30"/>
          <rect x="18" y="0" width="4" height="30"/>
          <rect x="25" y="0" width="2" height="30"/>
          <rect x="30" y="0" width="5" height="30"/>
          <rect x="38" y="0" width="3" height="30"/>
          <rect x="44" y="0" width="6" height="30"/>
          <rect x="53" y="0" width="2" height="30"/>
          <rect x="58" y="0" width="5" height="30"/>
          <rect x="66" y="0" width="3" height="30"/>
          <rect x="72" y="0" width="4" height="30"/>
          <rect x="80" y="0" width="2" height="30"/>
          <rect x="85" y="0" width="6" height="30"/>
          <rect x="94" y="0" width="3" height="30"/>
          <rect x="100" y="0" width="4" height="30"/>
          <text x="0" y="42" font-family="monospace" font-size="8" fill="#52525B">SN: 88492048291038</text>
        </g>
      </g>
    </g>
  `;
  return wrapPackshot('HIGH CAPACITY LI-ION BATTERY', 'TI GAS GAUGE IC', inner, '#10B981', '#34D399');
}

// 4. CHARGING FLEX SUB-BOARD PACKSHOT
function generateChargingFlexSvg() {
  const inner = `
    <g transform="translate(180, 200)">
      <!-- Main High Density PCB Sub-Board -->
      <path d="M 0 60 L 60 60 L 60 0 L 380 0 L 380 60 L 440 60 L 440 240 L 360 240 L 360 300 L 80 300 L 80 240 L 0 240 Z" 
            fill="url(#pcbGrad)" stroke="#10B981" stroke-width="1.5"/>

      <!-- Integrated USB-C Dock Port (Laser Welded Steel) -->
      <g transform="translate(170, 250)">
        <rect x="0" y="0" width="100" height="70" rx="8" fill="#334155" stroke="#94A3B8" stroke-width="2"/>
        <rect x="10" y="15" width="80" height="40" rx="14" fill="#020617" stroke="#64748B" stroke-width="1.5"/>
        <!-- Gold Contact Pins -->
        <rect x="25" y="32" width="50" height="6" rx="2" fill="url(#goldGrad)"/>
        <!-- Mounting Screw Flanges -->
        <circle cx="-12" cy="35" r="8" fill="#475569" stroke="#94A3B8" stroke-width="1"/>
        <circle cx="-12" cy="35" r="4" fill="#0F172A"/>
        <circle cx="112" cy="35" r="8" fill="#475569" stroke="#94A3B8" stroke-width="1"/>
        <circle cx="112" cy="35" r="4" fill="#0F172A"/>
      </g>

      <!-- Microphone with Rubber Gasket Hole -->
      <g transform="translate(30, 150)">
        <circle cx="15" cy="15" r="14" fill="#18181B" stroke="#71717A" stroke-width="1"/>
        <circle cx="15" cy="15" r="6" fill="#000000"/>
        <text x="15" y="42" text-anchor="middle" font-family="monospace" font-size="8" fill="#A1A1AA">MIC 1</text>
      </g>

      <!-- Fast Charge Power Management IC (PMIC) -->
      <rect x="230" y="50" width="60" height="60" rx="4" fill="#0F172A" stroke="#334155" stroke-width="1.5"/>
      <circle cx="240" cy="60" r="2.5" fill="#38BDF8"/>
      <text x="260" y="85" text-anchor="middle" font-family="monospace" font-size="8" font-weight="700" fill="#E2E8F0">PD-FAST</text>
      <text x="260" y="97" text-anchor="middle" font-family="monospace" font-size="7" fill="#38BDF8">IC-45W</text>

      <!-- Micro SMD Components & Resistors -->
      <g fill="#D97706" stroke="#451A03" stroke-width="0.5">
        <rect x="180" y="50" width="8" height="14" rx="1"/>
        <rect x="195" y="50" width="8" height="14" rx="1"/>
        <rect x="210" y="50" width="8" height="14" rx="1"/>
        <rect x="180" y="75" width="14" height="8" rx="1"/>
        <rect x="180" y="90" width="14" height="8" rx="1"/>
        <rect x="310" y="50" width="10" height="18" rx="1"/>
        <rect x="330" y="50" width="10" height="18" rx="1"/>
      </g>

      <!-- Coaxial RF Antenna Mini Gold Connector -->
      <g transform="translate(390, 80)">
        <circle cx="15" cy="15" r="15" fill="#B45309" stroke="url(#goldGrad)" stroke-width="1.5"/>
        <circle cx="15" cy="15" r="8" fill="#18181B"/>
        <circle cx="15" cy="15" r="3" fill="#FBBF24"/>
        <text x="15" y="42" text-anchor="middle" font-family="monospace" font-size="8" fill="#F59E0B">ANT 5G</text>
      </g>

      <!-- Copper/Gold PCB Routing Traces -->
      <g stroke="url(#goldGrad)" stroke-width="1.5" fill="none" opacity="0.8">
        <path d="M 45 150 L 90 150 L 120 180 L 170 180"/>
        <path d="M 260 110 L 260 160 L 220 200 L 220 250"/>
        <path d="M 290 80 L 360 80 L 390 95"/>
        <path d="M 390 115 L 350 150 L 300 150 L 250 250"/>
      </g>

      <!-- Test Pads (Gold) -->
      <g fill="url(#goldGrad)">
        <circle cx="100" cy="80" r="4"/>
        <circle cx="120" cy="80" r="4"/>
        <circle cx="140" cy="80" r="4"/>
        <circle cx="100" cy="100" r="4"/>
        <circle cx="120" cy="100" r="4"/>
      </g>
    </g>
  `;
  return wrapPackshot('ORIGINAL USB-C CHARGING DOCK FLEX', 'OEM FAST CHARGE', inner, '#06B6D4', '#22D3EE');
}

// 5. TRINOCULAR MICROSCOPE REPAIR TOOL PACKSHOT
function generateMicroscopeSvg() {
  const inner = `
    <g transform="translate(200, 70)">
      <!-- Heavy Cast Iron Workbench Stand Base -->
      <rect x="50" y="520" width="300" height="40" rx="10" fill="#1E293B" stroke="#475569" stroke-width="2"/>
      <!-- Blue Anti-Static Silicone Repair Mat -->
      <rect x="70" y="514" width="260" height="10" rx="3" fill="#0284C7"/>
      <!-- Tiny phone motherboard on the stage -->
      <rect x="165" y="504" width="70" height="14" rx="2" fill="#065F46" stroke="#10B981" stroke-width="0.5"/>

      <!-- Vertical Chrome Pillar / Boom Stand -->
      <rect x="290" y="160" width="34" height="370" rx="6" fill="url(#titaniumGrad)" stroke="#475569" stroke-width="1.5"/>
      <line x1="307" y1="170" x2="307" y2="520" stroke="#FFFFFF" stroke-width="2" opacity="0.4"/>
      
      <!-- Horizontal Boom Arm & Gear Block -->
      <rect x="140" y="240" width="180" height="50" rx="8" fill="#334155" stroke="#64748B" stroke-width="2"/>
      
      <!-- Precision Focus Knurled Knobs (Coarse & Fine) -->
      <circle cx="310" cy="265" r="28" fill="#475569" stroke="#94A3B8" stroke-width="2"/>
      <circle cx="310" cy="265" r="18" fill="#1E293B"/>
      <circle cx="310" cy="265" r="10" fill="#94A3B8"/>

      <!-- Main Microscope Optical Body Head -->
      <g transform="translate(100, 180)">
        <!-- Optical Housing -->
        <path d="M 40 40 L 140 40 L 130 180 L 50 180 Z" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"/>
        <text x="90" y="115" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="900" fill="#0284C7" letter-spacing="1">7X-45X</text>
        <text x="90" y="130" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="700" fill="#64748B">STEREO ZOOM</text>

        <!-- Top Trinocular 3rd Camera Port (Vertical 4K HDMI mount) -->
        <rect x="75" y="-50" width="30" height="90" rx="4" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/>
        <rect x="70" y="-70" width="40" height="22" rx="4" fill="#E11D48" stroke="#FDA4AF" stroke-width="1.5"/>
        <text x="90" y="-56" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="900" fill="#FFFFFF">4K CAM</text>

        <!-- Dual 45° Binocular Eyepieces -->
        <!-- Left Eyepiece -->
        <g transform="translate(30, 40) rotate(-22)">
          <rect x="-16" y="-70" width="32" height="70" rx="6" fill="#1E293B" stroke="#475569" stroke-width="1.5"/>
          <ellipse cx="0" cy="-70" rx="18" ry="8" fill="#0F172A" stroke="#94A3B8" stroke-width="1.5"/>
          <ellipse cx="0" cy="-70" rx="12" ry="5" fill="#38BDF8" opacity="0.6"/>
        </g>
        <!-- Right Eyepiece -->
        <g transform="translate(150, 40) rotate(22)">
          <rect x="-16" y="-70" width="32" height="70" rx="6" fill="#1E293B" stroke="#475569" stroke-width="1.5"/>
          <ellipse cx="0" cy="-70" rx="18" ry="8" fill="#0F172A" stroke="#94A3B8" stroke-width="1.5"/>
          <ellipse cx="0" cy="-70" rx="12" ry="5" fill="#38BDF8" opacity="0.6"/>
        </g>

        <!-- Objective Lens & Barlow Lens Assembly -->
        <rect x="58" y="180" width="64" height="40" rx="6" fill="#334155" stroke="#64748B" stroke-width="1.5"/>
        <rect x="64" y="220" width="52" height="20" rx="4" fill="#1E293B"/>

        <!-- 56-LED Adjustable Ring Illuminator Light -->
        <ellipse cx="90" cy="245" rx="48" ry="14" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/>
        <ellipse cx="90" cy="245" rx="38" ry="9" fill="#E0F2FE" opacity="0.9" filter="url(#neonGlow)"/>

        <!-- Focused Light Beam Cone Illuminating Stage -->
        <polygon points="46,255 134,255 230,334 50,334" fill="#38BDF8" opacity="0.12"/>
      </g>
    </g>
  `;
  return wrapPackshot('TRINOCULAR STEREO MICROSCOPE 7-45X', 'LABORATORY GRADE', inner, '#0284C7', '#38BDF8');
}

// 6. PRECISION SOLDERING STATION PACKSHOT
function generateSolderingStationSvg() {
  const inner = `
    <g transform="translate(160, 180)">
      <!-- Main Desktop Digital Station Base -->
      <rect x="0" y="60" width="280" height="240" rx="16" fill="#1E293B" stroke="#475569" stroke-width="2"/>
      
      <!-- Blue Bevel Top Accent -->
      <rect x="0" y="60" width="280" height="12" rx="6" fill="#0284C7"/>

      <!-- OLED Digital Temperature Screen -->
      <rect x="30" y="100" width="220" height="90" rx="8" fill="#020617" stroke="#334155" stroke-width="1.5"/>
      <text x="50" y="145" font-family="monospace" font-size="36" font-weight="900" fill="#38BDF8" letter-spacing="1">380°C</text>
      <text x="180" y="130" font-family="monospace" font-size="11" font-weight="700" fill="#10B981">REAL TEMP</text>
      <text x="180" y="150" font-family="monospace" font-size="10" fill="#94A3B8">SET: 380°C</text>
      <text x="50" y="175" font-family="monospace" font-size="9" fill="#F59E0B">HEATING: POWER 92% ■■■■■□</text>

      <!-- Aluminum Temperature Rotary Encoder Knob -->
      <circle cx="80" cy="240" r="32" fill="url(#titaniumGrad)" stroke="#64748B" stroke-width="2"/>
      <circle cx="80" cy="240" r="22" fill="#0F172A"/>
      <line x1="80" y1="218" x2="80" y2="228" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>

      <!-- Preset Buttons CH1, CH2, CH3 -->
      <g transform="translate(150, 225)">
        <rect x="0" y="0" width="28" height="24" rx="4" fill="#334155" stroke="#64748B" stroke-width="1"/>
        <text x="14" y="16" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#FFFFFF">1</text>
        <rect x="36" y="0" width="28" height="24" rx="4" fill="#0284C7" stroke="#38BDF8" stroke-width="1"/>
        <text x="50" y="16" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#FFFFFF">2</text>
        <rect x="72" y="0" width="28" height="24" rx="4" fill="#334155" stroke="#64748B" stroke-width="1"/>
        <text x="86" y="16" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#FFFFFF">3</text>
      </g>

      <!-- Heavy Brass Tip Stand & Cleaner -->
      <g transform="translate(320, 160)">
        <rect x="0" y="60" width="160" height="80" rx="12" fill="#0F172A" stroke="#334155" stroke-width="2"/>
        <!-- Brass Wire Sponge Ball -->
        <circle cx="80" cy="95" r="32" fill="#D97706" stroke="#F59E0B" stroke-width="2" stroke-dasharray="4,3"/>
        <circle cx="80" cy="95" r="24" fill="#B45309" stroke="#FBBF24" stroke-width="1.5" stroke-dasharray="3,2"/>
        <text x="80" y="132" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="700" fill="#94A3B8">CLEANER</text>
      </g>

      <!-- Precision Ergonomic Soldering Iron Handle & Glowing Tip -->
      <g transform="translate(350, 30) rotate(42)">
        <!-- Flexible Silicone Cable -->
        <path d="M 0 0 C -40 20, -120 -20, -180 80" fill="none" stroke="#0284C7" stroke-width="7" stroke-linecap="round"/>
        <!-- Handle Grip -->
        <rect x="0" y="-12" width="160" height="24" rx="8" fill="#0284C7" stroke="#0369A1" stroke-width="1.5"/>
        <rect x="80" y="-14" width="60" height="28" rx="6" fill="#0F172A"/> <!-- Heat barrier -->
        <!-- Stainless Steel Heating Element Collar -->
        <rect x="160" y="-7" width="70" height="14" rx="2" fill="url(#titaniumGrad)" stroke="#64748B" stroke-width="1"/>
        <!-- Fine C210 / C245 Nano Soldering Tip -->
        <polygon points="230,-5 270,-1 270,1 230,5" fill="#E2E8F0" stroke="#94A3B8" stroke-width="0.5"/>
        <!-- Glowing Red/Orange Heat Tip -->
        <circle cx="270" cy="0" r="10" fill="#EF4444" opacity="0.6" filter="url(#neonGlow)"/>
        <polygon points="255,-3 273,-0.5 273,0.5 255,3" fill="#F59E0B"/>
      </g>
    </g>
  `;
  return wrapPackshot('SMART PRECISION SOLDERING STATION', 'NANO C210 / 380°C', inner, '#F59E0B', '#FBBF24');
}

// 7. GAN 65W FAST CHARGER PACKSHOT
function generateFastChargerSvg() {
  const inner = `
    <g transform="translate(240, 160)">
      <!-- Main GaN Charger Compact Body -->
      <rect x="40" y="60" width="240" height="340" rx="28" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2"/>
      
      <!-- Side Chamfer Shadow -->
      <path d="M 280 88 L 280 372 Q 280 400 252 400 L 252 60 Q 280 60 280 88 Z" fill="#E2E8F0" opacity="0.6"/>

      <!-- Foldable Chrome Wall Plug Prongs (Top) -->
      <rect x="100" y="10" width="24" height="60" rx="4" fill="url(#titaniumGrad)" stroke="#94A3B8" stroke-width="1"/>
      <rect x="195" y="10" width="24" height="60" rx="4" fill="url(#titaniumGrad)" stroke="#94A3B8" stroke-width="1"/>

      <!-- Laser Engraved Tech Brand Graphic -->
      <g transform="translate(70, 120)">
        <text x="0" y="24" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="28" font-weight="900" fill="#0F172A">65W</text>
        <rect x="75" y="6" width="56" height="22" rx="4" fill="#0066FF"/>
        <text x="103" y="21" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="900" fill="#FFFFFF">GaN III</text>
        <text x="0" y="48" font-family="sans-serif" font-size="11" font-weight="600" fill="#64748B">FAST CHARGER • PD 3.0 PPS</text>
      </g>

      <!-- Port Panel Area -->
      <rect x="70" y="195" width="180" height="175" rx="16" fill="#0F172A" stroke="#1E293B" stroke-width="1.5"/>

      <!-- USB-C Port 1 (Orange Fast Charge Tongue) -->
      <g transform="translate(110, 215)">
        <rect x="0" y="0" width="100" height="30" rx="10" fill="#000000" stroke="#334155" stroke-width="1"/>
        <rect x="18" y="9" width="64" height="12" rx="4" fill="#F97316"/>
        <text x="-25" y="20" font-family="monospace" font-size="9" font-weight="700" fill="#38BDF8">C1</text>
        <text x="110" y="20" font-family="monospace" font-size="9" font-weight="700" fill="#F97316">65W</text>
      </g>

      <!-- USB-C Port 2 (Orange Tongue) -->
      <g transform="translate(110, 260)">
        <rect x="0" y="0" width="100" height="30" rx="10" fill="#000000" stroke="#334155" stroke-width="1"/>
        <rect x="18" y="9" width="64" height="12" rx="4" fill="#F97316"/>
        <text x="-25" y="20" font-family="monospace" font-size="9" font-weight="700" fill="#38BDF8">C2</text>
        <text x="110" y="20" font-family="monospace" font-size="9" font-weight="700" fill="#F97316">30W</text>
      </g>

      <!-- USB-A Port (Cyan/Blue Tongue) -->
      <g transform="translate(110, 310)">
        <rect x="0" y="0" width="100" height="36" rx="6" fill="#000000" stroke="#334155" stroke-width="1"/>
        <rect x="12" y="10" width="76" height="16" rx="2" fill="#0284C7"/>
        <text x="-25" y="23" font-family="monospace" font-size="9" font-weight="700" fill="#38BDF8">A</text>
        <text x="110" y="23" font-family="monospace" font-size="9" font-weight="700" fill="#38BDF8">22.5W</text>
      </g>

      <!-- LED Power Ring Indicator -->
      <circle cx="160" cy="385" r="4" fill="#0066FF" filter="url(#neonGlow)"/>
    </g>
  `;
  return wrapPackshot('65W GaN TRIPLE-PORT FAST CHARGER', 'PD 3.0 & PPS', inner, '#0066FF', '#60A5FA');
}

// 8. EARBUDS TWS ANC PACKSHOT
function generateEarbudsSvg() {
  const inner = `
    <g transform="translate(200, 160)">
      <!-- Open Charging Case Base (Pebble Matte Black) -->
      <g transform="translate(60, 120)">
        <!-- Case Body -->
        <rect x="0" y="40" width="280" height="180" rx="60" fill="#18181B" stroke="#3F3F46" stroke-width="2"/>
        <!-- Polished Chrome Hinge Band -->
        <rect x="80" y="36" width="120" height="8" rx="3" fill="url(#titaniumGrad)"/>
        
        <!-- Earbud Dock Cradles -->
        <ellipse cx="80" cy="80" rx="36" ry="24" fill="#09090B" stroke="#27272A" stroke-width="1.5"/>
        <ellipse cx="200" cy="80" rx="36" ry="24" fill="#09090B" stroke="#27272A" stroke-width="1.5"/>
        <!-- Gold Charging Pogo Pins -->
        <circle cx="75" cy="80" r="3" fill="url(#goldGrad)"/>
        <circle cx="85" cy="80" r="3" fill="url(#goldGrad)"/>
        <circle cx="195" cy="80" r="3" fill="url(#goldGrad)"/>
        <circle cx="205" cy="80" r="3" fill="url(#goldGrad)"/>

        <!-- Battery Status Micro LED Indicator Dots -->
        <circle cx="125" cy="180" r="3" fill="#10B981"/>
        <circle cx="140" cy="180" r="3" fill="#10B981"/>
        <circle cx="155" cy="180" r="3" fill="#10B981"/>

        <!-- APEX audio logo on case front -->
        <text x="140" y="150" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="900" fill="#71717A" letter-spacing="2">APEX AUDIO</text>
      </g>

      <!-- Left Floating Earbud -->
      <g transform="translate(20, 40) rotate(-18)">
        <!-- Head Bulb -->
        <circle cx="60" cy="60" r="34" fill="#27272A" stroke="#52525B" stroke-width="1.5"/>
        <!-- Soft Silicone Ear Tip -->
        <ellipse cx="40" cy="50" rx="24" ry="18" fill="#09090B" stroke="#3F3F46" stroke-width="1"/>
        <!-- Acoustic Metal Noise Canceling Vent Mesh -->
        <rect x="68" y="44" width="18" height="8" rx="4" fill="#18181B" stroke="#71717A" stroke-width="1"/>
        <!-- Earbud Stem -->
        <rect x="68" y="70" width="18" height="90" rx="9" fill="#27272A" stroke="#52525B" stroke-width="1.5"/>
        <!-- Capacitive Force Sensor Notch -->
        <rect x="68" y="105" width="4" height="24" rx="2" fill="#71717A"/>
        <!-- Bottom Chrome Ring & Mic -->
        <rect x="68" y="152" width="18" height="8" rx="3" fill="url(#titaniumGrad)"/>
      </g>

      <!-- Right Floating Earbud -->
      <g transform="translate(290, 20) rotate(18)">
        <!-- Head Bulb -->
        <circle cx="60" cy="60" r="34" fill="#27272A" stroke="#52525B" stroke-width="1.5"/>
        <ellipse cx="80" cy="50" rx="24" ry="18" fill="#09090B" stroke="#3F3F46" stroke-width="1"/>
        <rect x="36" y="44" width="18" height="8" rx="4" fill="#18181B" stroke="#71717A" stroke-width="1"/>
        <rect x="34" y="70" width="18" height="90" rx="9" fill="#27272A" stroke="#52525B" stroke-width="1.5"/>
        <rect x="48" y="105" width="4" height="24" rx="2" fill="#71717A"/>
        <rect x="34" y="152" width="18" height="8" rx="3" fill="url(#titaniumGrad)"/>
      </g>
    </g>
  `;
  return wrapPackshot('PRO ACTIVE NOISE CANCELLING TWS', 'SPATIAL AUDIO • 40H', inner, '#8B5CF6', '#A78BFA');
}

// 9. POWER BANK 20,000MAH PACKSHOT
function generatePowerBankSvg() {
  const inner = `
    <g transform="translate(240, 120)">
      <!-- Heavy Duty Aluminum Alloy Enclosure -->
      <rect x="0" y="40" width="320" height="500" rx="36" fill="#1E293B" stroke="#475569" stroke-width="2"/>
      
      <!-- Top Glossy Glass Display Island -->
      <rect x="25" y="70" width="270" height="95" rx="18" fill="#020617" stroke="#334155" stroke-width="1.5"/>
      
      <!-- Bright Ice-Blue Digital LED Readout -->
      <text x="60" y="132" font-family="monospace" font-size="44" font-weight="900" fill="#38BDF8">98</text>
      <text x="122" y="105" font-family="monospace" font-size="18" font-weight="900" fill="#38BDF8">%</text>
      
      <rect x="155" y="102" width="60" height="22" rx="4" fill="#0284C7"/>
      <text x="185" y="117" text-anchor="middle" font-family="monospace" font-size="10" font-weight="900" fill="#FFFFFF">FAST 65W</text>
      <text x="60" y="152" font-family="sans-serif" font-size="9" font-weight="700" fill="#10B981">● TWO-WAY PD READY</text>

      <!-- Center MagSafe Magnetic Alignment Ring Graphic -->
      <g transform="translate(160, 310)">
        <circle cx="0" cy="0" r="75" fill="none" stroke="#334155" stroke-width="4" stroke-dasharray="16,8"/>
        <circle cx="0" cy="0" r="60" fill="none" stroke="#1E293B" stroke-width="2"/>
        <!-- Magnetic vertical alignment bar -->
        <rect x="-4" y="85" width="8" height="28" rx="4" fill="#334155"/>
        <!-- Wireless Charging Coil Emblem -->
        <circle cx="0" cy="0" r="16" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/>
        <path d="M -8 2 L 2 -10 L 0 -1 L 8 -1 L -2 10 L 0 1 Z" fill="#38BDF8"/>
      </g>

      <!-- Bottom Specs Laser Printing -->
      <g transform="translate(30, 480)">
        <text x="0" y="18" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="900" fill="#E2E8F0">20,000 mAh</text>
        <text x="0" y="35" font-family="monospace" font-size="9" fill="#94A3B8">74Wh • USB-C1 65W / USB-C2 30W / USB-A 22.5W</text>
      </g>

      <!-- Top Ports Panel Edge -->
      <rect x="50" y="24" width="220" height="16" rx="4" fill="#0F172A" stroke="#334155" stroke-width="1"/>
      <rect x="90" y="28" width="35" height="8" rx="2" fill="#F97316"/>
      <rect x="145" y="28" width="35" height="8" rx="2" fill="#F97316"/>
      <rect x="200" y="28" width="45" height="8" rx="2" fill="#0284C7"/>
    </g>
  `;
  return wrapPackshot('20,000mAh 65W FAST CHARGE POWER BANK', 'AIR TRAVEL SAFE • 74Wh', inner, '#0284C7', '#38BDF8');
}

// 10. BRAIDED 100W USB-C CABLE PACKSHOT
function generateCableSvg() {
  const inner = `
    <g transform="translate(200, 140)">
      <!-- Tightly Coiled Heavy Duty Braided Cable Bundle -->
      <g fill="none" stroke-linecap="round">
        <!-- Outer braided loops with dual-tone texture -->
        <circle cx="200" cy="240" r="150" stroke="#0F172A" stroke-width="22"/>
        <circle cx="200" cy="240" r="150" stroke="#0066FF" stroke-width="18" stroke-dasharray="6,4"/>
        <circle cx="200" cy="240" r="120" stroke="#0F172A" stroke-width="22"/>
        <circle cx="200" cy="240" r="120" stroke="#38BDF8" stroke-width="18" stroke-dasharray="6,4"/>
        <circle cx="200" cy="240" r="90" stroke="#0F172A" stroke-width="22"/>
        <circle cx="200" cy="240" r="90" stroke="#0066FF" stroke-width="18" stroke-dasharray="6,4"/>
      </g>

      <!-- Leather / Silicone Cable Organizer Strap -->
      <rect x="175" y="140" width="50" height="200" rx="10" fill="#1E293B" stroke="#475569" stroke-width="2"/>
      <circle cx="200" cy="165" r="8" fill="url(#titaniumGrad)"/>
      <circle cx="200" cy="315" r="8" fill="url(#titaniumGrad)"/>
      <text x="200" y="245" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="900" fill="#38BDF8" transform="rotate(-90 200 245)">APEX 100W</text>

      <!-- Connector Head 1 (Foreground Right) -->
      <g transform="translate(250, 40) rotate(32)">
        <!-- Strain Relief Rubber Collar -->
        <rect x="0" y="80" width="32" height="40" rx="6" fill="#1E293B" stroke="#334155" stroke-width="1"/>
        <!-- Matte Zinc Alloy Housing -->
        <rect x="-4" y="15" width="40" height="70" rx="8" fill="url(#titaniumGrad)" stroke="#475569" stroke-width="1.5"/>
        <!-- Realtime Wattage LED Display Window -->
        <rect x="4" y="30" width="24" height="40" rx="4" fill="#020617"/>
        <text x="16" y="55" text-anchor="middle" font-family="monospace" font-size="9" font-weight="900" fill="#10B981">100W</text>
        <!-- Reversible Gold-Plated USB-C Plug -->
        <rect x="2" y="-20" width="28" height="35" rx="5" fill="url(#goldGrad)" stroke="#B45309" stroke-width="1"/>
        <line x1="8" y1="-5" x2="24" y2="-5" stroke="#78350F" stroke-width="2"/>
      </g>

      <!-- Connector Head 2 (Foreground Left) -->
      <g transform="translate(60, 280) rotate(-45)">
        <rect x="0" y="80" width="32" height="40" rx="6" fill="#1E293B" stroke="#334155" stroke-width="1"/>
        <rect x="-4" y="15" width="40" height="70" rx="8" fill="url(#titaniumGrad)" stroke="#475569" stroke-width="1.5"/>
        <rect x="2" y="-20" width="28" height="35" rx="5" fill="url(#goldGrad)" stroke="#B45309" stroke-width="1"/>
      </g>
    </g>
  `;
  return wrapPackshot('100W PD BRAIDED TYPE-C CABLE', 'E-MARKER SMART CHIP', inner, '#0066FF', '#38BDF8');
}

// 11. MAGSAFE ARMOR PHONE CASE PACKSHOT
function generatePhoneCaseSvg() {
  const inner = `
    <g transform="translate(240, 110)">
      <!-- Tough Shockproof Armor Bumper Rim -->
      <rect x="0" y="0" width="320" height="540" rx="46" fill="#0F172A" stroke="#38BDF8" stroke-width="3"/>
      
      <!-- Anti-Yellowing Crystal Clear Backplate -->
      <rect x="14" y="14" width="292" height="512" rx="36" fill="#1E293B" fill-opacity="0.45" stroke="#475569" stroke-width="1.5"/>

      <!-- 4-Corner Air-Cushion Shock Absorber Honeycomb Inserts -->
      <g fill="#0284C7" opacity="0.8">
        <!-- Top Left -->
        <circle cx="28" cy="28" r="6"/>
        <circle cx="44" cy="24" r="5"/>
        <circle cx="24" cy="44" r="5"/>
        <!-- Top Right -->
        <circle cx="292" cy="28" r="6"/>
        <circle cx="276" cy="24" r="5"/>
        <circle cx="296" cy="44" r="5"/>
        <!-- Bottom Left -->
        <circle cx="28" cy="512" r="6"/>
        <circle cx="44" cy="516" r="5"/>
        <circle cx="24" cy="496" r="5"/>
        <!-- Bottom Right -->
        <circle cx="292" cy="512" r="6"/>
        <circle cx="276" cy="516" r="5"/>
        <circle cx="296" cy="496" r="5"/>
      </g>

      <!-- Raised CNC Aluminum Camera Protection Bezel -->
      <g transform="translate(30, 30)">
        <rect x="0" y="0" width="125" height="135" rx="26" fill="#020617" stroke="url(#titaniumGrad)" stroke-width="2.5"/>
        <circle cx="42" cy="42" r="22" fill="#0F172A" stroke="#475569" stroke-width="1.5"/>
        <circle cx="42" cy="94" r="22" fill="#0F172A" stroke="#475569" stroke-width="1.5"/>
        <circle cx="88" cy="68" r="22" fill="#0F172A" stroke="#475569" stroke-width="1.5"/>
        <!-- 1.5mm Raised Lip Warning Tag -->
        <text x="62" y="130" text-anchor="middle" font-family="sans-serif" font-size="7" font-weight="900" fill="#94A3B8">CAMERA GUARD</text>
      </g>

      <!-- Magnetic MagSafe Ring & Alignment Bar (White / Silver) -->
      <g transform="translate(160, 300)">
        <circle cx="0" cy="0" r="68" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-opacity="0.9"/>
        <circle cx="0" cy="0" r="55" fill="none" stroke="#94A3B8" stroke-width="1" stroke-dasharray="8,6" stroke-opacity="0.6"/>
        <rect x="-4" y="76" width="8" height="26" rx="4" fill="#FFFFFF" fill-opacity="0.9"/>
      </g>

      <!-- Diagonal Polycarbonate Sheen -->
      <path d="M 14 14 L 200 14 L 14 380 Z" fill="url(#glassReflection)"/>

      <!-- Tactile Side Buttons (Metallic) -->
      <rect x="-4" y="130" width="4" height="40" rx="2" fill="url(#titaniumGrad)"/>
      <rect x="-4" y="185" width="4" height="40" rx="2" fill="url(#titaniumGrad)"/>
      <rect x="320" y="150" width="4" height="65" rx="2" fill="url(#titaniumGrad)"/>
    </g>
  `;
  return wrapPackshot('MAGSAFE SHOCKPROOF ARMOR CASE', '10FT DROP TESTED', inner, '#0284C7', '#38BDF8');
}

// 12. 9H TEMPERED GLASS SCREEN PROTECTOR PACKSHOT
function generateTemperedGlassSvg() {
  const inner = `
    <g transform="translate(250, 110)">
      <!-- 3D Perspective Floating 9H Tempered Glass Sheet -->
      <!-- Beveled Arc 2.5D Edge Highlight -->
      <rect x="0" y="0" width="300" height="540" rx="38" fill="none" stroke="#38BDF8" stroke-width="4" opacity="0.8"/>
      
      <!-- Ultra-Clear Glass Body with Crystal Rainbow Refraction -->
      <rect x="4" y="4" width="292" height="532" rx="34" fill="#0F172A" fill-opacity="0.4" stroke="#E0F2FE" stroke-width="1.5"/>

      <!-- Electroplated Oleophobic Rainbow Oil Sheen Gradient -->
      <path d="M 4 4 L 240 4 L 4 420 Z" fill="url(#glassReflection)"/>
      <path d="M 80 4 L 296 4 L 296 280 Z" fill="url(#accentGrad)" opacity="0.1"/>

      <!-- Top Earpiece Dust-Proof Metal Mesh & Speaker Notch -->
      <rect x="110" y="14" width="80" height="6" rx="3" fill="#020617" stroke="#38BDF8" stroke-width="1"/>

      <!-- Center Hologram Badge: 9H SAPPHIRE -->
      <g transform="translate(150, 240)">
        <polygon points="0,-45 40,-15 40,30 0,55 -40,30 -40,-15" fill="#0B132B" stroke="#38BDF8" stroke-width="2"/>
        <text x="0" y="-8" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="900" fill="#FFFFFF">9H</text>
        <text x="0" y="10" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="900" fill="#38BDF8" letter-spacing="1">SAPPHIRE</text>
        <text x="0" y="24" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#94A3B8">HARDNESS</text>
      </g>

      <!-- Feature Badges -->
      <g transform="translate(50, 360)">
        <rect x="0" y="0" width="200" height="32" rx="8" fill="#020617" stroke="#1E293B" stroke-width="1"/>
        <text x="100" y="20" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#38BDF8">ANTI-SPY PRIVACY 28°</text>
      </g>

      <g transform="translate(50, 405)">
        <rect x="0" y="0" width="200" height="32" rx="8" fill="#020617" stroke="#1E293B" stroke-width="1"/>
        <text x="100" y="20" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#10B981">OLEOPHOBIC COATING</text>
      </g>
    </g>
  `;
  return wrapPackshot('9H SAPPHIRE PRIVACY TEMPERED GLASS', '2.5D ARC EDGE • EXPLOSION PROOF', inner, '#06B6D4', '#22D3EE');
}

// 13. RUGGED BLUETOOTH SPEAKER PACKSHOT
function generateSpeakerSvg() {
  const inner = `
    <g transform="translate(240, 150)">
      <!-- Main Cylindrical Speaker Body (Heavy Acoustic Weave) -->
      <rect x="30" y="40" width="260" height="420" rx="60" fill="#0F172A" stroke="#1E293B" stroke-width="2"/>
      
      <!-- Dense Fabric Acoustic Grill Pattern -->
      <rect x="42" y="55" width="236" height="390" rx="50" fill="#18181B" stroke="#334155" stroke-width="1"/>
      <g stroke="#3F3F46" stroke-width="1" opacity="0.3">
        <line x1="60" y1="55" x2="60" y2="445"/>
        <line x1="80" y1="55" x2="80" y2="445"/>
        <line x1="100" y1="55" x2="100" y2="445"/>
        <line x1="120" y1="55" x2="120" y2="445"/>
        <line x1="140" y1="55" x2="140" y2="445"/>
        <line x1="160" y1="55" x2="160" y2="445"/>
        <line x1="180" y1="55" x2="180" y2="445"/>
        <line x1="200" y1="55" x2="200" y2="445"/>
        <line x1="220" y1="55" x2="220" y2="445"/>
        <line x1="240" y1="55" x2="240" y2="445"/>
        <line x1="260" y1="55" x2="260" y2="445"/>
      </g>

      <!-- Center Metallic Brand Badge -->
      <g transform="translate(160, 240)">
        <rect x="-60" y="-20" width="120" height="40" rx="8" fill="#000000" stroke="#0066FF" stroke-width="2"/>
        <text x="0" y="6" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" letter-spacing="2">APEX</text>
        <text x="0" y="14" text-anchor="middle" font-family="sans-serif" font-size="6" font-weight="700" fill="#38BDF8">BOOM 360°</text>
      </g>

      <!-- Top Rubber End Cap & Pulsating Passive Bass Radiator -->
      <ellipse cx="160" cy="40" rx="90" ry="24" fill="#1E293B" stroke="#475569" stroke-width="2"/>
      <ellipse cx="160" cy="40" rx="65" ry="16" fill="url(#titaniumGrad)"/>
      <circle cx="160" cy="40" r="8" fill="#0066FF" filter="url(#neonGlow)"/>

      <!-- Bottom Passive Radiator Cap -->
      <ellipse cx="160" cy="460" rx="90" ry="24" fill="#1E293B" stroke="#475569" stroke-width="2"/>

      <!-- Bold Tactile Control Buttons (Embossed on Front) -->
      <g fill="#E2E8F0">
        <!-- Plus Button -->
        <path d="M 152 120 L 168 120 M 160 112 L 160 128" stroke="#E2E8F0" stroke-width="4" stroke-linecap="round"/>
        <!-- Minus Button -->
        <path d="M 152 350 L 168 350" stroke="#E2E8F0" stroke-width="4" stroke-linecap="round"/>
        <!-- Bluetooth Icon -->
        <circle cx="160" cy="155" r="10" fill="#0066FF"/>
        <text x="160" y="159" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="900" fill="#FFFFFF">B</text>
      </g>

      <!-- Heavy-Duty Paracord Loop Strap with Carabiner Clip -->
      <g transform="translate(270, 80)">
        <path d="M 0 0 C 40 -10, 60 40, 0 60" fill="none" stroke="#F59E0B" stroke-width="7" stroke-linecap="round"/>
        <!-- Aluminum Carabiner -->
        <circle cx="35" cy="25" r="16" fill="none" stroke="url(#titaniumGrad)" stroke-width="4"/>
      </g>
    </g>
  `;
  return wrapPackshot('RUGGED WATERPROOF BLUETOOTH SPEAKER', 'IPX7 WATERPROOF • 30W BASS', inner, '#0066FF', '#60A5FA');
}

// 14. 128GB MICROSD CARD PACKSHOT
function generateMemoryCardSvg() {
  const inner = `
    <g transform="translate(240, 160)">
      <!-- Classic MicroSD Form Factor Body with Notches -->
      <path d="M 0 20 L 0 420 L 320 420 L 320 120 L 305 105 L 305 60 L 290 45 L 290 0 L 20 0 Z" 
            fill="#18181B" stroke="#3F3F46" stroke-width="2"/>
      
      <!-- Top Metallic Gold Half Band -->
      <path d="M 0 20 L 0 160 L 320 160 L 320 120 L 305 105 L 305 60 L 290 45 L 290 0 L 20 0 Z" 
            fill="url(#goldGrad)"/>

      <!-- Crisp Typography on Gold Header -->
      <g transform="translate(30, 50)">
        <text x="0" y="30" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="34" font-weight="900" fill="#0F172A" letter-spacing="1">APEX</text>
        <text x="0" y="55" font-family="sans-serif" font-size="14" font-weight="900" fill="#78350F">EXTREME PRO</text>
        <text x="0" y="80" font-family="monospace" font-size="11" font-weight="700" fill="#92400E">160 MB/s ● V30 4K</text>
      </g>

      <!-- Bottom Black Section Information -->
      <g transform="translate(30, 200)">
        <!-- Giant Capacity Indicator -->
        <text x="0" y="65" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="64" font-weight="900" fill="#FFFFFF">128</text>
        <text x="125" y="40" font-family="sans-serif" font-size="20" font-weight="900" fill="#FBBF24">GB</text>

        <!-- Speed & Format Standard Badges -->
        <g transform="translate(0, 100)">
          <!-- MicroSDXC I -->
          <text x="0" y="20" font-family="sans-serif" font-size="16" font-weight="800" fill="#E2E8F0">MicroSDXC I</text>
          
          <!-- U3 Badge -->
          <rect x="130" y="4" width="26" height="24" rx="3" fill="#18181B" stroke="#FBBF24" stroke-width="2"/>
          <text x="143" y="21" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="900" fill="#FBBF24">3</text>

          <!-- V30 Badge -->
          <rect x="168" y="4" width="38" height="24" rx="3" fill="#0284C7"/>
          <text x="187" y="20" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="900" fill="#FFFFFF">V30</text>

          <!-- A2 Application Class Badge -->
          <rect x="216" y="4" width="32" height="24" rx="3" fill="#10B981"/>
          <text x="232" y="20" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="900" fill="#FFFFFF">A2</text>
        </g>

        <!-- 4K Ultra HD Text -->
        <text x="0" y="160" font-family="sans-serif" font-size="12" font-weight="700" fill="#94A3B8">4K ULTRA HD / ACTION CAM READY</text>
      </g>
    </g>
  `;
  return wrapPackshot('128GB MICROSDXC EXTREME UHS-I', 'V30 • A2 • 160MB/s', inner, '#F59E0B', '#FBBF24');
}

// 15. CAMERA MODULE (PHONE PARTS) PACKSHOT
function generateCameraModuleSvg() {
  const inner = `
    <g transform="translate(200, 180)">
      <!-- Heavy Stainless Steel Bracket Shield -->
      <rect x="40" y="40" width="320" height="260" rx="20" fill="#1E293B" stroke="url(#titaniumGrad)" stroke-width="3"/>
      
      <!-- Primary 200MP Quad-Bayer Large Lens -->
      <g transform="translate(130, 140)">
        <circle cx="0" cy="0" r="70" fill="#020617" stroke="#475569" stroke-width="3"/>
        <circle cx="0" cy="0" r="54" fill="#090D16" stroke="url(#titaniumGrad)" stroke-width="2"/>
        <!-- Multi-Coated Optical Glass Sapphire Elements with Emerald Flare -->
        <circle cx="0" cy="0" r="38" fill="#042F2E" stroke="#10B981" stroke-width="1.5"/>
        <circle cx="0" cy="0" r="22" fill="#064E3B"/>
        <!-- Aperture Blades -->
        <circle cx="0" cy="0" r="12" fill="#000000"/>
        <circle cx="8" cy="-8" r="6" fill="#34D399" opacity="0.6"/>
        <text x="0" y="85" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#38BDF8">OIS ● f/1.7 200MP</text>
      </g>

      <!-- Secondary Ultra-Wide Lens -->
      <g transform="translate(280, 100)">
        <circle cx="0" cy="0" r="42" fill="#020617" stroke="#475569" stroke-width="2"/>
        <circle cx="0" cy="0" r="30" fill="#0F172A" stroke="#38BDF8" stroke-width="1.5"/>
        <circle cx="0" cy="0" r="14" fill="#000000"/>
        <circle cx="5" cy="-5" r="4" fill="#38BDF8" opacity="0.7"/>
        <text x="0" y="52" text-anchor="middle" font-family="monospace" font-size="8" fill="#94A3B8">12MP UW</text>
      </g>

      <!-- Telephoto Periscope Prism Cutout -->
      <g transform="translate(280, 210)">
        <rect x="-30" y="-25" width="60" height="50" rx="8" fill="#020617" stroke="#F59E0B" stroke-width="2"/>
        <rect x="-18" y="-15" width="36" height="30" rx="4" fill="#18181B"/>
        <text x="0" y="38" text-anchor="middle" font-family="monospace" font-size="8" fill="#F59E0B">5X OPTICAL</text>
      </g>

      <!-- Extended Board-to-Board Flex Ribbon -->
      <g transform="translate(100, 300)">
        <path d="M 0 0 L 0 90 L 180 90 L 180 0" fill="#B45309" stroke="#78350F" stroke-width="1.5"/>
        <!-- Gold Terminal Pins -->
        <rect x="50" y="70" width="80" height="16" rx="2" fill="#18181B" stroke="#FBBF24" stroke-width="1.5"/>
        <line x1="55" y1="78" x2="125" y2="78" stroke="#FBBF24" stroke-width="3" stroke-dasharray="2,2"/>
      </g>
    </g>
  `;
  return wrapPackshot('ORIGINAL OEM REAR CAMERA MODULE', 'OIS 200MP • DUAL SENSOR', inner, '#10B981', '#34D399');
}

// 16. HOUSING / BACK GLASS PACKSHOT
function generateHousingSvg() {
  const inner = `
    <g transform="translate(240, 110)">
      <!-- CNC Machined Titanium Chassis & Frosted Back Glass Panel -->
      <rect x="0" y="0" width="320" height="540" rx="46" fill="#1E293B" stroke="url(#titaniumGrad)" stroke-width="4"/>
      
      <!-- Frosted AG Matte Glass Surface -->
      <rect x="6" y="6" width="308" height="528" rx="42" fill="#0F172A" opacity="0.95"/>
      <path d="M 6 6 L 240 6 L 6 360 Z" fill="url(#glassReflection)"/>

      <!-- Large Hole Camera Lens Bezel (Pre-Installed Rings) -->
      <g transform="translate(35, 35)">
        <rect x="0" y="0" width="130" height="140" rx="28" fill="#1E293B" stroke="url(#titaniumGrad)" stroke-width="2"/>
        <!-- Ring 1 -->
        <circle cx="45" cy="45" r="26" fill="#020617" stroke="url(#titaniumGrad)" stroke-width="2.5"/>
        <circle cx="45" cy="45" r="18" fill="none" stroke="#38BDF8" stroke-width="1"/>
        <!-- Ring 2 -->
        <circle cx="45" cy="95" r="26" fill="#020617" stroke="url(#titaniumGrad)" stroke-width="2.5"/>
        <circle cx="45" cy="95" r="18" fill="none" stroke="#38BDF8" stroke-width="1"/>
        <!-- Ring 3 -->
        <circle cx="95" cy="70" r="26" fill="#020617" stroke="url(#titaniumGrad)" stroke-width="2.5"/>
        <!-- Flash & Mic holes -->
        <circle cx="95" cy="30" r="8" fill="#F8FAFC"/>
        <circle cx="95" cy="110" r="4" fill="#000000"/>
      </g>

      <!-- Center Polished Brand Logo Cutout -->
      <circle cx="160" cy="270" r="32" fill="url(#titaniumGrad)" stroke="#94A3B8" stroke-width="1"/>
      <circle cx="160" cy="270" r="24" fill="#0F172A"/>
      <text x="160" y="275" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="900" fill="#E2E8F0">A</text>

      <!-- Bottom Chassis Labeling -->
      <text x="160" y="470" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#64748B" letter-spacing="1.5">TITANIUM BACK GLASS</text>
      <text x="160" y="490" text-anchor="middle" font-family="monospace" font-size="9" fill="#475569">BIG HOLE • EASY INSTALLATION</text>
    </g>
  `;
  return wrapPackshot('CNC TITANIUM CHASSIS & BACK GLASS', 'ORIGINAL OEM FINISH', inner, '#64748B', '#94A3B8');
}

// BANNERS GENERATOR
function generateBannerSvg(title, subtitle, badgeText, gradientColors, primaryColor, iconSvg) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${gradientColors[0]}"/>
      <stop offset="50%" stop-color="${gradientColors[1]}"/>
      <stop offset="100%" stop-color="${gradientColors[2]}"/>
    </linearGradient>
    <radialGradient id="bannerGlow" cx="80%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${primaryColor}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#020617" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="btnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="${primaryColor}"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="12" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Banner Background -->
  <rect width="1200" height="500" fill="url(#bgGrad)"/>
  <rect width="1200" height="500" fill="url(#bannerGlow)"/>

  <!-- High-Tech Geometric Grid Lines -->
  <g opacity="0.1" stroke="#38BDF8" stroke-width="1">
    <line x1="0" y1="100" x2="1200" y2="100"/>
    <line x1="0" y1="200" x2="1200" y2="200"/>
    <line x1="0" y1="300" x2="1200" y2="300"/>
    <line x1="0" y1="400" x2="1200" y2="400"/>
    <line x1="300" y1="0" x2="300" y2="500"/>
    <line x1="600" y1="0" x2="600" y2="500"/>
    <line x1="900" y1="0" x2="900" y2="500"/>
  </g>

  <!-- Left Content Column -->
  <g transform="translate(80, 80)">
    <!-- Pill Badge -->
    <rect x="0" y="0" width="220" height="34" rx="17" fill="#0F172A" stroke="${primaryColor}" stroke-width="1.5"/>
    <circle cx="18" cy="17" r="5" fill="${primaryColor}" filter="url(#glow)"/>
    <text x="32" y="22" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="800" fill="#F8FAFC" letter-spacing="1">${badgeText.toUpperCase()}</text>

    <!-- Headline -->
    <text x="0" y="90" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="44" font-weight="900" fill="#FFFFFF" letter-spacing="-0.5">
      ${title[0]}
    </text>
    <text x="0" y="142" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="44" font-weight="900" fill="#38BDF8" letter-spacing="-0.5">
      ${title[1]}
    </text>

    <!-- Subtitle -->
    <text x="0" y="195" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="500" fill="#94A3B8">
      ${subtitle}
    </text>

    <!-- Key Bullet Perks -->
    <g transform="translate(0, 235)" font-family="sans-serif" font-size="13" font-weight="600" fill="#CBD5E1">
      <circle cx="8" cy="8" r="4" fill="#10B981"/>
      <text x="22" y="12">100% Genuine Tested OEM Quality</text>

      <circle cx="8" cy="38" r="4" fill="#10B981"/>
      <text x="22" y="42">Islandwide Cash on Delivery (1-3 Days)</text>

      <circle cx="8" cy="68" r="4" fill="#10B981"/>
      <text x="22" y="72">Instant WhatsApp Order Verification</text>
    </g>

    <!-- CTA Button Mockup -->
    <g transform="translate(0, 345)">
      <rect x="0" y="0" width="230" height="52" rx="12" fill="url(#btnGrad)"/>
      <text x="115" y="32" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="800" fill="#FFFFFF" letter-spacing="0.5">SHOP NOW →</text>
    </g>
  </g>

  <!-- Right Visual Graphic Showcase -->
  <g transform="translate(760, 50)">
    ${iconSvg}
  </g>
</svg>`;
}

// Write All Product Packshots
const productMap = {
  // Phones
  'phones.svg': generatePhoneSvg(),
  'phone-iphone15pro.svg': generatePhoneSvg(),
  'phone-samsung-s24.svg': generatePhoneSvg(),
  
  // LCD Screens
  'lcd-screens.svg': generateLcdScreenSvg(),
  'displays-lcd.svg': generateLcdScreenSvg(),
  'lcd-screen-iphone.svg': generateLcdScreenSvg(),
  'lcd-screen-samsung.svg': generateLcdScreenSvg(),
  
  // Batteries
  'batteries.svg': generateBatterySvg(),
  'battery-iphone.svg': generateBatterySvg(),
  'battery-samsung.svg': generateBatterySvg(),
  
  // Charging Flex
  'charging-flex.svg': generateChargingFlexSvg(),
  'charging-flex-usbc.svg': generateChargingFlexSvg(),
  'charging-flex-lightning.svg': generateChargingFlexSvg(),
  
  // Microscope Repair Tool
  'microscope-repair-tool.svg': generateMicroscopeSvg(),
  'repair-tools.svg': generateMicroscopeSvg(),
  'microscope-trinocular.svg': generateMicroscopeSvg(),
  
  // Soldering Iron
  'soldering-iron.svg': generateSolderingStationSvg(),
  'soldering-station.svg': generateSolderingStationSvg(),
  
  // Fast Chargers
  'fast-chargers.svg': generateFastChargerSvg(),
  'chargers.svg': generateFastChargerSvg(),
  'charger-gan-65w.svg': generateFastChargerSvg(),
  'charger-apple-20w.svg': generateFastChargerSvg(),
  
  // Earbuds
  'earbuds.svg': generateEarbudsSvg(),
  'earbuds-anc-tws.svg': generateEarbudsSvg(),
  
  // Power Banks
  'power-banks.svg': generatePowerBankSvg(),
  'power-bank-20000mah.svg': generatePowerBankSvg(),
  
  // Cables
  'cables.svg': generateCableSvg(),
  'cable-braided-100w.svg': generateCableSvg(),
  
  // Cases
  'cases.svg': generatePhoneCaseSvg(),
  'phone-cases.svg': generatePhoneCaseSvg(),
  'case-magsafe-armor.svg': generatePhoneCaseSvg(),
  
  // Tempered Glass
  'tempered-glass.svg': generateTemperedGlassSvg(),
  'screen-protectors.svg': generateTemperedGlassSvg(),
  'tempered-glass-9h.svg': generateTemperedGlassSvg(),
  
  // Speakers
  'speakers.svg': generateSpeakerSvg(),
  'speaker-bluetooth-rugged.svg': generateSpeakerSvg(),
  
  // Memory Cards
  'memory-cards.svg': generateMemoryCardSvg(),
  'memory-card-microsd.svg': generateMemoryCardSvg(),
  
  // Phone Parts & Housing
  'phone-parts.svg': generateCameraModuleSvg(),
  'parts-camera-module.svg': generateCameraModuleSvg(),
  'housing.svg': generateHousingSvg(),
  'housing-back-glass.svg': generateHousingSvg(),
};

// Write Products
Object.entries(productMap).forEach(([filename, content]) => {
  fs.writeFileSync(path.join(PRODUCTS_DIR, filename), content);
});
console.log(`Saved ${Object.keys(productMap).length} product SVGs to public/images/products/`);

// Write Categories
const categorySlugs = [
  'smartphones',
  'displays-lcd',
  'batteries',
  'charging-flex',
  'phone-parts',
  'housing',
  'repair-tools',
  'chargers',
  'earbuds',
  'power-banks',
  'cables',
  'phone-cases',
  'screen-protectors',
  'speakers',
  'memory-cards'
];

categorySlugs.forEach(slug => {
  const content = productMap[`${slug}.svg`] || generatePhoneSvg();
  fs.writeFileSync(path.join(CATEGORIES_DIR, `${slug}.svg`), content);
});
console.log(`Saved ${categorySlugs.length} category SVGs to public/images/categories/`);

// Promotional Banners
const bannerDisplays = generateBannerSvg(
  ['ORIGINAL OLED & AMOLED', 'DISPLAYS & SCREENS'],
  'High precision OLED assemblies with 6-month warranty for Apple, Samsung & Xiaomi',
  'Top Technician Choice',
  ['#0F172A', '#1E3A8A', '#020617'],
  '#0066FF',
  `<g transform="scale(0.7) translate(-100, -30)">${generateLcdScreenSvg()}</g>`
);

const bannerTools = generateBannerSvg(
  ['MASTER REPAIR TOOLS', '& LAB STATIONS'],
  'Trinocular microscopes, smart soldering rework stations, and micro-soldering gear',
  'Technician Equipment',
  ['#0F172A', '#1E293B', '#090D16'],
  '#F59E0B',
  `<g transform="scale(0.7) translate(-100, -30)">${generateMicroscopeSvg()}</g>`
);

const bannerBatteries = generateBannerSvg(
  ['ZERO-CYCLE LI-ION', 'REPLACEMENT BATTERIES'],
  '0-Cycle high capacity batteries with dual IC safety chips & 100% health guarantee',
  '100% Health Guaranteed',
  ['#064E3B', '#022C22', '#020617'],
  '#10B981',
  `<g transform="scale(0.7) translate(-100, -30)">${generateBatterySvg()}</g>`
);

const bannerHero = generateBannerSvg(
  ['SRI LANKA’S PREMIER', 'MOBILE PARTS HUB'],
  'Islandwide Cash on Delivery • Wholesale & Technician Pricing • Direct WhatsApp Support',
  'Islandwide Fast Delivery',
  ['#0F172A', '#1E40AF', '#020617'],
  '#0066FF',
  `<g transform="scale(0.7) translate(-100, -30)">${generatePhoneSvg()}</g>`
);

const bannerSale = generateBannerSvg(
  ['SPECIAL DEALS &', 'WHOLESALE BUNDLES'],
  'Exclusive discounts on display screens, battery packs, and repair tool starter kits',
  'Limited Time Offer',
  ['#881337', '#4C0519', '#020617'],
  '#F43F5E',
  `<g transform="scale(0.7) translate(-100, -30)">${generateFastChargerSvg()}</g>`
);

fs.writeFileSync(path.join(BANNERS_DIR, 'banner-display.svg'), bannerDisplays);
fs.writeFileSync(path.join(BANNERS_DIR, 'banner-tools.svg'), bannerTools);
fs.writeFileSync(path.join(BANNERS_DIR, 'banner-battery.svg'), bannerBatteries);
fs.writeFileSync(path.join(BANNERS_DIR, 'banner-hero.svg'), bannerHero);
fs.writeFileSync(path.join(BANNERS_DIR, 'banner-special-offer.svg'), bannerSale);
fs.writeFileSync(path.join(BANNERS_DIR, 'banner-display.png'), bannerDisplays);
fs.writeFileSync(path.join(BANNERS_DIR, 'banner-tools.png'), bannerTools);
fs.writeFileSync(path.join(BANNERS_DIR, 'banner-battery.png'), bannerBatteries);

console.log('Saved promotional banners to public/images/banners/');

// Write Global Placeholder & Logo
const placeholderSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <rect width="400" height="400" fill="#0F172A"/>
  <circle cx="200" cy="180" r="50" fill="#1E293B" stroke="#334155" stroke-width="2"/>
  <path d="M 180 180 L 195 195 L 225 165" fill="none" stroke="#0066FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="200" y="260" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#94A3B8">APEX MOBILE HUB</text>
  <text x="200" y="280" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748B">PRODUCT PREVIEW</text>
</svg>`;

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="100%" height="100%">
  <defs>
    <linearGradient id="logoBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0066FF"/>
    </linearGradient>
  </defs>
  <g transform="translate(10, 15)">
    <!-- Circuit Phone Hexagon Icon -->
    <polygon points="25,0 48,13 48,39 25,52 2,39 2,13" fill="#0F172A" stroke="url(#logoBlue)" stroke-width="2.5"/>
    <path d="M 15 26 L 25 16 L 35 26 L 25 36 Z" fill="url(#logoBlue)"/>
    <circle cx="25" cy="26" r="3" fill="#FFFFFF"/>
    
    <!-- Typography -->
    <text x="60" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="900" fill="#FFFFFF" letter-spacing="1.5">APEX</text>
    <text x="135" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="900" fill="#38BDF8" letter-spacing="1.5">HUB</text>
    <text x="60" y="47" font-family="sans-serif" font-size="8.5" font-weight="700" fill="#94A3B8" letter-spacing="2.5">MOBILE PARTS &amp; TOOLS</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'placeholder.svg'), placeholderSvg);
fs.writeFileSync(path.join(PUBLIC_DIR, 'logo.svg'), logoSvg);
console.log('Saved placeholder.svg and logo.svg to public/images/');
