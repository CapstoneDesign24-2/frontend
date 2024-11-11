import Sidebar from '../component/sidebar';
import '../css/ProofPage.css';
import ProofResult from '../component/ProofResult';

const ProofResultPage = () => {
  return (
    <div className="proof-page">
      <Sidebar />
      <div className="content">
        <ProofResult />
      </div>
    </div>
  );
};

export default ProofResultPage;
