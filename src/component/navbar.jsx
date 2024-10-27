// Navbar.jsx
import React, { useState } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src="/Logo.png" alt="FFG Logo" className="logo" />
        <div className="logo-text">FAR FROM GENIUS</div>
      </div>

      <div className="nav-links">
        <a href="/login" className="nav-link">
          로그인
        </a>
        <a href="/company" className="nav-link">
          회원가입
        </a>
        <div className="language-selector">
          <div className="language-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <span>KOR</span>
            <span className={`arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
          </div>

          {isDropdownOpen && (
            <div className="language-dropdown">
              <button className="dropdown-item">한국어</button>
              <button className="dropdown-item">English</button>
              <button className="dropdown-item">Tiếng Việt</button>
              <button className="dropdown-item">ไทย</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
