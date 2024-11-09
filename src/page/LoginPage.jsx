// LoginPage.jsx
import { useState } from 'react';
import '../css/LoginPage.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    keepLoggedIn: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>회원 로그인</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="id" placeholder="아이디" value={formData.id} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" name="keepLoggedIn" checked={formData.keepLoggedIn} onChange={handleChange} />
              로그인 유지
            </label>
          </div>
          <button type="submit">로그인</button>
          <div className="links">
            <a>비밀번호찾기</a>
            <span className="divider">|</span>
            <a href="/signup">회원가입</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
