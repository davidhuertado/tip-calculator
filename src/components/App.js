import React from 'react';
import './App.css';
import logo from '../images/logo.svg';
import BillInput from './BillInput';
import TipOptions from './TipOptions';
import PeopleInput from './PeopleInput';
import AmountTotal from './AmountTotal';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <img src={logo} className="logo" alt="logo" />
        <div className="app-container">
          <div className="flex-container">
            <BillInput />
            <TipOptions />
            <PeopleInput />
          </div>
          <div className="flex-container">
            <AmountTotal />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
