import React, { Component } from 'react';
import { Timer } from './Timer.component';
import { NewTimer } from './element.timer/new.timer';

export default class ListeTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    };
  }
  render = () => {
    let elementDisplay = this.props.Timers.map((item, index) => {
      return (
        <Timer key={index} {...item} />
        /*<li key={index}>
          {val.title}
          <span className="delete"
            onClick={() => this.deleteElement(index)}>(X)</span>
        </li>*/
      )
    })
    return (
      <div>
        <div className="list-chrono">
          {elementDisplay}
          <NewTimer handleSubmit={this.handleSubmit} />
          <form className="form" onSubmit={this.handleSubmit}>

            <input type="text"
                   onChange={this.handleChange}
                   placeholder="Entrez votre valeur"
                   value={this.state.value} />
            <button type="submit">Add repas</button>

          </form>
        </div>

      </div>
    )
  }

  handleChange = (event) => {
    let valueInput = event.target.value;

    this.setState({
      ...this.state,
      value: valueInput
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.value) return;
    this.props.actions.Add(this.state.value);
    this.state.value = '';
  }

  deleteElement = (index) => {
    this.props.actions.Delete(index);
  }
}