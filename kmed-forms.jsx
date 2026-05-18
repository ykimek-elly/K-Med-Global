// kmed-forms.jsx — Get Matched (5-step form) + Contact

const T_FORMS = {
  en: {
    step1: "Treatment", step2: "Your case", step3: "Travel", step4: "Contact", step5: "Review",

    gmCrumbHome: "Home", gmCrumbMatched: "Get Matched",
    gmEyebrow: "5-step consultation",
    gmTitle: "Tell us about your case",
    gmSub: "A licensed K-Med coordinator will review your responses and match you with 2–3 accredited Korean hospitals within 24 hours. Free and confidential.",
    gmStepLabel: "Step 02 of 05 · Your case",
    gmQ: "What kind of care are you looking for?",
    gmLead: "Pick all that apply. You can refine later — this just helps us route you to the right specialist team.",
    catDerm: "Dermatology & K-Beauty", catPlastic: "Plastic Surgery", catScreen: "Health Screening",
    catOrtho: "Orthopedics & Spine", catOnc: "Oncology", catCardio: "Cardiology",
    catFert: "Fertility / IVF", catDent: "Dental", catOphth: "Ophthalmology", catUnsure: "I'm not sure yet",
    lblDescribe: "Briefly describe your condition or goals",
    descPlaceholder: "e.g. Pigmentation around cheeks, sensitive skin, considering laser toning during a 5-day Seoul trip in late May.",
    descDefault: "Pigmentation around cheeks, sensitive skin, considering laser toning during a 5-day Seoul trip in late May.",
    descHint: "Optional — but helps us prepare a better match.",
    lblTreatedBefore: "Have you been treated for this before?",
    optTbNo: "No", optTbHome: "Yes — at home", optTbAbroad: "Yes — abroad", optTbPrefer: "Prefer not to say",
    lblRecords: "Any medical records to share?",
    lblRecordsOpt: "(optional)",
    uploadHelp: "Drag a file or",
    uploadBrowse: "browse",
    uploadFmt: "· PDF, JPG up to 25MB",
    lblBudget: "Approx. budget (USD)",
    budgetUnder: "Under $2,000", budgetMid: "$2,000 – $10,000", budgetHi: "$10,000 – $30,000", budgetTop: "$30,000+", budgetUnsure: "Not sure yet",
    lblLang: "Preferred language",
    langEn: "English", langCnS: "中文 (简体)", langCnT: "繁體中文", langJa: "日本語",
    lblCompanion: "Travel companion?",
    compNo: "No", comp1: "Yes — 1 companion", comp2: "Yes — 2+ companions",
    btnBack: "Back",
    btnSaveLater: "Save & continue later",
    btnContinueTravel: "Continue to travel",

    summTitle: "Your inquiry so far",
    summTreatment: "Treatment focus",
    summRecords: "Records uploaded",
    summRecordsNone: "None yet",
    summLang: "Preferred language",
    summLangVal: "English",
    summCompanion: "Companion",
    summCompVal: "1 companion",
    summDash: "—",

    privTitle: "Your data is protected",
    privBody: "K-Med complies with PIPA (Korea) and GDPR. Records are encrypted and shared only with hospitals you approve.",
    privLink: "Privacy policy →",

    chatTitle: "Need help? Chat now",
    chatCoord: "Coordinator Joon-Ki · usually replies in 4 min",
    chatStart: "Start chat",

    // Contact page
    cCrumbHome: "Home", cCrumbContact: "Contact",
    cEyebrow: "Get in touch",
    cTitle: "We're here to help",
    cSub: "Whether you have a quick question or want to speak with a coordinator before submitting your case, we'll respond within one business day in your preferred language.",
    cFormEyebrow: "Send us a message",
    cFormTitle: "How can we help?",
    cFullName: "Full name", cFullNamePh: "Jane Doe", cFullNameDef: "Sakura Tanaka",
    cCountry: "Country",
    countryJp: "Japan", countryCn: "China", countryTw: "Taiwan", countryUs: "United States", countryOther: "Other",
    cEmail: "Email address",
    cPhone: "Phone (with country code)",
    cSubject: "What is this about?",
    subjGeneral: "General inquiry", subjEstimate: "Treatment estimate", subjVisa: "Visa & travel", subjPartner: "Partner with us", subjPress: "Press / media",
    cMessage: "Message",
    cMessageDef: "I'm planning a 5-day visit to Seoul in late May for a dermatology consultation. Could you let me know which clinics in your network can accommodate sensitive skin patients? Thank you.",
    cConsent1: "I have read and agree to the ",
    cConsentLink: "Privacy Policy",
    cConsent2: " and consent to K-Med Global processing my inquiry.",
    cAvgResponse: "Avg. response time: under 6 hours",
    cSendBtn: "Send message",

    rDirectLines: "Direct lines",
    rPatientInq: "Patient inquiries",
    rHotline: "24/7 hotline",
    rMessengers: "WhatsApp / WeChat / LINE",
    rSeoulHq: "Seoul HQ",
    rSeoulAddr: "5F Yeoksam-ro 168, Gangnam-gu, Seoul 06246",
    rVisitHq: "Visit our Seoul HQ",
    rVisitMeta: "By appointment · Mon–Fri 09:00–18:00 KST",
    rDirections: "Directions →",
    rMapPin: "K-Med HQ · Gangnam",
    rRegional: "Regional offices",
    offTokyo: "Tokyo, Japan", offTokyoMeta: "Minato-ku · 03-XXXX",
    offSh: "Shanghai, China", offShMeta: "Pudong · +86 21 XXXX",
    offTpe: "Taipei, Taiwan", offTpeMeta: "Xinyi · +886 2 XXXX",
    offLa: "Los Angeles, USA", offLaMeta: "Koreatown · +1 213 XXX",
  },
  ko: {
    step1: "치료 항목", step2: "환자 정보", step3: "여행", step4: "연락처", step5: "검토",

    gmCrumbHome: "홈", gmCrumbMatched: "매칭 신청",
    gmEyebrow: "5단계 상담",
    gmTitle: "환자 정보를 알려주세요",
    gmSub: "K-Med 등록 코디네이터가 답변을 검토한 후 24시간 내 인증 한국 의료기관 2~3곳과 매칭해드립니다. 무료·비공개.",
    gmStepLabel: "5단계 중 02 · 환자 정보",
    gmQ: "어떤 진료를 찾고 계신가요?",
    gmLead: "해당되는 모든 항목을 선택해주세요. 이후 수정 가능하며, 전문 진료팀 매칭에 사용됩니다.",
    catDerm: "피부과·K-뷰티", catPlastic: "성형외과", catScreen: "건강검진",
    catOrtho: "정형외과·척추", catOnc: "종양·암 치료", catCardio: "심장혈관",
    catFert: "난임·IVF", catDent: "치과", catOphth: "안과", catUnsure: "아직 정하지 못함",
    lblDescribe: "증상이나 진료 목표를 간단히 적어주세요",
    descPlaceholder: "예) 양 볼 색소 침착, 민감성 피부, 5월 말 서울 방문 일정 중 5일간 레이저 토닝 검토 중.",
    descDefault: "양 볼 색소 침착, 민감성 피부, 5월 말 서울 방문 일정 중 5일간 레이저 토닝 검토 중.",
    descHint: "선택 사항 — 작성 시 더 정확한 매칭이 가능합니다.",
    lblTreatedBefore: "이전에 같은 진료를 받으신 적이 있나요?",
    optTbNo: "없음", optTbHome: "있음 — 자국에서", optTbAbroad: "있음 — 해외에서", optTbPrefer: "비공개",
    lblRecords: "공유할 진료 기록이 있으신가요?",
    lblRecordsOpt: "(선택)",
    uploadHelp: "파일을 드래그하거나",
    uploadBrowse: "찾아보기",
    uploadFmt: "· PDF·JPG, 최대 25MB",
    lblBudget: "예산 범위 (USD)",
    budgetUnder: "$2,000 미만", budgetMid: "$2,000 – $10,000", budgetHi: "$10,000 – $30,000", budgetTop: "$30,000 이상", budgetUnsure: "아직 정하지 못함",
    lblLang: "선호 언어",
    langEn: "영어 (English)", langCnS: "中文 (简体)", langCnT: "繁體中文", langJa: "日本語",
    lblCompanion: "동반인 여부",
    compNo: "없음", comp1: "있음 — 1명", comp2: "있음 — 2명 이상",
    btnBack: "이전",
    btnSaveLater: "저장 후 나중에",
    btnContinueTravel: "여행 단계로",

    summTitle: "현재까지 입력 정보",
    summTreatment: "관심 진료",
    summRecords: "업로드 기록",
    summRecordsNone: "없음",
    summLang: "선호 언어",
    summLangVal: "영어",
    summCompanion: "동반인",
    summCompVal: "1명",
    summDash: "—",

    privTitle: "개인정보 보호",
    privBody: "K-Med Global은 개인정보보호법(PIPA) 및 GDPR을 준수합니다. 진료 기록은 암호화되어 환자가 승인한 의료기관에만 공유됩니다.",
    privLink: "개인정보 처리방침 →",

    chatTitle: "도움이 필요하신가요?",
    chatCoord: "코디네이터 준기 · 평균 4분 내 응답",
    chatStart: "상담 시작",

    cCrumbHome: "홈", cCrumbContact: "문의",
    cEyebrow: "문의하기",
    cTitle: "도와드리겠습니다",
    cSub: "간단한 문의든, 정식 신청 전 코디네이터와 상담을 원하시든, 영업일 1일 이내 선호 언어로 답변드립니다.",
    cFormEyebrow: "메시지 보내기",
    cFormTitle: "어떻게 도와드릴까요?",
    cFullName: "성함", cFullNamePh: "홍길동", cFullNameDef: "Sakura Tanaka",
    cCountry: "국가",
    countryJp: "일본", countryCn: "중국", countryTw: "대만", countryUs: "미국", countryOther: "기타",
    cEmail: "이메일",
    cPhone: "전화번호 (국가코드 포함)",
    cSubject: "문의 주제",
    subjGeneral: "일반 문의", subjEstimate: "진료 견적", subjVisa: "비자·여행", subjPartner: "파트너 신청", subjPress: "보도·미디어",
    cMessage: "메시지",
    cMessageDef: "5월 말 5일 일정으로 서울 방문 예정이며 피부과 상담을 받고자 합니다. 네트워크 클리닉 중 민감성 피부 환자에게 적합한 곳이 어디인지 안내 부탁드립니다. 감사합니다.",
    cConsent1: "",
    cConsentLink: "개인정보 처리방침",
    cConsent2: "을 읽고 동의하며, K-Med Global의 문의 처리에 동의합니다.",
    cAvgResponse: "평균 응답 시간: 6시간 이내",
    cSendBtn: "메시지 전송",

    rDirectLines: "직접 연락",
    rPatientInq: "환자 문의",
    rHotline: "24시간 핫라인",
    rMessengers: "WhatsApp · WeChat · LINE",
    rSeoulHq: "서울 본사",
    rSeoulAddr: "서울 강남구 역삼로 168 5층 (06246)",
    rVisitHq: "서울 본사 방문",
    rVisitMeta: "사전 예약 · 월~금 09:00~18:00 KST",
    rDirections: "오시는 길 →",
    rMapPin: "K-Med 본사 · 강남",
    rRegional: "지역 사무소",
    offTokyo: "도쿄, 일본", offTokyoMeta: "미나토구 · 03-XXXX",
    offSh: "상하이, 중국", offShMeta: "푸둥 · +86 21 XXXX",
    offTpe: "타이베이, 대만", offTpeMeta: "신이구 · +886 2 XXXX",
    offLa: "로스앤젤레스, 미국", offLaMeta: "코리아타운 · +1 213 XXX",
  },
};
window.T_FORMS = T_FORMS;

const StepBar = ({ current = 1 }) => {
  const t = tk(T_FORMS, useKmedLang());
  const steps = [t.step1, t.step2, t.step3, t.step4, t.step5];
  return (
    <div className="steps">
      {steps.map((s,i)=>(
        <React.Fragment key={s}>
          <div className={"step" + (i<current?" is-done":"") + (i===current?" is-active":"")}>
            <div className="step__dot">{i<current ? <Icon name="check" size={14} color="#fff"/> : i+1}</div>
            <span className="step__lbl">{s}</span>
          </div>
          {i<steps.length-1 && <div className="step__bar"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

const GetMatchedPage = ({ bp = "desktop", drawerOpen = false }) => {
  const t = tk(T_FORMS, useKmedLang());
  const cats = [t.catDerm, t.catPlastic, t.catScreen, t.catOrtho, t.catOnc, t.catCardio, t.catFert, t.catDent, t.catOphth, t.catUnsure];
  const [active, setActive] = React.useState([t.catDerm]);
  const toggle = (c) => setActive(a => a.includes(c) ? a.filter(x=>x!==c) : [...a, c]);
  return (
    <div className="kmed-page gm-page" data-bp={bp} data-screen-label={"04 Get Matched " + bp}>
      <Header active="match" bp={bp} drawerOpen={drawerOpen}/>
      <PageHero
        crumbs={[t.gmCrumbHome, t.gmCrumbMatched]}
        eyebrow={t.gmEyebrow}
        title={t.gmTitle}
        sub={t.gmSub}
      />
      <section style={{padding:"32px 80px 80px", display:"grid", gridTemplateColumns:"1fr 360px", gap:40, alignItems:"flex-start"}}>
        <div className="surface" style={{padding:"40px 48px"}}>
          <StepBar current={1}/>
          <div style={{margin:"40px 0 8px", font:"700 13px var(--font-body)", letterSpacing:"0.16em", color:"var(--kmed-aqua)", textTransform:"uppercase"}}>{t.gmStepLabel}</div>
          <h2 style={{font:"900 36px var(--font-display)", margin:"0 0 12px", letterSpacing:"-0.01em"}}>{t.gmQ}</h2>
          <p style={{font:"400 16px/1.55 var(--font-body)", color:"var(--text-secondary)", margin:"0 0 32px"}}>{t.gmLead}</p>

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
              <label className="field__label">{t.lblDescribe}</label>
              <textarea rows={4} placeholder={t.descPlaceholder} defaultValue={t.descDefault}></textarea>
              <span className="field__hint">{t.descHint}</span>
            </div>
            <div className="col" style={{gap:24}}>
              <div className="field field--boxed">
                <label className="field__label">{t.lblTreatedBefore}</label>
                <select defaultValue={t.optTbAbroad}>
                  <option>{t.optTbNo}</option>
                  <option>{t.optTbHome}</option>
                  <option>{t.optTbAbroad}</option>
                  <option>{t.optTbPrefer}</option>
                </select>
              </div>
              <div className="field field--boxed">
                <label className="field__label">{t.lblRecords} <span style={{color:"var(--text-secondary)", fontWeight:400}}>{t.lblRecordsOpt}</span></label>
                <div style={{display:"flex", alignItems:"center", gap:12, padding:"14px 16px", border:"1.5px dashed var(--border-input)", borderRadius:12, color:"var(--text-secondary)", font:"400 14px var(--font-body)"}}>
                  <Icon name="file" size={18} color="rgba(0,0,0,0.4)"/>
                  {t.uploadHelp} <span style={{color:"var(--kmed-aqua)", fontWeight:700, cursor:"pointer"}}>{t.uploadBrowse}</span> {t.uploadFmt}
                </div>
              </div>
            </div>
          </div>

          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:24, marginBottom:36}}>
            <div className="field field--boxed">
              <label className="field__label">{t.lblBudget}</label>
              <select defaultValue={t.budgetMid}><option>{t.budgetUnder}</option><option>{t.budgetMid}</option><option>{t.budgetHi}</option><option>{t.budgetTop}</option><option>{t.budgetUnsure}</option></select>
            </div>
            <div className="field field--boxed">
              <label className="field__label">{t.lblLang}</label>
              <select defaultValue={t.langEn}><option>{t.langEn}</option><option>{t.langCnS}</option><option>{t.langCnT}</option><option>{t.langJa}</option></select>
            </div>
            <div className="field field--boxed">
              <label className="field__label">{t.lblCompanion}</label>
              <select defaultValue={t.comp1}><option>{t.compNo}</option><option>{t.comp1}</option><option>{t.comp2}</option></select>
            </div>
          </div>

          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", paddingTop: 28, borderTop:"1px solid var(--kmed-line)"}}>
            <button className="btn btn--ghost"><span style={{display:"inline-block", transform:"scaleX(-1)"}}><Icon name="arrow" size={14} color="#00579B"/></span> <span>{t.btnBack}</span></button>
            <div style={{display:"flex", alignItems:"center", gap:18}}>
              <a href="#" className="btn btn--text" style={{fontSize:14}}>{t.btnSaveLater}</a>
              <button className="btn btn--primary">{t.btnContinueTravel} <Icon name="arrow" size={14} color="#fff"/></button>
            </div>
          </div>
        </div>

        <div style={{display:"flex", flexDirection:"column", gap:20}}>
          <div className="surface--ring" style={{padding:"22px 24px"}}>
            <div style={{font:"700 12px var(--font-body)", color:"var(--kmed-navy)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:14}}>{t.summTitle}</div>
            <div style={{display:"flex", flexDirection:"column", gap:14}}>
              {[
                {l:t.summTreatment, v: active.length ? active.join(", ") : t.summDash},
                {l:t.summRecords, v:t.summRecordsNone},
                {l:t.summLang, v:t.summLangVal},
                {l:t.summCompanion, v:t.summCompVal},
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
              <div style={{font:"700 14px var(--font-body)"}}>{t.privTitle}</div>
            </div>
            <div style={{font:"400 13px/1.6 var(--font-body)", color:"var(--text-secondary)", marginBottom:12}}>{t.privBody}</div>
            <a href="#" className="btn btn--text" style={{fontSize:13}}>{t.privLink}</a>
          </div>
          <div className="surface--ring" style={{padding:"22px 24px", background:"linear-gradient(180deg, var(--kmed-pink-warm), #fff)"}}>
            <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:10}}>
              <div style={{width:36, height:36, borderRadius:"50%", background:"linear-gradient(135deg, var(--kmed-pink-warm), var(--kmed-aqua-soft))", display:"flex", alignItems:"center", justifyContent:"center", font:"900 14px var(--font-display)", color:"var(--kmed-navy)"}}>JK</div>
              <div>
                <div style={{font:"700 13px var(--font-body)"}}>{t.chatTitle}</div>
                <div style={{font:"400 11px var(--font-body)", color:"var(--text-secondary)"}}>{t.chatCoord}</div>
              </div>
            </div>
            <button className="btn btn--ghost" style={{width:"100%", justifyContent:"center"}}><Icon name="chat" size={14} color="#00579B"/>{t.chatStart}</button>
          </div>
        </div>
      </section>
      <Footer bp={bp}/>
    </div>
  );
};

const ContactPage = ({ bp = "desktop", drawerOpen = false }) => {
  const t = tk(T_FORMS, useKmedLang());
  const subjects = [t.subjGeneral, t.subjEstimate, t.subjVisa, t.subjPartner, t.subjPress];
  return (
  <div className="kmed-page contact-page" data-bp={bp} data-screen-label={"07 Contact " + bp}>
    <Header active="contact" bp={bp} drawerOpen={drawerOpen}/>
    <PageHero
      crumbs={[t.cCrumbHome, t.cCrumbContact]}
      eyebrow={t.cEyebrow}
      title={t.cTitle}
      sub={t.cSub}
    />
    <section style={{padding:"32px 80px 80px", display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:48, alignItems:"flex-start"}}>
      <div className="surface" style={{padding:"40px 48px"}}>
        <div style={{font:"700 13px var(--font-body)", letterSpacing:"0.14em", color:"var(--kmed-aqua)", textTransform:"uppercase", marginBottom:8}}>{t.cFormEyebrow}</div>
        <h2 style={{font:"900 36px var(--font-display)", margin:"0 0 28px", letterSpacing:"-0.01em"}}>{t.cFormTitle}</h2>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, marginBottom:24}}>
          <div className="field field--boxed"><label className="field__label">{t.cFullName}</label><input type="text" defaultValue={t.cFullNameDef} placeholder={t.cFullNamePh}/></div>
          <div className="field field--boxed"><label className="field__label">{t.cCountry}</label><select defaultValue={t.countryJp}><option>{t.countryJp}</option><option>{t.countryCn}</option><option>{t.countryTw}</option><option>{t.countryUs}</option><option>{t.countryOther}</option></select></div>
          <div className="field field--boxed"><label className="field__label">{t.cEmail}</label><input type="email" defaultValue="s.tanaka@example.com"/></div>
          <div className="field field--boxed"><label className="field__label">{t.cPhone}</label><input type="tel" defaultValue="+81 90 1234 5678"/></div>
        </div>
        <div className="field field--boxed" style={{marginBottom:24}}>
          <label className="field__label">{t.cSubject}</label>
          <div style={{display:"flex", flexWrap:"wrap", gap:10, marginTop:6}}>
            {subjects.map((s,i)=>(
              <span key={s} className={"tagpill" + (i===1?" is-on":"")}>{s}</span>
            ))}
          </div>
        </div>
        <div className="field field--boxed" style={{marginBottom:32}}>
          <label className="field__label">{t.cMessage}</label>
          <textarea rows={5} defaultValue={t.cMessageDef}></textarea>
        </div>
        <label style={{display:"flex", alignItems:"center", gap:12, font:"400 13px var(--font-body)", color:"var(--text-secondary)", marginBottom:24}}>
          <span style={{width:18, height:18, borderRadius:5, border:"1.5px solid var(--kmed-aqua)", background:"var(--kmed-aqua)", display:"inline-flex", alignItems:"center", justifyContent:"center"}}><Icon name="check" size={12} color="#fff"/></span>
          {t.cConsent1}<a href="#" style={{color:"var(--kmed-navy)", fontWeight:700}}>{t.cConsentLink}</a>{t.cConsent2}
        </label>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <div style={{font:"400 13px var(--font-body)", color:"var(--text-secondary)"}}>{t.cAvgResponse}</div>
          <button className="btn btn--primary btn--primary-lg">{t.cSendBtn} <Icon name="arrow" size={16} color="#fff"/></button>
        </div>
      </div>

      <div style={{display:"flex", flexDirection:"column", gap:20}}>
        <div className="surface--ring" style={{padding:"24px"}}>
          <div style={{font:"700 12px var(--font-body)", color:"var(--kmed-navy)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:18}}>{t.rDirectLines}</div>
          {[
            {ic:"mail", color:"var(--kmed-aqua)", label:t.rPatientInq, v:"care@kmedglobal.com"},
            {ic:"phone", color:"var(--kmed-green)", label:t.rHotline, v:"+82 2 6000 1004"},
            {ic:"chat", color:"var(--kmed-pink)", label:t.rMessengers, v:"+82 10 4400 1004"},
            {ic:"pin", color:"var(--kmed-pink)", label:t.rSeoulHq, v:t.rSeoulAddr},
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
            <div style={{position:"absolute", left:"35%", top:"30%", padding:"6px 12px", borderRadius:8, background:"#fff", boxShadow:"var(--shadow-soft)", font:"700 12px var(--font-body)", color:"var(--kmed-navy)"}}>{t.rMapPin}</div>
            <svg viewBox="0 0 200 200" style={{position:"absolute", inset:"10%", opacity:.5}}>
              <path d="M100 20 C 130 20, 150 50, 145 90 C 142 110, 155 130, 140 150 C 125 175, 90 180, 75 165 C 55 145, 60 120, 70 100 C 75 70, 75 30, 100 20 Z" fill="rgba(3,172,242,0.18)" stroke="rgba(0,87,155,0.4)" strokeWidth="1.5"/>
            </svg>
          </div>
          <div style={{padding:"18px 20px", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <div>
              <div style={{font:"700 14px var(--font-body)"}}>{t.rVisitHq}</div>
              <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>{t.rVisitMeta}</div>
            </div>
            <a href="#" className="btn btn--text">{t.rDirections}</a>
          </div>
        </div>

        <div className="surface--ring" style={{padding:"22px 24px", background:"linear-gradient(180deg, #F5FBFE, #fff)"}}>
          <div style={{font:"700 12px var(--font-body)", color:"var(--kmed-navy)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:10}}>{t.rRegional}</div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14}}>
            {[
              {f:t.offTokyo, l:t.offTokyoMeta},
              {f:t.offSh,    l:t.offShMeta},
              {f:t.offTpe,   l:t.offTpeMeta},
              {f:t.offLa,    l:t.offLaMeta},
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
};

Object.assign(window, { GetMatchedPage, ContactPage });
