import React from 'react';
import Sidebar from '../component/sidebar';
import { useNavigate } from 'react-router-dom';
import '../css/PostList.css';

const PostList = () => {
  let navigate = useNavigate();
  const dummyPosts = [
    { id: 1, title: 'test1', author: 'tla**', type: '비공개', date: '2024.10.22' },
    {
      id: 2,
      title: 'test2',
      author: 'dls**',
      type: '공개',
      date: '2024.10.22',
    },
    { id: 3, title: 'test3', author: 'dls**', type: '비공개', date: '2024.10.22' },
    {
      id: 4,
      title: 'test4',
      author: 'dls**',
      type: '공개',
      date: '2024.10.22',
    },
    { id: 5, title: 'test5', author: 'dls**', type: '비공개', date: '2024.10.22' },
    { id: 6, title: 'test6', author: 'dls**', type: '비공개', date: '2024.10.22' },
    {
      id: 7,
      title: 'test7',
      author: 'dls**',
      type: '비공개',
      date: '2024.10.22',
    },
    {
      id: 8,
      title: 'test8',
      author: 'dls**',
      type: '비공개',
      date: '2024.10.22',
    },
    { id: 9, title: 'test9', author: 'dls**', type: '비공개', date: '2024.10.22' },
    { id: 10, title: 'test10', author: 'dls**', type: '비공개', date: '2024.10.22' },
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
