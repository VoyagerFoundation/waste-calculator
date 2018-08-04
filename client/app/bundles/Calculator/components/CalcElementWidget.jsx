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
        <td>{item.name} + {item.id}</td>
        <td>
          <button key={item.id} onClick={this.removeItem.bind(this)} className="btn btn-outline-success">
            Remove 
          </button>
        </td>
        <td>
          {amount}
        </td>
        <td>
          <button onClick={this.addItem.bind(this)} className="btn btn-outline-warning">
            Add 
          </button>
        </td>
      </tr>
    );
  }
}
