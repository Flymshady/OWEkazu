import React from 'react';
import PropTypes from 'prop-types';
import {resultUrl} from '../constants';
import {withRouter} from 'react-router';
import {Link} from "react-router-dom";

class Result extends React.Component {
    state = {
        isFetching: true,
        result: {},
        patientId : "",
        examsChecked : [],
        diagnosisName : "",
        diagnosisChose : ""
    };

    constructor(props) {
        super(props);
    }

    static propTypes = {
        location: PropTypes.object,
        match: PropTypes.object,
        history: PropTypes.object,
    };

    componentDidMount() {
        this.state.examsChecked = this.props.location.state.exams;
        this.state.patientId = this.props.location.state.patientId;
        this.state.diagnosisName = this.props.location.state.diagnosisName;
        this.state.diagnosisChose = this.props.location.state.diagnosisChose;
        this.setState({isFetching: true});
        console.log(JSON.stringify({diagnosis : this.state.diagnosisName, exams : this.state.examsChecked}));

        fetch(resultUrl + this.state.patientId, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({diagnosis : this.state.diagnosisName, exams : this.state.examsChecked})
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({result: res, isFetching: false});
            })
            .catch((e) => {
                this.setState({isFetching: false});
                console.log(e);
            });
    }

    render() {
        const {result, isFetching} = this.state;
        return (
            <div className={'Content FlexCenter'}>
                {
                    isFetching ? (
                        <h2>Načítám</h2>
                    ) : (
                        <div className={'TextCenter'}>
                            <p>Zvolil jsi {this.state.diagnosisChose}</p>
                            <p>Správně je {this.state.diagnosisName}</p>
                            <h2>{this.state.diagnosisName===this.state.diagnosisChose ? 'Správně' : 'Špatně'}</h2><br/>
                            <Link to={'/patient'}>Pacient<i className="fas fa-caret-right"></i></Link>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default withRouter(Result);
