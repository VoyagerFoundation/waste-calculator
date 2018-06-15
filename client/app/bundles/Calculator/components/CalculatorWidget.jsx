import React from 'react';
import CalcElement from '../containers/CalcElement';
import CalcResultsWidget from '../components/CalcResultsWidget';

export default class CalculatorWidget extends React.Component {
  
  renderElement(element_key){
    const { items, item_types } = this.props;

    var item = items.get(element_key);

    if('input' == item.type){
      return(
        <CalcElement item={item} item_type={item_types.get(element_key)} key={element_key} />
      );
    }
    else {
      return(
        <CalcElement item={item} item_type={item_types.get(element_key)} key={element_key} />
      );
    }
  }

  renderGroupElements(group_element_keys){
    return _.map(group_element_keys, element_key => {
      return(this.renderElement(element_key));
    });
  }

  renderGroup(group_key, period){
    const { $$screens } = this.props;
    const group  = $$screens.getIn([period,'groups',group_key]);
 
    var group_element_keys = Array.from(group.get('elements'));
    var group_key = group.get('key');
    var group_name = group.get('name');

    if(group_element_keys.length > 0){
      return(  
        <table className="table table-hover" key={`${group_key}_${period}`}>
          <thead>
            <tr><th colSpan="5">{group_name}</th></tr> 
          </thead>
          <tbody>
          {this.renderGroupElements(group_element_keys)}
          </tbody> 
        </table> 
      );
    }
  }

  renderElements(period){ 
    const { $$screens } = this.props;
    const group_keys = Array.from($$screens.getIn([period,'groups']).keys());

    return _.map(group_keys, group_key => {
      return this.renderGroup(group_key, period);
    });
  }

  render() {
    const { waste } = this.props;
    return (
      <div className="container">
        <div className="col-8">
          <div className="row">
              <h3>Weekly</h3>
              {this.renderElements('weekly')}
          </div>

          <div className="row">
              <h3>Monthly</h3>
              {this.renderElements('monthly')}
          </div>
        </div>
        <div className="col-4">
          <CalcResultsWidget waste={waste} />
        </div>
      </div>
    );
  }
}
