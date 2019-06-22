import React, {Component} from 'react';
import ApplicationBar from './components/ApplicationBar';
import {LandingPage, Patient, Result, Login, Teacher, Diagnosis} from './pages';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {UserProvider} from './context/UserContext';
import ProtectedRoute from './Routes/ProtectedRoute';


class App extends Component {
    render() {
        return (
            <UserProvider>
            <div className={'Body'}>
                <ApplicationBar/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={'/'} component={LandingPage}/>
                        <Route path={'/login'} component={Login}/>
                        <ProtectedRoute path={'/patient'} component={Patient}/>
                        <ProtectedRoute path={'/teacher'} component={Teacher}/>
                        <ProtectedRoute path={'/result/:choice'} component={Result}/>
                        <ProtectedRoute path={'/diagnosis/:choice'} component={Diagnosis}/>

                        <Route component={Page404} />
                    </Switch>
                </BrowserRouter>
            </div>
            </UserProvider>
        );
    }
}

const Page404 = ({ location }) => (
        <div className={"poopy-browser"}>
            <div className={"close"}></div>
            <div className={"minimize"}></div>
            <div className={"maximize"}></div>
            <div className={"address-bar"}></div>
            <div className={"x"}></div>

            <h2>Nebyla nalezena stranka <code>{location.pathname}</code></h2>
        </div>
);

export default App;
