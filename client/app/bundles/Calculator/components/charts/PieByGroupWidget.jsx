import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class PieByGroupWidget extends React.Component {
  
  prepareData(groups_data){
    var result_data = [];
    if ( !groups_data ) return result_data;

    var group_names = Object.keys(groups_data);
    for (var i = 0; i < group_names.length; i++) {
      var group = group_names[i];
      result_data.push(
        { name: group,
          y: groups_data[group]
        });
    }
    return result_data;
  }

  chartOptions(data) {
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
            data: data
        }],
        colors: ['#94A8FF', '#FFCEAB', '#ABFFE5']
    }

    return chartOptions;
  }

  render() {
    const { by_group } = this.props.waste;
    let data = this.prepareData(by_group);
    let options = this.chartOptions(data);

    return (
        <div key='group_chart'>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
      </div>
    );
  }
}