// kmed-responsive-pages-2.jsx — Treatment Detail, Get Matched, Why Korea, Stories, Contact, Admin (M+T)

// ============== TREATMENT DETAIL ==============
const TreatDetailResponsive = ({ bp = "m" }) => {
  const isM = bp === "m";
  const procedures = [
    { name:"Initial dermatology consult", dur:"45 min", price:"USD 80–180" },
    { name:"Laser toning (×3 sessions)", dur:"30 min/session", price:"USD 360–720" },
    { name:"HIFU lift evaluation", dur:"60 min", price:"USD 540–1,080" },
    { name:"Take-home care kit", dur:"—", price:"USD 60–140" },
  ];
  const doctors = [
    { initials:"JP", name:"Dr. Ji-won Park", role:"Board-certified Dermatologist · 14 yrs", meta:"Lumina Derm. Clinic · Seoul"},
    { initials:"HC", name:"Dr. Hye-jin Choi", role:"Cosmetic Dermatology · 11 yrs", meta:"Seoul Skin Institute · Gangnam"},
  ];
  return (
    <div className={"kmed-page kmed-page--"+bp} data-screen-label={isM?"03M Detail":"03T Detail"}>
      <HeaderResponsive bp={bp} active="treat"/>

      <section className={"phero phero--"+bp}>
        <div className="phero__pinks"></div>
        <div className="phero__crumbs"><a href="#">Home</a><span>›</span><a href="#">Treatments</a><span>›</span><span style={{color:"var(--text-primary)",fontWeight:700}}>Dermatology & K-Beauty</span></div>
        <div className="eyebrow" style={{marginBottom:6}}>Dermatology · K-Beauty</div>
        <h1 className="phero__title">Dermatology &<br/>K-Beauty</h1>
        <p className="phero__sub">Travel-friendly programs combining medical-grade treatments with the routines Korean clinics are known for — supervised by board-certified specialists.</p>
        <div style={{marginTop:18}}><TrustRow/></div>
      </section>

      {/* Compliance note */}
      <section className={"sec-"+bp} style={{paddingTop:isM?16:20, paddingBottom:isM?16:20}}>
        <div style={{padding:"14px 18px", borderRadius:12, background:"#FFFAEB", border:"1px solid #FDE68A", display:"flex", gap:12, alignItems:"flex-start"}}>
          <Icon name="shield" size={18} color="#B45309"/>
          <div style={{font:"400 13px/1.55 var(--font-body)", color:"#7C5410"}}><strong>Indicative ranges only.</strong> Final pricing is issued by the treating hospital after a doctor reviews your file.</div>
        </div>
      </section>

      {/* Tabs row simplified */}
      <section className={"sec-"+bp} style={{paddingTop:0}}>
        <div className="chiprow">
          <span className="chip" style={{background:"var(--kmed-aqua)", color:"#fff", border:"none"}}>Overview</span>
          <span className="chip">Procedures</span>
          <span className="chip">What to expect</span>
          <span className="chip">FAQs</span>
        </div>
      </section>

      {/* Overview */}
      <section className={"sec-"+bp} style={{paddingTop:20}}>
        <h2 className={isM?"h2-m":"h2-t"} style={{margin:"0 0 12px"}}>Overview</h2>
        <p style={{font:`400 ${isM?"15px":"16px"}/1.65 var(--font-body)`, color:"var(--text-primary)", margin:"0 0 12px"}}>Korean dermatology pairs medical training with research-led product development. K-Med Global vets every clinic for licensure, infection-control standards, and English/JP/CN support.</p>
        <p style={{font:`400 ${isM?"14px":"15px"}/1.65 var(--font-body)`, color:"var(--text-secondary)", margin:0}}>You'll receive a written care plan, an itemized estimate, and a recovery schedule that fits your travel window before you commit.</p>
      </section>

      {/* Procedures */}
      <section className={"sec-"+bp} style={{background:"var(--kmed-bg-soft)"}}>
        <div className="eyebrow">Procedures included</div>
        <h2 className={isM?"h2-m":"h2-t"} style={{margin:"6px 0 18px"}}>Typical care plan</h2>
        <div style={{display:"flex", flexDirection:"column", gap:10}}>
          {procedures.map((p,i)=>(
            <div key={i} style={{padding:"16px 18px", background:"#fff", borderRadius:14, border:"1px solid var(--kmed-line)", display:"flex", flexDirection: isM?"column":"row", gap: isM?6:18, alignItems: isM?"flex-start":"center"}}>
              <div style={{flex:1, font:"700 15px var(--font-body)"}}>{p.name}</div>
              <div style={{display:"flex", gap:18, font:"400 13px var(--font-body)", color:"var(--text-secondary)"}}>
                <span><Icon name="cal" size={12} color="rgba(0,0,0,0.5)"/> {p.dur}</span>
                <span style={{color:"var(--kmed-green-dark)", fontWeight:700}}>{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors */}
      <section className={"sec-"+bp}>
        <div className="eyebrow">Treating specialists</div>
        <h2 className={isM?"h2-m":"h2-t"} style={{margin:"6px 0 18px"}}>Board-certified team</h2>
        <div className={isM?"":"grid-t-2"} style={isM?{display:"flex", flexDirection:"column", gap:12}:{}}>
          {doctors.map((d,i)=>(
            <div key={i} className="dcard">
              <div className="dcard__avatar">{d.initials}</div>
              <div style={{flex:1, minWidth:0}}>
                <h4 className="dcard__name">{d.name}</h4>
                <div className="dcard__role">{d.role}</div>
                <div className="dcard__meta"><span>{d.meta}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FooterResponsive bp={bp}/>

      {/* Sticky CTA — mobile only */}
      {isM && (
        <div className="sticky-cta-m">
          <button className="btn btn--ghost" style={{flex:"0 0 44px", padding:0, justifyContent:"center"}}><Icon name="chat" size={18} color="#00579B"/></button>
          <button className="btn btn--primary">Request Estimate →</button>
        </div>
      )}
    </div>
  );
};

// ============== GET MATCHED (5-step wizard) ==============
const GetMatchedResponsive = ({ bp = "m" }) => {
  const isM = bp === "m";
  const cats = ["Dermatology & K-Beauty","Plastic Surgery","Health Screening","Orthopedics","Oncology","Cardiology","Fertility / IVF","Dental","Ophthalmology","Not sure yet"];
  return (
    <div className={"kmed-page kmed-page--"+bp} data-screen-label={isM?"04M Get Matched":"04T Get Matched"}>
      <HeaderResponsive bp={bp} active="match"/>

      <section className={"phero phero--"+bp}>
        <div className="phero__pinks"></div>
        <div className="phero__crumbs"><a href="#">Home</a><span>›</span><span style={{color:"var(--text-primary)",fontWeight:700}}>Get Matched</span></div>
        <h1 className="phero__title">Get matched in<br/>5 steps</h1>
        <p className="phero__sub">{isM?"Takes ~3 minutes. Free, no commitment.":"Takes about 3 minutes. Free, with no commitment to book."}</p>
      </section>

      <section className={"wizard--"+bp}>
        {/* Steps bar */}
        <div className={isM?"steps steps--m":"steps"} style={{marginBottom:24}}>
          {["Treatment","Your case","Travel","Contact","Review"].map((s,i)=>(
            <div key={i} className={"step" + (i===0?" is-active":"") + (i<0?" is-done":"")} style={{flex: isM&&i!==0?"none":1}}>
              <div className="step__dot">{i+1}</div>
              {!isM && <div className="step__lbl">{s}</div>}
              {i<4 && <div className="step__bar"></div>}
            </div>
          ))}
        </div>

        <div className="eyebrow">Step 1 of 5</div>
        <h2>What treatment are you considering?</h2>
        <p style={{font:"400 14px/1.55 var(--font-body)", color:"var(--text-secondary)", margin:"0 0 22px"}}>Select all that apply. You can change this anytime.</p>

        <div style={{display:"grid", gridTemplateColumns: isM?"1fr":"1fr 1fr", gap:10}}>
          {cats.map((c,i)=>(
            <label key={c} className={"checkpill" + (i===0?" is-on":"")}>
              <span className="check">{i===0 && <Icon name="check" size={14} color="#fff"/>}</span>
              <span style={{flex:1}}>{c}</span>
            </label>
          ))}
        </div>

        <div style={{marginTop:28, padding:"18px", background:"var(--kmed-bg-soft)", borderRadius:14, font:"400 13px/1.55 var(--font-body)", color:"var(--text-secondary)"}}>
          <strong style={{color:"var(--text-primary)"}}>Privacy:</strong> Your inquiry is shared only with the 2–3 hospitals we match you with. Not sold or used for marketing.
        </div>

        <div style={{marginTop:24, display:"flex", gap:10, flexDirection: isM?"column-reverse":"row", alignItems: isM?"stretch":"center", justifyContent:"space-between"}}>
          <button className="btn btn--ghost" style={{justifyContent:"center", minHeight:48}}>← Back</button>
          <button className="btn btn--primary" style={{justifyContent:"center", minHeight:52, fontSize:16}}>Continue → <span style={{opacity:.7, marginLeft:6, fontSize:13}}>Step 2 of 5</span></button>
        </div>
      </section>

      <FooterResponsive bp={bp}/>
    </div>
  );
};

// ============== WHY KOREA ==============
const WhyKoreaResponsive = ({ bp = "m" }) => {
  const isM = bp === "m";
  const reasons = [
    { icon:"award", t:"Tertiary-level training", d:"Korean specialists train at top global institutions, then return to publish in their fields."},
    { icon:"shield", t:"JCI accreditation", d:"Many partner hospitals hold Joint Commission International accreditation."},
    { icon:"sparkle", t:"K-Beauty research lead", d:"Korea ranks among the top three in dermatology and cosmeceutical research output."},
    { icon:"money", t:"Transparent pricing", d:"Itemized estimates from the hospital — no hidden facility or coordinator fees."},
    { icon:"lang", t:"Multi-language care", d:"English, Japanese, Chinese, Russian and Arabic interpreters at every step."},
    { icon:"plane", t:"Visa & travel support", d:"Medical visa letters, airport transfers, and hotel partners."},
  ];
  return (
    <div className={"kmed-page kmed-page--"+bp} data-screen-label={isM?"05M Why Korea":"05T Why Korea"}>
      <HeaderResponsive bp={bp} active="korea"/>

      <section className={"phero phero--"+bp}>
        <div className="phero__pinks"></div>
        <div className="phero__crumbs"><a href="#">Home</a><span>›</span><span style={{color:"var(--text-primary)",fontWeight:700}}>Why Korea</span></div>
        <div className="eyebrow" style={{marginBottom:6}}>한국 의료 · World-class care</div>
        <h1 className="phero__title">Why patients choose Korea</h1>
        <p className="phero__sub">A research-led system, accredited hospitals, and concierge support that fits a travel window.</p>
      </section>

      {/* Stats */}
      <section className={"sec-"+bp} style={{paddingTop:0}}>
        <div className={isM?"stats-m":"stats-t"}>
          <div className="stat"><div className="stat__num">42</div><div className="stat__lbl">JCI hospitals</div></div>
          <div className="stat"><div className="stat__num">12</div><div className="stat__lbl">Languages</div></div>
          <div className="stat"><div className="stat__num">650K+</div><div className="stat__lbl">Intl. patients '24</div></div>
        </div>
      </section>

      {/* Reasons */}
      <section className={"sec-"+bp}>
        <div className="eyebrow">Why Korea</div>
        <h2 className={isM?"h2-m":"h2-t"} style={{margin:"6px 0 22px"}}>Six things that set it apart</h2>
        <div style={{display:"grid", gridTemplateColumns: isM?"1fr":"1fr 1fr", gap:14}}>
          {reasons.map((r,i)=>(
            <div key={i} style={{padding:"22px 20px", background:"#fff", borderRadius:18, border:"1px solid var(--kmed-line)"}}>
              <div style={{width:48, height:48, borderRadius:14, background:"linear-gradient(135deg, var(--kmed-aqua-soft), #fff)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:14}}>
                <Icon name={r.icon} size={22} color="#00579B"/>
              </div>
              <h4 style={{font:"700 17px var(--font-display)", margin:"0 0 8px"}}>{r.t}</h4>
              <p style={{font:"400 14px/1.55 var(--font-body)", color:"var(--text-secondary)", margin:0}}>{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hospitals */}
      <section className={"sec-"+bp} style={{background:"var(--kmed-bg-soft)"}}>
        <div className="eyebrow">Partner hospitals</div>
        <h2 className={isM?"h2-m":"h2-t"} style={{margin:"6px 0 18px"}}>60+ accredited partners</h2>
        <div style={{display:"grid", gridTemplateColumns: isM?"1fr":"1fr 1fr", gap:12}}>
          {[
            ["AS","Asan Medical Center","Songpa-gu, Seoul",["JCI","Cancer"]],
            ["SS","Samsung Medical","Gangnam-gu, Seoul",["JCI","Cardio"]],
            ["SN","Seoul Nat'l Univ. Hospital","Jongno-gu, Seoul",["Research"]],
            ["LD","Lumina Derm. Clinic","Gangnam-gu, Seoul",["Derm","K-Beauty"]],
          ].map((h,i)=>(
            <div key={i} className={"hcard"+(isM?" hcard--m":"")}>
              <div className="hcard__logo">{h[0]}</div>
              <div style={{flex:1, minWidth:0}}>
                <h4 className="hcard__name">{h[1]}</h4>
                <div className="hcard__loc">{h[2]}</div>
                <div className="hcard__tags">{h[3].map(t=> <span key={t} className="hcard__tag">{t}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FooterResponsive bp={bp}/>
    </div>
  );
};

// ============== STORIES ==============
const StoriesResponsive = ({ bp = "m" }) => {
  const isM = bp === "m";
  const stories = [
    { q:"The coordinator translated every step. I never felt lost.", n:"Sakura T.", m:"Tokyo, Japan · Spine Surgery", tags:["Ortho","JP"]},
    { q:"Three hospitals replied within a day, with itemized estimates.", n:"David L.", m:"San Francisco · Health Screening", tags:["Screening","US"]},
    { q:"My dermatologist tailored a plan I could finish in five days.", n:"Wei C.", m:"Taipei, Taiwan · Dermatology", tags:["Derm","TW"]},
    { q:"The second-opinion review from Asan changed my treatment plan.", n:"Mei L.", m:"Shanghai, China · Oncology", tags:["Onc","CN"]},
    { q:"Visa letter arrived in 48 hours. Travel was painless.", n:"Anna R.", m:"Moscow · Knee Replacement", tags:["Ortho","RU"]},
    { q:"Recovery hotel and translator at every appointment. 5 stars.", n:"James W.", m:"London · LASIK", tags:["Ophth","UK"]},
  ];
  return (
    <div className={"kmed-page kmed-page--"+bp} data-screen-label={isM?"06M Stories":"06T Stories"}>
      <HeaderResponsive bp={bp} active="stories"/>

      <section className={"phero phero--"+bp}>
        <div className="phero__pinks"></div>
        <div className="phero__crumbs"><a href="#">Home</a><span>›</span><span style={{color:"var(--text-primary)",fontWeight:700}}>Stories</span></div>
        <div className="eyebrow" style={{marginBottom:6}}>Patient voices · Text-only</div>
        <h1 className="phero__title">Stories from our patients</h1>
        <p className="phero__sub">Honest accounts in their own words — no before/after photography, in keeping with Korean medical advertising rules.</p>
      </section>

      {/* Filter chips */}
      <section className={"sec-"+bp} style={{paddingTop:0}}>
        <div className="chiprow">
          <span className="chip" style={{background:"var(--kmed-aqua)", color:"#fff", border:"none"}}>All</span>
          <span className="chip">Dermatology</span>
          <span className="chip">Orthopedics</span>
          <span className="chip">Oncology</span>
          <span className="chip">Screening</span>
        </div>
      </section>

      {/* Stories */}
      <section className={"sec-"+bp} style={{paddingTop:isM?12:18}}>
        {isM ? (
          <div style={{display:"flex", flexDirection:"column", gap:14}}>
            {stories.map((s,i)=>(
              <div key={i} className="story story-m">
                <div className="story__quote">{s.q}</div>
                <div className="story__patient">
                  <div className="story__avatar">{s.n.split(" ").map(p=>p[0]).join("")}</div>
                  <div style={{flex:1}}><div className="story__name">{s.n}</div><div className="story__meta">{s.m}</div></div>
                </div>
                <div className="story__tags">{s.tags.map(t=> <span key={t} className="story__tag">{t}</span>)}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid-t-2">
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

      <FooterResponsive bp={bp}/>
    </div>
  );
};

// ============== CONTACT ==============
const ContactResponsive = ({ bp = "m" }) => {
  const isM = bp === "m";
  return (
    <div className={"kmed-page kmed-page--"+bp} data-screen-label={isM?"07M Contact":"07T Contact"}>
      <HeaderResponsive bp={bp} active="contact"/>

      <section className={"phero phero--"+bp}>
        <div className="phero__pinks"></div>
        <div className="phero__crumbs"><a href="#">Home</a><span>›</span><span style={{color:"var(--text-primary)",fontWeight:700}}>Contact</span></div>
        <h1 className="phero__title">Talk to a medical guide</h1>
        <p className="phero__sub">{isM?"In your language. Free, no commitment.":"In your language. Free, with no commitment to book."}</p>
      </section>

      <section className={"sec-"+bp}>
        <div style={{display:"grid", gridTemplateColumns: isM?"1fr":"1fr 1fr", gap:isM?14:18}}>
          {[
            {i:"chat", t:"Live chat", d:"~2 min wait · EN, JP, CN, RU"},
            {i:"phone", t:"Phone", d:"+82 2 1588 0421 · 09:00–21:00 KST"},
            {i:"mail", t:"Email", d:"care@kmedglobal.com · ~2h reply"},
            {i:"plane", t:"Visit us", d:"5F, Yeoksam-ro 168, Gangnam, Seoul"},
          ].map((c,i)=>(
            <div key={i} style={{padding:"20px", background:"#fff", borderRadius:16, border:"1px solid var(--kmed-line)", display:"flex", gap:14, alignItems:"flex-start"}}>
              <div style={{width:44, height:44, borderRadius:12, background:"var(--kmed-aqua-soft)", display:"flex", alignItems:"center", justifyContent:"center", flex:"none"}}>
                <Icon name={c.i} size={20} color="#00579B"/>
              </div>
              <div>
                <h4 style={{font:"700 16px var(--font-display)", margin:"0 0 6px"}}>{c.t}</h4>
                <p style={{font:"400 13px/1.55 var(--font-body)", color:"var(--text-secondary)", margin:0}}>{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={"sec-"+bp} style={{paddingTop:0}}>
        <div className="eyebrow">Send a message</div>
        <h2 className={isM?"h2-m":"h2-t"} style={{margin:"6px 0 18px"}}>We'll respond within 2 business hours</h2>
        <div style={{display:"flex", flexDirection:"column", gap:14}}>
          <div className="field field--boxed"><label className="field__label">Name</label><input type="text" placeholder="Sakura Tanaka"/></div>
          <div style={{display:"grid", gridTemplateColumns: isM?"1fr":"1fr 1fr", gap:14}}>
            <div className="field field--boxed"><label className="field__label">Email</label><input type="email" placeholder="you@example.com"/></div>
            <div className="field field--boxed"><label className="field__label">Country</label><input type="text" placeholder="Japan"/></div>
          </div>
          <div className="field field--boxed"><label className="field__label">How can we help?</label><textarea rows="5" placeholder="Tell us about your case..."></textarea></div>
          <label className="checkpill" style={{maxWidth: isM?"100%":"100%"}}>
            <span className="check"><Icon name="check" size={14} color="#fff"/></span>
            <span style={{flex:1, fontSize:13, fontWeight:400, color:"var(--text-secondary)"}}>I agree to the privacy policy and to be contacted about my inquiry.</span>
          </label>
          <button className="btn btn--primary" style={{justifyContent:"center", minHeight:52, fontSize:16}}>Send message →</button>
        </div>
      </section>

      <FooterResponsive bp={bp}/>
    </div>
  );
};

Object.assign(window, { TreatDetailResponsive, GetMatchedResponsive, WhyKoreaResponsive, StoriesResponsive, ContactResponsive });
