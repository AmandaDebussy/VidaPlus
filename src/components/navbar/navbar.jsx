
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './navbar.module.css';
import LogoPagNav from '../../assets/vidapluslogo.png';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

function NavBar({ toggleDarkMode, darkMode }) {
    const [isOpen, setIsOpen] = useState(false);



    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };
    // Efeito para fechar o menu ao redimensionar para telas grandes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 924) {
                setIsOpen(false); // Fecha o menu se estiver em tela grande
            }
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        
        <header className={classNames(style.bgcolorNavBar, {
            [style.navBarDark]: darkMode,
            [style.navBarLight]: !darkMode,
        })}>
            <div>
                
                <nav>
                         <div className={classNames(style.hamburger)} onClick={toggleMenu}>
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                    </div>
                
                    
                    <div>
                    <button onClick={toggleDarkMode} className={style.themeToggle}>
                            <FontAwesomeIcon 
                                icon={darkMode ? faSun : faMoon}/>
                        </button>
                        {/* <button type="button" className={style.buttomStyleLupa} >
                            <FontAwesomeIcon icon={faSearch}/>
                    </button> */}
                 </div>
               
                 <div classNames={style.NavBarBackground}>
                    
                 <span className={style.logopagina}>
                          <Link to="/">
                         <img src={LogoPagNav}  className={style.LogoPagNav}/>
                          </Link>
                    </span>
                  
                    <ul className={classNames(style.NavBar,{ [style.show]: isOpen } )}>
                       
                          {/*criar uma tela modal aqui */}
                        <li className={style.NavBarElement}>
                            <Link to="/hospital" className={classNames(style.NavBarLink, style.NavBarLinkUnderline)}>Hospital</Link>
                        </li>
                        <li className={style.NavBarElement}>
                            <Link to="/Estrutura" className={classNames(style.NavBarLink, style.NavBarLinkUnderline)}>Estrutura</Link>
                        </li>
                        <li className={style.NavBarElement}>
                            <Link to="/Serviços" className={classNames(style.NavBarLink, style.NavBarLinkUnderline)}>Serviços</Link>
                        </li>
                        <li className={style.NavBarElement}>
                            <Link to="/Qualidade" className={classNames(style.NavBarLink, style.NavBarLinkUnderline)}>Qualidade</Link>
                        </li>
                        <li className={style.NavBarElement}>
                            <Link to="/Pacientes" className={classNames(style.NavBarLink, style.NavBarLinkUnderline)}>Pacientes</Link>
                        </li>
                        <li className={style.NavBarElement}>
                            <Link to="/Login" className={classNames(style.NavBarLink, style.NavBarLinkUnderline)}>Login</Link>
                        </li>
                        {/* <li className={style.NavBarElement}>
                            <button onClick={toggleDarkMode} className={style.themeToggle}>
                                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                            </button>
                        </li> */}
                    </ul>
                    </div>
                </nav>
                <div className={style.ConteinerLineblock}>
                <div className={style.lineblock}></div>
                </div>
            </div>
        </header>

    );
}

export default NavBar;

