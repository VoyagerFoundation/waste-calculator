import React from 'react';
import CalcResultsWidget from './CalcResultsWidget';
import PieWidget from './charts/PieWidget'; 

 export default class CalcReportWidget extends React.Component {

  render(){
    const { waste } = this.props;

    return(
      <div>
         <div className="row">
          <div className="col-md-8 report-body" >
            <div className="alert alert-dark" role="alert">
              We are working hard to have report for you in place soon. Please stay tuned!
            </div>
            <PieWidget aggregation={this.props.waste.by_group} pie_name="Waste Areas" />
              <PieWidget aggregation={this.props.waste.by_type} pie_name="Plastic Types" />
          </div>    
          <div className="col-md-4">
            <CalcResultsWidget waste={waste} />           
          </div>
        </div>
      </div>
    );
  }
} 