import React, { Component } from "react";
import Chart from "../snippets/Chart";
import Maps from "../snippets/Maps";

export default class DetailsChart extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 is-light-text">
          <div className="card is-card-dark chart-card">
            <Chart />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 is-light-text">
          <div className="card is-card-dark chart-card">
            <Maps />
          </div>
        </div>
      </div>
    );
  }
}
