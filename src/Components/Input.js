import React, { Component } from 'react'
import Moment from 'react-moment'
import moment from 'moment'
import InputPayDates from './InputPayDates.js'
import Date from './Date.js'
import DateMath from './DateMath.js'

let remainder = ''

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      difference: '',
      nextPayDate: '01/01/2020',
      currentBankBalance: 0,
      netPaycheckAmount: 0,
      dailyMinExpenses: 0,
      numb: 0,
      numbs: 0,
      evenADollar: 1
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleDate = this.handleDate.bind(this)
  }

  handleDate(e) {
    this.setState({
      nextPayDate: ''
    })
  }

  handleInputChange(e) {
    const target = e.target
    const name = target.name
    const value = target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    //next paycheck date
    const nextPayDate = this.state.nextPayDate
    //uses Moment.js to display current date
    const currentDate = moment()
    //uses Moment.js to measure number of days to next pay date
    const difference = currentDate.to(nextPayDate, true, 'days')
    //difference is a string output, so using below to make it a number
    var numb = difference.match(/\d+/g, '') + ''
    var numbs = numb.split(',').join('')
    //calculates bank balance divided by days remaining to paycheck
    var evenDay = this.state.currentBankBalance / numbs
    //converts output to two decimal max
    var evenADollar = evenDay.toFixed(2)
    //slaps a $ onto the result for display
    var evenDaily = '$' + evenADollar
    //user-input bank balance
    var currentBankBalance = this.state.currentBankBalance
    const netPaycheckAmount = this.state.netPaycheckAmount
    //user input minimum daily expenses
    const dailyMinExpenses = this.state.dailyMinExpenses
    const bigDollarSpending = currentBankBalance - dailyMinExpenses * numbs
    const bigSpending = '$' + bigDollarSpending
    console.log(nextPayDate)
    console.log(currentBankBalance / numbs)
    console.log(currentBankBalance)
    console.log(numbs)
    console.log(evenDaily)
    console.log(evenADollar * numbs - dailyMinExpenses * numbs)

    return (
      <div className="Input">
        <form>
          <label>
            Current Date:
            <Date />
          </label>
        </form>
        <form>
          <label>
            Next Pay Date: MM/DD/YYYY
            <input name="nextPayDate" type="text" value={nextPayDate} onChange={this.handleInputChange} />
          </label>
        </form>
        <label>
          Days Until Pay Day :
          {difference}
        </label>
        <form>
          <label>
            Current Bank Balance:
            <input
              name="currentBankBalance"
              type="number"
              placeholder="example: 110.75"
              value={currentBankBalance}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
        <form>
          <label>
            Daily Minimum Expenses:
            <input
              name="dailyMinExpenses"
              type="number"
              placeholder="example: 110.75"
              value={this.state.dailyMinExpenses}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
        <div className="results">
          <p>Amount you can spend evenly each day prior to payday</p>
          <output>
            {evenDaily}
          </output>
          <p>Max Amount You Can Spend Once Before Payday</p>
          <output>
            {bigSpending}
          </output>
        </div>
      </div>
    )
  }
}

export default Input
