import React from 'react';
import { gramsToStr } from './lib/waste-tools';

export default class CalcResultTextWidget extends React.Component {

  render() {
    const { newKey, title, grams } = this.props;
    let text = gramsToStr(grams);

    return (
      <div className="calc-section rounded shadow p-3 mt-3" key={newKey}>
        <div className="row">
          <div className="col font-italic">
            <h6>{title}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4>{text}</h4>
          </div>
        </div>
      </div>
    );
  }
}
