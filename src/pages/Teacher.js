import React from 'react';
import { NewDiagnosis, NewTemplate, EditDiagnosis, EditTemplate} from '../components/Teacher';

class Teacher extends React.Component {
    constructor(){
        super();
        this.state = {
        };

    }


    render() {

            return (
            <div className="teacher">
            <label className="Nadpis">Úpravy systému</label>
                <div className="col-xs-12" id={"tabs"}>
                    <nav>
                        <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
                               role="tab" aria-controls="nav-home" aria-selected="true">Template</a>
                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
                               role="tab" aria-controls="nav-profile" aria-selected="false">Diagnoza</a>
                        </div>
                    </nav>
                    <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                             aria-labelledby="nav-home-tab">

                            <NewTemplate/>
                            <EditTemplate/>

                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                             aria-labelledby="nav-profile-tab">

                            <NewDiagnosis/>
                            <EditDiagnosis/>

                        </div>
                    </div>

                </div>



            </div>
        );

    }
}

export default Teacher;
