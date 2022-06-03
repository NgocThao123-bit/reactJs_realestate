import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from '../header/Header';
import Listing from '../Listing/PlaceToVisit';
import Link from 'react-scroll/modules/components/Link';

import { Hero } from '../Hero';



const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + './assets/hero20.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           
                <CssBaseline />
                <Header />
                <Hero />
                <Listing />                
                
            
        </div>
    );
}