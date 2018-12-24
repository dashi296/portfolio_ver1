import React, { PropTypes, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const styles = {
  root: {

  },
  twitterButton: {
    color:'#009DF6',
    backgroundColor:'#FFF',
    margin: 5
  },
};

const Contact = props =>{
  const { classes } = props;
    return (
      <div className="contact">
        <div className="section-title">CONTACT</div>
        <p>ご連絡は下記TwitterアカウントのDMにお願いいたします</p>
        <Fab href="https://twitter.com/dashi296" target="_blank" color='default' classes={{root: classes.twitterButton}} className="sns-icon">
        <FontAwesomeIcon className="fa-2x" icon={faTwitter} />
        </Fab>
      </div>
    )
}

export default withStyles(styles)(Contact);