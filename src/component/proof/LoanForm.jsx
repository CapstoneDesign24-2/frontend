import React from 'react';

const LoanForm = ({ loanData, setLoanData }) => {
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoanData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="form-section">
      <h3>4. Vui lòng nhập số tiền cho vay</h3>
      <div className="form-group">
        <input
          type="text"
          name="amount"
          placeholder="Số tiền cho vay"
          value={loanData.amount}
          onChange={handleInputChange}
        />
      </div>
      <br />

      <h3>5. Vui lòng nhập ngày cho vay</h3>
      <div className="form-group">
        <input type="date" name="date" placeholder="Ngày cho vay" value={loanData.date} onChange={handleInputChange} />
      </div>
      <br />

      <h3>6. Bạn đã nhận lại một phần tiền cho vay chưa?</h3>
      <div className="form-group">
        <label>
          <input
            type="radio"
            name="partialReturn"
            value="true"
            checked={loanData.partialReturn === 'true'}
            onChange={handleInputChange}
          />{' '}
          Có
        </label>
        <label>
          <input
            type="radio"
            name="partialReturn"
            value="false"
            checked={loanData.partialReturn === 'false'}
            onChange={handleInputChange}
          />{' '}
          Không
        </label>
      </div>

      {loanData.partialReturn === 'true' && (
        <>
          <h3>6-1. Vui lòng nhập số tiền đã nhận lại</h3>
          <div className="form-group">
            <input
              type="text"
              name="partialAmount"
              placeholder="Số tiền đã nhận lại"
              value={loanData.partialAmount}
              onChange={handleInputChange}
            />
          </div>

          <h3>6-2. Vui lòng nhập ngày đã nhận lại</h3>
          <div className="form-group">
            <input
              type="date"
              name="partialDate"
              placeholder="Ngày đã nhận lại"
              value={loanData.partialDate}
              onChange={handleInputChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default LoanForm;
