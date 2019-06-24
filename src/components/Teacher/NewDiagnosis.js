import React from 'react';

class NewDiagnosis extends React.Component{
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            definition : "",
        }
    }

    // odeslání dat
    handleSubmit(event) {
        event.preventDefault();
            var FormData = require('form-data');
            var fs = require('fs');
            const data = new FormData(event.target);

            var object = {};
            data.forEach(function (value, key) {
                object[key] = value;
            });
            var json = JSON.stringify(object);

            fetch('https://owe-kazu.herokuapp.com/api/rest/admin/codelist/diagnosis', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: json
            }).then(function (response) {
                return response.text();
            }).then(function (text) {
                console.log(text)
            }).catch(function (error) {
                console.error(error)
            });
            alert("Diagnoza byla uspesne vytvorena");
            document.getElementById("diagnozaForm").reset();

    }

    render() {
        return (
        <div className={"mb-3"}>
        <p>Vytvoření diagnózy</p>
            <div className={"content"}>
                <form name="diagnozaForm" id="diagnozaForm" onSubmit={this.handleSubmit} className={'login-form'}>
                    <div>
                        <input  id="definition" name="definition" type="text" required={true}/>
                        <label htmlFor="diagnosis"> Název </label>
                    </div>
                    <input type="submit" name="" value="Vytvořit"/>
                </form>
            </div>
</div>
        );
    }
};

export default NewDiagnosis;