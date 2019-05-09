import React, {Component} from 'react';
import ApplicationBar from './components/ApplicationBar';
import {LandingPage, Patient, Result, Login} from './pages';
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
                        <ProtectedRoute path={'/result/:choice'} component={Result}/>
                    </Switch>
                </BrowserRouter>
            </div>
            </UserProvider>
        );
    }
}

export default App;
