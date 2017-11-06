import React, { Component } from 'react'
import InputPayDates from './InputPayDates.js'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentDate: '',
      nextPayDate: '',
      currentBankBalance: 0,
      netPaycheckAmount: 0,
      dailyMinExpenses: 0
    }

    this.handleCurrentDate = this.handleCurrentDate.bind(this)
    this.handleNextPayDate = this.handleNextPayDate.bind(this)
    this.handleCurrentBankBalance = this.handleCurrentBankBalance.bind(this)
    this.handleNetPaycheckAmount = this.handleNetPaycheckAmount.bind(this)
    this.handleDailyMinExpenses = this.handleDailyMinExpenses.bind(this)
  }

  handleCurrentDate(e) {
    this.setState({ value: e.target.value })
  }

  handleNextPayDate(e) {
    this.setState({ value: e.target.value })
  }

  handleCurrentBankBalance(e) {
    this.setState({ value: e.target.value })
  }

  handleNetPaycheckAmount(e) {
    this.setState({ value: e.target.value })
  }

  handleDailyMinExpenses(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div className="Input">
        <form>
          <label>
            Current Date:
            <input type="date" id="date" value={this.state.currentDate} />
          </label>
          <input type="submit" value="submit" />
        </form>
        <form>
          <label>
            Next Pay Date:
            <input type="date" id="date" value={this.state.nextPayDate} />
          </label>
          <input type="submit" value="submit" />
        </form>
        <InputPayDates />
        <form>
          <label>
            Current Bank Balance:
            <input type="number" placeholder="example: 110.75" value={this.state.currentBankBalance} />
          </label>
          <input type="submit" value="submit" />
        </form>
        <form>
          <label>
            Net Paycheck Amount:
            <input type="number" placeholder="example: 110.75" value={this.state.netPaycheckAmount} />
          </label>
          <input type="submit" value="submit" />
        </form>
        <form>
          <label>
            Daily Minimum Expenses:
            <input type="number" placeholder="example: 110.75" value={this.state.dailyMinExpenses} />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}
export default Input
