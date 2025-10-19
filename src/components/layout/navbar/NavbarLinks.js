import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import M from "materialize-css";

class NavbarLinks extends Component {

  componentDidMount() {
    let elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {
      constrainWidth: false,
      hover: true,
      gutter: 0,
      coverTrigger: false,
    });
  }

  render() {
    return (
      <div>
        <ul id="nav-dropdown-leasing" className="dropdown-content" style={{ backgroundColor: '#fff', border: '2px solid #ff6b35' }}>
          <li><NavLink to='/newlease' style={{ color: '#ff6b35', fontWeight: 600 }}>New Lease Offer</NavLink></li>
          <li className="divider" style={{ backgroundColor: '#ffb088' }}></li>
          <li><NavLink to="/myleaseoffers" style={{ color: '#ff6b35', fontWeight: 600 }}>My Lease Offers</NavLink></li>
          <li className="divider" style={{ backgroundColor: '#ffb088' }}></li>
          <li><NavLink to="/allleaseoffers" style={{ color: '#ff6b35', fontWeight: 600 }}>All Lease Offers</NavLink></li>
        </ul>

        <ul id="nav-dropdown-lending" className="dropdown-content" style={{ backgroundColor: '#fff', border: '2px solid #ff6b35' }}>
          <li><NavLink to='/newloan' style={{ color: '#ff6b35', fontWeight: 600 }}>New Loan Request</NavLink></li>
          <li className="divider" style={{ backgroundColor: '#ffb088' }}></li>
          <li><NavLink to="/myloans" style={{ color: '#ff6b35', fontWeight: 600 }}>My Loan Requests</NavLink></li>
          <li className="divider" style={{ backgroundColor: '#ffb088' }}></li>
          <li><NavLink to="/allloans" style={{ color: '#ff6b35', fontWeight: 600 }}>All Loan Requests</NavLink></li>
        </ul>

        <ul className="right">
          <li><NavLink to='/about' className='white-text'>About</NavLink></li>
          <li><NavLink to='/how-it-works' className='white-text'>How It Works</NavLink></li>
          <li><NavLink to='/faq' className='white-text'>FAQ</NavLink></li>
          <li>
            <a className="dropdown-trigger white-text" data-target="nav-dropdown-leasing">
              Leasing
              <i className="material-icons right">arrow_drop_down</i>
            </a>
          </li>
          <li>
            <a className="dropdown-trigger white-text" data-target="nav-dropdown-lending">
              Lending
              <i className="material-icons right">arrow_drop_down</i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavbarLinks;
