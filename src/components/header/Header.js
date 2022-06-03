import React, { useEffect, useState } from 'react';

import {
  AppBar, IconButton, Toolbar,
  Collapse, Button,
  MenuItem
} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import { useStyles } from './style';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';

import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
const pages = ['Buy', 'Rent', 'Sell', 'Contact'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


export default function Header() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <Typography
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
              <h1 className={classes.appbarTitle}>
                <MapsHomeWorkOutlinedIcon className={classes.colorText} fontSize='large' />
                Royal<span className={classes.colorText}>Realty</span>
              </h1>
            </Link>

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={handleOpenNavMenu}>
              <SortIcon className={classes.icon} />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>

                  <Typography textAlign="center">
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/pages/${page}`}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <h1 className={classes.appbarTitle}>
              <MapsHomeWorkOutlinedIcon className={classes.colorText} fontSize='large' />
              Royal<span className={classes.colorText}>Realty</span>
            </h1>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className={classes.box}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style={{ textDecoration: 'none', color: 'white' }} to={`/pages/${page}`}>{page}</Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedSize={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            Royal<span className={classes.colorText}>Realty.</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse> */}

    </div>
  );
}
