import React, { PropTypes } from 'react';
import Menu from './Menu';

const MenuList = ({ menus, onMenuClick }) => (
    <aside className="menu">
        <nav>
            <ul>
                {menus.map(menu =>
                    <Menu
                        {...menu}
                        onClick={() => onMenuClick(menu.url)}
                    />
                )}
            </ul>
        </nav>
    </aside>
);

MenuList.propTypes = {
    menus: PropTypes.arrayOf(PropTypes.shape({
        active: PropTypes.bool.isRequired,
        url: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onMenuClick: PropTypes.func.isRequired
};

export default MenuList;