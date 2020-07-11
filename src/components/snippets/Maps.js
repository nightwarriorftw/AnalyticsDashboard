import React, { Component } from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Maps from "fusioncharts/fusioncharts.maps";
import India from "fusionmaps/maps/es/fusioncharts.india";
import '../../chart-theme';

ReactFC.fcRoot(FusionCharts, Maps, India);

const mapConfig = {
    type: "maps/india",
    width: "600",
    height: "500",
    dataFormat: "json",
    containerBackgroundOpacity: "0",
    dataEmptyMessage: "Loading Data...",
    dataSource: {
        chart: {
            theme: "analysis",
            caption: "Orders Trend",
            subCaption: "By Region"
        },
        colorrange: {
            "color": [
                {
                    "minvalue": "0",
                    "maxvalue": "1000",
                    "code": "#2f2519",
                    "displayValue": "< 1000K"
                },
                {
                    "minvalue": "1000",
                    "maxvalue": "5000",
                    "code": "#4a3f35",
                    "displayValue": "1000-5000K"
                },
                {
                    "minvalue": "5000",
                    "maxvalue": "10000",
                    "code": "#fa7d09",
                    "displayValue": "5000-10000K"
                },
                {
                    "minvalue": "10000",
                    "maxvalue": "50000",
                    "code": "#ff4301",
                    "displayValue": "> 10000"
                }
            ]
        },
        data: [
            {
                "id": "010",
                "value": "5000"
            },
            {
                "id": "006",
                "value": "3000"
            },
            {
                "id": "020",
                "value": "4000"
            },
            {
                "id": "033",
                "value": "5000"
            },
            {
                "id": "036",
                "value": "3600"
            },
            {
                "id": "021",
                "value": "10000"
            },
            {
                "id": "028",
                "value": "5600"
            },
            {
                "id": "035",
                "value": "20000"
            },
        ]
    }
}


export default class DataMap extends Component {
    render() {
        return (
            <div>
                <ReactFC
                    {...mapConfig}
                />
            </div>
        )
    }
}
