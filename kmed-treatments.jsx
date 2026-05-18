// kmed-treatments.jsx — Treatments listing + Detail (Dermatology & K-Beauty)

const T_TREAT = {
  en: {
    // Filter sidebar
    filters: "Filters",
    clearAll: "Clear all",
    specialty: "Specialty",
    priceRange: "Price range (USD)",
    hospitalRegion: "Hospital region",
    lengthOfStay: "Length of stay",
    languageSupport: "Language support",
    applyFilters: "Apply filters",
    catAll: "All Treatments",
    catDerm: "Dermatology & K-Beauty",
    catPlastic: "Plastic Surgery",
    catScreen: "Health Screening",
    catOrtho: "Orthopedics & Spine",
    catOnc: "Oncology",
    catCardio: "Cardiology",
    catFert: "Fertility / IVF",
    catDent: "Dental",
    catOphth: "Ophthalmology",
    price1: "$ < 2,000",
    price2: "$$ 2k–10k",
    price3: "$$$ 10k–30k",
    price4: "$$$$ 30k+",
    regSeoul: "Seoul",
    regBusan: "Busan",
    regIncheon: "Incheon",
    regDaegu: "Daegu",
    regJeju: "Jeju",
    staySame: "Same day",
    stay13: "1–3 days",
    stay47: "4–7 days",
    stay12w: "1–2 weeks",
    stay2wp: "2 weeks+",

    // Listing hero
    crumbHome: "Home",
    crumbTreat: "Treatments",
    listEyebrow: "Browse care",
    listTitle: "Find a treatment that fits your case",
    listSub: "Explore care from 120+ accredited Korean hospitals across 34 specialties. Every program is reviewed by a licensed Korean physician before estimates are issued.",
    searchPlaceholder: "Search by treatment, condition, or hospital...",
    searchDefault: "dermatology",
    searchBtn: "Search",
    pillAll: "All Specialties",
    pillPopular: "Most popular",
    pillShortest: "Shortest stay",
    pillLowest: "Lowest estimate",
    resultsCount: "248 results",
    resultsShowing: " · Showing Dermatology & K-Beauty in Seoul",
    resultsCountSuffix: " results",
    sortBy: "Sort by:",
    sortRelevance: "Relevance",
    stayPrefix: "Stay ",
    estimateLabel: "Estimate from",
    estimateBtn: "Estimate request",

    // Card data
    t1Title: "K-Beauty Skincare Program",
    t1Desc: "Customized 3–7 day plan: facial, laser toning, pigmentation care, and post-care kit. Hospital-led, dermatologist supervised.",
    t1Hosp: "Lumina Dermatology Clinic",
    t1Stay: "3–7 days",
    t2Title: "Acne Scar Restoration",
    t2Desc: "Multi-modal treatment combining fractional laser, subcision, and PRP. Tailored to skin type and tone.",
    t2Hosp: "Seoul Skin Institute",
    t2Stay: "5–10 days",
    t3Title: "Anti-Aging & Lifting",
    t3Desc: "HIFU + Thermage protocols for travelers, with same-week refinement appointments and recovery guidance.",
    t3Hosp: "Gangnam Aesthetic Center",
    t3Stay: "4–7 days",
    t4Title: "Pigmentation & Tone",
    t4Desc: "Targeted melasma, sun-spot, and tone evening protocols. 1-on-1 dermatologist consult before any laser session.",
    t4Hosp: "Yeoksam Dermatology",
    t4Stay: "3–6 days",
    t5Title: "Hair Restoration Consult",
    t5Desc: "Non-surgical PRP and exosome programs, plus hair transplant evaluation with a board-certified surgeon.",
    t5Hosp: "K-Hair Medical Clinic",
    t5Stay: "2–4 days",
    t6Title: "Sensitive Skin Recovery",
    t6Desc: "For patients with rosacea or post-procedure irritation. Conservative, dermatologist-led protocols only.",
    t6Hosp: "Bom Dermatology Group",
    t6Stay: "2–4 days",
    catChipDerm: "Dermatology",
    catChipPlastic: "Plastic Surgery",
    catChipScreen: "Health Screening",
    catChipOrtho: "Orthopedics",
    catChipOnc: "Oncology",
    catChipFert: "Fertility",
    catChipDent: "Dental",

    // Plastic Surgery
    p1Title: "Facial Contouring Consult", p1Desc: "Doctor-led consultations and conservative procedure planning. 2-stage review before any commitment.", p1Hosp: "Gangnam Aesthetic Center", p1Stay: "2–5 days",
    p2Title: "Rhinoplasty Consultation", p2Desc: "Board-certified planning with 3D imaging review. No surgery is scheduled before an in-person consultation.", p2Hosp: "Seoul Plastic Institute", p2Stay: "7–14 days",
    p3Title: "Eyelid Surgery Consult", p3Desc: "Upper and lower blepharoplasty consultations. Conservative options first; surgery reviewed by two specialists.", p3Hosp: "Apgujeong Aesthetic", p3Stay: "5–10 days",

    // Health Screening
    s1Title: "Premium Full-Body Check-up", s1Desc: "Comprehensive 1-day screening with PET-CT, cardiology, and oncology markers at major hospitals.", s1Hosp: "Kangbuk Samsung Check-up", s1Stay: "1–2 days",
    s2Title: "Cardiology-Focused Screening", s2Desc: "Echocardiogram, coronary CT, stress test, and cardiology review. Designed for patients with family history.", s2Hosp: "Asan Medical Center", s2Stay: "1–3 days",
    s3Title: "Women's Health Screening", s3Desc: "Breast imaging, gynecological exam, hormonal panel, and bone-density assessment with women-only staff.", s3Hosp: "Samsung Medical Center", s3Stay: "1–2 days",

    // Orthopedics & Spine
    o1Title: "Spine & Joint Restoration", o1Desc: "Minimally invasive spine surgery and robotic knee/hip replacement with 7–14 day recovery support.", o1Hosp: "Wooridul Spine Hospital", o1Stay: "7–14 days",
    o2Title: "Robotic Knee Replacement", o2Desc: "MAKO-guided partial and total knee replacement with same-week mobility milestones and tele-rehab.", o2Hosp: "Seoul National Univ. Hospital", o2Stay: "10–14 days",
    o3Title: "Sports Injury Rehabilitation", o3Desc: "Targeted ACL, rotator cuff, and meniscus programs combining surgery (if needed) with structured rehab.", o3Hosp: "Korea Univ. Guro Hospital", o3Stay: "5–10 days",

    // Oncology
    n1Title: "Cancer Second Opinion", n1Desc: "Bring your records — receive a multi-disciplinary review from Korean tertiary cancer centers.", n1Hosp: "Asan Cancer Center", n1Stay: "3–5 days",
    n2Title: "Advanced Imaging Review", n2Desc: "PET-CT, 3T MRI, and tumor marker panel followed by oncologist-led case review.", n2Hosp: "Samsung Cancer Center", n2Stay: "2–4 days",
    n3Title: "Survivorship Care Plan", n3Desc: "Follow-up imaging, lab panels, and a multidisciplinary review for patients in post-treatment monitoring.", n3Hosp: "Severance Cancer Hospital", n3Stay: "3–5 days",

    // Fertility / IVF
    f1Title: "IVF Pre-Travel Consultation", f1Desc: "Hormonal and imaging workup, prior-cycle review, and travel-window planning before any procedure.", f1Hosp: "Seoul Fertility Center", f1Stay: "3–5 days",
    f2Title: "Egg Freezing Consult", f2Desc: "Counseling, ovarian reserve assessment, and stimulation protocol planning. Conservative pacing only.", f2Hosp: "Mizmedi Women's Hospital", f2Stay: "5–10 days",

    // Dental
    d1Title: "Implant & Smile Design", d1Desc: "Digital implant planning, all-on-4, and porcelain veneers from Gangnam-area dental clinics.", d1Hosp: "Cheongdam Dental Clinic", d1Stay: "5–7 days",
    d2Title: "Full-Mouth Restoration", d2Desc: "Multi-stage restoration combining implants, crowns, and bite alignment over two visits.", d2Hosp: "Gangnam Smile Dental", d2Stay: "7–14 days",
    d3Title: "Cosmetic Veneers", d3Desc: "Hand-crafted porcelain veneers with two consultations and a digital smile preview before treatment.", d3Hosp: "Apgujeong Dental Studio", d3Stay: "5–7 days",

    resultsAllShowing: " · Showing all specialties in Seoul",
    resultsShowingPrefix: " · Showing ",
    resultsShowingSuffix: " in Seoul",

    // Detail hero
    detCrumb: "Dermatology & K-Beauty",
    detPillKB: "K-Beauty Specialty",
    detPillPartners: "32 partner clinics",
    detPillProg: "3–7 day program",
    detTitle: "Dermatology & K-Beauty",
    detSub: "Travel-friendly dermatology programs combining medical-grade treatments with the routines Korean clinics are known for — supervised by board-certified specialists, tailored to your skin type, schedule, and recovery window.",
    detCtaEstimate: "Estimate request",
    detCtaChat: "Chat with coordinator",
    statEstimate: "Estimate range",
    statStay: "Length of stay",
    statAnesthesia: "Anesthesia",
    statRecovery: "Recovery",
    statStayValue: "3 – 7 days",
    statAnesthesiaValue: "Topical only",
    statRecoveryValue: "0 – 3 days",
    rateLabel: "Patient rating",
    rateReviews: "(1,247 reviews)",
    langLabel: "Languages",
    kbPin: "K-Beauty",

    // Compliance note
    cnTitle: "Medical advertising notice",
    cnBody: "Treatment outcomes vary individually. Estimates are indicative only — final pricing is issued by the partner hospital after a doctor reviews your records. Per the Korean Medical Service Act, before/after photographs are not displayed.",

    // Tabs
    tabOverview: "Overview",
    tabProcedures: "Procedures included",
    tabExpect: "What to expect",
    tabFaqs: "FAQs",

    // Body
    ovTitle: "Overview",
    ovP1: "Korean dermatology pairs medical training with research-led product development. K-Med Global's dermatology program brings that same standard to international patients — every plan begins with a board-certified dermatologist consultation, not a sales pitch.",
    ovP2: "You'll receive a written care plan, an itemized estimate, and a recovery schedule that fits your travel window. Treatments are sequenced so you can fly home comfortably.",

    incTitle: "What's included",
    inc1Title: "Pre-arrival chat",
    inc1Desc: "Coordinator review in your language, before you book a flight.",
    inc2Title: "Doctor-reviewed estimate",
    inc2Desc: "Itemized, clinic-issued. No automated calculators.",
    inc3Title: "Travel concierge",
    inc3Desc: "Visa letter, airport pickup, lodging guidance.",
    inc4Title: "On-site interpretation",
    inc4Desc: "Live medical interpretation at every appointment.",
    inc5Title: "Aftercare follow-up",
    inc5Desc: "30-day teleconsult and home-care kit included.",
    inc6Title: "Verified clinics only",
    inc6Desc: "MoHW-registered partners with malpractice coverage.",

    procTitle: "Procedures included",
    proc1Name: "Initial dermatology consult", proc1Dur: "45 min", proc1Price: "USD 80–180", proc1Body: "Skin scan, history review, treatment plan.",
    proc2Name: "Medical-grade facial protocol", proc2Dur: "60 min", proc2Price: "USD 120–340", proc2Body: "Cleansing, peeling, hydration mask, LED.",
    proc3Name: "Laser toning & pigmentation", proc3Dur: "30 min", proc3Price: "USD 220–680 / session", proc3Body: "Q-switched and pico-laser for tone evening.",
    proc4Name: "HIFU / Ulthera lifting", proc4Dur: "45 min", proc4Price: "USD 480–1,800", proc4Body: "Targeted lifting for jawline & under-eye.",
    proc5Name: "Post-care kit & follow-up", proc5Dur: "included", proc5Price: "included", proc5Body: "Take-home protocol + 30-day teleconsult.",
    procInfo: "Info →",

    faqTitle: "Frequently asked",
    faq1Q: "Will my results match what I see online?",
    faq1A: "We avoid showing before/after marketing imagery. Your dermatologist will discuss realistic expectations after reviewing your skin in person.",
    faq2Q: "How is the estimate calculated?",
    faq2A: "After you submit photos and history, the hospital's medical team prepares a personalized estimate. There is no automated calculator — every quote is doctor-reviewed.",
    faq3Q: "What if I have sensitive skin or rosacea?",
    faq3A: "Conservative-only protocols are available; the consultation will rule out treatments that aren't appropriate for your skin.",
    faq4Q: "Can the program fit a 4-day trip?",
    faq4A: "Yes. We design plans around 3, 5, and 7-day windows and pace treatments accordingly.",

    // Right rail
    rrEyebrow: "Request an estimate",
    rrTitle: "Get a doctor-reviewed quote",
    rrDesc: "Submit your case and 2–3 partner clinics will respond with itemized estimates within 24 hours.",
    rrItem1: "Skin photos (selfie acceptable)",
    rrItem2: "Areas of concern",
    rrItem3: "Travel window",
    rrItem4: "Budget range (optional)",
    rrCta: "Estimate request",
    rrFree: "Free · No payment to start",
    rrDoctorsLabel: "Recommended specialists",
    dr1Name: "Dr. Ji-won Park", dr1Role: "Dermatologist · 14 yrs", dr1Lang: "EN · 한국어",
    dr2Name: "Dr. Hyun Choi", dr2Role: "Dermatologist · 11 yrs", dr2Lang: "EN · 中文 · 한국어",
    dr3Name: "Dr. Min-seo Kang", dr3Role: "Aesthetic Dermatology · 9 yrs", dr3Lang: "EN · 日本語 · 한국어",
    rrProfile: "Profile",
    rrClinicsLabel: "Featured partner clinics",
    cl1Init: "LD", cl1Name: "Lumina Dermatology Clinic", cl1Loc: "Cheongdam-dong, Gangnam",
    cl2Init: "SS", cl2Name: "Seoul Skin Institute", cl2Loc: "Apgujeong, Gangnam",
    cl3Init: "BD", cl3Name: "Bom Dermatology Group", cl3Loc: "Yeoksam, Gangnam",
    clinicsNote: "* Representative monograms — placeholder marks",
  },
  ko: {
    filters: "필터",
    clearAll: "초기화",
    specialty: "진료과",
    priceRange: "가격대 (USD)",
    hospitalRegion: "병원 지역",
    lengthOfStay: "체류 기간",
    languageSupport: "언어 지원",
    applyFilters: "필터 적용",
    catAll: "전체 치료 항목",
    catDerm: "피부과·K-뷰티",
    catPlastic: "성형외과",
    catScreen: "건강검진",
    catOrtho: "정형외과·척추",
    catOnc: "종양·암 치료",
    catCardio: "심장혈관",
    catFert: "난임·IVF",
    catDent: "치과",
    catOphth: "안과",
    price1: "$ 2천 미만",
    price2: "$$ 2천~1만",
    price3: "$$$ 1만~3만",
    price4: "$$$$ 3만 이상",
    regSeoul: "서울",
    regBusan: "부산",
    regIncheon: "인천",
    regDaegu: "대구",
    regJeju: "제주",
    staySame: "당일",
    stay13: "1~3일",
    stay47: "4~7일",
    stay12w: "1~2주",
    stay2wp: "2주 이상",

    crumbHome: "홈",
    crumbTreat: "치료 항목",
    listEyebrow: "케어 둘러보기",
    listTitle: "내 상황에 맞는 치료를 찾아보세요",
    listSub: "34개 진료 분야, 120여 인증 한국 의료기관의 케어를 둘러보세요. 모든 프로그램은 견적 발행 전 한국 면허 전문의가 직접 검토합니다.",
    searchPlaceholder: "치료, 증상, 또는 병원으로 검색...",
    searchDefault: "피부과",
    searchBtn: "검색",
    pillAll: "전체 진료과",
    pillPopular: "인기순",
    pillShortest: "단기 일정",
    pillLowest: "저렴한 견적순",
    resultsCount: "248건 결과",
    resultsShowing: " · 서울 피부과·K-뷰티 표시 중",
    resultsCountSuffix: "건 결과",
    sortBy: "정렬:",
    sortRelevance: "관련도",
    stayPrefix: "체류 ",
    estimateLabel: "예상 견적",
    estimateBtn: "견적 요청",

    t1Title: "K-뷰티 스킨케어 프로그램",
    t1Desc: "맞춤 3~7일 일정: 페이셜, 레이저 토닝, 색소 케어, 사후 케어 키트. 의료기관 운영, 피부과 전문의 감독.",
    t1Hosp: "루미나 피부과 클리닉",
    t1Stay: "3~7일",
    t2Title: "여드름 흉터 재건",
    t2Desc: "프락셀 레이저·서브시전·PRP를 결합한 다층 치료. 피부 타입과 톤에 맞춰 진행.",
    t2Hosp: "서울 스킨 인스티튜트",
    t2Stay: "5~10일",
    t3Title: "안티에이징·리프팅",
    t3Desc: "방한 환자를 위한 HIFU·써마지 프로토콜. 같은 주 추가 시술과 회복 가이드 제공.",
    t3Hosp: "강남 미용의학센터",
    t3Stay: "4~7일",
    t4Title: "색소·톤 정돈",
    t4Desc: "기미·잡티·톤 정돈에 특화된 프로토콜. 레이저 시술 전 전문의 1:1 상담 필수.",
    t4Hosp: "역삼 피부과",
    t4Stay: "3~6일",
    t5Title: "모발 재건 상담",
    t5Desc: "비수술 PRP·엑소좀 프로그램과 모발이식 평가까지, 면허 전문의가 진행합니다.",
    t5Hosp: "K-헤어 메디컬 클리닉",
    t5Stay: "2~4일",
    t6Title: "민감성 피부 회복",
    t6Desc: "주사·시술 후 자극이 있는 환자를 위한 보수적 피부과 프로토콜만 진행.",
    t6Hosp: "봄 피부과",
    t6Stay: "2~4일",
    catChipDerm: "피부과",
    catChipPlastic: "성형외과",
    catChipScreen: "건강검진",
    catChipOrtho: "정형외과",
    catChipOnc: "종양",
    catChipFert: "난임",
    catChipDent: "치과",

    // 성형외과
    p1Title: "안면 윤곽 상담", p1Desc: "전문의 상담 중심의 보수적 시술 계획. 결정 전 2단계 검토.", p1Hosp: "강남 미용의학센터", p1Stay: "2~5일",
    p2Title: "코 성형 상담", p2Desc: "3D 영상 검토 기반의 면허 전문의 계획. 대면 상담 전 수술 예약 없음.", p2Hosp: "서울 플라스틱 인스티튜트", p2Stay: "7~14일",
    p3Title: "눈 성형 상담", p3Desc: "상·하안검 상담. 보수적 옵션을 먼저 검토하고, 수술은 2인 전문의 리뷰 후 진행.", p3Hosp: "압구정 미용의학", p3Stay: "5~10일",

    // 건강검진
    s1Title: "프리미엄 전신 건강검진", s1Desc: "PET-CT, 심혈관, 종양 마커를 포함한 주요 의료기관의 1일 종합 검진.", s1Hosp: "강북삼성병원 종합검진센터", s1Stay: "1~2일",
    s2Title: "심혈관 정밀 검진", s2Desc: "심초음파, 관상동맥 CT, 운동부하 검사, 심장내과 검토. 가족력 환자 권장.", s2Hosp: "서울아산병원", s2Stay: "1~3일",
    s3Title: "여성 건강검진", s3Desc: "유방 영상, 산부인과 진료, 호르몬 패널, 골밀도 검사. 여성 전담 의료진.", s3Hosp: "삼성서울병원", s3Stay: "1~2일",

    // 정형외과·척추
    o1Title: "척추·관절 재건", o1Desc: "최소 침습 척추 수술 및 로봇 보조 무릎·고관절 치환술, 7~14일 회복 지원.", o1Hosp: "우리들척추전문병원", o1Stay: "7~14일",
    o2Title: "로봇 무릎 인공관절", o2Desc: "MAKO 가이드 부분·전치환술. 같은 주 가동성 마일스톤 및 원격 재활 지원.", o2Hosp: "서울대학교병원", o2Stay: "10~14일",
    o3Title: "스포츠 손상 재활", o3Desc: "ACL·회전근개·반월상 연골 특화 프로그램. 수술(필요 시) + 구조적 재활.", o3Hosp: "고려대학교 구로병원", o3Stay: "5~10일",

    // 종양·암
    n1Title: "암 진단 2차 소견", n1Desc: "기존 진료 기록을 가져오시면 상급종합병원 다학제 진료팀이 검토해드립니다.", n1Hosp: "서울아산병원 암병원", n1Stay: "3~5일",
    n2Title: "정밀 영상 판독", n2Desc: "PET-CT, 3T MRI, 종양 마커 패널 후 종양 전문의 사례 검토.", n2Hosp: "삼성서울병원 암센터", n2Stay: "2~4일",
    n3Title: "암 회복기 케어 플랜", n3Desc: "추적 영상, 혈액검사, 다학제 검토를 포함한 치료 후 모니터링.", n3Hosp: "세브란스 암병원", n3Stay: "3~5일",

    // 난임·IVF
    f1Title: "IVF 사전 상담", f1Desc: "호르몬·영상 검사, 이전 사이클 검토, 시술 전 방한 일정 계획.", f1Hosp: "서울 난임센터", f1Stay: "3~5일",
    f2Title: "난자 동결 상담", f2Desc: "상담, 난소 예비능 평가, 자극 프로토콜 계획. 보수적 진행만.", f2Hosp: "미즈메디 여성병원", f2Stay: "5~10일",

    // 치과
    d1Title: "임플란트·스마일 디자인", d1Desc: "강남권 치과의 디지털 임플란트 플래닝, All-on-4, 포세린 베니어.", d1Hosp: "청담 치과 클리닉", d1Stay: "5~7일",
    d2Title: "전악 보철 복원", d2Desc: "임플란트, 크라운, 교합 정렬을 두 번의 방한에 걸쳐 단계적 진행.", d2Hosp: "강남 스마일 치과", d2Stay: "7~14일",
    d3Title: "심미 베니어", d3Desc: "수작업 포세린 베니어. 두 차례 상담과 디지털 스마일 프리뷰 후 시술.", d3Hosp: "압구정 덴탈 스튜디오", d3Stay: "5~7일",

    resultsAllShowing: " · 서울 전체 진료과 표시 중",
    resultsShowingPrefix: " · 서울 ",
    resultsShowingSuffix: " 표시 중",

    detCrumb: "피부과·K-뷰티",
    detPillKB: "K-뷰티 전문",
    detPillPartners: "파트너 클리닉 32곳",
    detPillProg: "3~7일 프로그램",
    detTitle: "피부과·K-뷰티",
    detSub: "방한 환자를 위한 피부과 프로그램. 한국 클리닉의 의료 수준과 노하우가 결합된 케어를, 전문의가 환자의 피부 타입·일정·회복 기간에 맞춰 진행합니다.",
    detCtaEstimate: "견적 요청",
    detCtaChat: "코디네이터와 상담",
    statEstimate: "예상 견적",
    statStay: "체류 기간",
    statAnesthesia: "마취",
    statRecovery: "회복 기간",
    statStayValue: "3 ~ 7일",
    statAnesthesiaValue: "국소 마취만",
    statRecoveryValue: "0 ~ 3일",
    rateLabel: "환자 평가",
    rateReviews: "(후기 1,247건)",
    langLabel: "지원 언어",
    kbPin: "K-뷰티",

    cnTitle: "의료광고 안내",
    cnBody: "시술 결과는 개인차가 있을 수 있습니다. 표시된 견적은 참고용이며, 최종 가격은 의료진의 진료 기록 검토 후 파트너 병원에서 발행합니다. 한국 의료법에 따라 치료 전후 사진은 표시하지 않습니다.",

    tabOverview: "개요",
    tabProcedures: "포함 시술",
    tabExpect: "진행 과정",
    tabFaqs: "자주 묻는 질문",

    ovTitle: "개요",
    ovP1: "한국 피부과는 의학 교육과 연구 기반 제품 개발이 결합되어 있습니다. K-Med Global의 피부과 프로그램은 그 기준을 국제 환자에게 그대로 제공합니다 — 모든 플랜은 영업이 아닌 전문의 상담에서 시작됩니다.",
    ovP2: "서면 케어 플랜, 항목별 견적, 방한 일정에 맞춘 회복 스케줄을 받으실 수 있습니다. 시술은 귀국 일정에 맞춰 순차적으로 진행됩니다.",

    incTitle: "포함 사항",
    inc1Title: "방한 전 상담",
    inc1Desc: "항공편 예약 전 모국어 코디네이터의 사전 검토를 받습니다.",
    inc2Title: "전문의 검토 견적",
    inc2Desc: "항목별로 의료기관이 직접 발행. 자동 계산기는 사용하지 않습니다.",
    inc3Title: "여행 컨시어지",
    inc3Desc: "비자 초청장, 공항 픽업, 숙박 안내.",
    inc4Title: "현장 통역",
    inc4Desc: "모든 진료에 의료 통역이 동행합니다.",
    inc5Title: "사후 케어",
    inc5Desc: "귀국 후 30일 원격 상담과 홈케어 키트가 포함됩니다.",
    inc6Title: "검증된 클리닉",
    inc6Desc: "보건복지부 등록 파트너, 의료과실 배상보험 가입 기관.",

    procTitle: "포함 시술",
    proc1Name: "피부과 초진 상담", proc1Dur: "45분", proc1Price: "USD 80–180", proc1Body: "피부 스캔, 병력 검토, 치료 계획 수립.",
    proc2Name: "메디컬 페이셜 프로토콜", proc2Dur: "60분", proc2Price: "USD 120–340", proc2Body: "클렌징, 필링, 보습 마스크, LED.",
    proc3Name: "레이저 토닝·색소", proc3Dur: "30분", proc3Price: "USD 220–680 / 회", proc3Body: "Q-스위치·피코 레이저로 톤 정돈.",
    proc4Name: "HIFU·울쎄라 리프팅", proc4Dur: "45분", proc4Price: "USD 480–1,800", proc4Body: "턱선·눈가 부위 집중 리프팅.",
    proc5Name: "사후 케어 키트·팔로업", proc5Dur: "포함", proc5Price: "포함", proc5Body: "홈케어 프로토콜 + 30일 원격 상담.",
    procInfo: "정보 →",

    faqTitle: "자주 묻는 질문",
    faq1Q: "온라인에서 본 결과와 동일한 효과를 얻을 수 있나요?",
    faq1A: "치료 전후 마케팅 이미지는 표시하지 않습니다. 환자의 피부 상태를 직접 검진한 후 전문의가 현실적인 기대 효과를 안내해드립니다.",
    faq2Q: "견적은 어떻게 산정되나요?",
    faq2A: "사진과 병력을 제출하시면 의료기관 의료팀이 맞춤 견적을 준비합니다. 자동 계산기는 사용하지 않으며, 모든 견적은 전문의가 검토합니다.",
    faq3Q: "민감성 피부나 주사가 있는 경우는 어떤가요?",
    faq3A: "보수적인 프로토콜만 적용 가능합니다. 상담 단계에서 피부에 부적합한 시술은 사전에 제외합니다.",
    faq4Q: "4일 일정에도 프로그램 진행이 가능한가요?",
    faq4A: "네, 3·5·7일 일정에 맞춰 시술 간격을 조정해 진행합니다.",

    rrEyebrow: "견적 요청",
    rrTitle: "전문의 검토 견적 받기",
    rrDesc: "환자 정보를 제출하시면 24시간 내 파트너 클리닉 2~3곳에서 항목별 견적을 발송해드립니다.",
    rrItem1: "피부 사진 (셀카 가능)",
    rrItem2: "관심 부위",
    rrItem3: "방한 일정",
    rrItem4: "예산 범위 (선택)",
    rrCta: "견적 요청",
    rrFree: "무료 · 결제 없이 시작",
    rrDoctorsLabel: "추천 전문의",
    dr1Name: "박지원 원장", dr1Role: "피부과 전문의 · 14년", dr1Lang: "EN · 한국어",
    dr2Name: "최현 원장", dr2Role: "피부과 전문의 · 11년", dr2Lang: "EN · 中文 · 한국어",
    dr3Name: "강민서 원장", dr3Role: "미용피부과 · 9년", dr3Lang: "EN · 日本語 · 한국어",
    rrProfile: "프로필",
    rrClinicsLabel: "주요 파트너 클리닉",
    cl1Init: "LD", cl1Name: "루미나 피부과 클리닉", cl1Loc: "강남 청담동",
    cl2Init: "SS", cl2Name: "서울 스킨 인스티튜트", cl2Loc: "강남 압구정",
    cl3Init: "BD", cl3Name: "봄 피부과", cl3Loc: "강남 역삼",
    clinicsNote: "* 대표 모노그램이며 실제 파트너 로고가 아닙니다",
  },
};
window.T_TREAT = T_TREAT;

// (catKey, label) pairs used by the sidebar and dispatched by Home chips.
const TREAT_CATS = [
  { key: "all",         tkey: "catAll" },
  { key: "dermatology", tkey: "catDerm" },
  { key: "plastic",     tkey: "catPlastic" },
  { key: "screening",   tkey: "catScreen" },
  { key: "orthopedics", tkey: "catOrtho" },
  { key: "oncology",    tkey: "catOnc" },
  { key: "fertility",   tkey: "catFert" },
  { key: "dental",      tkey: "catDent" },
];

const TreatFilter = ({ activeCat, onChangeCat }) => {
  const t = tk(T_TREAT, useKmedLang());
  const [active, setActive] = React.useState({ price: "$$", region: t.regSeoul });
  const Section = ({ title, children }) => (
    <div style={{paddingBottom: 22, marginBottom: 22, borderBottom: "1px solid var(--kmed-line)"}}>
      <div style={{font:"700 13px var(--font-body)", color:"var(--text-primary)", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom: 14}}>{title}</div>
      {children}
    </div>
  );
  const prices = [t.price1, t.price2, t.price3, t.price4];
  const regions = [t.regSeoul, t.regBusan, t.regIncheon, t.regDaegu, t.regJeju];
  const stays = [t.staySame, t.stay13, t.stay47, t.stay12w, t.stay2wp];
  return (
    <aside className="surface--ring" style={{padding: "26px 24px", height:"fit-content", position:"sticky", top: 24}}>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom: 18}}>
        <div style={{font:"700 16px var(--font-display)"}}>{t.filters}</div>
        <a href="#" onClick={(e)=>{e.preventDefault(); onChangeCat && onChangeCat("all");}} style={{font:"700 12px var(--font-body)", color:"var(--kmed-aqua)", textDecoration:"none"}}>{t.clearAll}</a>
      </div>
      <Section title={t.specialty}>
        <div style={{display:"flex", flexDirection:"column", gap:10}}>
          {TREAT_CATS.map(({key, tkey}) => {
            const label = t[tkey];
            const on = key === activeCat;
            return (
              <label key={key} onClick={()=>onChangeCat && onChangeCat(key)} style={{display:"flex", alignItems:"center", gap:10, font:"400 14px var(--font-body)", color:"var(--text-primary)", cursor:"pointer"}}>
                <span style={{width:18, height:18, borderRadius:5, border:"1.5px solid var(--border-input)", display:"inline-flex", alignItems:"center", justifyContent:"center", background: on?"var(--kmed-aqua)":"#fff", borderColor: on?"var(--kmed-aqua)":"var(--border-input)"}}>{on && <Icon name="check" size={12} color="#fff"/>}</span>
                <span style={{fontWeight: on ? 700 : 400, color: on ? "var(--kmed-navy)":"var(--text-primary)"}}>{label}</span>
              </label>
            );
          })}
        </div>
      </Section>
      <Section title={t.priceRange}>
        <div style={{display:"flex", flexWrap:"wrap", gap:8}}>
          {prices.map(p => <span key={p} className={"tagpill" + (p.startsWith(active.price)?" is-on":"")} style={{padding:"6px 12px", fontSize:13}}>{p}</span>)}
        </div>
      </Section>
      <Section title={t.hospitalRegion}>
        <div style={{display:"flex", flexWrap:"wrap", gap:8}}>
          {regions.map(r => <span key={r} className={"tagpill" + (r===active.region?" is-on":"")} style={{padding:"6px 12px", fontSize:13}}>{r}</span>)}
        </div>
      </Section>
      <Section title={t.lengthOfStay}>
        <div style={{display:"flex", flexDirection:"column", gap:10}}>
          {stays.map(s => (
            <label key={s} style={{display:"flex", alignItems:"center", gap:10, font:"400 14px var(--font-body)", cursor:"pointer"}}>
              <span style={{width:18, height:18, borderRadius:"50%", border:"1.5px solid var(--border-input)"}}></span>{s}
            </label>
          ))}
        </div>
      </Section>
      <Section title={t.languageSupport}>
        <div style={{display:"flex", flexWrap:"wrap", gap:8}}>
          {["EN","中文","日本語","繁體","Русский","العربية"].map(l=> <span key={l} className="tagpill" style={{padding:"6px 12px", fontSize:13}}>{l}</span>)}
        </div>
      </Section>
      <button className="btn btn--primary" style={{width:"100%", justifyContent:"center", padding:"14px"}}>{t.applyFilters}</button>
    </aside>
  );
};

// All listing cards in one place, tagged with stable catKey for filtering.
const buildTreatCards = (t) => [
  // Dermatology — 6
  { catKey:"dermatology", cat:t.catChipDerm,    title:t.t1Title, desc:t.t1Desc, price:"USD 480 – 2,400",  stay:t.t1Stay, c1:"#FCE4EC", c2:"#F8BBD0", icon:"sparkle", h:t.t1Hosp },
  { catKey:"dermatology", cat:t.catChipDerm,    title:t.t2Title, desc:t.t2Desc, price:"USD 900 – 3,600",  stay:t.t2Stay, c1:"#FFE0E6", c2:"#FFC1CC", icon:"sparkle", h:t.t2Hosp },
  { catKey:"dermatology", cat:t.catChipDerm,    title:t.t3Title, desc:t.t3Desc, price:"USD 1,400 – 5,200",stay:t.t3Stay, c1:"#FFF1F2", c2:"#F8BBD0", icon:"star",    h:t.t3Hosp },
  { catKey:"dermatology", cat:t.catChipDerm,    title:t.t4Title, desc:t.t4Desc, price:"USD 600 – 2,200",  stay:t.t4Stay, c1:"#E1F5FE", c2:"#B3E5FC", icon:"sparkle", h:t.t4Hosp },
  { catKey:"dermatology", cat:t.catChipDerm,    title:t.t5Title, desc:t.t5Desc, price:"USD 800 – 8,000",  stay:t.t5Stay, c1:"#C8E6C9", c2:"#A5D6A7", icon:"medkit",  h:t.t5Hosp },
  { catKey:"dermatology", cat:t.catChipDerm,    title:t.t6Title, desc:t.t6Desc, price:"USD 380 – 1,400",  stay:t.t6Stay, c1:"#F5FBFE", c2:"#B3E5FC", icon:"shield",  h:t.t6Hosp },
  // Plastic Surgery — 3
  { catKey:"plastic",     cat:t.catChipPlastic, title:t.p1Title, desc:t.p1Desc, price:"USD 2,200 – 12,000",stay:t.p1Stay, c1:"#FFE0E6", c2:"#FFC1CC", icon:"medkit",  h:t.p1Hosp },
  { catKey:"plastic",     cat:t.catChipPlastic, title:t.p2Title, desc:t.p2Desc, price:"USD 3,400 – 9,800", stay:t.p2Stay, c1:"#FCE4EC", c2:"#F8BBD0", icon:"award",   h:t.p2Hosp },
  { catKey:"plastic",     cat:t.catChipPlastic, title:t.p3Title, desc:t.p3Desc, price:"USD 1,800 – 6,400", stay:t.p3Stay, c1:"#FFF1F2", c2:"#FFC1CC", icon:"sparkle", h:t.p3Hosp },
  // Health Screening — 3
  { catKey:"screening",   cat:t.catChipScreen,  title:t.s1Title, desc:t.s1Desc, price:"USD 1,800 – 4,200", stay:t.s1Stay, c1:"#B3E5FC", c2:"#81D4FA", icon:"shield",  h:t.s1Hosp },
  { catKey:"screening",   cat:t.catChipScreen,  title:t.s2Title, desc:t.s2Desc, price:"USD 2,400 – 5,400", stay:t.s2Stay, c1:"#E1F5FE", c2:"#B3E5FC", icon:"shield",  h:t.s2Hosp },
  { catKey:"screening",   cat:t.catChipScreen,  title:t.s3Title, desc:t.s3Desc, price:"USD 1,400 – 3,200", stay:t.s3Stay, c1:"#F5FBFE", c2:"#B3E5FC", icon:"user",    h:t.s3Hosp },
  // Orthopedics — 3
  { catKey:"orthopedics", cat:t.catChipOrtho,   title:t.o1Title, desc:t.o1Desc, price:"USD 8,500 – 22,000",stay:t.o1Stay, c1:"#C8E6C9", c2:"#A5D6A7", icon:"award",   h:t.o1Hosp },
  { catKey:"orthopedics", cat:t.catChipOrtho,   title:t.o2Title, desc:t.o2Desc, price:"USD 11,000 – 19,000",stay:t.o2Stay,c1:"#B3E5FC", c2:"#69D2EC", icon:"award",   h:t.o2Hosp },
  { catKey:"orthopedics", cat:t.catChipOrtho,   title:t.o3Title, desc:t.o3Desc, price:"USD 1,800 – 6,400", stay:t.o3Stay, c1:"#E1F5FE", c2:"#A5D6A7", icon:"medkit",  h:t.o3Hosp },
  // Oncology — 3
  { catKey:"oncology",    cat:t.catChipOnc,     title:t.n1Title, desc:t.n1Desc, price:"USD 950 – 3,200",   stay:t.n1Stay, c1:"#173E66", c2:"#03ACF2", icon:"star",    h:t.n1Hosp },
  { catKey:"oncology",    cat:t.catChipOnc,     title:t.n2Title, desc:t.n2Desc, price:"USD 1,400 – 3,800", stay:t.n2Stay, c1:"#B3E5FC", c2:"#03ACF2", icon:"file",    h:t.n2Hosp },
  { catKey:"oncology",    cat:t.catChipOnc,     title:t.n3Title, desc:t.n3Desc, price:"USD 1,200 – 3,000", stay:t.n3Stay, c1:"#E1F5FE", c2:"#69D2EC", icon:"shield",  h:t.n3Hosp },
  // Fertility / IVF — 2
  { catKey:"fertility",   cat:t.catChipFert,    title:t.f1Title, desc:t.f1Desc, price:"USD 1,200 – 4,800", stay:t.f1Stay, c1:"#FFE0E6", c2:"#B3E5FC", icon:"user",    h:t.f1Hosp },
  { catKey:"fertility",   cat:t.catChipFert,    title:t.f2Title, desc:t.f2Desc, price:"USD 2,400 – 6,800", stay:t.f2Stay, c1:"#FCE4EC", c2:"#F8BBD0", icon:"user",    h:t.f2Hosp },
  // Dental — 3
  { catKey:"dental",      cat:t.catChipDent,    title:t.d1Title, desc:t.d1Desc, price:"USD 1,200 – 9,800", stay:t.d1Stay, c1:"#E1F5FE", c2:"#B3E5FC", icon:"plus",    h:t.d1Hosp },
  { catKey:"dental",      cat:t.catChipDent,    title:t.d2Title, desc:t.d2Desc, price:"USD 6,400 – 18,000",stay:t.d2Stay, c1:"#B3E5FC", c2:"#81D4FA", icon:"plus",    h:t.d2Hosp },
  { catKey:"dental",      cat:t.catChipDent,    title:t.d3Title, desc:t.d3Desc, price:"USD 2,200 – 5,800", stay:t.d3Stay, c1:"#FCE4EC", c2:"#F8BBD0", icon:"sparkle", h:t.d3Hosp },
];

const TreatmentsListPage = ({ bp = "desktop", drawerOpen = false }) => {
  const t = tk(T_TREAT, useKmedLang());
  const allCards = buildTreatCards(t);
  const [activeCat, setActiveCat] = React.useState("dermatology");

  React.useEffect(() => {
    const onJump = (e) => {
      const key = e && e.detail;
      if (typeof key === "string") setActiveCat(key);
    };
    window.addEventListener(KMED_CATJUMP_EVENT, onJump);
    return () => window.removeEventListener(KMED_CATJUMP_EVENT, onJump);
  }, []);

  const filteredCards = activeCat === "all" ? allCards : allCards.filter(c => c.catKey === activeCat);
  const activeLabel = ({
    all: t.catAll,
    dermatology: t.catDerm,
    plastic: t.catPlastic,
    screening: t.catScreen,
    orthopedics: t.catOrtho,
    oncology: t.catOnc,
    fertility: t.catFert,
    dental: t.catDent,
  })[activeCat] || t.catAll;
  const showingText = activeCat === "all"
    ? t.resultsAllShowing
    : `${t.resultsShowingPrefix}${activeLabel}${t.resultsShowingSuffix}`;
  const crumbs = activeCat === "all" || activeCat === "dermatology"
    ? [t.crumbHome, t.crumbTreat]
    : [t.crumbHome, t.crumbTreat, activeLabel];

  return (
  <div id="treatments-listing" className="kmed-page" data-bp={bp} data-screen-label={"02 Treatments " + bp}>
    <Header active="treat" bp={bp} drawerOpen={drawerOpen}/>
    <PageHero
      crumbs={crumbs}
      eyebrow={t.listEyebrow}
      title={t.listTitle}
      sub={t.listSub}
    >
      <div style={{display:"flex", gap:12, marginTop:28, alignItems:"center"}}>
        <div style={{flex:1, maxWidth:540, display:"flex", alignItems:"center", gap:10, padding:"14px 18px", background:"#fff", border:"1px solid var(--border-input)", borderRadius:999, boxShadow:"var(--shadow-soft)"}}>
          <Icon name="search" size={18} color="rgba(0,0,0,0.42)"/>
          <input style={{flex:1, border:0, outline:"none", font:"400 16px var(--font-body)"}} placeholder={t.searchPlaceholder} defaultValue={t.searchDefault}/>
          <button className="btn btn--primary" style={{padding:"8px 18px", fontSize:14}}>{t.searchBtn}</button>
        </div>
        <div style={{display:"flex", gap:8, marginLeft:8}}>
          <span onClick={()=>setActiveCat("all")} className={"tagpill" + (activeCat==="all"?" is-on":"")} style={{cursor:"pointer"}}>{t.pillAll}</span>
          <span className="tagpill">{t.pillPopular}</span>
          <span className="tagpill">{t.pillShortest}</span>
          <span className="tagpill">{t.pillLowest}</span>
        </div>
      </div>
    </PageHero>

    <section className="treat-layout" style={{padding:"32px 80px 80px", display:"grid", gridTemplateColumns:"300px 1fr", gap:36}}>
      <div className="treat-filters"><TreatFilter activeCat={activeCat} onChangeCat={setActiveCat}/></div>
      <div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom: 20}}>
          <div style={{font:"400 14px var(--font-body)", color:"var(--text-secondary)"}}><strong style={{color:"var(--text-primary)"}}>{filteredCards.length}{t.resultsCountSuffix}</strong>{showingText}</div>
          <div style={{display:"flex", alignItems:"center", gap:10, font:"400 14px var(--font-body)", color:"var(--text-secondary)"}}>
            {t.sortBy}
            <span style={{display:"inline-flex", alignItems:"center", gap:6, padding:"8px 14px", border:"1px solid var(--border-input)", borderRadius:999, font:"700 14px var(--font-body)", color:"var(--text-primary)", cursor:"pointer"}}>{t.sortRelevance} <Icon name="chevdown" size={14}/></span>
          </div>
        </div>
        <div className="card-grid-3" style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:24}}>
          {filteredCards.map((it,i)=>(
            <div key={it.catKey+"-"+i} className="tcard">
              <div className="tcard__media" style={{background:`linear-gradient(135deg, ${it.c1}, ${it.c2})`, aspectRatio:"5/3"}}>
                <div className="tcard__pin">{it.cat}</div>
                <div className="tcard__pin" style={{left:"auto", right:14, background:"rgba(255,255,255,0.94)", color:"var(--kmed-green-dark)"}}>{t.stayPrefix}{it.stay}</div>
                <div className="tile"><Icon name={it.icon} size={72} color="rgba(255,255,255,0.95)"/></div>
              </div>
              <div className="tcard__body">
                <div className="tcard__title">{it.title}</div>
                <div className="tcard__desc">{it.desc}</div>
                <div style={{display:"flex", alignItems:"center", gap:8, font:"400 12px var(--font-body)", color:"var(--text-secondary)", marginBottom:12}}>
                  <Icon name="pin" size={12} color="var(--kmed-pink)"/>{it.h}
                </div>
                <div className="tcard__foot">
                  <div className="tcard__price"><small>{t.estimateLabel}</small>{it.price}</div>
                  <button className="btn btn--green-flat" style={{padding:"8px 16px"}}>{t.estimateBtn}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
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
};

const DetailHero = () => {
  const t = tk(T_TREAT, useKmedLang());
  return (
  <section style={{position:"relative", padding:"56px 80px 64px", background:"linear-gradient(180deg, var(--kmed-pink-warm) 0%, #fff 100%)", overflow:"hidden"}}>
    <div style={{position:"absolute", right:-180, top:-100, width:520, height:520, borderRadius:"50%", border:"1px solid var(--kmed-aqua-soft)"}}></div>
    <div style={{position:"absolute", right:-80, top:60, width:340, height:340, borderRadius:"50%", background:"var(--gradient-soft)", opacity:.25}}></div>
    <div className="phero__crumbs" style={{position:"relative"}}>
      <a href="#" onClick={e=>e.preventDefault()}>{t.crumbHome}</a><span>›</span>
      <a href="#" onClick={e=>e.preventDefault()}>{t.crumbTreat}</a><span>›</span>
      <span style={{color:"var(--text-primary)", fontWeight:700}}>{t.detCrumb}</span>
    </div>
    <div style={{position:"relative", display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:48, alignItems:"center", marginTop:24}}>
      <div>
        <div style={{display:"flex", gap:8, marginBottom:18}}>
          <span className="trust-pill trust-pill--pink"><Icon name="sparkle" size={14} color="#E91E63"/>{t.detPillKB}</span>
          <span className="trust-pill"><Icon name="user" size={14} color="#00579B"/>{t.detPillPartners}</span>
          <span className="trust-pill trust-pill--green"><Icon name="cal" size={14} color="#357A38"/>{t.detPillProg}</span>
        </div>
        <h1 style={{font:"900 56px/1.1 var(--font-display)", margin:"0 0 16px", letterSpacing:"-0.01em"}}>{t.detTitle}</h1>
        <p style={{font:"400 19px/1.6 var(--font-body)", color:"var(--text-secondary)", margin:"0 0 28px", maxWidth:620}}>
          {t.detSub}
        </p>
        <div style={{display:"flex", alignItems:"center", gap:16}}>
          <button className="btn btn--primary btn--primary-lg">{t.detCtaEstimate} <Icon name="arrow" size={16} color="#fff"/></button>
          <button className="btn btn--ghost"><Icon name="chat" size={14}/>{t.detCtaChat}</button>
        </div>
        <div style={{display:"flex", gap:24, marginTop:32, paddingTop:24, borderTop:"1px solid var(--kmed-line)"}}>
          <div><div style={{font:"700 11px var(--font-body)", color:"var(--text-disabled)", letterSpacing:"0.12em", textTransform:"uppercase"}}>{t.statEstimate}</div><div style={{font:"700 18px var(--font-display)", color:"var(--kmed-green-dark)", marginTop:4}}>USD 480 – 2,400</div></div>
          <div><div style={{font:"700 11px var(--font-body)", color:"var(--text-disabled)", letterSpacing:"0.12em", textTransform:"uppercase"}}>{t.statStay}</div><div style={{font:"700 18px var(--font-display)", marginTop:4}}>{t.statStayValue}</div></div>
          <div><div style={{font:"700 11px var(--font-body)", color:"var(--text-disabled)", letterSpacing:"0.12em", textTransform:"uppercase"}}>{t.statAnesthesia}</div><div style={{font:"700 18px var(--font-display)", marginTop:4}}>{t.statAnesthesiaValue}</div></div>
          <div><div style={{font:"700 11px var(--font-body)", color:"var(--text-disabled)", letterSpacing:"0.12em", textTransform:"uppercase"}}>{t.statRecovery}</div><div style={{font:"700 18px var(--font-display)", marginTop:4}}>{t.statRecoveryValue}</div></div>
        </div>
      </div>
      <div className="surface" style={{padding:"24px", borderRadius:24, position:"relative"}}>
        <div style={{borderRadius:18, aspectRatio:"4/3", background:"linear-gradient(135deg, #FFE0E6, #F8BBD0)", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden"}}>
          <div style={{position:"absolute", inset:0, background:"radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), transparent 60%)"}}></div>
          <Icon name="sparkle" size={120} color="rgba(255,255,255,0.85)"/>
          <div style={{position:"absolute", left:18, top:18, padding:"6px 12px", borderRadius:999, background:"rgba(255,255,255,0.92)", color:"var(--kmed-pink)", font:"700 12px var(--font-body)", letterSpacing:"0.08em", textTransform:"uppercase"}}>{t.kbPin}</div>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginTop:20}}>
          <div style={{padding:"14px 16px", borderRadius:12, background:"var(--kmed-bg-soft)"}}>
            <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>{t.rateLabel}</div>
            <div style={{display:"flex", alignItems:"center", gap:6, marginTop:4}}>
              <Icon name="star" size={16} color="#F5B400"/>
              <span style={{font:"700 16px var(--font-body)"}}>4.8</span>
              <span style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>{t.rateReviews}</span>
            </div>
          </div>
          <div style={{padding:"14px 16px", borderRadius:12, background:"var(--kmed-bg-soft)"}}>
            <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>{t.langLabel}</div>
            <div style={{font:"700 14px var(--font-body)", marginTop:4}}>EN · 中文 · 日本語 · 繁體</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

const ComplianceNote = () => {
  const t = tk(T_TREAT, useKmedLang());
  return (
  <section style={{padding: "0 80px"}}>
    <div style={{padding:"16px 24px", borderRadius:12, background:"#FFFAEB", border:"1px solid #FDE68A", display:"flex", gap:14, alignItems:"flex-start"}}>
      <div style={{width:32, height:32, borderRadius:8, background:"#FCD34D", display:"flex", alignItems:"center", justifyContent:"center", flex:"none", color:"#7C5800", font:"900 14px var(--font-body)"}}>!</div>
      <div>
        <div style={{font:"700 14px var(--font-body)", color:"#7C5800", marginBottom:2}}>{t.cnTitle}</div>
        <div style={{font:"400 13px/1.55 var(--font-body)", color:"#7C5800"}}>
          {t.cnBody}
        </div>
      </div>
    </div>
  </section>
  );
};

const DetailTabs = () => {
  const t = tk(T_TREAT, useKmedLang());
  const [tab, setTab] = React.useState(0);
  const tabs = [t.tabOverview, t.tabProcedures, t.tabExpect, t.tabFaqs];
  return (
    <section style={{padding:"40px 80px 16px"}}>
      <div style={{display:"flex", gap:32, borderBottom:"1px solid var(--kmed-line)"}}>
        {tabs.map((tt,i)=>(
          <div key={tt} onClick={()=>setTab(i)} style={{padding:"14px 0", borderBottom: i===tab? "3px solid var(--kmed-aqua)":"3px solid transparent", marginBottom:-1, font:"700 16px var(--font-body)", color: i===tab?"var(--kmed-navy)":"var(--text-secondary)", cursor:"pointer"}}>{tt}</div>
        ))}
      </div>
    </section>
  );
};

const DetailBody = () => {
  const t = tk(T_TREAT, useKmedLang());
  const procedures = [
    { name:t.proc1Name, dur:t.proc1Dur, price:t.proc1Price, body:t.proc1Body },
    { name:t.proc2Name, dur:t.proc2Dur, price:t.proc2Price, body:t.proc2Body },
    { name:t.proc3Name, dur:t.proc3Dur, price:t.proc3Price, body:t.proc3Body },
    { name:t.proc4Name, dur:t.proc4Dur, price:t.proc4Price, body:t.proc4Body },
    { name:t.proc5Name, dur:t.proc5Dur, price:t.proc5Price, body:t.proc5Body },
  ];
  const faqs = [
    { q:t.faq1Q, a:t.faq1A },
    { q:t.faq2Q, a:t.faq2A },
    { q:t.faq3Q, a:t.faq3A },
    { q:t.faq4Q, a:t.faq4A },
  ];
  const included = [
    {icon:"chat", title:t.inc1Title, desc:t.inc1Desc},
    {icon:"file", title:t.inc2Title, desc:t.inc2Desc},
    {icon:"plane", title:t.inc3Title, desc:t.inc3Desc},
    {icon:"medkit", title:t.inc4Title, desc:t.inc4Desc},
    {icon:"shield", title:t.inc5Title, desc:t.inc5Desc},
    {icon:"award", title:t.inc6Title, desc:t.inc6Desc},
  ];
  const doctors = [
    {n:t.dr1Name, role:t.dr1Role, langs:t.dr1Lang},
    {n:t.dr2Name, role:t.dr2Role, langs:t.dr2Lang},
    {n:t.dr3Name, role:t.dr3Role, langs:t.dr3Lang},
  ];
  const clinics = [
    {i:t.cl1Init, n:t.cl1Name, l:t.cl1Loc},
    {i:t.cl2Init, n:t.cl2Name, l:t.cl2Loc},
    {i:t.cl3Init, n:t.cl3Name, l:t.cl3Loc},
  ];
  return (
    <section className="detail-grid" style={{padding:"32px 80px 80px", display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:48, alignItems:"flex-start"}}>
      <div style={{display:"flex", flexDirection:"column", gap:48}}>
        <div>
          <h2 style={{font:"900 32px var(--font-display)", margin:"0 0 14px", letterSpacing:"-0.01em"}}>{t.ovTitle}</h2>
          <p style={{font:"400 17px/1.7 var(--font-body)", color:"var(--text-primary)", margin:"0 0 14px"}}>{t.ovP1}</p>
          <p style={{font:"400 17px/1.7 var(--font-body)", color:"var(--text-secondary)", margin:0}}>{t.ovP2}</p>
        </div>

        <div>
          <h2 style={{font:"900 32px var(--font-display)", margin:"0 0 20px"}}>{t.incTitle}</h2>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14}}>
            {included.map((b,i)=>(
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
          <h2 style={{font:"900 32px var(--font-display)", margin:"0 0 20px"}}>{t.procTitle}</h2>
          <div className="surface--ring" style={{borderRadius:16, overflow:"hidden"}}>
            {procedures.map((p,i)=>(
              <div key={i} style={{display:"grid", gridTemplateColumns:"1.3fr 1fr 1fr 80px", padding:"18px 22px", borderBottom: i<procedures.length-1?"1px solid var(--kmed-line)":"none", alignItems:"center"}}>
                <div>
                  <div style={{font:"700 16px var(--font-body)"}}>{p.name}</div>
                  <div style={{font:"400 13px var(--font-body)", color:"var(--text-secondary)", marginTop:2}}>{p.body}</div>
                </div>
                <div style={{font:"400 14px var(--font-body)", color:"var(--text-secondary)"}}><Icon name="cal" size={14} color="rgba(0,0,0,0.4)"/> <span style={{verticalAlign:"middle", marginLeft:4}}>{p.dur}</span></div>
                <div style={{font:"700 14px var(--font-body)", color:"var(--kmed-green-dark)"}}>{p.price}</div>
                <div style={{textAlign:"right"}}><a href="#" className="btn btn--text" style={{fontSize:13}}>{t.procInfo}</a></div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{font:"900 32px var(--font-display)", margin:"0 0 20px"}}>{t.faqTitle}</h2>
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

      <div style={{display:"flex", flexDirection:"column", gap:24, position:"sticky", top:24}}>
        <div className="surface" style={{padding:"28px"}}>
          <div style={{font:"700 11px var(--font-body)", color:"var(--text-disabled)", letterSpacing:"0.14em", textTransform:"uppercase"}}>{t.rrEyebrow}</div>
          <div style={{font:"900 24px var(--font-display)", margin:"6px 0 16px"}}>{t.rrTitle}</div>
          <p style={{font:"400 14px/1.55 var(--font-body)", color:"var(--text-secondary)", margin:"0 0 18px"}}>{t.rrDesc}</p>
          <div style={{display:"flex", flexDirection:"column", gap:14, marginBottom:20}}>
            {[t.rrItem1, t.rrItem2, t.rrItem3, t.rrItem4].map(x=>(
              <div key={x} style={{display:"flex", alignItems:"center", gap:10, font:"400 13px var(--font-body)"}}><Icon name="check" size={14} color="#357A38"/>{x}</div>
            ))}
          </div>
          <button className="btn btn--primary" style={{width:"100%", justifyContent:"center", padding:"14px"}}>{t.rrCta} <Icon name="arrow" size={14} color="#fff"/></button>
          <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)", textAlign:"center", marginTop:12}}>{t.rrFree}</div>
        </div>

        <div className="surface--ring" style={{padding:"24px"}}>
          <div style={{font:"700 14px var(--font-display)", color:"var(--kmed-navy)", marginBottom: 14, letterSpacing:"0.08em", textTransform:"uppercase", fontSize:12}}>{t.rrDoctorsLabel}</div>
          <div style={{display:"flex", flexDirection:"column", gap:12}}>
            {doctors.map((d,i)=>(
              <div key={i} style={{display:"flex", gap:12, alignItems:"center", padding:"10px 0", borderBottom: i<2?"1px solid var(--kmed-line)":"none"}}>
                <div style={{width:48, height:48, borderRadius:"50%", background:"linear-gradient(135deg, var(--kmed-pink-warm), var(--kmed-aqua-soft))", display:"flex", alignItems:"center", justifyContent:"center", color:"var(--kmed-navy)", font:"900 16px var(--font-display)", flex:"none"}}>{d.n.charAt(0)}</div>
                <div style={{flex:1}}>
                  <div style={{font:"700 14px var(--font-body)"}}>{d.n}</div>
                  <div style={{font:"400 12px var(--font-body)", color:"var(--text-secondary)"}}>{d.role}</div>
                  <div style={{font:"400 11px var(--font-body)", color:"var(--kmed-aqua)"}}>{d.langs}</div>
                </div>
                <a href="#" className="btn btn--text" style={{fontSize:12}}>{t.rrProfile}</a>
              </div>
            ))}
          </div>
        </div>

        <div className="surface--ring" style={{padding:"24px"}}>
          <div style={{font:"700 12px var(--font-body)", color:"var(--kmed-navy)", marginBottom:14, letterSpacing:"0.08em", textTransform:"uppercase"}}>{t.rrClinicsLabel}</div>
          {clinics.map((c,i)=>(
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
