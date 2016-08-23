// import React, { PropTypes } from 'react';
//
// const Menu = ({ active, onClick, url = 'javascript:;', text }) => {
//     return (
//         <li className={active ? 'active' : ''} onClick={e => {
//             e.preventDefault();
//             onClick();
//         }}>
//             <a href={url}>
//                 {text}
//             </a>
//         </li>
//     );
// };
//
// Menu.propTypes = {
//     active: PropTypes.bool.isRequired,
//     onClick: PropTypes.func.isRequired,
//     url: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired
// };
//
// export default Menu;

import React from 'react';
import MenuLink from '../containers/MenuLink';

const Aside = () => (
    <aside className="menu">
        <nav>
            <ul>
                <MenuLink filter="PAGE_1">
                    Page 1
                </MenuLink>
                <MenuLink filter="PAGE_2">
                    Page 2
                </MenuLink>
                <MenuLink filter="PAGE_3">
                    Page 3
                </MenuLink>
            </ul>
        </nav>
    </aside>
);

export default Aside;