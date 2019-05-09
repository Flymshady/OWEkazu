import React from 'react';

const withLeadingZero = (time) => (time < 10) ? `0${time}` : time;

class Time extends React.Component {
    state = {
        currentTime: new Date(),
    };

    componentDidMount() {
        this.updateTime();
    }

    updateTime = () => {
        setTimeout(() => {
            this.setState({ currentTime: new Date() });
            this.updateTime();
        }, 1000);
    };

    formatTime = (time) => {
        const timeSeconds = time.getSeconds();
        const timeMinutes = time.getMinutes();
        return `${time.getHours()}:${withLeadingZero(timeMinutes)}:${withLeadingZero(timeSeconds)}`;
    };

    render() {
        return (
            <div className={'Navbar-Time'}>
                <span>{ this.formatTime(this.state.currentTime) }</span>
            </div>
        );
    }
}

export default Time;
