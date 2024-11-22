import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../component/sidebar';
import '../css/WritePage.css';

const WritePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [charCount, setCharCount] = useState(0);
  const MAX_CHARS = 1000;

  const handleContentChange = (e) => {
    const text = e.target.value;
    if (text.length <= MAX_CHARS) {
      setContent(text);
      setCharCount(text.length);
    }
  };

  const handleSubmit = async () => {
    // 게시글 작성 API 호출
    const postData = {
      title,
      content,
    };

    try {
      const response = await axios.post('http://13.239.192.116:5000/', postData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // 성공 응답 처리
      console.log('게시글 작성 성공:', response.data);
      alert('게시글이 성공적으로 작성되었습니다.');
    } catch (error) {
      // 오류 처리
      console.error('게시글 작성 중 오류 발생:', error);
      alert('게시글 작성 중 문제가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="write-post-page">
      <Sidebar />
      <div className="content">
        <div className="write-container">
          <div className="title-input">
            <input
              type="text"
              placeholder="Hãy viết tiêu đề."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="content-input">
            <textarea placeholder="Hãy nhập nội dung." value={content} onChange={handleContentChange} />
            <div className="char-count">
              ({charCount} / {MAX_CHARS})
            </div>
          </div>

          <div className="button-container">
            <button onClick={handleSubmit}>sự hoàn thành</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritePost;
