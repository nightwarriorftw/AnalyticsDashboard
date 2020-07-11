import React, { Component } from 'react';
import MiniChart from '../snippets/MiniCardDetail';
import TotalAmount from '../snippets/TotalAmount';

export default class DetailsSection extends Component {
    render() {
        return (
                <div className="row">
                    <TotalAmount />
                    <MiniChart name='Flipkart' />
                    <MiniChart name='Amazon' />
                    <MiniChart name='Ebay' />
                </div>
        )
    }
}
