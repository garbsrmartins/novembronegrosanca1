import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import logo from '../../images/LogoNav.png'

import './NavBarMenu.css'


const Navbarmenu2 = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

   

    return (
    <header className="header__middle">
        <div className="container">
            <div className="row">

                {/* Add Logo  */}
                
                
                <div className="header__middle__menus">
                    <nav className="main-nav " >
                    <a href='/'><img className='nav-logoCell' src={logo} alt='logo'/> </a>
                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}

                    <a href='/'><img className='nav-logo' src={logo} alt='logo'/> </a>
                    <ul className={boxClass.join(' ')}>
                    
                    
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
                    </li>
                    
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Quartos <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/piramide`}> Aruna Piramide</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/beija-flor`}> Aruna Beija Flor </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/sabia`}> Suíte Sabiá </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/tucano`}> Suíte Tucano </NavLink> </li>
                        </ul>
                    </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={'/contato'}> Contato </NavLink> </li>
                    <span className='icons'>
                    <a href="https://www.instagram.com/arunaespacoregenerativo" target="_blank" rel="noreferrer" ><i className="topIcon fa-brands fa-instagram"></i></a>
                    <a href="https://linktr.ee/arunafloripa" target="_blank" rel="noreferrer" ><i className="topIcon fa-brands fa-airbnb"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=5548992061471" target="_blank" rel="noreferrer"><i class="topIcon fa-brands fa-whatsapp"></i></a>
                    </span>
                    </ul>
                    
                    
                            

                    </nav>     
                </div>   



        
        
            </div>
	    </div>
    </header>
    )
}

export default Navbarmenu2
