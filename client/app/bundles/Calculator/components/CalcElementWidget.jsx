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

  render() {
    const { item, amount } = this.props;
    return (
      <tr key={item.id} id={item.id} >
        <td>{item.name}</td>
        <td className="button-cell">
          <img src='/assets/images/deduct_button.png' onClick={this.removeItem.bind(this)} />     
        </td>
        <td className="amount">
          {amount}
        </td>
        <td className="button-cell">
          <img src='/assets/images/add_button.png' onClick={this.addItem.bind(this)} />
        </td>
      </tr>
    );  
  }
}
