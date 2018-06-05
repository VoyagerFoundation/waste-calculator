import React, { PropTypes } from 'react';
import  { Component } from 'react';

export default class BottlesWidget extends React.Component {
  static propTypes = {
    addSmallBottles: PropTypes.func.isRequired,
    removeSmallBottles: PropTypes.func.isRequired,
    addBigBottles: PropTypes.func.isRequired,
    removeBigBottles: PropTypes.func.isRequired,
    small_bottles: PropTypes.number.isRequired,
    big_bottles: PropTypes.number.isRequired,
  };

  addSmallBottle(){
    this.props.addSmallBottles(1);
  }

  removeSmallBottle(){
    this.props.removeSmallBottles(1);
  }

  addBigBottle(){
    this.props.addBigBottles(1);
  }

  removeBigBottle(){
    this.props.removeBigBottles(1);
  }

  render() {
    const { small_bottles, big_bottles } = this.props;
    return (
          <div>
            <div className="row">
              <button onClick={this.removeSmallBottle.bind(this)}>
                Remove Small Bottle
              </button>
              <text>{small_bottles}</text>
              <button onClick={this.addSmallBottle.bind(this)}>
                Add Small Bottle 
              </button>
            </div>
            <div className="row">
              <button onClick={this.removeBigBottle.bind(this)}>
                Remove Small Bottle
              </button>
              <text>{big_bottles}</text>
              <button onClick={this.addBigBottle.bind(this)}>
                Add Small Bottle 
              </button>
            </div>
          </div>
        );
  }
}
