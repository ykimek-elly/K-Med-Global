// kmed-forms.jsx — Get Matched (5-step form) + Contact

const STEPS = ["Treatment", "Your case", "Travel", "Contact", "Review"];

const StepBar = ({ current = 1 }) => (
  <div className="steps">
    {STEPS.map((s,i)=>(
      <React.Fragment key={s}>
        <div className={"step" + (i<current?" is-done":"") + (i===current?" is-active":"")}>
          <div className="step__dot">{i<current ? <Icon name="check" size={14} color="#fff"/> : i+1}</div>
          <span className="step__lbl">{s}</span>
        </div>
        {i<STEPS.length-1 && <div className="step__bar"></div>}
      </React.Fragment>
    ))}
  </div>
);

const GetMatchedPage = ({ bp = "desktop", drawerOpen = false }) => {
  const cats = ["Dermatology & K-Beauty","Plastic Surgery","Health Screening","Orthopedics & Spine","Oncology","Cardiology","Fertility / IVF","Dental","Ophthalmology","I'm not sure yet"];
  const [active, setActive] = React.useState(["Dermatology & K-Beauty"]);
  const toggle = (c) => setActive(a => a.includes(c) ? a.filter(x=>x!==c) : [...a, c]);
  return (
    <div className="kmed-page gm-page" data-bp={bp} data-screen-label={"04 Get Matched " + bp}>
      <Header active="match" bp={bp} drawerOpen={drawerOpen}/>
      <PageHero
        crumbs={["Home","Get Matched"]}
        eyebrow="5-step consultation"
        title="Tell us about your case"
        sub="A licensed K-Med coordinator will review your responses and match you with 2–3 accredited Korean hospitals within 24 hours. Free and confidential."
      />
      <section style={{padding:"32px 80px 80px", display:"grid", gridTemplateColumns:"1fr 360px", gap:40, alignItems:"flex-start"}}>
        <div className="surface" style={{padding:"40px 48px"}}>
          <StepBar current={1}/>
          <div style={{margin:"40px 0 8px", font:"700 13px var(--font-body)", letterSpacing:"0.16em", color:"var(--kmed-aqua)", textTransform:"uppercase"}}>Step 02 of 05 · Your case</div>
          <h2 style={{font:"900 36px var(--font-display)", margin:"0 0 12px", letterSpacing:"-0.01em"}}>What kind of care are you looking for?</h2>
          <p style={{font:"400 16px/1.55 var(--font-body)", color:"var(--text-secondary)", margin:"0 0 32px"}}>Pick all that apply. You can refine later — this just helps us route you to the right specialist team.</p>

          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:36}}>
            {cats.map(c => {
              const on = active.includes(c);
              return (
                <label key={c} className={"checkpill" + (on?" is-on":"")} onClick={()=>toggle(c)}>
                  <span className="check">{on && <Icon name="check" size={14} color="#fff"/>}</span>
                  {c}
                </label>
              );
            })}
          </div>

          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, marginBottom:32}}>
            <div className="field field--boxed">
              <label className="field__label">Briefly describe your condition or goals</label>
              <textarea rows={4} placeholder="e.g. Pigmentation around cheeks, sensitive skin, considering laser toning during a 5-day Seoul trip in late May." defaultValue="Pigmentation around cheeks, sensitive skin, considering laser toning during a 5-day Seoul trip in late May."></textarea>
              <span className="field__hint">Optional — but helps us prepare a better match.</span>
            </div>
            <div className="col" style={{gap:24}}>
              <div className="field field--boxed">
                <label className="field__label">Have you been treated for this before?</label>
                <select defaultValue="Yes — abroad">
                  <option>No</option>
                  <option>Yes — at home</option>
                  <option>Yes — abroad</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
              <div className="field field--boxed">
                <label className="field__label">Any medical records to share? <span style={{color:"var(--text-secondary)", fontWeight:400}}>(optional)</span></label>
                <div style={{display:"flex", alignItems:"center", gap:12, padding:"14px 16px", border:"1.5px dashed var(--border-input)", borderRadius:12, color:"var(--text-secondary)", font:"400 14px var(--font-body)"}}>
                  <Icon name="file" size={18} color="rgba(0,0,0,0.4)"/>
                  Drag a file or <span style={{color:"var(--kmed-aqua)", fontWeight:700, cursor:"pointer"}}>browse</span> · PDF, JPG up to 25MB
                </div>
              </div>
            </div>
          </div>

          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:24, marginBottom:36}}>
            <div className="field field--boxed">
              <label className="field__label">Approx. budget (USD)</label>
              <select defaultValue="$2,000 – $10,000"><option>Under $2,000</option><option>$2,000 – $10,000</option><option>$10,000 – $30,000</option><option>$30,000+</option><option>Not sure yet</option></select>
            </div>
            <div className="field field--boxed">
              <label className="field__label">Preferred language</label>
              <select defaultValue="English"><option>English</option><option>中文 (简体)</option><option>繁體中文</option><option>日本語</option></select>
            </div>
            <div className="field field--boxed">
              <label className="field__label">Travel companion?</label>
              <select defaultValue="Yes — 1 companion"><option>No</option><option>Yes — 1 companion</option><option>Yes — 2+ companions</option></select>
            </div>
          </div>

          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", paddingTop: 28, borderTop:"1px solid var(--kmed-line)"}}>
            <button className="btn btn--ghost"><span style={{display:"inline-block", transform:"scaleX(-1)"}}><Icon name="arrow" size={14} color="#00579B"/></span> <span>Back</span></button>
            <div style={{display:"flex", alignItems:"center", gap:18}}>
              <a href="#" className="btn btn--text" style={{fontSize:14}}>Save & continue later</a>
              <button className="btn btn--primary">Continue to travel <Icon name="arrow" size={14} color="#fff"/></button>
            </div>
          </div>
        </div>

        {/* Right rail: trust + summary */}
        <div style={{display:"flex", flexDirection:"column", gap:20}}>
          <div className="surface--ring" style={{padding:"22px 24px"}}>
            <div style={{font:"700 12px var(--font-body)", color:"var(--kmed-navy)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:14}}>Your inquiry so far</div>
            <div style={{display:"flex", flexDirection:"column", gap:14}}>
              {[
                {l:"Treatment focus", v: active.length ? active.join(", ") : "—"},
                {l:"Records uploaded", v:"None yet"},
                {l:"Preferred language", v:"English"},
                {l:"Companion", v:"1 companion"},
              ].map(r=>(
                <div key={r.l} style={{display:"flex", justifyContent:"space-between", gap:14, font:"400 13px var(--font-body)"}}>
                  <span style={{color:"var(--text-secondary)"}}>{r.l}</span>
                  <span style={{fontWeight:700, color:"var(--text-primary)", textAlign:"right", maxWidth:200}}>{r.v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="surface--ring" style={{padding:"22px 24px"}}>
            <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:14}}>
              <Icon name="shield" size={20} color="#357A38"/>
              <div style={{font:"700 14px var(--font-body)"}}>Your data is protected</div>
            </div>
            <div style={{font:"400 13px/1.6 var(--font-body)", color:"var(--text-secondary)", marginBottom:12}}>K-Med complies with PIPA (Korea) and GDPR. Records are encrypted and shared only with hospitals you approve.</div>
            <a href="#" className="btn btn--text" style={{fontSize:13}}>Privacy policy →</a>
          </div>
          <div className="surface--ring" style={{padding:"22px 24px", background:"linear-gradient(180deg, var(--kmed-pink-warm), #fff)"}}>
            <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:10}}>
              <div style={{width:36, height:36, borderRadius:"50%", background:"linear-gradient(135deg, var(--kmed-pink-warm), var(--kmed-aqua-soft))", display:"flex", alignItems:"center", justifyContent:"center", font:"900 14px var(--font-display)", color:"var(--kmed-navy)"}}>JK</div>
              <div>
                <div style={{font:"700 13px var(--font-body)"}}>Need help? Chat now</div>
                <div style={{font:"400 11px var(--font-body)", color:"var(--text-secondary)"}}>Coordinator Joon-Ki · usually replies in 4 min</div>
              </div>
            </div>
            <button className="btn btn--ghost" style={{width:"100%", justifyContent:"center"}}><Icon name="chat" size={14} color="#00579B"/>Start chat</button>
          </div>
        </div>
      </section>
      <Footer bp={bp}/>
    </div>
  );
};

const ContactPage = ({ bp = "desktop", drawerOpen = false }) => (
  <div className="kmed-page contact-page" data-bp={bp} data-screen-label={"07 Contact " + bp}>
    <Header active="contact" bp={bp} drawerOpen={drawerOpen}/>
    <PageHero
      crumbs={["Home","Contact"]}
      eyebrow="Get in touch"
      title="We're here to help"
      sub="Whether you have a quick question or want to speak with a coordinator before submitting your case, we'll respond within one business day in your preferred language."
    />
    <section style={{padding:"32px 80px 80px", display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:48, alignItems:"flex-start"}}>
      <div className="surface" style={{padding:"40px 48px"}}>
        <div style={{font:"700 13px var(--font-body)", letterSpacing:"0.14em", color:"var(--kmed-aqua)", textTransform:"uppercase", marginBottom:8}}>Send us a message</div>
        <h2 style={{font:"900 36px var(--font-display)", margin:"0 0 28px", letterSpacing:"-0.01em"}}>How can we help?</h2>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, marginBottom:24}}>
          <div className="field field--boxed"><label className="field__label">Full name</label><input type="text" defaultValue="Sakura Tanaka" placeholder="Jane Doe"/></div>
          <div className="field field--boxed"><label className="field__label">Country</label><select defaultValue="Japan"><option>Japan</option><option>China</option><option>Taiwan</option><option>United States</option><option>Other</option></select></div>
          <div className="field field--boxed"><label className="field__label">Email address</label><input type="email" defaultValue="s.tanaka@example.com"/></div>
          <div className="field field--boxed"><label className="field__label">Phone (with country code)</label><input type="tel" defaultValue="+81 90 1234 5678"/></div>
        </div>
        <div className="field field--boxed" style={{marginBottom:24}}>
          <label className="field__label">What is this about?</label>
          <div style={{display:"flex", flexWrap:"wrap", gap:10, marginTop:6}}>
            {["General inquiry","Treatment estimate","Visa & travel","Partner with us","Press / media"].map((t,i)=>(
              <span key={t} className={"tagpill" + (i===1?" is-on":"")}>{t}</span>
            ))}
          </div>
        </div>
        <div className="field field--boxed" style={{marginBottom:32}}>
          <label className="field__label">Message</label>
          <textarea rows={5} defaultValue="I'm planning a 5-day visit to Seoul in late May for a dermatology consultation. Could you let me know which clinics in your network can accommodate sensitive skin patients? Thank you."></textarea>
        </div>
        <label style={{display:"flex", alignItems:"center", gap:12, font:"400 13px var(--font-body)", color:"var(--text-secondary)", marginBottom:24}}>
          <span style={{width:18, height:18, borderRadius:5, border:"1.5px solid var(--kmed-aqua)", background:"var(--kmed-aqua)", display:"inline-flex", alignItems:"center", justifyContent:"center"}}><Icon name="check" size={12} color="#fff"/></span>
          I have read and agree to the <a href="#" style={{color:"var(--kmed-navy)", fontWeight:700}}>Privacy Policy</a> and consent to K-Med Global processing my inquiry.
        </label>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <div style={{font:"400 13px var(--font-body)", color:"var(--text-secondary)"}}>Avg. response time: under 6 hours</div>
          <button className="btn btn--primary btn--primary-lg">Send message <Icon name="arrow" size={16} color="#fff"/></button>
        </div>
      </div>

      <div style={{display:"flex", flexDirection:"column", gap:20}}>
        <div className="surface--ring" style={{padding:"24px"}}>
          <div style={{font:"700 12px var(--font-body)", color:"var(--kmed-navy)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:18}}>Direct lines</div>
          {[
            {ic:"mail", color:"var(--kmed-aqua)", label:"Patient inquiries", v:"care@kmedglobal.com"},
            {ic:"phone", color:"var(--kmed-green)", label:"24/7 hotline", v:"+82 2 6000 1004"},
            {ic:"chat", color:"var(--kmed-pink)", label:"WhatsApp / WeChat / LINE", v:"+82 10 4400 1004"},
            {ic:"pin", color:"var(--kmed-pink)", label:"Seoul HQ", v:"5F Yeoksam-ro 168, Gangnam-gu, Seoul 06246"},
          ].map((c,i)=>(
            <div key={i} style={{display:"flex", gap:14, alignItems:"flex-start", padding:"14px 0", borderBottom: i<3?"1px solid var(--kmed-line)":"none"}}>
              <span style={{width:38, height:38, borderRadius:10, background:"var(--kmed-bg-soft)", display:"flex", alignItems:"center", justifyContent:"center", flex:"none"}}><Icon name={c.ic} size={18} color={c.color}/></span>
              <div>
                <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>{c.label}</div>
                <div style={{font:"700 14px var(--font-body)", color:"var(--text-primary)", marginTop:2}}>{c.v}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="surface--ring" style={{padding:0, overflow:"hidden"}}>
          <div className="korea-map" style={{aspectRatio:"5/3", borderRadius:0, border:"none"}}>
            <div style={{position:"absolute", left:"35%", top:"40%", width:18, height:18, borderRadius:"50%", background:"var(--kmed-pink)", boxShadow:"0 0 0 6px rgba(233,30,99,0.18)"}}></div>
            <div style={{position:"absolute", left:"35%", top:"30%", padding:"6px 12px", borderRadius:8, background:"#fff", boxShadow:"var(--shadow-soft)", font:"700 12px var(--font-body)", color:"var(--kmed-navy)"}}>K-Med HQ · Gangnam</div>
            {/* Korea-ish blob */}
            <svg viewBox="0 0 200 200" style={{position:"absolute", inset:"10%", opacity:.5}}>
              <path d="M100 20 C 130 20, 150 50, 145 90 C 142 110, 155 130, 140 150 C 125 175, 90 180, 75 165 C 55 145, 60 120, 70 100 C 75 70, 75 30, 100 20 Z" fill="rgba(3,172,242,0.18)" stroke="rgba(0,87,155,0.4)" strokeWidth="1.5"/>
            </svg>
          </div>
          <div style={{padding:"18px 20px", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <div>
              <div style={{font:"700 14px var(--font-body)"}}>Visit our Seoul HQ</div>
              <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>By appointment · Mon–Fri 09:00–18:00 KST</div>
            </div>
            <a href="#" className="btn btn--text">Directions →</a>
          </div>
        </div>

        <div className="surface--ring" style={{padding:"22px 24px", background:"linear-gradient(180deg, #F5FBFE, #fff)"}}>
          <div style={{font:"700 12px var(--font-body)", color:"var(--kmed-navy)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:10}}>Regional offices</div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14}}>
            {[
              {f:"Tokyo, Japan", l:"Minato-ku · 03-XXXX"},
              {f:"Shanghai, China", l:"Pudong · +86 21 XXXX"},
              {f:"Taipei, Taiwan", l:"Xinyi · +886 2 XXXX"},
              {f:"Los Angeles, USA", l:"Koreatown · +1 213 XXX"},
            ].map(o => (
              <div key={o.f}>
                <div style={{font:"700 13px var(--font-body)"}}>{o.f}</div>
                <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>{o.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer bp={bp}/>
  </div>
);

Object.assign(window, { GetMatchedPage, ContactPage });
