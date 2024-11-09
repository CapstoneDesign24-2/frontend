import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-main-title">FAR FROM GENIUS</div>
      <ListGroup variant="flush">
        <div className="sidebar-title">내용 증명</div>
        <ListGroup.Item className="sidebar-item">
          <Link to="/proof">내용 증명 작성하기</Link>
        </ListGroup.Item>

        <div className="sidebar-title">커뮤니티</div>
        <ListGroup.Item className="sidebar-item">
          <Link to="">게시판</Link>
        </ListGroup.Item>
        <ListGroup.Item className="sidebar-item">
          <Link to="/write-post">글 작성하기</Link>
        </ListGroup.Item>

        <div className="sidebar-title">서비스</div>
        <ListGroup.Item className="sidebar-item">
          <Link to="/faq">FAQ</Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
