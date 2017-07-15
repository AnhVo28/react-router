import React from 'react';
import {Link,IndexLink} from 'react-router';

class Nav extends React.Component{
  render(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">Site Title</li>
            <li>
              <a href="#">One</a>
              <ul className="menu vertical">
                <li><a href="#">One</a></li>
                <li><a href="#">Two</a></li>
                <li><a href="#">Three</a></li>
              </ul>
            </li>
            <li> <IndexLink to='/' activeClassName='active'> HomePage</IndexLink>  </li>
            <li> <Link to='/account' activeClassName='active' >Account</Link> </li>
            <li> <Link to="/transaction" activeClassName='active' >Transaction</Link> </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><input type="search" placeholder="Search"/></li>
            <li><button type="button" className="button">Search</button></li>
          </ul>
        </div>
      </div>
    )
  }
}


module.exports = Nav;

<div>
  <ul>

  </ul>
</div>
