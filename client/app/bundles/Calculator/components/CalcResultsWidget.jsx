import React from 'react';
import PieWidget from './charts/PieWidget';
import CalcResultTextWidget from './CalcResultTextWidget';

export default class CalcResultsWidget extends React.Component {  

  render() {
    const { total_monthly, total_yearly } = this.props.waste;

    return (
      <div className="waste-results" key="results">
        <CalcResultTextWidget newKey='results-monthly' title='your monthly waste' grams={total_monthly}  />
        <CalcResultTextWidget newKey='results-yearly' title='your yearly waste' grams={total_yearly}  />
        <CalcResultTextWidget newKey='results-60-yearly' title='60 years waste' grams={(total_yearly*60)}  />
        <PieWidget aggregation={this.props.waste.by_group} pie_name="Waste Areas" />
      </div>
    );
  }
}
