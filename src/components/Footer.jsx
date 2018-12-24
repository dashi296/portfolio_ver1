import React, { PropTypes, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const styles = {
  root: {

  },
  twitterButton: {
    color:'#009DF6',
    backgroundColor:'#FFF',
    margin: 5
  },
  githubButton: {
    color:'#000000',
    backgroundColor:'#FFF',
    margin: 5
  },
};

const Footer = props => {
  const { classes } = props; 
    return (
      <footer className="footer">
      <Fab href="https://twitter.com/dashi296" target="_blank" color='default' classes={{root: classes.twitterButton}} className="sns-icon"><FontAwesomeIcon className="fa-2x" icon={faTwitter} /></Fab>
      <Fab href="https://github.com/Unio296" target="_blank" color='default' classes={{root: classes.githubButton}} className="sns-icon"><FontAwesomeIcon className="fa-2x" icon={faGithub} /></Fab>
      <Typography variant="overline" className="copyright" color="inherit">
          © 2018 Shun Okada
      </Typography>
      </footer>
    )
}

export default withStyles(styles)(Footer);