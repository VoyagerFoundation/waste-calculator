import React from 'react';
export default class CalcElementWidget extends React.Component {

  render() {
    const { total_monthly, total_yearly } = this.props.waste;

    return (
      <div className="container">
        <hr />
        <h3>
          Monthly waste: {total_monthly}
        </h3>
        <h3>
          Yearly waste: {total_yearly}
        </h3>
      </div>
    );
  }
}
