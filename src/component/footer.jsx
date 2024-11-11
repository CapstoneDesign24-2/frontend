import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <div className="info-item">
            <span className="info-label">CEO</span>
            <span className="info-value">김동현</span>
          </div>
          <div className="info-item">
            <span className="info-label">Phone number</span>
            <span className="info-value">010-9150-1063</span>
          </div>
          <div className="info-item">
            <span className="info-label">Email</span>
            <span className="info-value">donhyunkim@naver.com</span>
          </div>
        </div>

        <div className="footer-address">
          <div className="info-item">
            <span className="info-label">Address</span>
            <span className="info-value">서울특별시 성북구 서경로 124, 유닛원 16층-디공장(정릉동, 서경대학교)</span>
          </div>
          <div className="footer-brand">
            <img src="/Logo.png" alt="FFG" className="footer-logo" />
            <span className="company-name">FAR FROM GENIUS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
