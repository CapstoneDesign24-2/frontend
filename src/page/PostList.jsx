import React from 'react';
import Sidebar from '../component/sidebar';
import { useNavigate } from 'react-router-dom';
import '../css/PostList.css';

const PostList = () => {
  let navigate = useNavigate();
  const dummyPosts = [
    { id: 1, title: '임금을 제대로 지불 받지 못했어요', author: 'tla**', type: '비공개', date: '2024.10.22' },
    {
      id: 2,
      title: '직장 상사한테 후드러 맞아서 소송하려고 합니다',
      author: 'dls**',
      type: '공개',
      date: '2024.10.22',
    },
    { id: 3, title: '외국인이라는 이유로 왕따 당하는 거 같아요', author: 'dls**', type: '비공개', date: '2024.10.22' },
    {
      id: 4,
      title: '위에 저번 식으로 제목만 보이게 만들면 될 거 같은데...',
      author: 'dls**',
      type: '공개',
      date: '2024.10.22',
    },
    { id: 5, title: '제가 디자인을 파견 될 하고 있는 것일까요', author: 'dls**', type: '비공개', date: '2024.10.22' },
    { id: 6, title: '그냥 시키는 대로 하고 있긴 한데', author: 'dls**', type: '비공개', date: '2024.10.22' },
    {
      id: 7,
      title: '일단 무엇보다 지금 잠이 와서 미질 거 같습니다',
      author: 'dls**',
      type: '비공개',
      date: '2024.10.22',
    },
    {
      id: 8,
      title: '피그마는 항상 열려 있으니 코멘트 적극 환영입니다',
      author: 'dls**',
      type: '비공개',
      date: '2024.10.22',
    },
    { id: 9, title: '다 왜케 되는 일은.. 없겠죠...?', author: 'dls**', type: '비공개', date: '2024.10.22' },
    { id: 10, title: '미적 감각이 없어서 죄송합니다...', author: 'dls**', type: '비공개', date: '2024.10.22' },
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
              <div className="post-title">{post.title}</div>
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
