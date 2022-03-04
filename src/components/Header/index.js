import React from 'react';
import Nav from '../Nav';

function Header() {
  return (
    <header>
      <div className='header-wrapper'>
      <h1>Christopher McCormack</h1>
      <h2>Full Stack Developer</h2>
      </div>
      <Nav/>
    </header>
  );
}
export default Header;