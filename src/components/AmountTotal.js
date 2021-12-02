import React from 'react';
import PersonAmount from './PersonAmount';

const AmountTotal = (props) => {
  return (
    <div className="amount-total-container">
      <PersonAmount
        label="Tip Amount"
        amount="4.27"
        extraClass="top-person-amount"
      />
      <PersonAmount label="Total" amount="32.79" />
      <button className="reset-btn tip-btn" type="button">
        Reset
      </button>
    </div>
  );
};

export default AmountTotal;
