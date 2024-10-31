import Sidebar from '../component/sidebar';
import '../css/MyPage.css';

const MyPage = () => {
  return (
    <div className="my-page">
      <Sidebar />
      <div className="content">{}</div>
    </div>
  );
};

export default MyPage;
