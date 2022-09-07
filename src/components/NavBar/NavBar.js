import React from 'react';
import './NavBar.css'
function NavBar() {
  return (
    <div className='navbar'>
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
           
           <div className="nav-links">

            <div className="nav-options">
           <p className='nav-link'>Home</p>
            <p className='nav-link'>Movies</p>
            <p className='nav-link'>TV shows</p>
            <p className='nav-link'>Latest</p>
            <p className='nav-link'>My list</p>
            </div>

            <div className="nav-icons">
            <i class="fa-solid fa-magnifying-glass icons"></i>
            <i class="fa-solid fa-gift icons"></i>
           <i class="fa-solid fa-bell icons"></i>
           
           
           </div>
           </div>
           <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
          
           
            
        </div>
  );
}

export default NavBar;
