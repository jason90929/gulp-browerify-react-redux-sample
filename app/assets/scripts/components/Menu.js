import React, { PropTypes } from 'react';

const Menu = ({ url = 'javascript:;', text }) => (
    <li>
        <a href={url}>
            {text}
        </a>
    </li>
);

Menu.propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Menu;