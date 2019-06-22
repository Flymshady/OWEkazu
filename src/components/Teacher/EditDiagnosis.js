import React from 'react';
import {diagnosisUrl, editDiagnosisUrl} from '../../constants';
import {Link} from "react-router-dom";

function zobrazitSeznam(){
            var x = document.getElementById("seznam");
                                       x.style.display = "block";
            }

function nacteniDiagnozy(){

document.getElementById("dbtn").classList.remove('buttonForm2');
document.getElementById("dbtn").classList.add('buttonForm2Active');
            }


class EditDagnosis extends React.Component {
    state = {
        diagnosis: [],
    };

    componentDidMount() {
        fetch(diagnosisUrl)
            .then((response) => response.json())
            .then((jsonResponse) => {
                this.setState({diagnosis: jsonResponse})
            }).catch((err) => console.error(err));
    }


    removeItem(diagnosisData){
        const diagnosisDataNew = this.state.diagnosis.filter(diagnosis => {
            return diagnosis !== diagnosisData;
        });
        this.setState({
            diagnosis: [...diagnosisDataNew]
        })
    }

    clearAll(){
        this.setState({
            diagnosis: [],
        })
    }

    /*remove(choice) {
        return fetch('https://owe-kazu.herokuapp.com/api/rest/admin/codelist/diagnosis/' + choice, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(res => {
                console.log('Vymazano:', res.message)
                return res
            })
            .catch(err => console.error(err))
    }*/


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
                                <button id="dbtn" className="buttonForm2" onClick={nacteniDiagnozy}> {diagnosisData}</button>
                                <Link
                                    className={'Button'}
                                    to={'/diagnosis/' + diagnosisData}
                                >{diagnosisData}</Link>
                                <details>
                                    <summary>
                                        <p className={"badge"}>Edit</p>
                                    </summary>
                                    <form>
                                        <label>
                                            Nazev:
                                            <input type="text" name="name" required={"true"}/>
                                        </label>
                                        <input type="submit" value="Submit" />
                                    </form>

                                    <button onClick={(e) => this.removeItem(diagnosisData)} type={"button"} className={"btn btn-default"}>Remove</button>

                                </details>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td>
                            <button onClick={(e) => this.clearAll()} className={"btn btn-default btn-sm"}>Clear all</button>
                        </td>
                    </tr>
                    </tfoot>
                </table>
            </div>

            </p>
                        <form name="diagnozaEditForm" onSubmit={this.handleSubmit}>
                            <label htmlFor="diagnosis"> Nový název </label>
                            <input  id="definition" name="definition" type="text" required={'true'}/>
                            <button class="buttonForm">Změnit</button>
                        </form>
            </div>
        );

    }
}


export default EditDagnosis;