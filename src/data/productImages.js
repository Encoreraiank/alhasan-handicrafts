// SVG Data URIs for clean, isolated product visuals matching the WhatsApp screenshots

const createSvg = (content) => `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <rect width="400" height="400" fill="#F8F6F0" rx="20"/>
  ${content}
</svg>
`)}`;

export const PRODUCT_IMAGES = {
  // Bowls
  bowls: createSvg(`
    <g transform="translate(200, 200)">
      <ellipse cx="0" cy="50" rx="140" ry="50" fill="#4A2E19" stroke="#2C1A0E" stroke-width="4"/>
      <ellipse cx="0" cy="45" rx="130" ry="40" fill="#6B4423"/>
      <ellipse cx="0" cy="10" rx="110" ry="40" fill="#5A391E" stroke="#3D2614" stroke-width="4"/>
      <ellipse cx="0" cy="5" rx="100" ry="30" fill="#7C522B"/>
      <ellipse cx="0" cy="-30" rx="80" ry="30" fill="#6B4423" stroke="#4A2E19" stroke-width="4"/>
      <ellipse cx="0" cy="-35" rx="72" ry="22" fill="#8C5E33"/>
      <path d="M-130 45 Q 0 110 130 45" fill="none" stroke="#2C1A0E" stroke-width="6"/>
      <path d="M-100 5 Q 0 60 100 5" fill="none" stroke="#3D2614" stroke-width="5"/>
      <circle cx="-50" cy="70" r="4" fill="#D4AF37"/>
      <circle cx="0" cy="80" r="4" fill="#D4AF37"/>
      <circle cx="50" cy="70" r="4" fill="#D4AF37"/>
    </g>
  `),

  // Belan
  belan: createSvg(`
    <g transform="translate(200, 200) rotate(-35)">
      <rect x="-160" y="-12" width="50" height="24" rx="12" fill="#7C522B" stroke="#3D2614" stroke-width="3"/>
      <rect x="-110" y="-22" width="220" height="44" rx="10" fill="#A47444" stroke="#4A2E19" stroke-width="4"/>
      <rect x="110" y="-12" width="50" height="24" rx="12" fill="#7C522B" stroke="#3D2614" stroke-width="3"/>
      <path d="M-90 -15 L-90 15 M-40 -15 L-40 15 M10 -15 L10 15 M60 -15 L60 15" stroke="#6B4423" stroke-width="3" opacity="0.6"/>
      <text x="0" y="80" font-family="sans-serif" font-size="20" font-weight="bold" fill="#5A391E" text-anchor="middle">12 INCH</text>
    </g>
  `),

  // Honey Dipper
  honeyDipper: createSvg(`
    <g transform="translate(200, 200)">
      <rect x="-10" y="-120" width="20" height="220" rx="8" fill="#C59B27" stroke="#7C522B" stroke-width="3"/>
      <circle cx="0" cy="-100" r="35" fill="#D4AF37" stroke="#6B4423" stroke-width="4"/>
      <line x1="-35" y1="-115" x2="35" y2="-115" stroke="#5A391E" stroke-width="5"/>
      <line x1="-37" y1="-100" x2="37" y2="-100" stroke="#5A391E" stroke-width="5"/>
      <line x1="-35" y1="-85" x2="35" y2="-85" stroke="#5A391E" stroke-width="5"/>
      <circle cx="0" cy="110" r="12" fill="#7C522B"/>
    </g>
  `),

  // Chapati Box
  chapatiBox: createSvg(`
    <g transform="translate(200, 200)">
      <path d="M-120 20 L-120 70 Q 0 120 120 70 L120 20 Z" fill="#5A391E" stroke="#2C1A0E" stroke-width="4"/>
      <ellipse cx="0" cy="20" rx="120" ry="40" fill="#7C522B" stroke="#3D2614" stroke-width="4"/>
      <path d="M-120 20 Q 0 -40 120 20" fill="#6B4423" stroke="#2C1A0E" stroke-width="4"/>
      <ellipse cx="0" cy="-25" rx="30" ry="15" fill="#D4AF37" stroke="#4A2E19" stroke-width="3"/>
      <path d="M-100 50 Q 0 85 100 50" fill="none" stroke="#D4AF37" stroke-width="4" stroke-dasharray="8,6"/>
    </g>
  `),

  // Bangles Box
  banglesBox: createSvg(`
    <g transform="translate(200, 200)">
      <rect x="-130" y="-50" width="260" height="120" rx="10" fill="#5A391E" stroke="#2C1A0E" stroke-width="4"/>
      <rect x="-120" y="-40" width="240" height="40" rx="6" fill="#7C522B" stroke="#3D2614" stroke-width="3"/>
      <rect x="-15" y="-10" width="30" height="25" rx="4" fill="#D4AF37" stroke="#5A391E" stroke-width="2"/>
      <circle cx="0" cy="2" r="4" fill="#2C1A0E"/>
      <path d="M-100 -20 L-60 -20 M60 -20 L100 -20" stroke="#D4AF37" stroke-width="4"/>
      <circle cx="-80" cy="-20" r="8" fill="none" stroke="#D4AF37" stroke-width="3"/>
      <circle cx="80" cy="-20" r="8" fill="none" stroke="#D4AF37" stroke-width="3"/>
    </g>
  `),

  // Tissue Box
  tissueBox: createSvg(`
    <g transform="translate(200, 200)">
      <polygon points="-120,20 0,-30 140,20 20,70" fill="#7C522B" stroke="#3D2614" stroke-width="4"/>
      <polygon points="-120,20 20,70 20,130 -120,80" fill="#5A391E" stroke="#2C1A0E" stroke-width="4"/>
      <polygon points="20,70 140,20 140,80 20,130" fill="#4A2E19" stroke="#2C1A0E" stroke-width="4"/>
      <ellipse cx="10" cy="15" rx="45" ry="18" fill="#DC2626" stroke="#991B1B" stroke-width="3"/>
      <path d="M-5 10 Q 15 -20 25 10 Q 5 25 -5 10" fill="#FFFFFF" opacity="0.9"/>
    </g>
  `),

  // Key Box
  keyBox: createSvg(`
    <g transform="translate(200, 200)">
      <rect x="-70" y="-130" width="140" height="240" rx="8" fill="#5A391E" stroke="#2C1A0E" stroke-width="4"/>
      <rect x="-55" y="-105" width="110" height="190" rx="4" fill="#FAF8F5" stroke="#7C522B" stroke-width="3"/>
      <line x1="-55" y1="-40" x2="55" y2="-40" stroke="#7C522B" stroke-width="3"/>
      <line x1="-55" y1="25" x2="55" y2="25" stroke="#7C522B" stroke-width="3"/>
      <path d="M-30 -70 L-30 -55 M0 -70 L0 -55 M30 -70 L30 -55" stroke="#D4AF37" stroke-width="4"/>
      <path d="M-30 0 L-30 15 M0 0 L0 15 M30 0 L30 15" stroke="#D4AF37" stroke-width="4"/>
      <circle cx="50" cy="0" r="5" fill="#D4AF37"/>
    </g>
  `),

  // Pizza Platter
  pizzaPlatter: createSvg(`
    <g transform="translate(200, 200)">
      <ellipse cx="-20" cy="0" rx="110" ry="110" fill="#7C522B" stroke="#3D2614" stroke-width="5"/>
      <ellipse cx="-20" cy="0" rx="95" ry="95" fill="#6B4423" stroke="#4A2E19" stroke-width="3"/>
      <rect x="80" y="-20" width="80" height="40" rx="10" fill="#7C522B" stroke="#3D2614" stroke-width="4"/>
      <circle cx="135" cy="0" r="8" fill="#F8F6F0" stroke="#3D2614" stroke-width="2"/>
    </g>
  `),

  // Chess Set
  chessSet: createSvg(`
    <g transform="translate(200, 200)">
      <rect x="-120" y="-100" width="240" height="200" fill="#DC2626" stroke="#5A391E" stroke-width="6" rx="6"/>
      <rect x="-105" y="-85" width="210" height="170" fill="#7C522B"/>
      <!-- Grid -->
      <rect x="-90" y="-70" width="180" height="140" fill="#FAF8F5" stroke="#2C1A0E" stroke-width="3"/>
      <path d="M-45 -70 L-45 70 M0 -70 L0 70 M45 -70 L45 70" stroke="#2C1A0E" stroke-width="2"/>
      <path d="M-90 -23 L90 -23 M-90 23 L90 23" stroke="#2C1A0E" stroke-width="2"/>
      <!-- Pieces -->
      <circle cx="-67" cy="-46" r="10" fill="#2C1A0E"/>
      <circle cx="-22" cy="-46" r="10" fill="#D4AF37"/>
      <circle cx="22" cy="-46" r="10" fill="#2C1A0E"/>
      <circle cx="67" cy="-46" r="10" fill="#D4AF37"/>
    </g>
  `),

  // Masala Box Hexa
  hexaMasala: createSvg(`
    <g transform="translate(200, 200)">
      <polygon points="0,-110 95,-55 95,55 0,110 -95,55 -95,-55" fill="#5A391E" stroke="#2C1A0E" stroke-width="5"/>
      <polygon points="0,-95 82,-47 82,47 0,95 -82,47 -82,-47" fill="#7C522B" stroke="#3D2614" stroke-width="3"/>
      <!-- Inner Cups -->
      <circle cx="-40" cy="-35" r="28" fill="#B45309" stroke="#F59E0B" stroke-width="3"/>
      <circle cx="40" cy="-35" r="28" fill="#DC2626" stroke="#FCA5A5" stroke-width="3"/>
      <circle cx="-40" cy="35" r="28" fill="#15803D" stroke="#86EFAC" stroke-width="3"/>
      <circle cx="40" cy="35" r="28" fill="#D97706" stroke="#FDE047" stroke-width="3"/>
      <circle cx="0" cy="0" r="25" fill="#78350F" stroke="#F59E0B" stroke-width="3"/>
    </g>
  `),

  // Apple Basket
  appleBasket: createSvg(`
    <g transform="translate(200, 200)">
      <path d="M0 -110 C-100 -110 -130 -40 -130 10 C-130 80 -60 120 0 120 C60 120 130 80 130 10 C130 -40 100 -110 0 -110 Z" fill="none" stroke="#7C522B" stroke-width="12"/>
      <path d="M0 -90 C-80 -90 -100 -30 -100 10 C-100 65 -45 95 0 95 C45 95 100 65 100 10 C100 -30 80 -90 0 -90 Z" fill="none" stroke="#A47444" stroke-width="8"/>
      <path d="M0 -70 C-55 -70 -70 -20 -70 10 C-70 50 -30 70 0 70 C30 70 70 50 70 10 C70 -20 55 -70 0 -70 Z" fill="none" stroke="#C59B27" stroke-width="6"/>
      <!-- Stem -->
      <path d="M0 -110 Q 15 -135 30 -140" fill="none" stroke="#4A2E19" stroke-width="6"/>
      <path d="M10 -130 Q 30 -120 40 -130 Q 30 -140 10 -130" fill="#15803D"/>
    </g>
  `),

  // Spatula
  spatula: createSvg(`
    <g transform="translate(200, 200) rotate(-45)">
      <rect x="-15" y="-140" width="30" height="180" rx="8" fill="#8C5E33" stroke="#4A2E19" stroke-width="3"/>
      <path d="M-30 40 L-25 130 Q 0 150 25 130 L30 40 Z" fill="#A47444" stroke="#4A2E19" stroke-width="4"/>
      <line x1="-15" y1="60" x2="-15" y2="110" stroke="#5A391E" stroke-width="4" stroke-linecap="round"/>
      <line x1="0" y1="60" x2="0" y2="110" stroke="#5A391E" stroke-width="4" stroke-linecap="round"/>
      <line x1="15" y1="60" x2="15" y2="110" stroke="#5A391E" stroke-width="4" stroke-linecap="round"/>
    </g>
  `),

  // Iron Rickshaw
  rickshaw: createSvg(`
    <g transform="translate(200, 200)">
      <circle cx="-70" cy="50" r="40" fill="none" stroke="#1F2937" stroke-width="6"/>
      <circle cx="70" cy="50" r="40" fill="none" stroke="#1F2937" stroke-width="6"/>
      <circle cx="0" cy="-60" r="30" fill="none" stroke="#1F2937" stroke-width="5"/>
      <rect x="-80" y="-30" width="160" height="40" rx="6" fill="#7C522B" stroke="#1F2937" stroke-width="4"/>
      <path d="M-60 -30 L-30 -90 L30 -90 L60 -30" fill="none" stroke="#1F2937" stroke-width="4"/>
      <!-- Flower Pot -->
      <path d="M-25 -25 L-20 20 L20 20 L25 -25 Z" fill="#DC2626"/>
      <circle cx="0" cy="-35" r="12" fill="#F59E0B"/>
    </g>
  `),

  // Coffee Mug
  coffeeMug: createSvg(`
    <g transform="translate(200, 200)">
      <rect x="-65" y="-80" width="130" height="160" rx="20" fill="#6B4423" stroke="#3D2614" stroke-width="5"/>
      <rect x="-55" y="-70" width="110" height="140" rx="12" fill="#E5E7EB" stroke="#9CA3AF" stroke-width="4"/>
      <path d="M65 -40 C 110 -40 110 40 65 40" fill="none" stroke="#6B4423" stroke-width="14" stroke-linecap="round"/>
      <path d="M65 -40 C 110 -40 110 40 65 40" fill="none" stroke="#3D2614" stroke-width="4" stroke-linecap="round"/>
      <circle cx="0" cy="0" r="25" fill="none" stroke="#D4AF37" stroke-width="3"/>
      <path d="M0 -15 L0 15 M-15 0 L15 0" stroke="#D4AF37" stroke-width="3"/>
    </g>
  `),

  // Massager Roller
  massager: createSvg(`
    <g transform="translate(200, 200)">
      <path d="M-100 -20 Q 0 -60 100 -20 Q 0 20 -100 -20" fill="#7C522B" stroke="#3D2614" stroke-width="4"/>
      <rect x="-30" y="-70" width="60" height="40" rx="10" fill="#5A391E" stroke="#2C1A0E" stroke-width="4"/>
      <circle cx="-60" cy="30" r="25" fill="#8C5E33" stroke="#3D2614" stroke-width="4"/>
      <circle cx="0" cy="40" r="25" fill="#8C5E33" stroke="#3D2614" stroke-width="4"/>
      <circle cx="60" cy="30" r="25" fill="#8C5E33" stroke="#3D2614" stroke-width="4"/>
    </g>
  `)
};
