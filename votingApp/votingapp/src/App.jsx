import React, { Component } from 'react'
import { voteReact , voteAngular, voteVuejs} from './actions' ;

class App extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    handleAngular () {
        this.store.dispatch(voteAngular());
    }

    handleReact () {
        this.store.dispatch(voteReact());
    }
    handleVue () {
        this.store.dispatch(voteVuejs());
    }

    render () {
        return (
            <div style = { {'textAlign': 'center'}}>
                Vote For your favourite Technology
                <div className="row">
                    <div className="col-md-4">
                        <h1 onClick = {()=> this.handleAngular()}>Angular </h1>
                    </div>
                    <div className="col-md-4">
                        <h1 onClick = {()=> this.handleReact()}>React </h1>
                    </div>
                    <div className="col-md-4">
                        <h1 onClick = {()=> this.handleVue()}>VueJs</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;