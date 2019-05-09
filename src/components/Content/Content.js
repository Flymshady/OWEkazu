import React from 'react';
import { Link } from 'react-router-dom';

class Content extends React.Component {
    render() {
        return (
            <div className={'Content FlexCenter'}>
                <Link to={'/patient'} className={'Button'}>Start</Link>
            </div>
        );
    }
}

export default Content;
