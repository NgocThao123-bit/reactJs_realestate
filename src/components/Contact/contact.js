import React, { useState } from 'react'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import Header from '../header/Header';
import { useStyles } from './styled';
import { CssBaseline } from '@mui/material';

export const Contact = () => {

  // const initalContact = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   message: ""
  // };
  // const [contact, setContact] = useState(initalContact);
  // const [submitted, setSubmitted] = useState(false);

  const classes = useStyles();

  // const getData = async (full) => {
  //   try {
  //     const res = await axios.post(apiCLient)
  //     setFull(res.data)

  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   console.log(params.location)
  //   getData(params.location);

  // }, [params.type]);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />

      <Grid style={{ marginTop: 50, color: 'black' }}>
        <Card className={classes.card} style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent className={classes.card_content}>
            <Typography gutterBottom variant="h3" align="center">
              Contact us
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button className={classes.button} type="submit" variant="contained" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>

  )
}
