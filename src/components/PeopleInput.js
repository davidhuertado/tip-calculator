import React from 'react';

const PeopleInput = (props) => {
  return (
    <div className="bill-container separator">
      <label className="bill-label" htmlFor="bill-input">
        Number of people
      </label>
      <input type="number" id="bill-input" className="people-input" />
    </div>
  );
};

export default PeopleInput;
