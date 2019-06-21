import React from 'react';
import {patientsUrl} from '../../constants';
import {Link} from "react-router-dom";
import {PersonalData, Symptoms, Medicaments} from '../../components/PacientInformation';


//tady je potreba nejak nalinkovat personalData





function zobrazitSeznamP(){
            var x = document.getElementById("seznam2");
                                       x.style.display = "block";
            }

function nacteniPacienta(){

document.getElementById("dbtn").classList.remove('buttonForm2');
document.getElementById("dbtn").classList.add('buttonForm2Active');
            }

class EditTemplate extends React.Component {
    state = {
        personalData: [],
    };

    componentDidMount() {
        fetch(patientsUrl)
            .then((response) => response.json())
            .then((jsonResponse) => {
                this.setState({personalData: jsonResponse})
            }).catch((err) => console.error(err));
    }

    render() {
        return (

            <div >
             <p><b>Editace diagnózy</b></p>
               <p><button id="upraveniDiagnozy" class="buttonForm" onClick={zobrazitSeznamP}>Zobrazit seznam pacientů</button></p>
            <p> <div id={"seznam2"} class="hidden">
                    {this.state.personalData.map(personalData => (
                        <button id="dbtn" class="buttonForm2" onClick={nacteniPacienta}> {personalData}</button>
                    ))}
            </div>
            </p>
                        <form name="diagnozaEditForm" onSubmit={this.handleSubmit}>
                            <label htmlFor="patient"> Nový název </label>
                            <input  id="definition" name="definition" type="text" required={'true'}/>
                            <button class="buttonForm">Změnit</button>
                        </form>
            </div>
        );

    }
}


export default EditTemplate;