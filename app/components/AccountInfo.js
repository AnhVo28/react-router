import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class AccountInfo extends React.Component{
  logOut(e){
    e.preventDefault();
    var {dispatch} = this.props;
    axios.get('/logout')
    .then(res => {
      dispatch({type: 'LOG_OUT'});
    })
    .catch(err => console.log(err))
  }
  render(){
    var {username} = this.props;
    var xhtml = username === null? <SignIn/>:<AccountInfo/>
    return (
      <div>
        <h1>This is Account</h1>
        <p>Username: {this.props.username}</p>
        <a href="#" className="button" onClick={this.logOut.bind(this)}>Log out</a>
      </div>
    )
  }
}

module.exports = connect(function (state){
  return {username: state.username};
})(AccountInfo);
