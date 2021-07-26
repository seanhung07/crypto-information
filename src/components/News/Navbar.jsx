import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/logo.png';
// import ModalDialog from './ModalDialog';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" style={{background: 'linear-gradient(45deg, rgba(117,61,111,1) 1%, rgba(62,62,69,1) 69%)'}}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
        >
          <div className="head">
              <img src={logo} alt="logo"  width="35" height="35"/>
          </div>
        </IconButton>
        <Typography variant="h5" className={classes.title} style={{ marginTop: 20 , marginBottom:10}}>
          Crypto Information
        </Typography>
        <Button component={Link} to="/data">Long/Short</Button>
        <Button component={Link} to="/order">Order Book</Button>
        <Button component={Link} to="/draw">TradingView</Button>
      </Toolbar>
      {/* <ModalDialog open={open} handleClose={handleClose} /> */}
    </AppBar>
  );
};

export default Navbar;