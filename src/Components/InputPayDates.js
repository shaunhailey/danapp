import React, { Component } from 'react'

class InputPayDates extends Component {
  constructor(props) {
    super(props)
    this.state = { payDateTypeSelect: '' }
    this.handlePayDateTypeSelect = this.handlePayDateTypeSelect.bind(this)
  }

  handlePayDateTypeSelect(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div className="payDates">
        <label className="payDateTypeSelect">Select Pay Period Frequency</label>
        <select name="select" value={this.state.payDateTypeSelect} onChange={this.handlePayDateTypeSelect}>
          <option value="BiWeekly">BiWeekly</option>
          <option value="SemiMonthly">SemiMonthly(1st and 15th)</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>
    )
  }
}
export default InputPayDates
