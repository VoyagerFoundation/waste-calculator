import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class CalcResulttWidget extends React.Component {

  getTonnes(grams){
    var tonnes = Math.floor(grams/1000000);
    
    if( !tonnes || tonnes == 0){
      return "";
    }
    return tonnes + " t ";
  }

  getKilos(grams){
    var kg = Math.floor((grams % 1000000)/1000);
    if( !kg || kg == 0){
      return "";
    }
    return kg + " kg ";
  }

  getGrams(grams){
    var gr = Math.ceil((grams % 1000));
    if(gr > 0){
      return gr + " g ";
    }
  }

  formatWeight(grams){
    if( !grams || grams == 0){
      return "-";
    }
    return this.getTonnes(grams) + this.getKilos(grams)  + this.getGrams(grams);
  }

  rednedBox(key, title, value){
    return (
      <div className="calc-section rounded shadow p-3 mt-3" key={key}>
        <div className="row">
          <div className="col font-italic">
            <h6>{title}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4>{value}</h4>
          </div>
        </div>
      </div>
    );
  }

  renderPie(options){
    return(
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    );
  }

  preparePieData(preformatted){
    var result_data = [];
    if ( !preformatted ) return result_data;

    var group_names = Object.keys(preformatted);
    for (var i = 0; i < group_names.length; i++) {
      var group = group_names[i];
      result_data.push(
        { name: group,
          y: preformatted[group]
        });
    }

    return result_data;
  }

  render() {
    const { total_monthly, total_yearly, group } = this.props.waste;
    var monthly = this.formatWeight(total_monthly);
    var yearly = this.formatWeight(total_yearly);
    var years60 = this.formatWeight(total_yearly*60);
    var groups = group;
    var groupFormatted = this.preparePieData(groups);

    const chartOptions = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Waste Areas'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
      },
      series: [{
          name: 'Waste Areas',
          colorByPoint: true,
          data: groupFormatted
      }],
      colors: ['#94A8FF', '#FFCEAB', '#ABFFE5']
  }

    return (
      <div className="waste-results" key="results">
        {this.rednedBox('results-monthly','your monthly waste', monthly)}
        {this.rednedBox('results-yearly','your yearly waste', yearly)} 
        {this.rednedBox('results-60-yearly','60 years waste', years60)}
        {this.renderPie(chartOptions)}
      </div>
    );
  }
}
