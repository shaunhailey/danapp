import React, { Component } from 'react'
import logo from '../logo.svg'
import '../Styles/App.css'
import BaseLayout from './BaseLayout.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Poor Dan Affordability Calculator</h1>
        </header>
        <BaseLayout />
      </div>
    )
  }
}

export default App
