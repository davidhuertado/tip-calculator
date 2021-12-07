import React from 'react';

class BillInput extends React.Component {
  handleBillChange = (e) => {
    this.props.handleBillChange(e.target.value);
  };
  handleBillClick = () => {
    this.props.handleBillClick();
  };

  render() {
    return (
      <div className="bill-container separator">
        <label className="bill-label" htmlFor="bill-input">
          Bill
        </label>
        <input
          type="number"
          id="bill-input"
          className="bill-input"
          min="0"
          value={this.props.bill}
          onChange={this.handleBillChange}
          onClick={this.handleBillClick}
        />
      </div>
    );
  }
}

export default BillInput;
