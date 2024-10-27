import React, { useState, useRef } from 'react';
import '../css/MainPage.css';

const MainPage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const scrollingRef = useRef(false);
  const sections = ['hero', 'whoWeAre', 'whatWeDo', 'technology', 'directions', 'goto'];

  const handleWheel = (e) => {
    e.preventDefault();

    if (scrollingRef.current) return;

    // 스크롤 감도 임계값 설정
    const scrollThreshold = 50; // 이 값을 조절하여 스크롤 감도 변경

    if (Math.abs(e.deltaY) < scrollThreshold) return; // 임계값보다 작은 스크롤은 무시

    scrollingRef.current = true;

    if (e.deltaY > 0 && currentSection < sections.length - 1) {
      setCurrentSection((curr) => curr + 1);
    } else if (e.deltaY < 0 && currentSection > 0) {
      setCurrentSection((curr) => curr - 1);
    }

    setTimeout(() => {
      scrollingRef.current = false;
    }, 1000);
  };

  const handleDotClick = (index) => {
    if (!scrollingRef.current) {
      setCurrentSection(index);
      scrollingRef.current = true;
      setTimeout(() => {
        scrollingRef.current = false;
      }, 1000);
    }
  };

  React.useEffect(() => {
    const container = document.querySelector('.main-container');
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [currentSection]);

  return (
    <div className="main-container">
      <div className="nav-dots">
        {sections.map((_, index) => (
          <button
            key={index}
            className={`nav-dot ${currentSection === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      <div className="sections-container" style={{ transform: `translateY(-${currentSection * 100}vh)` }}>
        <section className="hero-section">
          <div className="hero-content">
            <h1>Content proof service using AI</h1>
            <p className="hero-subtitle">
              AI 기술과 빅데이터를 활용하여 법적 분쟁 및 계약 문제 해결을 위한 내용증명을 작성 자동화하고, 사용자가 쉽고
              빠르게 생각 대응을 할 수 있도록 지원합니다.
            </p>
          </div>
        </section>
        <section className="who-section">
          <div className="content-wrapper">
            <h2>Who We Are</h2>
            <p>
              저희들만의 AI솔루션 기술을 활용하여 내용 증명 작성을 자동화 및 지원하며, 사용자가 쉽고 빠르게 법적대응을
              할 수 있도록 지원합니다.
            </p>
          </div>
        </section>
        <section className="what-section">
          <div className="content-wrapper">
            <h2>What We Do</h2>
            <div className="what-content">
              <div className="service-flow">
                <div className="service-point">정보기반 동작 하락과 사건 검색 매칭</div>
                <div className="brand">FAR FROM GENIUS</div>
                <div className="service-point">다차원 서류 카테고리 매칭</div>
                <div className="result">AI를 활용한 법적 거의 문서 작성 생성</div>
              </div>
            </div>
          </div>
        </section>
        <section className="tech-section">
          <div className="content-wrapper">
            <h2>Our Own Technology</h2>
            <div className="tech-content">
              <h3>자연어 처리 및 생성</h3>
              <p>사용자가 제공한 질문을 이해 및 분석하여 법적 요건에 맞는 문서 작성</p>
            </div>
          </div>
        </section>
        <section className="directions-section">
          <div className="content-wrapper">
            <h2>Directions</h2>
            <div className="map-container">{/* Map implementation */}</div>
          </div>
        </section>
        <section className="goto-section">
          <div className="content-wrapper">
            <div className="goto-buttons">
              <button className="goto-btn calendar">글 작성</button>
              <button className="goto-btn edit">내용 증명</button>
              <button className="goto-btn payment">계시판</button>
              <button className="goto-btn faq">FAQ</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
