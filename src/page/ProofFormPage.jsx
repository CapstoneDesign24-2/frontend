import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../component/sidebar';
import LoanForm from '../component/proof/LoanForm';
import DepositReturnForm from '../component/proof/DepositReturnForm';
import TerminationForm from '../component/proof/TerminationForm';
import PerformanceClaimForm from '../component/proof/PerformanceClaimForm';
import '../css/ProofFormPage.css';

const ProofFormPage = () => {
  const navigate = useNavigate();

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

    const parsedValue = name === 'partialReturn' ? value === 'true' : value;

    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: parsedValue,
    }));
  };

  const validateFormData = () => {
    const isSenderInfoValid = senderInfo.name && senderInfo.phone && senderInfo.address;
    const isReceiverInfoValid = receiverInfo.name && receiverInfo.phone && receiverInfo.address;

    if (!isSenderInfoValid) {
      alert('Vui lòng nhập đầy đủ thông tin người gửi (Tên, Số điện thoại, Địa chỉ).');
      return false;
    }

    if (!isReceiverInfoValid) {
      alert('Vui lòng nhập đầy đủ thông tin người nhận (Tên, Số điện thoại, Địa chỉ).');
      return false;
    }

    if (selectedType === 'Khoản vay') {
      if (!loanData.amount || isNaN(Number(loanData.amount))) {
        alert('Số tiền vay (amount) phải là một số.');
        return false;
      }
      if (!loanData.date) {
        alert('Vui lòng nhập ngày vay (date).');
        return false;
      }
      if (loanData.partialReturn === 'true') {
        if (!loanData.partialAmount || isNaN(Number(loanData.partialAmount))) {
          alert('Số tiền trả từng phần (partialAmount) phải là một số.');
          return false;
        }
        if (!loanData.partialDate) {
          alert('Vui lòng nhập ngày trả từng phần (partialDate).');
          return false;
        }
      }
    } else if (selectedType === 'Hoàn trả tiền đặt cọc thuê nhà' || selectedType === 'Hủy hợp đồng thuê') {
      const data = selectedType === 'Hoàn trả tiền đặt cọc thuê nhà' ? depositReturnData : terminationData;

      if (!data.depositAmount || isNaN(Number(data.depositAmount))) {
        alert('Số tiền đặt cọc (depositAmount) phải là một số.');
        return false;
      }
      if (!data.endReason) {
        alert('Vui lòng nhập lý do kết thúc hợp đồng (endReason).');
        return false;
      }
      if (!data.contractDate) {
        alert('Vui lòng nhập ngày ký hợp đồng (contractDate).');
        return false;
      }
      if (!data.returnDate) {
        alert('Vui lòng nhập ngày hoàn trả (returnDate).');
        return false;
      }
    } else if (selectedType === 'Yêu cầu thực hiện hợp đồng') {
      if (!performanceData.contractDate) {
        alert('Vui lòng nhập ngày ký hợp đồng (contractDate).');
        return false;
      }
      if (!performanceData.contractName) {
        alert('Vui lòng nhập tên hợp đồng (contractName).');
        return false;
      }
      if (!performanceData.signContent) {
        alert('Vui lòng nhập nội dung hợp đồng (signContent).');
        return false;
      }
      if (!performanceData.obligation) {
        alert('Vui lòng nhập nghĩa vụ phải thực hiện (obligation).');
        return false;
      }
    } else {
      alert('Vui lòng chọn một loại hợp đồng hợp lệ.');
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateFormData()) {
      return;
    }

    if (selectedType === 'Khoản vay' && !loanData.partialReturn) {
      setLoanData((prev) => ({
        ...prev,
        partialAmount: 0,
        partialDate: '',
      }));
    }

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

    try {
      const response = await axios.post('http://13.239.192.116:5000/create', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      const resultData = {
        sender: senderInfo,
        receiver: receiverInfo,
        subject: response.data.subject,
        content: response.data.content,
      };

      navigate('/proof-result', { state: resultData });
    } catch (error) {
      console.error('요청 중 오류 발생:', error);
      alert('데이터 전송 중 문제가 발생했습니다.');
    }
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
