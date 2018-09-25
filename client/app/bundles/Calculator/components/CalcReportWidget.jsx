import React from 'react';
import CalcResultsWidget from './CalcResultsWidget';

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
          </div>    
          <div className="col-md-4">
            <CalcResultsWidget waste={waste} />
          </div>
        </div>
      </div>
    );
  }
} 