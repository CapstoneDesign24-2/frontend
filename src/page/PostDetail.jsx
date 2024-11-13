import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../component/sidebar';
import '../css/PostDetail.css';

const PostDetail = () => {
  const navigate = useNavigate();
  const dummyPost = {
    id: 1,
    title: '어쩌구',
    author: 'dls**',
    date: '2024.10.22',
    type: '비공개',
    content: `안녕하세요.
    
어쩌구 저쩌구 어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구
어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구`,
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
