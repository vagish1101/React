import React , { Component } from 'react';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: this.props.store
        }
    }
    render() {
        return (
            <div>
                <div>Angular {this.state.results.getState().angular}</div>
                <div>React {this.state.results.getState().react}</div> 
                <div>Vue {this.state.results.getState().vuejs}</div>
            </div>

        )
    }
}
export default Results