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
    return _.map(elements_obj, element => {
      var item = items.find(function(e){ return e.id == element.id; });
        var amount = 0;
        if(item){
          amount = item.amount;
        }
        return this.renderElement(element, amount);
    });
  }

  renderSection(name, elements_obj,items){
    return ( 
      <table className="table table-hover calc-table" key={`${name}`}>
        <thead>
          <tr><th colSpan="5">{name}</th></tr> 
        </thead>
        <tbody>
          {this.renderSectionElements(elements_obj, items)} 
        </tbody> 
      </table> 
    );
  }

  renderSections(elements_obj, items){
    var sections = Object.keys(elements_obj);
    return _.map(sections, section => {
      return(
        <div key={section}>
          <div className="row">
              {this.renderSection(section, elements_obj[section], items)} 
          </div>
        </div>
        );
    });
  }

  renderGroup(group_name, elements_obj, items){
    return(
      <div className="col-md-12">
        <h3>{group_name}</h3>
        {this.renderSections(elements_obj,items)}
      </div>
    );
  }

  renderGroups(elements_obj, items){
    var groups = Object.keys(elements_obj);
    return _.map(groups, group => {
      return(
        <div key={group}>
          <div className="row">
              {this.renderGroup(group, elements_obj[group], items)}
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
      <div className="calculator">
      <div className="container">
        <div className="row w-100">
          <div className="col-md-12">
            <h1>Plastic Calculator</h1>
            <div className="disclaimer">
              * weight is average taken from amazon products and calculated from fluid ounces and shipping weight
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row w-100">
          <div className="col-md-8">
            {this.renderGroups(display_items, items)}
          </div>
          <div className="col-md-4">         
            <CalcResultsWidget waste={waste} />
          </div>
        </div>
      </div>
      </div>
    );
  }
}
