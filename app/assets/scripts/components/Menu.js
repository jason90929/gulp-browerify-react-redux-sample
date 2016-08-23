import React, { PropTypes } from 'react';

const Menu = ({ active, onClick, url = 'javascript:;', text }) => {
    return (
        <li className={active ? 'active' : ''} onClick={e => {
            e.preventDefault();
            onClick();
        }}>
            <a href={url}>
                {text}
            </a>
        </li>
    );
};

Menu.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Menu;