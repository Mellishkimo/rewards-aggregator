import React from 'react';
import './App.css';
import Instructions from './components/instructions';
import TransactionHistory from './components/transaction-history';
import TotalRewards from './components/total-rewards'

class App extends React.Component {
  render () {
  return (
    <div id="noheader">
        <div id="container">
          <Instructions />
        </div>
        <div>
          <TransactionHistory />
        </div>
        <div>
          <TotalRewards />
        </div>
    </div>
  )
}
}

export default App;
