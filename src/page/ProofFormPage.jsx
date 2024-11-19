import React, { useState } from 'react';
import Sidebar from '../component/sidebar';
import LoanForm from '../component/proof/LoanForm';
import DepositReturnForm from '../component/proof/DepositReturnForm';
import TerminationForm from '../component/proof/TerminationForm';
import PerformanceClaimForm from '../component/proof/PerformanceClaimForm';
import '../css/ProofFormPage.css';

const ProofFormPage = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [senderInfo, setSenderInfo] = useState({ name: '', phone: '', address: '' });
  const [receiverInfo, setReceiverInfo] = useState({ name: '', phone: '', address: '' });
  const [loanData, setLoanData] = useState({
    amount: '',
    date: '',
    partialReturn: false,
    partialAmount: '',
    partialDate: '',
  });
  const [depositReturnData, setDepositReturnData] = useState({
    depositAmount: '',
    endReason: '',
    contractDate: '',
    returnDate: '',
  });
  const [terminationData, setTerminationData] = useState({
    depositAmount: '',
    endReason: '',
    contractDate: '',
    returnDate: '',
  });
  const [performanceData, setPerformanceData] = useState({
    contractDate: '',
    contractName: '',
    signContent: '',
    obligation: '',
  });

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleInputChange = (e, setInfo) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = () => {
    const formData = {
      senderInfo,
      receiverInfo,
      selectedType,
      data:
        selectedType === 'Khoản vay'
          ? loanData
          : selectedType === 'Hoàn trả tiền đặt cọc thuê nhà'
            ? depositReturnData
            : selectedType === 'Hủy hợp đồng thuê'
              ? terminationData
              : performanceData,
    };
    console.log('제출 데이터:', formData);
    // api 전송 로직 필요
  };

  return (
    <div className="proof-page">
      <Sidebar />
      <div className="content">
        <div className="proof-page-content">
          <h2>
            Để tìm hiểu sự việc liên quan đến <span className="highlight">{selectedType}</span>, vui lòng trả lời một
            vài câu hỏi.
          </h2>

          <div className="form-section">
            <h3>1. Thông tin người gửi</h3>
            <div className="form-group">
              <div className="form-group-text">| Tên người gửi</div>
              <input
                type="text"
                placeholder="Tên người gửi"
                name="name"
                value={senderInfo.name}
                onChange={(e) => handleInputChange(e, setSenderInfo)}
              />
              <div className="form-group-text">| Số điện thoại người gửi</div>
              <input
                type="text"
                placeholder="Số điện thoại người gửi"
                name="phone"
                value={senderInfo.phone}
                onChange={(e) => handleInputChange(e, setSenderInfo)}
              />
              <div className="form-group-text">| Địa chỉ người gửi</div>
              <input
                type="text"
                placeholder="Địa chỉ người gửi"
                name="address"
                value={senderInfo.address}
                onChange={(e) => handleInputChange(e, setSenderInfo)}
              />
            </div>
          </div>

          <div className="form-section">
            <h3>2. Thông tin người nhận</h3>
            <div className="form-group">
              <div className="form-group-text">| Tên người nhận</div>
              <input
                type="text"
                placeholder="Tên người nhận"
                name="name"
                value={receiverInfo.name}
                onChange={(e) => handleInputChange(e, setReceiverInfo)}
              />
              <div className="form-group-text">| Số điện thoại người nhận</div>
              <input
                type="text"
                placeholder="Số điện thoại người nhận"
                name="phone"
                value={receiverInfo.phone}
                onChange={(e) => handleInputChange(e, setReceiverInfo)}
              />
              <div className="form-group-text">| Địa chỉ người nhận</div>
              <input
                type="text"
                placeholder="Địa chỉ người nhận"
                name="address"
                value={receiverInfo.address}
                onChange={(e) => handleInputChange(e, setReceiverInfo)}
              />
            </div>
          </div>

          <div className="form-section">
            <h3>3. Chọn loại</h3>
            <div className="type-selection">
              <label>
                <input type="radio" name="type" onChange={() => handleTypeChange('Khoản vay')} /> Khoản vay
              </label>
              <label>
                <input type="radio" name="type" onChange={() => handleTypeChange('Hoàn trả tiền đặt cọc thuê nhà')} />{' '}
                Hoàn trả tiền đặt cọc thuê nhà
              </label>
              <label>
                <input type="radio" name="type" onChange={() => handleTypeChange('Hủy hợp đồng thuê')} /> Hủy hợp đồng
                thuê
              </label>
              <label>
                <input type="radio" name="type" onChange={() => handleTypeChange('Yêu cầu thực hiện hợp đồng')} /> Yêu
                cầu thực hiện hợp đồng
              </label>
            </div>
          </div>

          {selectedType === 'Khoản vay' && <LoanForm loanData={loanData} setLoanData={setLoanData} />}
          {selectedType === 'Hoàn trả tiền đặt cọc thuê nhà' && (
            <DepositReturnForm depositReturnData={depositReturnData} setDepositReturnData={setDepositReturnData} />
          )}
          {selectedType === 'Hủy hợp đồng thuê' && (
            <TerminationForm terminationData={terminationData} setTerminationData={setTerminationData} />
          )}
          {selectedType === 'Yêu cầu thực hiện hợp đồng' && (
            <PerformanceClaimForm performanceData={performanceData} setPerformanceData={setPerformanceData} />
          )}

          <div className="form-buttons">
            <button type="button" className="next-button" onClick={handleSubmit}>
              Đến bước tiếp theo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProofFormPage;
