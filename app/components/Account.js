import React from 'react';
import {connect} from 'react-redux';
import SignIn from 'SignIn';
import AccountInfo from 'AccountInfo';

class Account extends React.Component{
  render(){
    var {username} = this.props;
    var xhtml = username === null? <SignIn/>:<AccountInfo/>
    return (
      <div className="small-10 large-4 columns small-centered">
        {xhtml}
      </div>
    )
  }
}

module.exports = connect(function (state){
  return {username: state.username};
})(Account);
