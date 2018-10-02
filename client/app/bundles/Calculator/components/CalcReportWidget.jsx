import React from 'react';
import CalcResultsWidget from './CalcResultsWidget';
import PieWidget from './charts/PieWidget'; 
import CalcResultTextWidget from './CalcResultTextWidget';

 export default class CalcReportWidget extends React.Component {

  render(){
    const { total_monthly, total_yearly } = this.props.waste;

    return(
      <div>
        <div className="row">
          <div className="col-md-4">
            <CalcResultTextWidget newKey='results-monthly' title='your monthly waste' grams={total_monthly}  />
          </div>
          <div className="col-md-4">
            <CalcResultTextWidget newKey='results-yearly' title='your yearly waste' grams={total_yearly}  />
          </div>
          <div className="col-md-4">
            <CalcResultTextWidget newKey='results-60-yearly' title='60 years waste' grams={(total_yearly*60)}  />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <PieWidget aggregation={this.props.waste.by_group} pie_name="Waste Areas" />
          </div>
          <div className="col-md-4">
            <PieWidget aggregation={this.props.waste.by_type} pie_name="Plastic Types" />
          </div>
          <div className="col-md-4">
            <PieWidget aggregation={this.props.waste.by_recyclable} pie_name="Recyclable" />
          </div>
        </div>
      </div>
    );
  }
} 


        