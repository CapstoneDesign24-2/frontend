import '../css/Navbar.css';
import { useNavigate } from 'react-router-dom';

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

      <div className="nav-links">
        <div
          className="nav-link"
          onClick={() => {
            navigate('/login');
          }}
        >
          Đăng nhập
        </div>
        <div
          className="nav-link"
          onClick={() => {
            navigate('/signup');
          }}
        >
          gia nhập hội viên
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
