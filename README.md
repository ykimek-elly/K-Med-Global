# K-Med Global

해외 환자(일본, 중국, 대만, 러시아, 미국)를 한국의 인증 병원과 연결하는 의료관광 플랫폼 — 시안 단계 저장소.

> 시안용 저장소입니다. 코드 내 등장하는 회사 정보, 병원명, 의사명, 등록번호, 가격, 환자 후기 등 모든 식별 콘텐츠는 디자인 검토용 placeholder이며, 프로덕션 배포 전 클라이언트 실제 정보로 교체가 필요합니다.

## 현재 상태

- 단계: 시안 컨펌 진행 중
- 톤앤매너 적용: Home (Desktop 1440), Treatment Detail · Dermatology (Desktop 1440)
- 남은 작업 백로그: [`NEXT_SESSION.md`](NEXT_SESSION.md)

## 미리보기

GitHub Pages 호스팅 설정 예정 — 활성화 후 이 섹션에 링크가 추가됩니다.

예상 URL: `https://ykimek-elly.github.io/K-Med-Global/`

로컬 미리보기 (정적 서버 실행 후 브라우저에서 `index.html` 접속):

```bash
python3 -m http.server 8080
```

## 기술 스택

- React 18 + JSX (Babel standalone, 빌드 단계 없음)
- Vanilla CSS (Tailwind 미사용)
- 5Medical Health Design System (`ds/colors_and_type.css`)
- 폰트: Lato (display/UI), Roboto (body)

## 페이지 구조

9개 페이지 × 3 브레이크포인트 (Mobile 375 / Tablet 768 / Desktop 1440):

1. Home
2. Treatments listing
3. Treatment Detail
4. Get Matched (5-step intake)
5. Why Korea
6. Stories
7. Contact
8. Admin · Lead list
9. Admin · Lead detail

[`index.html`](index.html)에서 9 페이지 × 3 브레이크포인트를 단일 캔버스로 한눈에 확인할 수 있습니다. 톤앤매너 단독 프리뷰는 [`home-visual.html`](home-visual.html), [`treatment-detail-visual.html`](treatment-detail-visual.html)에서 제공됩니다.

## 컴플라이언스 (한국 의료광고법 준수)

본 프로젝트는 한국 의료광고법 준수를 전제로 작업됩니다.

- Before/After 사진 절대 금지
- 환자 얼굴 정면 노출 금지 (실루엣, 뒷모습, 부분 컷은 허용)
- 시술 결과 및 시술 중 이미지 금지 (피부 클로즈업 포함)
- 최상급 표현 금지 ("최고의", "보장된", "100%", "최상의" 등)
- 자동 가격 계산기 금지 (가격은 항상 "범위 + Estimate request CTA")
- Disclaimer 배너 유지 (Treatment Detail 등)
- IMA 등록번호 푸터 표기 (현재 시안용 placeholder)
- Patient Stories는 텍스트 only (사진 없음)

상세 규정과 자체 점검 체크리스트는 [`CLAUDE.md`](CLAUDE.md) Compliance Rules 섹션을 참조하세요.

## 파일 구조

핵심 파일과 컴포넌트 매핑은 [`CLAUDE.md`](CLAUDE.md) File Structure 섹션에 정리되어 있습니다.

## 개발 노트

- [`CLAUDE.md`](CLAUDE.md) — 프로젝트 컨텍스트 문서. 디자인 시스템, 컴플라이언스 룰, 코딩 컨벤션, 비주얼 어휘를 정의합니다. Claude Code 세션 시작 시 자동 로드됩니다.
- [`NEXT_SESSION.md`](NEXT_SESSION.md) — 다음 세션 작업 백로그. 토큰화 작업, 인터랙션 구현(TDTabs, FAQ accordion), IMA 등록번호 클라이언트 실제 번호 교체 등 6개 항목.
