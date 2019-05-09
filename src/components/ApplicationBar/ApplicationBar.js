import React from 'react';
import Time from './Time/Time';
import AppName from './AppName/AppName';
import { appName } from '../../constants';
import { UserConsumer } from '../../context/UserContext';

class ApplicationBar extends React.Component {
    render() {
        return (
            <div className={'Navbar'}>
                <UserConsumer>
                {
                    ({username, email})=>(
                        <AppName
                        username={username}
                        name={appName}
                        email={email}
                        />
                    )
                }
                </UserConsumer>
                <Time />
            </div>
        );
    }
}

export default ApplicationBar;
