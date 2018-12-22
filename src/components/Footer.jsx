import React, { PropTypes, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import cyan from '@material-ui/core/colors/cyan';

class Footer extends Component {
  render(){
    return (
      <footer className="footer">
      <Fab color={cyan} className="sns-icon fa-2x"><FontAwesomeIcon icon={faTwitter} /></Fab>
      <Fab color='default' className="sns-icon"><FontAwesomeIcon icon={faGithub} /></Fab>
      <Typography variant="overline" className="copyright">
          © 2018 Shun Okada
      </Typography>
      </footer>
    )
  }
}

export default Footer;