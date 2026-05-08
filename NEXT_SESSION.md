# K-Med Global — 다음 세션 작업 목록

이번 세션에서 발견되었으나 별도 분리한 작업 목록입니다.

## 1. JSX 하드코딩 hex 토큰화 (kmed-treatment-detail-visual.jsx, 8건)

다음 위치에서 hex 코드를 CSS 토큰으로 치환:

- line 190: `const c = "#00579B"; const cAccent = "#69D2EC"`
- line 403: Icon `color="#E91E63"` (sparkle)
- line 404: Icon `color="#00579B"` (user)
- line 405: Icon `color="#357A38"` (cal)
- line 424: `MetaIcon ... c="#6b7280"`
- line 443: Icon `color="#F5B400"` (star)
- line 557: Icon `color="#357A38"` (check)
- line 603-608: TDComplianceNote amber 톤 4색

## 2. Home (kmed-home-visual.jsx) 동일 하드코딩 검사

같은 패턴의 하드코딩 hex를 Home에서도 점검하고 토큰화 적용 여부 결정.

## 3. 신규 토큰 후보 검토 및 추가

- Star gold: `#F5B400`
- Warning amber 4색: `#FFFAEB` / `#FDE68A` / `#FCD34D` / `#7C5800` (TDComplianceNote)
- Aqua-soft secondary: `#69D2EC` (kmed-home-visual.jsx, kmed-treatment-detail-visual.jsx 일러스트에서 일관 사용 중)

토큰명 후보 (협의 필요):

- `--kmed-gold-star`
- `--kmed-warning-bg` / `--kmed-warning-border` / `--kmed-warning-accent` / `--kmed-warning-text`
- `--kmed-aqua-secondary`

## 4. TDTabs 클릭 동작 구현

`kmed-treatment-detail-visual.jsx` line 615의 TDTabs 컴포넌트:

- 현재 `setTab` 호출 후 `tab` state가 어디에도 사용되지 않음
- 탭별 컨텐츠 스위칭 또는 anchor 스크롤 인터랙션 추가 필요

## 5. FAQ Accordion 인터랙션

`kmed-treatment-detail-visual.jsx` line 542:

- 현재 첫 번째 항목만 펼쳐진 정적 표시 (`{i===0 && ...}`)
- 클릭으로 펼침/접힘 토글 동작 추가

## 6. IMA 등록번호 클라이언트 실제 번호 확인 및 교체

- 현재 표기: `Reg. No. KMHW-IMA-2026-0421` (시안용)
- 클라이언트로부터 실제 등록번호 확보 후 다음 위치 일괄 교체:
  - kmed-shared.jsx line 139, 151, 190, 221
  - CLAUDE.md Compliance Rules 섹션
- 프로덕션 배포 전 필수 교체 항목

---

분리 사유: 이번 세션은 컴플라이언스 + 문서 정합성 우선. 토큰 작업과 인터랙션 구현은 클라이언트 컨펌 후 별도 진행.

Generated: 2026-05-09
