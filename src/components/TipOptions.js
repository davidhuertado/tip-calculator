import React from 'react';

const TipOptions = (props) => {
  return (
    <div className="tip-options-container separator">
      <label>Select Tip %</label>
      <div className="btn-grid">
        <button type="button" className="tip-btn">
          5%
        </button>
        <button type="button" className="tip-btn">
          10%
        </button>
        <button type="button" className="tip-btn">
          15%
        </button>
        <button type="button" className="tip-btn">
          25%
        </button>
        <button type="button" className="tip-btn">
          50%
        </button>
        <input
          type="text"
          className="tip-btn custom-btn"
          placeholder="Custom"
        />
      </div>
    </div>
  );
};

export default TipOptions;
