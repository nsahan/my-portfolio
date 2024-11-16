import React, { useRef, useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import sahan from '../../assets/sahan.png'


const Navbar = () => {
  const [menu,setMenu] = useState('about');
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right='0';
  }
  const closeMenu = ()=>{
    menuRef.current.style.right='-350px';
  }

  return (
    <div className='navbar'>
        <img src={sahan} alt="" />
        <img src={menu_open} onClick={openMenu} alt="" className='nav-open' />
        <ul ref={menuRef} className='nav-menu'>
    <img src={menu_close} onClick={closeMenu} alt="" className="nav-close" />
    <li>
        <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
        </AnchorLink>
    </li>
    <li>
        <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About Me</p>
        </AnchorLink>
    </li>
    <li>
        <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => setMenu("services")}>Services</p>
        </AnchorLink>
    </li>
    <li>
        <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => setMenu("work")}>Projects</p>
        </AnchorLink>
    </li>
    <li>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
        </AnchorLink>
    </li>
</ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me </AnchorLink></div>
    </div>
  )
}

export default Navbar
