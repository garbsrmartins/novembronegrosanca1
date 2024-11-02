import { useState } from 'react';
import { FiAlignRight, FiXCircle } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import './NavBarMenu.css';

const Navbarmenu2 = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);

    const toggleClass = () => {
        setisMenu(!isMenu);
        setResponsiveclose(!isResponsiveclose);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push('menuq2');
    }

    const [isMenuSubMenu] = useState(false);

    let boxClassSubMenu = ["sub__menus"];
    if (isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }

    return (
        <header className="header__middle">
            <div className="container">
                <div className="row">
                    <div className="header__middle__menus">
                        <nav className="main-nav">
                            {/* Responsive Menu Button */}
                            {isResponsiveclose ? (
                                <span className="menubar__button" onClick={toggleClass}>
                                    <FiXCircle />
                                </span>
                            ) : (
                                <span className="menubar__button" onClick={toggleClass}>
                                    <FiAlignRight />
                                </span>
                            )}

                            <ul className={boxClass.join(' ')}>
                                <li className="menu-item">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => (isActive ? 'is-active' : '')}
                                        onClick={toggleClass}
                                    >
                                        Início
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink
                                        to="/programacao/todos"  // Set to send "todos" by default
                                        className={({ isActive }) => (isActive ? 'is-active' : '')}
                                        onClick={toggleClass}
                                    >
                                        Programação
                                    </NavLink>
                                </li>
                                <span className='icons'>
                                    <a
                                        href="https://www.instagram.com/novembronegrosanca/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="topIcon fa-brands fa-instagram"></i>
                                    </a>
                                </span>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbarmenu2;
