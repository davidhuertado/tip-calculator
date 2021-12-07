import React from 'react';
import PersonAmount from './PersonAmount';

class AmountTotal extends React.Component {
  render() {
    return (
      <div className="amount-total-container">
        <PersonAmount
          label="Tip Amount"
          tipAmount={this.props.tipAmount}
          extraClass="top-person-amount"
        />
        <PersonAmount
          label="Total"
          totalPerPerson={this.props.totalPerPerson}
        />
        <button className="reset-btn tip-btn" type="button">
          Reset
        </button>
      </div>
    );
  }
}

export default AmountTotal;
