import React from 'react';

class NewDiagnosis extends React.Component{
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            definition : "",
            definitionError : ""
        }
    }

    // validační metoda
    validate = () => {
        let definitionError = "jméno nemůže být prázdné";

        if(!this.state.definition) {
            definitionError = "jméno nemůže být prázdné";
        }

        if(definitionError) {
            this.setState({definitionError})
            return false;
        }
        return true;
    }

    // odeslání dat
    handleSubmit(event) {
        event.preventDefault();

        const isValid = this.validate();

        if(isValid) {

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
        }
    }

    render() {
        return (
            <form name="diagnozaForm" onSubmit={this.handleSubmit}>
                <label htmlFor="diagnosis">Diagnoza</label>
                <input value = {this.state.definition} id="definition" name="definition" type="text" />

                <button>Send data!</button>

                <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.definitionError}
                </div>
            </form>

        );
    }
};

export default NewDiagnosis;