import React, { PropTypes, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = props => {
    return (
      <footer className="footer">
      <Fab color='default' className="sns-icon"><FontAwesomeIcon className="fa-2x" icon={faTwitter} /></Fab>
      <Fab color='default' className="sns-icon"><FontAwesomeIcon className="fa-2x" icon={faGithub} /></Fab>
      <Typography variant="overline" className="copyright" color="inherit">
          © 2018 Shun Okada
      </Typography>
      </footer>
    )
}

export default Footer;