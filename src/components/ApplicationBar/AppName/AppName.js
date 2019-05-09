import React from 'react';
import PropTypes from 'prop-types';

const AppName = ({ name }) => {
    return (
        <div className={'Navbar-Heading'}>
            <span>{ name }</span>
        </div>
    )
};

AppName.propTypes = {
    name: PropTypes.string,
};

export default AppName;
