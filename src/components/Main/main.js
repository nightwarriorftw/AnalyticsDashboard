import React, { Component } from 'react'
import Navbar from '../Navigations/navbar';
import DetailsSection from './DetailsSection';
import DetailsDonut from './DetailsDonut';
import DetailsCharts from './DetailsChart';

export default class main extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Navbar />
                </div>
                
                <DetailsSection />
                <DetailsDonut />
                <DetailsCharts />

            </div>
        )
    }
}
