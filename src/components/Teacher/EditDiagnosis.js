import React from 'react';
import {editDiagnosisUrl} from '../../constants';
import {Link} from "react-router-dom";

function zobrazitSeznam(){
            var x = document.getElementById("seznam");
                                       x.style.display = "block";
            }

class EditDagnosis extends React.Component {
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

            <div >
             <p><b>Editace diagnózy</b></p>
               <p><button id="upraveniDiagnozy" className="buttonForm" onClick={zobrazitSeznam}>Zobrazit seznam diagnóz</button></p>
            <p> <div id={"seznam"} className="hidden">
                <table className="table table-striped">
                    <tbody>
                    {this.state.diagnosis.map(diagnosisData => (
                        <tr>
                            <td>
                                <Link
                                    className={'Button'}
                                    to={{pathname : '/diagnosis/',
                                        state : {diagnosisData : diagnosisData.id}}}
                                >{diagnosisData.definition}</Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
            </div>
            </p>
            </div>
        );

    }
}

export default EditDagnosis;