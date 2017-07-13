import React from 'react';
import Nav from 'Nav';
import axios from 'axios'
import {connect} from 'react-redux'

class Main extends React.Component{
  render(){
    return (
      <div>
        <h1>Main</h1>
        <Nav/>
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

module.exports = connect()(Main);
