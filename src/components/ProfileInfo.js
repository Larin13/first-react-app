import React from 'react';
import photo from '../images/profile.png'
import '../css/profileInfo.css'

class ProfileInfo extends React.Component {
    render() {
        return (
            <div className='profile_info_wrapper'>
                <img className='profile_info_img' src={photo} alt='User'/>
                <div className='profile_info'>
                    <p className='profile_info_text'>Name: John</p>
                    <p className='profile_info_text'>Age: 21</p>
                </div>
            </div>
          )
    }
  }
  export default ProfileInfo