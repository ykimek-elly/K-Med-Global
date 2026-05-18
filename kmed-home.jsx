// kmed-home.jsx — Home page (Desktop original)

// ---------- i18n dictionary shared by both Home variants ----------
const T_HOME = {
  en: {
    trustMohw: "Korean MoHW Accredited",
    trustJci: "JCI Partner Hospitals",
    heroTitleA: "Your Trusted Gateway to ",
    heroTitleAccent: "World-Class",
    heroTitleB: " Medical Care in Korea",
    heroSub: "From dermatology to advanced oncology — match with verified Korean hospitals, request a treatment estimate, and travel with full concierge support in your language.",
    heroCtaFind: "Find My Treatment",
    heroCtaHow: "How it works →",
    statHospitals: "Partner hospitals",
    statSpecialties: "Specialties covered",
    statPatients: "Patients assisted",
    chatTitle: "Chat in your language",
    chatLangs: "EN · 中文 · 日本語 · 繁體",
    visaTitle: "Visa & travel covered",
    visaSub: "Concierge from arrival",

    chipDerm: "Dermatology & K-Beauty",
    chipPlastic: "Plastic Surgery",
    chipScreening: "Health Screening",
    chipOrtho: "Orthopedics & Spine",
    chipOncology: "Oncology",
    chipFertility: "Fertility / IVF",
    chipDental: "Dental",
    chipViewAll: "View All Specialties",

    hiwEyebrow: "How It Works",
    hiwTitle: "From inquiry to recovery — in four steps",
    hiwLead: "No hidden fees. No automated quotes. Every step reviewed by a licensed care coordinator.",
    hiwLearnMore: "Learn more",
    hiwS1Title: "Tell us your goals",
    hiwS1Body: "Share what you'd like treated and your travel window. Takes ~3 minutes.",
    hiwS2Title: "Get matched",
    hiwS2Body: "We pair you with 2–3 accredited hospitals that fit your case and budget.",
    hiwS3Title: "Request an estimate",
    hiwS3Body: "Receive transparent treatment estimates after a doctor reviews your file.",
    hiwS4Title: "Travel with concierge",
    hiwS4Body: "Visa support, airport pickup, language assistance, and after-care follow-up.",

    featEyebrow: "Popular Treatments",
    featTitle: "Featured care from accredited Korean hospitals",
    featBrowseAll: "Browse all treatments",
    featPriceLabel: "Estimate from",
    featDetails: "Details →",
    catDerm: "Dermatology",
    catScreening: "Health Screening",
    catOrtho: "Orthopedics",
    catPlastic: "Plastic Surgery",
    catOncology: "Oncology",
    catDental: "Dental",
    tDerm: "K-Beauty Skincare Program",
    tDermDesc: "Customized facials, laser, and pigmentation care designed for traveling patients. 3–7 day plans.",
    tScreen: "Premium Full-Body Check-up",
    tScreenDesc: "Comprehensive 1-day screening with PET-CT, cardiology, and oncology markers at major hospitals.",
    tOrtho: "Spine & Joint Restoration",
    tOrthoDesc: "Minimally invasive spine surgery and robotic knee/hip replacement with 7–14 day recovery support.",
    tPlastic: "Facial Contouring Consult",
    tPlasticDesc: "Doctor-led consultations and conservative procedure planning. 2-stage review before any commitment.",
    tOnc: "Cancer Second Opinion",
    tOncDesc: "Bring your records — receive a multi-disciplinary review from Korean tertiary cancer centers.",
    tDent: "Implant & Smile Design",
    tDentDesc: "Digital implant planning, all-on-4, and porcelain veneers from Gangnam-area dental clinics.",

    netEyebrow: "Network",
    netTitle: "120+ accredited partner hospitals",
    netDirectory: "View directory",
    netLogoNote: "* Logos shown are representative monograms — placeholders for the real partner logos.",
    hAsan: "Asan Medical Center",
    hAsanLoc: "Songpa-gu, Seoul",
    hSamsung: "Samsung Medical Center",
    hSamsungLoc: "Gangnam-gu, Seoul",
    hSnu: "Seoul National Univ. Hospital",
    hSnuLoc: "Jongno-gu, Seoul",
    hSeverance: "Severance Hospital (Yonsei)",
    hSeveranceLoc: "Seodaemun-gu, Seoul",
    hGuro: "Korea Univ. Guro Hospital",
    hGuroLoc: "Guro-gu, Seoul",
    hPusan: "Pusan National Univ. Hospital",
    hPusanLoc: "Seo-gu, Busan",
    hKangbuk: "Kangbuk Samsung Check-up",
    hKangbukLoc: "Jongno-gu, Seoul",
    hWooridul: "Wooridul Spine Hospital",
    hWooridulLoc: "Gangnam-gu, Seoul",
    tagJci: "JCI", tagCancer: "Cancer", tagCardio: "Cardiology",
    tagTransplant: "Transplant", tagOncology: "Oncology",
    tagTertiary: "Tertiary", tagResearch: "Research",
    tagRobotics: "Robotics", tagStroke: "Stroke", tagSpine: "Spine",
    tagDental: "Dental", tagScreening: "Screening", tagPain: "Pain",

    storiesEyebrow: "Patient Stories",
    storiesTitle: "Trusted by patients from 28 countries",
    storiesReadAll: "Read all stories",
    stQuote1: "The coordinator translated every step. I never felt lost — even on the operating room intake.",
    stMeta1: "Tokyo, Japan · Spine Surgery",
    stQuote2: "I came for a 2-day check-up and left with answers I'd waited five years for.",
    stMeta2: "San Francisco, USA · Health Screening",
    stQuote3: "My dermatology plan was tailored to my skin tone and my flight schedule. Felt thoughtfully personalized.",
    stMeta3: "Taipei, Taiwan · K-Beauty",

    ctaTitle: "Ready to begin your care journey?",
    ctaSub: "Tell us about your case in five short steps. A licensed coordinator will respond with verified hospital options within 24 hours.",
    ctaStart: "Start Get Matched",
    ctaTrust: "Free · Confidential · No obligation",
  },
  ko: {
    trustMohw: "보건복지부 인증",
    trustJci: "JCI 인증 파트너 의료기관",
    heroTitleA: "한국의 ",
    heroTitleAccent: "전문 의료",
    heroTitleB: ", 신뢰할 수 있는 국제 진료 게이트웨이",
    heroSub: "피부과부터 종양 치료까지 — 검증된 한국 의료기관과 매칭, 진료 견적 요청, 모국어 컨시어지 지원과 함께 안심하고 방한하실 수 있도록 도와드립니다.",
    heroCtaFind: "내 치료 찾기",
    heroCtaHow: "이용 방법 →",
    statHospitals: "파트너 의료기관",
    statSpecialties: "진료 분야",
    statPatients: "코디네이션 환자 수",
    chatTitle: "모국어로 상담",
    chatLangs: "EN · 中文 · 日本語 · 繁體",
    visaTitle: "비자·여행 지원",
    visaSub: "도착부터 컨시어지",

    chipDerm: "피부과·K-뷰티",
    chipPlastic: "성형외과",
    chipScreening: "건강검진",
    chipOrtho: "정형외과·척추",
    chipOncology: "종양·암 치료",
    chipFertility: "난임·IVF",
    chipDental: "치과",
    chipViewAll: "모든 진료과 보기",

    hiwEyebrow: "이용 절차",
    hiwTitle: "문의부터 회복까지 — 4단계로",
    hiwLead: "숨겨진 비용 없음. 자동 견적 없음. 모든 단계는 등록 코디네이터가 직접 검토합니다.",
    hiwLearnMore: "자세히 보기",
    hiwS1Title: "원하는 진료 알려주기",
    hiwS1Body: "원하시는 진료와 방한 일정을 알려주세요. 약 3분 소요됩니다.",
    hiwS2Title: "매칭 받기",
    hiwS2Body: "환자 상태와 예산에 맞는 인증 의료기관 2~3곳을 연결해드립니다.",
    hiwS3Title: "견적 요청",
    hiwS3Body: "의료진이 차트를 검토한 뒤 투명한 진료 견적을 받아보실 수 있습니다.",
    hiwS4Title: "컨시어지와 함께 방한",
    hiwS4Body: "비자 지원, 공항 픽업, 통역, 귀국 후 사후 케어까지 함께합니다.",

    featEyebrow: "주요 치료 항목",
    featTitle: "인증 한국 의료기관의 추천 진료",
    featBrowseAll: "모든 치료 항목 보기",
    featPriceLabel: "예상 진료비",
    featDetails: "자세히 →",
    catDerm: "피부과",
    catScreening: "건강검진",
    catOrtho: "정형외과",
    catPlastic: "성형외과",
    catOncology: "종양",
    catDental: "치과",
    tDerm: "K-뷰티 스킨케어 프로그램",
    tDermDesc: "방한 환자를 위한 맞춤 페이셜·레이저·색소 케어. 3~7일 일정.",
    tScreen: "프리미엄 전신 건강검진",
    tScreenDesc: "PET-CT, 심혈관, 종양 마커를 포함한 주요 의료기관의 1일 종합 검진.",
    tOrtho: "척추·관절 재건",
    tOrthoDesc: "최소 침습 척추 수술 및 로봇 보조 무릎·고관절 치환술, 7~14일 회복 지원.",
    tPlastic: "안면 윤곽 상담",
    tPlasticDesc: "전문의 상담 중심의 보수적 시술 계획. 결정 전 2단계 검토.",
    tOnc: "암 진단 2차 소견",
    tOncDesc: "기존 진료 기록을 가져오시면 한국의 상급종합병원 다학제 진료팀이 검토해드립니다.",
    tDent: "임플란트·스마일 디자인",
    tDentDesc: "강남권 치과의 디지털 임플란트 플래닝, All-on-4, 포세린 베니어.",

    netEyebrow: "네트워크",
    netTitle: "120여 인증 파트너 의료기관",
    netDirectory: "전체 보기",
    netLogoNote: "* 표시된 로고는 대표 모노그램이며 실제 파트너 로고가 아닙니다.",
    hAsan: "서울아산병원",
    hAsanLoc: "서울 송파구",
    hSamsung: "삼성서울병원",
    hSamsungLoc: "서울 강남구",
    hSnu: "서울대학교병원",
    hSnuLoc: "서울 종로구",
    hSeverance: "세브란스병원 (연세)",
    hSeveranceLoc: "서울 서대문구",
    hGuro: "고려대학교 구로병원",
    hGuroLoc: "서울 구로구",
    hPusan: "부산대학교병원",
    hPusanLoc: "부산 서구",
    hKangbuk: "강북삼성병원 종합검진센터",
    hKangbukLoc: "서울 종로구",
    hWooridul: "우리들척추전문병원",
    hWooridulLoc: "서울 강남구",
    tagJci: "JCI", tagCancer: "암", tagCardio: "순환기",
    tagTransplant: "이식", tagOncology: "종양",
    tagTertiary: "상급종합", tagResearch: "연구",
    tagRobotics: "로봇 수술", tagStroke: "뇌혈관", tagSpine: "척추",
    tagDental: "치과", tagScreening: "검진", tagPain: "통증",

    storiesEyebrow: "환자 사례",
    storiesTitle: "28개국 환자가 함께한 K-Med Global",
    storiesReadAll: "모든 사례 보기",
    stQuote1: "코디네이터가 모든 단계를 통역해주셨어요. 수술 직전 안내 때도 길을 잃은 적이 없었습니다.",
    stMeta1: "도쿄, 일본 · 척추 수술",
    stQuote2: "이틀 일정의 건강검진을 받았고, 5년 동안 기다려온 답을 받을 수 있었습니다.",
    stMeta2: "샌프란시스코, 미국 · 건강검진",
    stQuote3: "제 피부 톤과 항공편 일정에 맞춰 피부과 플랜이 짜여 있었습니다. 세심한 케어를 받았다고 느꼈어요.",
    stMeta3: "타이베이, 대만 · K-뷰티",

    ctaTitle: "진료 여정을 시작하실 준비가 되셨나요?",
    ctaSub: "5단계로 환자 정보를 알려주세요. 등록 코디네이터가 24시간 내 검증된 의료기관을 안내드립니다.",
    ctaStart: "매칭 시작하기",
    ctaTrust: "무료 · 비공개 · 부담 없음",
  },
};

window.T_HOME = T_HOME;

const HeroHome = () => {
  const t = tk(T_HOME, useKmedLang());
  return (
  <section className="home-hero" style={{position:"relative", padding:"40px 80px 80px", overflow:"hidden", display:"block"}}>
    <div style={{position:"absolute", right:-180, top:40, width:560, height:560, borderRadius:"50%", background:"var(--kmed-pink-warm)", opacity:.7, zIndex:0}}></div>
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
      <div className="home-hero__art" style={{position:"relative", height:540}}>
        <div style={{position:"absolute", inset:"4% 8%", borderRadius:"50%", background:"var(--gradient-soft)", opacity:.30}}></div>
        <div style={{position:"absolute", inset:"10% 12%", borderRadius:"50%", border:"1px solid var(--kmed-aqua-soft)"}}></div>
        <img src="ds/assets/banner-illustration.png" alt="" style={{position:"relative", zIndex:2, width:"100%", height:"100%", objectFit:"contain"}}/>
        <div className="surface--sm home-hero__overlay" style={{position:"absolute", left:0, top:80, padding:"14px 18px", display:"flex", alignItems:"center", gap:12, zIndex:3}}>
          <div style={{width:36, height:36, borderRadius:10, background:"var(--kmed-aqua-soft)", display:"flex", alignItems:"center", justifyContent:"center"}}><Icon name="chat" size={18} color="#00579B"/></div>
          <div>
            <div style={{font:"700 13px var(--font-body)"}}>{t.chatTitle}</div>
            <div style={{font:"400 11px var(--font-body)", color:"var(--text-secondary)"}}>{t.chatLangs}</div>
          </div>
        </div>
        <div className="surface--sm home-hero__overlay" style={{position:"absolute", right:-10, bottom:60, padding:"14px 18px", display:"flex", alignItems:"center", gap:12, zIndex:3}}>
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

const TreatmentChips = () => {
  const t = tk(T_HOME, useKmedLang());
  const items = [
    { icon: "sparkle", label: t.chipDerm,       color: "var(--kmed-pink)",       catKey: "dermatology" },
    { icon: "medkit",  label: t.chipPlastic,    color: "var(--kmed-pink)",       catKey: "plastic" },
    { icon: "shield",  label: t.chipScreening,  color: "var(--kmed-aqua)",       catKey: "screening" },
    { icon: "award",   label: t.chipOrtho,      color: "var(--kmed-aqua)",       catKey: "orthopedics" },
    { icon: "star",    label: t.chipOncology,   color: "var(--kmed-green-dark)", catKey: "oncology" },
    { icon: "user",    label: t.chipFertility,  color: "var(--kmed-green-dark)", catKey: "fertility" },
    { icon: "medkit",  label: t.chipDental,     color: "var(--kmed-aqua)",       catKey: "dental" },
    { icon: "plus",    label: t.chipViewAll,    color: "var(--kmed-navy)",       catKey: "all" },
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

const HowItWorks = () => {
  const t = tk(T_HOME, useKmedLang());
  const steps = [
    { n: "01", title: t.hiwS1Title, body: t.hiwS1Body, icon: "chat" },
    { n: "02", title: t.hiwS2Title, body: t.hiwS2Body, icon: "user" },
    { n: "03", title: t.hiwS3Title, body: t.hiwS3Body, icon: "file" },
    { n: "04", title: t.hiwS4Title, body: t.hiwS4Body, icon: "plane" },
  ];
  return (
    <section style={{padding:"40px 80px 80px"}}>
      <div style={{display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:40}}>
        <div>
          <div className="eyebrow">{t.hiwEyebrow}</div>
          <h2 className="kh-title" style={{margin:"8px 0 12px"}}>{t.hiwTitle}</h2>
          <p className="kh-lead">{t.hiwLead}</p>
        </div>
        <a href="#" className="btn btn--ghost">{t.hiwLearnMore} <Icon name="arrow" size={14}/></a>
      </div>
      <div className="hiw-row" style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:24, position:"relative"}}>
        <div className="hiw-line" style={{position:"absolute", top:34, left:60, right:60, height:2, background:"repeating-linear-gradient(to right, var(--kmed-aqua-soft) 0 8px, transparent 8px 14px)"}}></div>
        {steps.map((s,i)=>(
          <div key={i} className="surface--sm" style={{padding:"28px 24px", position:"relative", zIndex:1}}>
            <div style={{display:"flex", alignItems:"center", gap:14, marginBottom:18}}>
              <span style={{width:48, height:48, borderRadius:14, background:"var(--kmed-aqua-soft)", color:"var(--kmed-navy)", display:"flex", alignItems:"center", justifyContent:"center"}}><Icon name={s.icon} size={22} color="#00579B"/></span>
              <span style={{font:"900 28px var(--font-display)", color:"var(--kmed-pink)", letterSpacing:"-0.02em"}}>{s.n}</span>
            </div>
            <div style={{font:"700 18px var(--font-display)", marginBottom:8}}>{s.title}</div>
            <div style={{font:"400 14px/1.55 var(--font-body)", color:"var(--text-secondary)"}}>{s.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const FeaturedTreatments = () => {
  const t = tk(T_HOME, useKmedLang());
  const items = [
    { cat:t.catDerm,      catKey:"dermatology", title:t.tDerm,    desc:t.tDermDesc,    price:"USD 480 – 2,400",   icon:"sparkle", c1:"#FCE4EC", c2:"#F8BBD0", glyph:"✿" },
    { cat:t.catScreening, catKey:"screening",   title:t.tScreen,  desc:t.tScreenDesc,  price:"USD 1,800 – 4,200", icon:"shield",  c1:"#B3E5FC", c2:"#81D4FA", glyph:"♡" },
    { cat:t.catOrtho,     catKey:"orthopedics", title:t.tOrtho,   desc:t.tOrthoDesc,   price:"USD 8,500 – 22,000",icon:"award",   c1:"#C8E6C9", c2:"#A5D6A7", glyph:"✚" },
    { cat:t.catPlastic,   catKey:"plastic",     title:t.tPlastic, desc:t.tPlasticDesc, price:"USD 2,200 – 12,000",icon:"medkit",  c1:"#FFE0E6", c2:"#FFC1CC", glyph:"♢" },
    { cat:t.catOncology,  catKey:"oncology",    title:t.tOnc,     desc:t.tOncDesc,     price:"USD 950 – 3,200",   icon:"star",    c1:"#B3E5FC", c2:"#03ACF2", glyph:"◐" },
    { cat:t.catDental,    catKey:"dental",      title:t.tDent,    desc:t.tDentDesc,    price:"USD 1,200 – 9,800", icon:"plus",    c1:"#E1F5FE", c2:"#B3E5FC", glyph:"◇" },
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
          <div key={i} className="tcard" onClick={()=>kmedJumpToCategory(it.catKey)} style={{cursor:"pointer", transition:"transform .15s ease, box-shadow .15s ease"}} onMouseOver={e=>{e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 12px 28px -10px rgba(10,21,48,0.16)";}} onMouseOut={e=>{e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow="";}}>
            <div className="tcard__media" style={{background:`linear-gradient(135deg, ${it.c1}, ${it.c2})`}}>
              <div className="tcard__pin">{it.cat}</div>
              <div className="tile"><Icon name={it.icon} size={84} color="rgba(255,255,255,0.95)"/></div>
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

const PartnerHospitals = () => {
  const t = tk(T_HOME, useKmedLang());
  const items = [
    { initials:"AS", name:t.hAsan, loc:t.hAsanLoc, tags:[t.tagJci, t.tagCancer, t.tagCardio] },
    { initials:"SS", name:t.hSamsung, loc:t.hSamsungLoc, tags:[t.tagJci, t.tagTransplant, t.tagOncology] },
    { initials:"SN", name:t.hSnu, loc:t.hSnuLoc, tags:[t.tagTertiary, t.tagResearch] },
    { initials:"SV", name:t.hSeverance, loc:t.hSeveranceLoc, tags:[t.tagJci, t.tagRobotics] },
    { initials:"GU", name:t.hGuro, loc:t.hGuroLoc, tags:[t.tagStroke, t.tagSpine] },
    { initials:"PU", name:t.hPusan, loc:t.hPusanLoc, tags:[t.tagTertiary, t.tagDental] },
    { initials:"KB", name:t.hKangbuk, loc:t.hKangbukLoc, tags:[t.tagScreening] },
    { initials:"WO", name:t.hWooridul, loc:t.hWooridulLoc, tags:[t.tagSpine, t.tagPain] },
  ];
  return (
    <section style={{padding:"0 80px 80px", background:"linear-gradient(180deg, transparent, #F5FBFE)"}}>
      <div style={{display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:32}}>
        <div>
          <div className="eyebrow">{t.netEyebrow}</div>
          <h2 className="kh-title" style={{margin:"8px 0 0"}}>{t.netTitle}</h2>
        </div>
        <a href="#" className="btn btn--ghost">{t.netDirectory} <Icon name="arrow" size={14}/></a>
      </div>
      <div className="card-grid-4" style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:20}}>
        {items.map((h,i)=>(
          <div key={i} className="hcard">
            <div className="hcard__logo">{h.initials}</div>
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

const StoryStrip = () => {
  const t = tk(T_HOME, useKmedLang());
  const items = [
    { quote:t.stQuote1, name:"Sakura T.", meta:t.stMeta1, tags:[t.catOrtho,"JP"] },
    { quote:t.stQuote2, name:"David L.", meta:t.stMeta2, tags:[t.catScreening,"EN"] },
    { quote:t.stQuote3, name:"Wei C.", meta:t.stMeta3, tags:[t.catDerm,"ZH"] },
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
              <div className="story__avatar">{s.name.charAt(0)}</div>
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

const ContactCtaBanner = () => {
  const t = tk(T_HOME, useKmedLang());
  return (
    <section style={{padding:"0 80px 80px"}}>
      <div className="cta-banner" style={{borderRadius:24, padding:"56px 60px", background:"var(--gradient-cta)", color:"#fff", display:"flex", alignItems:"center", justifyContent:"space-between", gap:40, position:"relative", overflow:"hidden"}}>
        <div style={{position:"absolute", right:60, top:-40, width:240, height:240, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.3)"}}></div>
        <div style={{position:"absolute", right:-40, bottom:-80, width:280, height:280, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.2)"}}></div>
        <div style={{position:"relative", maxWidth:640}}>
          <div style={{font:"900 40px/1.2 var(--font-display)", marginBottom:12}}>{t.ctaTitle}</div>
          <div style={{font:"400 18px/1.55 var(--font-body)", opacity:.92}}>{t.ctaSub}</div>
        </div>
        <div style={{position:"relative", display:"flex", flexDirection:"column", gap:12, alignItems:"flex-end"}}>
          <button className="btn btn--white-pill" style={{padding:"18px 32px", fontSize:18}}>{t.ctaStart} <Icon name="arrow" size={16} color="#03ACF2"/></button>
          <span style={{font:"400 13px var(--font-body)", opacity:.92}}>{t.ctaTrust}</span>
        </div>
      </div>
    </section>
  );
};

const HomePage = ({ bp = "desktop", drawerOpen = false }) => (
  <div className="kmed-page" data-bp={bp} data-screen-label={"01 Home " + bp}>
    <Header active="home" bp={bp} drawerOpen={drawerOpen}/>
    <HeroHome/>
    <TreatmentChips/>
    <HowItWorks/>
    <FeaturedTreatments/>
    <PartnerHospitals/>
    <StoryStrip/>
    <ContactCtaBanner/>
    <Footer bp={bp}/>
  </div>
);

window.HomePage = HomePage;
