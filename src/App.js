import React, { Component } from 'react'

import TodoInputter from './TodoInputter'
import TodoList from './TodoList'

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1">
          <h1>Ermahgerd mah terderrrs</h1>

          <TodoInputter {...this.props}/>
          <TodoList {...this.props}/>
        </div>      
      </div>
    )
  }
}