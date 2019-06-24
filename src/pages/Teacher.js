import React from 'react';
import { NewDiagnosis, NewTemplate, EditDiagnosis, EditTemplate} from '../components/Teacher';

class Teacher extends React.Component {
    state = {
    };

    render() {

            return (
            <div class="teacher">
            <label class="Nadpis">Úpravy systému</label>
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
