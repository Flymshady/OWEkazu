import React from 'react';
import PropTypes from 'prop-types';
import {resultUrl} from '../constants';
import {withRouter} from 'react-router';
import {Link} from "react-router-dom";
import Patient from '../pages/Patient.js';

class Result extends React.Component {
    state = {
        isFetching: true,
        result: {},
        patientId : "",
        examsChecked : []
    };

    static propTypes = {
        location: PropTypes.object,
        match: PropTypes.object,
        history: PropTypes.object,
    };

    componentDidMount() {
        //const {match} = this.props;
        //const {patientId} = this.props.location.diagnosisData;
        //const {patientId} = this.props.location.state.id;
        //const {exams} = this.props.location.state.exam;
        //console.log(patientId);
        /*this.setState({isFetching: true});
        fetch(resultUrl + 'idpacienta', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: 'bubu'
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({result: res, isFetching: false});
            })
            .catch((e) => {
                this.setState({isFetching: false});
                console.log(e);
            });*/
    }

    render() {
        const {result, isFetching} = this.state;
        this.state.patientId = this.props.id;
        console.log(this.state.patientId);
        return (
            <div className={'Content FlexCenter'}>
                {
                    isFetching ? (
                        <h2>Načítám</h2>
                    ) : (
                        <div className={'TextCenter'}>
                            <p>Zvolil jsi {result.choice}</p>
                            <h2>{result.result ? 'Správně' : 'Špatně'}</h2><br/>
                            <Link to={'/patient'}>Pacient<i className="fas fa-caret-right"></i></Link>
                        </div>
                    )
                }
            </div>



        );
    }
}

export default withRouter(Result);
