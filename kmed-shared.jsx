// kmed-shared.jsx — Header, Footer, Icons, common components

const Icon = ({ name, size = 18, color = "currentColor" }) => {
  const paths = {
    check: <path d="M5 12l4 4L19 6" stroke={color} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
    arrow: <path d="M4 12h14m-5-5l5 5-5 5" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
    chevdown: <path d="M6 9l6 6 6-6" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
    plus: <path d="M12 5v14M5 12h14" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round"/>,
    chat: <path d="M3 6a3 3 0 013-3h12a3 3 0 013 3v9a3 3 0 01-3 3H9l-5 4v-4H6a3 3 0 01-3-3V6z" stroke={color} strokeWidth="1.8" fill="none" strokeLinejoin="round"/>,
    user: <g fill="none" stroke={color} strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.5 3.5-8 8-8s8 3.5 8 8"/></g>,
    file: <g fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round"><path d="M6 3h9l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z"/><path d="M14 3v5h6"/></g>,
    plane: <path d="M2 16l20-7L4 4l4 7-4 5z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/>,
    medkit: <g fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M9 7V4h6v3M12 12v6m-3-3h6"/></g>,
    award: <g fill="none" stroke={color} strokeWidth="1.8"><circle cx="12" cy="9" r="6"/><path d="M8 14l-2 7 6-3 6 3-2-7"/></g>,
    sparkle: <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/>,
    grid: <g fill="none" stroke={color} strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></g>,
    home: <path d="M3 11l9-8 9 8v9a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1v-9z" stroke={color} strokeWidth="1.8" fill="none" strokeLinejoin="round"/>,
    cal: <g fill="none" stroke={color} strokeWidth="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></g>,
    money: <g fill="none" stroke={color} strokeWidth="1.8"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/></g>,
    download: <path d="M12 4v12m-5-5l5 5 5-5M4 20h16" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
    search: <g fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></g>,
    filter: <path d="M3 5h18M6 12h12M10 19h4" stroke={color} strokeWidth="2" strokeLinecap="round"/>,
    dots: <g fill={color}><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></g>,
    star: <path d="M12 2l3 7 7 .8-5.3 4.7L18 22l-6-3.8L6 22l1.3-7.5L2 9.8 9 9z" stroke={color} strokeWidth="1.4" fill={color} strokeLinejoin="round"/>,
    pin: <g fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round"><path d="M12 22s7-7 7-13a7 7 0 10-14 0c0 6 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></g>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">{paths[name]}</svg>
  );
};

const Logo = ({ word = true, size = 42 }) => (
  <a className="kh__logo" href="#" onClick={(e)=>e.preventDefault()}>
    <span className="kh__logo-mark" style={{width: size, height: size, fontSize: size/2}}>K</span>
    {word && (
      <div className="kh__brand">
        <span className="kh__brand-name">K-Med Global</span>
        <span className="kh__brand-sub">International Patient Care</span>
      </div>
    )}
  </a>
);

const NAV = [
  { id: "home",     label: "Home" },
  { id: "treat",    label: "Treatments" },
  { id: "matched",  label: "Get Matched" },
  { id: "korea",    label: "Why Korea" },
  { id: "stories",  label: "Stories" },
  { id: "contact",  label: "Contact" },
];

const HeaderDesktop = ({ active }) => (
  <header className="kh">
    <Logo />
    <nav className="kh__nav">
      {NAV.map(n => (
        <a key={n.id} className={"kh__nav-item" + (n.id === active ? " is-active" : "")} href="#" onClick={e=>e.preventDefault()}>{n.label}</a>
      ))}
    </nav>
    <div className="kh__right">
      <span className="kh__lang">
        <span className="kh__lang-flag"></span>
        EN <Icon name="chevdown" size={12} color="rgba(0,0,0,0.5)"/>
      </span>
      <span className="kh__divider"></span>
      <a href="#" className="kh__login" onClick={e=>e.preventDefault()}>Patient login</a>
      <a href="#" className="btn btn--primary" onClick={e=>e.preventDefault()}>
        <Icon name="chat" size={16} color="#fff"/>Talk to a Medical Guide
      </a>
    </div>
  </header>
);

const HeaderMobile = ({ active, drawerOpen = false }) => (
  <header className="kh-mobile" style={{position:"relative"}}>
    <div className="kh-mobile__brand">
      <span className="kh__logo-mark" style={{width:34, height:34, fontSize:17, borderRadius:9}}>K</span>
      <span className="kh-mobile__bm-name">K-Med Global</span>
    </div>
    <div className="kh-mobile__right">
      <button className="kh-mobile__cta">Talk to a Guide</button>
      <button className="kh-mobile__burger" aria-label="Menu"><span></span></button>
    </div>
    {drawerOpen && (
      <div className="kh-drawer">
        <div className="kh-drawer__scrim"></div>
        <div className="kh-drawer__panel">
          <div className="kh-drawer__top">
            <Logo size={36}/>
            <span className="kh-drawer__close">×</span>
          </div>
          <div className="kh-drawer__group-h">Language</div>
          <div className="kh-drawer__lang-list">
            {[{c:"EN",l:"English",a:true},{c:"한국어",l:"KR"},{c:"日本語",l:"JP"},{c:"中文",l:"CN"},{c:"Русский",l:"RU"},{c:"العربية",l:"AR"}].map((x,i)=>(
              <span key={i} className={"kh-drawer__lang-item" + (x.a?" is-active":"")}>{x.c}</span>
            ))}
          </div>
          <div className="kh-drawer__group-h" style={{marginTop:8}}>Menu</div>
          <nav className="kh-drawer__nav">
            {NAV.map(n => (
              <a key={n.id} href="#" onClick={e=>e.preventDefault()} className={"kh-drawer__nav-item" + (n.id===active?" is-active":"")}>
                {n.label}<span className="kh-drawer__nav-arr">›</span>
              </a>
            ))}
          </nav>
          <div className="kh-drawer__foot">
            <a href="#" className="kh-drawer__cta" onClick={e=>e.preventDefault()}><Icon name="chat" size={14} color="#fff"/>&nbsp;Talk to a Medical Guide</a>
            <span className="kh-drawer__login">Patient login →</span>
          </div>
        </div>
      </div>
    )}
  </header>
);

const Header = ({ active = "home", bp = "desktop", drawerOpen = false }) => {
  if (bp === "mobile" || bp === "tablet") return <HeaderMobile active={active} drawerOpen={drawerOpen}/>;
  return <HeaderDesktop active={active}/>;
};

const FOOTER_COLS = [
  { h: "Patients", links: ["How K-Med works","Treatments","Find a hospital","Trip planning","Patient stories"] },
  { h: "Hospitals", links: ["Become a partner","Quality standards","Care coordination","Press kit"] },
  { h: "Resources", links: ["Visa & travel guide","Insurance & payments","Translation support","FAQ"] },
  { h: "Company", links: ["About K-Med","Careers","Contact","Privacy policy","Terms of service"] },
];

const FooterDesktop = () => (
  <footer className="kf">
    <div className="kf__deco"></div>
    <div className="kf__deco-blob"></div>
    <div className="kf__grid">
      <div className="kf__about">
        <Logo size={42}/>
        <p className="kf__desc">A licensed international patient agency connecting global travelers with accredited Korean hospitals. Compassionate, transparent, end-to-end care.</p>
        <div className="kf__cert">
          <span className="kf__cert-label">Korea Health Industry Development Institute</span>
          <span className="kf__cert-value">IMA Reg. No. 2024-IPA-0421</span>
          <span className="kf__cert-meta">Licensed International Medical Agency · MOHW certified</span>
        </div>
      </div>
      {FOOTER_COLS.map((col, i) => (
        <div key={i} className="kf__col">
          <div className="kf__col-h">{col.h}</div>
          {col.links.map(l => <a key={l} href="#" onClick={e=>e.preventDefault()}>{l}</a>)}
        </div>
      ))}
    </div>
    <div className="kf__bottom">
      <div>© 2026 K-Med Global Inc.  ·  Seoul, South Korea  ·  IMA Reg. No. 2024-IPA-0421</div>
      <div className="kf__socials">
        <span className="kf__social">in</span>
        <span className="kf__social">f</span>
        <span className="kf__social">@</span>
        <span className="kf__social">▶</span>
      </div>
    </div>
  </footer>
);

const FooterMobile = () => {
  const [open, setOpen] = React.useState(0); // 0 = first open
  return (
    <footer className="kf">
      <div className="kf__about">
        <Logo size={38}/>
        <p className="kf__desc" style={{maxWidth:"none"}}>A licensed international patient agency connecting global travelers with accredited Korean hospitals.</p>
      </div>
      <div>
        {FOOTER_COLS.map((col, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className={"kf-acc" + (isOpen?" is-open":"")}>
              <div className="kf-acc__row" onClick={()=>setOpen(isOpen?-1:i)}>
                <span className="kf-acc__h">{col.h}</span>
                <span className="kf-acc__chev">▾</span>
              </div>
              {isOpen && (
                <div className="kf-acc__body">
                  {col.links.map(l => <a key={l} href="#" onClick={e=>e.preventDefault()}>{l}</a>)}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="kf__cert" style={{maxWidth:"none", marginTop:24}}>
        <span className="kf__cert-label">Korea Health Industry Development Institute</span>
        <span className="kf__cert-value">IMA Reg. No. 2024-IPA-0421</span>
        <span className="kf__cert-meta">Licensed International Medical Agency · MOHW certified</span>
      </div>
      <div className="kf__bottom">
        <div>© 2026 K-Med Global Inc. · Seoul, Korea</div>
        <div className="kf__socials">
          <span className="kf__social">in</span>
          <span className="kf__social">f</span>
          <span className="kf__social">@</span>
          <span className="kf__social">▶</span>
        </div>
      </div>
    </footer>
  );
};

const FooterTablet = () => (
  <footer className="kf">
    <div className="kf__grid">
      <div className="kf__about" style={{gridColumn:"1 / -1"}}>
        <Logo size={42}/>
        <p className="kf__desc" style={{maxWidth:520}}>A licensed international patient agency connecting global travelers with accredited Korean hospitals.</p>
      </div>
      {FOOTER_COLS.map((col, i) => (
        <div key={i} className="kf__col">
          <div className="kf__col-h">{col.h}</div>
          {col.links.map(l => <a key={l} href="#" onClick={e=>e.preventDefault()}>{l}</a>)}
        </div>
      ))}
      <div className="kf__cert" style={{gridColumn:"1 / -1", maxWidth:520}}>
        <span className="kf__cert-label">Korea Health Industry Development Institute</span>
        <span className="kf__cert-value">IMA Reg. No. 2024-IPA-0421</span>
        <span className="kf__cert-meta">Licensed International Medical Agency · MOHW certified</span>
      </div>
    </div>
    <div className="kf__bottom">
      <div>© 2026 K-Med Global Inc. · Seoul, South Korea</div>
      <div className="kf__socials">
        <span className="kf__social">in</span>
        <span className="kf__social">f</span>
        <span className="kf__social">@</span>
        <span className="kf__social">▶</span>
      </div>
    </div>
  </footer>
);

const Footer = ({ bp = "desktop" }) => {
  if (bp === "mobile") return <FooterMobile/>;
  if (bp === "tablet") return <FooterTablet/>;
  return <FooterDesktop/>;
};

// Generic page helpers
const PageHero = ({ crumbs = [], eyebrow, title, sub, children }) => (
  <section className="phero">
    <div className="phero__pinks"></div>
    <div className="phero__ring"></div>
    <div className="phero__crumbs">
      {crumbs.map((c, i) => (
        <React.Fragment key={i}>
          {i>0 && <span>›</span>}
          {i===crumbs.length-1 ? <span style={{color:"var(--text-primary)",fontWeight:700}}>{c}</span> : <a href="#" onClick={e=>e.preventDefault()}>{c}</a>}
        </React.Fragment>
      ))}
    </div>
    {eyebrow && <div className="eyebrow" style={{marginBottom:8}}>{eyebrow}</div>}
    {title && <h1 className="phero__title">{title}</h1>}
    {sub && <p className="phero__sub">{sub}</p>}
    {children}
  </section>
);

Object.assign(window, { Icon, Logo, Header, Footer, PageHero, NAV });
