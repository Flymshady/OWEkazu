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
                <p></p>
                <div className={'Content Grid'}>
                  <NewDiagnosis/>
                </div>
                <p></p>
                 <div className={'Content Grid'}>
                  <EditDiagnosis/>
                 </div>
                 <p></p>
                  <div className={'Content Grid'}>
                   <NewTemplate/>
                   </div>
                <p></p>
                 <div className={'Content Grid'}>
                  <EditTemplate/>
                 </div>


            </div>
        );

    }
}

export default Teacher;
