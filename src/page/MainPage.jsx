import React from 'react';
import '../css/MainPage.css';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  let navigate = useNavigate();
  return (
    <div className="page-wrapper">
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Content proof service using AI</h1>
            <p className="hero-subtitle">
              Sử dụng công nghệ AI và mô hình dịch thuật để tự động hóa và tối ưu hóa việc lập chứng minh nội dung để
              giải quyết tranh chấp pháp lý và vấn đề hợp đồng, hỗ trợ người sử dụng có thể ứng phó pháp lý một cách dễ
              dàng và nhanh chóng.
            </p>
          </div>
        </section>
        <div className="image-container">
          <img src="/MainPage2.png" alt="메인 이미지" className="main-image" />
        </div>
        <section className="goto-section">
          <div className="content-wrapper">
            <h2 className="section-title">Go To</h2>
            <div className="goto-buttons">
              <button
                className="goto-btn edit"
                onClick={() => {
                  navigate('/proof-form');
                }}
              >
                <div className="goto-title">Viết chứng minh nội dung</div>
                <img src="/내용증명.png" alt="" className="icon" />
              </button>

              <button
                className="goto-btn faq"
                onClick={() => {
                  navigate('/faq');
                }}
              >
                <div className="goto-title">Nhận tư vấn pháp luật</div>
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
