import React from 'react';
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

  getWeight(grams){
    if( !grams || grams == 0){
      return "-";
    }
    return this.getTonnes(grams) + this.getKilos(grams)  + this.getGrams(grams);
  }

  rednedBox(key, title, value){
    return (
      <div className="calc-section rounded shadow p-3 mb-3" key={key}>
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
    const { total_monthly, total_yearly } = this.props.waste;
    var monthly = this.getWeight(total_monthly);
    var yearly = this.getWeight(total_yearly);
    var years60 = this.getWeight((total_yearly*60));
    return (
      <div className="waste-results" key="results">
        {this.rednedBox('results-monthly','your monthly waste', monthly)}
        {this.rednedBox('results-yearly','your yearly waste', yearly)} 
        {this.rednedBox('results-60-yearly','60 years waste', years60)}
      </div>
    );
  }
}
