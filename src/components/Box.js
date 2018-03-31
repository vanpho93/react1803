import React, { Component } from 'react';

export class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 100 };
        this.increase = this.increase.bind(this);
    }

    increase() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <p>Value = {this.state.count}</p>
                <button onClick={this.increase}>
                    Increase
                </button>
            </div>
        );
    }
}
