import React from 'react';

class NewTemplate extends React.Component{
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
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

            fetch('https://owe-kazu.herokuapp.com/api/rest/admin/template', {
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
             alert("Template byl uspesne vytvoren");
             document.getElementById("diagnozaForm").reset();
    }

    render() {
        return (
        <div className={"mb-3"}>
        <p>Vytvoření template</p>
            <div className={"content"}>

            <form name="templateForm" id="templateForm" onSubmit={this.handleSubmit} className={'login-form'}>

                <div>
                    <input  id="id" name="id" type="text" required={true}/>
                    <label htmlFor="template"> ID  </label>
                </div>

                <div>
                    <input  id="title" name="title" type="text" required={true}/>
                    <label htmlFor="template">  Title  </label>
                </div>
                <div>
                    <input  id="minBonus" name="minBonus" type="text" required={true}/>
                    <label htmlFor="template">  Min Bonus  </label>
                </div>
                <div>
                    <input  id="maxMalus" name="maxMalus" type="text" required={true}/>
                    <label htmlFor="template">  Max Malus </label>
                </div>
                <div>
                    <input  id="diagnosis" name="diagnosis" type="text" required={true}/>
                    <label htmlFor="template">  Diagnosis  </label>
                </div>
                <div>
                    <input  id="maxPrice" name="maxPrice" type="text" required={true}/>
                    <label htmlFor="template"> Max Price  </label>
                </div>
                <div>
                    <input  id="text" name="text" type="text" />
                    <label htmlFor="template">  Text [not required] </label>
                </div>
                <div>
                    <input  className="input2" id="exam" name="exam" type="checkbox" />
                    <label htmlFor="template">  Exam [not required] </label>
                </div>

                <input type="submit" name="" value="Vytvořit"/>
            </form>
            </div>
</div>
        );
    }
};

export default NewTemplate;