import React from 'react';
import CalcElement from '../containers/CalcElement';
import CalcResultsWidget from '../components/CalcResultsWidget';

export default class CalculatorWidget extends React.Component {
  

  renderElement(element, amount){
    if('input' == element.type){
      return(
        <CalcElement item={element} key={element.id} amount={amount} />
      );
    }
    else {
      return(
        <CalcElement item={element} key={element.id} amount={amount} />
      );
    }
  }

  renderSectionElements(elements_obj, items){
    var group_element_keys = Object.keys(elements_obj);
    return _.map(group_element_keys, element_key => { 
      var elements = elements_obj[element_key];
      return _.map(elements, element => {
        var item = items.find(function(e){ return e.id == element.id; });
        var amount = 0;
        if(item){
          amount = item.amount;
        }
        return this.renderElement(element, amount)
      });
    });
  }

  renderSection(name, elements_obj,items){
    return ( 
      <table className="table table-hover" key={`${name}`}>
        <thead>
          <tr><th colSpan="5">{name}</th></tr> 
        </thead>
        <tbody>
          {this.renderSectionElements(elements_obj, items)} 
        </tbody> 
      </table> 
    );
  }

  renderGroups(elements_obj, items){
    var groups = Object.keys(elements_obj);
    return _.map(groups, group => {
      return(
        <div className="col-8" key={group}>
          <div className="row">
              <h3>{group}</h3>
              {this.renderSection(group, elements_obj[group], items)}
          </div>
        </div>
        );
    });
  }

  render() {
    const { waste,  display_items, items } = this.props;
  
    var categories = Object.keys(display_items);
    if(categories.size > 0){
      return (
        <div className="container"> no data </div>
      );
    }
    return (
      <div className="container">
        {this.renderGroups(display_items, items)}
        <div className="col-4">
          <CalcResultsWidget waste={waste} />
        </div>
      </div>
    );
  }
}
