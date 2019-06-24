import React from 'react';
import {editTemplateUrl} from '../../constants';
import {Link} from "react-router-dom";


class EditTemplate extends React.Component {
    state = {
        template: [],
    };

    componentDidMount() {
        fetch(editTemplateUrl)
            .then((response) => response.json())
            .then((jsonResponse) => {
                this.setState({template: jsonResponse})
            }).catch((err) => console.error(err));
    }

    render() {
        return (

            <div>
                <p><b>Editace templatu</b></p>
                <div>
                    <button className="btn btn-primary dropdown-toggle mr-4" type="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Zobrazit seznam templatů</button>

                    <div className="dropdown-menu">

                        {this.state.template.map(templateData => (
                            <Link
                                className={'dropdown-item'}
                                to={{pathname : '/template/',
                                    state : { templateData : templateData.id }}}
                            >
                                {templateData.id}
                            </Link>


                        ))}
                    </div>
                </div>
            </div>
        );

    }
}

export default EditTemplate;