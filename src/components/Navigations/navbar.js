import React, { PureComponent } from 'react'

export default class navbar extends PureComponent {
    render() {
        return (
            <div>
                <div className="navbar navbar-expand-lg fixed-top is-white is-dark-text">
                    <div className="navbar-brand h1 mb-0 text-large font-medium">
                        <span style={{color: "white"}}>Analytics Dashboard</span>
                    </div>
                </div>
            </div>
        )
    }
}
