import React, { Component } from 'react';
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import Maps from "fusioncharts/fusioncharts.maps";
import USARegion from "fusionmaps/maps/es/fusioncharts.usaregion";
import ReactFC from "react-fusioncharts";
import "../../chart-theme";

ReactFC.fcRoot(FusionCharts, Charts, Maps, USARegion);

export default class Rate extends Component {
    render() {

        const dataSource = {
            chart: {
                caption: `${this.props.name}`,
                theme: "analysis",
                defaultCenterLabel: `${this.props.purchaseRate}%`,
                paletteColors: `${this.props.paletteColor}`
            },
            data: [
                {
                    label: "active",
                    value: `${this.props.purchaseRate}`
                },
                {
                    label: "inactive",
                    alpha: 10,
                    value: `${100 - this.props.purchaseRate}`
                }
            ]
        };


        return (


            <div className="col-sm-4 full height">
                <div className="chart-container full-height">
                    <ReactFC
                        type="doughnut2d"
                        width="150"
                        height="150"
                        dataFormat="json"
                        containerBackgroundOpacity="0"
                        dataSource={dataSource}
                    />
                </div>
            </div>
        )
    }
}
