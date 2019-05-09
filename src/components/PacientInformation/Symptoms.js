import React from 'react';

const Symptoms = ({ symptoms }) => {
    const allergies = symptoms.allergies || [];
    return (
        <div>
            <div className={'Padding5'}>
                <p className={'PinkUnderline Bold'}>Alergie</p>
                <div className={'Padding5'}>
                    {
                        allergies.map(
                            (allergy) => <p key={allergy}>{allergy}</p>
                        )
                    }
                </div>
            </div>
            <div className={'Padding5'}>
                <p className={'PinkUnderline Bold'}>Popis</p>
                <div className={'Padding5'}>
                    <p>{ symptoms.description }</p>
                </div>
            </div>
            <div className={'Padding5'}>
                <p className={'PinkUnderline Bold'}>Srdeční tep</p>
                <div className={'Padding5'}>
                    <p>{ symptoms.heartBeat }</p>
                </div>
            </div>
            <div className={'Padding5'}>
                <p className={'PinkUnderline Bold'}>Teplota</p>
                <div className={'Padding5'}>
                    <p>{ symptoms.temperature }</p>
                </div>
            </div>
        </div>
    );
};

export default Symptoms;
