import React from 'react';
import {Link,IndexLink} from 'react-router';

class Nav extends React.Component{
  render(){
    return (
      <div>
        <ul>
          <li> <IndexLink to='/' activeClassName='active'> HomePage</IndexLink>  </li>
          <li> <Link to='/account' activeClassName='active' >Account</Link> </li>
          <li> <Link to="/transaction" activeClassName='active' >Transaction</Link> </li>
      </ul>
      </div>

    )
  }
}


module.exports = Nav;
