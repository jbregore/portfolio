import { Button, Typography, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TextField } from '@mui/material';
import GrainIcon from '@mui/icons-material/Grain';

const Contact = ({Root}) => {
  return (
    <Root style={{
        margin: 'auto',
        // color: "#14265c",
        marginTop: 70,
    }}
        id="contact"
    >

        <Grid container style={{ width: 300 }}>
            <Grid item xs={2} >
                <GrainIcon style={{ fontSize: 50, postion: 'absolute', zIndex: -1, color: '#878787' }} />
            </Grid>
            <Grid item xs={10} >
                <Typography style={{
                    fontSize: 34, 
                    // marginBottom: 50, marginLeft: 30
                }} >
                    Contact me
                </Typography>
            </Grid>
        </Grid>
        <br />

        <Grid container spacing={2} >
            <Grid item sm={4} xs={12}>
                <Typography style={{ fontSize: 30, }}>
                    Lets talk about everything
                </Typography><br />
                <Typography>
                    Don't like forms? send me an email at <u style={{ cursor: 'pointer', color: '#ff4c60' }} >jbbbregore099@gmail.com</u>
                </Typography>
            </Grid>
            <Grid item sm={8} xs={12} >
                <Card sx={{ boxShadow: 3 }}>
                    <CardContent style={{ flexDirection: "column", paddingBottom: 70, }} >

                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12}>
                                <TextField id="standard-basic" label="Your name" variant="standard" style={{ width: '100%' }} />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField id="standard-basic" label="Email address" variant="standard" style={{ width: '100%' }} />
                            </Grid>
                        </Grid>
                        <br />

                        <TextField id="standard-basic" label="Subject" variant="standard" style={{ width: '100%' }} />
                        <br /><br />

                        <TextField id="standard-basic" label="Message" variant="standard" style={{ width: '100%' }}
                            multiline
                            rows={7}
                        /><br />

                        <Button variant="contained" color="primary" style={{
                            marginTop: 10, borderRadius: 30,
                            paddingRight: 30, paddingLeft: 30,
                            float: 'right', backgroundColor: '#ff4c60',
                            color: "#fff"
                        }}>
                            Send message
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>


    </Root>
  )
}

export default Contact