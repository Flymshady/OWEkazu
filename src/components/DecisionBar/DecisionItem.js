import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const DecisionItem = ({decisionName}) => {
    return (
        <Link
            to={'/result/' + decisionName}
            className={'Button'}
        >
            {decisionName}
        </Link>
    );
};

DecisionItem.propTypes = {
    decisionName: PropTypes.string,
};

export default DecisionItem;
