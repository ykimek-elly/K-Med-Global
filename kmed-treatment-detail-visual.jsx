// kmed-treatment-detail-visual.jsx — Tone-and-manner visual mockup
// Treatment Detail (Dermatology & K-Beauty), Desktop 1440.
// Reuses the SVG vocabulary established in kmed-home-visual.jsx.

// ============================================================================
// HERO — K-Beauty editorial still life (no faces, no skin close-ups)
// Vanity tabletop scene: ampoule bottles, cotton pads, mirror with reflected
// daylight, leafy plant. Pink wash, soft sunlight. Conveys K-Beauty ritual
// without depicting people or treatment outcomes.
// ============================================================================
const KBeautyStillLife = () => (
  <svg viewBox="0 0 460 345" xmlns="http://www.w3.org/2000/svg" style={{width:"100%", height:"100%", display:"block"}} role="img" aria-label="Editorial still life — skincare ampoules, cotton pads, hand mirror, plant.">
    <defs>
      <linearGradient id="kb-bg" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#FFE0E6"/>
        <stop offset="0.55" stopColor="#FDE7EE"/>
        <stop offset="1" stopColor="#F8BBD0"/>
      </linearGradient>
      <linearGradient id="kb-counter" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#F5E6E0"/>
        <stop offset="1" stopColor="#E8C9C0"/>
      </linearGradient>
      <linearGradient id="kb-bottle1" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#FFA8BE"/>
        <stop offset="1" stopColor="#E91E63"/>
      </linearGradient>
      <linearGradient id="kb-bottle2" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#B7E5F4"/>
        <stop offset="1" stopColor="#03ACF2"/>
      </linearGradient>
      <linearGradient id="kb-bottle3" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#FFF8E1"/>
        <stop offset="1" stopColor="#FFD89E"/>
      </linearGradient>
      <radialGradient id="kb-sun" cx="0.85" cy="0.18" r="0.55">
        <stop offset="0" stopColor="#FFF6DA" stopOpacity="0.95"/>
        <stop offset="1" stopColor="#FFF6DA" stopOpacity="0"/>
      </radialGradient>
      <radialGradient id="kb-mirror" cx="0.35" cy="0.3" r="0.7">
        <stop offset="0" stopColor="#FFF6DA"/>
        <stop offset="0.7" stopColor="#E1F4FB"/>
        <stop offset="1" stopColor="#A8D8E8"/>
      </radialGradient>
      <pattern id="kb-grain" width="3" height="3" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.4" fill="#0a1530" fillOpacity="0.05"/>
      </pattern>
    </defs>

    {/* Backdrop */}
    <rect x="0" y="0" width="460" height="345" fill="url(#kb-bg)"/>
    <rect x="0" y="0" width="460" height="345" fill="url(#kb-grain)"/>
    <ellipse cx="380" cy="50" rx="200" ry="120" fill="url(#kb-sun)"/>

    {/* Window-light slants */}
    <g opacity="0.45">
      <path d="M270 0 L420 0 L300 220 L160 220 Z" fill="#FFF6DA"/>
    </g>

    {/* Counter / table surface */}
    <rect x="0" y="220" width="460" height="125" fill="url(#kb-counter)"/>
    <line x1="0" y1="222" x2="460" y2="222" stroke="#0a1530" strokeOpacity="0.07" strokeWidth="2"/>
    <ellipse cx="230" cy="232" rx="240" ry="6" fill="#0a1530" fillOpacity="0.06"/>

    {/* Plant — back left */}
    <g transform="translate(70 165)">
      <rect x="-22" y="40" width="44" height="40" rx="3" fill="#7A4A2E"/>
      <rect x="-18" y="40" width="36" height="3" fill="#fff" fillOpacity="0.4"/>
      <g fill="#4CAF50">
        <ellipse cx="0" cy="10" rx="7" ry="28" transform="rotate(-12)"/>
        <ellipse cx="-4" cy="14" rx="6" ry="24" transform="rotate(-30 -4 14)"/>
        <ellipse cx="6" cy="12" rx="6" ry="26" transform="rotate(15 6 12)"/>
        <ellipse cx="0" cy="8" rx="5" ry="22" transform="rotate(40)"/>
      </g>
      <g fill="#357A38" opacity="0.75">
        <ellipse cx="-2" cy="18" rx="4" ry="18" transform="rotate(-50 -2 18)"/>
        <ellipse cx="3" cy="20" rx="4" ry="16" transform="rotate(28 3 20)"/>
      </g>
    </g>

    {/* Hand mirror — back right */}
    <g transform="translate(335 130) rotate(-8)">
      <rect x="-4" y="50" width="8" height="78" rx="3" fill="#7A4A2E"/>
      <rect x="-12" y="115" width="24" height="14" rx="3" fill="#5A3A22"/>
      <circle cx="0" cy="22" r="46" fill="#0a1530" fillOpacity="0.18"/>
      <circle cx="0" cy="20" r="44" fill="#7A4A2E"/>
      <circle cx="0" cy="20" r="38" fill="url(#kb-mirror)"/>
      {/* Reflection: leafy silhouette */}
      <g opacity="0.45" clipPath="circle(38px at 0 20)">
        <ellipse cx="-12" cy="20" rx="6" ry="20" fill="#357A38"/>
        <ellipse cx="-4" cy="18" rx="6" ry="18" fill="#4CAF50"/>
        <ellipse cx="4" cy="22" rx="5" ry="16" fill="#357A38"/>
      </g>
      {/* Reflection highlight */}
      <ellipse cx="-12" cy="6" rx="14" ry="9" fill="#fff" fillOpacity="0.55"/>
    </g>

    {/* Tray with cotton pads */}
    <g transform="translate(150 250)">
      <ellipse cx="0" cy="14" rx="76" ry="9" fill="#0a1530" fillOpacity="0.18"/>
      <rect x="-72" y="-4" width="144" height="18" rx="6" fill="#fff" stroke="#0a1530" strokeOpacity="0.08"/>
      <rect x="-72" y="-4" width="144" height="4" fill="#FFD6E1"/>
      {/* cotton pads stacked */}
      <g>
        <ellipse cx="-44" cy="-6" rx="14" ry="4" fill="#fff" stroke="#0a1530" strokeOpacity="0.1"/>
        <ellipse cx="-44" cy="-10" rx="14" ry="4" fill="#fff" stroke="#0a1530" strokeOpacity="0.1"/>
        <ellipse cx="-44" cy="-14" rx="14" ry="4" fill="#fff" stroke="#0a1530" strokeOpacity="0.1"/>
      </g>
      {/* small dropper */}
      <g transform="translate(20 -22)">
        <rect x="-3" y="-12" width="6" height="14" rx="1" fill="#7A4A2E"/>
        <rect x="-2" y="2" width="4" height="10" fill="#FFA8BE" opacity="0.6"/>
        <line x1="0" y1="14" x2="0" y2="22" stroke="#FFA8BE" strokeWidth="1.5"/>
      </g>
      {/* small folded towel */}
      <g transform="translate(48 -12)">
        <rect x="-12" y="-2" width="24" height="14" rx="2" fill="#FDE7EE"/>
        <rect x="-12" y="-2" width="24" height="3" fill="#FFA8BE"/>
        <line x1="-8" y1="6" x2="8" y2="6" stroke="#fff" strokeWidth="1"/>
      </g>
    </g>

    {/* Bottle 1 — pink ampoule with dropper, front-left */}
    <g transform="translate(115 240)">
      <ellipse cx="0" cy="2" rx="20" ry="3" fill="#0a1530" fillOpacity="0.18"/>
      <path d="M-16 0 Q -16 -50 -10 -56 L 10 -56 Q 16 -50 16 0 Z" fill="url(#kb-bottle1)"/>
      <ellipse cx="0" cy="0" rx="16" ry="3" fill="#0a1530" fillOpacity="0.18"/>
      <path d="M-12 -56 L 12 -56 L 12 -64 L -12 -64 Z" fill="#3B2A24"/>
      <rect x="-6" y="-72" width="12" height="10" fill="#FFA8BE" rx="1"/>
      <rect x="-2" y="-78" width="4" height="6" fill="#7A4A2E"/>
      {/* label */}
      <rect x="-12" y="-32" width="24" height="22" fill="#fff" fillOpacity="0.9" rx="1"/>
      <line x1="-8" y1="-26" x2="8" y2="-26" stroke="#E91E63" strokeWidth="1"/>
      <line x1="-8" y1="-22" x2="4" y2="-22" stroke="#0a1530" strokeOpacity="0.4" strokeWidth="0.8"/>
      <line x1="-8" y1="-18" x2="6" y2="-18" stroke="#0a1530" strokeOpacity="0.3" strokeWidth="0.8"/>
      {/* highlight */}
      <path d="M-13 -50 Q -14 -20 -13 -2" stroke="#fff" strokeOpacity="0.45" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    </g>

    {/* Bottle 2 — aqua spray, center-front */}
    <g transform="translate(208 245)">
      <ellipse cx="0" cy="3" rx="22" ry="3" fill="#0a1530" fillOpacity="0.18"/>
      <rect x="-18" y="-58" width="36" height="62" rx="5" fill="url(#kb-bottle2)"/>
      <rect x="-18" y="-58" width="36" height="6" rx="3" fill="#03ACF2"/>
      <rect x="-8" y="-66" width="16" height="8" fill="#0a1530"/>
      <rect x="-2" y="-76" width="4" height="10" fill="#7A4A2E"/>
      <circle cx="0" cy="-72" r="2.5" fill="#FFA8BE"/>
      {/* label */}
      <rect x="-14" y="-36" width="28" height="22" fill="#fff" fillOpacity="0.95" rx="1"/>
      <text x="0" y="-22" textAnchor="middle" fill="#00579B" style={{font:"700 6px 'Lato', sans-serif", letterSpacing:"0.15em"}}>HYDRA</text>
      <line x1="-10" y1="-18" x2="10" y2="-18" stroke="#69D2EC" strokeWidth="1"/>
      {/* highlight */}
      <path d="M-15 -50 L -15 -10" stroke="#fff" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round"/>
      {/* spritz dots */}
      <g fill="#69D2EC" opacity="0.7">
        <circle cx="-30" cy="-78" r="1.5"/>
        <circle cx="-22" cy="-86" r="1"/>
        <circle cx="-36" cy="-72" r="1"/>
      </g>
    </g>

    {/* Bottle 3 — amber jar, front-right */}
    <g transform="translate(298 250)">
      <ellipse cx="0" cy="2" rx="22" ry="3" fill="#0a1530" fillOpacity="0.18"/>
      <rect x="-22" y="-32" width="44" height="34" rx="6" fill="url(#kb-bottle3)"/>
      <ellipse cx="0" cy="-32" rx="22" ry="5" fill="#7A4A2E"/>
      <ellipse cx="0" cy="-34" rx="22" ry="5" fill="#9A6A4E"/>
      {/* label band */}
      <rect x="-22" y="-20" width="44" height="14" fill="#fff" fillOpacity="0.92"/>
      <text x="0" y="-10" textAnchor="middle" fill="#7A4A2E" style={{font:"700 6px 'Lato', sans-serif", letterSpacing:"0.18em"}}>RENEWAL</text>
      {/* highlight */}
      <path d="M-18 -26 Q -18 -8 -18 0" stroke="#fff" strokeOpacity="0.6" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    </g>

    {/* Tiny floating sparkles for K-beauty feel */}
    <g fill="#fff" opacity="0.85">
      <path d="M380 60 L382 65 L387 67 L382 69 L380 74 L378 69 L373 67 L378 65 Z"/>
      <path d="M50 80 L51 83 L54 84 L51 85 L50 88 L49 85 L46 84 L49 83 Z" opacity="0.7"/>
      <path d="M260 130 L262 134 L266 135 L262 136 L260 140 L258 136 L254 135 L258 134 Z" opacity="0.6"/>
    </g>

    {/* Subtle border */}
    <rect x="0.5" y="0.5" width="459" height="344" fill="none" stroke="#0a1530" strokeOpacity="0.06"/>
  </svg>
);

// ============================================================================
// PROCEDURE ICONS — 5 distinct geometric/abstract icons matching home vocabulary
// ============================================================================
const ProcedureIcon = ({ kind }) => {
  const c = "#00579B"; const cAccent = "#69D2EC";
  switch (kind) {
    case "consult":
      return (
        <svg viewBox="0 0 28 28" width="28" height="28">
          <rect x="6" y="3" width="16" height="22" rx="2" fill="none" stroke={c} strokeWidth="1.6"/>
          <rect x="10" y="2" width="8" height="4" rx="1" fill={cAccent}/>
          <line x1="9" y1="11" x2="19" y2="11" stroke={c} strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="9" y1="15" x2="17" y2="15" stroke={c} strokeOpacity="0.5" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="9" y1="19" x2="15" y2="19" stroke={c} strokeOpacity="0.5" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      );
    case "facial":
      return (
        <svg viewBox="0 0 28 28" width="28" height="28">
          {/* droplet */}
          <path d="M14 3 Q 22 14 22 18 A 8 8 0 0 1 6 18 Q 6 14 14 3 Z" fill="none" stroke={c} strokeWidth="1.6"/>
          <path d="M11 18 A 4 4 0 0 0 17 22" fill="none" stroke={cAccent} strokeWidth="1.6" strokeLinecap="round"/>
          <circle cx="11" cy="14" r="1.2" fill={cAccent}/>
        </svg>
      );
    case "laser":
      return (
        <svg viewBox="0 0 28 28" width="28" height="28">
          {/* sparkle / beam */}
          <path d="M14 2 L16 11 L25 14 L16 17 L14 26 L12 17 L3 14 L12 11 Z" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1.4" strokeLinejoin="round"/>
          <circle cx="14" cy="14" r="2.5" fill={cAccent}/>
        </svg>
      );
    case "hifu":
      return (
        <svg viewBox="0 0 28 28" width="28" height="28">
          {/* concentric waves */}
          <g fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round">
            <path d="M6 14 A 8 8 0 0 1 22 14" />
            <path d="M9 14 A 5 5 0 0 1 19 14" strokeOpacity="0.7"/>
            <path d="M12 14 A 2 2 0 0 1 16 14" strokeOpacity="0.5"/>
          </g>
          <circle cx="14" cy="14" r="1.6" fill={cAccent}/>
          <line x1="14" y1="20" x2="14" y2="25" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      );
    case "kit":
      return (
        <svg viewBox="0 0 28 28" width="28" height="28">
          <rect x="4" y="9" width="20" height="15" rx="2" fill="none" stroke={c} strokeWidth="1.6"/>
          <path d="M4 14 L24 14" stroke={c} strokeWidth="1.4"/>
          <path d="M10 9 V 6 A 2 2 0 0 1 12 4 H 16 A 2 2 0 0 1 18 6 V 9" fill="none" stroke={c} strokeWidth="1.4"/>
          <circle cx="14" cy="19" r="2" fill={cAccent}/>
          <path d="M12.5 19 L13.5 20 L15.5 18" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
  }
};

// ============================================================================
// META ICONS — small inline icons for hero meta strip
// ============================================================================
const MetaIcon = ({ kind, c = "#00579B" }) => {
  switch (kind) {
    case "price": return (
      <svg viewBox="0 0 16 16" width="14" height="14"><path d="M11 2 L13 4 L7 13 L2 13 L2 8 Z" fill="none" stroke={c} strokeWidth="1.4"/><circle cx="11" cy="5" r="1" fill={c}/></svg>
    );
    case "stay": return (
      <svg viewBox="0 0 16 16" width="14" height="14"><rect x="2" y="3" width="12" height="11" rx="1.5" fill="none" stroke={c} strokeWidth="1.4"/><line x1="2" y1="6" x2="14" y2="6" stroke={c} strokeWidth="1.4"/><circle cx="6" cy="9.5" r="0.9" fill={c}/><circle cx="10" cy="9.5" r="0.9" fill={c}/></svg>
    );
    case "anesthesia": return (
      <svg viewBox="0 0 16 16" width="14" height="14"><circle cx="8" cy="8" r="5.5" fill="none" stroke={c} strokeWidth="1.4"/><circle cx="8" cy="8" r="1.5" fill={c}/></svg>
    );
    case "recovery": return (
      <svg viewBox="0 0 16 16" width="14" height="14"><path d="M2 8 A 6 6 0 1 1 12 12.5" fill="none" stroke={c} strokeWidth="1.4" strokeLinecap="round"/><polyline points="2,4 2,8 6,8" fill="none" stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
    );
  }
};

// ============================================================================
// DOCTOR PATTERN AVATARS — abstract, with subtle medical motif (cross / ECG / waveform)
// to signal "specialist" while staying consistent with patient avatar vocabulary.
// ============================================================================
const DoctorAvatar = ({ kind, size = 48 }) => {
  switch (kind) {
    case "cross":
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <defs>
            <linearGradient id="da-c" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#69D2EC"/>
              <stop offset="1" stopColor="#00579B"/>
            </linearGradient>
          </defs>
          <circle cx="24" cy="24" r="24" fill="url(#da-c)"/>
          <g fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="1">
            <circle cx="24" cy="24" r="16"/>
            <circle cx="24" cy="24" r="10"/>
          </g>
          <g fill="#fff">
            <rect x="20" y="14" width="8" height="20" rx="1.5"/>
            <rect x="14" y="20" width="20" height="8" rx="1.5"/>
          </g>
        </svg>
      );
    case "ecg":
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <defs>
            <linearGradient id="da-e" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#7FC084"/>
              <stop offset="1" stopColor="#173E66"/>
            </linearGradient>
          </defs>
          <circle cx="24" cy="24" r="24" fill="url(#da-e)"/>
          <g fill="none" stroke="#fff" strokeOpacity="0.45" strokeWidth="1">
            <circle cx="24" cy="24" r="16"/>
          </g>
          <polyline points="8,26 14,26 17,20 21,32 25,16 29,30 33,22 40,22"
                    fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="40" cy="22" r="2.5" fill="#fff"/>
        </svg>
      );
    case "waveform":
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <defs>
            <linearGradient id="da-w" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#FFA8BE"/>
              <stop offset="1" stopColor="#7A2342"/>
            </linearGradient>
          </defs>
          <circle cx="24" cy="24" r="24" fill="url(#da-w)"/>
          <g stroke="#fff" strokeWidth="2.2" strokeLinecap="round" fill="none">
            <line x1="11" y1="24" x2="11" y2="24" strokeOpacity="0.5"/>
            <line x1="15" y1="20" x2="15" y2="28" strokeOpacity="0.65"/>
            <line x1="19" y1="16" x2="19" y2="32" strokeOpacity="0.85"/>
            <line x1="23" y1="13" x2="23" y2="35"/>
            <line x1="27" y1="17" x2="27" y2="31" strokeOpacity="0.85"/>
            <line x1="31" y1="20" x2="31" y2="28" strokeOpacity="0.65"/>
            <line x1="35" y1="22" x2="35" y2="26" strokeOpacity="0.5"/>
          </g>
          <circle cx="38" cy="13" r="3" fill="#fff" fillOpacity="0.85"/>
          <path d="M37 13 L37.7 14 L39.5 12" stroke="#7A2342" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
  }
};

// ============================================================================
// CLINIC MONOGRAMS — 3 derm-clinic marks, same vocabulary as Home's hospitals
// ============================================================================
const ClinicMark = ({ kind }) => {
  switch (kind) {
    case "lumina":
      return (
        <svg viewBox="0 0 48 48" width="48" height="48">
          <rect x="0" y="0" width="48" height="48" rx="12" fill="#7A2342"/>
          {/* Light-burst — Lumina = light */}
          <g stroke="#FFA8BE" strokeWidth="2" strokeLinecap="round">
            <line x1="24" y1="10" x2="24" y2="16"/>
            <line x1="24" y1="32" x2="24" y2="38"/>
            <line x1="10" y1="24" x2="16" y2="24"/>
            <line x1="32" y1="24" x2="38" y2="24"/>
            <line x1="14" y1="14" x2="18" y2="18" strokeOpacity="0.7"/>
            <line x1="30" y1="30" x2="34" y2="34" strokeOpacity="0.7"/>
            <line x1="34" y1="14" x2="30" y2="18" strokeOpacity="0.7"/>
            <line x1="18" y1="30" x2="14" y2="34" strokeOpacity="0.7"/>
          </g>
          <circle cx="24" cy="24" r="6" fill="#fff"/>
          <circle cx="24" cy="24" r="3" fill="#FFA8BE"/>
        </svg>
      );
    case "ssi":
      return (
        <svg viewBox="0 0 48 48" width="48" height="48">
          <rect x="0" y="0" width="48" height="48" rx="12" fill="#003a76"/>
          {/* Layered S — Seoul Skin Institute */}
          <path d="M14 16 Q 14 12 18 12 L 30 12 Q 34 12 34 16 Q 34 20 30 20 L 18 20 Q 14 20 14 24 Q 14 28 18 28 L 30 28 Q 34 28 34 32 Q 34 36 30 36 L 14 36"
                fill="none" stroke="#69D2EC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="38" cy="36" r="3" fill="#fff"/>
        </svg>
      );
    case "bom":
      return (
        <svg viewBox="0 0 48 48" width="48" height="48">
          <rect x="0" y="0" width="48" height="48" rx="12" fill="#1f6f3a"/>
          {/* Bom = "spring" in Korean — abstract bud / bloom */}
          <g transform="translate(24 26)">
            <ellipse cx="0" cy="-6" rx="5" ry="9" fill="#FFA8BE"/>
            <ellipse cx="-7" cy="0" rx="9" ry="5" fill="#FFA8BE" opacity="0.85"/>
            <ellipse cx="7" cy="0" rx="9" ry="5" fill="#FFA8BE" opacity="0.85"/>
            <ellipse cx="0" cy="6" rx="5" ry="9" fill="#FFA8BE" opacity="0.7"/>
            <circle r="3.5" fill="#FFF6DA"/>
          </g>
          <line x1="24" y1="36" x2="24" y2="42" stroke="#7FC084" strokeWidth="2"/>
        </svg>
      );
  }
};

// ============================================================================
// SECTIONS
// ============================================================================

const DetailHeroVisual = () => {
  const t = tk(T_TREAT, useKmedLang());
  return (
  <section style={{position:"relative", padding:"56px 80px 64px", background:"linear-gradient(180deg, var(--kmed-pink-warm) 0%, #fff 100%)", overflow:"hidden"}}>
    <div style={{position:"absolute", right:-180, top:-100, width:520, height:520, borderRadius:"50%", border:"1px solid var(--kmed-aqua-soft)"}}></div>
    <div style={{position:"absolute", right:-80, top:60, width:340, height:340, borderRadius:"50%", background:"var(--gradient-soft)", opacity:.25}}></div>
    <div className="phero__crumbs" style={{position:"relative"}}>
      <a href="#" onClick={e=>e.preventDefault()}>{t.crumbHome}</a><span>›</span>
      <a href="#" onClick={e=>e.preventDefault()}>{t.crumbTreat}</a><span>›</span>
      <span style={{color:"var(--text-primary)", fontWeight:700}}>{t.detCrumb}</span>
    </div>
    <div style={{position:"relative", display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:48, alignItems:"center", marginTop:24}}>
      <div>
        <div style={{display:"flex", gap:8, marginBottom:18}}>
          <span className="trust-pill trust-pill--pink"><Icon name="sparkle" size={14} color="#E91E63"/>{t.detPillKB}</span>
          <span className="trust-pill"><Icon name="user" size={14} color="#00579B"/>{t.detPillPartners}</span>
          <span className="trust-pill trust-pill--green"><Icon name="cal" size={14} color="#357A38"/>{t.detPillProg}</span>
        </div>
        <h1 style={{font:"900 56px/1.1 var(--font-display)", margin:"0 0 16px", letterSpacing:"-0.01em"}}>{t.detTitle}</h1>
        <p style={{font:"400 19px/1.6 var(--font-body)", color:"var(--text-secondary)", margin:"0 0 28px", maxWidth:620}}>
          {t.detSub}
        </p>
        <div style={{display:"flex", alignItems:"center", gap:16}}>
          <button className="btn btn--primary btn--primary-lg">{t.detCtaEstimate} <Icon name="arrow" size={16} color="#fff"/></button>
          <button className="btn btn--ghost"><Icon name="chat" size={14}/>{t.detCtaChat}</button>
        </div>
        <div style={{display:"flex", gap:24, marginTop:32, paddingTop:24, borderTop:"1px solid var(--kmed-line)"}}>
          {[
            {k:"price",      lbl:t.statEstimate, val:"USD 480 – 2,400",     color:"var(--kmed-green-dark)"},
            {k:"stay",       lbl:t.statStay,     val:t.statStayValue},
            {k:"anesthesia", lbl:t.statAnesthesia, val:t.statAnesthesiaValue},
            {k:"recovery",   lbl:t.statRecovery, val:t.statRecoveryValue},
          ].map((m,i)=>(
            <div key={i}>
              <div style={{display:"flex", alignItems:"center", gap:6, marginBottom:6}}>
                <MetaIcon kind={m.k} c="#6b7280"/>
                <div style={{font:"700 11px var(--font-body)", color:"var(--text-disabled)", letterSpacing:"0.12em", textTransform:"uppercase"}}>{m.lbl}</div>
              </div>
              <div style={{font:"700 18px var(--font-display)", color: m.color || "var(--text-primary)"}}>{m.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right hero card with K-Beauty still life */}
      <div className="surface" style={{padding:"24px", borderRadius:24, position:"relative"}}>
        <div style={{borderRadius:18, aspectRatio:"4/3", overflow:"hidden", position:"relative", boxShadow:"0 16px 40px -12px rgba(10,21,48,0.12)"}}>
          <KBeautyStillLife/>
          <div style={{position:"absolute", left:18, top:18, padding:"6px 12px", borderRadius:999, background:"rgba(255,255,255,0.96)", color:"var(--kmed-pink)", font:"700 12px var(--font-body)", letterSpacing:"0.08em", textTransform:"uppercase", boxShadow:"0 2px 6px rgba(0,0,0,0.06)"}}>{t.kbPin}</div>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginTop:20}}>
          <div style={{padding:"14px 16px", borderRadius:12, background:"var(--kmed-bg-soft)"}}>
            <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>{t.rateLabel}</div>
            <div style={{display:"flex", alignItems:"center", gap:6, marginTop:4}}>
              <Icon name="star" size={16} color="#F5B400"/>
              <span style={{font:"700 16px var(--font-body)"}}>4.8</span>
              <span style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>{t.rateReviews}</span>
            </div>
          </div>
          <div style={{padding:"14px 16px", borderRadius:12, background:"var(--kmed-bg-soft)"}}>
            <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>{t.langLabel}</div>
            <div style={{font:"700 14px var(--font-body)", marginTop:4}}>EN · 中文 · 日本語 · 繁體</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

const DetailBodyVisual = () => {
  const t = tk(T_TREAT, useKmedLang());
  const procedures = [
    { name:t.proc1Name, dur:t.proc1Dur, price:t.proc1Price, body:t.proc1Body, kind:"consult" },
    { name:t.proc2Name, dur:t.proc2Dur, price:t.proc2Price, body:t.proc2Body, kind:"facial" },
    { name:t.proc3Name, dur:t.proc3Dur, price:t.proc3Price, body:t.proc3Body, kind:"laser" },
    { name:t.proc4Name, dur:t.proc4Dur, price:t.proc4Price, body:t.proc4Body, kind:"hifu" },
    { name:t.proc5Name, dur:t.proc5Dur, price:t.proc5Price, body:t.proc5Body, kind:"kit" },
  ];
  const faqs = [
    { q:t.faq1Q, a:t.faq1A },
    { q:t.faq2Q, a:t.faq2A },
    { q:t.faq3Q, a:t.faq3A },
    { q:t.faq4Q, a:t.faq4A },
  ];
  const docs = [
    {n:t.dr1Name, role:t.dr1Role, langs:t.dr1Lang, av:"cross"},
    {n:t.dr2Name, role:t.dr2Role, langs:t.dr2Lang, av:"ecg"},
    {n:t.dr3Name, role:t.dr3Role, langs:t.dr3Lang, av:"waveform"},
  ];
  const clinics = [
    {k:"lumina", n:t.cl1Name, l:t.cl1Loc},
    {k:"ssi",    n:t.cl2Name, l:t.cl2Loc},
    {k:"bom",    n:t.cl3Name, l:t.cl3Loc},
  ];
  const included = [
    {icon:"chat",   title:t.inc1Title, desc:t.inc1Desc},
    {icon:"file",   title:t.inc2Title, desc:t.inc2Desc},
    {icon:"plane",  title:t.inc3Title, desc:t.inc3Desc},
    {icon:"medkit", title:t.inc4Title, desc:t.inc4Desc},
    {icon:"shield", title:t.inc5Title, desc:t.inc5Desc},
    {icon:"award",  title:t.inc6Title, desc:t.inc6Desc},
  ];
  return (
    <section className="detail-grid" style={{padding:"32px 80px 80px", display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:48, alignItems:"flex-start"}}>
      <div style={{display:"flex", flexDirection:"column", gap:48}}>
        <div>
          <h2 style={{font:"900 32px var(--font-display)", margin:"0 0 14px", letterSpacing:"-0.01em"}}>{t.ovTitle}</h2>
          <p style={{font:"400 17px/1.7 var(--font-body)", color:"var(--text-primary)", margin:"0 0 14px"}}>{t.ovP1}</p>
          <p style={{font:"400 17px/1.7 var(--font-body)", color:"var(--text-secondary)", margin:0}}>{t.ovP2}</p>
        </div>

        <div>
          <h2 style={{font:"900 32px var(--font-display)", margin:"0 0 20px"}}>{t.incTitle}</h2>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14}}>
            {included.map((b,i)=>(
              <div key={i} style={{display:"flex", gap:14, padding:"18px 20px", borderRadius:14, background:"#fff", border:"1px solid var(--kmed-line)"}}>
                <div style={{width:40, height:40, borderRadius:10, background:"var(--kmed-aqua-soft)", display:"flex", alignItems:"center", justifyContent:"center", flex:"none"}}><Icon name={b.icon} size={18} color="#00579B"/></div>
                <div>
                  <div style={{font:"700 15px var(--font-body)", marginBottom:4}}>{b.title}</div>
                  <div style={{font:"400 13px/1.5 var(--font-body)", color:"var(--text-secondary)"}}>{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{font:"900 32px var(--font-display)", margin:"0 0 20px"}}>{t.procTitle}</h2>
          <div className="surface--ring" style={{borderRadius:16, overflow:"hidden"}}>
            {procedures.map((p,i)=>(
              <div key={i} style={{display:"grid", gridTemplateColumns:"40px 1.3fr 1fr 1fr 80px", padding:"18px 22px", borderBottom: i<procedures.length-1?"1px solid var(--kmed-line)":"none", alignItems:"center", gap:14}}>
                <div style={{width:40, height:40, borderRadius:10, background:"var(--kmed-aqua-soft)", display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <ProcedureIcon kind={p.kind}/>
                </div>
                <div>
                  <div style={{font:"700 16px var(--font-body)"}}>{p.name}</div>
                  <div style={{font:"400 13px var(--font-body)", color:"var(--text-secondary)", marginTop:2}}>{p.body}</div>
                </div>
                <div style={{font:"400 14px var(--font-body)", color:"var(--text-secondary)"}}><Icon name="cal" size={14} color="rgba(0,0,0,0.4)"/> <span style={{verticalAlign:"middle", marginLeft:4}}>{p.dur}</span></div>
                <div style={{font:"700 14px var(--font-body)", color:"var(--kmed-green-dark)"}}>{p.price}</div>
                <div style={{textAlign:"right"}}><a href="#" className="btn btn--text" style={{fontSize:13}}>{t.procInfo}</a></div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{font:"900 32px var(--font-display)", margin:"0 0 20px"}}>{t.faqTitle}</h2>
          <div style={{display:"flex", flexDirection:"column", gap:12}}>
            {faqs.map((f,i)=>(
              <div key={i} className="surface--ring" style={{padding:"22px 24px"}}>
                <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:20}}>
                  <div style={{font:"700 17px var(--font-display)", color:"var(--kmed-navy)"}}>{f.q}</div>
                  <Icon name="chevdown" size={18} color="rgba(0,0,0,0.4)"/>
                </div>
                {i===0 && <div style={{font:"400 15px/1.6 var(--font-body)", color:"var(--text-secondary)", marginTop:12}}>{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right rail */}
      <div style={{display:"flex", flexDirection:"column", gap:24, position:"sticky", top:24}}>
        <div className="surface" style={{padding:"28px"}}>
          <div style={{font:"700 11px var(--font-body)", color:"var(--text-disabled)", letterSpacing:"0.14em", textTransform:"uppercase"}}>{t.rrEyebrow}</div>
          <div style={{font:"900 24px var(--font-display)", margin:"6px 0 16px"}}>{t.rrTitle}</div>
          <p style={{font:"400 14px/1.55 var(--font-body)", color:"var(--text-secondary)", margin:"0 0 18px"}}>{t.rrDesc}</p>
          <div style={{display:"flex", flexDirection:"column", gap:14, marginBottom:20}}>
            {[t.rrItem1, t.rrItem2, t.rrItem3, t.rrItem4].map(x=>(
              <div key={x} style={{display:"flex", alignItems:"center", gap:10, font:"400 13px var(--font-body)"}}><Icon name="check" size={14} color="#357A38"/>{x}</div>
            ))}
          </div>
          <button className="btn btn--primary" style={{width:"100%", justifyContent:"center", padding:"14px"}}>{t.rrCta} <Icon name="arrow" size={14} color="#fff"/></button>
          <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)", textAlign:"center", marginTop:12}}>{t.rrFree}</div>
        </div>

        <div className="surface--ring" style={{padding:"24px"}}>
          <div style={{font:"700 14px var(--font-display)", color:"var(--kmed-navy)", marginBottom: 14, letterSpacing:"0.08em", textTransform:"uppercase", fontSize:12}}>{t.rrDoctorsLabel}</div>
          <div style={{display:"flex", flexDirection:"column", gap:12}}>
            {docs.map((d,i)=>(
              <div key={i} style={{display:"flex", gap:12, alignItems:"center", padding:"10px 0", borderBottom: i<2?"1px solid var(--kmed-line)":"none"}}>
                <div style={{width:48, height:48, flex:"none"}}><DoctorAvatar kind={d.av}/></div>
                <div style={{flex:1}}>
                  <div style={{font:"700 14px var(--font-body)"}}>{d.n}</div>
                  <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>{d.role}</div>
                  <div style={{font:"400 11px var(--font-body)", color:"var(--kmed-aqua)"}}>{d.langs}</div>
                </div>
                <a href="#" className="btn btn--text" style={{fontSize:12}}>{t.rrProfile}</a>
              </div>
            ))}
          </div>
        </div>

        <div className="surface--ring" style={{padding:"24px"}}>
          <div style={{font:"700 12px var(--font-body)", color:"var(--kmed-navy)", marginBottom:6, letterSpacing:"0.08em", textTransform:"uppercase"}}>{t.rrClinicsLabel}</div>
          <div style={{font:"400 11px var(--font-body)", color:"var(--text-secondary)", fontStyle:"italic", marginBottom:14}}>{t.clinicsNote}</div>
          {clinics.map((c,i)=>(
            <div key={i} style={{display:"flex", gap:12, alignItems:"center", padding:"10px 0", borderBottom: i<2?"1px solid var(--kmed-line)":"none"}}>
              <div style={{width:48, height:48, flex:"none"}}><ClinicMark kind={c.k}/></div>
              <div>
                <div style={{font:"700 13px var(--font-body)"}}>{c.n}</div>
                <div style={{font:"400 11px var(--font-body)", color:"var(--text-secondary)"}}>{c.l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Reuse ComplianceNote, DetailTabs from kmed-treatments.jsx (already on window scope via Object.assign? Actually they're not exported.)
// Simplest path: re-declare a thin local copy of the two.
const TDComplianceNote = () => {
  const t = tk(T_TREAT, useKmedLang());
  return (
  <section style={{padding: "0 80px"}}>
    <div style={{padding:"16px 24px", borderRadius:12, background:"#FFFAEB", border:"1px solid #FDE68A", display:"flex", gap:14, alignItems:"flex-start"}}>
      <div style={{width:32, height:32, borderRadius:8, background:"#FCD34D", display:"flex", alignItems:"center", justifyContent:"center", flex:"none", color:"#7C5800", font:"900 14px var(--font-body)"}}>!</div>
      <div>
        <div style={{font:"700 14px var(--font-body)", color:"#7C5800", marginBottom:2}}>{t.cnTitle}</div>
        <div style={{font:"400 13px/1.55 var(--font-body)", color:"#7C5800"}}>
          {t.cnBody}
        </div>
      </div>
    </div>
  </section>
  );
};

const TDTabs = () => {
  const t = tk(T_TREAT, useKmedLang());
  const [tab, setTab] = React.useState(0);
  const tabs = [t.tabOverview, t.tabProcedures, t.tabExpect, t.tabFaqs];
  return (
    <section style={{padding:"40px 80px 16px"}}>
      <div style={{display:"flex", gap:32, borderBottom:"1px solid var(--kmed-line)"}}>
        {tabs.map((tt,i)=>(
          <div key={tt} onClick={()=>setTab(i)} style={{padding:"14px 0", borderBottom: i===tab? "3px solid var(--kmed-aqua)":"3px solid transparent", marginBottom:-1, font:"700 16px var(--font-body)", color: i===tab?"var(--kmed-navy)":"var(--text-secondary)", cursor:"pointer"}}>{tt}</div>
        ))}
      </div>
    </section>
  );
};

const TreatmentDetailVisual = () => (
  <div className="kmed-page" data-bp="desktop" data-screen-label="03 Treatment Detail — Visual mockup (Desktop 1440)">
    <Header active="treat" bp="desktop" drawerOpen={false}/>
    <DetailHeroVisual/>
    <TDComplianceNote/>
    <TDTabs/>
    <DetailBodyVisual/>
    <Footer bp="desktop"/>
  </div>
);

window.TreatmentDetailVisual = TreatmentDetailVisual;
