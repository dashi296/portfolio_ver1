import React, { PropTypes, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    position:'sticky',
    top:0,
    backgroundColor:'#242830',
    flexGrow: 1,
  },
  logo: {
    fontWeight:1000,
    letterSpacing:3,
    marginRight:30,
    [theme.breakpoints.down('sm')]: {
      fontSize:'1.6rem',
      letterSpacing:2,
    },
  },
  menuButton: {
    fontSize:13,
    letterSpacing:1,
    marginLeft: 3,
    marginRight: 3
  }
});

const Header = props => {
  const { classes } = props; 
    return (
      <AppBar position="static" classes={{root: classes.root}}>
        <Toolbar>
          <Typography variant="h4" classes={{root: classes.logo}}  color="inherit" className="Typography" component={Link} to={process.env.PUBLIC_URL + "/"}>
            SHUN OKADA
          </Typography>
          <Button color="inherit" classes={{root: classes.menuButton}} component={Link} to={process.env.PUBLIC_URL + "/skills"}>SKILLS</Button>
          <Button color="inherit" classes={{root: classes.menuButton}} component={Link} to={process.env.PUBLIC_URL + "/products"}>PRODUCTS</Button>
          <Button color="inherit" classes={{root: classes.menuButton}} component={Link} to={process.env.PUBLIC_URL + "/contact"}>CONTACT</Button>
        </Toolbar>
      </AppBar>
    );
}

export default withStyles(styles)(Header);