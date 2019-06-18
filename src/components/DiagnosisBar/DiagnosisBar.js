import React from 'react';
import {diagnosisUrl} from '../../constants';
import {Link} from "react-router-dom";

class DiagnosisBar extends React.Component {
    state = {
        diagnosis: [],
    };

    componentDidMount() {
        fetch(diagnosisUrl)
            .then((response) => response.json())
            .then((jsonResponse) => {
                this.setState({diagnosis: jsonResponse})
            }).catch((err) => console.error(err));
    }

    render() {
        return (

            <div className={'FlexSpacer Content'}>
                <div >
                    {this.state.diagnosis.map(diagnosisData => (
                        <div><Link
                            to={'/result/' + diagnosisData}
                        >
                            {diagnosisData}
                        </Link></div>
                    ))}
                </div>
            </div>
        );

    }
}

export default DiagnosisBar;