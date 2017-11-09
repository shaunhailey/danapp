import React, { Component } from 'react'
import Input from './Input.js'
import Results from './Results.js'

class BaseLayout extends Component {
  render() {
    return (
      <div className="baseLayout">
        <Input />
      </div>
    )
  }
}
export default BaseLayout
