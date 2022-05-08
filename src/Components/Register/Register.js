import React, { useEffect, useState } from "react";
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert"
import Social from "../Social/Social";

const theme = createTheme();

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
  const [updateProfile, updating] = useUpdateProfile(auth);
  const [user1] = useAuthState(auth);

  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const name = data.get('firstName')+" "+ data.get('lastName');
      const email= data.get('email');
      const password= data.get('password');
      
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      }
      
      console.log('from func:',user,'useAuth from func',user1);
      
      useEffect(()=>{
        console.log('hello:::',user)
        const url = `https://warehousemanagement123.herokuapp.com/user`;
        if(user){
          fetch (url,{
            method: 'POST',
            headers: {
              'content-type':'application/json'
            },
            body : JSON.stringify(user)
          })
          .then(res => res.json())
          .then(d => {console.log(d)})

          navigate('/home');
        }
      },[user])
  
      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  {
                    error&&<Alert severity="error">{error.message}</Alert>
                  }
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" />}
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to='/login' >
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Social></Social>
          </Container>
        </ThemeProvider>
      );
    }

export default Register;
