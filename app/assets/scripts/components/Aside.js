import React from 'react';
import MenuLink from '../containers/MenuLink';

const Aside = () => (
    <aside className="menu">
        <nav>
            <ul>
                <MenuLink filter="ABOUT">
                    About
                </MenuLink>
                <MenuLink filter="CONTACT">
                    Contact
                </MenuLink>
                <MenuLink filter="PORTFOLIO">
                    Portfolio
                </MenuLink>
            </ul>
        </nav>
    </aside>
);

export default Aside;