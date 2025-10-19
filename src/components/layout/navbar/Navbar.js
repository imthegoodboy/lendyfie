import React from 'react'
import { Link } from 'react-router-dom'
import NavbarLinks from './NavbarLinks'

const { Image } = require('image-js');



  const Navbar = () => {
    return (
      <nav className="nav-wrapper" style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)' }}>
        <div className="container">
          <Link to='/' className="brand-logo left-align" style={{ fontWeight: 'bold', fontSize: '28px' }}>
            🔐 Lendyfie
          </Link>
          <NavbarLinks/>
        </div>
      </nav>
    )
  }


export default Navbar;
