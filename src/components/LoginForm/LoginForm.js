import React from 'react';
import PropTypes from 'prop-types';



const FormLogin =({username, password, handleOnChange, handleOnSubmit}) => {

    return (
      <form onSubmit={handleOnSubmit}>
          <label className={'InputLabel'}>

          Uživatelské jméno:
          <input className={'Input'} type="text" name="username" value={username} onChange={handleOnChange('username') }/>
      </label>
          <label className={'InputLabel'}>
             Heslo:
              <input className={'Input'} type="password" name="password" value={password} onChange={handleOnChange('password')}/>
          </label>
          <button className={'Button'} type={'submit'}>Přihlásit</button>

      </form>
    );
}

FormLogin.propTypes={
    username:PropTypes.string,
    password:PropTypes.string,
    handleOnChange:PropTypes.func,
    handleOnSubmit:PropTypes.func,
}
export default FormLogin;