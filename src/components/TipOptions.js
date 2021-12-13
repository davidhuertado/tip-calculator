import React from 'react';

class TipOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: `${this.props.TipOption}%`,
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
      let classToRender;
      if (tip === this.state.active) classToRender = 'tip-btn active';
      else classToRender = 'tip-btn';

      return (
        <button
          type="button"
          className={classToRender}
          onClick={this.handleTipClick}
          key={tip}
        >
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
