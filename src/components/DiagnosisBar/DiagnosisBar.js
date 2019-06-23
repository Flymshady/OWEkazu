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
            <div>
                <div>
                    <button className="btn btn-primary dropdown-toggle mr-4" type="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Vybrat diagnózu</button>

                    <div className="dropdown-menu">
                        {this.state.diagnosis.map(diagnosisData => (
                            <Link
                                className={'dropdown-item'}
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
                </div>
            </div>
        );

    }
}


export default DiagnosisBar;