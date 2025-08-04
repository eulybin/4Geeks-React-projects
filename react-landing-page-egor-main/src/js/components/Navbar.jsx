import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm bg-dark p-2'>
      <div className='container-fluid'>
        <a className='navbar-brand text-white fs-3' href='#'>
          Navbar
        </a>
        <button
          className='navbar-toggler bg-white'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a className='nav-link active text-white' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-white' href='#'>
                Features
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-white' href='#'>
                Pricing
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link disabled text-white' aria-disabled='true'>
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
