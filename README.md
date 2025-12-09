# 🎨 Advanced Swiper Gallery

현대적이고 인터랙티브한 3D 이미지 갤러리 웹 애플리케이션입니다. Swiper.js를 활용하여 부드러운 애니메이션과 다양한 시각 효과를 제공합니다.

![Gallery Preview](https://github.com/user-attachments/assets/2d6fb64a-ba2c-4f73-b1fc-765c5803eed4)

## ✨ 주요 기능

### 🎭 다양한 뷰 모드

- **3D Coverflow**: 입체적인 3D 회전 효과
- **Cards**: 카드 스택 형태의 슬라이드
- **Flip**: 카드 뒤집기 효과

![View Modes](https://github.com/user-attachments/assets/17b73add-2f07-496b-9fba-3b89cd41460b)

### 🎮 인터랙티브 컨트롤

- ▶️ 자동재생/일시정지 버튼
- ⏮️⏭️ 이전/다음 슬라이드 네비게이션
- ⌨️ 키보드 단축키 지원
  - `←` `→` : 슬라이드 이동
  - `Space` : 자동재생 토글

### 🎨 시각적 효과

- 그라데이션 배경 애니메이션
- 유리 모피즘(Glassmorphism) 디자인
- 리플 애니메이션 효과
- 이미지 줌 및 오버레이
- 프로그레스 바로 진행 상황 표시

![Visual Effects](https://github.com/user-attachments/assets/85cf65c6-7670-44c7-8ae8-673c76885632)

### 🏷️ 컨텐츠 구성

- 이미지와 설명 텍스트
- 해시태그 스타일 태그 시스템
- 슬라이드 번호 페이지네이션

![Content Structure](https://github.com/user-attachments/assets/1ae619bc-213b-4a14-9a7b-330e04c875fa)

## 📁 프로젝트 구조

```
advanced-swiper-gallery/
│
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css       # 스타일시트
├── js/
│   └── main.js         # JavaScript 로직
└── img/
    ├── favicon.ico     # 파비콘
    ├── pic1.png        # 갤러리 이미지 1
    ├── pic2.png        # 갤러리 이미지 2
    ├── pic3.png        # 갤러리 이미지 3
    ├── pic4.png        # 갤러리 이미지 4
    └── pic5.png        # 갤러리 이미지 5
```

![Project Structure](https://github.com/user-attachments/assets/eb0d6988-79f3-4961-924f-1bf96219bb90)

## 🚀 시작하기

### 필수 요구사항

- 웹 브라우저 (Chrome, Firefox, Safari, Edge 등)
- 로컬 웹 서버 (Live Server 권장)

### 설치 방법

1. **저장소 클론**

```bash
git clone https://github.com/yourusername/advanced-swiper-gallery.git
cd advanced-swiper-gallery
```

2. **파일 구조 확인**

```
프로젝트 폴더/
├── index.html
├── css/style.css
├── js/main.js
└── img/
    └── (이미지 파일들)
```

3. **로컬 서버 실행**

   - VS Code의 Live Server 확장 프로그램 사용
   - 또는 Python 서버:

   ```bash
   python -m http.server 8000
   ```

4. **브라우저에서 열기**
   ```
   http://localhost:8000
   ```

## 🛠️ 기술 스택

### 프론트엔드

- **HTML5**: 시맨틱 마크업
- **CSS3**:
  - Flexbox 레이아웃
  - CSS Grid
  - CSS Animations & Transitions
  - Backdrop Filter (유리 효과)
- **JavaScript (ES6+)**:
  - 이벤트 처리
  - DOM 조작
  - 비동기 처리

### 라이브러리 & 프레임워크

- **[Swiper.js](https://swiperjs.com/)** v11.x
  - 터치 제스처 지원
  - 반응형 디자인
  - 다양한 전환 효과
- **[Font Awesome](https://fontawesome.com/)** v6.4.0
  - 아이콘 세트
- **Google Fonts**
  - Roboto (본문 텍스트)
  - Orbitron (헤딩 텍스트)

## 📱 반응형 디자인

- **데스크톱** (1920px 이상): 풀 사이즈 갤러리
- **태블릿** (768px - 1919px): 조정된 레이아웃
- **모바일** (768px 이하): 최적화된 모바일 UI

## ⌨️ 키보드 단축키

| 키      | 동작          |
| ------- | ------------- |
| `←`     | 이전 슬라이드 |
| `→`     | 다음 슬라이드 |
| `Space` | 자동재생 토글 |

## 🎨 커스터마이징

### 색상 변경

`css/style.css` 파일의 그라데이션 색상을 수정:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
```

### 이미지 추가

1. `img/` 폴더에 이미지 추가
2. `index.html`에 새로운 슬라이드 블록 추가:

```html
<div class="swiper-slide">
  <div class="inner">
    <div class="con">
      <div class="img-container">
        <img src="img/your-image.png" alt="설명" />
        <div class="img-overlay"></div>
      </div>
      <h2>제목</h2>
      <p>설명 텍스트</p>
      <div class="tags">
        <span class="tag">태그1</span>
        <span class="tag">태그2</span>
      </div>
    </div>
  </div>
</div>
```

### 애니메이션 속도 조정

`js/main.js`에서 Swiper 설정 수정:

```javascript
speed: 1000,  // 전환 속도 (ms)
autoplay: {
    delay: 3000,  // 자동재생 지연 (ms)
}
```

## 🌐 브라우저 지원

| 브라우저 | 버전         |
| -------- | ------------ |
| Chrome   | 최신 버전 ✅ |
| Firefox  | 최신 버전 ✅ |
| Safari   | 최신 버전 ✅ |
| Edge     | 최신 버전 ✅ |
| Opera    | 최신 버전 ✅ |

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 👨‍💻 개발자

**WH (Woohyuk)**

- GitHub: [@toto6343](https://github.com/toto6343)

## 🤝 기여하기

기여를 환영합니다! 다음 단계를 따라주세요:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 변경 로그

### v2.0.0 (2024-12-09)

- ✨ 3가지 뷰 모드 추가 (3D, Cards, Flip)
- 🎨 현대적인 유리 모피즘 디자인 적용
- 📊 프로그레스 바 추가
- ⌨️ 키보드 단축키 지원
- 🏷️ 태그 시스템 구현
- 📱 반응형 디자인 개선
- 🎭 리플 애니메이션 효과

### v1.0.0 (Initial Release)

- 🎉 기본 Swiper 갤러리 구현
- 🎮 자동재생 기능
- 🎨 기본 스타일링

## 🙏 감사의 말

- [Swiper.js](https://swiperjs.com/) - 훌륭한 슬라이더 라이브러리
- [Font Awesome](https://fontawesome.com/) - 아이콘 제공
- [Google Fonts](https://fonts.google.com/) - 폰트 제공
- [Unsplash](https://unsplash.com/) - 고품질 이미지 소스

## 📞 문의하기

프로젝트에 대한 질문이나 제안사항이 있으시면 이슈를 생성해주세요!

---

⭐ 이 프로젝트가 마음에 드셨다면 Star를 눌러주세요!
