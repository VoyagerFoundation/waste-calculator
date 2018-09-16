import React, { PropTypes } from 'react';

export default class CalcElementWidget extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    amount: PropTypes.number,
  };

  addItem(){
    var key = this.props.item.id;
    var new_val = this.props.amount + 1;
    this.props.setItemAmount(key, new_val);
  }

  removeItem(){
    var key = this.props.item.id;
    var new_val = this.props.amount - 1;
    if (new_val < 0) new_val = 0;
    this.props.setItemAmount(key, new_val);
  }

  setItem(new_val){
    var key = this.props.item.id;
    this.props.setItemAmount(key, new_val);
  }

  deduct_image(amount){
    if(amount > 0){
      return '/assets/images/deduct_button.png';
    }
    return '/assets/images/deduct_disabled_button.png'
  }

  recyclable(isRecuclable){
    if(isRecuclable){
      return (<i className="fas fa-recycle info-tag recycle" ></i>);
    }
  }

  render() {
    const { item, amount } = this.props;
    return (
      <div key={item.id} id={item.id} className="row calc-item"> 
        <div className="col-sm-9">
          <span>{item.name}</span>
          {/* <i className="fas fa-info-circle info-tag"></i> */}
          <span className="badge badge-warning info-tag">{item.plastic_type}</span>
          {this.recyclable(item.recyclable)}
        </div>
        <div className="col-sm-3">
          <div className="row calc-controls">
            <div className="col-sm-4">
              <i className="fas fa-minus-circle calc-button" onClick={this.removeItem.bind(this)}></i>
            </div>
            <div className="col-sm-4">
              {amount}
            </div>
            <div className="col-sm-4">
              <i className="fas fa-plus-circle calc-button" onClick={this.addItem.bind(this)}></i>
            </div>
          </div>
        </div>
      </div>
    );  
  }
}
