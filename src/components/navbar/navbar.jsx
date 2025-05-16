import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './navbar.module.css';
import LogoPagNav from '../../assets/vidapluslogo.png';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import LoaderModal from '../navbar/loading'; // ajuste o caminho conforme necessário

function NavBar({ toggleDarkMode, darkMode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    const handleLoginClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/Login');
        }, 1000);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 924) {
                setIsOpen(false);
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
            {loading && <LoaderModal />}
            <div>
                <nav>
                    <div className={classNames(style.hamburger)} onClick={toggleMenu}>
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                    </div>

                    <div>
                        <button onClick={toggleDarkMode} className={style.themeToggle}>
                            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                        </button>
                    </div>

                    <div className={style.NavBarBackground}>
                        <span className={style.logopagina}>
                            <Link to="/">
                                <img src={LogoPagNav} className={style.LogoPagNav} alt="Logo VidaPlus" />
                            </Link>
                        </span>

                        <ul className={classNames(style.NavBar, { [style.show]: isOpen })}>
                            <li className={style.NavBarElement}>
                                <Link to="/hospital" className={classNames(style.NavBarLink, style.NavBarLinkUnderline)}>Hospital</Link>
                            </li>
                            <li className={style.NavBarElement}>
                                <Link to="/Estrutura" className={classNames(style.NavBarLink, style.NavBarLinkUnderline)}>Estrutura</Link>
                            </li>
                            <li className={style.NavBarElement}>
                                <Link to="/Servicos" className={classNames(style.NavBarLink, style.NavBarLinkUnderline)}>Serviços</Link>
                            </li>
                            <li className={style.NavBarElement}>
                                <Link to="/Qualidade" className={classNames(style.NavBarLink, style.NavBarLinkUnderline)}>Qualidade</Link>
                            </li>
                            <li className={style.NavBarElement}>
                                <Link to="/Pacientes" className={classNames(style.NavBarLink, style.NavBarLinkUnderline)}>Pacientes</Link>
                            </li>
                            <li className={style.NavBarElement}>
                                <button onClick={handleLoginClick} className={classNames(style.NavBarLink, style.NavBarLinkUnderline)}>
                                    Login
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* <div className={style.ConteinerLineblock}>
                    <div className={style.lineblock}></div>
                </div> */}
            </div>
        </header>
    );
}

export default NavBar;
