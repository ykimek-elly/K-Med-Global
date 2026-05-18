// kmed-content.jsx — Why Korea + Stories pages

const T_CONTENT = {
  en: {
    // Why Korea
    wkCrumbHome: "Home",
    wkCrumbWhy: "Why Korea",
    wkEyebrow: "Why Korea for medical care",
    wkTitleA: "World-class care, ",
    wkTitleBr: true,
    wkTitleB: "at a fraction of the wait.",
    wkSub: "Korea ranks among the leading destinations for outbound medical travel — combining tertiary-level hospital infrastructure, fast scheduling, and strong patient-safety oversight under the Ministry of Health & Welfare.",
    wkCtaMatch: "Get matched",
    wkCtaHospitals: "See partner hospitals →",
    stat1N: "#3", stat1L: "Asia for outbound medical destinations",
    stat2N: "600k+", stat2L: "International patients hosted in 2024",
    stat3N: "34", stat3L: "Specialties available through K-Med",
    stat4N: "24h", stat4L: "Average response from inquiry to coordinator",

    reasonsEyebrow: "What sets Korea apart",
    reasonsTitle: "Six reasons international patients choose Korea",
    reasonsLead: "Reasons we hear from patients themselves — not marketing claims.",
    r1t: "Tertiary-level training", r1d: "Korea's leading hospitals are JCI-accredited research institutions, with surgeons trained on robotic and minimally-invasive systems used at MD Anderson, Mayo, and Cleveland Clinic.",
    r2t: "Strong patient-safety regulation", r2d: "All partner hospitals carry malpractice coverage and operate under the Medical Service Act. International patients are protected by the same standards as domestic patients.",
    r3t: "Research-led aesthetics", r3d: "Korean dermatology and aesthetic medicine pair cosmetic technique with rigorous medical training — protocols are tailored, not packaged.",
    r4t: "Transparent pricing", r4d: "Estimates are doctor-issued and itemized. No surprise charges, no automated calculators that mislead — what you receive is what the hospital bills.",
    r5t: "Fast access, short waits", r5d: "Average time from inquiry to first consult is 7 days. Most non-emergency procedures are scheduled within 2 weeks of arrival.",
    r6t: "Built for international patients", r6d: "Dedicated international wings at most partner hospitals: live medical interpretation, multilingual coordinators, and cultural-fit care.",

    cmpEyebrow: "A practical comparison",
    cmpTitle: "Common procedures, indicative ranges*",
    cmpFootnote: "*Ranges are indicative, sourced from public hospital pricing data. Final estimates are issued by partner hospitals after a doctor reviews your case. Outcomes vary individually.",
    thProcedure: "Procedure", thUsa: "USA estimate", thUk: "UK estimate", thKorea: "Korea via K-Med", thWait: "Wait time",
    pr1: "Premium full-body screening", pr2: "Spine surgery (1 level)", pr3: "Knee replacement", pr4: "LASIK (both eyes)", pr5: "Dental implant (per tooth)",
    waitLt1w: "< 1 week", wait12w: "1–2 weeks",

    accEyebrow: "Accreditations & oversight",
    accTitle: "Care backed by international standards",
    a1Label: "JCI", a1Title: "Joint Commission International", a1Desc: "42 of our partners are JCI-accredited.",
    a2Label: "MoHW", a2Title: "Ministry of Health & Welfare", a2Desc: "All partners are licensed under Korean medical law.",
    a3Label: "ISO", a3Title: "ISO 9001 / 27001", a3Desc: "Quality and information-security certified.",
    a4Label: "KHIDI", a4Title: "Korea Health Industry Dev. Inst.", a4Desc: "K-Med is a registered international patient agency.",

    // Stories
    stCrumbHome: "Home", stCrumbStories: "Stories",
    stEyebrow: "Patient stories",
    stTitle: "In their own words",
    stSub: "Real reflections from patients who traveled for care. Names are real where shared with consent; some have been shortened. We do not display before/after imagery.",
    pillAll: "All stories", pillDerm: "Dermatology", pillOnc: "Oncology", pillOrtho: "Orthopedics", pillScreen: "Health Screening", pillPlast: "Plastic Surgery", pillCardio: "Cardiology", pillDent: "Dental",

    s1Country: "Tokyo, Japan", s1Treat: "Spine Surgery", s1Days: "14-day stay",
    s1Quote: "After two years of consultations at home, I came to Seoul for a second opinion. The coordinator translated every step — even the operating-room intake. Six months on, I'm back to my routine.",
    s2Country: "San Francisco, USA", s2Treat: "Health Screening", s2Days: "3-day stay",
    s2Quote: "I came for a 2-day full-body check-up and left with answers I'd waited five years for. The cardiology team noticed something my home doctors hadn't flagged.",
    s3Country: "Taipei, Taiwan", s3Treat: "Dermatology", s3Days: "5-day stay",
    s3Quote: "My dermatology plan was tailored to my skin tone and my flight schedule. The 30-day teleconsult after I went home was the part I valued most.",
    s4Country: "Shanghai, China", s4Treat: "Oncology Second Opinion", s4Days: "6-day stay",
    s4Quote: "I'd been told I had three options at home. The oncology board at the partner hospital reviewed my scans across two days and proposed a fourth one. K-Med arranged everything — including the records translation.",
    s5Country: "Moscow, Russia", s5Treat: "Knee Replacement", s5Days: "16-day stay",
    s5Quote: "I was nervous about traveling for surgery, but the concierge picked me up at the airport, the room was set up for someone with mobility issues, and rehab planning began before discharge.",
    s6Country: "London, UK", s6Treat: "LASIK", s6Days: "7-day stay",
    s6Quote: "Booked, flown, treated, sightseeing — all within a week. The follow-up Zoom call was thorough and the doctor knew my case immediately. A route I'd suggest to others in their thirties.",
    inCareOf: "in care of K-Med Global",

    rvEyebrow: "Verified by independent reviews",
    rvScore: "4.8 / 5 average",
    rvMeta: "Across 1,247 patient reviews · 28 countries",
    rv1L: "Coordinator responsiveness",
    rv2L: "Hospital quality",
    rv3L: "Travel & concierge",
    rv4L: "After-care follow-up",
    rvShare: "Share your story",
    rvNote: "Past patient? We'd love to hear how it went.",
  },
  ko: {
    wkCrumbHome: "홈",
    wkCrumbWhy: "한국 진료 안내",
    wkEyebrow: "한국 의료를 선택하는 이유",
    wkTitleA: "전문 수준의 진료, ",
    wkTitleBr: true,
    wkTitleB: "짧은 대기 시간.",
    wkSub: "한국은 글로벌 의료관광의 주요 국가로 자리 잡고 있습니다. 상급종합 수준의 병원 인프라, 빠른 예약, 보건복지부의 환자안전 감독이 결합되어 있습니다.",
    wkCtaMatch: "매칭 신청",
    wkCtaHospitals: "파트너 의료기관 보기 →",
    stat1N: "3위", stat1L: "아시아 의료관광 국가",
    stat2N: "60만+", stat2L: "2024년 외국인 환자 수",
    stat3N: "34", stat3L: "K-Med 진료 분야",
    stat4N: "24h", stat4L: "코디네이터 평균 응답",

    reasonsEyebrow: "한국 의료의 특징",
    reasonsTitle: "외국인 환자가 한국을 선택하는 6가지 이유",
    reasonsLead: "환자분들이 직접 말씀해주신 이유 — 마케팅 카피가 아닌 실제 후기.",
    r1t: "상급종합 수준의 의료 교육", r1d: "한국의 주요 병원은 JCI 인증 연구기관으로, MD Anderson·Mayo·Cleveland Clinic에서 사용하는 로봇 수술·최소 침습 시스템 훈련을 받은 외과의가 진료합니다.",
    r2t: "환자 안전 규제", r2d: "모든 파트너 의료기관은 의료과실 배상보험에 가입되어 있으며 의료법에 따라 운영됩니다. 외국인 환자도 자국 환자와 동일한 기준으로 보호됩니다.",
    r3t: "연구 기반 미용의학", r3d: "한국 피부과·미용의학은 미용 술기에 의학 교육을 결합합니다. 프로토콜은 패키지가 아닌 환자 맞춤형으로 설계됩니다.",
    r4t: "투명한 가격", r4d: "견적은 전문의가 항목별로 발행합니다. 추가 비용 없음, 오해를 부르는 자동 계산기 없음 — 전달받은 견적이 곧 의료기관의 청구액입니다.",
    r5t: "빠른 접근, 짧은 대기", r5d: "문의부터 첫 상담까지 평균 7일. 응급이 아닌 시술은 대부분 도착 후 2주 이내에 일정이 잡힙니다.",
    r6t: "외국인 환자를 위한 시스템", r6d: "주요 파트너 병원은 외국인 환자 전용 진료동을 운영합니다: 의료 통역, 다국어 코디네이터, 문화 맞춤 케어.",

    cmpEyebrow: "실질적 비교",
    cmpTitle: "주요 시술 참고 견적*",
    cmpFootnote: "*공개된 병원 가격 데이터 기반 참고 견적입니다. 최종 견적은 환자 진료 기록 검토 후 파트너 병원에서 발행하며, 시술 결과는 개인차가 있을 수 있습니다.",
    thProcedure: "시술", thUsa: "미국 견적", thUk: "영국 견적", thKorea: "한국 (K-Med)", thWait: "대기 기간",
    pr1: "프리미엄 전신 건강검진", pr2: "척추 수술 (1분절)", pr3: "무릎 인공관절", pr4: "라식 (양안)", pr5: "임플란트 (1개)",
    waitLt1w: "1주 미만", wait12w: "1~2주",

    accEyebrow: "인증·감독",
    accTitle: "국제 기준에 따른 진료",
    a1Label: "JCI", a1Title: "Joint Commission International", a1Desc: "JCI 인증 파트너 42곳.",
    a2Label: "MoHW", a2Title: "보건복지부", a2Desc: "모든 파트너는 한국 의료법에 따라 면허를 보유합니다.",
    a3Label: "ISO", a3Title: "ISO 9001 / 27001", a3Desc: "품질·정보보안 인증.",
    a4Label: "KHIDI", a4Title: "한국보건산업진흥원", a4Desc: "K-Med은 외국인환자 유치업체로 등록되어 있습니다.",

    stCrumbHome: "홈", stCrumbStories: "환자 사례",
    stEyebrow: "환자 사례",
    stTitle: "환자의 목소리",
    stSub: "방한 진료를 받으신 환자분들의 후기입니다. 동의에 따라 실명을 표기하며 일부는 약식 표기합니다. 한국 의료법에 따라 치료 전후 이미지는 표시하지 않습니다.",
    pillAll: "전체", pillDerm: "피부과", pillOnc: "종양", pillOrtho: "정형외과", pillScreen: "건강검진", pillPlast: "성형외과", pillCardio: "심장혈관", pillDent: "치과",

    s1Country: "도쿄, 일본", s1Treat: "척추 수술", s1Days: "14일 일정",
    s1Quote: "2년간 자국에서 상담을 받은 후, 2차 소견을 위해 서울에 왔습니다. 코디네이터가 모든 단계를 — 수술 직전 안내까지 — 통역해주셨어요. 6개월 후 일상으로 돌아왔습니다.",
    s2Country: "샌프란시스코, 미국", s2Treat: "건강검진", s2Days: "3일 일정",
    s2Quote: "이틀 일정의 전신 검진을 받고, 5년 동안 기다려온 답을 받을 수 있었습니다. 자국에서는 발견되지 않았던 부분을 심혈관팀이 짚어주셨어요.",
    s3Country: "타이베이, 대만", s3Treat: "피부과", s3Days: "5일 일정",
    s3Quote: "제 피부 톤과 항공편 일정에 맞춰 피부과 플랜이 짜여 있었어요. 귀국 후 30일 원격 상담이 가장 가치 있었습니다.",
    s4Country: "상하이, 중국", s4Treat: "암 진단 2차 소견", s4Days: "6일 일정",
    s4Quote: "자국에서는 3가지 선택지를 안내받았습니다. 파트너 병원 종양위원회가 이틀에 걸쳐 영상을 검토한 뒤 네 번째 선택지를 제안해주셨어요. K-Med이 진료 기록 번역까지 모두 준비해주셨습니다.",
    s5Country: "모스크바, 러시아", s5Treat: "무릎 인공관절", s5Days: "16일 일정",
    s5Quote: "수술을 위해 해외 방문이 망설여졌지만, 컨시어지가 공항까지 마중을 나오셨고 거동이 불편한 환자에 맞춰 객실이 준비되어 있었습니다. 재활 계획도 퇴원 전부터 시작됐어요.",
    s6Country: "런던, 영국", s6Treat: "라식", s6Days: "7일 일정",
    s6Quote: "예약, 비행, 진료, 관광까지 일주일 내 모두 마쳤습니다. 귀국 후 줌 상담은 꼼꼼했고 의사 선생님이 제 사례를 바로 기억하셨어요. 30대 분들에게 권할 수 있는 경로라고 생각해요.",
    inCareOf: "K-Med Global 코디네이션",

    rvEyebrow: "독립 리뷰 검증",
    rvScore: "평균 4.8 / 5",
    rvMeta: "환자 후기 1,247건 · 28개국 기준",
    rv1L: "코디네이터 응답",
    rv2L: "병원 진료 품질",
    rv3L: "여행·컨시어지",
    rv4L: "사후 케어",
    rvShare: "사례 공유하기",
    rvNote: "이전에 진료받으신 분이라면, 어떠셨는지 들려주세요.",
  },
};
window.T_CONTENT = T_CONTENT;

const WhyKoreaPage = ({ bp = "desktop", drawerOpen = false }) => {
  const t = tk(T_CONTENT, useKmedLang());
  const reasons = [
    { icon:"award",   t:t.r1t, d:t.r1d },
    { icon:"shield",  t:t.r2t, d:t.r2d },
    { icon:"sparkle", t:t.r3t, d:t.r3d },
    { icon:"money",   t:t.r4t, d:t.r4d },
    { icon:"plane",   t:t.r5t, d:t.r5d },
    { icon:"chat",    t:t.r6t, d:t.r6d },
  ];
  return (
    <div className="kmed-page" data-bp={bp} data-screen-label={"05 Why Korea " + bp}>
      <Header active="korea" bp={bp} drawerOpen={drawerOpen}/>
      <section style={{position:"relative", padding:"60px 80px 80px", overflow:"hidden", background:"linear-gradient(180deg, #F5FBFE 0%, #fff 100%)"}}>
        <div style={{position:"absolute", right:-180, top:-100, width:540, height:540, borderRadius:"50%", border:"1px solid var(--kmed-aqua-soft)"}}></div>
        <div style={{position:"absolute", right:-60, top:60, width:340, height:340, borderRadius:"50%", background:"var(--gradient-soft)", opacity:.3}}></div>
        <div style={{position:"relative", display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:60, alignItems:"center"}}>
          <div>
            <div className="phero__crumbs" style={{margin:"0 0 18px"}}>
              <a href="#" onClick={e=>e.preventDefault()}>{t.wkCrumbHome}</a><span>›</span>
              <span style={{color:"var(--text-primary)", fontWeight:700}}>{t.wkCrumbWhy}</span>
            </div>
            <div className="eyebrow" style={{marginBottom:10}}>{t.wkEyebrow}</div>
            <h1 style={{font:"900 64px/1.05 var(--font-display)", letterSpacing:"-0.02em", margin:"0 0 18px"}}>
              {t.wkTitleA}<br/>{t.wkTitleB}
            </h1>
            <p style={{font:"400 19px/1.6 var(--font-body)", color:"var(--text-secondary)", margin:"0 0 28px", maxWidth:560}}>{t.wkSub}</p>
            <div style={{display:"flex", gap:16, alignItems:"center"}}>
              <button className="btn btn--primary btn--primary-lg">{t.wkCtaMatch} <Icon name="arrow" size={16} color="#fff"/></button>
              <a href="#" className="btn btn--text" style={{fontSize:16}}>{t.wkCtaHospitals}</a>
            </div>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14}}>
            {[
              {n:t.stat1N, l:t.stat1L, c:"var(--kmed-aqua)"},
              {n:t.stat2N, l:t.stat2L, c:"var(--kmed-green-dark)"},
              {n:t.stat3N, l:t.stat3L, c:"var(--kmed-pink)"},
              {n:t.stat4N, l:t.stat4L, c:"var(--kmed-navy)"},
            ].map((s,i)=>(
              <div key={i} className="surface--sm" style={{padding:"24px 22px"}}>
                <div style={{font:"900 36px var(--font-display)", letterSpacing:"-0.02em", color:s.c}}>{s.n}</div>
                <div style={{font:"400 13px/1.5 var(--font-body)", color:"var(--text-secondary)", marginTop:6}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:"32px 80px 80px"}}>
        <div style={{textAlign:"center", marginBottom:48}}>
          <div className="eyebrow">{t.reasonsEyebrow}</div>
          <h2 className="kh-title kh-title--display" style={{margin:"10px auto 14px", maxWidth:720}}>{t.reasonsTitle}</h2>
          <p className="kh-lead" style={{margin:"0 auto", textAlign:"center"}}>{t.reasonsLead}</p>
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

      <section style={{padding:"40px 80px 80px"}}>
        <div className="surface" style={{padding:"40px 48px"}}>
          <div className="eyebrow">{t.cmpEyebrow}</div>
          <h3 style={{font:"900 32px var(--font-display)", margin:"10px 0 24px", letterSpacing:"-0.01em"}}>{t.cmpTitle}</h3>
          <table style={{width:"100%", borderCollapse:"collapse"}}>
            <thead><tr style={{borderBottom:"1px solid var(--kmed-line)"}}>
              {[t.thProcedure, t.thUsa, t.thUk, t.thKorea, t.thWait].map(h=> <th key={h} style={{padding:"14px 16px", textAlign:"left", font:"700 11px var(--font-ui)", letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--text-disabled)"}}>{h}</th>)}
            </tr></thead>
            <tbody>
              {[
                [t.pr1,"$4,000 – $8,000","£3,000 – £5,500","$1,800 – $4,200",t.waitLt1w],
                [t.pr2,"$60k – $110k","£30k – £55k","$8,500 – $22,000",t.wait12w],
                [t.pr3,"$35k – $60k","£18k – £30k","$11,000 – $19,000",t.wait12w],
                [t.pr4,"$4,000 – $5,000","£3,500","$1,400 – $2,200",t.waitLt1w],
                [t.pr5,"$3,500 – $6,000","£2,000 – £3,500","$1,200 – $2,800",t.waitLt1w],
              ].map((row,i)=>(
                <tr key={i} style={{borderBottom:"1px solid var(--kmed-line)"}}>
                  {row.map((c,j)=> <td key={j} style={{padding:"18px 16px", font: j===0 ? "700 15px var(--font-body)" : "400 15px var(--font-body)", color: j===3 ? "var(--kmed-green-dark)" : (j===4 ? "var(--kmed-aqua)" : "var(--text-primary)"), fontWeight: (j===3||j===0)?700:400}}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{font:"400 12px/1.55 var(--font-body)", color:"var(--text-secondary)", marginTop:18}}>{t.cmpFootnote}</div>
        </div>
      </section>

      <section style={{padding:"0 80px 80px"}}>
        <div style={{textAlign:"center", marginBottom:36}}>
          <div className="eyebrow">{t.accEyebrow}</div>
          <h3 className="kh-title" style={{margin:"10px auto 0", maxWidth:720}}>{t.accTitle}</h3>
        </div>
        <div className="wk-stats" style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:20}}>
          {[
            {l:t.a1Label, t:t.a1Title, d:t.a1Desc},
            {l:t.a2Label, t:t.a2Title, d:t.a2Desc},
            {l:t.a3Label, t:t.a3Title, d:t.a3Desc},
            {l:t.a4Label, t:t.a4Title, d:t.a4Desc},
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
  const t = tk(T_CONTENT, useKmedLang());
  const stories = [
    { name:"Sakura T.", country:t.s1Country, flag:"JP", treat:t.s1Treat, quote:t.s1Quote, days:t.s1Days, year:"2025" },
    { name:"David L.",  country:t.s2Country, flag:"US", treat:t.s2Treat, quote:t.s2Quote, days:t.s2Days, year:"2025" },
    { name:"Wei C.",    country:t.s3Country, flag:"TW", treat:t.s3Treat, quote:t.s3Quote, days:t.s3Days, year:"2026" },
    { name:"Mei L.",    country:t.s4Country, flag:"CN", treat:t.s4Treat, quote:t.s4Quote, days:t.s4Days, year:"2025" },
    { name:"Anna R.",   country:t.s5Country, flag:"RU", treat:t.s5Treat, quote:t.s5Quote, days:t.s5Days, year:"2024" },
    { name:"James W.",  country:t.s6Country, flag:"UK", treat:t.s6Treat, quote:t.s6Quote, days:t.s6Days, year:"2026" },
  ];
  const pills = [t.pillAll, t.pillDerm, t.pillOnc, t.pillOrtho, t.pillScreen, t.pillPlast, t.pillCardio, t.pillDent];
  return (
    <div className="kmed-page" data-bp={bp} data-screen-label={"06 Stories " + bp}>
      <Header active="stories" bp={bp} drawerOpen={drawerOpen}/>
      <PageHero
        crumbs={[t.stCrumbHome, t.stCrumbStories]}
        eyebrow={t.stEyebrow}
        title={t.stTitle}
        sub={t.stSub}
      />
      <section style={{padding:"32px 80px 64px"}}>
        <div style={{display:"flex", gap:10, flexWrap:"wrap", marginBottom:32}}>
          {pills.map((p,i)=> <span key={p} className={"tagpill" + (i===0?" is-on":"")}>{p}</span>)}
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
                  <div className="story__meta">{s.days} · {t.inCareOf}</div>
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
            <div className="eyebrow">{t.rvEyebrow}</div>
            <div style={{font:"900 28px var(--font-display)", margin:"8px 0 6px", letterSpacing:"-0.01em"}}>{t.rvScore}</div>
            <div style={{font:"400 14px var(--font-body)", color:"var(--text-secondary)"}}>{t.rvMeta}</div>
          </div>
          <div style={{display:"flex", flexDirection:"column", gap:8}}>
            {[
              [t.rv1L, 96],
              [t.rv2L, 95],
              [t.rv3L, 94],
              [t.rv4L, 92],
            ].map(([l,p])=>(
              <div key={l}>
                <div style={{display:"flex", justifyContent:"space-between", font:"400 13px var(--font-body)", marginBottom:4}}><span>{l}</span><span style={{color:"var(--kmed-green-dark)", fontWeight:700}}>{p}%</span></div>
                <div style={{height:6, borderRadius:3, background:"var(--kmed-bg-soft)", overflow:"hidden"}}><div style={{height:"100%", width:`${p}%`, background:"linear-gradient(90deg, var(--kmed-aqua), var(--kmed-green))"}}></div></div>
              </div>
            ))}
          </div>
          <div style={{textAlign:"right"}}>
            <button className="btn btn--primary btn--primary-lg">{t.rvShare} <Icon name="arrow" size={16} color="#fff"/></button>
            <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)", marginTop:10}}>{t.rvNote}</div>
          </div>
        </div>
      </section>

      <Footer bp={bp}/>
    </div>
  );
};

Object.assign(window, { WhyKoreaPage, StoriesPage });
