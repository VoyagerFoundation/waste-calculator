import React from 'react';
import CalcResultsWidget from '../components/CalcResultsWidget';
import CalcElement from '../containers/CalcElement';  
 export default class CalcPadWidget extends React.Component {
  
  renderSectionElements(elements_obj, items){
    return _.map(elements_obj, element => {
      var item = items.find(function(e){ return e.id == element.id; });
        var amount = 0;
        if(item){
          amount = item.amount;
        }
      return(<CalcElement item={element} key={element.id} amount={amount} />);
    });
  }
   renderSections(elements_obj, items){
    var sections = Object.keys(elements_obj);
    return _.map(sections, section => {
      return(
        <div className="shadow pl-3 pl-3 pr-3 mb-4 mt-3">
          <div className="row calc-section rounded-top">
            <div className="col-md-12" key={section}>
                <h4>{section}</h4>
            </div>
          </div>
          {this.renderSectionElements(elements_obj[section], items)} 
        </div>
        );
    });
  }
   renderGroups(elements_obj, items){
    var groups = Object.keys(elements_obj); 
    return _.map(groups, group => {
      return(
        <div>
          {this.renderSections(elements_obj[group],items)}
        </div>
        );
    });
  }
   render(){
    const { waste,  display_items, items , selected_waste_group} = this.props;
    return(
      <div>
         <div className="row">
          <div className="col-md-8">
            {this.renderGroups(display_items, items)}
          </div>
          <div className="col-md-4">
            <CalcResultsWidget waste={waste} />
          </div>
        </div>
         <div className="row">
          <div className="col-md-12 disclaimer">
            * weight is average taken from amazon products and calculated from fluid ounces and shipping weight
          </div>
        </div>
      </div>
    );
  } 
} 