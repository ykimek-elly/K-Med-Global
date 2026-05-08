// kmed-responsive-shell.jsx — Mobile/Tablet Header, Footer
// Header drawer is CLOSED by default. Pass drawerOpen={true} to render the open state.

const HeaderResponsive = ({ bp = "m", active = "home", drawerOpen = false }) => (
  <header className={"kh kh--"+bp} style={{position:"relative"}}>
    <div className="kh-bar">
      <Logo word={true} size={bp==="t"?34:30}/>
      <div className="kh-mobile-actions">
        {bp === "t" ? (
          <button className="kh-cta-compact" aria-label="Talk to a Medical Guide">
            <Icon name="chat" size={14} color="#fff"/>
            <span>Talk to a Guide</span>
          </button>
        ) : (
          <button className="kh-cta-icon" aria-label="Talk to a Medical Guide">
            <Icon name="chat" size={16} color="#fff"/>
          </button>
        )}
        <button className="kh-burger" aria-label="Open navigation"><span></span></button>
      </div>
    </div>

    {drawerOpen && (
      <div className="kh-drawer is-open" aria-label="Navigation drawer">
        <div className="kh-drawer__scrim"></div>
        <div className="kh-drawer__panel">
          <div className="kh-drawer__top">
            <Logo word={true} size={28}/>
            <button className="kh-drawer__close" aria-label="Close">×</button>
          </div>
          <div className="kh-drawer__lang">
            <Icon name="lang" size={14} color="#00579B"/>
            <span>Language</span>
            <div className="kh-drawer__lang-chips">
              <span className="kh-drawer__lang-chip is-on">EN</span>
              <span className="kh-drawer__lang-chip">日本</span>
              <span className="kh-drawer__lang-chip">中文</span>
              <span className="kh-drawer__lang-chip">한국</span>
            </div>
          </div>
          <nav className="kh-drawer__nav">
            {NAV.map(n => (
              <a key={n.id} href="#" onClick={e=>e.preventDefault()}
                 className={"kh-drawer__item" + (n.id===active?" is-active":"")}>
                <span>{n.label}</span>
                <span className="chev">›</span>
              </a>
            ))}
          </nav>
          <div className="kh-drawer__foot">
            <button className="kh-drawer__cta">
              <Icon name="chat" size={14} color="#fff"/>
              <span>Talk to a Medical Guide</span>
            </button>
            <a href="#" onClick={e=>e.preventDefault()} className="kh-drawer__login">
              Patient Login
            </a>
          </div>
        </div>
      </div>
    )}
  </header>
);

const FooterResponsive = ({ bp = "m" }) => {
  if (bp === "t") {
    return (
      <footer className="kf kf--t">
        <div className="kf__grid">
          <div className="kf__about">
            <div style={{flex:1}}>
              <Logo size={32}/>
              <p className="kf__desc" style={{marginTop:14}}>K-Med Global is a patient concierge connecting international visitors with accredited Korean hospitals — from initial consultation to recovery.</p>
            </div>
            <div className="kf__cert">
              <span className="kf__cert-label">International Patient Agency</span>
              <span className="kf__cert-value">Reg. No. KMHW-IMA-2026-0421</span>
              <span className="kf__cert-meta">Registered with the Ministry of Health & Welfare, Republic of Korea</span>
            </div>
          </div>
          {[
            { h:"Treatments", l:["Dermatology & K-Beauty","Plastic Surgery","Health Screening","Orthopedics","Oncology","Dental"]},
            { h:"For Patients", l:["How It Works","Get Matched","Estimate Request","Visa & Travel","Patient Stories","FAQs"]},
            { h:"Company", l:["About Us","Partner Hospitals","Press & Media","Careers","Contact"]},
            { h:"Compliance", l:["Privacy Policy","Terms of Service","Medical Disclaimer","Patient Rights","Cookies"]},
          ].map(c=>(
            <div key={c.h} className="kf__col">
              <div className="kf__col-h">{c.h}</div>
              {c.l.map(x=> <a key={x} href="#" onClick={e=>e.preventDefault()}>{x}</a>)}
            </div>
          ))}
        </div>
        <div className="kf__bottom">
          <span>© 2026 K-Med Global Inc. · 5F, Yeoksam-ro 168, Gangnam-gu, Seoul</span>
          <div className="kf__socials">
            {["f","in","ig","▶"].map(s=> <span key={s} className="kf__social">{s}</span>)}
          </div>
        </div>
      </footer>
    );
  }
  // Mobile accordion
  const cols = [
    { h:"Treatments", l:["Dermatology & K-Beauty","Plastic Surgery","Health Screening","Orthopedics","Oncology","Dental"], open:true},
    { h:"For Patients", l:["How It Works","Get Matched","Estimate Request","Patient Stories","FAQs"]},
    { h:"Company", l:["About Us","Partner Hospitals","Press","Careers","Contact"]},
    { h:"Compliance", l:["Privacy","Terms","Medical Disclaimer","Patient Rights"]},
  ];
  return (
    <footer className="kf kf--m">
      <div className="kf__grid">
        <div className="kf__about">
          <Logo size={32}/>
          <p className="kf__desc">K-Med Global connects international patients with accredited Korean hospitals — concierge from inquiry to recovery.</p>
          <div className="kf__cert">
            <span className="kf__cert-label">International Patient Agency</span>
            <span className="kf__cert-value">Reg. No. KMHW-IMA-2026-0421</span>
            <span className="kf__cert-meta">Registered with the Ministry of Health & Welfare, Republic of Korea</span>
          </div>
        </div>
        {cols.map(c=>(
          <div key={c.h} className={"kf__col"+(c.open?" is-open":"")}>
            <div className="kf__col-head">
              <span>{c.h}</span>
              <span className="chev">⌄</span>
            </div>
            {c.open && (
              <div className="kf__links">
                {c.l.map(x=> <a key={x} href="#" onClick={e=>e.preventDefault()}>{x}</a>)}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="kf__bottom">
        <div style={{display:"flex", flexDirection:"column", gap:4}}>
          <span>© 2026 K-Med Global Inc.</span>
          <span style={{fontSize:11, color:"var(--text-secondary)"}}>5F, Yeoksam-ro 168, Gangnam-gu, Seoul</span>
        </div>
        <div className="kf__socials">
          {["f","in","ig","▶"].map(s=> <span key={s} className="kf__social">{s}</span>)}
        </div>
      </div>
    </footer>
  );
};

const TrustRow = () => (
  <div className="trust-row">
    <span className="trust-pill"><Icon name="shield" size={12} color="#00579B"/>JCI partners</span>
    <span className="trust-pill trust-pill--green"><Icon name="check" size={12} color="#357A38"/>MOHW Reg.</span>
    <span className="trust-pill trust-pill--pink"><Icon name="lang" size={12} color="#E91E63"/>EN/JP/CN</span>
    <span className="trust-pill"><Icon name="award" size={12} color="#00579B"/>1,800+</span>
  </div>
);

Object.assign(window, { HeaderResponsive, FooterResponsive, TrustRow });
