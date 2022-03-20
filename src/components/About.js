import { Box, Typography, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import GrainIcon from '@mui/icons-material/Grain';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


const About = ({Root}) => {

    return (
        <Root style={{ margin: 'auto', }} id="about">
            <Grid container style={{ width: 300 }}>
                <Grid item xs={2} >
                    <GrainIcon style={{ fontSize: 50, postion: 'absolute', zIndex: -1, color: '#878787' }} />
                </Grid>
                <Grid item xs={10} >
                    <Typography style={{
                        fontSize: 34, 
                    }} >
                        About me
                    </Typography>
                </Grid>
            </Grid>
            <br />

            <Grid container spacing={2} >
                <Grid item sm={4} xs={12} style={{ textAlign: 'center' }}>
                    <img
                        alt=""
                        style={{ width: 150, height: 150, objectFit: 'cover', borderRadius: '50%' }}
                        src="https://firebasestorage.googleapis.com/v0/b/midterm-redux.appspot.com/o/274213862_253831063584385_2282428805788619329_n.jpg?alt=media&token=d4d442a6-8d7f-4abf-88d3-1bc9b34ea282" />
                </Grid>
                <Grid item sm={8} xs={12}>

                    <Card sx={{
                        //  backgroundColor: '#f7f7f7'
                        boxShadow: 3
                    }}>
                        <CardContent>
                            <Typography variant="body1" >
                                I am John Benedict Regore, a motivated web developer from San Luis Pampanga, Philippines.
                                I have experience and understanding in web design, building and customization dynamic sites,
                                Relevant skills include Problem solving, Database, Debugging, and more.
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>

            <Grid container spacing={2} mt={4} >
                <Grid item sm={4} xs={12} >
                    <Card sx={{ display: 'flex', boxShadow: 3 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5" style={{ fontWeight: 'bold', }}>
                                    <LocalFireDepartmentIcon style={{ fontSize: 30, color: '#ff4c60', }} /> 24
                                </Typography>
                                <Typography variant="subtitle1" color="text.primary" component="div">
                                    Projects completed
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Card sx={{ display: 'flex', boxShadow: 3 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5" style={{ fontWeight: 'bold', }}>
                                    <FreeBreakfastIcon style={{ fontSize: 30, color: '#ff4c60' }} /> 132
                                </Typography>
                                <Typography variant="subtitle1" color="text.primary" component="div">
                                    Cups of coffee
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>

                <Grid item sm={4} xs={12}>
                    <Card sx={{ display: 'flex', boxShadow: 3 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5" style={{ fontWeight: 'bold', }}>
                                    <PeopleAltIcon style={{ fontSize: 30, color: '#ff4c60' }} /> 14
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Satisfied clients
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
            </Grid>

        </Root>
    )
}

export default About