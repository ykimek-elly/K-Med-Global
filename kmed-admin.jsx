// kmed-admin.jsx — Admin Lead List + Lead Detail

const T_ADMIN = {
  en: {
    // Sidebar
    brandTitle: "K-Med Admin",
    brandSub: "Care Operations",
    grpWorkspace: "Workspace", grpNetwork: "Network", grpReporting: "Reporting",
    navDash: "Dashboard", navLeads: "Leads", navCases: "Active cases", navSched: "Scheduling",
    navHosp: "Hospitals", navDocs: "Doctors", navTreat: "Treatments",
    navReports: "Reports", navFin: "Finance",
    needHelp: "Need help?",
    helpDesc: "Ops handbook, SLAs, escalation tree.",
    openHandbook: "Open handbook →",

    // Lead list top
    listTitle: "Leads",
    listSub: "248 inquiries · 17 awaiting first response",
    last30: "Last 30 days",
    exportCsv: "Export CSV",
    newLead: "New lead",

    // Stats
    statNew: "New (last 24h)", statNewDelta: "+24% vs prev day",
    statReview: "In review", statReviewDelta: "+8% vs prev wk",
    statMatched: "Matched", statMatchedDelta: "+12% vs prev wk",
    statAvg: "Avg. response time", statAvgVal: "4h 12m", statAvgDelta: "−18% vs prev wk",

    // Filter bar
    searchPh: "Search by patient name, email, treatment...",
    fltStatus: "Status: All", fltTreat: "Treatment: All", fltAssn: "Assignee: All", fltMore: "More filters",

    // Table headers
    thPatient: "Patient", thTreat: "Treatment interest", thBudget: "Budget", thStatus: "Status", thAssigned: "Assigned to", thReceived: "Received",

    // Status pills
    pNew: "New", pReview: "In review", pMatched: "Matched", pScheduled: "Scheduled", pClosed: "Closed",
    unassigned: "Unassigned",

    // Treatments
    trDerm: "Dermatology & K-Beauty",
    trScreen: "Health Screening",
    trOnc2: "Oncology Second Opinion",
    trKnee: "Knee Replacement",
    trLasik: "LASIK",
    trPlasticConsult: "Plastic Surgery Consult",
    trFert: "Fertility / IVF",
    trSpine: "Spine Surgery",
    trDental: "Dental Implants",

    // Countries
    cJp: "Japan", cUs: "USA", cTw: "Taiwan", cCn: "China", cRu: "Russia", cUk: "UK", cFr: "France", cMx: "Mexico",

    // Time
    t15min: "15 min ago", t1hr: "1 hr ago", t2hr: "2 hr ago", t3hr: "3 hr ago", t5hr: "5 hr ago",
    t1day: "1 day ago", t2days: "2 days ago", t3days: "3 days ago",

    // Coordinators
    coJp: "J. Park", coMl: "M. Lee", coHc: "H. Choi", coSh: "S. Han",

    // Budget ranges
    bUnder2k: "<$2k", b2k10k: "$2k–10k", b10k30k: "$10k–30k", b30kp: "$30k+",

    pagShowing: "Showing 1–10 of 248",

    // Detail
    detCrumbLeads: "Leads",
    detCrumbPatient: "Sakura Tanaka · #LD-20260508-0421",
    detName: "Sakura Tanaka",
    detAgeFlag: "· 32 · 🇯🇵",
    detLeadId: "Lead #LD-20260508-0421 · Created yesterday 16:42 KST",
    btnMsg: "Message patient",
    btnReassign: "Reassign",
    btnMarkMatched: "Mark as matched",

    summTitle: "Inquiry summary",
    summEdit: "Edit",
    sd1L: "Treatment focus", sd1V: "Dermatology & K-Beauty",
    sd2L: "Budget range", sd2V: "$2,000 – $10,000",
    sd3L: "Travel window", sd3V: "22 May – 28 May 2026",
    sd4L: "Length of stay", sd4V: "5 days",
    sd5L: "Companion", sd5V: "1 (spouse)",
    sd6L: "Language", sd6V: "English / 日本語",
    sd7L: "Source", sd7V: "Organic · jp.kmedglobal.com",
    sd8L: "Consent", sd8V: "Privacy ✓ · Marketing ✗",
    patientNoteTitle: "Patient note",
    patientNote: "\"Pigmentation around cheeks, sensitive skin, considering laser toning during a 5-day Seoul trip in late May. Rosacea history — prefer conservative protocols only.\"",

    activity: "Activity",
    ev1Title: "Estimate sent", ev1Who: "Lumina Dermatology Clinic", ev1When: "Today · 14:32 KST", ev1Body: "Itemized estimate USD 1,840–2,260 sent. Awaiting patient confirmation.",
    ev2Title: "Records reviewed", ev2Who: "Dr. Ji-won Park (Lumina Derm)", ev2When: "Today · 11:08 KST", ev2Body: "Skin photos and history reviewed. Recommends conservative laser toning + HIFU evaluation on arrival.",
    ev3Title: "Documents uploaded", ev3Who: "Patient", ev3When: "Today · 09:21 KST", ev3Body: "3 photos, 1 PDF (allergy history) uploaded.",
    ev4Title: "Coordinator assigned", ev4Who: "J. Park · Care Coordinator", ev4When: "Yesterday · 16:48 KST", ev4Body: "Routed to dermatology pod. SLA: first reply within 6h.",
    ev5Title: "Inquiry received", ev5Who: "K-Med web · Get Matched", ev5When: "Yesterday · 16:42 KST", ev5Body: "5-step form completed. Source: organic search (jp.kmedglobal.com).",

    docsTitle: "Documents · 4",
    docUpload: "Upload",

    asgnTitle: "Assignment",
    asgnName: "J. Park",
    asgnRole: "Care Coordinator · Dermatology",
    asgnPodL: "Pod", asgnPodV: "Dermatology · Seoul",
    asgnSlaL: "SLA",
    asgnOnTrack: "On track",
    asgnNext: "Next response in 4h 12m",

    matchedTitle: "Matched hospitals · 2",
    m1: "Lumina Dermatology Clinic", m1St: "Estimate sent",
    m2: "Seoul Skin Institute", m2St: "Awaiting review",
    addHospital: "Add hospital",

    notesTitle: "Internal notes",
    note1Who: "M. Lee · 1h ago",
    note1: "Patient asked about rosacea protocols specifically — flagged Lumina because they have a sensitive-skin track record. Estimate request scoped to conservative laser only.",
    notePh: "Add a note (visible to ops team only)...",

    compliance: "Compliance",
    complianceBody: "Marketing communications opt-out received. Do not include in newsletters or campaigns.",
    consentLog: "View consent log →",
  },
  ko: {
    brandTitle: "K-Med 어드민",
    brandSub: "케어 운영",
    grpWorkspace: "워크스페이스", grpNetwork: "네트워크", grpReporting: "리포팅",
    navDash: "대시보드", navLeads: "리드", navCases: "진행 중 사례", navSched: "일정 관리",
    navHosp: "의료기관", navDocs: "의료진", navTreat: "치료 항목",
    navReports: "리포트", navFin: "재무",
    needHelp: "도움이 필요하신가요?",
    helpDesc: "운영 매뉴얼·SLA·에스컬레이션 트리.",
    openHandbook: "매뉴얼 열기 →",

    listTitle: "리드",
    listSub: "문의 248건 · 첫 응답 대기 17건",
    last30: "최근 30일",
    exportCsv: "CSV 내보내기",
    newLead: "신규 리드",

    statNew: "신규 (24시간)", statNewDelta: "전일 +24%",
    statReview: "검토 중", statReviewDelta: "전주 +8%",
    statMatched: "매칭", statMatchedDelta: "전주 +12%",
    statAvg: "평균 응답 시간", statAvgVal: "4시간 12분", statAvgDelta: "전주 −18%",

    searchPh: "환자명·이메일·치료 항목으로 검색...",
    fltStatus: "상태: 전체", fltTreat: "치료: 전체", fltAssn: "담당자: 전체", fltMore: "추가 필터",

    thPatient: "환자", thTreat: "관심 치료", thBudget: "예산", thStatus: "상태", thAssigned: "담당자", thReceived: "접수",

    pNew: "신규", pReview: "검토 중", pMatched: "매칭", pScheduled: "예약", pClosed: "종료",
    unassigned: "미배정",

    trDerm: "피부과·K-뷰티",
    trScreen: "건강검진",
    trOnc2: "암 진단 2차 소견",
    trKnee: "무릎 인공관절",
    trLasik: "라식",
    trPlasticConsult: "성형외과 상담",
    trFert: "난임·IVF",
    trSpine: "척추 수술",
    trDental: "치과 임플란트",

    cJp: "일본", cUs: "미국", cTw: "대만", cCn: "중국", cRu: "러시아", cUk: "영국", cFr: "프랑스", cMx: "멕시코",

    t15min: "15분 전", t1hr: "1시간 전", t2hr: "2시간 전", t3hr: "3시간 전", t5hr: "5시간 전",
    t1day: "1일 전", t2days: "2일 전", t3days: "3일 전",

    coJp: "박지원", coMl: "이민서", coHc: "최현", coSh: "한수진",

    bUnder2k: "<$2k", b2k10k: "$2k–10k", b10k30k: "$10k–30k", b30kp: "$30k+",

    pagShowing: "248건 중 1~10건 표시",

    detCrumbLeads: "리드",
    detCrumbPatient: "Sakura Tanaka · #LD-20260508-0421",
    detName: "Sakura Tanaka",
    detAgeFlag: "· 32세 · 🇯🇵",
    detLeadId: "리드 #LD-20260508-0421 · 어제 16:42 KST 접수",
    btnMsg: "환자에게 메시지",
    btnReassign: "담당 변경",
    btnMarkMatched: "매칭 완료로 표시",

    summTitle: "문의 요약",
    summEdit: "수정",
    sd1L: "관심 진료", sd1V: "피부과·K-뷰티",
    sd2L: "예산 범위", sd2V: "$2,000 – $10,000",
    sd3L: "방한 일정", sd3V: "2026.05.22 – 2026.05.28",
    sd4L: "체류 기간", sd4V: "5일",
    sd5L: "동반인", sd5V: "1명 (배우자)",
    sd6L: "언어", sd6V: "English / 日本語",
    sd7L: "유입 경로", sd7V: "오가닉 · jp.kmedglobal.com",
    sd8L: "동의", sd8V: "개인정보 ✓ · 마케팅 ✗",
    patientNoteTitle: "환자 메모",
    patientNote: "\"양 볼 색소 침착, 민감성 피부, 5월 말 서울 방문 일정 중 5일간 레이저 토닝 검토 중. 주사 병력 있음 — 보수적 프로토콜만 선호.\"",

    activity: "활동 내역",
    ev1Title: "견적 발송", ev1Who: "루미나 피부과 클리닉", ev1When: "오늘 · 14:32 KST", ev1Body: "USD 1,840~2,260 항목별 견적 발송. 환자 확인 대기 중.",
    ev2Title: "기록 검토", ev2Who: "박지원 원장 (루미나 피부과)", ev2When: "오늘 · 11:08 KST", ev2Body: "피부 사진과 병력 검토. 보수적 레이저 토닝 + 도착 후 HIFU 평가 권장.",
    ev3Title: "서류 업로드", ev3Who: "환자", ev3When: "오늘 · 09:21 KST", ev3Body: "사진 3장, PDF 1건 (알레르기 병력) 업로드.",
    ev4Title: "코디네이터 배정", ev4Who: "박지원 · 케어 코디네이터", ev4When: "어제 · 16:48 KST", ev4Body: "피부과 팟으로 라우팅. SLA: 첫 응답 6시간 이내.",
    ev5Title: "문의 접수", ev5Who: "K-Med 웹 · 매칭 신청", ev5When: "어제 · 16:42 KST", ev5Body: "5단계 폼 작성 완료. 유입: 오가닉 검색 (jp.kmedglobal.com).",

    docsTitle: "서류 · 4",
    docUpload: "업로드",

    asgnTitle: "담당",
    asgnName: "박지원",
    asgnRole: "케어 코디네이터 · 피부과",
    asgnPodL: "팟", asgnPodV: "피부과 · 서울",
    asgnSlaL: "SLA",
    asgnOnTrack: "정상",
    asgnNext: "다음 응답까지 4시간 12분",

    matchedTitle: "매칭 의료기관 · 2",
    m1: "루미나 피부과 클리닉", m1St: "견적 발송",
    m2: "서울 스킨 인스티튜트", m2St: "검토 대기",
    addHospital: "병원 추가",

    notesTitle: "내부 메모",
    note1Who: "이민서 · 1시간 전",
    note1: "환자가 주사 프로토콜에 대해 구체적으로 문의. 민감성 피부 진료 이력이 있는 루미나로 안내. 견적은 보수적 레이저로만 한정.",
    notePh: "메모 추가 (운영팀만 열람 가능)...",

    compliance: "컴플라이언스",
    complianceBody: "마케팅 수신 거부. 뉴스레터·캠페인에서 제외.",
    consentLog: "동의 이력 보기 →",
  },
};
window.T_ADMIN = T_ADMIN;

const AdmSide = ({ active = "leads" }) => {
  const t = tk(T_ADMIN, useKmedLang());
  const items = [
    { g:t.grpWorkspace, items:[
      {id:"dash",  l:t.navDash,  i:"home",   c:""},
      {id:"leads", l:t.navLeads, i:"user",   c:"248"},
      {id:"cases", l:t.navCases, i:"file",   c:"42"},
      {id:"sched", l:t.navSched, i:"cal",    c:"17"},
    ]},
    { g:t.grpNetwork, items:[
      {id:"hosp",  l:t.navHosp,  i:"medkit",  c:""},
      {id:"docs",  l:t.navDocs,  i:"award",   c:""},
      {id:"treat", l:t.navTreat, i:"sparkle", c:""},
    ]},
    { g:t.grpReporting, items:[
      {id:"rep", l:t.navReports, i:"grid",  c:""},
      {id:"fin", l:t.navFin,     i:"money", c:""},
    ]},
  ];
  return (
    <aside className="adm-side">
      <div className="adm-side__brand">
        <span className="kh__logo-mark" style={{width:34, height:34, fontSize:16, borderRadius:9}}>K</span>
        <div>
          <div style={{font:"900 16px var(--font-display)", color:"var(--kmed-navy)", lineHeight:1}}>{t.brandTitle}</div>
          <div style={{font:"400 11px var(--font-ui)", color:"var(--text-secondary)", marginTop:2}}>{t.brandSub}</div>
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
        <div style={{font:"700 13px var(--font-body)", marginBottom:4}}>{t.needHelp}</div>
        <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)", marginBottom:10}}>{t.helpDesc}</div>
        <a href="#" className="btn btn--text" style={{fontSize:12, padding:0}}>{t.openHandbook}</a>
      </div>
    </aside>
  );
};

const AdminLeadListPage = ({ bp = "desktop" }) => {
  const t = tk(T_ADMIN, useKmedLang());
  const rows = [
    { n:"Sakura Tanaka",  e:"s.tanaka@example.com",  c:t.cJp, flag:"🇯🇵", t:t.trDerm,            b:t.b2k10k,  st:"new",       a:t.unassigned, d:t.t15min },
    { n:"David Liu",      e:"david.l@example.com",   c:t.cUs, flag:"🇺🇸", t:t.trScreen,          b:t.b2k10k,  st:"review",    a:t.coJp,       d:t.t1hr },
    { n:"Wei Chen",       e:"wei.c@example.com",     c:t.cTw, flag:"🇹🇼", t:t.trDerm,            b:t.bUnder2k,st:"matched",   a:t.coMl,       d:t.t2hr },
    { n:"Mei Liang",      e:"m.liang@example.com",   c:t.cCn, flag:"🇨🇳", t:t.trOnc2,            b:t.b10k30k, st:"scheduled", a:t.coHc,       d:t.t3hr },
    { n:"Anna Romanova",  e:"a.romanova@example.com",c:t.cRu, flag:"🇷🇺", t:t.trKnee,            b:t.b10k30k, st:"matched",   a:t.coJp,       d:t.t5hr },
    { n:"James Whitlock", e:"j.whit@example.com",    c:t.cUk, flag:"🇬🇧", t:t.trLasik,           b:t.bUnder2k,st:"closed",    a:t.coSh,       d:t.t1day },
    { n:"Yuki Mori",      e:"y.mori@example.com",    c:t.cJp, flag:"🇯🇵", t:t.trPlasticConsult,  b:t.b2k10k,  st:"new",       a:t.unassigned, d:t.t1day },
    { n:"Lin Zhao",       e:"l.zhao@example.com",    c:t.cCn, flag:"🇨🇳", t:t.trFert,            b:t.b10k30k, st:"review",    a:t.coMl,       d:t.t2days },
    { n:"Sophie Martin",  e:"sophie.m@example.com",  c:t.cFr, flag:"🇫🇷", t:t.trSpine,           b:t.b30kp,   st:"matched",   a:t.coHc,       d:t.t2days },
    { n:"Carlos Mendez",  e:"c.mendez@example.com",  c:t.cMx, flag:"🇲🇽", t:t.trDental,          b:t.b2k10k,  st:"closed",    a:t.coSh,       d:t.t3days },
  ];
  const stPill = (st) => {
    const m = { new:t.pNew, review:t.pReview, matched:t.pMatched, scheduled:t.pScheduled, closed:t.pClosed };
    return <span className={"pill pill--"+st}>{m[st]}</span>;
  };
  return (
    <div className="adm" data-bp={bp} data-screen-label={"08 Admin · Leads " + bp}>
      <AdmSide active="leads"/>
      <div className="adm-main">
        <div className="adm-top">
          <div>
            <h1 className="adm-top__h">{t.listTitle}</h1>
            <div className="adm-top__sub">{t.listSub}</div>
          </div>
          <div style={{display:"flex", alignItems:"center", gap:12}}>
            <div style={{display:"flex", alignItems:"center", gap:8, padding:"8px 14px", borderRadius:999, background:"#fff", border:"1px solid var(--kmed-line)", font:"400 13px var(--font-body)"}}>
              <Icon name="cal" size={14} color="rgba(0,0,0,0.5)"/> {t.last30} <Icon name="chevdown" size={12} color="rgba(0,0,0,0.4)"/>
            </div>
            <button className="btn btn--ghost"><Icon name="download" size={14} color="#00579B"/>{t.exportCsv}</button>
            <button className="btn btn--primary" style={{padding:"10px 20px", fontSize:14}}><Icon name="plus" size={14} color="#fff"/>{t.newLead}</button>
          </div>
        </div>

        <div className="adm-stats" style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:16, marginBottom:24}}>
          {[
            {l:t.statNew,     v:"17",         d:t.statNewDelta},
            {l:t.statReview,  v:"42",         d:t.statReviewDelta},
            {l:t.statMatched, v:"31",         d:t.statMatchedDelta},
            {l:t.statAvg,     v:t.statAvgVal, d:t.statAvgDelta, down: false},
          ].map((s,i)=>(
            <div key={i} className="adm-stat">
              <div className="adm-stat__lbl">{s.l}</div>
              <div className="adm-stat__val">{s.v}</div>
              <div className={"adm-stat__delta" + (s.down?" is-down":"")}>{s.d}</div>
            </div>
          ))}
        </div>

        <div className="adm-card">
          <div className="adm-filterbar">
            <div className="adm-search">
              <Icon name="search" size={16} color="rgba(0,0,0,0.5)"/>
              <span>{t.searchPh}</span>
            </div>
            <span style={{display:"inline-flex", alignItems:"center", gap:6, padding:"8px 14px", border:"1px solid var(--kmed-line)", borderRadius:8, font:"700 13px var(--font-body)", color:"var(--text-primary)", cursor:"pointer", background:"#fff"}}>{t.fltStatus} <Icon name="chevdown" size={12}/></span>
            <span style={{display:"inline-flex", alignItems:"center", gap:6, padding:"8px 14px", border:"1px solid var(--kmed-line)", borderRadius:8, font:"700 13px var(--font-body)", color:"var(--text-primary)", cursor:"pointer", background:"#fff"}}>{t.fltTreat} <Icon name="chevdown" size={12}/></span>
            <span style={{display:"inline-flex", alignItems:"center", gap:6, padding:"8px 14px", border:"1px solid var(--kmed-line)", borderRadius:8, font:"700 13px var(--font-body)", color:"var(--text-primary)", cursor:"pointer", background:"#fff"}}>{t.fltAssn} <Icon name="chevdown" size={12}/></span>
            <span style={{display:"inline-flex", alignItems:"center", gap:6, padding:"8px 14px", border:"1px solid var(--kmed-line)", borderRadius:8, font:"700 13px var(--font-body)", color:"var(--text-primary)", cursor:"pointer", background:"#fff"}}><Icon name="filter" size={12}/>{t.fltMore}</span>
          </div>
          <table className="adm-table">
            <thead>
              <tr>
                <th style={{width:36}}><span style={{width:16, height:16, borderRadius:4, border:"1.5px solid var(--border-input)", display:"inline-block"}}></span></th>
                <th>{t.thPatient}</th>
                <th>{t.thTreat}</th>
                <th>{t.thBudget}</th>
                <th>{t.thStatus}</th>
                <th>{t.thAssigned}</th>
                <th>{t.thReceived}</th>
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
                  <td>{r.a === t.unassigned ? <span style={{color:"var(--text-disabled)", fontStyle:"italic"}}>{r.a}</span> : r.a}</td>
                  <td style={{color:"var(--text-secondary)"}}>{r.d}</td>
                  <td style={{textAlign:"right"}}><span style={{cursor:"pointer", padding:6}}><Icon name="dots" size={16} color="rgba(0,0,0,0.4)"/></span></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 20px", borderTop:"1px solid var(--kmed-line)", font:"400 13px var(--font-body)", color:"var(--text-secondary)"}}>
            <div>{t.pagShowing}</div>
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
  const t = tk(T_ADMIN, useKmedLang());
  const timeline = [
    {t:t.ev1Title, who:t.ev1Who, when:t.ev1When, body:t.ev1Body, icon:"file",   c:"var(--kmed-green)"},
    {t:t.ev2Title, who:t.ev2Who, when:t.ev2When, body:t.ev2Body, icon:"award",  c:"var(--kmed-aqua)"},
    {t:t.ev3Title, who:t.ev3Who, when:t.ev3When, body:t.ev3Body, icon:"file",   c:"var(--kmed-pink)"},
    {t:t.ev4Title, who:t.ev4Who, when:t.ev4When, body:t.ev4Body, icon:"user",   c:"var(--kmed-aqua)"},
    {t:t.ev5Title, who:t.ev5Who, when:t.ev5When, body:t.ev5Body, icon:"plane",  c:"rgba(0,0,0,0.4)"},
  ];
  const summary = [
    {l:t.sd1L, v:t.sd1V},
    {l:t.sd2L, v:t.sd2V},
    {l:t.sd3L, v:t.sd3V},
    {l:t.sd4L, v:t.sd4V},
    {l:t.sd5L, v:t.sd5V},
    {l:t.sd6L, v:t.sd6V},
    {l:t.sd7L, v:t.sd7V},
    {l:t.sd8L, v:t.sd8V},
  ];
  return (
    <div className="adm" data-bp={bp} data-screen-label={"09 Admin · Lead Detail " + bp}>
      <AdmSide active="leads"/>
      <div className="adm-main">
        <div style={{font:"400 13px var(--font-body)", color:"var(--text-secondary)", marginBottom:14}}>
          <a href="#" onClick={e=>e.preventDefault()} style={{color:"var(--kmed-navy)", textDecoration:"none", fontWeight:700}}>{t.detCrumbLeads}</a>
          <span style={{margin:"0 8px", color:"var(--text-disabled)"}}>›</span>
          <span style={{color:"var(--text-primary)", fontWeight:700}}>{t.detCrumbPatient}</span>
        </div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:24}}>
          <div style={{display:"flex", alignItems:"center", gap:18}}>
            <div style={{width:64, height:64, borderRadius:"50%", background:"linear-gradient(135deg, var(--kmed-pink-warm), var(--kmed-aqua-soft))", color:"var(--kmed-navy)", font:"900 22px var(--font-display)", display:"flex", alignItems:"center", justifyContent:"center"}}>ST</div>
            <div>
              <h1 className="adm-top__h" style={{fontSize:30, margin:0}}>{t.detName} <span style={{color:"var(--text-secondary)", font:"400 18px var(--font-display)"}}>{t.detAgeFlag}</span></h1>
              <div style={{display:"flex", gap:12, marginTop:6, alignItems:"center"}}>
                <span className="pill pill--review">{t.pReview}</span>
                <span style={{font:"400 13px var(--font-body)", color:"var(--text-secondary)"}}>{t.detLeadId}</span>
              </div>
            </div>
          </div>
          <div style={{display:"flex", gap:10}}>
            <button className="btn btn--ghost"><Icon name="chat" size={14} color="#00579B"/>{t.btnMsg}</button>
            <button className="btn btn--ghost"><Icon name="user" size={14} color="#00579B"/>{t.btnReassign}</button>
            <button className="btn btn--green-flat" style={{padding:"10px 20px", fontSize:13}}>{t.btnMarkMatched}</button>
          </div>
        </div>

        <div className="adm-lead-detail" style={{display:"grid", gridTemplateColumns:"1fr 360px", gap:24}}>
          <div style={{display:"flex", flexDirection:"column", gap:20}}>
            <div className="adm-card" style={{padding:"24px"}}>
              <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:18}}>
                <div style={{font:"700 14px var(--font-display)", color:"var(--kmed-navy)", letterSpacing:"0.08em", textTransform:"uppercase", fontSize:12}}>{t.summTitle}</div>
                <a href="#" className="btn btn--text" style={{fontSize:12}}>{t.summEdit}</a>
              </div>
              <div className="adm-summary-grid" style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:18}}>
                {summary.map(d=>(
                  <div key={d.l}>
                    <div style={{font:"700 11px var(--font-body)", color:"var(--text-disabled)", letterSpacing:"0.12em", textTransform:"uppercase"}}>{d.l}</div>
                    <div style={{font:"700 14px var(--font-body)", marginTop:4}}>{d.v}</div>
                  </div>
                ))}
              </div>
              <div style={{padding:"18px 20px", marginTop:20, background:"var(--kmed-bg-soft)", borderRadius:12, font:"400 14px/1.6 var(--font-body)", color:"var(--text-primary)"}}>
                <div style={{font:"700 12px var(--font-body)", color:"var(--text-secondary)", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:8}}>{t.patientNoteTitle}</div>
                {t.patientNote}
              </div>
            </div>

            <div className="adm-card" style={{padding:"24px"}}>
              <div style={{font:"700 12px var(--font-display)", color:"var(--kmed-navy)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:20}}>{t.activity}</div>
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

            <div className="adm-card" style={{padding:"24px"}}>
              <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16}}>
                <div style={{font:"700 12px var(--font-display)", color:"var(--kmed-navy)", letterSpacing:"0.12em", textTransform:"uppercase"}}>{t.docsTitle}</div>
                <button className="btn btn--ghost" style={{padding:"6px 14px", fontSize:12}}><Icon name="plus" size={12} color="#00579B"/>{t.docUpload}</button>
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

          <div style={{display:"flex", flexDirection:"column", gap:20}}>
            <div className="adm-card" style={{padding:"22px"}}>
              <div style={{font:"700 12px var(--font-display)", color:"var(--kmed-navy)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:14}}>{t.asgnTitle}</div>
              <div style={{display:"flex", alignItems:"center", gap:12, padding:"12px 0", borderBottom:"1px solid var(--kmed-line)"}}>
                <div style={{width:40, height:40, borderRadius:"50%", background:"linear-gradient(135deg, var(--kmed-aqua), var(--kmed-navy))", color:"#fff", font:"700 13px var(--font-body)", display:"flex", alignItems:"center", justifyContent:"center"}}>JP</div>
                <div>
                  <div style={{font:"700 14px var(--font-body)"}}>{t.asgnName}</div>
                  <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>{t.asgnRole}</div>
                </div>
              </div>
              <div style={{padding:"12px 0"}}>
                <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>{t.asgnPodL}</div>
                <div style={{font:"700 14px var(--font-body)", marginTop:4}}>{t.asgnPodV}</div>
              </div>
              <div style={{padding:"12px 0", borderTop:"1px solid var(--kmed-line)"}}>
                <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>{t.asgnSlaL}</div>
                <div style={{display:"flex", alignItems:"center", gap:8, marginTop:4}}>
                  <span style={{padding:"3px 10px", borderRadius:999, background:"rgba(76,175,80,0.14)", color:"var(--kmed-green-dark)", font:"700 11px var(--font-body)"}}>{t.asgnOnTrack}</span>
                  <span style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>{t.asgnNext}</span>
                </div>
              </div>
            </div>

            <div className="adm-card" style={{padding:"22px"}}>
              <div style={{font:"700 12px var(--font-display)", color:"var(--kmed-navy)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:14}}>{t.matchedTitle}</div>
              {[
                {i:"LD", n:t.m1, st:t.m1St, c:"var(--kmed-green)"},
                {i:"SS", n:t.m2, st:t.m2St, c:"var(--kmed-aqua)"},
              ].map((h,i)=>(
                <div key={i} style={{display:"flex", gap:12, alignItems:"center", padding:"12px 0", borderBottom: i===0?"1px solid var(--kmed-line)":"none"}}>
                  <div style={{width:42, height:42, borderRadius:10, background:"linear-gradient(135deg, var(--kmed-navy), var(--kmed-aqua))", color:"#fff", font:"900 14px var(--font-display)", display:"flex", alignItems:"center", justifyContent:"center"}}>{h.i}</div>
                  <div style={{flex:1, minWidth:0}}>
                    <div style={{font:"700 13px var(--font-body)", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>{h.n}</div>
                    <div style={{font:"400 11px var(--font-body)", color: h.c}}>● {h.st}</div>
                  </div>
                </div>
              ))}
              <button className="btn btn--ghost" style={{width:"100%", justifyContent:"center", marginTop:14, padding:"10px"}}><Icon name="plus" size={12} color="#00579B"/>{t.addHospital}</button>
            </div>

            <div className="adm-card" style={{padding:"22px"}}>
              <div style={{font:"700 12px var(--font-display)", color:"var(--kmed-navy)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:14}}>{t.notesTitle}</div>
              <div style={{padding:"14px 16px", background:"var(--kmed-bg-soft)", borderRadius:12, font:"400 13px/1.6 var(--font-body)", marginBottom:12}}>
                <div style={{font:"700 12px var(--font-body)", marginBottom:4}}>{t.note1Who}</div>
                {t.note1}
              </div>
              <textarea placeholder={t.notePh} style={{width:"100%", border:"1.5px solid var(--border-input)", borderRadius:10, padding:"10px 14px", font:"400 13px var(--font-body)", outline:"none", resize:"vertical", minHeight:80}}></textarea>
            </div>

            <div className="adm-card" style={{padding:"22px", background:"linear-gradient(180deg, var(--kmed-pink-warm), #fff)"}}>
              <div style={{font:"700 12px var(--font-body)", color:"var(--kmed-navy)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:8}}>{t.compliance}</div>
              <div style={{font:"400 13px/1.6 var(--font-body)", color:"var(--text-secondary)", marginBottom:10}}>{t.complianceBody}</div>
              <a href="#" className="btn btn--text" style={{fontSize:12, padding:0}}>{t.consentLog}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { AdminLeadListPage, AdminLeadDetailPage });
