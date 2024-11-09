import { useState } from 'react';
import styles from '../css/LoginPage.module.css';

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
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.title}>회원 로그인</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="id"
              placeholder="아이디"
              value={formData.id}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="keepLoggedIn"
                checked={formData.keepLoggedIn}
                onChange={handleChange}
                className={styles.checkbox}
              />
              로그인 유지
            </label>
          </div>
          <button className={styles.loginBtn} type="submit">
            로그인
          </button>
          <div className={styles.links}>
            <a className={styles.link}>비밀번호찾기</a>
            <span className={styles.divider}>|</span>
            <a href="/signup" className={styles.link}>
              회원가입
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
