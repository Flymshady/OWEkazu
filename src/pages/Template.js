import React from 'react';
import PropTypes from 'prop-types';
import {templateUrl} from '../constants';
import {withRouter} from 'react-router';
import {Link} from "react-router-dom";

class Template extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.routeChange = this.routeChange.bind(this);
        this.state = {
            templateId: "",
        }
    }
     routeChange() {

      }

    static propTypes = {
        location: PropTypes.object,
        match: PropTypes.object,
        history: PropTypes.object,
    };

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

        this.state.templateId = this.props.location.state.templateData;
        console.log(this.state.templateId);
        console.log(json);

        fetch(templateUrl + this.state.templateId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            },
            body: json
        }).then(function (response) {
            return response.text();
        }).then(function (text) {
            console.log(text)
        }).catch(function (error) {
            console.error(error)
        });
          alert("Template byl uspesne editovan")
        let path = '/teacher';
                this.props.history.push(path);
    }

    render() {
        return (
            <div className={'Content FlexCenter'}>
                        <div className={'TextCenter'}>

                            <form onSubmit={this.handleSubmit}>
                               <label htmlFor="template">  Template ID: {this.props.location.state.templateData}  </label>
                                                    <p></p>
                                                     <label htmlFor="template">  Title  </label>
                                                     <p></p>
                                                    <input  id="title" name="title" type="text" required={'true'}/>
                                                    <p></p>
                                                     <label htmlFor="template">  Min Bonus  </label>
                                                     <p></p>
                                                    <input  id="minBonus" name="minBonus" type="text" required={'true'}/>
                                                    <p></p>
                                                     <label htmlFor="template">  Max Malus </label>
                                                     <p></p>
                                                    <input  id="maxMalus" name="maxMalus" type="text" required={'true'}/>
                                                    <p></p>
                                                     <label htmlFor="template">  Diagnosis  </label>
                                                     <p></p>
                                                    <input  id="diagnosis" name="diagnosis" type="text" required={'true'}/>
                                                    <p></p>
                                                    <label htmlFor="template"> Max Price  </label>
                                                    <p></p>
                                                      <input  id="maxPrice" name="maxPrice" type="text" required={'true'}/>
                                                      <p></p>
                                                       <label htmlFor="template">  Text  </label>
                                                        <p></p>
                                                        <input  id="text" name="text" type="text" />
                                                        <p></p>
                                                     <p></p>
                                                     <label htmlFor="template">  Exam  </label>
                                                       <input  class="input" id="exam" name="exam" type="checkbox" />
                                                      <p></p>

                                <input onClick={this.routeChange} type="submit" value="Submit" />
                            </form>
                            <br/>
                            <Link to={'/teacher'}><i className="fas fa-caret-left mr-2"></i>Back</Link>
                        </div>
            </div>



        );
    }
}

export default withRouter(Template);