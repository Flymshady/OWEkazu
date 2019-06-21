import React from 'react';
import {diagnosisUrl} from '../../constants';
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

    render() {
        return (

            <div >
             <p><b>Editace diagnózy</b></p>
               <p><button id="upraveniDiagnozy" class="buttonForm" onClick={zobrazitSeznam}>Zobrazit seznam diagnóz</button></p>
            <p> <div id={"seznam"} class="hidden">
                    {this.state.diagnosis.map(diagnosisData => (
                        <button id="dbtn" class="buttonForm2" onClick={nacteniDiagnozy}> {diagnosisData}</button>
                    ))}
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