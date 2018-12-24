import React, { PropTypes, Component } from 'react';
import Typography from '@material-ui/core/Typography';

const About = props =>{
    return (
      <div className="about">
        <div className="section-title">ABOUT</div>
        <div className="section-subtitle">HOBBIES</div>
        <p className="about-content">Webアプリ開発、ゲーム開発、ギター、ピアノ</p>

        <div className="section-subtitle">FAVORITE</div>
        <p className="about-content">家族、プログラミング、ラーメン、焼肉、寿司</p>
      </div>
    )
}

export default About;