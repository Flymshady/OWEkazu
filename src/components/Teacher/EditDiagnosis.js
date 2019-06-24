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
                <p>Seznam diagnóz</p>
                <div className="table-wrapper-scroll-y my-custom-scrollbar">

                    <table className="table table-bordered table-striped mb-0">
                        <tbody>
                        {this.state.diagnosis.map(diagnosisData => (
                            <tr>
                                <th>
                                    <Link key={diagnosisData.id}
                                          to={{pathname : '/diagnosis/',
                                              state : { diagnosisData : diagnosisData.id, diagnosisDefinition : diagnosisData.definition }}}
                                    >
                                        {diagnosisData.definition}
                                    </Link>
                                </th>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                </div>
            </div>
        );

    }
}

export default EditDiagnosis;