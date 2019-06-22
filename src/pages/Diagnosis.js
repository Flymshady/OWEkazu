import React from 'react';
import PropTypes from 'prop-types';
import {editDiagnosisUrl} from '../constants';
import {withRouter} from 'react-router';
import {Link} from "react-router-dom";

class Diagnosis extends React.Component {
    state = {
        diagnosis: [],
    };

    static propTypes = {
        location: PropTypes.object,
        match: PropTypes.object,
        history: PropTypes.object,
    };

    componentDidMount() {
        const {match} = this.props;
        fetch(editDiagnosisUrl + '?choice=' + match.params.choice)
            .then((res) => res.json())
            .then((res) => {
                this.setState({diagnosis: res});
            })
            .catch((e) => {
                console.log(e);
            });
    }


    render() {
        return (
            <div className={'Content FlexCenter'}>
                        <div className={'TextCenter'}>
                            <h2>Nazev: ...</h2>
                            <form>
                                <label>
                                    Novy nazev:
                                    <input type="text" name="name" required={"true"}/>
                                </label>
                                <input type="submit" value="Submit" />
                            </form>
                            <button className="btn-danger">DELETE</button>
                            <br/>
                            <Link to={'/teacher'}><i className="fas fa-caret-left mr-2"></i>Back</Link>
                        </div>
            </div>



        );
    }
}

export default withRouter(Diagnosis);