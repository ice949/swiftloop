import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { FaAlignJustify } from "react-icons/fa";

const Navigation = ({openModal}) => {
  return (
    <nav className="Navigation">
      <div className="mobile2">
        <FaAlignJustify />
      </div>
      <ul className='nav mobile' id='none'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Features</Link></li>
        <li><Link to='/'>Pricing</Link></li>
        <li><Link to='/' onClick={openModal} className='btn-link'>Get Started</Link></li>
      </ul>
      <ul className='nav desktop'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Features</Link></li>
        <li><Link to='/'>Pricing</Link></li>
        <li><Link to='/signin'>Login</Link></li>
        <li><Link to='/' onClick={openModal} className='btn-link'>Get Started</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;