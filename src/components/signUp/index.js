// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// // function Copyright(props) {
// //   return (
// //     <Typography variant="body2" color="text.secondary" align="center" {...props}>
// //       {'Copyright © '}
// //       <Link color="inherit" href="https://mui.com/">
// //         Your Website
// //       </Link>{' '}
// //       {new Date().getFullYear()}
// //       {'.'}
// //     </Typography>
// //   );
// // }

// const theme = createTheme();

// export default function SignUp() {
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const data = new FormData(event.currentTarget);
//         console.log({
//             email: data.get('email'),
//             password: data.get('password'),
//         });
//     };

//     return (
//         <ThemeProvider theme={theme}
//             sx={{

//                 background:
//                     "linear-gradient(180deg, rgba(169,198,217,1) 15%, rgba(242,167,75,1) 90%)",
//                 boxShadow: ".2px 12px 18px rgba(131,153,167,0.6)",
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//             }}
//         >
//             <Container component="main" maxWidth="xs"
//                 sx={{

//                     background:
//                         "linear-gradient(180deg, rgba(169,198,217,1) 15%, rgba(242,167,75,1) 90%)",
//                     boxShadow: ".2px 12px 18px rgba(131,153,167,0.6)",
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//             >
//                 <CssBaseline />
//                 <Box
//                     sx={{
//                         marginTop: 8,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                         <LockOutlinedIcon />
//                     </Avatar>
//                     <Typography component="h1" variant="h5">
//                         Sign up
//                     </Typography>
//                     <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     autoComplete="given-name"
//                                     name="firstName"
//                                     required
//                                     fullWidth
//                                     id="firstName"
//                                     label="First Name"
//                                     autoFocus
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     required
//                                     fullWidth
//                                     id="lastName"
//                                     label="Last Name"
//                                     name="lastName"
//                                     autoComplete="family-name"
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     required
//                                     fullWidth
//                                     id="email"
//                                     label="Email Address"
//                                     name="email"
//                                     autoComplete="email"
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     required
//                                     fullWidth
//                                     name="password"
//                                     label="Password"
//                                     type="password"
//                                     id="password"
//                                     autoComplete="new-password"
//                                 />
//                             </Grid>
//                             {/* <Grid item xs={12}>
//                                 <FormControlLabel
//                                     control={<Checkbox value="allowExtraEmails" color="primary" />}
//                                     label="I want to receive inspiration, marketing promotions and updates via email."
//                                 />
//                             </Grid> */}
//                         </Grid>
//                         <Button
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             sx={{ mt: 3, mb: 2 }}
//                         >
//                             Sign Up
//                         </Button>
//                         <Grid container justifyContent="flex-end">
//                             <Grid item>
//                                 <Link href="/" variant="body2">
//                                     Already have an account? Sign in
//                                 </Link>
//                             </Grid>
//                         </Grid>
//                     </Box>
//                 </Box>
//                 {/* <Copyright sx={{ mt: 5 }} /> */}
//             </Container>
//         </ThemeProvider>
//     );
// }

import React from 'react';
import Link from '@mui/material/Link';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
const SignUp = () => {
    const paperStyle = { padding: 10, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='User Name' placeholder="Enter your user name" />
                    <TextField fullWidth label='Email' placeholder="Enter your email" />
                    {/* <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl> */}
                    {/* <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" /> */}
                    <TextField fullWidth type="password" label='Password' placeholder="Enter your password" />
                    <TextField fullWidth type="password" label='Confirm Password' placeholder="Confirm your password" />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />

                </form>
                <Grid container justifyContent="center">
                    <Grid item xs={12}>
                        <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Link href="/" variant="body2">
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default SignUp;