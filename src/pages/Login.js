import React from 'react';
import LoginForm from '../components/LoginForm';
import Content from "./LandingPage";
import {loginUrl} from '../constants';
import {UserContext} from '../context';


class Login extends React.Component{

    state={
        username: '',
        password: '',
    };

    handleOnChange = (type) => (event)=> {
        this.setState({[type]: event.target.value} )

    };

    handleOnSubmit =(event)=>{
        const {history} = this.props;
        const {setIsAuthorized} =this.context;
        event.preventDefault();
        fetch(loginUrl, {
            method: 'post',
            body: JSON.stringify(this.state),})
            .then((res)=>res.json())
            .then((data)=>{})
            .catch((e)=>console.log(e));

    }



    render() {
        const {username,password} = this.state;
        return (
            <div className={'Content FlexCenter'}>
            <LoginForm
             password={password}
             username={username}
             handleOnChange={this.handleOnChange}
             handleOnSubmit={this.handleOnSubmit}
            />
            </div>
        );
    }

}
export default Login;