import React, { Component } from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import '../../chart-theme';
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartData = [
    {
        label: "Amazon",
        value: "5"
    },
    {
        label: "Ebay",
        value: "3"
    },
    {
        label: "Flipkart",
        value: "25"
    }
];

const chartConfigs = {
    type: "bar2D",
    width: "450",
    height: "500",
    dataFormat: "json",
    containerBackgroundOpacity: "0",
    dataEmptyMessage: "Loading Data...",
    dataSource: {
        chart: {
            //Set the chart caption
            caption: "Order trends by Store",
            //Set the x-axis name
            xAxisName: "Company Name",
            //Set the y-axis name
            yAxisName: "Count",
            numberSuffix: "K",
            //Set the theme for your chart
            theme: "analysis"
        },
        // Chart Data
        data: chartData
    }
};

export default class Chart extends Component {
    render() {
        return (
            <ReactFC {...chartConfigs} />
        )
    }
}