import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { provider } from 'react-redux'

import test from './reducers'
import App from './App';
import Results from './components/results'

console.log(App);
// var test = {};
let store = createStore(test);
debugger

function render () {
    ReactDOM.render(
        <div>
            <App store = {store} />
            <Results store = {store} />
        </div>
        ,
        document.getElementById('root')
    );
}

store.subscribe(render);
render();

