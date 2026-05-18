// kmed-home-visual.jsx — Tone-and-manner visual mockup for Home (Desktop 1440)
// All visuals are inline SVG illustration. No real faces. No before/after. No superlatives.

// ============================================================================
// HERO ILLUSTRATION — "Concierge welcome from arrival" editorial scene
// Side-view: soft hotel/lobby interior with window, plants, tea, document folder.
// No people. Conveys care, calm, internationality.
// ============================================================================
const HeroIllustration = () => (
  <svg viewBox="0 0 720 560" xmlns="http://www.w3.org/2000/svg" style={{width:"100%", height:"100%", display:"block"}} role="img" aria-label="Editorial illustration of a calm care setting — warm light, plants, tea, and patient documents.">
    <defs>
      <linearGradient id="hi-sky" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#FFE7EE"/>
        <stop offset="0.55" stopColor="#FDF1EF"/>
        <stop offset="1" stopColor="#F5FBFE"/>
      </linearGradient>
      <linearGradient id="hi-window" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#E1F4FB"/>
        <stop offset="1" stopColor="#FFE7EE"/>
      </linearGradient>
      <linearGradient id="hi-floor" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#F0EEE9"/>
        <stop offset="1" stopColor="#E5DFD3"/>
      </linearGradient>
      <linearGradient id="hi-table" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stopColor="#3B2A24"/>
        <stop offset="1" stopColor="#5A4238"/>
      </linearGradient>
      <linearGradient id="hi-curtain" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#FFD6E1"/>
        <stop offset="1" stopColor="#FFA8BE"/>
      </linearGradient>
      <radialGradient id="hi-sun" cx="0.78" cy="0.28" r="0.5">
        <stop offset="0" stopColor="#FFF6DA" stopOpacity="0.9"/>
        <stop offset="1" stopColor="#FFF6DA" stopOpacity="0"/>
      </radialGradient>
      <pattern id="hi-grain" width="3" height="3" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.4" fill="#0a1530" fillOpacity="0.05"/>
      </pattern>
    </defs>

    {/* Sky / wall background */}
    <rect x="0" y="0" width="720" height="560" fill="url(#hi-sky)"/>
    <rect x="0" y="0" width="720" height="560" fill="url(#hi-grain)"/>
    <ellipse cx="540" cy="140" rx="260" ry="180" fill="url(#hi-sun)"/>

    {/* Window pane */}
    <g>
      <rect x="120" y="60" width="460" height="320" rx="14" fill="url(#hi-window)" stroke="#0a1530" strokeOpacity="0.08" strokeWidth="1.5"/>
      <line x1="350" y1="60" x2="350" y2="380" stroke="#fff" strokeOpacity="0.7" strokeWidth="3"/>
      <line x1="120" y1="220" x2="580" y2="220" stroke="#fff" strokeOpacity="0.7" strokeWidth="3"/>

      {/* City silhouette — abstract Korean modernist skyline (no Seoul Tower / Namsan clichés) */}
      <g opacity="0.55">
        <rect x="140" y="270" width="38" height="105" fill="#69D2EC"/>
        <rect x="184" y="240" width="48" height="135" fill="#03ACF2"/>
        <rect x="238" y="290" width="32" height="85" fill="#69D2EC"/>
        <rect x="276" y="220" width="56" height="155" fill="#00579B"/>
        <rect x="338" y="260" width="40" height="115" fill="#03ACF2"/>
        <rect x="384" y="200" width="64" height="175" fill="#0a1530" fillOpacity="0.7"/>
        <rect x="454" y="250" width="46" height="125" fill="#03ACF2"/>
        <rect x="506" y="280" width="64" height="95" fill="#69D2EC"/>
      </g>
      {/* Tiny windows in skyline */}
      <g fill="#FFF6DA" opacity="0.85">
        <rect x="288" y="240" width="3" height="3"/><rect x="296" y="240" width="3" height="3"/><rect x="304" y="240" width="3" height="3"/>
        <rect x="288" y="252" width="3" height="3"/><rect x="304" y="252" width="3" height="3"/>
        <rect x="396" y="220" width="3" height="3"/><rect x="404" y="220" width="3" height="3"/><rect x="412" y="220" width="3" height="3"/>
        <rect x="396" y="232" width="3" height="3"/><rect x="412" y="232" width="3" height="3"/>
        <rect x="396" y="248" width="3" height="3"/><rect x="404" y="248" width="3" height="3"/>
      </g>
      {/* Distant plane drifting */}
      <g transform="translate(450 110) rotate(-15)">
        <path d="M0 0 L30 -2 L36 0 L30 2 Z M16 -2 L16 -10 M16 2 L16 10" stroke="#00579B" strokeWidth="1.2" fill="#00579B" fillOpacity="0.7" strokeLinecap="round"/>
        <path d="M-30 0 L0 0" stroke="#00579B" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="2 3"/>
      </g>
    </g>

    {/* Curtain on left */}
    <g>
      <path d="M120 60 Q108 220 116 380 L150 380 Q142 220 150 60 Z" fill="url(#hi-curtain)"/>
      <path d="M134 60 Q130 220 134 380" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.5" fill="none"/>
    </g>

    {/* Floor */}
    <rect x="0" y="380" width="720" height="180" fill="url(#hi-floor)"/>
    <line x1="0" y1="382" x2="720" y2="382" stroke="#0a1530" strokeOpacity="0.07" strokeWidth="2"/>

    {/* Plant left — leafy floor plant */}
    <g transform="translate(75 320)">
      <rect x="-22" y="58" width="44" height="42" rx="4" fill="#3B2A24"/>
      <rect x="-18" y="58" width="36" height="3" fill="#fff" fillOpacity="0.4"/>
      <g fill="#4CAF50">
        <ellipse cx="0" cy="20" rx="9" ry="32" transform="rotate(-15 0 20)"/>
        <ellipse cx="0" cy="20" rx="9" ry="36" transform="rotate(8 0 20)"/>
        <ellipse cx="0" cy="20" rx="9" ry="30" transform="rotate(28 0 20)"/>
        <ellipse cx="0" cy="20" rx="9" ry="32" transform="rotate(-32 0 20)"/>
      </g>
      <g fill="#357A38">
        <ellipse cx="-2" cy="24" rx="6" ry="22" transform="rotate(-5 0 20)"/>
        <ellipse cx="2" cy="24" rx="6" ry="20" transform="rotate(15 0 20)"/>
      </g>
    </g>

    {/* Side table center-right */}
    <g transform="translate(360 360)">
      {/* Table top */}
      <ellipse cx="0" cy="42" rx="170" ry="14" fill="#0a1530" fillOpacity="0.18"/>
      <rect x="-160" y="20" width="320" height="22" rx="3" fill="url(#hi-table)"/>
      <rect x="-160" y="20" width="320" height="3" fill="#fff" fillOpacity="0.18"/>
      {/* Legs */}
      <rect x="-150" y="42" width="6" height="80" fill="#3B2A24"/>
      <rect x="144" y="42" width="6" height="80" fill="#3B2A24"/>

      {/* Tea cup w/ saucer */}
      <g transform="translate(-110 -10)">
        <ellipse cx="0" cy="32" rx="32" ry="6" fill="#fff" stroke="#0a1530" strokeOpacity="0.15"/>
        <path d="M-22 18 Q-22 30 -16 32 L16 32 Q22 30 22 18 Z" fill="#fff" stroke="#0a1530" strokeOpacity="0.18"/>
        <path d="M22 22 Q34 22 34 28 Q34 32 22 30" stroke="#0a1530" strokeOpacity="0.2" fill="none" strokeWidth="1.5"/>
        <path d="M-12 18 Q-12 22 -8 24 L8 24 Q12 22 12 18 Z" fill="#7A4A2E"/>
        {/* steam */}
        <path d="M-6 8 Q-2 0 -6 -8 Q-10 -16 -4 -22" stroke="#fff" strokeOpacity="0.8" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M6 10 Q10 2 6 -6 Q2 -14 8 -20" stroke="#fff" strokeOpacity="0.8" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </g>

      {/* Document folder w/ chart */}
      <g transform="translate(-10 -42)">
        <rect x="-50" y="0" width="120" height="62" rx="6" fill="#fff" stroke="#0a1530" strokeOpacity="0.15"/>
        <rect x="-50" y="0" width="120" height="10" rx="6" fill="#00579B"/>
        <rect x="-50" y="6" width="120" height="4" fill="#00579B"/>
        <rect x="-44" y="20" width="48" height="4" rx="2" fill="#0a1530" fillOpacity="0.25"/>
        <rect x="-44" y="30" width="76" height="3" rx="1.5" fill="#0a1530" fillOpacity="0.12"/>
        <rect x="-44" y="38" width="60" height="3" rx="1.5" fill="#0a1530" fillOpacity="0.12"/>
        <rect x="-44" y="46" width="68" height="3" rx="1.5" fill="#0a1530" fillOpacity="0.12"/>
        {/* heart vital line */}
        <polyline points="-44,56 -32,56 -28,50 -22,60 -16,52 -10,56 70,56" fill="none" stroke="#4CAF50" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </g>

      {/* Glasses */}
      <g transform="translate(78 8)" stroke="#0a1530" strokeOpacity="0.6" fill="none" strokeWidth="1.8">
        <circle cx="-12" cy="0" r="10"/>
        <circle cx="14" cy="0" r="10"/>
        <line x1="-2" y1="0" x2="4" y2="0"/>
      </g>

      {/* Small bud vase */}
      <g transform="translate(130 -20)">
        <path d="M-8 24 Q-12 36 0 38 Q12 36 8 24 Z" fill="#69D2EC"/>
        <line x1="0" y1="24" x2="0" y2="-18" stroke="#357A38" strokeWidth="1.5"/>
        <ellipse cx="0" cy="-18" rx="5" ry="7" fill="#FFA8BE"/>
        <ellipse cx="-3" cy="-12" rx="3" ry="2" fill="#357A38" transform="rotate(-30 -3 -12)"/>
      </g>
    </g>

    {/* Floating paper plane top-left */}
    <g transform="translate(170 130) rotate(-10)" opacity="0.85">
      <path d="M0 0 L48 -10 L42 4 L20 0 L36 18 L12 14 Z" fill="#fff" stroke="#00579B" strokeOpacity="0.5" strokeWidth="1.2"/>
      <path d="M-40 14 Q-20 6 0 0" stroke="#00579B" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="3 4" fill="none"/>
    </g>

    {/* Decorative leaves bottom-right */}
    <g transform="translate(640 480)" opacity="0.75">
      <ellipse cx="0" cy="0" rx="6" ry="22" transform="rotate(-30)" fill="#4CAF50"/>
      <ellipse cx="-12" cy="-4" rx="5" ry="18" transform="rotate(-60 -12 -4)" fill="#357A38"/>
      <ellipse cx="14" cy="-2" rx="5" ry="16" transform="rotate(20 14 -2)" fill="#69D2EC"/>
    </g>

    {/* Frame border subtle */}
    <rect x="0.5" y="0.5" width="719" height="559" fill="none" stroke="#0a1530" strokeOpacity="0.06"/>
  </svg>
);

// ============================================================================
// TREATMENT CARD VISUALS — 6 categories, each with a unique abstract motif
// ============================================================================
const TVPattern = ({ id, c1, c2, children, accent }) => (
  <svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" style={{width:"100%", height:"100%", display:"block"}}>
    <defs>
      <linearGradient id={"tv-bg-"+id} x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stopColor={c1}/>
        <stop offset="1" stopColor={c2}/>
      </linearGradient>
      <pattern id={"tv-grain-"+id} width="3" height="3" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.4" fill="#fff" fillOpacity="0.18"/>
      </pattern>
    </defs>
    <rect x="0" y="0" width="360" height="200" fill={"url(#tv-bg-"+id+")"}/>
    <rect x="0" y="0" width="360" height="200" fill={"url(#tv-grain-"+id+")"}/>
    {children}
  </svg>
);

// 1) Dermatology / K-Beauty — pearl/dewdrop pattern
const TVDermatology = () => (
  <TVPattern id="derm" c1="#FFD6E1" c2="#FFB3CA">
    <g opacity="0.85">
      <circle cx="80" cy="70" r="42" fill="#fff" fillOpacity="0.45"/>
      <circle cx="68" cy="58" r="14" fill="#fff" fillOpacity="0.7"/>
      <circle cx="200" cy="120" r="58" fill="#fff" fillOpacity="0.35"/>
      <circle cx="184" cy="104" r="18" fill="#fff" fillOpacity="0.7"/>
      <circle cx="290" cy="60" r="32" fill="#fff" fillOpacity="0.4"/>
      <circle cx="282" cy="52" r="10" fill="#fff" fillOpacity="0.7"/>
      <circle cx="320" cy="160" r="20" fill="#fff" fillOpacity="0.5"/>
      <circle cx="40" cy="160" r="14" fill="#fff" fillOpacity="0.55"/>
    </g>
    <g stroke="#fff" strokeOpacity="0.5" fill="none" strokeWidth="1">
      <path d="M0 180 Q120 140 240 180 T 480 160"/>
      <path d="M0 196 Q120 156 240 196 T 480 176"/>
    </g>
  </TVPattern>
);

// 2) Health Screening — concentric rings + pulse line
const TVScreening = () => (
  <TVPattern id="scr" c1="#B7E5F4" c2="#69D2EC">
    <g transform="translate(110 100)" stroke="#fff" strokeOpacity="0.6" fill="none">
      <circle r="80" strokeWidth="1"/>
      <circle r="60" strokeWidth="1"/>
      <circle r="40" strokeWidth="1.4"/>
      <circle r="20" strokeWidth="1.8"/>
      <circle r="6" fill="#fff" fillOpacity="0.85" stroke="none"/>
    </g>
    <g transform="translate(0 130)" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="0,30 80,30 100,30 120,8 138,52 156,18 176,30 240,30 260,30 280,18 298,42 316,30 360,30"/>
    </g>
    <g fill="#fff" fillOpacity="0.55">
      <circle cx="280" cy="50" r="5"/>
      <circle cx="310" cy="38" r="3"/>
      <circle cx="334" cy="58" r="4"/>
    </g>
  </TVPattern>
);

// 3) Orthopedics & Spine — articulated curve / vertebrae
const TVOrtho = () => (
  <TVPattern id="ort" c1="#C4E8C9" c2="#7FC084">
    <g transform="translate(180 100)">
      <path d="M-130 60 Q -80 40 -50 0 T 30 -50 T 130 -60" fill="none" stroke="#fff" strokeOpacity="0.65" strokeWidth="2.5" strokeLinecap="round"/>
      {/* vertebrae dots along curve */}
      <g fill="#fff" fillOpacity="0.88">
        <ellipse cx="-115" cy="55" rx="9" ry="6"/>
        <ellipse cx="-90" cy="40" rx="9" ry="6" transform="rotate(-15 -90 40)"/>
        <ellipse cx="-65" cy="20" rx="9" ry="6" transform="rotate(-35 -65 20)"/>
        <ellipse cx="-45" cy="-2" rx="9" ry="6" transform="rotate(-55 -45 -2)"/>
        <ellipse cx="-22" cy="-22" rx="9" ry="6" transform="rotate(-50 -22 -22)"/>
        <ellipse cx="6" cy="-38" rx="9" ry="6" transform="rotate(-35 6 -38)"/>
        <ellipse cx="40" cy="-50" rx="9" ry="6" transform="rotate(-20 40 -50)"/>
        <ellipse cx="78" cy="-58" rx="9" ry="6" transform="rotate(-10 78 -58)"/>
        <ellipse cx="118" cy="-60" rx="9" ry="6"/>
      </g>
    </g>
    {/* movement arc — motion lines */}
    <g stroke="#fff" strokeOpacity="0.35" strokeWidth="1.4" fill="none">
      <path d="M30 170 Q 180 130 330 170"/>
      <path d="M50 184 Q 180 150 310 184"/>
    </g>
  </TVPattern>
);

// 4) Plastic Surgery — geometric proportion grid (no face)
const TVPlastic = () => (
  <TVPattern id="pls" c1="#FFC4D2" c2="#FF92AC">
    <g transform="translate(180 105)" stroke="#fff" strokeOpacity="0.6" fill="none">
      {/* Phi golden rectangles, nested */}
      <rect x="-100" y="-65" width="200" height="130" rx="4" strokeWidth="1.2"/>
      <rect x="-100" y="-65" width="124" height="130" rx="4" strokeWidth="1"/>
      <rect x="-100" y="-19" width="124" height="84" rx="4" strokeWidth="1"/>
      <rect x="-100" y="-19" width="76" height="84" rx="4" strokeWidth="1"/>
      <rect x="-52" y="-19" width="76" height="52" rx="4" strokeWidth="1"/>
      {/* Phi spiral */}
      <path d="M-100 65 A 124 124 0 0 1 24 -65 A 76 76 0 0 1 24 65 A 48 48 0 0 1 -24 17" strokeWidth="1.6" strokeLinecap="round"/>
      {/* Anchor dots */}
      <circle cx="-100" cy="65" r="3" fill="#fff" stroke="none"/>
      <circle cx="100" cy="-65" r="3" fill="#fff" stroke="none"/>
      <circle cx="24" cy="65" r="3" fill="#fff" stroke="none"/>
    </g>
    <text x="320" y="186" textAnchor="end" fill="#fff" fillOpacity="0.55" style={{font:"700 9px 'Lato', sans-serif", letterSpacing:"0.18em"}}>φ · 1.618</text>
  </TVPattern>
);

// 5) Oncology — molecular network (calm, professional)
const TVOncology = () => (
  <TVPattern id="onc" c1="#173E66" c2="#03ACF2">
    <g stroke="#fff" strokeOpacity="0.4" fill="none" strokeWidth="1">
      <line x1="60" y1="60" x2="140" y2="100"/>
      <line x1="140" y1="100" x2="220" y2="60"/>
      <line x1="140" y1="100" x2="200" y2="160"/>
      <line x1="60" y1="60" x2="80" y2="140"/>
      <line x1="80" y1="140" x2="200" y2="160"/>
      <line x1="220" y1="60" x2="290" y2="100"/>
      <line x1="290" y1="100" x2="320" y2="160"/>
      <line x1="200" y1="160" x2="290" y2="100"/>
      <line x1="80" y1="140" x2="140" y2="100"/>
    </g>
    <g fill="#fff">
      <circle cx="60" cy="60" r="5" fillOpacity="0.85"/>
      <circle cx="140" cy="100" r="9" fillOpacity="1"/>
      <circle cx="220" cy="60" r="6" fillOpacity="0.85"/>
      <circle cx="80" cy="140" r="5" fillOpacity="0.7"/>
      <circle cx="200" cy="160" r="7" fillOpacity="0.85"/>
      <circle cx="290" cy="100" r="8" fillOpacity="1"/>
      <circle cx="320" cy="160" r="4" fillOpacity="0.7"/>
    </g>
    <g fill="#69D2EC">
      <circle cx="140" cy="100" r="3"/>
      <circle cx="290" cy="100" r="3"/>
    </g>
  </TVPattern>
);

// 6) Dental — abstract smile arcs (no face)
const TVDental = () => (
  <TVPattern id="den" c1="#DCF1FA" c2="#7DCAE3">
    <g transform="translate(180 110)" stroke="#fff" fill="none">
      {/* Arcs forming abstract smile / arches */}
      <path d="M-110 0 Q 0 80 110 0" strokeOpacity="0.45" strokeWidth="2"/>
      <path d="M-130 -10 Q 0 90 130 -10" strokeOpacity="0.3" strokeWidth="1.4"/>
      <path d="M-90 10 Q 0 70 90 10" strokeOpacity="0.6" strokeWidth="2"/>
      {/* Tooth tick marks along the arc */}
      <g stroke="#fff" strokeOpacity="0.85" strokeWidth="2.5" strokeLinecap="round">
        <line x1="-90" y1="10" x2="-90" y2="-2"/>
        <line x1="-66" y1="32" x2="-66" y2="20"/>
        <line x1="-38" y1="50" x2="-38" y2="38"/>
        <line x1="-12" y1="60" x2="-12" y2="48"/>
        <line x1="14" y1="60" x2="14" y2="48"/>
        <line x1="40" y1="50" x2="40" y2="38"/>
        <line x1="68" y1="32" x2="68" y2="20"/>
        <line x1="90" y1="10" x2="90" y2="-2"/>
      </g>
    </g>
    {/* Sparkle */}
    <g transform="translate(290 50)" fill="#fff">
      <path d="M0 -12 L3 -3 L12 0 L3 3 L0 12 L-3 3 L-12 0 L-3 -3 Z" fillOpacity="0.85"/>
    </g>
    <g transform="translate(70 160)" fill="#fff">
      <path d="M0 -7 L2 -2 L7 0 L2 2 L0 7 L-2 2 L-7 0 L-2 -2 Z" fillOpacity="0.7"/>
    </g>
  </TVPattern>
);

const TREAT_VISUAL = {
  Dermatology: <TVDermatology/>,
  "Health Screening": <TVScreening/>,
  Orthopedics: <TVOrtho/>,
  "Plastic Surgery": <TVPlastic/>,
  Oncology: <TVOncology/>,
  Dental: <TVDental/>,
};

// ============================================================================
// HOSPITAL MONOGRAMS — Custom mark + wordmark per hospital
// All marks are abstract / generic geometric — not real hospital logos.
// Each card carries a "Monogram" tag so it's clear these are not actual logos.
// ============================================================================
const HMark = ({ kind }) => {
  const W = 56, H = 56;
  switch (kind) {
    case "asan":
      return (
        <svg viewBox="0 0 56 56" width={W} height={H}>
          {/* Mountain/peak */}
          <rect x="0" y="0" width="56" height="56" rx="14" fill="#00579B"/>
          <path d="M8 42 L22 22 L30 30 L40 18 L48 42 Z" fill="#69D2EC"/>
          <circle cx="40" cy="14" r="3" fill="#fff"/>
        </svg>
      );
    case "samsung":
      return (
        <svg viewBox="0 0 56 56" width={W} height={H}>
          <rect x="0" y="0" width="56" height="56" rx="14" fill="#0a1530"/>
          <path d="M28 12 L44 28 L28 44 L12 28 Z" fill="#69D2EC" opacity="0.95"/>
          <path d="M28 18 L38 28 L28 38 L18 28 Z" fill="#fff"/>
        </svg>
      );
    case "snu":
      return (
        <svg viewBox="0 0 56 56" width={W} height={H}>
          <rect x="0" y="0" width="56" height="56" rx="14" fill="#173E66"/>
          {/* Open book */}
          <path d="M10 18 Q 28 14 28 22 L 28 42 Q 28 38 10 40 Z" fill="#fff"/>
          <path d="M46 18 Q 28 14 28 22 L 28 42 Q 28 38 46 40 Z" fill="#fff" fillOpacity="0.75"/>
          <line x1="28" y1="22" x2="28" y2="42" stroke="#173E66" strokeWidth="1"/>
        </svg>
      );
    case "severance":
      return (
        <svg viewBox="0 0 56 56" width={W} height={H}>
          <rect x="0" y="0" width="56" height="56" rx="14" fill="#003a76"/>
          {/* Serpent of Aesculapius -> simplified S+rod */}
          <line x1="28" y1="10" x2="28" y2="46" stroke="#69D2EC" strokeWidth="3" strokeLinecap="round"/>
          <path d="M28 14 Q 18 22 28 28 Q 38 34 28 42" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <circle cx="28" cy="10" r="2.5" fill="#fff"/>
        </svg>
      );
    case "guro":
      return (
        <svg viewBox="0 0 56 56" width={W} height={H}>
          <rect x="0" y="0" width="56" height="56" rx="14" fill="#7A2342"/>
          {/* K mark */}
          <rect x="14" y="12" width="5" height="32" fill="#fff"/>
          <path d="M19 28 L36 12 L42 16 L26 28 L42 40 L36 44 Z" fill="#FFA8BE"/>
        </svg>
      );
    case "pusan":
      return (
        <svg viewBox="0 0 56 56" width={W} height={H}>
          <rect x="0" y="0" width="56" height="56" rx="14" fill="#005f73"/>
          {/* Wave */}
          <path d="M6 36 Q 14 28 22 36 T 38 36 T 50 36 L 50 46 L 6 46 Z" fill="#69D2EC"/>
          <path d="M6 30 Q 14 22 22 30 T 38 30 T 50 30" stroke="#fff" strokeWidth="2" fill="none"/>
          <circle cx="42" cy="14" r="4" fill="#FFE7B3"/>
        </svg>
      );
    case "kangbuk":
      return (
        <svg viewBox="0 0 56 56" width={W} height={H}>
          <rect x="0" y="0" width="56" height="56" rx="14" fill="#0a4d78"/>
          {/* Stethoscope-ish loops */}
          <circle cx="28" cy="32" r="11" fill="none" stroke="#69D2EC" strokeWidth="3"/>
          <circle cx="28" cy="32" r="3.5" fill="#fff"/>
          <path d="M16 14 Q 16 24 24 24" stroke="#fff" strokeWidth="2.5" fill="none"/>
          <path d="M40 14 Q 40 24 32 24" stroke="#fff" strokeWidth="2.5" fill="none"/>
        </svg>
      );
    case "wooridul":
      return (
        <svg viewBox="0 0 56 56" width={W} height={H}>
          <rect x="0" y="0" width="56" height="56" rx="14" fill="#1f6f3a"/>
          {/* Vertical spine of beads */}
          <line x1="28" y1="10" x2="28" y2="46" stroke="#fff" strokeOpacity="0.4" strokeWidth="1.5"/>
          <g fill="#fff">
            <ellipse cx="28" cy="14" rx="6" ry="4"/>
            <ellipse cx="28" cy="22" rx="7" ry="4"/>
            <ellipse cx="28" cy="30" rx="8" ry="4.5"/>
            <ellipse cx="28" cy="38" rx="7" ry="4"/>
            <ellipse cx="28" cy="44" rx="6" ry="3.5"/>
          </g>
        </svg>
      );
  }
};

// ============================================================================
// PATTERN AVATARS for Patient Stories (no faces)
// ============================================================================
const PatternAvatar = ({ kind, size = 56 }) => {
  switch (kind) {
    case "ripple":
      return (
        <svg viewBox="0 0 56 56" width={size} height={size}>
          <defs>
            <linearGradient id="pa-rp" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#FFD6E1"/>
              <stop offset="1" stopColor="#69D2EC"/>
            </linearGradient>
          </defs>
          <circle cx="28" cy="28" r="28" fill="url(#pa-rp)"/>
          <g fill="none" stroke="#fff" strokeOpacity="0.85" strokeWidth="1.5">
            <circle cx="28" cy="28" r="6"/>
            <circle cx="28" cy="28" r="12"/>
            <circle cx="28" cy="28" r="18"/>
            <circle cx="28" cy="28" r="24"/>
          </g>
          <circle cx="28" cy="28" r="3" fill="#fff"/>
        </svg>
      );
    case "grid":
      return (
        <svg viewBox="0 0 56 56" width={size} height={size}>
          <defs>
            <linearGradient id="pa-gr" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#7FC084"/>
              <stop offset="1" stopColor="#69D2EC"/>
            </linearGradient>
          </defs>
          <circle cx="28" cy="28" r="28" fill="url(#pa-gr)"/>
          <g fill="#fff">
            <rect x="14" y="14" width="6" height="6" rx="1.5"/>
            <rect x="25" y="14" width="6" height="6" rx="1.5"/>
            <rect x="36" y="14" width="6" height="6" rx="1.5"/>
            <rect x="14" y="25" width="6" height="6" rx="1.5"/>
            <rect x="25" y="25" width="6" height="6" rx="1.5" fillOpacity="0.55"/>
            <rect x="36" y="25" width="6" height="6" rx="1.5"/>
            <rect x="14" y="36" width="6" height="6" rx="1.5"/>
            <rect x="25" y="36" width="6" height="6" rx="1.5"/>
            <rect x="36" y="36" width="6" height="6" rx="1.5" fillOpacity="0.55"/>
          </g>
        </svg>
      );
    case "arc":
      return (
        <svg viewBox="0 0 56 56" width={size} height={size}>
          <defs>
            <linearGradient id="pa-ar" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#FFA8BE"/>
              <stop offset="1" stopColor="#173E66"/>
            </linearGradient>
          </defs>
          <circle cx="28" cy="28" r="28" fill="url(#pa-ar)"/>
          <g fill="none" stroke="#fff" strokeOpacity="0.95" strokeWidth="2" strokeLinecap="round">
            <path d="M10 36 Q 18 24 28 32 T 46 26"/>
            <path d="M10 44 Q 22 36 30 42 T 46 38" strokeOpacity="0.55"/>
          </g>
          <circle cx="44" cy="20" r="4" fill="#fff"/>
        </svg>
      );
  }
};

// ============================================================================
// SECTIONS — re-implementations of the home sections with new visuals
// ============================================================================

const HeroHomeVisual = () => {
  const t = tk(T_HOME, useKmedLang());
  return (
  <section className="home-hero" style={{position:"relative", padding:"40px 80px 80px", overflow:"hidden", display:"block"}}>
    <div style={{position:"absolute", right:-180, top:40, width:560, height:560, borderRadius:"50%", background:"var(--kmed-pink-warm)", opacity:.65, zIndex:0}}></div>
    <div style={{position:"absolute", right:-60, top:120, width:380, height:380, borderRadius:"50%", border:"1px solid var(--kmed-aqua-soft)", zIndex:0}}></div>
    <div style={{position:"absolute", right:60, bottom:-40, width:200, height:200, borderRadius:"50%", background:"var(--gradient-soft)", opacity:.35, zIndex:0}}></div>

    <div className="home-hero__grid" style={{position:"relative", display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center", minHeight:560, zIndex:1}}>
      <div>
        <div style={{display:"flex", gap:8, marginBottom:24}}>
          <span className="trust-pill"><Icon name="shield" size={14} color="#00579B"/>{t.trustMohw}</span>
          <span className="trust-pill trust-pill--green"><Icon name="check" size={14} color="#357A38"/>{t.trustJci}</span>
        </div>
        <h1 className="kh-title kh-title--xl" style={{margin:"0 0 20px"}}>
          {t.heroTitleA}<span style={{color:"var(--kmed-aqua)"}}>{t.heroTitleAccent}</span>{t.heroTitleB}
        </h1>
        <p style={{font:"400 20px/1.55 var(--font-body)", color:"var(--text-secondary)", margin:"0 0 32px", maxWidth:540}}>
          {t.heroSub}
        </p>
        <div style={{display:"flex", alignItems:"center", gap:20, marginBottom:36}}>
          <button className="btn btn--primary btn--primary-lg">{t.heroCtaFind} <Icon name="arrow" size={16} color="#fff"/></button>
          <a href="#" className="btn btn--text" style={{fontSize:16, color:"var(--kmed-green-dark)"}}>{t.heroCtaHow}</a>
        </div>
        <div style={{display:"flex", gap:32, paddingTop:24, borderTop:"1px solid var(--kmed-line)"}}>
          <div><div style={{font:"900 28px var(--font-display)", color:"var(--kmed-green-dark)"}}>120+</div><div style={{font:"400 13px var(--font-body)", color:"var(--text-secondary)"}}>{t.statHospitals}</div></div>
          <div><div style={{font:"900 28px var(--font-display)", color:"var(--kmed-green-dark)"}}>34</div><div style={{font:"400 13px var(--font-body)", color:"var(--text-secondary)"}}>{t.statSpecialties}</div></div>
          <div><div style={{font:"900 28px var(--font-display)", color:"var(--kmed-green-dark)"}}>8,400+</div><div style={{font:"400 13px var(--font-body)", color:"var(--text-secondary)"}}>{t.statPatients}</div></div>
        </div>
      </div>

      {/* Hero illustration */}
      <div className="home-hero__art" style={{position:"relative", height:560}}>
        <div style={{position:"absolute", inset:"4% 8%", borderRadius:"50%", background:"var(--gradient-soft)", opacity:.30}}></div>
        <div style={{position:"absolute", inset:"10% 12%", borderRadius:"50%", border:"1px solid var(--kmed-aqua-soft)"}}></div>
        <div style={{position:"absolute", inset:"6% 6% 6% 6%", borderRadius:"32px", overflow:"hidden", boxShadow:"0 24px 60px -20px rgba(10,21,48,0.18), 0 1px 3px rgba(10,21,48,0.06)", zIndex:2, background:"#FDF1EF"}}>
          <HeroIllustration/>
        </div>

        {/* Floating overlay cards */}
        <div className="surface--sm home-hero__overlay" style={{position:"absolute", left:-10, top:80, padding:"14px 18px", display:"flex", alignItems:"center", gap:12, zIndex:3, boxShadow:"0 12px 30px -10px rgba(10,21,48,0.14)"}}>
          <div style={{width:36, height:36, borderRadius:10, background:"var(--kmed-aqua-soft)", display:"flex", alignItems:"center", justifyContent:"center"}}><Icon name="chat" size={18} color="#00579B"/></div>
          <div>
            <div style={{font:"700 13px var(--font-body)"}}>{t.chatTitle}</div>
            <div style={{font:"400 11px var(--font-body)", color:"var(--text-secondary)"}}>{t.chatLangs}</div>
          </div>
        </div>
        <div className="surface--sm home-hero__overlay" style={{position:"absolute", right:-20, bottom:60, padding:"14px 18px", display:"flex", alignItems:"center", gap:12, zIndex:3, boxShadow:"0 12px 30px -10px rgba(10,21,48,0.14)"}}>
          <div style={{width:36, height:36, borderRadius:10, background:"rgba(76,175,80,0.14)", display:"flex", alignItems:"center", justifyContent:"center"}}><Icon name="plane" size={18} color="#357A38"/></div>
          <div>
            <div style={{font:"700 13px var(--font-body)"}}>{t.visaTitle}</div>
            <div style={{font:"400 11px var(--font-body)", color:"var(--text-secondary)"}}>{t.visaSub}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

// Treatment chip row — same as before, kept for system continuity
const TreatmentChipsVisual = () => {
  const t = tk(T_HOME, useKmedLang());
  const items = [
    { icon: "sparkle", label: t.chipDerm,      color: "var(--kmed-pink)",       catKey: "dermatology" },
    { icon: "medkit",  label: t.chipPlastic,   color: "var(--kmed-pink)",       catKey: "plastic" },
    { icon: "shield",  label: t.chipScreening, color: "var(--kmed-aqua)",       catKey: "screening" },
    { icon: "award",   label: t.chipOrtho,     color: "var(--kmed-aqua)",       catKey: "orthopedics" },
    { icon: "star",    label: t.chipOncology,  color: "var(--kmed-green-dark)", catKey: "oncology" },
    { icon: "user",    label: t.chipFertility, color: "var(--kmed-green-dark)", catKey: "fertility" },
    { icon: "medkit",  label: t.chipDental,    color: "var(--kmed-aqua)",       catKey: "dental" },
    { icon: "plus",    label: t.chipViewAll,   color: "var(--kmed-navy)",       catKey: "all" },
  ];
  return (
    <section style={{padding:"0 80px 64px"}}>
      <div className="surface chip-row" style={{padding:"32px 40px", display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:20}}>
        {items.map((it,i)=>(
          <a key={i} href="#" onClick={e=>{e.preventDefault(); kmedJumpToCategory(it.catKey);}} style={{display:"flex", alignItems:"center", gap:14, padding:"14px 8px", borderRadius:14, textDecoration:"none", color:"var(--text-primary)", cursor:"pointer", transition:"background .15s"}} onMouseOver={e=>e.currentTarget.style.background="var(--kmed-bg-soft)"} onMouseOut={e=>e.currentTarget.style.background="transparent"}>
            <span style={{width:44, height:44, borderRadius:12, background:"#fff", border:"1px solid var(--kmed-line)", display:"flex", alignItems:"center", justifyContent:"center"}}><Icon name={it.icon} size={20} color={it.color}/></span>
            <span style={{font:"700 15px var(--font-body)"}}>{it.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

const FeaturedTreatmentsVisual = () => {
  const t = tk(T_HOME, useKmedLang());
  const items = [
    { cat:t.catDerm,      catKey:"dermatology", title:t.tDerm,    desc:t.tDermDesc,    price:"USD 480 – 2,400",   visual: <TVDermatology/> },
    { cat:t.catScreening, catKey:"screening",   title:t.tScreen,  desc:t.tScreenDesc,  price:"USD 1,800 – 4,200", visual: <TVScreening/> },
    { cat:t.catOrtho,     catKey:"orthopedics", title:t.tOrtho,   desc:t.tOrthoDesc,   price:"USD 8,500 – 22,000",visual: <TVOrtho/> },
    { cat:t.catPlastic,   catKey:"plastic",     title:t.tPlastic, desc:t.tPlasticDesc, price:"USD 2,200 – 12,000",visual: <TVPlastic/> },
    { cat:t.catOncology,  catKey:"oncology",    title:t.tOnc,     desc:t.tOncDesc,     price:"USD 950 – 3,200",   visual: <TVOncology/> },
    { cat:t.catDental,    catKey:"dental",      title:t.tDent,    desc:t.tDentDesc,    price:"USD 1,200 – 9,800", visual: <TVDental/> },
  ];
  return (
    <section style={{padding:"0 80px 80px"}}>
      <div style={{display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:32}}>
        <div>
          <div className="eyebrow">{t.featEyebrow}</div>
          <h2 className="kh-title" style={{margin:"8px 0 0"}}>{t.featTitle}</h2>
        </div>
        <a href="#" className="btn btn--ghost" onClick={e=>{e.preventDefault(); kmedJumpToCategory("all");}}>{t.featBrowseAll} <Icon name="arrow" size={14}/></a>
      </div>
      <div className="card-grid-3" style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:28}}>
        {items.map((it,i)=>(
          <div key={i} className="tcard" onClick={()=>kmedJumpToCategory(it.catKey)} style={{cursor:"pointer", transition:"transform .15s ease, box-shadow .15s ease"}} onMouseOver={e=>{e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 14px 32px -10px rgba(10,21,48,0.18)";}} onMouseOut={e=>{e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow="";}}>
            <div className="tcard__media" style={{padding:0, height:200, position:"relative", overflow:"hidden"}}>
              {it.visual}
              <div className="tcard__pin" style={{position:"absolute", top:16, left:16, zIndex:2}}>{it.cat}</div>
            </div>
            <div className="tcard__body">
              <div className="tcard__title">{it.title}</div>
              <div className="tcard__desc">{it.desc}</div>
              <div className="tcard__foot">
                <div className="tcard__price"><small>{t.featPriceLabel}</small>{it.price}</div>
                <a href="#" className="btn btn--text" onClick={e=>e.stopPropagation()}>{t.featDetails}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const PartnerHospitalsVisual = () => {
  const t = tk(T_HOME, useKmedLang());
  const items = [
    { mark:"asan",      name:t.hAsan,      loc:t.hAsanLoc,      tags:[t.tagJci, t.tagCancer, t.tagCardio] },
    { mark:"samsung",   name:t.hSamsung,   loc:t.hSamsungLoc,   tags:[t.tagJci, t.tagTransplant, t.tagOncology] },
    { mark:"snu",       name:t.hSnu,       loc:t.hSnuLoc,       tags:[t.tagTertiary, t.tagResearch] },
    { mark:"severance", name:t.hSeverance, loc:t.hSeveranceLoc, tags:[t.tagJci, t.tagRobotics] },
    { mark:"guro",      name:t.hGuro,      loc:t.hGuroLoc,      tags:[t.tagStroke, t.tagSpine] },
    { mark:"pusan",     name:t.hPusan,     loc:t.hPusanLoc,     tags:[t.tagTertiary, t.tagDental] },
    { mark:"kangbuk",   name:t.hKangbuk,   loc:t.hKangbukLoc,   tags:[t.tagScreening] },
    { mark:"wooridul",  name:t.hWooridul,  loc:t.hWooridulLoc,  tags:[t.tagSpine, t.tagPain] },
  ];
  return (
    <section style={{padding:"0 80px 80px", background:"linear-gradient(180deg, transparent, #F5FBFE)"}}>
      <div style={{display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:32}}>
        <div>
          <div className="eyebrow">{t.netEyebrow}</div>
          <h2 className="kh-title" style={{margin:"8px 0 0"}}>{t.netTitle}</h2>
          <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)", marginTop:8, fontStyle:"italic"}}>{t.netLogoNote}</div>
        </div>
        <a href="#" className="btn btn--ghost">{t.netDirectory} <Icon name="arrow" size={14}/></a>
      </div>
      <div className="card-grid-4" style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:20}}>
        {items.map((h,i)=>(
          <div key={i} className="hcard" style={{padding:"18px 18px"}}>
            <div style={{flexShrink:0}}><HMark kind={h.mark}/></div>
            <div style={{flex:1, minWidth:0}}>
              <div className="hcard__name" style={{whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>{h.name}</div>
              <div className="hcard__loc">{h.loc}</div>
              <div className="hcard__tags">{h.tags.slice(0,2).map(tg=><span key={tg} className="hcard__tag">{tg}</span>)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const StoryStripVisual = () => {
  const t = tk(T_HOME, useKmedLang());
  const items = [
    { quote:t.stQuote1, name:"Sakura T.", meta:t.stMeta1, tags:[t.catOrtho,"JP"], avatar:"ripple" },
    { quote:t.stQuote2, name:"David L.", meta:t.stMeta2, tags:[t.catScreening,"EN"], avatar:"grid" },
    { quote:t.stQuote3, name:"Wei C.", meta:t.stMeta3, tags:[t.catDerm,"ZH"], avatar:"arc" },
  ];
  return (
    <section style={{padding:"60px 80px 80px"}}>
      <div style={{display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:32}}>
        <div>
          <div className="eyebrow">{t.storiesEyebrow}</div>
          <h2 className="kh-title" style={{margin:"8px 0 0"}}>{t.storiesTitle}</h2>
        </div>
        <a href="#" className="btn btn--ghost">{t.storiesReadAll} <Icon name="arrow" size={14}/></a>
      </div>
      <div className="card-grid-3 stories-grid" style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:24}}>
        {items.map((s,i)=>(
          <div key={i} className="story">
            <div className="story__quote">{s.quote}</div>
            <div className="story__tags">{s.tags.map(tg=><span key={tg} className="story__tag">{tg}</span>)}</div>
            <div className="story__patient">
              <div style={{width:48, height:48, borderRadius:"50%", overflow:"hidden", flexShrink:0}}>
                <PatternAvatar kind={s.avatar} size={48}/>
              </div>
              <div>
                <div className="story__name">{s.name}</div>
                <div className="story__meta">{s.meta}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Reuse desktop sections that don't need new visuals (HowItWorks, ContactCtaBanner)
const HomePageVisual = () => (
  <div className="kmed-page" data-bp="desktop" data-screen-label="01 Home — Visual mockup (Desktop 1440)">
    <Header active="home" bp="desktop" drawerOpen={false}/>
    <HeroHomeVisual/>
    <TreatmentChipsVisual/>
    <HowItWorks/>
    <FeaturedTreatmentsVisual/>
    <PartnerHospitalsVisual/>
    <StoryStripVisual/>
    <ContactCtaBanner/>
    <Footer bp="desktop"/>
  </div>
);

window.HomePageVisual = HomePageVisual;
