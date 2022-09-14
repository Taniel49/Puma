import React from 'react';
import './Header.less';
import './__slider-container/header__slider-container.less';
import {CustomSlider} from '../../vendor/Slider';
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import logo from '../../images/puma_logo.svg';
import menu from '../../images/menu.svg';

function Header() {
    const [isOpenMenu, setIsOpenMenu] = React.useState(false);

    function handleOpenMenu() {
        setIsOpenMenu(true);
    }

    function handleCloseMenu() {
        setIsOpenMenu(false);
    }

    return (
        <header className="header">
            <div className="header__container">
                <nav className="menu">
                    <div className="menu__flex-container">
                        <img className="logo" src={logo} alt='Puma logo'/>
                        <div className="menu__navigation">
                            <button className="menu__navigation-button">About</button>
                            <button className="menu__navigation-button">Feature</button>
                            <button className="menu__navigation-button">Gallary</button>
                        </div>
                    </div>
                    <button className="buy-button">Buy now</button>
                    <button className="menu__burger-button" onClick={handleOpenMenu}><img src={menu} alt="Меню"/>
                    </button>
                </nav>
                <div className="header__main">
                    <div className="header__text-section">
                        <h1 className="header__motto">Life is better in running <span
                            className="header_orange-text">shoes</span>.</h1>
                        <p className="header__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas leo
                            ultrices</p>
                    </div>
                    <div className="header__slider-container">
                        <CustomSlider customArrowNextClassList={'custom-arrow-header_next'}
                                      customArrowPrevClassList={'custom-arrow_hidden'}/>
                    </div>
                </div>
            </div>
            <BurgerMenu isOpenMenu={isOpenMenu}
                        handleCloseMenu={handleCloseMenu}/>
        </header>
    );
}

export default Header;