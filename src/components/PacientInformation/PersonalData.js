import React from 'react';

const PersonalData = ({personalData}) => {
    return (
        <div>
            <div className={'FlexSpacer'}>
                <h3 className={'Bold'}>Jméno</h3>
                <p>{personalData.firstName}</p>
            </div>
            <div className={'FlexSpacer'}>
                <h3 className={'Bold'}>Příjmení</h3>
                <p>{personalData.lastName}</p>
            </div>
            <div className={'FlexSpacer'}>
                <h3 className={'Bold'}>Rodné číslo</h3>
                <p>{personalData.birthNumber}</p>
            </div>
            <div className={'FlexSpacer'}>
                <h3 className={'Bold'}>Email</h3>
                <p>{personalData.email}</p>
            </div>
            <div className={'FlexSpacer'}>
                <h3 className={'Bold'}>Telefon</h3>
                <p>{personalData.phone}</p>
            </div>
        </div>
    );
};

export default PersonalData;
