import React from 'react';
import CalcElement from '../containers/CalcElement';
import CalcResultsWidget from '../components/CalcResultsWidget';
import SelectGroupBtnWidget from '../components/SelectGroupBtnWidget';

export default class CalculatorWidget extends React.Component {

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

  renderGroups(elements_obj, items, groups_button){
    var groups = Object.keys(elements_obj);
    return _.map(groups, group => {
      return(
        <div key={group}>
          <div className="row">
            <div className="col-md-6">
              <div className="btn-group text-capitalize">
                {this.renderGroupButtons(groups_button)}
              </div>
            </div>
            <div className="col-md-6 text-capitalize font-italic text-right">
              <h4 className="pr-3">{group}</h4>
            </div>
          </div>
          {this.renderSections(elements_obj[group],items)}
        </div>
        );
    });
  }

  renderGroupButtons(groups){
    const {  selectWasteGroup } = this.props;
    return _.map(groups, group => {
      return (<SelectGroupBtnWidget group={group.name} key={group.name} selectWasteGroup={selectWasteGroup} />);
    });
  }

  render() {
    const { waste,  display_items, items , groups } = this.props;
  
    var categories = Object.keys(display_items);
    if(categories.size > 0){
      return (
        <div className="container"> no data </div>
      );
    }
    return (
      <div className="container calculator">
        <div className="row">
          <div className="col-md-12">
            <h1>Plastic Calculator</h1>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-8">
            {this.renderGroups(display_items, items, groups)}
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
