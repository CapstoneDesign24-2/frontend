import React from 'react';
import '../css/MainPage.css';

const MainPage = () => {
  return (
    <div className="page-wrapper">
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Content proof service using AI</h1>
            <p className="hero-subtitle">
              AI 기술과 번역모델을 활용하여 법적 분쟁 및 계약 문제 해결을 위한 내용증명 작성을 자동화하고 최적화하여,
              사용자가 쉽고 빠르게 법적 대응을 할 수 있도록 지원합니다.
            </p>
          </div>
        </section>

        <section className="who-section">
          <div className="content-wrapper">
            <h2 className="section-title">Who We Are</h2>
            <p>
              파프롬지니어스는 AI 기술을 활용하여 내용 증명 작성을 자동화 및 최적화하여, 사용자가 쉽고 빠르게 법적
              대응을 할 수 있도록 지원합니다.
            </p>
          </div>
        </section>

        <section className="what-section">
          <div className="content-wrapper">
            <h2 className="section-title">What We Do</h2>
            <div className="what-container">
              <img src="/WhatWeDo.png" alt="Company Location" />
            </div>
          </div>
        </section>

        <section className="tech-section">
          <div className="content-wrapper">
            <h2 className="section-title">Our Own Technology</h2>
            <div className="tech-features">
              <div className="tech-item">
                <h3>자연어 처리 및 생성</h3>
                <p>
                  사용자가 제공한 정보를 이해 및 분석하여 법적 요구에 맞는 문서 자동 생성
                  <br />
                  적절한 법적 표현을 생성하며 사용자 요구에 맞는 맞춤형 내용 증명 작성
                </p>
              </div>
              <div className="tech-item">
                <h3>번역 모델 학습 및 사용</h3>
                <p>
                  정해진 법률 데이터를 학습시켜 모델에 적용
                  <br />
                  특정 용어들이 일관되게 번역되도록 지속적인 모델 개선
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="directions-section">
          <div className="content-wrapper">
            <h2 className="section-title">Directions</h2>
            <div className="map-container">
              <img src="/map.png" alt="Company Location" />
            </div>
          </div>
        </section>

        <section className="goto-section">
          <div className="content-wrapper">
            <h2 className="section-title">Go To</h2>
            <div className="goto-buttons">
              <button className="goto-btn calendar">
                <h2>글 작성</h2>
                <img src="/글작성.png" alt="" className="icon" />
              </button>
              <button className="goto-btn edit">
                <h3>내용 증명</h3>
                <img src="/내용증명.png" alt="" className="icon" />
              </button>
              <button className="goto-btn payment">
                <h3>게시판</h3>
                <img src="/게시판.png" alt="" className="icon" />
              </button>
              <button className="goto-btn faq">
                <h3>FAQ</h3>
                <img src="/FAQ.png" alt="" className="icon" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
