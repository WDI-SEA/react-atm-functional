// NPM modules
import React from 'react';

// Custom Components
import Account from './Account';
import Savings from './Savings'

// Resources
import logo from './ga.png';
import './App.css';

function App() {
  return (
    <div id="content">
      <div id="nav">
        <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
        <div id="title"><h1>Bank of GA</h1></div>
      </div>
      <div className="marble">
        <Account name="Checking" />
        <div className="clear"></div>
        <Savings name="Savings" />
      </div>
    </div>
  );
}

export default App;
