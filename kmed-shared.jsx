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

// ---------- i18n strings shared by Header / Footer / Logo ----------
const T_SHARED = {
  en: {
    brandSub: "International Patient Care",
    navHome: "Home",
    navTreat: "Treatments",
    navMatched: "Get Matched",
    navKorea: "Why Korea",
    navStories: "Stories",
    navContact: "Contact",
    patientLogin: "Patient login",
    talkToGuide: "Talk to a Medical Guide",
    talkShort: "Talk to a Guide",
    drawerLanguage: "Language",
    drawerMenu: "Menu",
    footerDesc: "A licensed international patient agency connecting global travelers with accredited Korean hospitals. Compassionate, transparent, end-to-end care.",
    footerDescShort: "A licensed international patient agency connecting global travelers with accredited Korean hospitals.",
    certInst: "Korea Health Industry Development Institute",
    certReg: "Reg. No. KMHW-IMA-2026-0421",
    certMeta: "Licensed International Medical Agency · MOHW certified",
    copyright: "© 2026 K-Med Global Inc.  ·  Seoul, South Korea  ·  Reg. No. KMHW-IMA-2026-0421",
    copyrightShort: "© 2026 K-Med Global Inc. · Seoul, Korea",
    copyrightTab: "© 2026 K-Med Global Inc. · Seoul, South Korea",
    colPatients: "Patients",
    colHospitals: "Hospitals",
    colResources: "Resources",
    colCompany: "Company",
    fHowItWorks: "How K-Med works",
    fTreatments: "Treatments",
    fFindHospital: "Find a hospital",
    fTripPlanning: "Trip planning",
    fPatientStories: "Patient stories",
    fBecomePartner: "Become a partner",
    fQuality: "Quality standards",
    fCareCoord: "Care coordination",
    fPressKit: "Press kit",
    fVisa: "Visa & travel guide",
    fInsurance: "Insurance & payments",
    fTranslation: "Translation support",
    fFaq: "FAQ",
    fAbout: "About K-Med",
    fCareers: "Careers",
    fContact: "Contact",
    fPrivacy: "Privacy policy",
    fTerms: "Terms of service",
  },
  ko: {
    brandSub: "국제 환자 케어",
    navHome: "홈",
    navTreat: "치료 항목",
    navMatched: "매칭 신청",
    navKorea: "한국 진료 안내",
    navStories: "환자 사례",
    navContact: "문의",
    patientLogin: "환자 로그인",
    talkToGuide: "의료 가이드와 상담",
    talkShort: "가이드 상담",
    drawerLanguage: "언어",
    drawerMenu: "메뉴",
    footerDesc: "외국인환자 유치업체로 등록된 국제 의료 코디네이션 기관입니다. 해외 환자와 한국의 인증 의료기관을 신뢰할 수 있고 투명하게 연결하여, 처음 상담부터 귀국 후 케어까지 도와드립니다.",
    footerDescShort: "외국인환자 유치업체로 등록된 국제 의료 코디네이션 기관입니다. 해외 환자와 한국의 인증 의료기관을 연결합니다.",
    certInst: "한국보건산업진흥원",
    certReg: "등록번호 KMHW-IMA-2026-0421",
    certMeta: "외국인환자 유치업체 등록 · 보건복지부 인증",
    copyright: "© 2026 K-Med Global Inc.  ·  서울특별시  ·  등록번호 KMHW-IMA-2026-0421",
    copyrightShort: "© 2026 K-Med Global Inc. · 서울",
    copyrightTab: "© 2026 K-Med Global Inc. · 서울특별시",
    colPatients: "환자 안내",
    colHospitals: "의료기관",
    colResources: "자료",
    colCompany: "회사",
    fHowItWorks: "K-Med 이용 안내",
    fTreatments: "치료 항목",
    fFindHospital: "병원 찾기",
    fTripPlanning: "방한 일정 안내",
    fPatientStories: "환자 사례",
    fBecomePartner: "파트너 등록",
    fQuality: "품질 기준",
    fCareCoord: "진료 코디네이션",
    fPressKit: "보도자료",
    fVisa: "비자·여행 안내",
    fInsurance: "보험·결제",
    fTranslation: "통역 지원",
    fFaq: "자주 묻는 질문",
    fAbout: "회사 소개",
    fCareers: "채용",
    fContact: "문의",
    fPrivacy: "개인정보 처리방침",
    fTerms: "이용약관",
  },
};

const Logo = ({ word = true, size = 42 }) => {
  const t = (typeof useKmedLang === "function") ? tk(T_SHARED, useKmedLang()) : T_SHARED.en;
  return (
    <a className="kh__logo" href="#" onClick={(e)=>e.preventDefault()}>
      <span className="kh__logo-mark" style={{width: size, height: size, fontSize: size/2}}>K</span>
      {word && (
        <div className="kh__brand">
          <span className="kh__brand-name">K-Med Global</span>
          <span className="kh__brand-sub">{t.brandSub}</span>
        </div>
      )}
    </a>
  );
};

const NAV_IDS = ["home", "treat", "matched", "korea", "stories", "contact"];
const navLabel = (t, id) => ({
  home: t.navHome, treat: t.navTreat, matched: t.navMatched,
  korea: t.navKorea, stories: t.navStories, contact: t.navContact,
}[id]);

// Back-compat: expose a static NAV for any existing references
const NAV = NAV_IDS.map(id => ({ id, label: ({home:"Home",treat:"Treatments",matched:"Get Matched",korea:"Why Korea",stories:"Stories",contact:"Contact"})[id] }));

const HeaderDesktop = ({ active }) => {
  const lang = useKmedLang();
  const t = tk(T_SHARED, lang);
  return (
    <header className="kh">
      <Logo />
      <nav className="kh__nav">
        {NAV_IDS.map(id => (
          <a key={id} className={"kh__nav-item" + (id === active ? " is-active" : "")} href="#" onClick={e=>e.preventDefault()}>{navLabel(t, id)}</a>
        ))}
      </nav>
      <div className="kh__right">
        <LanguageToggle/>
        <span className="kh__divider"></span>
        <a href="#" className="kh__login" onClick={e=>e.preventDefault()}>{t.patientLogin}</a>
        <a href="#" className="btn btn--primary" onClick={e=>e.preventDefault()}>
          <Icon name="chat" size={16} color="#fff"/>{t.talkToGuide}
        </a>
      </div>
    </header>
  );
};

const HeaderMobile = ({ active, drawerOpen = false }) => {
  const lang = useKmedLang();
  const t = tk(T_SHARED, lang);
  return (
    <header className="kh-mobile" style={{position:"relative"}}>
      <div className="kh-mobile__brand">
        <span className="kh__logo-mark" style={{width:34, height:34, fontSize:17, borderRadius:9}}>K</span>
        <span className="kh-mobile__bm-name">K-Med Global</span>
      </div>
      <div className="kh-mobile__right">
        <button className="kh-mobile__cta">{t.talkShort}</button>
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
            <div className="kh-drawer__group-h">{t.drawerLanguage}</div>
            <div className="kh-drawer__lang-list">
              {[{c:"EN",l:"English",a:lang==="en"},{c:"한국어",l:"KR",a:lang==="ko"},{c:"日本語",l:"JP"},{c:"中文",l:"CN"},{c:"Русский",l:"RU"},{c:"العربية",l:"AR"}].map((x,i)=>(
                <span key={i} className={"kh-drawer__lang-item" + (x.a?" is-active":"")}>{x.c}</span>
              ))}
            </div>
            <div className="kh-drawer__group-h" style={{marginTop:8}}>{t.drawerMenu}</div>
            <nav className="kh-drawer__nav">
              {NAV_IDS.map(id => (
                <a key={id} href="#" onClick={e=>e.preventDefault()} className={"kh-drawer__nav-item" + (id===active?" is-active":"")}>
                  {navLabel(t, id)}<span className="kh-drawer__nav-arr">›</span>
                </a>
              ))}
            </nav>
            <div className="kh-drawer__foot">
              <a href="#" className="kh-drawer__cta" onClick={e=>e.preventDefault()}><Icon name="chat" size={14} color="#fff"/>&nbsp;{t.talkToGuide}</a>
              <span className="kh-drawer__login">{t.patientLogin} →</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const Header = ({ active = "home", bp = "desktop", drawerOpen = false }) => {
  if (bp === "mobile" || bp === "tablet") return <HeaderMobile active={active} drawerOpen={drawerOpen}/>;
  return <HeaderDesktop active={active}/>;
};

const FOOTER_COL_IDS = [
  { h: "colPatients",  links: ["fHowItWorks","fTreatments","fFindHospital","fTripPlanning","fPatientStories"] },
  { h: "colHospitals", links: ["fBecomePartner","fQuality","fCareCoord","fPressKit"] },
  { h: "colResources", links: ["fVisa","fInsurance","fTranslation","fFaq"] },
  { h: "colCompany",   links: ["fAbout","fCareers","fContact","fPrivacy","fTerms"] },
];

// Back-compat shape (some other files may import FOOTER_COLS)
const FOOTER_COLS = FOOTER_COL_IDS.map(c => ({
  h: ({colPatients:"Patients",colHospitals:"Hospitals",colResources:"Resources",colCompany:"Company"})[c.h],
  links: c.links.map(k => ({
    fHowItWorks:"How K-Med works",fTreatments:"Treatments",fFindHospital:"Find a hospital",fTripPlanning:"Trip planning",fPatientStories:"Patient stories",
    fBecomePartner:"Become a partner",fQuality:"Quality standards",fCareCoord:"Care coordination",fPressKit:"Press kit",
    fVisa:"Visa & travel guide",fInsurance:"Insurance & payments",fTranslation:"Translation support",fFaq:"FAQ",
    fAbout:"About K-Med",fCareers:"Careers",fContact:"Contact",fPrivacy:"Privacy policy",fTerms:"Terms of service"
  })[k]),
}));

const FooterDesktop = () => {
  const t = tk(T_SHARED, useKmedLang());
  return (
    <footer className="kf">
      <div className="kf__deco"></div>
      <div className="kf__deco-blob"></div>
      <div className="kf__grid">
        <div className="kf__about">
          <Logo size={42}/>
          <p className="kf__desc">{t.footerDesc}</p>
          <div className="kf__cert">
            <span className="kf__cert-label">{t.certInst}</span>
            <span className="kf__cert-value">{t.certReg}</span>
            <span className="kf__cert-meta">{t.certMeta}</span>
          </div>
        </div>
        {FOOTER_COL_IDS.map((col, i) => (
          <div key={i} className="kf__col">
            <div className="kf__col-h">{t[col.h]}</div>
            {col.links.map(k => <a key={k} href="#" onClick={e=>e.preventDefault()}>{t[k]}</a>)}
          </div>
        ))}
      </div>
      <div className="kf__bottom">
        <div>{t.copyright}</div>
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

const FooterMobile = () => {
  const t = tk(T_SHARED, useKmedLang());
  const [open, setOpen] = React.useState(0);
  return (
    <footer className="kf">
      <div className="kf__about">
        <Logo size={38}/>
        <p className="kf__desc" style={{maxWidth:"none"}}>{t.footerDescShort}</p>
      </div>
      <div>
        {FOOTER_COL_IDS.map((col, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className={"kf-acc" + (isOpen?" is-open":"")}>
              <div className="kf-acc__row" onClick={()=>setOpen(isOpen?-1:i)}>
                <span className="kf-acc__h">{t[col.h]}</span>
                <span className="kf-acc__chev">▾</span>
              </div>
              {isOpen && (
                <div className="kf-acc__body">
                  {col.links.map(k => <a key={k} href="#" onClick={e=>e.preventDefault()}>{t[k]}</a>)}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="kf__cert" style={{maxWidth:"none", marginTop:24}}>
        <span className="kf__cert-label">{t.certInst}</span>
        <span className="kf__cert-value">{t.certReg}</span>
        <span className="kf__cert-meta">{t.certMeta}</span>
      </div>
      <div className="kf__bottom">
        <div>{t.copyrightShort}</div>
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

const FooterTablet = () => {
  const t = tk(T_SHARED, useKmedLang());
  return (
    <footer className="kf">
      <div className="kf__grid">
        <div className="kf__about" style={{gridColumn:"1 / -1"}}>
          <Logo size={42}/>
          <p className="kf__desc" style={{maxWidth:520}}>{t.footerDescShort}</p>
        </div>
        {FOOTER_COL_IDS.map((col, i) => (
          <div key={i} className="kf__col">
            <div className="kf__col-h">{t[col.h]}</div>
            {col.links.map(k => <a key={k} href="#" onClick={e=>e.preventDefault()}>{t[k]}</a>)}
          </div>
        ))}
        <div className="kf__cert" style={{gridColumn:"1 / -1", maxWidth:520}}>
          <span className="kf__cert-label">{t.certInst}</span>
          <span className="kf__cert-value">{t.certReg}</span>
          <span className="kf__cert-meta">{t.certMeta}</span>
        </div>
      </div>
      <div className="kf__bottom">
        <div>{t.copyrightTab}</div>
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

Object.assign(window, { Icon, Logo, Header, Footer, PageHero, NAV, FOOTER_COLS, T_SHARED });
