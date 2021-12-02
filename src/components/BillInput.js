import React from 'react';

const BillInput = (props) => {
  return (
    <div className="bill-container separator">
      <label className="bill-label" htmlFor="bill-input">
        Bill
      </label>
      <input type="number" id="bill-input" className="bill-input" />
    </div>
  );
};

export default BillInput;
