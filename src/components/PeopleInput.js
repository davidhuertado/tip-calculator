import React from 'react';

class PeopleInput extends React.Component {
  handlePeopleChange = (e) => {
    this.props.handlePeopleChange(e.target.value);
  };
  handlePeopleClick = () => {
    this.props.handlePeopleClick();
  };

  handlePeopleClick;
  render() {
    return (
      <div className="bill-container separator">
        <label className="bill-label" htmlFor="bill-input">
          Number of people
        </label>
        <input
          type="number"
          id="bill-input"
          className="people-input"
          min="0"
          value={this.props.people}
          onChange={this.handlePeopleChange}
          onClick={this.handlePeopleClick}
        />
      </div>
    );
  }
}

export default PeopleInput;
