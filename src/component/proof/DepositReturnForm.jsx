import React from 'react';

const DepositReturnForm = ({ depositReturnData, setDepositReturnData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDepositReturnData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="form-section">
      <h3>4. Vui lòng nhập số tiền đặt cọc thuê nhà</h3>
      <div className="form-group">
        <input
          type="text"
          name="depositAmount"
          placeholder="Số tiền đặt cọc thuê nhà"
          value={depositReturnData.depositAmount}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <h3>5. Vui lòng chọn lý do hợp đồng thuê nhà kết thúc</h3>
      <div className="form-group">
        <label>
          <input
            type="radio"
            name="endReason"
            value="Kết thúc thời hạn"
            checked={depositReturnData.endReason === 'Kết thúc thời hạn'}
            onChange={handleInputChange}
          />{' '}
          Kết thúc thời hạn
        </label>
        <label>
          <input
            type="radio"
            name="endReason"
            value="Yêu cầu chấm dứt hợp đồng"
            checked={depositReturnData.endReason === 'Yêu cầu chấm dứt hợp đồng'}
            onChange={handleInputChange}
          />{' '}
          Yêu cầu chấm dứt hợp đồng
        </label>
      </div>
      <br />
      <h3>6. Vui lòng nhập ngày ký hợp đồng</h3>
      <div className="form-group">
        <input
          type="date"
          name="contractDate"
          placeholder="Ngày ký hợp đồng"
          value={depositReturnData.contractDate}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <h3>7. Vui lòng nhập ngày mong muốn hoàn trả đặt cọc</h3>
      <div className="form-group">
        <input
          type="text"
          name="returnDate"
          placeholder="Ngày hoàn trả"
          value={depositReturnData.returnDate}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default DepositReturnForm;
