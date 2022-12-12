import React, { Component } from 'react';
const Mortgage = require('../../src/lib/Mortagage');

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      principle:0,
      interestRate: 0,
      loanTerm: 0,
      period: 12,
      monthlyPayments: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.calculateMonthlyPayment = this.calculateMonthlyPayment.bind(this)
  }

  handleChange(event){
    switch(event.target.name){
      case 'principle':
          this.setState({principle:Number(event.target.value) })
          break;
        case 'loanTerm': this
    }
  }
}
