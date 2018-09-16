import React from 'react';
import CalcResultWidget from '../components/CalcResultWidget';
import SelectGroupBtnWidget from '../components/SelectGroupBtnWidget';
import CalcPadWidget from '../components/CalcPadWidget';

export default class CalculatorWidget extends React.Component {

  showReport(){
    this.props.selectWasteGroup("report");
  }

  renderGroupButtons(groups){
    const {  selectWasteGroup } = this.props;
    return _.map(groups, group => {
      return (<SelectGroupBtnWidget group={group.name} key={group.name} selectWasteGroup={selectWasteGroup} />);
    });
  }
  
  dispatchScrean(){
    const { waste,  display_items, items , groups, selected_waste_group } = this.props;

    if(selected_waste_group == "report"){
      return(<CalcResultWidget />);
    }
    else {
      return(<CalcPadWidget waste={waste} display_items={display_items} items={items} groups={groups} selected_waste_group={selected_waste_group} />);
    }
  }

  render() {
    const {  display_items , groups } = this.props;
  
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
          <div className="col-md-12">
            <div className="btn-group text-capitalize shadow">
              {this.renderGroupButtons(groups)}
            </div>
            <button type="button" className="btn btn-primary shadow ml-2" onClick={this.showReport.bind(this)}>Report</button>
          </div>
        </div>
        {this.dispatchScrean()}
      </div>
    );
  }
}
