import React from 'react';
import './App.css';
import logo from '../images/logo.svg';
import BillInput from './BillInput';
import TipOptions from './TipOptions';
import PeopleInput from './PeopleInput';
import AmountTotal from './AmountTotal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: 0,
      people: 0,
      tipOption: undefined,
      tipAmount: 0,
      totalPerPerson: 0,
    };
  }
  componentDidUpdate = (prevProps, prevState, snapshot) => {
    //Method for updating tip amount and total
    const billDivisions = this.handleBillDivisions(this.state);
    console.log(billDivisions);
    console.log(this.state);
    console.log(prevState);
    if (
      this.state.tipAmount !== prevState.tipAmount &&
      this.state.totalPerPerson !== prevState.totalPerPerson
    ) {
      console.log('return');
      return;
    } else if (
      this.state.tipOption !== undefined &&
      this.state.people > 0 &&
      this.state.bill > 0
    ) {
      const billDivisions = this.handleBillDivisions(this.state);

      this.setState((state, props) => {
        return {
          tipAmount: billDivisions.tipAmount,
          totalPerPerson: billDivisions.totalPerPerson,
        };
      });
    }
  };

  handleBillDivisions = (state) => {
    let billDivisions = {};
    const tipAmount = state.bill / state.tipOption / state.people;

    const totalPerPerson = state.bill / state.people + tipAmount;
    billDivisions = { tipAmount, totalPerPerson };
    console.log(billDivisions);
    return billDivisions;
  };
  // Bill input handlers
  handleBillChange = (newBill) => {
    //Accept only numbers  > 0
    newBill = parseInt(newBill, 10);

    if (newBill >= 0 && this.state.tipOption === undefined) {
      this.setState((state, props) => {
        return { bill: newBill };
      });
    } else if (newBill >= 0) {
      this.setState((state, props) => {
        return {
          bill: newBill,
        };
      });
    }
  };

  handleBillClick = () => {
    this.setState((state, props) => ({
      bill: '',
    }));
  };

  //People input handlers
  handlePeopleChange = (newPeople) => {
    //Accept only numbers  > 0
    newPeople = parseInt(newPeople, 10);
    if (newPeople >= 0) {
      this.setState((state, props) => ({
        people: parseInt(newPeople, 10),
      }));
    }
  };

  handlePeopleClick = () => {
    this.setState((state, props) => ({
      people: '',
    }));
  };

  //Tip options handlers
  handleTipClick = (e) => {
    const btnContentArray = e.target.textContent.match(/\d/g);
    const btnNumber = parseInt(btnContentArray.join(''), 10);

    this.setState((state, props) => ({
      tipOption: btnNumber,
    }));
  };

  handleCustomTipChange = (newTip) => {
    newTip = parseInt(newTip, 10);
    if (newTip >= 0) {
      this.setState((state, props) => ({
        tipOption: newTip,
      }));
    }
  };

  render() {
    return (
      <div className="app">
        <img src={logo} className="logo" alt="logo" />
        <p>{this.state.tipOption}</p>
        <div className="app-container">
          <div className="flex-container">
            <BillInput
              bill={this.state.bill}
              handleBillChange={this.handleBillChange}
              handleBillClick={this.handleBillClick}
            />
            <TipOptions
              tipOption={this.state.tipOption}
              handleTipClick={this.handleTipClick}
              handleCustomTipChange={this.handleCustomTipChange}
            />
            <PeopleInput
              people={this.state.people}
              handlePeopleClick={this.handlePeopleClick}
              handlePeopleChange={this.handlePeopleChange}
            />
          </div>
          <div className="flex-container">
            <AmountTotal
              tipAmount={this.state.tipAmount}
              totalPerPerson={this.state.totalPerPerson}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
