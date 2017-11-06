import React, { Component } from 'react'
import InputPayDates from './InputPayDates.js'

class Input extends Component {
  render() {
    return (
      <div className="Input">
        <form>
          <label>
            Current Date:
            <input type="text" date="date" />
          </label>
          <input type="submit" value="submit" />
        </form>
        <form>
          <label>
            Next Pay Date:
            <input type="text" date="date" />
          </label>
          <input type="submit" value="submit" />
        </form>
        <form>
          <label>
            Current Bank Balance:
            <input type="text" balance="balance" />
          </label>
          <input type="submit" value="submit" />
        </form>
        <form>
          <label>
            Daily Minimum Expenses:
            <input type="text" minimum="minimum" />
          </label>
          <input type="submit" value="submit" />
        </form>
        <InputPayDates />
      </div>
    )
  }
}
export default Input
