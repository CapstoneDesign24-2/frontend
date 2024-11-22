import Sidebar from '../component/sidebar';
import '../css/ProofPage.css';
import ProofResult from '../component/proof/ProofResult';
import { useLocation } from 'react-router-dom';

const ProofResultPage = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="proof-page">
      <Sidebar />
      <div className="content">
        <ProofResult data={data} />
      </div>
    </div>
  );
};

export default ProofResultPage;
