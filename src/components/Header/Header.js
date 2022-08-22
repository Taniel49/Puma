import React from 'react';
import './Header.less';
import logo from '../../images/puma_logo.svg';

function Header() {
    return (
        <header className="header">
            <nav className="menu">
                <div className="menu__navigation">
                    <img className="logo" src={logo} alt={'Puma logo'}/>
                    <button className="menu__navigation-button">About</button>
                    <button className="menu__navigation-button">Feature</button>
                    <button className="menu__navigation-button">Gallary</button>
                </div>
                <button className="buy-button">Buy now</button>
            </nav>
            <div className="header__main">
                <div className="header__text-section">
                    <h1 className="header__motto">Life is better in running <span className="orange-text">shoes</span>.</h1>
                    <p className="header__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas leo ultrices</p>
                </div>
                <div></div>
            </div>
        </header>
    );
}

export default Header;