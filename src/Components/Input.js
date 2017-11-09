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
      nextPayDate: '',
      currentBankBalance: 0,
      netPaycheckAmount: 0,
      dailyMinExpenses: 0
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleDate = this.handleDate.bind(this)
  }

  handleDate(e) {
    this.setState({
      nextPayDate: '',
      tester: ''
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
    const nextPayDate = this.state.nextPayDate
    const currentDate = moment()
    const difference = currentDate.to(nextPayDate, true, 'days')
    var numb = difference.match(/\d+/g, '') + ''
    var numbs = numb.split(',').join('')
    var evenDaily = currentBankBalance / numbs

    var currentBankBalance = this.state.currentBankBalance
    const netPaycheckAmount = this.state.netPaycheckAmount
    const dailyMinExpenses = this.state.dailyMinExpenses
    const fromNow = (
      <span>
        {difference}
      </span>
    )
    console.log(nextPayDate)
    console.log(currentBankBalance / numbs)
    console.log(currentBankBalance)
    console.log(numbs)
    console.log(evenDaily)

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
          {fromNow}
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
            Net Paycheck Amount:
            <input
              name="netPaycheckAmount"
              type="number"
              placeholder="example: 110.75"
              value={this.state.netPaycheckAmount}
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
      </div>
    )
  }
}

export default Input
