import Sidebar from '../component/sidebar';
import '../css/PostList.css';

const PostList = () => {
  return (
    <div className="post-list-page">
      <Sidebar />
      <div className="content">{}</div>
    </div>
  );
};

export default PostList;
