import React from 'react';
import {editDiagnosisUrl} from '../../constants';
import {Link} from "react-router-dom";


class EditDiagnosis extends React.Component {
    constructor() {
        super();
        this.state = {
            diagnosis: [],
        };
    }


    componentDidMount() {
        fetch(editDiagnosisUrl)
            .then((response) => response.json())
            .then((jsonResponse) => {
                this.setState({diagnosis: jsonResponse})
            }).catch((err) => console.error(err));
    }

    render() {
        return (

            <div>
                <p><b>Editace diagnózy</b></p>
                <div>
                    <button className="btn btn-primary dropdown-toggle mr-4" type="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Zobrazit seznam diagnóz</button>

                    <div className="dropdown-menu">
                        {this.state.diagnosis.map(diagnosisData => (
                            <Link key={diagnosisData.id}
                                className={'dropdown-item'}
                                to={{pathname : '/diagnosis/',
                                    state : { diagnosisData : diagnosisData.id, diagnosisDefinition : diagnosisData.definition }}}
                            >
                                {diagnosisData.definition}
                            </Link>

                        ))}
                    </div>
                </div>
            </div>
        );

    }
}

export default EditDiagnosis;