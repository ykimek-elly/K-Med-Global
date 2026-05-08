// kmed-treatments.jsx — Treatments listing + Detail (Dermatology & K-Beauty)

const TreatFilter = () => {
  const [active, setActive] = React.useState({ cat: "Dermatology & K-Beauty", price: "$$", region: "Seoul" });
  const Section = ({ title, children }) => (
    <div style={{paddingBottom: 22, marginBottom: 22, borderBottom: "1px solid var(--kmed-line)"}}>
      <div style={{font:"700 13px var(--font-body)", color:"var(--text-primary)", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom: 14}}>{title}</div>
      {children}
    </div>
  );
  const cats = ["All Treatments", "Dermatology & K-Beauty", "Plastic Surgery", "Health Screening", "Orthopedics & Spine", "Oncology", "Cardiology", "Fertility / IVF", "Dental", "Ophthalmology"];
  const prices = ["$ < 2,000", "$$ 2k–10k", "$$$ 10k–30k", "$$$$ 30k+"];
  const regions = ["Seoul", "Busan", "Incheon", "Daegu", "Jeju"];
  const stays = ["Same day", "1–3 days", "4–7 days", "1–2 weeks", "2 weeks+"];
  return (
    <aside className="surface--ring" style={{padding: "26px 24px", height:"fit-content", position:"sticky", top: 24}}>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom: 18}}>
        <div style={{font:"700 16px var(--font-display)"}}>Filters</div>
        <a href="#" style={{font:"700 12px var(--font-body)", color:"var(--kmed-aqua)", textDecoration:"none"}}>Clear all</a>
      </div>
      <Section title="Specialty">
        <div style={{display:"flex", flexDirection:"column", gap:10}}>
          {cats.map(c => (
            <label key={c} style={{display:"flex", alignItems:"center", gap:10, font:"400 14px var(--font-body)", color:"var(--text-primary)", cursor:"pointer"}}>
              <span style={{width:18, height:18, borderRadius:5, border:"1.5px solid var(--border-input)", display:"inline-flex", alignItems:"center", justifyContent:"center", background: c===active.cat?"var(--kmed-aqua)":"#fff", borderColor: c===active.cat?"var(--kmed-aqua)":"var(--border-input)"}}>{c===active.cat && <Icon name="check" size={12} color="#fff"/>}</span>
              <span style={{fontWeight: c===active.cat ? 700 : 400, color: c===active.cat ? "var(--kmed-navy)":"var(--text-primary)"}}>{c}</span>
              <span style={{marginLeft:"auto", color:"var(--text-disabled)", fontSize:12}}>{Math.floor(Math.random()*40+8)}</span>
            </label>
          ))}
        </div>
      </Section>
      <Section title="Price range (USD)">
        <div style={{display:"flex", flexWrap:"wrap", gap:8}}>
          {prices.map(p => <span key={p} className={"tagpill" + (p.startsWith(active.price)?" is-on":"")} style={{padding:"6px 12px", fontSize:13}}>{p}</span>)}
        </div>
      </Section>
      <Section title="Hospital region">
        <div style={{display:"flex", flexWrap:"wrap", gap:8}}>
          {regions.map(r => <span key={r} className={"tagpill" + (r===active.region?" is-on":"")} style={{padding:"6px 12px", fontSize:13}}>{r}</span>)}
        </div>
      </Section>
      <Section title="Length of stay">
        <div style={{display:"flex", flexDirection:"column", gap:10}}>
          {stays.map(s => (
            <label key={s} style={{display:"flex", alignItems:"center", gap:10, font:"400 14px var(--font-body)", cursor:"pointer"}}>
              <span style={{width:18, height:18, borderRadius:"50%", border:"1.5px solid var(--border-input)"}}></span>{s}
            </label>
          ))}
        </div>
      </Section>
      <Section title="Language support">
        <div style={{display:"flex", flexWrap:"wrap", gap:8}}>
          {["EN","中文","日本語","繁體","Русский","العربية"].map(l=> <span key={l} className="tagpill" style={{padding:"6px 12px", fontSize:13}}>{l}</span>)}
        </div>
      </Section>
      <button className="btn btn--primary" style={{width:"100%", justifyContent:"center", padding:"14px"}}>Apply filters</button>
    </aside>
  );
};

const TreatListItems = [
  { cat:"Dermatology", title:"K-Beauty Skincare Program", desc:"Customized 3–7 day plan: facial, laser toning, pigmentation care, and post-care kit. Hospital-led, dermatologist supervised.", price:"USD 480 – 2,400", stay:"3–7 days", c1:"#FCE4EC", c2:"#F8BBD0", icon:"sparkle", h:"Lumina Dermatology Clinic" },
  { cat:"Dermatology", title:"Acne Scar Restoration", desc:"Multi-modal treatment combining fractional laser, subcision, and PRP. Tailored to skin type and tone.", price:"USD 900 – 3,600", stay:"5–10 days", c1:"#FFE0E6", c2:"#FFC1CC", icon:"sparkle", h:"Seoul Skin Institute" },
  { cat:"Dermatology", title:"Anti-Aging & Lifting", desc:"HIFU + Thermage protocols for travelers, with same-week refinement appointments and recovery guidance.", price:"USD 1,400 – 5,200", stay:"4–7 days", c1:"#FFF1F2", c2:"#F8BBD0", icon:"star", h:"Gangnam Aesthetic Center" },
  { cat:"Dermatology", title:"Pigmentation & Tone", desc:"Targeted melasma, sun-spot, and tone evening protocols. 1-on-1 dermatologist consult before any laser session.", price:"USD 600 – 2,200", stay:"3–6 days", c1:"#E1F5FE", c2:"#B3E5FC", icon:"sparkle", h:"Yeoksam Dermatology" },
  { cat:"Dermatology", title:"Hair Restoration Consult", desc:"Non-surgical PRP and exosome programs, plus hair transplant evaluation with a board-certified surgeon.", price:"USD 800 – 8,000", stay:"2–4 days", c1:"#C8E6C9", c2:"#A5D6A7", icon:"medkit", h:"K-Hair Medical Clinic" },
  { cat:"Dermatology", title:"Sensitive Skin Recovery", desc:"For patients with rosacea or post-procedure irritation. Conservative, dermatologist-led protocols only.", price:"USD 380 – 1,400", stay:"2–4 days", c1:"#F5FBFE", c2:"#B3E5FC", icon:"shield", h:"Bom Dermatology Group" },
];

const TreatmentsListPage = ({ bp = "desktop", drawerOpen = false }) => (
  <div className="kmed-page" data-bp={bp} data-screen-label={"02 Treatments " + bp}>
    <Header active="treat" bp={bp} drawerOpen={drawerOpen}/>
    <PageHero
      crumbs={["Home","Treatments"]}
      eyebrow="Browse care"
      title="Find a treatment that fits your case"
      sub="Explore care from 120+ accredited Korean hospitals across 34 specialties. Every program reviewed by a licensed Korean physician before estimates are issued."
    >
      <div style={{display:"flex", gap:12, marginTop:28, alignItems:"center"}}>
        <div style={{flex:1, maxWidth:540, display:"flex", alignItems:"center", gap:10, padding:"14px 18px", background:"#fff", border:"1px solid var(--border-input)", borderRadius:999, boxShadow:"var(--shadow-soft)"}}>
          <Icon name="search" size={18} color="rgba(0,0,0,0.42)"/>
          <input style={{flex:1, border:0, outline:"none", font:"400 16px var(--font-body)"}} placeholder="Search by treatment, condition, or hospital..." defaultValue="dermatology"/>
          <button className="btn btn--primary" style={{padding:"8px 18px", fontSize:14}}>Search</button>
        </div>
        <div style={{display:"flex", gap:8, marginLeft:8}}>
          <span className="tagpill is-on">All Specialties</span>
          <span className="tagpill">Most popular</span>
          <span className="tagpill">Shortest stay</span>
          <span className="tagpill">Lowest estimate</span>
        </div>
      </div>
    </PageHero>

    <section className="treat-layout" style={{padding:"32px 80px 80px", display:"grid", gridTemplateColumns:"300px 1fr", gap:36}}>
      <div className="treat-filters"><TreatFilter/></div>
      <div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom: 20}}>
          <div style={{font:"400 14px var(--font-body)", color:"var(--text-secondary)"}}><strong style={{color:"var(--text-primary)"}}>248 results</strong> · Showing Dermatology & K-Beauty in Seoul</div>
          <div style={{display:"flex", alignItems:"center", gap:10, font:"400 14px var(--font-body)", color:"var(--text-secondary)"}}>
            Sort by:
            <span style={{display:"inline-flex", alignItems:"center", gap:6, padding:"8px 14px", border:"1px solid var(--border-input)", borderRadius:999, font:"700 14px var(--font-body)", color:"var(--text-primary)", cursor:"pointer"}}>Relevance <Icon name="chevdown" size={14}/></span>
          </div>
        </div>
        <div className="card-grid-3" style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:24}}>
          {TreatListItems.map((it,i)=>(
            <div key={i} className="tcard">
              <div className="tcard__media" style={{background:`linear-gradient(135deg, ${it.c1}, ${it.c2})`, aspectRatio:"5/3"}}>
                <div className="tcard__pin">{it.cat}</div>
                <div className="tcard__pin" style={{left:"auto", right:14, background:"rgba(255,255,255,0.94)", color:"var(--kmed-green-dark)"}}>Stay {it.stay}</div>
                <div className="tile"><Icon name={it.icon} size={72} color="rgba(255,255,255,0.95)"/></div>
              </div>
              <div className="tcard__body">
                <div className="tcard__title">{it.title}</div>
                <div className="tcard__desc">{it.desc}</div>
                <div style={{display:"flex", alignItems:"center", gap:8, font:"400 12px var(--font-body)", color:"var(--text-secondary)", marginBottom:12}}>
                  <Icon name="pin" size={12} color="var(--kmed-pink)"/>{it.h}
                </div>
                <div className="tcard__foot">
                  <div className="tcard__price"><small>Estimate from</small>{it.price}</div>
                  <button className="btn btn--green-flat" style={{padding:"8px 16px"}}>Estimate request</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:6, marginTop:48}}>
          <span style={{padding:"10px 14px", borderRadius:10, font:"700 14px var(--font-body)", color:"var(--text-disabled)", cursor:"pointer"}}>‹</span>
          {[1,2,3,4,"…",18].map((p,i)=>(
            <span key={i} style={{padding:"10px 14px", borderRadius:10, font:"700 14px var(--font-body)", background: p===1 ? "var(--kmed-aqua)" : "transparent", color: p===1 ? "#fff" : "var(--text-primary)", cursor:"pointer"}}>{p}</span>
          ))}
          <span style={{padding:"10px 14px", borderRadius:10, font:"700 14px var(--font-body)", color:"var(--kmed-navy)", cursor:"pointer"}}>›</span>
        </div>
      </div>
    </section>
    <Footer bp={bp}/>
  </div>
);

// ====== Detail page ======

const DetailHero = () => (
  <section style={{position:"relative", padding:"56px 80px 64px", background:"linear-gradient(180deg, var(--kmed-pink-warm) 0%, #fff 100%)", overflow:"hidden"}}>
    <div style={{position:"absolute", right:-180, top:-100, width:520, height:520, borderRadius:"50%", border:"1px solid var(--kmed-aqua-soft)"}}></div>
    <div style={{position:"absolute", right:-80, top:60, width:340, height:340, borderRadius:"50%", background:"var(--gradient-soft)", opacity:.25}}></div>
    <div className="phero__crumbs" style={{position:"relative"}}>
      <a href="#" onClick={e=>e.preventDefault()}>Home</a><span>›</span>
      <a href="#" onClick={e=>e.preventDefault()}>Treatments</a><span>›</span>
      <span style={{color:"var(--text-primary)", fontWeight:700}}>Dermatology & K-Beauty</span>
    </div>
    <div style={{position:"relative", display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:48, alignItems:"center", marginTop:24}}>
      <div>
        <div style={{display:"flex", gap:8, marginBottom:18}}>
          <span className="trust-pill trust-pill--pink"><Icon name="sparkle" size={14} color="#E91E63"/>K-Beauty Specialty</span>
          <span className="trust-pill"><Icon name="user" size={14} color="#00579B"/>32 partner clinics</span>
          <span className="trust-pill trust-pill--green"><Icon name="cal" size={14} color="#357A38"/>3–7 day program</span>
        </div>
        <h1 style={{font:"900 56px/1.1 var(--font-display)", margin:"0 0 16px", letterSpacing:"-0.01em"}}>Dermatology & K-Beauty</h1>
        <p style={{font:"400 19px/1.6 var(--font-body)", color:"var(--text-secondary)", margin:"0 0 28px", maxWidth:620}}>
          Travel-friendly dermatology programs combining medical-grade treatments with the routines Korean clinics are known for — supervised by board-certified specialists, tailored to your skin type, schedule, and recovery window.
        </p>
        <div style={{display:"flex", alignItems:"center", gap:16}}>
          <button className="btn btn--primary btn--primary-lg">Estimate request <Icon name="arrow" size={16} color="#fff"/></button>
          <button className="btn btn--ghost"><Icon name="chat" size={14}/>Chat with coordinator</button>
        </div>
        <div style={{display:"flex", gap:24, marginTop:32, paddingTop:24, borderTop:"1px solid var(--kmed-line)"}}>
          <div><div style={{font:"700 11px var(--font-body)", color:"var(--text-disabled)", letterSpacing:"0.12em", textTransform:"uppercase"}}>Estimate range</div><div style={{font:"700 18px var(--font-display)", color:"var(--kmed-green-dark)", marginTop:4}}>USD 480 – 2,400</div></div>
          <div><div style={{font:"700 11px var(--font-body)", color:"var(--text-disabled)", letterSpacing:"0.12em", textTransform:"uppercase"}}>Length of stay</div><div style={{font:"700 18px var(--font-display)", marginTop:4}}>3 – 7 days</div></div>
          <div><div style={{font:"700 11px var(--font-body)", color:"var(--text-disabled)", letterSpacing:"0.12em", textTransform:"uppercase"}}>Anesthesia</div><div style={{font:"700 18px var(--font-display)", marginTop:4}}>Topical only</div></div>
          <div><div style={{font:"700 11px var(--font-body)", color:"var(--text-disabled)", letterSpacing:"0.12em", textTransform:"uppercase"}}>Recovery</div><div style={{font:"700 18px var(--font-display)", marginTop:4}}>0 – 3 days</div></div>
        </div>
      </div>
      {/* Right hero card */}
      <div className="surface" style={{padding:"24px", borderRadius:24, position:"relative"}}>
        <div style={{borderRadius:18, aspectRatio:"4/3", background:"linear-gradient(135deg, #FFE0E6, #F8BBD0)", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden"}}>
          <div style={{position:"absolute", inset:0, background:"radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), transparent 60%)"}}></div>
          <Icon name="sparkle" size={120} color="rgba(255,255,255,0.85)"/>
          <div style={{position:"absolute", left:18, top:18, padding:"6px 12px", borderRadius:999, background:"rgba(255,255,255,0.92)", color:"var(--kmed-pink)", font:"700 12px var(--font-body)", letterSpacing:"0.08em", textTransform:"uppercase"}}>K-Beauty</div>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginTop:20}}>
          <div style={{padding:"14px 16px", borderRadius:12, background:"var(--kmed-bg-soft)"}}>
            <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>Patient rating</div>
            <div style={{display:"flex", alignItems:"center", gap:6, marginTop:4}}>
              <Icon name="star" size={16} color="#F5B400"/>
              <span style={{font:"700 16px var(--font-body)"}}>4.8</span>
              <span style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>(1,247 reviews)</span>
            </div>
          </div>
          <div style={{padding:"14px 16px", borderRadius:12, background:"var(--kmed-bg-soft)"}}>
            <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>Languages</div>
            <div style={{font:"700 14px var(--font-body)", marginTop:4}}>EN · 中文 · 日本語 · 繁體</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ComplianceNote = () => (
  <section style={{padding: "0 80px"}}>
    <div style={{padding:"16px 24px", borderRadius:12, background:"#FFFAEB", border:"1px solid #FDE68A", display:"flex", gap:14, alignItems:"flex-start"}}>
      <div style={{width:32, height:32, borderRadius:8, background:"#FCD34D", display:"flex", alignItems:"center", justifyContent:"center", flex:"none", color:"#7C5800", font:"900 14px var(--font-body)"}}>!</div>
      <div>
        <div style={{font:"700 14px var(--font-body)", color:"#7C5800", marginBottom:2}}>Medical advertising notice</div>
        <div style={{font:"400 13px/1.55 var(--font-body)", color:"#7C5800"}}>
          Treatment outcomes vary individually. Estimates are indicative only — final pricing is issued by the partner hospital after a doctor reviews your records. Per Korean Medical Service Act, before/after photographs are not displayed.
        </div>
      </div>
    </div>
  </section>
);

const DetailTabs = () => {
  const [tab, setTab] = React.useState(0);
  const tabs = ["Overview", "Procedures included", "What to expect", "FAQs"];
  return (
    <section style={{padding:"40px 80px 16px"}}>
      <div style={{display:"flex", gap:32, borderBottom:"1px solid var(--kmed-line)"}}>
        {tabs.map((t,i)=>(
          <div key={t} onClick={()=>setTab(i)} style={{padding:"14px 0", borderBottom: i===tab? "3px solid var(--kmed-aqua)":"3px solid transparent", marginBottom:-1, font:"700 16px var(--font-body)", color: i===tab?"var(--kmed-navy)":"var(--text-secondary)", cursor:"pointer"}}>{t}</div>
        ))}
      </div>
    </section>
  );
};

const DetailBody = () => {
  const procedures = [
    { name:"Initial dermatology consult", dur:"45 min", price:"USD 80–180", body:"Skin scan, history review, treatment plan." },
    { name:"Medical-grade facial protocol", dur:"60 min", price:"USD 120–340", body:"Cleansing, peeling, hydration mask, LED." },
    { name:"Laser toning & pigmentation", dur:"30 min", price:"USD 220–680 / session", body:"Q-switched and pico-laser for tone evening." },
    { name:"HIFU / Ulthera lifting", dur:"45 min", price:"USD 480–1,800", body:"Targeted lifting for jawline & under-eye." },
    { name:"Post-care kit & follow-up", dur:"included", price:"included", body:"Take-home protocol + 30-day teleconsult." },
  ];
  const faqs = [
    { q:"Will my results match what I see online?", a:"We avoid showing before/after marketing imagery. Your dermatologist will discuss realistic expectations after reviewing your skin in person." },
    { q:"How is the estimate calculated?", a:"After you submit photos and history, the hospital's medical team prepares a personalized estimate. There is no automated calculator — every quote is doctor-reviewed." },
    { q:"What if I have sensitive skin or rosacea?", a:"Conservative-only protocols are available; the consultation will rule out treatments that aren't appropriate for your skin." },
    { q:"Can the program fit a 4-day trip?", a:"Yes. We design plans around 3, 5, and 7-day windows and pace treatments accordingly." },
  ];
  return (
    <section className="detail-grid" style={{padding:"32px 80px 80px", display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:48, alignItems:"flex-start"}}>
      <div style={{display:"flex", flexDirection:"column", gap:48}}>
        <div>
          <h2 style={{font:"900 32px var(--font-display)", margin:"0 0 14px", letterSpacing:"-0.01em"}}>Overview</h2>
          <p style={{font:"400 17px/1.7 var(--font-body)", color:"var(--text-primary)", margin:"0 0 14px"}}>Korean dermatology pairs medical training with research-led product development. K-Med Global's dermatology program brings that same standard to international patients — every plan begins with a board-certified dermatologist consultation, not a sales pitch.</p>
          <p style={{font:"400 17px/1.7 var(--font-body)", color:"var(--text-secondary)", margin:0}}>You'll receive a written care plan, an itemized estimate, and a recovery schedule that fits your travel window. Treatments are sequenced so you can fly home comfortably.</p>
        </div>

        <div>
          <h2 style={{font:"900 32px var(--font-display)", margin:"0 0 20px"}}>What's included</h2>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14}}>
            {[
              {icon:"chat", title:"Pre-arrival chat", desc:"Coordinator review in your language, before you book a flight."},
              {icon:"file", title:"Doctor-reviewed estimate", desc:"Itemized, clinic-issued. No automated calculators."},
              {icon:"plane", title:"Travel concierge", desc:"Visa letter, airport pickup, lodging guidance."},
              {icon:"medkit", title:"On-site interpretation", desc:"Live medical interpretation at every appointment."},
              {icon:"shield", title:"Aftercare follow-up", desc:"30-day teleconsult and home-care kit included."},
              {icon:"award", title:"Verified clinics only", desc:"MoHW-registered partners with malpractice coverage."},
            ].map((b,i)=>(
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
          <h2 style={{font:"900 32px var(--font-display)", margin:"0 0 20px"}}>Procedures included</h2>
          <div className="surface--ring" style={{borderRadius:16, overflow:"hidden"}}>
            {procedures.map((p,i)=>(
              <div key={i} style={{display:"grid", gridTemplateColumns:"1.3fr 1fr 1fr 80px", padding:"18px 22px", borderBottom: i<procedures.length-1?"1px solid var(--kmed-line)":"none", alignItems:"center"}}>
                <div>
                  <div style={{font:"700 16px var(--font-body)"}}>{p.name}</div>
                  <div style={{font:"400 13px var(--font-body)", color:"var(--text-secondary)", marginTop:2}}>{p.body}</div>
                </div>
                <div style={{font:"400 14px var(--font-body)", color:"var(--text-secondary)"}}><Icon name="cal" size={14} color="rgba(0,0,0,0.4)"/> <span style={{verticalAlign:"middle", marginLeft:4}}>{p.dur}</span></div>
                <div style={{font:"700 14px var(--font-body)", color:"var(--kmed-green-dark)"}}>{p.price}</div>
                <div style={{textAlign:"right"}}><a href="#" className="btn btn--text" style={{fontSize:13}}>Info →</a></div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{font:"900 32px var(--font-display)", margin:"0 0 20px"}}>Frequently asked</h2>
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
          <div style={{font:"700 11px var(--font-body)", color:"var(--text-disabled)", letterSpacing:"0.14em", textTransform:"uppercase"}}>Request an estimate</div>
          <div style={{font:"900 24px var(--font-display)", margin:"6px 0 16px"}}>Get a doctor-reviewed quote</div>
          <p style={{font:"400 14px/1.55 var(--font-body)", color:"var(--text-secondary)", margin:"0 0 18px"}}>Submit your case and 2–3 partner clinics will respond with itemized estimates within 24 hours.</p>
          <div style={{display:"flex", flexDirection:"column", gap:14, marginBottom:20}}>
            {["Skin photos (selfie acceptable)","Areas of concern","Travel window","Budget range (optional)"].map(x=>(
              <div key={x} style={{display:"flex", alignItems:"center", gap:10, font:"400 13px var(--font-body)"}}><Icon name="check" size={14} color="#357A38"/>{x}</div>
            ))}
          </div>
          <button className="btn btn--primary" style={{width:"100%", justifyContent:"center", padding:"14px"}}>Estimate request <Icon name="arrow" size={14} color="#fff"/></button>
          <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)", textAlign:"center", marginTop:12}}>Free · No payment to start</div>
        </div>

        <div className="surface--ring" style={{padding:"24px"}}>
          <div style={{font:"700 14px var(--font-display)", color:"var(--kmed-navy)", marginBottom: 14, letterSpacing:"0.08em", textTransform:"uppercase", fontSize:12}}>Recommended specialists</div>
          <div style={{display:"flex", flexDirection:"column", gap:12}}>
            {[
              {n:"Dr. Ji-won Park", role:"Dermatologist · 14 yrs", langs:"EN · 한국어"},
              {n:"Dr. Hyun Choi", role:"Dermatologist · 11 yrs", langs:"EN · 中文 · 한국어"},
              {n:"Dr. Min-seo Kang", role:"Aesthetic Dermatology · 9 yrs", langs:"EN · 日本語 · 한국어"},
            ].map((d,i)=>(
              <div key={i} style={{display:"flex", gap:12, alignItems:"center", padding:"10px 0", borderBottom: i<2?"1px solid var(--kmed-line)":"none"}}>
                <div style={{width:48, height:48, borderRadius:"50%", background:"linear-gradient(135deg, var(--kmed-pink-warm), var(--kmed-aqua-soft))", display:"flex", alignItems:"center", justifyContent:"center", color:"var(--kmed-navy)", font:"900 16px var(--font-display)", flex:"none"}}>{d.n.split(" ")[1].charAt(0)}</div>
                <div style={{flex:1}}>
                  <div style={{font:"700 14px var(--font-body)"}}>{d.n}</div>
                  <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>{d.role}</div>
                  <div style={{font:"400 11px var(--font-body)", color:"var(--kmed-aqua)"}}>{d.langs}</div>
                </div>
                <a href="#" className="btn btn--text" style={{fontSize:12}}>Profile</a>
              </div>
            ))}
          </div>
        </div>

        <div className="surface--ring" style={{padding:"24px"}}>
          <div style={{font:"700 12px var(--font-body)", color:"var(--kmed-navy)", marginBottom:14, letterSpacing:"0.08em", textTransform:"uppercase"}}>Top partner clinics</div>
          {[
            {i:"LD", n:"Lumina Dermatology Clinic", l:"Cheongdam-dong, Gangnam"},
            {i:"SS", n:"Seoul Skin Institute", l:"Apgujeong, Gangnam"},
            {i:"BD", n:"Bom Dermatology Group", l:"Yeoksam, Gangnam"},
          ].map((c,i)=>(
            <div key={i} style={{display:"flex", gap:12, alignItems:"center", padding:"10px 0", borderBottom: i<2?"1px solid var(--kmed-line)":"none"}}>
              <div style={{width:42, height:42, borderRadius:10, background:"linear-gradient(135deg, var(--kmed-navy), var(--kmed-aqua))", color:"#fff", font:"900 14px var(--font-display)", display:"flex", alignItems:"center", justifyContent:"center", flex:"none"}}>{c.i}</div>
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

const TreatmentDetailPage = ({ bp = "desktop", drawerOpen = false }) => (
  <div className="kmed-page" data-bp={bp} data-screen-label={"03 Treatment Detail " + bp}>
    <Header active="treat" bp={bp} drawerOpen={drawerOpen}/>
    <DetailHero/>
    <ComplianceNote/>
    <DetailTabs/>
    <DetailBody/>
    <Footer bp={bp}/>
  </div>
);

Object.assign(window, { TreatmentsListPage, TreatmentDetailPage });
