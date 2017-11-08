import React, { Component } from 'react'
import Moment from 'react-moment'
import moment from 'moment'
import Input from './Input.js'

class DateMath extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onNextPayDateChange(e.target.value)
    e.preventDefault()
  }

  render() {
    const nextPayDate = this.props.nextPayDate
    const remainder = moment().fromNow()
    console.log(this.props.difference)
    return (
      <div className="dateMath">
        <Moment to="currentdate">
          {nextPayDate}
        </Moment>
      </div>
    )
  }
}

export default DateMath
