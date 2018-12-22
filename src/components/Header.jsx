import React, { PropTypes, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends Component {

  render() {
    return (
      <header className="header">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className="Typography" component={Link} to="/">
            Shun's Portfolio
          </Typography>
          <Button color="inherit" component={Link} to="/about">ABOUT</Button>
          <Button color="inherit" component={Link} to="/skills">SKILLS</Button>
          <Button color="inherit" component={Link} to="/products">PRODUCTS</Button>
        </Toolbar>
      </AppBar>
      </header>
    );
  }
}

export default withStyles(styles)(Header);