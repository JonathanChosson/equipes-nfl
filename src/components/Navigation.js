import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Navigation.css'

const Navigation = () => {
    return (
        <nav className='navigation'>
            <ul className='navigation__ul'>
                <NavLink to="/">
                    <li className='navigation__ul__li'>Accueil</li>
                </NavLink>
                <NavLink to="/about">
                    <li className='navigation__ul__li'>A propos</li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navigation;