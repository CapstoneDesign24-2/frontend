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
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="id"
              placeholder="id"
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
              placeholder="password"
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
              Duy trì login
            </label>
          </div>
          <button className={styles.loginBtn} type="submit">
            login
          </button>
          <div className={styles.links}>
            <a className={styles.link}>Tìm mật khẩu</a>
            <span className={styles.divider}>|</span>
            <a href="/signup" className={styles.link}>
              gia nhập hội viên
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
