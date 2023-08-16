import React from 'react';
import ProfileInfo from './ProfileInfo';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const logIn = localStorage.getItem('loggedIn')

  const navigate = useNavigate();

  React.useEffect(() => {
    if (logIn !== 'true') {
      navigate('/login');
    }
  });

  return (
    <div className='profile'>
        <h1>My Profile</h1>
        <ProfileInfo />
    </div>
  )
}
export default Profile