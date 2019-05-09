import React from 'react';
import PropTypes from 'prop-types';

const Medicaments = ({ medicaments }) => {
    return medicaments.map(
        (value) => <p className={'PinkUnderline'} key={value}>{value}</p>
    );
};

Medicaments.propTypes = {
    medicaments: PropTypes.arrayOf(PropTypes.string),
};

export default Medicaments;
