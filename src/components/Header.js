import React, { Component } from 'react';

import Nav from './header/Nav';

class Header extends Component {
  render() {
    return (
      <div className="container-fluid cabecalho">
       <Nav/>
      </div>
    );
  }
}

export default Header;
