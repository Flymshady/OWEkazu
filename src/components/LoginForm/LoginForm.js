import React from 'react';
import PropTypes from 'prop-types';

const FormLogin =({username, password, handleChange, handleSubmit}) => {
    return (
      <form onSubmit={handleSubmit}>
          <label className={'InputLabel'}>

          Uživatelské jméno:
          <input className={'Input'} type="text" name="username" value={username} onChange={handleChange('username')}/>
      </label>
          <label className={'InputLabel'}>
             Heslo:
              <input className={'Input'} type="password" name="password" value={password} onChange={handleChange('password')}/>
          </label>
          <button className={'Button'} type={'submit'}>Přihlásit</button>

      </form>
    );
}

FormLogin.propTypes={
    username:PropTypes.string,
    password:PropTypes.string,
    handleChange:PropTypes.func,
    handleSubmit:PropTypes.func,
}
export default FormLogin;