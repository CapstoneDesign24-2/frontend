import './css/App.css';
import Navbar from './component/navbar';
import MainPage from './page/MainPage';
import ProofPage from './page/ProofPage';
import Footer from './component/footer';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './page/LoginPage';
import SignUpPage from './page/SignUp';
import FAQPage from './page/FAQPage';
import PostList from './page/PostList';
import WritePostPage from './page/WritePostPage';
import ScrollToTop from './component/ScrollToTop';
function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/proof" element={<ProofPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/singup" element={<SignUpPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/post-list" element={<PostList />} />
        <Route path="/write-post" element={<WritePostPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
