import React from 'react';
import PieWidget from './charts/PieWidget'; 

export default class CalcResultsWidget extends React.Component {

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

  render() {
    const { total_monthly, total_yearly, by_group } = this.props.waste;
    var monthly = this.formatWeight(total_monthly);
    var yearly = this.formatWeight(total_yearly);
    var years60 = this.formatWeight(total_yearly*60);

    return (
      <div className="waste-results" key="results">
        {this.rednedBox('results-monthly','your monthly waste', monthly)}
        {this.rednedBox('results-yearly','your yearly waste', yearly)} 
        {this.rednedBox('results-60-yearly','60 years waste', years60)}
        <PieWidget aggregation={this.props.waste.by_group} pie_name="Waste Areas" />
      </div>
    );
  }
}
