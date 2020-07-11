import React, { Component } from 'react'
import MiniChartsDetails from '../snippets/MiniCardDetail'

export default class DetailsChart extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 is-light-text">
                    <div className="card is-card-dark chart-card">
                        <MiniChartsDetails />
                    </div>
                </div>
            </div>
        )
    }
}
