import React from 'react';
import Sidebar from '../component/sidebar';
import { useNavigate } from 'react-router-dom';
import '../css/PostList.css';

const PostList = () => {
  let navigate = useNavigate();
  const dummyPosts = [
    { id: 1, title: 'Kiểm tra đầu tiên', author: 'nguyen**', type: 'Riêng tư', date: '2024.10.22' },
    { id: 2, title: 'Bài viết về du lịch', author: 'le**', type: 'Công khai', date: '2024.10.23' },
    { id: 3, title: 'Công việc và cuộc sống', author: 'pham**', type: 'Riêng tư', date: '2024.10.24' },
    { id: 4, title: 'Học tiếng Hàn', author: 'tran**', type: 'Công khai', date: '2024.10.25' },
    { id: 5, title: 'Ẩm thực Việt Nam', author: 'huynh**', type: 'Riêng tư', date: '2024.10.26' },
    { id: 6, title: 'Cuộc sống ở Hàn Quốc', author: 'vu**', type: 'Riêng tư', date: '2024.10.27' },
    { id: 7, title: 'Tìm việc làm', author: 'ngo**', type: 'Riêng tư', date: '2024.10.28' },
    { id: 8, title: 'Kinh nghiệm du lịch', author: 'dao**', type: 'Riêng tư', date: '2024.10.29' },
    { id: 9, title: 'Văn hóa Hàn Quốc', author: 'ho**', type: 'Công khai', date: '2024.10.30' },
    { id: 10, title: 'Cuộc sống thường nhật', author: 'bui**', type: 'Riêng tư', date: '2024.10.31' },
  ];

  return (
    <div className="post-list-page">
      <Sidebar />
      <div className="content">
        <div className="post-container">
          {dummyPosts.map((post) => (
            <div
              key={post.id}
              className="post-item"
              onClick={() => {
                navigate('/post-detail/' + post.id);
              }}
            >
              <div className="post-list-title">{post.title}</div>
              <div className="post-info">
                <span className="author">{post.author}</span>
                <span className="divider">|</span>
                <span className="date">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button className="current">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button className="next">▶</button>
        </div>
      </div>
    </div>
  );
};

export default PostList;
