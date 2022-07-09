

import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import mainLogo from '../logo.jpg';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import './style.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    if(data.get('email') == "ocbcbank@ocbc.com") {
      navigate("/bankpage");
    }
    if(data.get('email') == "john@gmail.com") {
      navigate("/userpage");
    }
  };

  return (
    <div>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img className="photo" src={mainLogo}/>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            <Grid 
            container 
            alignItems="center"
            direction="column">
              <Grid item xs>
              </Grid>
              <Grid item xs>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>

    </div>
  );
  
}