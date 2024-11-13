import React from 'react';

export const PerformanceClaimForm = ({ performanceData, setPerformanceData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerformanceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="form-section">
      <h3>4. Vui lòng nhập ngày ký hợp đồng.</h3>
      <div className="form-group">
        <input
          type="date"
          name="contractDate"
          placeholder="Ngày ký hợp đồng"
          value={performanceData.contractDate}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <h3>5. Vui lòng nhập tên của hợp đồng.</h3>
      <div className="form-group">
        <input
          type="text"
          name="contractName"
          placeholder="Tên hợp đồng"
          value={performanceData.contractName}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <h3>6. Vui lòng nhập ngày đã ký hợp đồng.</h3>
      <div className="form-group">
        <input
          type="date"
          name="signDate"
          placeholder="Ngày đã ký hợp đồng"
          value={performanceData.signDate}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <h3>7. Vui lòng nhập nghĩa vụ của người nhận.</h3>
      <div className="form-group">
        <input
          type="text"
          name="obligation"
          placeholder="Nghĩa vụ của người nhận"
          value={performanceData.obligation}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default PerformanceClaimForm;
