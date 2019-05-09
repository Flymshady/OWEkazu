import React from 'react';
import {UserConsumer} from "../context/UserContext";
import {Route} from 'react-router';
import PropTypes from 'prop-types';
import {LandingPage} from "../pages";
import {Route, Redirect} from "react-router-dom";

const ProtectedRoute = ({exact, path, component: Component}) => {
    return (
        <UserConsumer>
            {({isAuthorized})=><Route render={
                (props)=> isAuthorized ? (<Component {...props}/>) : (<Redirect to={{pathname: '/login'}}/>)
            }/>}
        </UserConsumer>

    )
}