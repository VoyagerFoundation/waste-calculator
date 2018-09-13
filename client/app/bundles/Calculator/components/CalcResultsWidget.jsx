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

  render() {
    const { total_monthly, total_yearly } = this.props.waste;

    return (
      <div className="waste-results" key="results">
        <div className="calc-section rounded" key="results-monthly">
          <div className="row">
            <div className="col font-italic">
              <h5>your monthly waste</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3 key="">{this.getWeight(total_monthly)}</h3>
            </div>
          </div>
        </div>

        <div className="calc-section rounded" key="results-yearly">
          <div className="row" >
            <div className="col font-italic">
              <h5>your yearly waste:</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>{this.getWeight(total_yearly)}</h3>
            </div>
          </div>
        </div>

        <div className="calc-section rounded" key="results-60-yearly">
          <div className="row" >
            <div className="col font-italic">
              <h5>60 years waste</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>{this.getWeight((total_yearly*60))}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
