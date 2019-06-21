import React from 'react';
import Section from '../components/Section';
import {Form, NewDiagnosis, NewTemplate, EditDiagnosis} from '../components/Teacher';
import {teacherUrl} from '../constants';

class Teacher extends React.Component {
    state = {
        teacher: {},
    };
componentDidMount() {
        fetch(teacherUrl)
            .then((response) => response.json())
            .then((jsonResponse) => {
                this.setState({teacher: jsonResponse})
            }).catch((err) => console.error(err));
    }


    render() {
        const {teacher} = this.state;
const form = teacher.properties || [];

            return (
            <div class="teacher">
            <label class="Nadpis">Úpravy systému</label>
               <div className={'Content Grid'}>

                    <NewTemplate/>

                </div>
                <div className={'Content Grid'}>
                                   <NewDiagnosis/>
                </div>
                 <div className={'Content Grid'}>
                  <EditDiagnosis/>
                 </div>


            </div>
        );

    }
}

export default Teacher;
