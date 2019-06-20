import React from 'react';
import Section from '../components/Section';
import {Form, NewDiagnosis} from '../components/Teacher';
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
            <div>
               <div className={'Content Grid'}>
                    <Section heading={'Úpravy systému'} body={
                        <Form form={form}/>
                    }/>
                   <NewDiagnosis/>
                </div>


            </div>
        );

    }
}

export default Teacher;
