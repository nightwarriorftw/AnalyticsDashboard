import React, { Component } from 'react'

export default class MiniCharts extends Component {

    render() {
        return (
            <div className="col-lg-3 col-sm-6 is-light-text mb-4">
                <div className="card grid-card is-card-dark">
                    <div className="card-heading">
                        <div className="is-dark-text-light letter-spacing text-small">
                            {this.props.name}
                        </div>
                        <div className="card-heading-brand">
                            <i className="fab fa-ebay text-x-large logo-adjust" />
                        </div>
                    </div>

                    <div className="card-value pt-4 text-x-large">
                        <span className="text-large pr-1">Rs </span>
                        {this.props.r}
                    </div>
                </div>
            </div>
        )
    }
}
