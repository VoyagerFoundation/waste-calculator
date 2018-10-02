import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class PieWidget extends React.Component {
  
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

  chartOptions(data, pie_name) {
      const chartOptions = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: pie_name
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
            name: pie_name,
            colorByPoint: true,
            data: data
        }],
        colors: ['#94A8FF', '#FFCEAB', '#ABFFE5']
    }

    return chartOptions;
  }

  render() {
    const { aggregation, pie_name } = this.props;
    let data = this.prepareData(aggregation);
    let options = this.chartOptions(data, pie_name);

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