import '../css/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img
          src="/Logo.png"
          alt="FFG Logo"
          className="logo"
          onClick={() => {
            navigate('/');
          }}
        />
        <div className="logo-text">FAR FROM GENIUS</div>
      </div>

      <div
        className="nav-links"
        onClick={() => {
          navigate('/login');
        }}
      >
        <div className="nav-link">로그인</div>
        <div className="nav-link">회원가입</div>
      </div>
    </nav>
  );
};

export default Navbar;
