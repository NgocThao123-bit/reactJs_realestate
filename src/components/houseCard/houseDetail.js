import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ButtonSearch, useStyles } from './styled';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import itemData from '../Data/houseDetail';

import { Typography } from '@material-ui/core';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BedIcon from '@mui/icons-material/Bed';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Stack } from '@mui/material';

import { Map } from '../Buy/map';
import { useParams } from 'react-router-dom';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'flex',
  color: theme.palette.text.secondary,
}));

function HouseDetail() {
  const classes = useStyles();

  const [house, setHouses] = useState([]);
  
  let params = useParams();
//  const getData = async () => {
//       await axios.get(apiCLient + getHouseById + 7)
//         .then(res => {
//           const myData = res.data;
//           setHouses(myData)
//           console.log(house)
//         })
//         .catch(err => {
//           console.log(err)
//         });
//     }

  useEffect(() => {
  //  getData()
    // getData(params.type)
  }, 
  // [params.type]
  )

  
  return (
    <Box sx={{ width: '100%' }} >
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 6, sm: 6, md: 12 }}>
        <Grid item xs={6} sm={6} md={6} >
          <ImageList
            sx={{
              minWidth: 200,
              height: '79vh',
              // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
              transform: 'translateZ(0)',
            }}
            rowHeight={200}
            gap={1}
          >
            {itemData.map((item) => {
              const cols = item.featured ? 2 : 1;
              const rows = item.featured ? 2 : 1;
              return (
                <ImageListItem key={item.img} cols={cols} rows={rows}>
                  <img
                    {...srcset(item.img, 250, 200, rows, cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Item >
            {house.map((h) => (
              <Grid key={h.houseID} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                  <Item>
                    <Typography >
                      <HomeOutlinedIcon spacing={1} fontSize='midium' className={classes.icon} />{h.type}
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="h1"
                    // className={classes.price}
                    >
                      <AttachMoneyIcon
                        fontSize='large'
                      // className={classes.icon} 
                      />
                      {h.price}
                    </Typography>


                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <Typography
                      // gutterBottom
                      variant="h5"
                      component="h2"
                    // className={classes.beds}
                    >
                      <Stack direction="row" spacing={1}>
                        <BedIcon fontSize='midium'
                        // className={classes.icon} 
                        /> {h.beds}
                        <BathtubOutlinedIcon fontSize='midium'
                        // className={classes.icon} 
                        /> {h.baths}
                        <SquareFootOutlinedIcon fontSize='midium'
                        // className={classes.icon} 
                        /> {h.sqft}
                      </Stack>
                    </Typography>

                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    
                    <Typography
                      variant="body2"
                      component="p"
                    // className={classes.desc}
                    >
                      <span className={classes.spans}>Location:</span> 
                      {h.location}
                    </Typography>

                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    <span className={classes.spans}>Overview:</span>                    
                    {h.discription}
                    </Item>
                </Grid>
              </Grid>
            ))}

            {/* <HouseCard houses={house} checked={checked}/> */}

          </Item>
          <Grid item xs={12}>
            <Item><Map /></Item>
          </Grid>
          

        </Grid>

      </Grid>
    </Box>


  )
}

export default HouseDetail