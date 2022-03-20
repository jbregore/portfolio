import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Typed from 'react-typed';

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const Hero = () => {
  return (
    <Box style={{
      width: '100%', height: 750,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      // color: "#14265c"
  }} id="home">
      <img
          alt=""
          style={{ width: 150, height: 150, objectFit: 'cover', borderRadius: '50%' }}
          src="https://firebasestorage.googleapis.com/v0/b/midterm-redux.appspot.com/o/274213862_253831063584385_2282428805788619329_n.jpg?alt=media&token=d4d442a6-8d7f-4abf-88d3-1bc9b34ea282" />


      <Typography style={{ marginTop: 10, fontSize: 34,  }} >
          Jb Regore
      </Typography>
      <Typed
          strings={['An aspiring web developer']}
          typeSpeed={40}
          backSpeed={50}
          loop
      />

      <Box style={{ marginTop: 10, cursor: 'pointer' }}>
          <FacebookIcon style={{ fontSize: 30, marginRight: 7 }} onClick={() => window.open("https://www.facebook.com/johnbenedict.regore.9")} />
          <GitHubIcon style={{ fontSize: 30, marginRight: 7 }} onClick={() => window.open("https://github.com/jbregore")} />
      </Box>

      <Button variant="contained" style={{
          marginTop: 10, borderRadius: 30,
          paddingRight: 30, paddingLeft: 30,
          backgroundColor: '#ff4c60', color: "#fff"
      }}>
          <a href="https://firebasestorage.googleapis.com/v0/b/midterm-redux.appspot.com/o/_Resume%20(1).pdf?alt=media&token=67dd3132-ffa1-46c2-bb67-26562b555ada" target="_blank" rel="noreferrer" style={{
              textDecoration: 'none', color: '#fff'
          }}>View CV</a>

      </Button>

  </Box>
  )
}

export default Hero