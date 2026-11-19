# SAMSUNG 공식 온라인 스토어 (풀블리드 GitHub Pages 버전)

풀블리드(Edge-to-Edge) 히어로 슬라이더와 스크롤 연동 순백색 제품 갤러리, 삼성 계정 로그인/회원가입 및 장바구니 결제 기능이 통합된 단일 HTML(`index.html` + `img/`) 스토어입니다.

## 폴더 구조
```text
├── index.html          # 풀블리드 UI · 스크롤 패럴랙스 · 쇼핑몰 JS/CSS 통합 메인 파일
├── .nojekyll           # GitHub Pages 정적 파일 서빙 최적화 설정
├── README.md           # 배포 가이드
└── img/                # 슬라이더 배너 4종 및 추천 상품 10종 이미지 (총 14종)
```

## GitHub Pages 배포 방법
1. `samsung-store-gh-pages-v2.zip` 압축을 해제합니다.
2. GitHub 저장소 루트(Root)에 `index.html`, `.nojekyll`, `img/` 폴더 전체를 업로드합니다.
3. **Settings → Pages**에서 Branch를 `main` / `/ (root)`로 지정하면 즉시 배포됩니다.
