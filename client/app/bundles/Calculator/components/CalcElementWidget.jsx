import React, { PropTypes } from 'react';

export default class CalcElementWidget extends React.Component {
  static propTypes = {
    item_type: PropTypes.object.isRequired,
    setItemAmount: PropTypes.func.isRequired
  };

  addItem(){
    var key = this.props.item_type.get('key');
    var new_val = this.props.item.get('amount') + 1;
    this.props.setItemAmount(key, new_val);
  }

  removeItem(){
    var key = this.props.item_type.get('key');
    var new_val = this.props.item.get('amount') - 1;
    if (new_val < 0) new_val = 0;
    this.props.setItemAmount(key, new_val);
  }

  setItem(new_val){
    var key = this.props.item_type.get('key');
    this.props.setItemAmount(key, new_val);
  }

  render() {
    const { item_type, item, key} = this.props;
    var element_name  = item_type.get('name');
    
    return (
            <div className="row" key={key}>
              {element_name}
              <button onClick={this.removeItem.bind(this)}>
                Remove 
              </button>
              <text>{item.get('amount')}</text>
              <button onClick={this.addItem.bind(this)}>
                Add 
              </button>
            </div>
        );
  }
}
