import React from 'react';
import CalcElement from '../containers/CalcElement';
import CalcResultsWidget from '../components/CalcResultsWidget';

export default class CalculatorWidget extends React.Component {
  
  renderElement(element, element_key){
    const { items, item_types } = this.props;

    if('input' == element.type){
      return(
        <CalcElement item={items.get(element_key)} item_type={item_types.get(element_key)} key={element_key} />
      );
    }
    else {
      return(
        <CalcElement item={items.get(element_key)} item_type={item_types.get(element_key)} key={element_key} />
      );
    }
  }

  renderGroupElements(elements, group_element_keys){
    return _.map(group_element_keys, element_key => {
      var element = elements.get(element_key);
      return(this.renderElement(element, element_key));
    });
  }

  renderGroup(group_key, period){
    const { $$screens } = this.props;
    const group  = $$screens.getIn([period,'groups',group_key]);
    const elements = $$screens.getIn([period,'elements']);
    if(_.keys(elements).length <= 0 ) return;
    
    var group_element_keys = Array.from(group.get('elements'));
    var group_key = group.get('key');
    var group_name = group.get('name');

    if(group_element_keys.length > 0){
      return(  
        <div> 
          <div>{group_name}:</div>
          <div key={group_name}>
            {this.renderGroupElements(elements,group_element_keys)}
          </div>
          <div><br/></div> 
        </div>
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
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="container">
              <div className="row">
                <h3>
                  Weekly
                </h3>
              </div>
              <div className="row">{this.renderElements('weekly')}</div>
            </div>
            
            <h3>
              Monthly
            </h3>
            <hr />
            {this.renderElements('monthly')}
          </div>
          <div className="col">
            <CalcResultsWidget waste={waste} />
          </div>
        </div>
      </div>
    );
  }
}
