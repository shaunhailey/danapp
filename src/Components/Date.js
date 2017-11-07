import React, { Component } from 'react'
import Moment from 'react-moment'

function Date(props) {
  return (
    <div className="currentDate">
      <Moment format="MM/DD/YYYY" currentDate={props.children} />
    </div>
  )
}

export default Date
