import React from 'react';

const DEFAULT_STATE = {
    isAuthorized: false,
    setIsAuthorized: () => null,

};

const UserContext = React.createContext(DEFAULT_STATE);

class UserProvider extends React.Component {
    state = DEFAULT_STATE;

    setIsAuthorized = (value) => {
        this.setState({ isAuthorized: value })
    };


    render() {
        const { children } = this.props;
        const { isAuthorized} = this.state;
        return(
            <UserContext.Provider value={

                    this.state

            }>
                { children }
            </UserContext.Provider>
        );
    };
}

const UserConsumer = ({ children }) => {
    return (
        <UserContext.Consumer>
            { children }
        </UserContext.Consumer>
    );
};

export { UserProvider, UserConsumer, UserContext };