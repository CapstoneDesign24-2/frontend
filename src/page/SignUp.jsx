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
        <h2 className={styles.title}>회원가입</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>
              아이디 <span className={styles.required}>*</span>
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
                중복 확인
              </button>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              비밀번호 <span className={styles.required}>*</span>
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
              비밀번호 확인 <span className={styles.required}>*</span>
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
              닉네임 <span className={styles.required}>*</span>
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
                중복 확인
              </button>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>이메일</label>
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
            완료
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
