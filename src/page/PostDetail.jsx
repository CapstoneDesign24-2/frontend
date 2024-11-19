import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../component/sidebar';
import '../css/PostDetail.css';

const PostDetail = () => {
  const navigate = useNavigate();
  const dummyPost = {
    id: 1,
    title: 'Kiểm tra đầu tiên',
    author: 'nguyen**',
    date: '2024.10.22',
    type: 'Riêng tư',
    content: `Xin chào!,
    Gần đây, tôi gặp phải một tai nạn giao thông và không hiểu rõ về quy trình xử lý bảo hiểm cũng như các thủ tục pháp lý liên quan.,    
    Đây là lần đầu tiên tôi gặp tai nạn nên không biết phải làm thế nào, từ việc báo cáo cảnh sát đến nộp đơn yêu cầu bảo hiểm.,
    Quý vị có thể hướng dẫn cho tôi quy trình cần thiết được không",
    Và nếu có những điều cần chú ý về mặt pháp lý, xin vui lòng cho tôi biết thêm.,
    Cảm ơn rất nhiều!`,
  };

  return (
    <div className="post-detail-page">
      <Sidebar />
      <div className="content">
        <div className="post-detail-container">
          <div className="post-header">
            <h1 className="post-title">{dummyPost.title}</h1>
            <div className="post-info">
              <span className="author">{dummyPost.author}</span>
              <span className="divider">|</span>
              <span className="type">{dummyPost.type}</span>
              <span className="divider">|</span>
              <span className="date">{dummyPost.date}</span>
            </div>
          </div>

          <div className="post-content">
            {dummyPost.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="post-actions">
            <button className="action-button">수정</button>
            <button className="action-button">삭제</button>
            <button
              className="list-button"
              onClick={() => {
                navigate('/post-list');
              }}
            >
              목록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
