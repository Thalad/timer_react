import React, { Component } from 'react';

export class Timer extends Component {
  render() {
    //console.log(this.props)
    return (
      <div className="chrono">
        <h1>{this.props.title}</h1>
        <p className="description">{this.props.description}</p>
        <p className="timer">00:00:00</p>
      </div>
    )
  }
}