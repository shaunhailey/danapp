import React, { Component } from 'react'

class InputPayDates extends Component {
  render() {
    return (
      <div className="payDates">
        <h3 className="payDateTypeSelect">Select Pay Period Frequency</h3>
        <select name="select">
          <option value="BiWeekly">BiWeekly</option>
          <option value="SemiMonthly">SemiMonthly(1st and 15th)</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>
    )
  }
}
export default InputPayDates
