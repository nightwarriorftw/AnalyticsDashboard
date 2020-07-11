import React, { Component } from 'react';
import CardDetail from '../snippets/CardDetails';
import RateCard from '../snippets/Rate';

export default class DetailsSection extends Component {
    render() {
        return (
            <div className="row">
                <CardDetail name='Views' />
                <div className="col-md-8 col-lg-9 is-light-text mb-4">
                    <div className="card is-card-dark chart-card">
                        <div className="row full-height">
                            <RateCard paletteColor="#3B70C4, #000000" purchaseRate="10"/>
                            <RateCard paletteColor="#8338ec, #000000" purchaseRate="20"/>
                            <RateCard paletteColor="#ff9f1c, #000000" purchaseRate="89"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
