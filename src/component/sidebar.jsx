import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-main-title">FAR FROM GENIUS</div>
      <ListGroup variant="flush">
        <div className="sidebar-title">chứng minh nội dung</div>
        <ListGroup.Item className="sidebar-item">
          <Link to="/proof-form">Viết chứng minh nội dung</Link>
        </ListGroup.Item>

        <div className="sidebar-title">cộng đồng</div>
        <ListGroup.Item className="sidebar-item">
          <Link to="/post-list">bảng thông báo</Link>
        </ListGroup.Item>
        <ListGroup.Item className="sidebar-item">
          <Link to="/write-post">Viết bài</Link>
        </ListGroup.Item>

        <div className="sidebar-title">sự phục vụ</div>
        <ListGroup.Item className="sidebar-item">
          <Link to="/faq">FAQ</Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
