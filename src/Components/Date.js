import React, { Component } from 'react'
import Moment from 'react-moment'
import Input from './Input.js'

class Date extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.handleDateChange(e.target.value)
    console.log(e.target.value)
  }

  render() {
    const today = this.props.today
    const nextPayDate = this.props.nextPayDate

    return (
      <div className="currentDate">
        <Moment
          className="currentDate"
          format="MM/DD/YYYY"
          onChange={val => {
            console.log(val)
          }}
        />
      </div>
    )
  }
}

export default Date
