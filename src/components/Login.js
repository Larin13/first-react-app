import React from 'react';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const logIn = localStorage.getItem('loggedIn')
  React.useEffect(() => {
    if (logIn === 'true') {
      navigate('/profile');
    }
  });

  return (
    <div className='login'>
          <h1>Login Page</h1> 
          <LoginForm />
    </div>
  )
}
export default Login