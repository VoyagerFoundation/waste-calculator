import React from 'react';
export default class CalcResulttWidget extends React.Component {

  render() {
    const { total_monthly, total_yearly } = this.props.waste;

    return (
      <div>
        <div className="row">
          <h3>Monthly waste: {total_monthly} g</h3>
        </div>
        <div className="row">
          <h3>Yearly waste: {total_yearly} g</h3>
        </div>
      </div>
    );
  }
}
