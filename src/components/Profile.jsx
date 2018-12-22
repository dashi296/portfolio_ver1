import React, { PropTypes, Component } from 'react';
import profileImg from '../images/profile_img.png';

class Profile extends Component{
  render(){
    return (
      <div className="content">
        <img className="profile-img" src={profileImg} />
        <div className="top-title">
          SHUN OKADA
        </div>
        <p className="job-title"> 
          WEB ENGINEER
        </p>
      </div>
    )
  }
}

export default Profile;