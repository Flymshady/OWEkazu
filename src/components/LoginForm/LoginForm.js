import React from 'react';
import PropTypes from 'prop-types';



const FormLogin =({username, password, handleOnChange, handleOnSubmit}) => {
    return (
        <div>
            <div className="content">
                <form onSubmit={handleOnSubmit} className={'login-form'}>
                    <h3>Pro přístup do systému je nutné přihlásit se</h3>
                    <div>
                        <input type="text" name="username"  value={username} onChange={handleOnChange('username')} required={'true'}/>
                            <label>Uživatelské jméno</label>
                    </div>
                    <div>
                        <input type="password" name="password" value={password} onChange={handleOnChange('password')} required={'true'}/>
                            <label>Heslo</label>
                    </div>
                    <input type="submit" name="" value="Submit"/>
                </form>
            </div>
        </div>
    );
}

FormLogin.propTypes={
    username:PropTypes.string,
    password:PropTypes.string,
    handleOnChange:PropTypes.func,
    handleOnSubmit:PropTypes.func,
}
export default FormLogin;