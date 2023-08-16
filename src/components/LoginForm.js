import React, { useState } from 'react';
import '../css/loginForm.css';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const logIn = localStorage.getItem('loggedIn')
  const navigate = useNavigate();

  const FormSubmit = (e) => {
    e.preventDefault();
    const user = userName;
    const pass = password;
    
    if (user.toLocaleLowerCase() === 'admin' && pass === '12345') {
      localStorage.setItem('loggedIn', 'true');
      setFormMessage(<p className='login_form_success'>SUCCESS</p>);
      navigate('/profile');
    } else {
      setFormMessage(<p className='login_form_error'>Wrong login or password</p>);
    }
  
    console.log(logIn);
  }

  return (
    <div className='login_form_wrapper'>
      <form id='login_form' onSubmit={FormSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id='username'
          type='text'
          placeholder='Username'
          value={userName}
          onChange={event => setUserName(event.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
        />
        <button type='submit'>SEND</button>
      </form>
      <p className='login_form_message'>{formMessage}</p>
    </div>
  );
}

export default LoginForm;
