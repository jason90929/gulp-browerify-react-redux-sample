import React, { PropTypes } from 'react';

const Menu = ({ onClick, active, url = 'javascript:;', text }) => (
    <li className={active ? 'active' : ''}
        onClick={e => {
            e.preventDefault();
            onClick();}}>
        <a href={url}>
            {text}
        </a>
    </li>
);

Menu.propTypes = {
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Menu;