var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require ('react-router')

var HomePage = require('HomePage');
var Nav = require('Nav');
var Account = require('Account');
var Transaction = require('Transaction');
var Main = require('Main');

ReactDOM.render(
  <Router history={hashHistory}>
    <Router path='/' component={Main} >
      <IndexRoute component={HomePage}/>
      <Route path='account' component={Account}/>
      <Route path='transaction' component={Transaction}/>
    </Router>
  </Router>,
  document.getElementById('root')
);
