import { House } from 'lucide-react';
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';

const NavBar = () => {

  const [active, setActive] =useState('home');
    return (
         <div className=' bg-base-100 shadow-sm'>
          <div className='navbar container m-auto'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {' '}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
          >
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              {/* <NavLink to='/products'>Products</NavLink> */} 
              <NavLink to='/products'> Apps </NavLink>
            </li>
            <li>
              <NavLink to='/installation'>Installation</NavLink>
            </li>
          </ul>
        </div>
        <Link to='/' className='text-4xl font-bold'>
          HERO.IO
        </Link>
      </div>
      <div className='navbar-center '>
        <ul className='menu menu-horizontal px-1 hidden lg:flex'>
          <li>
            <NavLink  to='/' onClick={() => setActive('home')} className={`font-bold text-xl    ${active==='home' ? 'text-blue-800' : ''}`}>  Home</NavLink>
          </li>
          <li>
            <NavLink to='/products' onClick={() => setActive('apps')} className={`font-bold text-xl  ${active==='apps' ? 'text-blue-800' : ''}`}>Apps</NavLink>
          </li>
          <li>
            <NavLink to='/installation'  onClick={() => setActive('installation')} className={`font-bold text-xl  ${active==='installation' ? 'text-blue-800' : ''}`}>Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        
        {/* <NavLink to='/products' className='btn'>
          Contribute
        </NavLink> */}
        <a 
  href="https://github.com/tareqqqqq" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="btn text-sm font-bold text-white"
  
  style={{background:"linear-gradient(125.07deg, rgba(99, 46, 227, 1),rgba(159, 98, 242, 1) 100%)"}}
>
  <FaGithub />
  Contribute
</a>
      </div>
      </div>
    </div>
    );
};

export default NavBar;