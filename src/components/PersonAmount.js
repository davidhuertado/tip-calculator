import React from 'react';

const PersonAmount = (props) => {
  return (
    <div className={`amount-person-container ${props.extraClass}`}>
      <div className="amount-span-container">
        <span className="amount-label">
          {props.label} <br />
          <span className="person-span"> / person </span>
        </span>
      </div>
      <div className="total-container">
        <span>${props.amount}</span>
      </div>
    </div>
  );
};

export default PersonAmount;
