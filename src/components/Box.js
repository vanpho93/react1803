import React, { Component } from 'react';

export class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 100 };
    }
    render() {
        return <p>Value = {this.state.count}</p>;
    }
}
