import React from 'react';
import {editDiagnosisUrl} from '../../constants';
import {Link} from "react-router-dom";

/*function zobrazitSeznam(){
            var x = document.getElementById("seznam");
                                       x.style.display = "block";
            }*/

class EditDiagnosis extends React.Component {
    state = {
        diagnosis: [],
    };

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
                            <Link
                                className={'dropdown-item'}
                                to={{pathname : '/diagnosis/',
                                    state : { diagnosisData : diagnosisData.id }}}
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