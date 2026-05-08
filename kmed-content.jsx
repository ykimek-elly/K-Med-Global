// kmed-content.jsx — Why Korea + Stories pages

const WhyKoreaPage = ({ bp = "desktop", drawerOpen = false }) => {
  const reasons = [
    { icon:"award", t:"Tertiary-level training", d:"Korea's top hospitals are JCI-accredited research institutions, with surgeons trained on robotic and minimally-invasive systems used at MD Anderson, Mayo, and Cleveland Clinic." },
    { icon:"shield", t:"Strong patient safety regulation", d:"All partner hospitals carry malpractice coverage and operate under the Medical Service Act. International patients are protected by the same standards as domestic patients." },
    { icon:"sparkle", t:"Research-led aesthetics", d:"Korean dermatology and aesthetic medicine pair cosmetic technique with rigorous medical training — protocols are tailored, not packaged." },
    { icon:"money", t:"Transparent pricing", d:"Estimates are doctor-issued and itemized. No surprise charges, no automated calculators that mislead — what you receive is what the hospital bills." },
    { icon:"plane", t:"Fast access, short waits", d:"Average time from inquiry to first consult is 7 days. Most non-emergency procedures are scheduled within 2 weeks of arrival." },
    { icon:"chat", t:"Built for international patients", d:"Dedicated international wings at most partner hospitals: live medical interpretation, multilingual coordinators, and cultural-fit care." },
  ];
  return (
    <div className="kmed-page" data-bp={bp} data-screen-label={"05 Why Korea " + bp}>
      <Header active="korea" bp={bp} drawerOpen={drawerOpen}/>
      {/* Hero */}
      <section style={{position:"relative", padding:"60px 80px 80px", overflow:"hidden", background:"linear-gradient(180deg, #F5FBFE 0%, #fff 100%)"}}>
        <div style={{position:"absolute", right:-180, top:-100, width:540, height:540, borderRadius:"50%", border:"1px solid var(--kmed-aqua-soft)"}}></div>
        <div style={{position:"absolute", right:-60, top:60, width:340, height:340, borderRadius:"50%", background:"var(--gradient-soft)", opacity:.3}}></div>
        <div style={{position:"relative", display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:60, alignItems:"center"}}>
          <div>
            <div className="phero__crumbs" style={{margin:"0 0 18px"}}>
              <a href="#" onClick={e=>e.preventDefault()}>Home</a><span>›</span>
              <span style={{color:"var(--text-primary)", fontWeight:700}}>Why Korea</span>
            </div>
            <div className="eyebrow" style={{marginBottom:10}}>Why Korea for medical care</div>
            <h1 style={{font:"900 64px/1.05 var(--font-display)", letterSpacing:"-0.02em", margin:"0 0 18px"}}>
              World-class care, <br/>at a fraction of the wait.
            </h1>
            <p style={{font:"400 19px/1.6 var(--font-body)", color:"var(--text-secondary)", margin:"0 0 28px", maxWidth:560}}>Korea sits among the top destinations for outbound medical travel — combining tertiary-level hospital infrastructure, fast scheduling, and strong patient-safety oversight under the Ministry of Health & Welfare.</p>
            <div style={{display:"flex", gap:16, alignItems:"center"}}>
              <button className="btn btn--primary btn--primary-lg">Get matched <Icon name="arrow" size={16} color="#fff"/></button>
              <a href="#" className="btn btn--text" style={{fontSize:16}}>See partner hospitals →</a>
            </div>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14}}>
            {[
              {n:"#3", l:"Asia for outbound medical destinations", c:"var(--kmed-aqua)"},
              {n:"600k+", l:"International patients hosted in 2024", c:"var(--kmed-green-dark)"},
              {n:"34", l:"Specialties available through K-Med", c:"var(--kmed-pink)"},
              {n:"24h", l:"Average response from inquiry to coordinator", c:"var(--kmed-navy)"},
            ].map((s,i)=>(
              <div key={i} className="surface--sm" style={{padding:"24px 22px"}}>
                <div style={{font:"900 36px var(--font-display)", letterSpacing:"-0.02em", color:s.c}}>{s.n}</div>
                <div style={{font:"400 13px/1.5 var(--font-body)", color:"var(--text-secondary)", marginTop:6}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section style={{padding:"32px 80px 80px"}}>
        <div style={{textAlign:"center", marginBottom:48}}>
          <div className="eyebrow">What sets Korea apart</div>
          <h2 className="kh-title kh-title--display" style={{margin:"10px auto 14px", maxWidth:720}}>Six reasons international patients choose Korea</h2>
          <p className="kh-lead" style={{margin:"0 auto", textAlign:"center"}}>Reasons we hear from patients themselves — not marketing claims.</p>
        </div>
        <div className="wk-pillars" style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:24}}>
          {reasons.map((r,i)=>(
            <div key={i} className="surface--sm" style={{padding:"32px 28px"}}>
              <div style={{width:56, height:56, borderRadius:16, background:"var(--kmed-aqua-soft)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:18}}><Icon name={r.icon} size={26} color="#00579B"/></div>
              <div style={{font:"700 22px/1.3 var(--font-display)", marginBottom:10}}>{r.t}</div>
              <div style={{font:"400 15px/1.6 var(--font-body)", color:"var(--text-secondary)"}}>{r.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison strip */}
      <section style={{padding:"40px 80px 80px"}}>
        <div className="surface" style={{padding:"40px 48px"}}>
          <div className="eyebrow">A practical comparison</div>
          <h3 style={{font:"900 32px var(--font-display)", margin:"10px 0 24px", letterSpacing:"-0.01em"}}>Common procedures, indicative ranges*</h3>
          <table style={{width:"100%", borderCollapse:"collapse"}}>
            <thead><tr style={{borderBottom:"1px solid var(--kmed-line)"}}>
              {["Procedure","USA estimate","UK estimate","Korea via K-Med","Wait time"].map(h=> <th key={h} style={{padding:"14px 16px", textAlign:"left", font:"700 11px var(--font-ui)", letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--text-disabled)"}}>{h}</th>)}
            </tr></thead>
            <tbody>
              {[
                ["Premium full-body screening","$4,000 – $8,000","£3,000 – £5,500","$1,800 – $4,200","< 1 week"],
                ["Spine surgery (1 level)","$60k – $110k","£30k – £55k","$8,500 – $22,000","1–2 weeks"],
                ["Knee replacement","$35k – $60k","£18k – £30k","$11,000 – $19,000","1–2 weeks"],
                ["LASIK (both eyes)","$4,000 – $5,000","£3,500","$1,400 – $2,200","< 1 week"],
                ["Dental implant (per tooth)","$3,500 – $6,000","£2,000 – £3,500","$1,200 – $2,800","< 1 week"],
              ].map((row,i)=>(
                <tr key={i} style={{borderBottom:"1px solid var(--kmed-line)"}}>
                  {row.map((c,j)=> <td key={j} style={{padding:"18px 16px", font: j===0 ? "700 15px var(--font-body)" : "400 15px var(--font-body)", color: j===3 ? "var(--kmed-green-dark)" : (j===4 ? "var(--kmed-aqua)" : "var(--text-primary)"), fontWeight: (j===3||j===0)?700:400}}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{font:"400 12px/1.55 var(--font-body)", color:"var(--text-secondary)", marginTop:18}}>*Ranges are indicative, sourced from public hospital pricing data. Final estimates are issued by partner hospitals after a doctor reviews your case. Outcomes vary individually.</div>
        </div>
      </section>

      {/* Accreditations */}
      <section style={{padding:"0 80px 80px"}}>
        <div style={{textAlign:"center", marginBottom:36}}>
          <div className="eyebrow">Accreditations & oversight</div>
          <h3 className="kh-title" style={{margin:"10px auto 0", maxWidth:720}}>Care backed by international standards</h3>
        </div>
        <div className="wk-stats" style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:20}}>
          {[
            {l:"JCI", t:"Joint Commission International", d:"42 of our partners are JCI-accredited."},
            {l:"MoHW", t:"Ministry of Health & Welfare", d:"All partners are licensed under Korean medical law."},
            {l:"ISO", t:"ISO 9001 / 27001", d:"Quality and information-security certified."},
            {l:"KAHF", t:"Korea Health Industry Dev. Inst.", d:"K-Med is a registered international patient agency."},
          ].map((a,i)=>(
            <div key={i} className="surface--ring" style={{padding:"24px", textAlign:"center"}}>
              <div style={{width:80, height:80, borderRadius:"50%", margin:"0 auto 14px", background:"linear-gradient(135deg, var(--kmed-aqua), var(--kmed-navy))", color:"#fff", font:"900 18px var(--font-display)", display:"flex", alignItems:"center", justifyContent:"center", letterSpacing:"0.02em"}}>{a.l}</div>
              <div style={{font:"700 15px var(--font-body)", marginBottom:6}}>{a.t}</div>
              <div style={{font:"400 13px/1.5 var(--font-body)", color:"var(--text-secondary)"}}>{a.d}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer bp={bp}/>
    </div>
  );
};

const StoriesPage = ({ bp = "desktop", drawerOpen = false }) => {
  const stories = [
    { name:"Sakura T.", country:"Tokyo, Japan", flag:"JP", treat:"Spine Surgery", quote:"After two years of consultations at home, I came to Seoul for a second opinion. The coordinator translated every step — even the operating-room intake. I'm walking pain-free six months on.", days:"14-day stay", year:"2025" },
    { name:"David L.", country:"San Francisco, USA", flag:"US", treat:"Health Screening", quote:"I came for a 2-day full-body check-up and left with answers I'd waited five years for. The cardiology team flagged something my home doctors had missed. Worth every dollar.", days:"3-day stay", year:"2025" },
    { name:"Wei C.", country:"Taipei, Taiwan", flag:"TW", treat:"Dermatology", quote:"My dermatology plan was tailored to my skin tone and my flight schedule. Felt genuinely premium without feeling pushy. The 30-day teleconsult after I went home was the part I valued most.", days:"5-day stay", year:"2026" },
    { name:"Mei L.", country:"Shanghai, China", flag:"CN", treat:"Oncology Second Opinion", quote:"I'd been told I had three options. The oncology board at the partner hospital reviewed my scans for two days and proposed a fourth one. K-Med arranged everything — including the records translation.", days:"6-day stay", year:"2025" },
    { name:"Anna R.", country:"Moscow, Russia", flag:"RU", treat:"Knee Replacement", quote:"I was nervous about traveling for surgery, but the concierge picked me up at the airport, the room was set up for someone with mobility issues, and the rehab plan started before I left the hospital.", days:"16-day stay", year:"2024" },
    { name:"James W.", country:"London, UK", flag:"UK", treat:"LASIK", quote:"Booked, flown, treated, sightseeing — all within a week. The follow-up Zoom call was thorough and the doctor knew my case immediately. I'd recommend the route to anyone in their thirties.", days:"7-day stay", year:"2026" },
  ];
  return (
    <div className="kmed-page" data-bp={bp} data-screen-label={"06 Stories " + bp}>
      <Header active="stories" bp={bp} drawerOpen={drawerOpen}/>
      <PageHero
        crumbs={["Home","Stories"]}
        eyebrow="Patient stories"
        title="In their own words"
        sub="Real reflections from patients who traveled for care. Names are real where shared with consent; some have been shortened. We do not display before/after imagery."
      />
      <section style={{padding:"32px 80px 64px"}}>
        <div style={{display:"flex", gap:10, flexWrap:"wrap", marginBottom:32}}>
          {["All stories","Dermatology","Oncology","Orthopedics","Health Screening","Plastic Surgery","Cardiology","Dental"].map((t,i)=> <span key={t} className={"tagpill" + (i===0?" is-on":"")}>{t}</span>)}
        </div>
        <div className="card-grid-3 stories-grid" style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:24}}>
          {stories.map((s,i)=>(
            <div key={i} className="story" style={{minHeight:380}}>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom: 6}}>
                <span className="story__tag">{s.treat}</span>
                <span style={{font:"400 12px var(--font-body)", color:"var(--text-disabled)"}}>{s.year}</span>
              </div>
              <div className="story__quote">{s.quote}</div>
              <div className="story__patient">
                <div className="story__avatar">{s.name.charAt(0)}</div>
                <div style={{flex:1}}>
                  <div className="story__name">{s.name} · <span style={{color:"var(--text-secondary)", fontWeight:400}}>{s.country}</span></div>
                  <div className="story__meta">{s.days} · in care of K-Med Global</div>
                </div>
                <span style={{padding:"3px 8px", borderRadius:5, background:"var(--kmed-bg-soft)", font:"700 10px var(--font-body)", color:"var(--text-secondary)", letterSpacing:"0.06em"}}>{s.flag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:"0 80px 80px"}}>
        <div className="surface" style={{padding:"40px 48px", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:32, alignItems:"center"}}>
          <div>
            <div className="eyebrow">Verified by independent reviews</div>
            <div style={{font:"900 28px var(--font-display)", margin:"8px 0 6px", letterSpacing:"-0.01em"}}>4.8 / 5 average</div>
            <div style={{font:"400 14px var(--font-body)", color:"var(--text-secondary)"}}>Across 1,247 patient reviews · 28 countries</div>
          </div>
          <div style={{display:"flex", flexDirection:"column", gap:8}}>
            {[
              ["Coordinator responsiveness", 96],
              ["Hospital quality", 95],
              ["Travel & concierge", 94],
              ["After-care follow-up", 92],
            ].map(([l,p])=>(
              <div key={l}>
                <div style={{display:"flex", justifyContent:"space-between", font:"400 13px var(--font-body)", marginBottom:4}}><span>{l}</span><span style={{color:"var(--kmed-green-dark)", fontWeight:700}}>{p}%</span></div>
                <div style={{height:6, borderRadius:3, background:"var(--kmed-bg-soft)", overflow:"hidden"}}><div style={{height:"100%", width:`${p}%`, background:"linear-gradient(90deg, var(--kmed-aqua), var(--kmed-green))"}}></div></div>
              </div>
            ))}
          </div>
          <div style={{textAlign:"right"}}>
            <button className="btn btn--primary btn--primary-lg">Share your story <Icon name="arrow" size={16} color="#fff"/></button>
            <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)", marginTop:10}}>Past patient? We'd love to hear how it went.</div>
          </div>
        </div>
      </section>

      <Footer bp={bp}/>
    </div>
  );
};

Object.assign(window, { WhyKoreaPage, StoriesPage });
