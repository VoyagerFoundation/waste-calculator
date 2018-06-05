import React, { PropTypes } from 'react';
import  { Component } from 'react';
import Bottles from '../containers/Bottles';

export default class CalculatordWidget extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>
          Hello!
        </h3>
        <hr />
        <Bottles />
      </div>
    );
  }
}
