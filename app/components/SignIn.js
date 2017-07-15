import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class SignIn extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var {username, password} = this.refs;

    // if(username.value === 'khoapham' && password.value === '123'){
    //   dispatch({type: 'LOG_IN', username: username.value});
    // }
    // console.log('Submit');

    axios.post('/signIn', {username: username.value,password: password.value})
    .then(res => {
      if(res.data === 'success'){
        dispatch({type: 'LOG_IN', username: username.value});
      }else{
        dispatch({type: 'SHOW_NOTIFICATION', txt: 'Wrong username or password'});
      }
    })
    .catch(err => console.log(err))
  }
  render(){
    return (
      <div>
        <h1 className="text-center page-title">Sign In</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Username" ref="username"/>
          <input type="password" placeholder="Password" ref="password"/>
          <button type="submit" className="button expanded">Sign In</button>
        </form>
      </div>
    )
  }
}

module.exports = connect()(SignIn);
