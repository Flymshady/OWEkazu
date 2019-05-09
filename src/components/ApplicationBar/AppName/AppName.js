import React from 'react';
import PropTypes from 'prop-types';

const AppName = ({ email, username, name }) => {
    return (
        <div className={'Navbar-Heading'}>
            <span>{ name }</span>
            <span>-</span>
            {
                username ? (
                    <span>Aktuální Uživatel: {username}</span>
                ) : (
                    <span>Nepřihlášen</span>
                )
            }
        </div>
    )
};

AppName.propTypes = {
    name: PropTypes.string,
};

export default AppName;
