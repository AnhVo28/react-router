import React from 'react';
import Nav from 'Nav';
import axios from 'axios'
import {connect} from 'react-redux'
import Notification from 'Notification';


class Main extends React.Component{
  render(){
    var {notification} = this.props;
    var xhtml = notification != null? <Notification txt= {notification} /> : null;
    return (
      <div className='row'>
        <h1>Main</h1>
        <Nav/>
        {xhtml}
        {this.props.children}
      </div>
    )
  }
  componentDidMount(){
    var {dispatch} = this.props;
    axios.get('/getInfo')
    .then(res=>{
      if(res.data != 'not login'){
        dispatch({type: 'LOG_IN', username: res.data})
      }
    })
    .catch(err =>console.log('loi'))
  }
}

module.exports = connect(function (state) {
  return {notification: state.notification}
})(Main);
