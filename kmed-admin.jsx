// kmed-admin.jsx — Admin Lead List + Lead Detail

const AdmSide = ({ active = "leads" }) => {
  const items = [
    { g:"Workspace", items:[
      {id:"dash", l:"Dashboard", i:"home", c:""},
      {id:"leads", l:"Leads", i:"user", c:"248"},
      {id:"cases", l:"Active cases", i:"file", c:"42"},
      {id:"sched", l:"Scheduling", i:"cal", c:"17"},
    ]},
    { g:"Network", items:[
      {id:"hosp", l:"Hospitals", i:"medkit", c:""},
      {id:"docs", l:"Doctors", i:"award", c:""},
      {id:"treat", l:"Treatments", i:"sparkle", c:""},
    ]},
    { g:"Reporting", items:[
      {id:"rep", l:"Reports", i:"grid", c:""},
      {id:"fin", l:"Finance", i:"money", c:""},
    ]},
  ];
  return (
    <aside className="adm-side">
      <div className="adm-side__brand">
        <span className="kh__logo-mark" style={{width:34, height:34, fontSize:16, borderRadius:9}}>K</span>
        <div>
          <div style={{font:"900 16px var(--font-display)", color:"var(--kmed-navy)", lineHeight:1}}>K-Med Admin</div>
          <div style={{font:"400 11px var(--font-ui)", color:"var(--text-secondary)", marginTop:2}}>Care Operations</div>
        </div>
      </div>
      {items.map(grp => (
        <React.Fragment key={grp.g}>
          <div className="adm-side__group">{grp.g}</div>
          <div className="adm-side__nav">
            {grp.items.map(it => (
              <a key={it.id} href="#" onClick={e=>e.preventDefault()} className={"adm-side__item" + (it.id===active?" is-active":"")}>
                <Icon name={it.i} size={18} color={it.id===active?"#00579B":"rgba(0,0,0,0.5)"}/>
                <span>{it.l}</span>
                {it.c && <span className="adm-side__count">{it.c}</span>}
              </a>
            ))}
          </div>
        </React.Fragment>
      ))}
      <div style={{marginTop:36, padding:"16px", borderRadius:12, background:"linear-gradient(180deg, var(--kmed-pink-warm), #fff)"}}>
        <div style={{font:"700 13px var(--font-body)", marginBottom:4}}>Need help?</div>
        <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)", marginBottom:10}}>Ops handbook, SLAs, escalation tree.</div>
        <a href="#" className="btn btn--text" style={{fontSize:12, padding:0}}>Open handbook →</a>
      </div>
    </aside>
  );
};

const AdminLeadListPage = ({ bp = "desktop" }) => {
  const rows = [
    { n:"Sakura Tanaka", e:"s.tanaka@example.com", c:"Japan", flag:"🇯🇵", t:"Dermatology & K-Beauty", b:"$2k–10k", st:"new", a:"Unassigned", d:"15 min ago" },
    { n:"David Liu", e:"david.l@example.com", c:"USA", flag:"🇺🇸", t:"Health Screening", b:"$2k–10k", st:"review", a:"J. Park", d:"1 hr ago" },
    { n:"Wei Chen", e:"wei.c@example.com", c:"Taiwan", flag:"🇹🇼", t:"Dermatology & K-Beauty", b:"<$2k", st:"matched", a:"M. Lee", d:"2 hr ago" },
    { n:"Mei Liang", e:"m.liang@example.com", c:"China", flag:"🇨🇳", t:"Oncology Second Opinion", b:"$10k–30k", st:"scheduled", a:"H. Choi", d:"3 hr ago" },
    { n:"Anna Romanova", e:"a.romanova@example.com", c:"Russia", flag:"🇷🇺", t:"Knee Replacement", b:"$10k–30k", st:"matched", a:"J. Park", d:"5 hr ago" },
    { n:"James Whitlock", e:"j.whit@example.com", c:"UK", flag:"🇬🇧", t:"LASIK", b:"<$2k", st:"closed", a:"S. Han", d:"1 day ago" },
    { n:"Yuki Mori", e:"y.mori@example.com", c:"Japan", flag:"🇯🇵", t:"Plastic Surgery Consult", b:"$2k–10k", st:"new", a:"Unassigned", d:"1 day ago" },
    { n:"Lin Zhao", e:"l.zhao@example.com", c:"China", flag:"🇨🇳", t:"Fertility / IVF", b:"$10k–30k", st:"review", a:"M. Lee", d:"2 days ago" },
    { n:"Sophie Martin", e:"sophie.m@example.com", c:"France", flag:"🇫🇷", t:"Spine Surgery", b:"$30k+", st:"matched", a:"H. Choi", d:"2 days ago" },
    { n:"Carlos Mendez", e:"c.mendez@example.com", c:"Mexico", flag:"🇲🇽", t:"Dental Implants", b:"$2k–10k", st:"closed", a:"S. Han", d:"3 days ago" },
  ];
  const stPill = (st) => {
    const m = { new:"New", review:"In review", matched:"Matched", scheduled:"Scheduled", closed:"Closed" };
    return <span className={"pill pill--"+st}>{m[st]}</span>;
  };
  return (
    <div className="adm" data-bp={bp} data-screen-label={"08 Admin · Leads " + bp}>
      <AdmSide active="leads"/>
      <div className="adm-main">
        <div className="adm-top">
          <div>
            <h1 className="adm-top__h">Leads</h1>
            <div className="adm-top__sub">248 inquiries · 17 awaiting first response</div>
          </div>
          <div style={{display:"flex", alignItems:"center", gap:12}}>
            <div style={{display:"flex", alignItems:"center", gap:8, padding:"8px 14px", borderRadius:999, background:"#fff", border:"1px solid var(--kmed-line)", font:"400 13px var(--font-body)"}}>
              <Icon name="cal" size={14} color="rgba(0,0,0,0.5)"/> Last 30 days <Icon name="chevdown" size={12} color="rgba(0,0,0,0.4)"/>
            </div>
            <button className="btn btn--ghost"><Icon name="download" size={14} color="#00579B"/>Export CSV</button>
            <button className="btn btn--primary" style={{padding:"10px 20px", fontSize:14}}><Icon name="plus" size={14} color="#fff"/>New lead</button>
          </div>
        </div>

        {/* Stats */}
        <div className="adm-stats" style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:16, marginBottom:24}}>
          {[
            {l:"New (last 24h)", v:"17", d:"+24% vs prev day"},
            {l:"In review", v:"42", d:"+8% vs prev wk"},
            {l:"Matched", v:"31", d:"+12% vs prev wk"},
            {l:"Avg. response time", v:"4h 12m", d:"−18% vs prev wk", down: false},
          ].map((s,i)=>(
            <div key={i} className="adm-stat">
              <div className="adm-stat__lbl">{s.l}</div>
              <div className="adm-stat__val">{s.v}</div>
              <div className={"adm-stat__delta" + (s.down?" is-down":"")}>{s.d}</div>
            </div>
          ))}
        </div>

        {/* Filter bar + table */}
        <div className="adm-card">
          <div className="adm-filterbar">
            <div className="adm-search">
              <Icon name="search" size={16} color="rgba(0,0,0,0.5)"/>
              <span>Search by patient name, email, treatment...</span>
            </div>
            <span style={{display:"inline-flex", alignItems:"center", gap:6, padding:"8px 14px", border:"1px solid var(--kmed-line)", borderRadius:8, font:"700 13px var(--font-body)", color:"var(--text-primary)", cursor:"pointer", background:"#fff"}}>Status: All <Icon name="chevdown" size={12}/></span>
            <span style={{display:"inline-flex", alignItems:"center", gap:6, padding:"8px 14px", border:"1px solid var(--kmed-line)", borderRadius:8, font:"700 13px var(--font-body)", color:"var(--text-primary)", cursor:"pointer", background:"#fff"}}>Treatment: All <Icon name="chevdown" size={12}/></span>
            <span style={{display:"inline-flex", alignItems:"center", gap:6, padding:"8px 14px", border:"1px solid var(--kmed-line)", borderRadius:8, font:"700 13px var(--font-body)", color:"var(--text-primary)", cursor:"pointer", background:"#fff"}}>Assignee: All <Icon name="chevdown" size={12}/></span>
            <span style={{display:"inline-flex", alignItems:"center", gap:6, padding:"8px 14px", border:"1px solid var(--kmed-line)", borderRadius:8, font:"700 13px var(--font-body)", color:"var(--text-primary)", cursor:"pointer", background:"#fff"}}><Icon name="filter" size={12}/>More filters</span>
          </div>
          <table className="adm-table">
            <thead>
              <tr>
                <th style={{width:36}}><span style={{width:16, height:16, borderRadius:4, border:"1.5px solid var(--border-input)", display:"inline-block"}}></span></th>
                <th>Patient</th>
                <th>Treatment interest</th>
                <th>Budget</th>
                <th>Status</th>
                <th>Assigned to</th>
                <th>Received</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r,i)=>(
                <tr key={i}>
                  <td><span style={{width:16, height:16, borderRadius:4, border:"1.5px solid var(--border-input)", display:"inline-block"}}></span></td>
                  <td>
                    <div className="who">
                      <div className="who__avatar">{r.n.split(" ").map(p=>p[0]).join("").slice(0,2)}</div>
                      <div>
                        <div className="who__name">{r.n}</div>
                        <div className="who__email">{r.flag} {r.c} · {r.e}</div>
                      </div>
                    </div>
                  </td>
                  <td>{r.t}</td>
                  <td style={{color:"var(--kmed-green-dark)", fontWeight:700}}>{r.b}</td>
                  <td>{stPill(r.st)}</td>
                  <td>{r.a === "Unassigned" ? <span style={{color:"var(--text-disabled)", fontStyle:"italic"}}>{r.a}</span> : r.a}</td>
                  <td style={{color:"var(--text-secondary)"}}>{r.d}</td>
                  <td style={{textAlign:"right"}}><span style={{cursor:"pointer", padding:6}}><Icon name="dots" size={16} color="rgba(0,0,0,0.4)"/></span></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 20px", borderTop:"1px solid var(--kmed-line)", font:"400 13px var(--font-body)", color:"var(--text-secondary)"}}>
            <div>Showing 1–10 of 248</div>
            <div style={{display:"flex", gap:6}}>
              <span style={{padding:"6px 12px", borderRadius:8, border:"1px solid var(--kmed-line)", color:"var(--text-disabled)"}}>‹</span>
              {[1,2,3,"…",25].map((p,i)=> <span key={i} style={{padding:"6px 12px", borderRadius:8, border:"1px solid var(--kmed-line)", background:p===1?"var(--kmed-aqua)":"#fff", color:p===1?"#fff":"var(--text-primary)", fontWeight:700, cursor:"pointer"}}>{p}</span>)}
              <span style={{padding:"6px 12px", borderRadius:8, border:"1px solid var(--kmed-line)", cursor:"pointer"}}>›</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminLeadDetailPage = ({ bp = "desktop" }) => {
  const timeline = [
    {t:"Estimate sent", who:"Lumina Dermatology Clinic", when:"Today · 14:32 KST", body:"Itemized estimate USD 1,840–2,260 sent. Awaiting patient confirmation.", icon:"file", c:"var(--kmed-green)"},
    {t:"Records reviewed", who:"Dr. Ji-won Park (Lumina Derm)", when:"Today · 11:08 KST", body:"Skin photos and history reviewed. Recommends conservative laser toning + HIFU evaluation on arrival.", icon:"award", c:"var(--kmed-aqua)"},
    {t:"Documents uploaded", who:"Patient", when:"Today · 09:21 KST", body:"3 photos, 1 PDF (allergy history) uploaded.", icon:"file", c:"var(--kmed-pink)"},
    {t:"Coordinator assigned", who:"J. Park · Care Coordinator", when:"Yesterday · 16:48 KST", body:"Routed to dermatology pod. SLA: first reply within 6h.", icon:"user", c:"var(--kmed-aqua)"},
    {t:"Inquiry received", who:"K-Med web · Get Matched", when:"Yesterday · 16:42 KST", body:"5-step form completed. Source: organic search (jp.kmedglobal.com).", icon:"plane", c:"rgba(0,0,0,0.4)"},
  ];
  return (
    <div className="adm" data-bp={bp} data-screen-label={"09 Admin · Lead Detail " + bp}>
      <AdmSide active="leads"/>
      <div className="adm-main">
        <div style={{font:"400 13px var(--font-body)", color:"var(--text-secondary)", marginBottom:14}}>
          <a href="#" onClick={e=>e.preventDefault()} style={{color:"var(--kmed-navy)", textDecoration:"none", fontWeight:700}}>Leads</a>
          <span style={{margin:"0 8px", color:"var(--text-disabled)"}}>›</span>
          <span style={{color:"var(--text-primary)", fontWeight:700}}>Sakura Tanaka · #LD-20260508-0421</span>
        </div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:24}}>
          <div style={{display:"flex", alignItems:"center", gap:18}}>
            <div style={{width:64, height:64, borderRadius:"50%", background:"linear-gradient(135deg, var(--kmed-pink-warm), var(--kmed-aqua-soft))", color:"var(--kmed-navy)", font:"900 22px var(--font-display)", display:"flex", alignItems:"center", justifyContent:"center"}}>ST</div>
            <div>
              <h1 className="adm-top__h" style={{fontSize:30, margin:0}}>Sakura Tanaka <span style={{color:"var(--text-secondary)", font:"400 18px var(--font-display)"}}>· 32 · 🇯🇵</span></h1>
              <div style={{display:"flex", gap:12, marginTop:6, alignItems:"center"}}>
                <span className="pill pill--review">In review</span>
                <span style={{font:"400 13px var(--font-body)", color:"var(--text-secondary)"}}>Lead #LD-20260508-0421 · Created yesterday 16:42 KST</span>
              </div>
            </div>
          </div>
          <div style={{display:"flex", gap:10}}>
            <button className="btn btn--ghost"><Icon name="chat" size={14} color="#00579B"/>Message patient</button>
            <button className="btn btn--ghost"><Icon name="user" size={14} color="#00579B"/>Reassign</button>
            <button className="btn btn--green-flat" style={{padding:"10px 20px", fontSize:13}}>Mark as matched</button>
          </div>
        </div>

        <div className="adm-lead-detail" style={{display:"grid", gridTemplateColumns:"1fr 360px", gap:24}}>
          {/* Left column */}
          <div style={{display:"flex", flexDirection:"column", gap:20}}>
            {/* Quick details */}
            <div className="adm-card" style={{padding:"24px"}}>
              <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:18}}>
                <div style={{font:"700 14px var(--font-display)", color:"var(--kmed-navy)", letterSpacing:"0.08em", textTransform:"uppercase", fontSize:12}}>Inquiry summary</div>
                <a href="#" className="btn btn--text" style={{fontSize:12}}>Edit</a>
              </div>
              <div className="adm-summary-grid" style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:18}}>
                {[
                  {l:"Treatment focus", v:"Dermatology & K-Beauty"},
                  {l:"Budget range", v:"$2,000 – $10,000"},
                  {l:"Travel window", v:"22 May – 28 May 2026"},
                  {l:"Length of stay", v:"5 days"},
                  {l:"Companion", v:"1 (spouse)"},
                  {l:"Language", v:"English / 日本語"},
                  {l:"Source", v:"Organic · jp.kmedglobal.com"},
                  {l:"Consent", v:"Privacy ✓ · Marketing ✗"},
                ].map(d=>(
                  <div key={d.l}>
                    <div style={{font:"700 11px var(--font-body)", color:"var(--text-disabled)", letterSpacing:"0.12em", textTransform:"uppercase"}}>{d.l}</div>
                    <div style={{font:"700 14px var(--font-body)", marginTop:4}}>{d.v}</div>
                  </div>
                ))}
              </div>
              <div style={{padding:"18px 20px", marginTop:20, background:"var(--kmed-bg-soft)", borderRadius:12, font:"400 14px/1.6 var(--font-body)", color:"var(--text-primary)"}}>
                <div style={{font:"700 12px var(--font-body)", color:"var(--text-secondary)", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:8}}>Patient note</div>
                "Pigmentation around cheeks, sensitive skin, considering laser toning during a 5-day Seoul trip in late May. Have rosacea history — prefer conservative protocols only."
              </div>
            </div>

            {/* Activity timeline */}
            <div className="adm-card" style={{padding:"24px"}}>
              <div style={{font:"700 12px var(--font-display)", color:"var(--kmed-navy)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:20}}>Activity</div>
              <div style={{position:"relative", paddingLeft:30}}>
                <div style={{position:"absolute", left:13, top:14, bottom:14, width:2, background:"var(--kmed-line)"}}></div>
                {timeline.map((e,i)=>(
                  <div key={i} style={{position:"relative", paddingBottom: i<timeline.length-1?22:0}}>
                    <div style={{position:"absolute", left:-24, top:2, width:28, height:28, borderRadius:"50%", background:"#fff", border:`2px solid ${e.c}`, display:"flex", alignItems:"center", justifyContent:"center"}}><Icon name={e.icon} size={13} color={e.c}/></div>
                    <div style={{display:"flex", alignItems:"baseline", justifyContent:"space-between", marginBottom:4}}>
                      <div style={{font:"700 14px var(--font-body)"}}>{e.t} <span style={{font:"400 13px var(--font-body)", color:"var(--text-secondary)"}}>· {e.who}</span></div>
                      <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>{e.when}</div>
                    </div>
                    <div style={{font:"400 14px/1.55 var(--font-body)", color:"var(--text-secondary)"}}>{e.body}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className="adm-card" style={{padding:"24px"}}>
              <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16}}>
                <div style={{font:"700 12px var(--font-display)", color:"var(--kmed-navy)", letterSpacing:"0.12em", textTransform:"uppercase"}}>Documents · 4</div>
                <button className="btn btn--ghost" style={{padding:"6px 14px", fontSize:12}}><Icon name="plus" size={12} color="#00579B"/>Upload</button>
              </div>
              <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:12}}>
                {[
                  {n:"skin-front.jpg", s:"2.4 MB"},
                  {n:"skin-side.jpg", s:"2.1 MB"},
                  {n:"skin-cheek.jpg", s:"1.8 MB"},
                  {n:"allergy-history.pdf", s:"212 KB"},
                ].map((d,i)=>(
                  <div key={i} style={{padding:"14px", borderRadius:12, border:"1px solid var(--kmed-line)", display:"flex", alignItems:"center", gap:10}}>
                    <Icon name="file" size={20} color="#00579B"/>
                    <div style={{flex:1, minWidth:0}}>
                      <div style={{font:"700 13px var(--font-body)", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>{d.n}</div>
                      <div style={{font:"400 11px var(--font-body)", color:"var(--text-secondary)"}}>{d.s}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right rail */}
          <div style={{display:"flex", flexDirection:"column", gap:20}}>
            <div className="adm-card" style={{padding:"22px"}}>
              <div style={{font:"700 12px var(--font-display)", color:"var(--kmed-navy)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:14}}>Assignment</div>
              <div style={{display:"flex", alignItems:"center", gap:12, padding:"12px 0", borderBottom:"1px solid var(--kmed-line)"}}>
                <div style={{width:40, height:40, borderRadius:"50%", background:"linear-gradient(135deg, var(--kmed-aqua), var(--kmed-navy))", color:"#fff", font:"700 13px var(--font-body)", display:"flex", alignItems:"center", justifyContent:"center"}}>JP</div>
                <div>
                  <div style={{font:"700 14px var(--font-body)"}}>J. Park</div>
                  <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>Care Coordinator · Dermatology</div>
                </div>
              </div>
              <div style={{padding:"12px 0"}}>
                <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>Pod</div>
                <div style={{font:"700 14px var(--font-body)", marginTop:4}}>Dermatology · Seoul</div>
              </div>
              <div style={{padding:"12px 0", borderTop:"1px solid var(--kmed-line)"}}>
                <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>SLA</div>
                <div style={{display:"flex", alignItems:"center", gap:8, marginTop:4}}>
                  <span style={{padding:"3px 10px", borderRadius:999, background:"rgba(76,175,80,0.14)", color:"var(--kmed-green-dark)", font:"700 11px var(--font-body)"}}>On track</span>
                  <span style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>Next response in 4h 12m</span>
                </div>
              </div>
            </div>

            <div className="adm-card" style={{padding:"22px"}}>
              <div style={{font:"700 12px var(--font-display)", color:"var(--kmed-navy)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:14}}>Matched hospitals · 2</div>
              {[
                {i:"LD", n:"Lumina Dermatology Clinic", st:"Estimate sent", c:"var(--kmed-green)"},
                {i:"SS", n:"Seoul Skin Institute", st:"Awaiting review", c:"var(--kmed-aqua)"},
              ].map((h,i)=>(
                <div key={i} style={{display:"flex", gap:12, alignItems:"center", padding:"12px 0", borderBottom: i===0?"1px solid var(--kmed-line)":"none"}}>
                  <div style={{width:42, height:42, borderRadius:10, background:"linear-gradient(135deg, var(--kmed-navy), var(--kmed-aqua))", color:"#fff", font:"900 14px var(--font-display)", display:"flex", alignItems:"center", justifyContent:"center"}}>{h.i}</div>
                  <div style={{flex:1, minWidth:0}}>
                    <div style={{font:"700 13px var(--font-body)", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>{h.n}</div>
                    <div style={{font:"400 11px var(--font-body)", color: h.c}}>● {h.st}</div>
                  </div>
                </div>
              ))}
              <button className="btn btn--ghost" style={{width:"100%", justifyContent:"center", marginTop:14, padding:"10px"}}><Icon name="plus" size={12} color="#00579B"/>Add hospital</button>
            </div>

            <div className="adm-card" style={{padding:"22px"}}>
              <div style={{font:"700 12px var(--font-display)", color:"var(--kmed-navy)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:14}}>Internal notes</div>
              <div style={{padding:"14px 16px", background:"var(--kmed-bg-soft)", borderRadius:12, font:"400 13px/1.6 var(--font-body)", marginBottom:12}}>
                <div style={{font:"700 12px var(--font-body)", marginBottom:4}}>M. Lee · 1h ago</div>
                Patient asked about rosacea protocols specifically — flagged Lumina because they have a sensitive-skin track record. Estimate request scoped to conservative laser only.
              </div>
              <textarea placeholder="Add a note (visible to ops team only)..." style={{width:"100%", border:"1.5px solid var(--border-input)", borderRadius:10, padding:"10px 14px", font:"400 13px var(--font-body)", outline:"none", resize:"vertical", minHeight:80}}></textarea>
            </div>

            <div className="adm-card" style={{padding:"22px", background:"linear-gradient(180deg, var(--kmed-pink-warm), #fff)"}}>
              <div style={{font:"700 12px var(--font-body)", color:"var(--kmed-navy)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:8}}>Compliance</div>
              <div style={{font:"400 13px/1.6 var(--font-body)", color:"var(--text-secondary)", marginBottom:10}}>Marketing communications opt-out received. Do not include in newsletters or campaigns.</div>
              <a href="#" className="btn btn--text" style={{fontSize:12, padding:0}}>View consent log →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { AdminLeadListPage, AdminLeadDetailPage });
