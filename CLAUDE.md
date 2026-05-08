# K-Med Global — Project Context for Claude Code

Claude Code가 모든 세션에서 자동으로 불러오는 컨텍스트 파일.
이 프로젝트의 디자인 시스템, 컴플라이언스, 코딩 컨벤션을 정의합니다.

## Project Overview

K-Med Global은 해외 환자(일본, 중국, 대만, 러시아, 미국)를 한국의 인증 병원과 연결하는 의료관광 플랫폼 웹사이트입니다.

- 포지셔닝: International Patient Agency (의료기관 아님)
- 브랜드 톤: 임상적이고 신뢰감 있되, 차갑지 않고 국제적으로 접근 가능
- 디자인 시스템: 5Medical Health Design System

## Tech Stack

- Frontend: React + JSX (Vanilla JavaScript)
- Styling: Vanilla CSS (Tailwind 미사용)
- Design tokens: ds/colors_and_type.css
- Fonts: Lato (display/UI), Roboto (body) — ds/assets/fonts/
- Breakpoints: Mobile 375 / Tablet 768 / Desktop 1440

## File Structure

- index.html — Entry, 9 rows × 3 breakpoints canvas
- index-print.html — 인쇄용 캔버스 변형
- home-visual.html, treatment-detail-visual.html — 톤앤매너 적용 페이지 단독 프리뷰
- design-canvas.jsx — DCSection / DCArtboard 캔버스 프레임워크
- kmed.css — 메인 CSS (.kmed-* 컴포넌트 클래스)
- kmed-responsive.css, kmed-responsive-2.css, kmed-responsive-3.css — 반응형 + 패딩 fix pack (gutters + tablet 2-col)
- kmed-shared.jsx — 공통 Header / Footer / Icon / Logo
- kmed-home.jsx — 데스크톱 Home
- kmed-home-visual.jsx — 톤앤매너 적용된 Home (HomePageVisual)
- kmed-treatments.jsx — 데스크톱 Treatments list + Detail
- kmed-treatment-detail-visual.jsx — 톤앤매너 적용 Treatment Detail
- kmed-forms.jsx — Get Matched + Contact
- kmed-content.jsx — Why Korea + Stories
- kmed-admin.jsx — Admin List + Detail
- kmed-responsive-shell.jsx — HeaderResponsive + FooterResponsive
- kmed-responsive-pages.jsx — M/T: Home + Treatments list
- kmed-responsive-pages-2.jsx — M/T: Detail / Get Matched / Why / Stories / Contact
- kmed-responsive-admin.jsx — M/T: Admin pages (incl. bottom nav)
- ds/colors_and_type.css
- ds/assets/fonts/

## Design System Tokens (반드시 사용, 하드코딩 금지)

### Colors
- --kmed-navy #00579B — Primary brand, CTA, headings
- --kmed-aqua #03ACF2 — Accents, links
- --kmed-aqua-soft #B3E5FC — Hero washes, soft backgrounds
- --kmed-green #4CAF50 — Success, pricing highlights
- --kmed-green-dark #357A38 — Pricing numerals
- --kmed-pink-warm #FFF1F2 — Hero backgrounds, CTA gradients
- --kmed-line rgba(0,0,0,0.08) — Hairline borders

### Typography
- Display: 56px / 48px (T) / 36px (M) — Lato 900, -0.01em
- H1: 40 / 36 (T) / 28 (M) — Lato 900
- H2: 32 / 28 (T) / 24 (M) — Lato 700
- Body: 18 / 17 (T) / 16 (M) — Roboto 400
- Eyebrow: 12px Lato 700, navy, 0.12em letter-spacing

### Component Patterns (변경 금지)
- Cards: 24px padding, 16px radius, 1px --kmed-line border
- CTA banner: 대각선 navy → aqua 그라디언트, 흰색 pill 버튼
- Page hero: pink wash + aqua circular ring, breadcrumbs above title
- Stats: green-dark 숫자 on warm-canvas card
- Status pills: new=aqua / review=amber / matched=green / scheduled=pink / closed=gray

### Section Spacing
- Mobile: 좌우 padding 16px
- Tablet: 좌우 padding 28px
- Desktop: max-width container + auto margin

## Compliance Rules (한국 의료광고법, 절대 준수)

이 프로젝트의 모든 작업은 다음을 위반해서는 안 됩니다:

- Before/After 사진 절대 금지 (모든 페이지)
- 환자 얼굴 정면 노출 금지 (실루엣, 뒷모습, 부분 컷은 허용)
- 시술 결과 및 시술 중 이미지 금지 (피부 클로즈업도 피할 것)
- 최상급 표현 금지: "최고의", "보장된", "100%", "최상의"
- 자동 가격 계산기 금지 (가격은 항상 "범위 + Request estimate CTA")
- Disclaimer 배너 유지: Treatment Detail 등에서
- IMA 등록번호 푸터에 항상 표기 (Reg. No. KMHW-IMA-2026-0421)
  - 시안용 표기. 프로덕션 배포 전 클라이언트 실제 등록번호로 교체 필요
- Patient Stories는 텍스트 only (사진 없음)

새로운 컴포넌트나 페이지를 만들 때마다 위 항목 자체 점검 필수.

## Coding Conventions

### Naming
- 톤앤매너 적용 비주얼 컴포넌트: kmed-{page}-visual.jsx
- 반응형 변형: kmed-responsive-{group}.jsx
- HTML 프리뷰 페이지: {page}-visual.html

### CSS
- 새 컴포넌트는 기존 클래스명 패턴(.kmed-*) 따를 것
- 토큰 사용 강제 (예: #00579B 같은 하드코딩 금지, var(--kmed-navy) 사용)
- box-sizing: border-box를 모든 컴포넌트에 적용

### JSX
- 함수형 컴포넌트, hooks 사용
- 한 파일에 관련 컴포넌트 묶기 (현재 파일 구조 유지)
- 기존 컴포넌트 클래스명, 구조 변경 금지 (반응형 룰이 깨질 수 있음)

### Responsive
- Mobile/Tablet은 *Responsive 컴포넌트, Desktop은 원본 사용
- 카드 그리드: Mobile 1-col / Tablet 2-col / Desktop 3-5-col
- 5장 이상 카드 row는 Mobile에서 horizontal swipe carousel + dot indicator

## Visual Vocabulary (Home에서 확립됨, 반드시 일관성 유지)

kmed-home-visual.jsx에서 정립된 비주얼 어휘를 다른 페이지에 확장 시 일관되게 적용:

- Hero illustration: editorial side-view, 사람 없음, 한국적 모티프 은은하게 (창·도시 실루엣·찻잔·서류·식물의 실내 씬)
- Treatment 카테고리 SVG: 토큰 컬러 그라디언트 위 기하학·추상 모티프 (Dermatology / Health Screening / Orthopedics / Plastic Surgery / Oncology / Dental, 6종 정의됨)
- Hospital 모노그램: 토큰 컬러 타일 + 기하학 마크 (asan / samsung / snu / severance / guro / pusan / kangbuk / wooridul, 8종 정의됨)
- Patient avatar: 추상 패턴 원형 (ripple / dot grid / arc, 3종)
- ProcedureIcon (5종): consult / facial / laser / hifu / kit — 28×28 outline
- DoctorAvatar (3종): cross / ecg / waveform — 추상 의료 모티프 원형
- ClinicMark (3종): lumina / ssi / bom — 토큰 컬러 타일 + 기하학 마크

## Communication Preferences

- 답변은 한국어로 해주세요
- 코드 변경 후 변경 내역을 한국어로 요약해주세요
- 큰 변경 전 plan 모드로 계획 먼저 보여주세요
- 디자인 시스템이나 컴플라이언스 위반 가능성이 보이면 진행 전 확인 요청해주세요

## Workflow Notes

- Pages Delivered: 9페이지 (Home, Treatments listing, Treatment Detail, Get Matched, Why Korea, Stories, Contact, Admin List, Admin Detail)
- Breakpoints: Mobile 375 / Tablet 768 / Desktop 1440 (모두 완성됨)
- Tone & Manner: Home + Treatment Detail (Dermatology) Desktop 1440 적용됨
- 다음 작업 예정: 클라이언트 컨펌 후 Why Korea 톤앤매너 적용 (시안 컨펌이 우선)

## Open Items

- [x] Treatment Detail 톤앤매너 적용 (Dermatology 완료, 타 카테고리 미적용)
- [ ] Why Korea 톤앤매너 적용
- [ ] 나머지 6페이지 톤앤매너 일괄 적용
- [ ] Mobile/Tablet 비주얼 reflow 검증
- [ ] Get Matched STEP 3, 4, 5 + 매칭 완료 화면
- [ ] Empty states (Treatments listing, Admin List)
- [ ] Doctor profile 페이지 (다음 라운드)
- [ ] Booking flow (다음 라운드)
- [ ] 다국어 (JP/CN/TW/RU) 검증

Last updated: 2026-05-09
