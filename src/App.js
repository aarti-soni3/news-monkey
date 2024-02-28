import React, { Component } from 'react'

export default class App extends Component {
  c="john";
  render() {
    return (
      <div>
        hello {this.c}
      </div>
    )
  }
}
