// kmed-home.jsx — Home page

const HeroHome = () => (
  <section className="home-hero" style={{position:"relative", padding:"40px 80px 80px", overflow:"hidden", display:"block"}}>
    <div style={{position:"absolute", right:-180, top:40, width:560, height:560, borderRadius:"50%", background:"var(--kmed-pink-warm)", opacity:.7, zIndex:0}}></div>
    <div style={{position:"absolute", right:-60, top:120, width:380, height:380, borderRadius:"50%", border:"1px solid var(--kmed-aqua-soft)", zIndex:0}}></div>
    <div style={{position:"absolute", right:60, bottom:-40, width:200, height:200, borderRadius:"50%", background:"var(--gradient-soft)", opacity:.35, zIndex:0}}></div>
    <div className="home-hero__grid" style={{position:"relative", display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center", minHeight:560, zIndex:1}}>
      <div>
        <div style={{display:"flex", gap:8, marginBottom:24}}>
          <span className="trust-pill"><Icon name="shield" size={14} color="#00579B"/>Korean MoHW Accredited</span>
          <span className="trust-pill trust-pill--green"><Icon name="check" size={14} color="#357A38"/>JCI Partner Hospitals</span>
        </div>
        <h1 className="kh-title kh-title--xl" style={{margin:"0 0 20px"}}>
          Your Trusted Gateway to <span style={{color:"var(--kmed-aqua)"}}>World-Class</span> Medical Care in Korea
        </h1>
        <p style={{font:"400 20px/1.55 var(--font-body)", color:"var(--text-secondary)", margin:"0 0 32px", maxWidth:540}}>
          From dermatology to advanced oncology — match with verified Korean hospitals, request a treatment estimate, and travel with full concierge support in your language.
        </p>
        <div style={{display:"flex", alignItems:"center", gap:20, marginBottom:36}}>
          <button className="btn btn--primary btn--primary-lg">Find My Treatment <Icon name="arrow" size={16} color="#fff"/></button>
          <a href="#" className="btn btn--text" style={{fontSize:16, color:"var(--kmed-green-dark)"}}>How it works →</a>
        </div>
        <div style={{display:"flex", gap:32, paddingTop:24, borderTop:"1px solid var(--kmed-line)"}}>
          <div><div style={{font:"900 28px var(--font-display)", color:"var(--kmed-green-dark)"}}>120+</div><div style={{font:"400 13px var(--font-body)", color:"var(--text-secondary)"}}>Partner hospitals</div></div>
          <div><div style={{font:"900 28px var(--font-display)", color:"var(--kmed-green-dark)"}}>34</div><div style={{font:"400 13px var(--font-body)", color:"var(--text-secondary)"}}>Specialties covered</div></div>
          <div><div style={{font:"900 28px var(--font-display)", color:"var(--kmed-green-dark)"}}>8,400+</div><div style={{font:"400 13px var(--font-body)", color:"var(--text-secondary)"}}>Patients assisted</div></div>
        </div>
      </div>
      <div className="home-hero__art" style={{position:"relative", height:540}}>
        <div style={{position:"absolute", inset:"4% 8%", borderRadius:"50%", background:"var(--gradient-soft)", opacity:.30}}></div>
        <div style={{position:"absolute", inset:"10% 12%", borderRadius:"50%", border:"1px solid var(--kmed-aqua-soft)"}}></div>
        <img src="ds/assets/banner-illustration.png" alt="" style={{position:"relative", zIndex:2, width:"100%", height:"100%", objectFit:"contain"}}/>
        {/* floating cards */}
        <div className="surface--sm home-hero__overlay" style={{position:"absolute", left:0, top:80, padding:"14px 18px", display:"flex", alignItems:"center", gap:12, zIndex:3}}>
          <div style={{width:36, height:36, borderRadius:10, background:"var(--kmed-aqua-soft)", display:"flex", alignItems:"center", justifyContent:"center"}}><Icon name="chat" size={18} color="#00579B"/></div>
          <div>
            <div style={{font:"700 13px var(--font-body)"}}>Chat in your language</div>
            <div style={{font:"400 11px var(--font-body)", color:"var(--text-secondary)"}}>EN · 中文 · 日本語 · 繁體</div>
          </div>
        </div>
        <div className="surface--sm home-hero__overlay" style={{position:"absolute", right:-10, bottom:60, padding:"14px 18px", display:"flex", alignItems:"center", gap:12, zIndex:3}}>
          <div style={{width:36, height:36, borderRadius:10, background:"rgba(76,175,80,0.14)", display:"flex", alignItems:"center", justifyContent:"center"}}><Icon name="plane" size={18} color="#357A38"/></div>
          <div>
            <div style={{font:"700 13px var(--font-body)"}}>Visa & travel covered</div>
            <div style={{font:"400 11px var(--font-body)", color:"var(--text-secondary)"}}>Concierge from arrival</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TreatmentChips = () => {
  const items = [
    { icon: "sparkle", label: "Dermatology & K-Beauty", color: "var(--kmed-pink)" },
    { icon: "medkit", label: "Plastic Surgery", color: "var(--kmed-pink)" },
    { icon: "shield", label: "Health Screening", color: "var(--kmed-aqua)" },
    { icon: "award", label: "Orthopedics & Spine", color: "var(--kmed-aqua)" },
    { icon: "star", label: "Oncology", color: "var(--kmed-green-dark)" },
    { icon: "user", label: "Fertility / IVF", color: "var(--kmed-green-dark)" },
    { icon: "medkit", label: "Dental", color: "var(--kmed-aqua)" },
    { icon: "plus", label: "View All Specialties", color: "var(--kmed-navy)" },
  ];
  return (
    <section style={{padding:"0 80px 64px"}}>
      <div className="surface chip-row" style={{padding:"32px 40px", display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:20}}>
        {items.map((it,i)=>(
          <a key={i} href="#" onClick={e=>e.preventDefault()} style={{display:"flex", alignItems:"center", gap:14, padding:"14px 8px", borderRadius:14, textDecoration:"none", color:"var(--text-primary)", transition:"background .15s"}} onMouseOver={e=>e.currentTarget.style.background="var(--kmed-bg-soft)"} onMouseOut={e=>e.currentTarget.style.background="transparent"}>
            <span style={{width:44, height:44, borderRadius:12, background:"#fff", border:"1px solid var(--kmed-line)", display:"flex", alignItems:"center", justifyContent:"center"}}><Icon name={it.icon} size={20} color={it.color}/></span>
            <span style={{font:"700 15px var(--font-body)"}}>{it.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { n: "01", title: "Tell us your goals", body: "Share what you'd like treated and your travel window. Takes ~3 minutes.", icon: "chat" },
    { n: "02", title: "Get matched", body: "We pair you with 2–3 accredited hospitals that fit your case and budget.", icon: "user" },
    { n: "03", title: "Request an estimate", body: "Receive transparent treatment estimates after a doctor reviews your file.", icon: "file" },
    { n: "04", title: "Travel with concierge", body: "Visa support, airport pickup, language assistance, and after-care follow-up.", icon: "plane" },
  ];
  return (
    <section style={{padding:"40px 80px 80px"}}>
      <div style={{display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:40}}>
        <div>
          <div className="eyebrow">How It Works</div>
          <h2 className="kh-title" style={{margin:"8px 0 12px"}}>From inquiry to recovery — in four steps</h2>
          <p className="kh-lead">No hidden fees. No automated quotes. Every step reviewed by a licensed care coordinator.</p>
        </div>
        <a href="#" className="btn btn--ghost">Learn more <Icon name="arrow" size={14}/></a>
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
  const items = [
    { cat:"Dermatology", title:"K-Beauty Skincare Program", desc:"Customized facials, laser, and pigmentation care designed for traveling patients. 3–7 day plans.", price:"USD 480 – 2,400", icon:"sparkle", c1:"#FCE4EC", c2:"#F8BBD0", glyph:"✿" },
    { cat:"Health Screening", title:"Premium Full-Body Check-up", desc:"Comprehensive 1-day screening with PET-CT, cardiology, and oncology markers at top hospitals.", price:"USD 1,800 – 4,200", icon:"shield", c1:"#B3E5FC", c2:"#81D4FA", glyph:"♡" },
    { cat:"Orthopedics", title:"Spine & Joint Restoration", desc:"Minimally invasive spine surgery and robotic knee/hip replacement with 7–14 day recovery support.", price:"USD 8,500 – 22,000", icon:"award", c1:"#C8E6C9", c2:"#A5D6A7", glyph:"✚" },
    { cat:"Plastic Surgery", title:"Facial Contouring Consult", desc:"Doctor-led consultations and conservative procedure planning. 2-stage review before any commitment.", price:"USD 2,200 – 12,000", icon:"medkit", c1:"#FFE0E6", c2:"#FFC1CC", glyph:"♢" },
    { cat:"Oncology", title:"Cancer Second Opinion", desc:"Bring your records — receive a multi-disciplinary review from Korean tertiary cancer centers.", price:"USD 950 – 3,200", icon:"star", c1:"#B3E5FC", c2:"#03ACF2", glyph:"◐" },
    { cat:"Dental", title:"Implant & Smile Design", desc:"Digital implant planning, all-on-4, and porcelain veneers from Gangnam-area dental clinics.", price:"USD 1,200 – 9,800", icon:"plus", c1:"#E1F5FE", c2:"#B3E5FC", glyph:"◇" },
  ];
  return (
    <section style={{padding:"0 80px 80px"}}>
      <div style={{display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:32}}>
        <div>
          <div className="eyebrow">Popular Treatments</div>
          <h2 className="kh-title" style={{margin:"8px 0 0"}}>Featured care from accredited Korean hospitals</h2>
        </div>
        <a href="#" className="btn btn--ghost">Browse all treatments <Icon name="arrow" size={14}/></a>
      </div>
      <div className="card-grid-3" style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:28}}>
        {items.map((it,i)=>(
          <div key={i} className="tcard">
            <div className="tcard__media" style={{background:`linear-gradient(135deg, ${it.c1}, ${it.c2})`}}>
              <div className="tcard__pin">{it.cat}</div>
              <div className="tile"><Icon name={it.icon} size={84} color="rgba(255,255,255,0.95)"/></div>
            </div>
            <div className="tcard__body">
              <div className="tcard__title">{it.title}</div>
              <div className="tcard__desc">{it.desc}</div>
              <div className="tcard__foot">
                <div className="tcard__price"><small>Estimate from</small>{it.price}</div>
                <a href="#" className="btn btn--text">Details →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const PartnerHospitals = () => {
  const items = [
    { initials:"AS", name:"Asan Medical Center", loc:"Songpa-gu, Seoul", tags:["JCI", "Cancer", "Cardiology"] },
    { initials:"SS", name:"Samsung Medical Center", loc:"Gangnam-gu, Seoul", tags:["JCI", "Transplant", "Oncology"] },
    { initials:"SN", name:"Seoul National Univ. Hospital", loc:"Jongno-gu, Seoul", tags:["Tertiary", "Research"] },
    { initials:"SV", name:"Severance Hospital (Yonsei)", loc:"Seodaemun-gu, Seoul", tags:["JCI", "Robotics"] },
    { initials:"GU", name:"Korea Univ. Guro Hospital", loc:"Guro-gu, Seoul", tags:["Stroke", "Spine"] },
    { initials:"PU", name:"Pusan National Univ. Hospital", loc:"Seo-gu, Busan", tags:["Tertiary", "Dental"] },
    { initials:"KB", name:"Kangbuk Samsung Check-up", loc:"Jongno-gu, Seoul", tags:["Screening"] },
    { initials:"WO", name:"Wooridul Spine Hospital", loc:"Gangnam-gu, Seoul", tags:["Spine", "Pain"] },
  ];
  return (
    <section style={{padding:"0 80px 80px", background:"linear-gradient(180deg, transparent, #F5FBFE)"}}>
      <div style={{display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:32}}>
        <div>
          <div className="eyebrow">Network</div>
          <h2 className="kh-title" style={{margin:"8px 0 0"}}>120+ accredited partner hospitals</h2>
        </div>
        <a href="#" className="btn btn--ghost">View directory <Icon name="arrow" size={14}/></a>
      </div>
      <div className="card-grid-4" style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:20}}>
        {items.map((h,i)=>(
          <div key={i} className="hcard">
            <div className="hcard__logo">{h.initials}</div>
            <div style={{flex:1, minWidth:0}}>
              <div className="hcard__name" style={{whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>{h.name}</div>
              <div className="hcard__loc">{h.loc}</div>
              <div className="hcard__tags">{h.tags.slice(0,2).map(t=><span key={t} className="hcard__tag">{t}</span>)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const StoryStrip = () => {
  const items = [
    { quote:"The coordinator translated every step. I never felt lost — even on the operating room intake.", name:"Sakura T.", meta:"Tokyo, Japan · Spine Surgery", tags:["Orthopedics","JP"] },
    { quote:"I came for a 2-day check-up and left with answers I'd waited five years for. Worth every dollar.", name:"David L.", meta:"San Francisco, USA · Health Screening", tags:["Screening","EN"] },
    { quote:"My dermatology plan was tailored to my skin tone and my flight schedule. Felt genuinely premium.", name:"Wei C.", meta:"Taipei, Taiwan · K-Beauty", tags:["Dermatology","ZH"] },
  ];
  return (
    <section style={{padding:"60px 80px 80px"}}>
      <div style={{display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:32}}>
        <div>
          <div className="eyebrow">Patient Stories</div>
          <h2 className="kh-title" style={{margin:"8px 0 0"}}>Trusted by patients from 28 countries</h2>
        </div>
        <a href="#" className="btn btn--ghost">Read all stories <Icon name="arrow" size={14}/></a>
      </div>
      <div className="card-grid-3 stories-grid" style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:24}}>
        {items.map((s,i)=>(
          <div key={i} className="story">
            <div className="story__quote">{s.quote}</div>
            <div className="story__tags">{s.tags.map(t=><span key={t} className="story__tag">{t}</span>)}</div>
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

const ContactCtaBanner = () => (
  <section style={{padding:"0 80px 80px"}}>
    <div className="cta-banner" style={{borderRadius:24, padding:"56px 60px", background:"var(--gradient-cta)", color:"#fff", display:"flex", alignItems:"center", justifyContent:"space-between", gap:40, position:"relative", overflow:"hidden"}}>
      <div style={{position:"absolute", right:60, top:-40, width:240, height:240, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.3)"}}></div>
      <div style={{position:"absolute", right:-40, bottom:-80, width:280, height:280, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.2)"}}></div>
      <div style={{position:"relative", maxWidth:640}}>
        <div style={{font:"900 40px/1.2 var(--font-display)", marginBottom:12}}>Ready to begin your care journey?</div>
        <div style={{font:"400 18px/1.55 var(--font-body)", opacity:.92}}>Tell us about your case in five short steps. A licensed coordinator will respond with verified hospital options within 24 hours.</div>
      </div>
      <div style={{position:"relative", display:"flex", flexDirection:"column", gap:12, alignItems:"flex-end"}}>
        <button className="btn btn--white-pill" style={{padding:"18px 32px", fontSize:18}}>Start Get Matched <Icon name="arrow" size={16} color="#03ACF2"/></button>
        <span style={{font:"400 13px var(--font-body)", opacity:.92}}>Free · Confidential · No obligation</span>
      </div>
    </div>
  </section>
);

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
