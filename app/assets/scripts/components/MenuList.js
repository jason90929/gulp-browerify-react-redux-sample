import React, { PropTypes } from 'react';
import Menu from './Menu';

const MenuList = ({ menus }) => (
    <aside className="menu">
        <nav>
            <ul>
                {menus.map(menu =>
                    <Menu
                        {...menu}
                    />
                )}
            </ul>
        </nav>
     </aside>
);

MenuList.propTypes = {
    menus: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
};

export default MenuList;