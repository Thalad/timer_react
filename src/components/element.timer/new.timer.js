import React, { Component } from 'react';
import { FormTimer } from './formTimer.component';
import { AddTimer } from './addTimer.component';

export class NewTimer extends Component {

  render () {
    return (
      <div>
        <FormTimer handleSubmit={this.props.handleSubmit} />
      </div>
    );
  }
}