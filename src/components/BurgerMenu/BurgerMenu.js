import React from 'react';
import './BurgerMenu.less';

function BurgerMenu(props) {
    const MenuClassName = (
        `burger-menu ${props.isOpenMenu ? 'burger-menu_opened' : ''}`
    );

    function closeMenu (){
        props.handleCloseMenu()
    }

    return (
        <div className={MenuClassName}>
            <div className="burger-menu__container">
                <button className="burger-menu__close-button" type="button" onClick={closeMenu}></button>
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