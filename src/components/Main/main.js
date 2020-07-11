import React, { Component } from 'react'
import MiniChart from '../snippets/MiniCardDetail';
import Navbar from '../Navigations/navbar';

export default class main extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Navbar />
                </div>
                <div className="row">
                    <MiniChart name='Flipkart' />
                    <MiniChart name='Amazon' />
                    <MiniChart name='Ebay' />
                </div>
            </div>
        )
    }
}
