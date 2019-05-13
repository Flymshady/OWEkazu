import React from 'react';
import Section from '../components/Section';
import {patientsUrl} from '../constants';
import {PersonalData, Symptoms, Medicaments} from '../components/PacientInformation';
import DecisionBar from '../components/DecisionBar';

class Patient extends React.Component {
    state = {
        patient: {},
    };

    componentDidMount() {
        fetch(patientsUrl)
            .then((response) => response.json())
            .then((jsonResponse) => {
                this.setState({patient: jsonResponse})
            }).catch((err) => console.error(err));
    }

    render() {
        const {patient} = this.state;
        const personalData = patient.properties || [];
        return (
            <div>
                <div className={'Content Grid'}>
                    <Section heading={'Osobní údaje'} body={
                        <PersonalData personalData={personalData}/>
                    }/>
                </div>
                <DecisionBar />
            </div>
        );
    }
}

export default Patient;
