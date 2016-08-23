import React, { PropTypes } from 'react';

const Menu = ({ onClick, active, url = 'javascript:;', text }) => {
    if (active) {
        return <li>{text}</li>
    }

    return (
        <li onClick={e => {
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