import './css/App.css';
import Navbar from './component/navbar';
import MainPage from './page/MainPage';
import ProofResultPage from './page/ProofResultPage';
import Footer from './component/footer';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import SignUpPage from './page/SignUp';
import FAQPage from './page/FAQPage';
import PostList from './page/PostList';
import WritePostPage from './page/WritePostPage';
import ScrollToTop from './component/ScrollToTop';
import PostDetail from './page/PostDetail';
import ProofFormPage from './page/ProofFormPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/proof-form" element={<ProofFormPage />} />
        <Route path="/proof-result" element={<ProofResultPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/post-list" element={<PostList />} />
        <Route path="/write-post" element={<WritePostPage />} />
        <Route path="/post-detail/:id" element={<PostDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
