import React from 'react';

class TipOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      5: { number: 5, class: 'tip-btn active' },
      10: { number: 10, class: 'tip-btn' },
      15: { number: 15, class: 'tip-btn' },
      25: { number: 25, class: 'tip-btn' },
      50: { number: 50, class: 'tip-btn' },
    };
  }
  handleTipClick = (e) => {
    this.props.handleTipClick(e);
  };

  handleCustomTipChange = (e) => {
    this.props.handleCustomTipChange(e.target.value);
  };

  render() {
    const tipArray = ['5%', '10%', '15%', '25%', '50%'];
    const tipList = tipArray.map((tip) => {
      return (
        <button type="button" className="tip-btn" onClick={this.handleTipClick}>
          {tip}
        </button>
      );
    });
    return (
      <div className="tip-options-container separator">
        <label>Select Tip %</label>
        <div className="btn-grid">
          {tipList}
          <input
            type="text"
            className="tip-btn custom-btn"
            placeholder="Custom"
            onChange={this.handleCustomTipChange}
          />
        </div>
      </div>
    );
  }
}

export default TipOptions;
