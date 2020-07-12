import React, { PureComponent } from 'react'

const publicURL = process.env.PUBLIC_URL;
export default class navbar extends PureComponent {
    render() {
        return (
            <div>
                <div className="navbar navbar-expand-lg fixed-top is-white is-dark-text">
                    <div className="navbar-brand h1 mb-0 text-large font-medium">
                        <img src={`${publicURL}/logo.png`} alt="logo" width="50px"  height="50px"/> <a href="/"><span style={{color: "white"}}>Analytics Dashboard</span></a>
                    </div>
                </div>
            </div>
        )
    }
}
