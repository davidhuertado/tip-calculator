import React from 'react';

class PersonAmount extends React.Component {
  render() {
    if (this.props.extraClass) {
      return (
        <div className={`amount-person-container ${this.props.extraClass}`}>
          <div className="amount-span-container">
            <span className="amount-label">
              {this.props.label} <br />
              <span className="person-span"> / person </span>
            </span>
          </div>
          <div className="total-container">
            <span>${this.props.tipAmount}</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className={`amount-person-container`}>
          <div className="amount-span-container">
            <span className="amount-label">
              {this.props.label} <br />
              <span className="person-span"> / person </span>
            </span>
          </div>
          <div className="total-container">
            <span>${this.props.totalPerPerson}</span>
          </div>
        </div>
      );
    }
  }
}

export default PersonAmount;
