import React from 'react';
import {diagnosisUrl} from '../../constants';
import {Link} from "react-router-dom";

class DiagnosisBar extends React.Component {
    state = {
        diagnosis: [],
        exams : [],
        diagnosisName : "",
        patientId : ""
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch(diagnosisUrl)
            .then((response) => response.json())
            .then((jsonResponse) => {
                this.setState({diagnosis: jsonResponse})
            }).catch((err) => console.error(err));
    }

    render() {
        //this.state.exams = this.props.exams;
        //this.state.diagnosisName = this.props.diagnosisName;
        //this.state.patientId = this.props.patientId;
        return (

            <div className={'FlexSpacer Content'}>
                    {this.state.diagnosis.map(diagnosisData => (
                        <Link
                            className={'Button'}
                            to={{pathname : '/result/' + diagnosisData,
                            state : {exams : this.props.exams,
                            diagnosisName : this.props.diagnosisName,
                            patientId : this.props.patientId,
                            diagnosisChose : diagnosisData}}}
                        >
                            {diagnosisData}
                        </Link>
                    ))}
            </div>
        );

    }
}


export default DiagnosisBar;