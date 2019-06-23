import React from 'react';
import PropTypes from 'prop-types';
import {editDiagnosisUrl} from '../constants';
import {withRouter} from 'react-router';
import {Link} from "react-router-dom";

class Diagnosis extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            diagnosisId: "",
        }
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

        this.state.diagnosisId = this.props.location.state.diagnosisData;
        console.log(this.state.diagnosisId);
        console.log(json);

        fetch(editDiagnosisUrl + this.state.diagnosisId, {
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
    }


    render() {
        return (
            <div className={'Content FlexCenter'}>
                        <div className={'TextCenter'}>
                            <h2>Nazev: ...</h2>
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Novy nazev:
                                    <input type="text" name="definition"id="definition" required={"true"}/>
                                </label>
                                <input type="submit" value="Submit" />
                            </form>
                            <br/>
                            <Link to={'/teacher'}><i className="fas fa-caret-left mr-2"></i>Back</Link>
                        </div>
            </div>



        );
    }
}

export default withRouter(Diagnosis);