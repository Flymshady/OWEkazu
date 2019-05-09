import React from 'react';
import Time from './Time/Time';
import AppName from './AppName/AppName';
import { appName } from '../../constants';

class ApplicationBar extends React.Component {
    render() {
        return (
            <div className={'Navbar'}>
                <AppName name={ appName } />
                <Time />
            </div>
        );
    }
}

export default ApplicationBar;
