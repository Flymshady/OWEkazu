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
        <div>
        <p><b>Vytvoření template</b></p>
            <form name="templateForm" id="templateForm" onSubmit={this.handleSubmit}>
                <label htmlFor="template"> ID  </label>
                <p></p>
                <input  id="id" name="id" type="text" required={true}/>
                <p></p>
                 <p></p>
                                                                      <label htmlFor="template">  Title  </label>
                                                                      <p></p>
                                                                     <input  id="title" name="title" type="text" required={true}/>
                                                                     <p></p>
                                                                      <label htmlFor="template">  Min Bonus  </label>
                                                                      <p></p>
                                                                     <input  id="minBonus" name="minBonus" type="text" required={true}/>
                                                                     <p></p>
                                                                      <label htmlFor="template">  Max Malus </label>
                                                                      <p></p>
                                                                     <input  id="maxMalus" name="maxMalus" type="text" required={true}/>
                                                                     <p></p>
                                                                      <label htmlFor="template">  Diagnosis  </label>
                                                                      <p></p>
                                                                     <input  id="diagnosis" name="diagnosis" type="text" required={true}/>
                                                                     <p></p>
                                                                     <label htmlFor="template"> Max Price  </label>
                                                                     <p></p>
                                                                       <input  id="maxPrice" name="maxPrice" type="text" required={true}/>
                                                                       <p></p>
                                                                        <label htmlFor="template">  Text  </label>
                                                                         <p></p>
                                                                         <input  id="text" name="text" type="text" />
                                                                         <p></p>
                                                                      <p></p>
                                                                      <label htmlFor="template">  Exam  </label>
                                                                        <p></p>
                                                                        <input  className="input2" id="exam" name="exam" type="checkbox" />
                                                                       <p></p>

                <button className="buttonForm">Vytvořit</button>
            </form>
</div>
        );
    }
};

export default NewTemplate;