import React, { Component } from 'react';
import MiniChart from '../snippets/MiniCardDetail';
import TotalAmount from '../snippets/TotalAmount';

export default class DetailsSection extends Component {
    render() {
        return (
                <div className="row">
                    <TotalAmount />
                    <MiniChart name='Flipkart' r="100K"/>
                    <MiniChart name='Amazon' r="50K"/>
                    <MiniChart name='Ebay' r="20K"/>
                </div>
        )
    }
}
