import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import { searchStyled } from './styled';
import SearchIcon from '@mui/icons-material/Search';
import { Link as Scroll } from 'react-scroll';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Search, SearchIconWrapper, StyledInputBase, Input, Selected, ButtonSearch } from './styled';

import { Link, useNavigate, useParams } from 'react-router-dom';
import HouseList from '../house';
import HouseApi from '../../api/houseApi';

export const SearchAppBar = () => {

  const [houses, setHouse] = useState([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const [currentList, setCurrentList] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [type, setType] = useState("");
  let params = useParams();
  const getAllData = async () => {
    try {
      await HouseApi.getAll().then(res => {
        setHouse(res.data)
      })
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllData();

  }, []);

  const reFreshList = () => {
    getAllData();
    setCurrentIndex(-1);
    setCurrentList(null);
  }
  const setActiveList = (house, index) => {
    setCurrentIndex(index);
    setCurrentList(house)
  }
  const findByType = () => {
    HouseApi.getHouseByType(type)
      .then(response => {
        setHouse(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const searchHandler = (e) => {
    e.preventDefault();
    navigate('search/' + input)
    alert("gotta submit");
  }


  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  const classes = searchStyled();
  return (
    <div id='buy' className={classes.root}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 0, sm: 0.5, md: 1 }}
      >
        <form onSubmit={searchHandler}>
          <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Location…"
              inputProps={{ 'aria-label': 'search' }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
          </Search>
        </form>

        <FormControl sx={{ m: 1, minWidth: 150 }} >
          <Input id="type">Type</Input>
          <Selected
            labelId="type"
            id="typeSelect"
            value={type}
            onChange={handleChangeType}
            autoWidth
            label="Type"
          >
            <MenuItem value={'all'}>
              <em>All</em>
            </MenuItem>
            <MenuItem value={'buy'}>
              Buy
            </MenuItem>
            <MenuItem value={'rent'}>
              Rent
            </MenuItem>

          </Selected>
        </FormControl>
        <FormControl sx={{ m: 2, minWidth: 150 }} >
          <Input id="demo-simple-select-autowidth-label">Price</Input>
          <Selected
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={type}
            onChange={handleChangeType}
            autoWidth
            label="Age"
          >
            <MenuItem value='All'>
              <em>All</em>
            </MenuItem>
            <MenuItem value={'low-high'}>Low-High</MenuItem>
            <MenuItem value={'high-low'}>High-Low</MenuItem>

          </Selected>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 150 }} >
          <Input id="demo-simple-select-autowidth-label">Property</Input>
          <Selected
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={type}
            onChange={handleChangeType}
            autoWidth
            label="Age"
          >
            <MenuItem value='All'>
              <em>All</em>
            </MenuItem>
            <MenuItem value={10}>Apartment</MenuItem>
            <MenuItem value={21}>Single-family</MenuItem>
          </Selected>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 150 }} >
          <Scroll to="houseList" smooth={true}>
            <ButtonSearch onClick={findByType}>Find</ButtonSearch>
          </Scroll>
        </FormControl>
      </Stack>

      <HouseList listHouse={houses} />
    </div>
  )
}


