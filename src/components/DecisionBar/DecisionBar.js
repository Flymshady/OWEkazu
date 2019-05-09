import React from 'react';
import DecisionItem from './DecisionItem';
import buttonNames from './constants/button';

const DecisionBar = () => {
    return (
        <div className={'FlexSpacer Padding10'}>
            {
                buttonNames.map(
                    (name) => <DecisionItem key={name} decisionName={name}/>
                )
            }
        </div>
    );
};

export default DecisionBar;
