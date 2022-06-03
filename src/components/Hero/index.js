import React, { useEffect, useState } from 'react';

import { CssBaseline } from '@material-ui/core';
import { useStyles } from './style';
import { Link as Scroll } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ResponsiveAppBar from '../Navbar/index';
export const Hero = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
      <div className={classes.root}>
        {/* <CssBaseline />
        <ResponsiveAppBar /> */}
        <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedheight={50}
            >
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Welcome to <br />
                        My<span className={classes.colorText}>Island.</span>
                    </h1>
                    <Scroll to="place-to-visit" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
      </div>
    );
}
