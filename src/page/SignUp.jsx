import { useState } from 'react';
import styles from '../css/SignUpPage.module.css';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const idValidate = (e) => {
    console.log(formData.id);
  };
  const nickNameValidate = (e) => {
    console.log(formData.nickname);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.title}>gia nhập hội viên</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Id <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWithButton}>
              <input
                type="text"
                name="id"
                placeholder="id"
                value={formData.id}
                onChange={handleChange}
                className={styles.input}
                required
              />
              <button type="button" className={styles.checkButton} onClick={idValidate}>
                Kiểm tra trùng lặp
              </button>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Password <span className={styles.required}>*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Check the password <span className={styles.required}>*</span>
            </label>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Password"
              value={formData.passwordConfirm}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Nickname <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWithButton}>
              <input
                type="text"
                name="nickname"
                placeholder="Name"
                value={formData.nickname}
                onChange={handleChange}
                className={styles.input}
                required
              />
              <button type="button" className={styles.checkButton} onClick={nickNameValidate}>
                Kiểm tra trùng lặp
              </button>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            sự hoàn thành
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
