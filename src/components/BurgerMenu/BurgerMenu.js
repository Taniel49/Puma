import React from 'react';
import './BurgerMenu.less';

function BurgerMenu({isOpenMenu, handleCloseMenu}) {
    const MenuClassName = (
        `burger-menu ${isOpenMenu ? 'burger-menu_opened' : ''}`
    );

    return (
        <div className={MenuClassName}>
            <div className="burger-menu__container">
                <button className="burger-menu__close-button" type="button" onClick={handleCloseMenu}></button>
                <div className="burger-menu__navigation">
                        <button className="burger-menu__navigation-button">About</button>
                        <button className="burger-menu__navigation-button">Feature</button>
                        <button className="burger-menu__navigation-button">Gallary</button>
                </div>
            </div>
        </div>
    );
}

export default BurgerMenu;