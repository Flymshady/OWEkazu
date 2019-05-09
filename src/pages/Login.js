import React from 'react';
import LoginForm from '../components/LoginForm';
import {loginUrl} from '../constants';
import {UserContext} from '../context/UserContext';
import {withRouter} from 'react-router';


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
        const {setIsAuthorized, setUser} =this.context;
        event.preventDefault();
        fetch(loginUrl, {
            method: 'post',
            headers: {"Content-type": "application/json",},
            body: JSON.stringify(this.state),})
            .then((res)=>res.json())
            .then((userInfo)=>{setIsAuthorized(true);
            setUser(userInfo);
            history.push('/');
            })
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
Login.contextType=UserContext;
export default withRouter(Login)