import React, { PropTypes, Component } from 'react';
import profileImg from '../images/profile_img.png';

class Profile extends Component{
  render(){
    return (
      <div className="profile">
        <img className="profile-img" src={profileImg} />
        <div className="top-title">SHUN OKADA</div>
        <div className="job-title"> 
          WEB & UNITY ENGINEER
        </div>
      </div>
    )
  }
}

export default Profile;