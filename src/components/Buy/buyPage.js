import React, { useState, useEffect } from 'react';
import { SearchAppBar } from './search';
import Header from '../header/Header';
import HouseList from '../house';
import { useStyles } from './styled';
import { CssBaseline } from '@material-ui/core';
import { Routes, Route }
  from 'react-router-dom';
// import ReactMapGL from 'react-map-gl';

// import 'mapbox-gl/dist/mapbox-gl.css';

export const BuyPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header className={classes.head}></Header>
      <SearchAppBar />
      
      {/* <Routes>
        <Route path='pages/' element={<Home />} />
        <Route path=':type' element={<HouseList />} />
        <Route path=':' element={<Sell />} />

      </Routes> */}

    </div>
  )
}
