// kmed-responsive-admin.jsx — Admin pages mobile + tablet

const AdmSideCompact = ({ active = "leads", bp = "t" }) => {
  const items = [
    {id:"dash", l:"Dashboard", i:"home"},
    {id:"leads", l:"Leads", i:"user", c:"248"},
    {id:"cases", l:"Cases", i:"file", c:"42"},
    {id:"sched", l:"Schedule", i:"cal"},
    {id:"hosp", l:"Hospitals", i:"medkit"},
    {id:"docs", l:"Doctors", i:"award"},
    {id:"rep", l:"Reports", i:"grid"},
  ];
  return (
    <aside className="adm-side">
      <div className="adm-side__brand">
        <span className="kh__logo-mark" style={{width:30, height:30, fontSize:14, borderRadius:8}}>K</span>
        <div>
          <div style={{font:"900 14px var(--font-display)", color:"var(--kmed-navy)", lineHeight:1}}>K-Med</div>
          <div style={{font:"400 10px var(--font-ui)", color:"var(--text-secondary)", marginTop:2}}>Admin</div>
        </div>
      </div>
      <div className="adm-side__nav">
        {items.map(it => (
          <a key={it.id} href="#" onClick={e=>e.preventDefault()} className={"adm-side__item" + (it.id===active?" is-active":"")}>
            <Icon name={it.i} size={16} color={it.id===active?"#00579B":"rgba(0,0,0,0.5)"}/>
            <span style={{fontSize:13}}>{it.l}</span>
            {it.c && <span className="adm-side__count">{it.c}</span>}
          </a>
        ))}
      </div>
    </aside>
  );
};

// Mobile bottom nav
const AdmBottomNav = ({ active = "leads" }) => (
  <div style={{display:"flex", borderTop:"1px solid var(--kmed-line)", background:"#fff", padding:"8px 0", marginTop:24}}>
    {[
      {id:"dash", l:"Home", i:"home"},
      {id:"leads", l:"Leads", i:"user"},
      {id:"cases", l:"Cases", i:"file"},
      {id:"more", l:"More", i:"grid"},
    ].map(it=>(
      <a key={it.id} href="#" onClick={e=>e.preventDefault()} style={{flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:4, padding:"8px 0", textDecoration:"none", color: it.id===active?"var(--kmed-navy)":"rgba(0,0,0,0.5)"}}>
        <Icon name={it.i} size={20} color={it.id===active?"#00579B":"rgba(0,0,0,0.5)"}/>
        <span style={{font:"700 11px var(--font-body)"}}>{it.l}</span>
      </a>
    ))}
  </div>
);

const AdminListResponsive = ({ bp = "m" }) => {
  const isM = bp === "m";
  const rows = [
    { n:"Sakura Tanaka", e:"s.tanaka@example.com", c:"🇯🇵 Japan", t:"Dermatology", b:"$2k–10k", st:"new", a:"Unassigned", d:"15m"},
    { n:"David Liu", e:"david.l@example.com", c:"🇺🇸 USA", t:"Health Screening", b:"$2k–10k", st:"review", a:"J. Park", d:"1h"},
    { n:"Wei Chen", e:"wei.c@example.com", c:"🇹🇼 Taiwan", t:"Dermatology", b:"<$2k", st:"matched", a:"M. Lee", d:"2h"},
    { n:"Mei Liang", e:"m.liang@example.com", c:"🇨🇳 China", t:"Oncology", b:"$10k–30k", st:"scheduled", a:"H. Choi", d:"3h"},
    { n:"Anna Romanova", e:"a.romanova@example.com", c:"🇷🇺 Russia", t:"Knee Replacement", b:"$10k–30k", st:"matched", a:"J. Park", d:"5h"},
    { n:"James Whitlock", e:"j.whit@example.com", c:"🇬🇧 UK", t:"LASIK", b:"<$2k", st:"closed", a:"S. Han", d:"1d"},
  ];
  const stPill = (st) => {
    const m = { new:"New", review:"In review", matched:"Matched", scheduled:"Scheduled", closed:"Closed" };
    return <span className={"pill pill--"+st}>{m[st]}</span>;
  };

  if (isM) {
    return (
      <div className={"kmed-page kmed-page--"+bp} data-screen-label="08M Admin Leads">
        <header className="kh kh--m" style={{position:"sticky"}}>
          <div style={{display:"flex", alignItems:"center", gap:10, flex:1}}>
            <span className="kh__logo-mark" style={{width:32, height:32, fontSize:14, borderRadius:8}}>K</span>
            <div>
              <div style={{font:"900 15px var(--font-display)", color:"var(--kmed-navy)", lineHeight:1}}>K-Med Admin</div>
              <div style={{font:"400 11px var(--font-ui)", color:"var(--text-secondary)", marginTop:2}}>Leads · 248</div>
            </div>
          </div>
          <button className="kh-burger"><span></span></button>
        </header>

        <div className="adm--m">
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14}}>
            <h1 style={{font:"900 22px var(--font-display)", margin:0}}>Leads</h1>
            <button className="btn btn--primary" style={{padding:"10px 16px", fontSize:13, minHeight:44}}><Icon name="plus" size={14} color="#fff"/>New</button>
          </div>

          <div className="stats-m" style={{marginBottom:14}}>
            <div className="stat" style={{padding:"14px 14px"}}>
              <div className="stat__num" style={{fontSize:22}}>17</div>
              <div className="stat__lbl">New (24h)</div>
            </div>
            <div className="stat" style={{padding:"14px 14px"}}>
              <div className="stat__num" style={{fontSize:22}}>42</div>
              <div className="stat__lbl">In review</div>
            </div>
          </div>

          <div className="adm-search" style={{marginBottom:12, minHeight:44}}>
            <Icon name="search" size={16} color="rgba(0,0,0,0.5)"/>
            <span>Search patients...</span>
          </div>
          <div style={{display:"flex", gap:8, overflowX:"auto", paddingBottom:6, marginBottom:12}}>
            <span className="chip" style={{flex:"none", background:"var(--kmed-aqua)", color:"#fff", border:"none"}}>All · 248</span>
            <span className="chip" style={{flex:"none"}}>New · 17</span>
            <span className="chip" style={{flex:"none"}}>In review · 42</span>
            <span className="chip" style={{flex:"none"}}>Matched · 31</span>
          </div>

          <div style={{display:"flex", flexDirection:"column", gap:10}}>
            {rows.slice(0,5).map((r,i)=>(
              <div key={i} className="lead-card">
                <div className="lead-card__top">
                  <div className="lead-card__avatar">{r.n.split(" ").map(p=>p[0]).join("").slice(0,2)}</div>
                  <div style={{flex:1, minWidth:0}}>
                    <div style={{font:"700 15px var(--font-body)"}}>{r.n}</div>
                    <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>{r.c} · {r.d} ago</div>
                  </div>
                  {stPill(r.st)}
                </div>
                <div className="lead-card__meta">
                  <span><strong>Treatment:</strong>{r.t}</span>
                </div>
                <div className="lead-card__meta">
                  <span><strong>Budget:</strong><span style={{color:"var(--kmed-green-dark)", fontWeight:700}}>{r.b}</span></span>
                  <span style={{marginLeft:"auto"}}><strong>Assigned:</strong>{r.a}</span>
                </div>
              </div>
            ))}
          </div>

          <AdmBottomNav active="leads"/>
        </div>
      </div>
    );
  }

  // Tablet
  return (
    <div className={"kmed-page kmed-page--"+bp} data-screen-label="08T Admin Leads">
      <div className="adm adm--t">
        <AdmSideCompact active="leads"/>
        <div className="adm-main">
          <div className="adm-top">
            <div>
              <h1 className="adm-top__h" style={{fontSize:24}}>Leads</h1>
              <div className="adm-top__sub">248 inquiries · 17 awaiting first response</div>
            </div>
            <div style={{display:"flex", gap:10}}>
              <button className="btn btn--ghost" style={{padding:"8px 14px", fontSize:13}}><Icon name="download" size={14} color="#00579B"/>Export</button>
              <button className="btn btn--primary" style={{padding:"10px 16px", fontSize:13}}><Icon name="plus" size={14} color="#fff"/>New lead</button>
            </div>
          </div>

          <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:12, marginBottom:18}}>
            {[
              {l:"New (24h)", v:"17", d:"+24% vs prev"},
              {l:"In review", v:"42", d:"+8% vs prev"},
              {l:"Matched", v:"31", d:"+12% vs prev"},
              {l:"Avg response", v:"4h 12m", d:"−18% vs prev"},
            ].map((s,i)=>(
              <div key={i} className="adm-stat">
                <div className="adm-stat__lbl">{s.l}</div>
                <div className="adm-stat__val" style={{fontSize:22}}>{s.v}</div>
                <div className="adm-stat__delta">{s.d}</div>
              </div>
            ))}
          </div>

          <div className="adm-card">
            <div className="adm-filterbar" style={{flexWrap:"wrap", gap:8}}>
              <div className="adm-search" style={{flex:"1 1 100%", minHeight:40}}>
                <Icon name="search" size={14} color="rgba(0,0,0,0.5)"/>
                <span style={{fontSize:13}}>Search by patient, email...</span>
              </div>
              <span className="chip" style={{minHeight:36, fontSize:12, padding:"6px 12px"}}>Status: All</span>
              <span className="chip" style={{minHeight:36, fontSize:12, padding:"6px 12px"}}>Treatment: All</span>
              <span className="chip" style={{minHeight:36, fontSize:12, padding:"6px 12px"}}>Assignee: All</span>
            </div>
            <table className="adm-table">
              <thead><tr><th>Patient</th><th>Treatment</th><th>Status</th><th>Received</th></tr></thead>
              <tbody>
                {rows.map((r,i)=>(
                  <tr key={i}>
                    <td>
                      <div className="who">
                        <div className="who__avatar">{r.n.split(" ").map(p=>p[0]).join("").slice(0,2)}</div>
                        <div>
                          <div className="who__name" style={{fontSize:13}}>{r.n}</div>
                          <div className="who__email" style={{fontSize:11}}>{r.c}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{fontSize:13}}>{r.t}</td>
                    <td>{stPill(r.st)}</td>
                    <td style={{color:"var(--text-secondary)", fontSize:12}}>{r.d} ago</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminDetailResponsive = ({ bp = "m" }) => {
  const isM = bp === "m";
  const timeline = [
    {t:"Estimate sent", who:"Lumina Derm.", when:"Today 14:32", body:"Itemized estimate USD 1,840–2,260 sent.", icon:"file", c:"var(--kmed-green)"},
    {t:"Records reviewed", who:"Dr. Park", when:"Today 11:08", body:"Photos & history reviewed. Recommends conservative laser toning.", icon:"award", c:"var(--kmed-aqua)"},
    {t:"Documents uploaded", who:"Patient", when:"Today 09:21", body:"3 photos, 1 PDF uploaded.", icon:"file", c:"var(--kmed-pink)"},
    {t:"Coordinator assigned", who:"J. Park", when:"Yesterday", body:"Routed to dermatology pod.", icon:"user", c:"var(--kmed-aqua)"},
  ];

  const Body = (
    <React.Fragment>
      {/* Header */}
      <div style={{display:"flex", alignItems:"center", gap:14, marginBottom:18}}>
        <div style={{width:isM?52:60, height:isM?52:60, borderRadius:"50%", background:"linear-gradient(135deg, var(--kmed-pink-warm), var(--kmed-aqua-soft))", color:"var(--kmed-navy)", font:`900 ${isM?"18px":"22px"} var(--font-display)`, display:"flex", alignItems:"center", justifyContent:"center", flex:"none"}}>ST</div>
        <div style={{flex:1, minWidth:0}}>
          <h1 style={{font:`900 ${isM?"19px":"22px"} var(--font-display)`, margin:"0 0 4px"}}>Sakura Tanaka <span style={{font:"400 13px var(--font-body)", color:"var(--text-secondary)"}}>· 32 · 🇯🇵</span></h1>
          <div style={{display:"flex", gap:8, alignItems:"center", flexWrap:"wrap"}}>
            <span className="pill pill--review">In review</span>
            <span style={{font:"400 11px var(--font-body)", color:"var(--text-secondary)"}}>#LD-20260508-0421</span>
          </div>
        </div>
      </div>

      <div style={{display:"flex", gap:8, marginBottom:18, flexWrap:"wrap"}}>
        <button className="btn btn--ghost" style={{padding:"8px 14px", fontSize:12, minHeight:40}}><Icon name="chat" size={14} color="#00579B"/>Message</button>
        <button className="btn btn--ghost" style={{padding:"8px 14px", fontSize:12, minHeight:40}}><Icon name="user" size={14} color="#00579B"/>Reassign</button>
        {!isM && <button className="btn btn--green-flat" style={{padding:"8px 16px", fontSize:12}}>Mark as matched</button>}
      </div>

      {/* Inquiry summary */}
      <div className="adm-card" style={{padding:isM?16:20, marginBottom:14}}>
        <div style={{font:"700 11px var(--font-display)", color:"var(--kmed-navy)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:14}}>Inquiry summary</div>
        <div style={{display:"grid", gridTemplateColumns: isM?"1fr 1fr":"repeat(3, 1fr)", gap:14}}>
          {[
            {l:"Treatment", v:"Dermatology"},
            {l:"Budget", v:"$2k – $10k"},
            {l:"Travel", v:"22–28 May 2026"},
            {l:"Stay", v:"5 days"},
            {l:"Companion", v:"1 spouse"},
            {l:"Language", v:"EN / 日本語"},
          ].map(d=>(
            <div key={d.l}>
              <div style={{font:"700 10px var(--font-body)", color:"var(--text-disabled)", letterSpacing:"0.12em", textTransform:"uppercase"}}>{d.l}</div>
              <div style={{font:"700 13px var(--font-body)", marginTop:4}}>{d.v}</div>
            </div>
          ))}
        </div>
        <div style={{padding:"14px 16px", marginTop:14, background:"var(--kmed-bg-soft)", borderRadius:10, font:"400 13px/1.55 var(--font-body)"}}>
          "Pigmentation around cheeks, sensitive skin, considering laser toning during a 5-day Seoul trip."
        </div>
      </div>

      {/* Activity */}
      <div className="adm-card" style={{padding:isM?16:20, marginBottom:14}}>
        <div style={{font:"700 11px var(--font-display)", color:"var(--kmed-navy)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:14}}>Activity</div>
        <div style={{position:"relative", paddingLeft:28}}>
          <div style={{position:"absolute", left:12, top:14, bottom:14, width:2, background:"var(--kmed-line)"}}></div>
          {timeline.map((e,i)=>(
            <div key={i} style={{position:"relative", paddingBottom: i<timeline.length-1?16:0}}>
              <div style={{position:"absolute", left:-22, top:0, width:26, height:26, borderRadius:"50%", background:"#fff", border:`2px solid ${e.c}`, display:"flex", alignItems:"center", justifyContent:"center"}}><Icon name={e.icon} size={12} color={e.c}/></div>
              <div style={{display:"flex", flexDirection: isM?"column":"row", alignItems: isM?"flex-start":"baseline", justifyContent: isM?"flex-start":"space-between", gap:isM?2:8, marginBottom:4}}>
                <div style={{font:"700 13px var(--font-body)"}}>{e.t} <span style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>· {e.who}</span></div>
                <div style={{font:"400 11px var(--font-body)", color:"var(--text-secondary)"}}>{e.when}</div>
              </div>
              <div style={{font:"400 13px/1.55 var(--font-body)", color:"var(--text-secondary)"}}>{e.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Hospitals */}
      <div className="adm-card" style={{padding:isM?16:20}}>
        <div style={{font:"700 11px var(--font-display)", color:"var(--kmed-navy)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:12}}>Matched hospitals · 2</div>
        {[
          {i:"LD", n:"Lumina Dermatology", st:"Estimate sent", c:"var(--kmed-green)"},
          {i:"SS", n:"Seoul Skin Institute", st:"Awaiting review", c:"var(--kmed-aqua)"},
        ].map((h,i)=>(
          <div key={i} style={{display:"flex", gap:12, alignItems:"center", padding:"10px 0", borderBottom: i===0?"1px solid var(--kmed-line)":"none"}}>
            <div style={{width:36, height:36, borderRadius:9, background:"linear-gradient(135deg, var(--kmed-navy), var(--kmed-aqua))", color:"#fff", font:"900 12px var(--font-display)", display:"flex", alignItems:"center", justifyContent:"center"}}>{h.i}</div>
            <div style={{flex:1, minWidth:0}}>
              <div style={{font:"700 13px var(--font-body)"}}>{h.n}</div>
              <div style={{font:"400 11px var(--font-body)", color: h.c}}>● {h.st}</div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );

  if (isM) {
    return (
      <div className={"kmed-page kmed-page--"+bp} data-screen-label="09M Admin Detail">
        <header className="kh kh--m" style={{position:"sticky"}}>
          <button className="kh-burger" style={{flex:"none"}}><span></span></button>
          <div style={{flex:1, minWidth:0}}>
            <div style={{font:"900 14px var(--font-display)", color:"var(--kmed-navy)"}}>Lead detail</div>
            <div style={{font:"400 11px var(--font-ui)", color:"var(--text-secondary)"}}>#LD-20260508-0421</div>
          </div>
          <button className="kh-cta-icon"><Icon name="dots" size={18} color="#fff"/></button>
        </header>
        <div className="adm--m">{Body}</div>
        <div className="sticky-cta-m">
          <button className="btn btn--ghost" style={{flex:"0 0 44px", padding:0, justifyContent:"center"}}><Icon name="chat" size={18} color="#00579B"/></button>
          <button className="btn btn--green-flat" style={{flex:1, justifyContent:"center", borderRadius:999, fontSize:13, minHeight:48}}>Mark as matched</button>
        </div>
      </div>
    );
  }

  // Tablet
  return (
    <div className={"kmed-page kmed-page--"+bp} data-screen-label="09T Admin Detail">
      <div className="adm adm--t">
        <AdmSideCompact active="leads"/>
        <div className="adm-main" style={{padding:"20px 24px"}}>
          <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)", marginBottom:12}}>
            <a href="#" style={{color:"var(--kmed-navy)", textDecoration:"none", fontWeight:700}}>Leads</a>
            <span style={{margin:"0 6px"}}>›</span>
            <span style={{fontWeight:700}}>Sakura Tanaka</span>
          </div>
          {Body}
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { AdminListResponsive, AdminDetailResponsive });
