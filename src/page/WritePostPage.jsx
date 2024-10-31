import Sidebar from '../component/sidebar';
import '../css/WritePage.css';

const WritePost = () => {
  return (
    <div className="write-post-page">
      <Sidebar />
      <div className="content">{}</div>
    </div>
  );
};

export default WritePost;
