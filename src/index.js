import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import header from './header';
import adheader from './adheader';
import footer from './footer';
import Chat from './Chat';
//import * as serviceWorker from './serviceWorker';
import {Router,Route,Link,browserHistory} from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={Chat}/>
    <Route path="/App" component={App}/>
    <Route path="/header" component={header}/>
    <Route path="/adheader" component={adheader}/>
    <Route path="/footer" component={footer}/>
    </Router>,document.getElementById('root')
);