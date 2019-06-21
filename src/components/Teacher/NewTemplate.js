import React from 'react';

class NewTemplate extends React.Component{
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
        title : "",
        text : "",
        id : "",
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
            //Tady nwm kam to poslat - pak uz by to mohlo fungovat :D
            fetch('https://owe-kazu.herokuapp.com/api/rest/admin/codelist/template', {
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

    render() {
        return (
        <div>
        <p><b>Vytvoření pacienta</b></p>
            <form name="diagnozaForm" onSubmit={this.handleSubmit}>
                <label htmlFor="template"> Title </label>
                 <input  id="title" name="title" type="text" required={'true'}/>
                 <label htmlFor="template"> Text </label>
                  <input  id="text" name="text" type="text" required={'true'}/>
                  <label htmlFor="template"> ID </label>
                <input  id="id" name="id" type="text" required={'true'}/>
                <button class="buttonForm">Vytvořit</button>
            </form>
</div>
        );
    }
};

export default NewTemplate;