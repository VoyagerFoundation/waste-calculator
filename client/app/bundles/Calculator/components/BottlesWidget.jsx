import React, { PropTypes } from 'react';
import  { Component } from 'react';

export default class BottlesWidget extends React.Component {
  static propTypes = {
    addSmallBottles: PropTypes.func.isRequired,
    removeSmallBottles: PropTypes.func.isRequired,
    small_bottles: PropTypes.number.isRequired,
    big_bottles: PropTypes.number.isRequired,
  };

  addSmallBottle(){
    this.props.addSmallBottles(1);
  }


  ahoy(){
    alert('ahoy');
  }

  render() {
    const { small_bottles } = this.props;
    return (
          <div>
            <div className="row">
              <button>
                Remove Small Bottle
              </button>
              <text>{small_bottles}</text>
              <button 
                onClick={this.addSmallBottle.bind(this)}
                >
                Add Small Bottle 
              </button>
              <button 
                onClick={this.addSmallBottle.bind(this)}
              >
                Add Small Bottle 
              </button>
              
            </div>
            <div className="row">
            <a onClick={this.addSmallBottle.bind(this)}>
                Remove Big Bottle
              </a>
              <text>{this.addSmallBottle.bind(this)}</text>
              <button 
                onClick={this.ahoy}
                >
                Add Big Bottle - Click mee 
              </button>
            </div>
            
          </div>
        );
  }
}


  // render(){
  //   return (
  //     <div>
  //       <div className="row">
  //         <button>
  //           Remove Small Bottle
  //         </button>
  //         <text>{this.props.small_bottles}</text>
  //         <button 
  //           onClick={this.addSmallBottle}
  //           >
  //           Add Small Bottle 
  //         </button>
  //         <button 
  //           onClick={this.addSmallBottle.bind(this)}
  //         >
  //           Add Small Bottle 
  //         </button>
          
  //       </div>
  //       <div className="row">
  //       <a onClick={this.addSmallBottle}>
  //           Remove Big Bottle
  //         </a>
  //         <text>{this.props.small_bottles}</text>
  //         <button 
  //           onClick={this.ahoy}
  //           >
  //           Add Big Bottle - Click mee 
  //         </button>
  //       </div>
        
  //     </div>
  //   );
  // }

