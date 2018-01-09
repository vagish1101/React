import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
// var app = require('./app.jsx');
// console.log(app);
import { Apptest , Apptest1 }  from './test.js'
import Apptest2 from './test2.js'

// import Apptest1   from './test.js'

Apptest1();
Apptest2();
ReactDOM.render(
    <div>
        <App />
    </div>
    ,
  document.getElementById('myapp')
);