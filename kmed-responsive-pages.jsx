// kmed-responsive-pages.jsx — Mobile + Tablet variants of all 9 pages
// Uses the same design tokens as desktop. Pure reflow.

// ============== HOME ==============
const HomeResponsive = ({ bp = "m" }) => {
  const isM = bp === "m";
  const isT = bp === "t";
  const treats = [
    { cat:"Dermatology", t:"K-Beauty Skincare", d:"3–7 day plans of facials, laser, pigmentation care.", p:"USD 480 – 2,400", icon:"sparkle"},
    { cat:"Screening", t:"Comprehensive Health", d:"1–2 day MRI, CT, cardiac & cancer screening.", p:"USD 1,200 – 3,800", icon:"shield"},
    { cat:"Orthopedics", t:"Knee & Spine Surgery", d:"Tertiary-level, minimally invasive options.", p:"USD 9,000 – 28,000", icon:"medkit"},
    { cat:"Plastic Surgery", t:"Consultation & Care", d:"Board-certified surgeons, recovery concierge.", p:"On request", icon:"award"},
    { cat:"Oncology", t:"Second Opinion Pathway", d:"Senior oncologist record review and pathway plan.", p:"USD 1,500 – 4,200", icon:"file"},
  ];
  const steps = [
    { n:"01", t:"Tell us your goals", d:"Share what you'd like treated and your travel window. ~3 minutes.", icon:"chat"},
    { n:"02", t:"Get matched", d:"We pair you with 2–3 accredited hospitals that fit your case.", icon:"user"},
    { n:"03", t:"Request an estimate", d:"Receive transparent estimates after a doctor reviews your file.", icon:"file"},
    { n:"04", t:"Travel & be cared for", d:"Visa support, airport pickup, translator at every appointment.", icon:"plane"},
  ];
  const stories = [
    { q:"The coordinator translated every step. I never felt lost — even on the operating room intake.", n:"Sakura T.", m:"Tokyo, Japan · Spine Surgery", tags:["Orthopedics","JP"]},
    { q:"Three hospitals replied within a day, with itemized estimates. Made the decision easier.", n:"David L.", m:"San Francisco, USA · Health Screening", tags:["Screening","US"]},
    { q:"My dermatologist tailored a plan I could finish in five days. Skin still glowing weeks later.", n:"Wei C.", m:"Taipei, Taiwan · Dermatology", tags:["Derm","TW"]},
  ];
  return (
    <div className={"kmed-page kmed-page--"+bp} data-screen-label={isM?"01M Home":"01T Home"}>
      <HeaderResponsive bp={bp} active="home"/>

      {/* HERO */}
      {isM ? (
        <section className="hero-m">
          <div className="eyebrow" style={{marginBottom:10}}>Medical Tourism · Korea</div>
          <h1>Top Korean care, <br/>matched to your case.</h1>
          <p>K-Med Global connects international patients with accredited Korean hospitals — concierge support from inquiry to recovery.</p>
          <div style={{display:"flex", gap:10, flexDirection:"column"}}>
            <button className="btn btn--primary" style={{justifyContent:"center", height:52, fontSize:16}}>Get Matched →</button>
            <button className="btn btn--ghost" style={{justifyContent:"center", height:48}}>Browse Treatments</button>
          </div>
          <div className="hero-illus hero-illus--m"></div>
          <div style={{marginTop:18}}><TrustRow/></div>
        </section>
      ) : (
        <section className="hero-t">
          <div>
            <div className="eyebrow" style={{marginBottom:10}}>Medical Tourism · Korea</div>
            <h1>Top Korean care,<br/>matched to your case.</h1>
            <p>Concierge support from initial inquiry through post-op recovery — across 60+ accredited hospitals.</p>
            <div className="hero-t__cta">
              <button className="btn btn--primary" style={{height:52}}>Get Matched →</button>
              <button className="btn btn--ghost" style={{height:48}}>Browse Treatments</button>
            </div>
            <div style={{marginTop:22}}><TrustRow/></div>
          </div>
          <div className="hero-illus hero-illus--t"></div>
        </section>
      )}

      {/* COUNTERS */}
      <section className={"sec-"+bp} style={{paddingTop:0}}>
        <div className={isM?"stats-m":"stats-t"}>
          <div className="stat"><div className="stat__num">60+</div><div className="stat__lbl">Partner hospitals</div></div>
          <div className="stat"><div className="stat__num">1,800+</div><div className="stat__lbl">Patients matched</div></div>
          <div className="stat"><div className="stat__num">12</div><div className="stat__lbl">Languages supported</div></div>
        </div>
      </section>

      {/* TREATMENTS — swipe on M, 2-up on T */}
      <section className={"sec-"+bp}>
        <div className="eyebrow">Treatments</div>
        <h2 className={isM?"h2-m":"h2-t"} style={{margin:"6px 0 8px"}}>Care designed for travel windows</h2>
        <p className={"lead-"+bp} style={{margin:"0 0 22px"}}>From single-visit screenings to multi-week surgical pathways — every program scoped to your stay.</p>
        {isM ? (
          <React.Fragment>
            <div className="swipe">
              {treats.map((t,i)=>(
                <div key={i} className="tcard tcard--m">
                  <div className="tcard__media">
                    <div className="tcard__pin">{t.cat}</div>
                    <div className="tile"><Icon name={t.icon} size={64} color="rgba(255,255,255,0.95)"/></div>
                  </div>
                  <div className="tcard__body">
                    <h3 className="tcard__title">{t.t}</h3>
                    <p className="tcard__desc">{t.d}</p>
                    <div className="tcard__foot"><span className="tcard__price"><small>From</small>{t.p}</span><Icon name="arrow" size={16} color="#00579B"/></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swipe-dots"><span className="swipe-dot is-on"></span><span className="swipe-dot"></span><span className="swipe-dot"></span><span className="swipe-dot"></span><span className="swipe-dot"></span></div>
          </React.Fragment>
        ) : (
          <div className="grid-t-2 home-treats">
            {treats.map((t,i)=>(
              <div key={i} className="tcard tcard--t">
                <div className="tcard__media"><div className="tcard__pin">{t.cat}</div><div className="tile"><Icon name={t.icon} size={72} color="rgba(255,255,255,0.95)"/></div></div>
                <div className="tcard__body">
                  <h3 className="tcard__title">{t.t}</h3>
                  <p className="tcard__desc">{t.d}</p>
                  <div className="tcard__foot"><span className="tcard__price"><small>From</small>{t.p}</span><Icon name="arrow" size={16} color="#00579B"/></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* HOW IT WORKS — vertical mobile, horizontal tablet */}
      <section className={"sec-"+bp} style={{background:"var(--kmed-bg-soft)"}}>
        <div className="eyebrow">How it works</div>
        <h2 className={isM?"h2-m":"h2-t"} style={{margin:"6px 0 24px"}}>From inquiry to recovery</h2>
        {isM ? (
          <div className="steps-vert">
            {steps.map((s,i)=>(
              <div key={i} className="stepv">
                <div className="stepv__rail">
                  <div className="stepv__num">{s.n}</div>
                  <div className="stepv__line"></div>
                </div>
                <div className="stepv__body">
                  <Icon name={s.icon} size={20} color="#00579B"/>
                  <h4>{s.t}</h4>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid-t-2" style={{gap:16}}>
            {steps.map((s,i)=>(
              <div key={i} style={{padding:"22px", background:"#fff", borderRadius:18, border:"1px solid var(--kmed-line)"}}>
                <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:10}}>
                  <div style={{width:40, height:40, borderRadius:"50%", background:"linear-gradient(135deg, var(--kmed-aqua), var(--kmed-navy))", color:"#fff", font:"900 13px var(--font-display)", display:"flex", alignItems:"center", justifyContent:"center"}}>{s.n}</div>
                  <Icon name={s.icon} size={20} color="#00579B"/>
                </div>
                <h4 style={{font:"700 18px var(--font-display)", margin:"0 0 6px"}}>{s.t}</h4>
                <p style={{font:"400 14px/1.55 var(--font-body)", color:"var(--text-secondary)", margin:0}}>{s.d}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* STORIES — 1 on M, 2 on T */}
      <section className={"sec-"+bp}>
        <div className="eyebrow">Patient stories</div>
        <h2 className={isM?"h2-m":"h2-t"} style={{margin:"6px 0 22px"}}>Voices from our patients</h2>
        {isM ? (
          <React.Fragment>
            <div className="swipe">
              {stories.map((s,i)=>(
                <div key={i} className="story story-m" style={{flex:"0 0 88%"}}>
                  <div className="story__quote">{s.q}</div>
                  <div className="story__patient">
                    <div className="story__avatar">{s.n.split(" ").map(p=>p[0]).join("")}</div>
                    <div style={{flex:1}}>
                      <div className="story__name">{s.n}</div>
                      <div className="story__meta">{s.m}</div>
                    </div>
                  </div>
                  <div className="story__tags">{s.tags.map(t=> <span key={t} className="story__tag">{t}</span>)}</div>
                </div>
              ))}
            </div>
            <div className="swipe-dots"><span className="swipe-dot is-on"></span><span className="swipe-dot"></span><span className="swipe-dot"></span></div>
          </React.Fragment>
        ) : (
          <div className="grid-t-2 stories-grid">
            {stories.map((s,i)=>(
              <div key={i} className="story">
                <div className="story__quote">{s.q}</div>
                <div className="story__patient">
                  <div className="story__avatar">{s.n.split(" ").map(p=>p[0]).join("")}</div>
                  <div style={{flex:1}}><div className="story__name">{s.n}</div><div className="story__meta">{s.m}</div></div>
                </div>
                <div className="story__tags">{s.tags.map(t=> <span key={t} className="story__tag">{t}</span>)}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className={"sec-"+bp} style={{paddingTop:0}}>
        <div className="cta-banner-m">
          <div>
            <h3>Ready to start?</h3>
            <p>Talk to a medical guide in your language — free, no commitment.</p>
          </div>
          <div style={{display:"flex", gap:10, flexDirection: isM?"column":"row"}}>
            <button className="btn btn--white-pill" style={{justifyContent:"center", minHeight:48}}>Get Matched →</button>
            <button className="btn" style={{background:"transparent", border:"1.5px solid rgba(255,255,255,0.4)", color:"#fff", borderRadius:999, padding:"14px 22px", justifyContent:"center", minHeight:48}}>Talk to a Guide</button>
          </div>
        </div>
      </section>

      <FooterResponsive bp={bp}/>
    </div>
  );
};

// ============== TREATMENTS LISTING ==============
const TreatListResponsive = ({ bp = "m" }) => {
  const isM = bp === "m";
  const items = [
    { cat:"Dermatology", t:"K-Beauty Skincare Program", d:"3–7 day plan: facial, laser toning, pigmentation, post-care kit.", p:"USD 480 – 2,400", icon:"sparkle"},
    { cat:"Dermatology", t:"Acne Scar Restoration", d:"Multi-modal: fractional laser, subcision, PRP.", p:"USD 900 – 3,600", icon:"sparkle"},
    { cat:"Plastic Surg.", t:"Consultation Pathway", d:"Board-certified surgeon consult, candid candidacy review.", p:"From USD 200", icon:"award"},
    { cat:"Screening", t:"Comprehensive Health", d:"1–2 day MRI, CT, cardiac, cancer markers.", p:"USD 1,200 – 3,800", icon:"shield"},
    { cat:"Orthopedics", t:"Knee Replacement", d:"Robotic-assisted total knee, 12–14 day care window.", p:"USD 14,000 – 24,000", icon:"medkit"},
    { cat:"Oncology", t:"Second Opinion Review", d:"Senior oncologist record review + pathway plan.", p:"USD 1,500 – 4,200", icon:"file"},
  ];
  return (
    <div className={"kmed-page kmed-page--"+bp} data-screen-label={isM?"02M Treatments":"02T Treatments"}>
      <HeaderResponsive bp={bp} active="treat"/>
      <section className={"phero phero--"+bp}>
        <div className="phero__pinks"></div>
        <div className="phero__crumbs"><a href="#">Home</a><span>›</span><span style={{color:"var(--text-primary)",fontWeight:700}}>Treatments</span></div>
        <h1 className="phero__title">All treatments</h1>
        <p className="phero__sub">{isM?"Filter by category, budget, and length of stay.":"Filter programs by category, budget, length of stay and language support."}</p>
      </section>

      {/* Filter row */}
      <section className={"sec-"+bp} style={{paddingTop: isM?16:24, paddingBottom:isM?20:28}}>
        <div className="chiprow">
          <span className="chip" style={{background:"var(--kmed-aqua)", color:"#fff", border:"none"}}>All categories</span>
          <span className="chip">Dermatology</span>
          <span className="chip">Plastic Surg.</span>
          <span className="chip">Screening</span>
          <span className="chip">Ortho</span>
          <span className="chip">Oncology</span>
          <span className="chip">+ More</span>
        </div>
        <div style={{display:"flex", gap:10, marginTop:14, alignItems:"center"}}>
          <span style={{font:"700 13px var(--font-body)", color:"var(--text-secondary)"}}>{isM?"248 results":"248 programs found"}</span>
          <span style={{marginLeft:"auto", display:"flex", alignItems:"center", gap:8, padding:"8px 14px", border:"1px solid var(--kmed-line)", borderRadius:999, font:"700 13px var(--font-body)", minHeight:44}}>
            <Icon name="filter" size={14} color="#00579B"/>{isM?"Filter":"Sort: Recommended"}
          </span>
        </div>
      </section>

      {/* List */}
      <section className={"sec-"+bp} style={{paddingTop:0}}>
        <div className={isM?"tlist-m":"tlist-t"}>
          {items.map((it,i)=>(
            <div key={i} className={"tcard tcard--"+bp}>
              <div className="tcard__media" style={{aspectRatio:"16/9"}}>
                <div className="tcard__pin">{it.cat}</div>
                <div className="tile"><Icon name={it.icon} size={isM?56:64} color="rgba(255,255,255,0.95)"/></div>
              </div>
              <div className="tcard__body">
                <h3 className="tcard__title">{it.t}</h3>
                <p className="tcard__desc">{it.d}</p>
                <div className="tcard__foot"><span className="tcard__price"><small>From</small>{it.p}</span><Icon name="arrow" size={16} color="#00579B"/></div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn--ghost" style={{width:"100%", justifyContent:"center", minHeight:48, marginTop:20}}>Load more</button>
      </section>

      <FooterResponsive bp={bp}/>
    </div>
  );
};

Object.assign(window, { HomeResponsive, TreatListResponsive });
