import React from 'react';
import axios from 'axios';


class HomePage extends React.Component{
  handleRequest(){
    // axios.get('/try')
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err))

    axios.post('/axios', {username: 'hoanganh'})
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }
  render(){
    return (
      <div className="small-12 columns small-centered homepage">
        <img src="1.png"/>
      </div>
    )
  }
}

module.exports = HomePage;
