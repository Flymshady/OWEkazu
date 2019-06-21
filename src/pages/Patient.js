import React from 'react';
import Section from '../components/Section';
import Result from '../pages/Result';
import {patientsUrl} from '../constants';
import {PersonalData, Symptoms, Medicaments} from '../components/PacientInformation';
import DecisionBar from '../components/DecisionBar';
import DiagnosisBar from '../components/DiagnosisBar';
import {Link} from "react-router-dom";

class Patient extends React.Component {
    state = {
        patient: {},
        personalData : [],
        examsWithText: [],
        examsWithImage : []
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

        this.state.personalData = personalData.filter(function (e) {
            return e.exam == null;
        });

        this.state.examsWithText = personalData.filter(function (e) {
            return e.exam == true &&
                e.imageGroup == null;
        });

        this.state.examsWithImage = personalData.filter(function (e) {
            return e.exam == true &&
                e.imageGroup != null;
        });

            return (
            <div>
                <div className={'Content Grid'}>
                    <Section heading={'Osobní údaje'} body={
                        <PersonalData personalDataToSent={this.state.personalData} examsWithTextToSent={this.state.examsWithText}
                                      examsWithImageToSent={this.state.examsWithImage}/>
                    }/>
                </div>
                <DiagnosisBar/>
                <DecisionBar />
            </div>
        );

    }
}

export default Patient;
