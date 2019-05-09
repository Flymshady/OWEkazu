import React from 'react';

const SectionItem = ({ label, value }) => (
    <div>
        <span>{ label }</span>
        <span>: </span>
        <span>{ value }</span>
    </div>
);

export default SectionItem;
