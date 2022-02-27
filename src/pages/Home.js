import { Box, Button, Typography, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import Typed from 'react-typed';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions, TextField, Paper } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import GrainIcon from '@mui/icons-material/Grain';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from "@mui/material";
import theme from "../utils/theme";

import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, getTheme } from "../redux/actions/uiAction";


import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


const Home = () => {
    const ui = useSelector((state) => state.ui);
    const THEME = createTheme(theme(ui.isDarkMode));

    const dispatch = useDispatch();

    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
            margin: 1,
            padding: 0,
            transform: 'translateX(6px)',
            '&.Mui-checked': {
                color: '#fff',
                transform: 'translateX(22px)',
                '& .MuiSwitch-thumb:before': {
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                        '#fff',
                    )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
                },
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
            width: 32,
            height: 32,
            '&:before': {
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
            },
        },
        '& .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            borderRadius: 20 / 2,
        },
    }));

    const Root = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        },
        [theme.breakpoints.up('md')]: {
            width: '70%'
        },
    }));

    const changeTheme = () => {
        dispatch(toggleTheme(!ui.isDarkMode));
    }

    useEffect(() => {
        dispatch(getTheme());
    }, [dispatch]);

    return (
        <ThemeProvider theme={THEME}>
            <Paper
                style={{ paddingBottom: 100 }}
            //  style={{ backgroundColor: (theme) => theme.palette.background.default }} 
            // sx={{bgColor: 'red' '#f7f7f7'}}
            // sx={{ bgcolor: 'background.default' }}
            >
                <FormControlLabel
                    control={<MaterialUISwitch sx={{ m: 1 }}
                        defaultChecked={ui.isDarkMode}
                    />}
                    label=""
                    style={{ float: 'right' }}
                    onClick={changeTheme}
                />
                <Box style={{
                    width: '100%', height: 750,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    // color: "#14265c"
                }}>
                    <img
                        alt=""
                        style={{ width: 150, height: 150, objectFit: 'cover', borderRadius: '50%' }}
                        src="https://firebasestorage.googleapis.com/v0/b/midterm-redux.appspot.com/o/274213862_253831063584385_2282428805788619329_n.jpg?alt=media&token=d4d442a6-8d7f-4abf-88d3-1bc9b34ea282" />

                    <Typography style={{ marginTop: 10, fontSize: 34, fontWeight: 'bold' }} >
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

                <Root style={{
                    margin: 'auto',
                    // color: "#14265c",
                }}
                // md={{width: '70%'}}
                // sm={{ width: '90%' }}
                >
                    <Grid container style={{ width: 300 }}>
                        <Grid item xs={2} >
                            <GrainIcon style={{ fontSize: 50, postion: 'absolute', zIndex: -1, color: '#878787' }} />
                        </Grid>
                        <Grid item xs={10} >
                            <Typography style={{
                                fontSize: 34, fontWeight: 'bold',
                                // marginBottom: 50, marginLeft: 30
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
                                        I am John Benedict Regore, a motivated web developer student from San Luis Pampanga, Philippines.
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

                <Root style={{
                    margin: 'auto',
                    // color: "#14265c",
                    marginTop: 60
                }}>

                    <Grid container style={{ width: 300 }}>
                        <Grid item xs={2} >
                            <GrainIcon style={{ fontSize: 50, postion: 'absolute', zIndex: -1, color: '#878787' }} />
                        </Grid>
                        <Grid item xs={10} >
                            <Typography style={{
                                fontSize: 34, fontWeight: 'bold',
                                // marginBottom: 50, marginLeft: 30
                            }} >
                                Skills
                            </Typography>
                        </Grid>
                    </Grid>
                    <br />

                    <Grid container spacing={3}>
                        <Grid item sm={3} xs={6}>
                            <Card>
                                <CardContent style={{ textAlign: 'center' }}>
                                    <i class="devicon-photoshop-plain" style={{ fontSize: 50, color: '#555' }}></i>
                                    <Typography style={{ marginTop: 10 }}>Photoshop</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <Card>
                                <CardContent style={{ textAlign: 'center' }}>
                                    <i class="devicon-java-plain" style={{ fontSize: 50, color: '#555' }}></i>
                                    <Typography style={{ marginTop: 10 }}>Java</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <Card>
                                <CardContent style={{ textAlign: 'center' }}>
                                    <i class="devicon-html5-plain" style={{ fontSize: 50, color: '#555' }}></i>
                                    <Typography style={{ marginTop: 10 }}>Html</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <Card>
                                <CardContent style={{ textAlign: 'center' }}>
                                    <i class="devicon-css3-plain" style={{ fontSize: 50, color: '#555' }}></i>
                                    <Typography style={{ marginTop: 10 }}>Css</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid><br />

                    <Grid container spacing={3}>
                        <Grid item sm={3} xs={6}>
                            <Card>
                                <CardContent style={{ textAlign: 'center' }}>
                                    <i class="devicon-redux-original" style={{ fontSize: 50, color: '#555' }}></i>
                                    <Typography style={{ marginTop: 10 }}>Redux</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <Card>
                                <CardContent style={{ textAlign: 'center' }}>
                                    <i class="devicon-php-plain" style={{ fontSize: 50, color: '#555' }}></i>
                                    <Typography style={{ marginTop: 10 }}>Php</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <Card>
                                <CardContent style={{ textAlign: 'center' }}>
                                    <i class="devicon-javascript-plain" style={{ fontSize: 50, color: '#555' }}></i>
                                    <Typography style={{ marginTop: 10 }}>Javascript</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <Card>
                                <CardContent style={{ textAlign: 'center' }}>
                                    <i class="devicon-nodejs-plain" style={{ fontSize: 50, color: '#555' }}></i>
                                    <Typography style={{ marginTop: 10 }}>Node js</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid><br />

                    <Grid container spacing={3}>
                        <Grid item sm={3} xs={6}>
                            <Card>
                                <CardContent style={{ textAlign: 'center' }}>
                                    <i class="devicon-materialui-plain" style={{ fontSize: 50, color: '#555' }}></i>
                                    <Typography style={{ marginTop: 10 }}>Material Ui</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <Card>
                                <CardContent style={{ textAlign: 'center' }}>
                                    <i class="devicon-mysql-plain" style={{ fontSize: 50, color: '#555' }}></i>
                                    <Typography style={{ marginTop: 10 }}>Mysql</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <Card>
                                <CardContent style={{ textAlign: 'center' }}>
                                    <i class="devicon-react-original" style={{ fontSize: 50, color: '#555' }}></i>
                                    <Typography style={{ marginTop: 10 }}>React</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <Card>
                                <CardContent style={{ textAlign: 'center' }}>
                                    <i class="devicon-github-original" style={{ fontSize: 50, color: '#555' }}></i>
                                    <Typography style={{ marginTop: 10 }}>Github</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Root>

                <Root style={{
                    margin: 'auto',
                    // color: "#14265c",
                    marginTop: 70
                }}>

                    <Grid container style={{ width: 300 }}>
                        <Grid item xs={2} >
                            <GrainIcon style={{ fontSize: 50, postion: 'absolute', zIndex: -1, color: '#878787' }} />
                        </Grid>
                        <Grid item xs={10} >
                            <Typography style={{
                                fontSize: 34, fontWeight: 'bold',
                                // marginBottom: 50, marginLeft: 30
                            }} >
                                Projects
                            </Typography>
                        </Grid>
                    </Grid>
                    <br />

                    <Grid container spacing={2}>
                        <Grid item sm={4} xs={12}>
                            <Card sx={{ maxWidth: 345, boxShadow: 3, height: 320 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://firebasestorage.googleapis.com/v0/b/midterm-redux.appspot.com/o/xas.png?alt=media&token=f0386f74-eb09-424f-847b-7becc1e1d947"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Java Practices
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            java with mysql as database
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" style={{ marginLeft: 'auto' }}>
                                        <a href="https://jbregore.github.io/ezbugatti123/" target="_blank" rel="noreferrer" style={{
                                            textDecoration: 'none', color: '#ff4c60', marginTop: 40
                                        }}>View</a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <Card sx={{ maxWidth: 345, boxShadow: 3, height: 320 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://firebasestorage.googleapis.com/v0/b/midterm-redux.appspot.com/o/sadas.png?alt=media&token=dccff603-a870-44ba-92af-9d10b7121683"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Highminds
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            e-commerce website made with html, css, js, php (rest api), mysql
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" style={{ marginLeft: 'auto' }}>
                                        <a href="https://e-hghmnds.000webhostapp.com/test_hghmnds/index.php" target="_blank"
                                            rel="noreferrer"
                                            style={{ textDecoration: 'none', color: '#ff4c60', marginTop: 20 }}>View</a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://firebasestorage.googleapis.com/v0/b/midterm-redux.appspot.com/o/sadasxs.png?alt=media&token=8e3dac3b-8d0e-4248-b662-c2f9589394e8"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            eHireMo
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            job posting website made with html, css, js, php (rest api), mysql.
                                            it also have a react native android app.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" style={{ marginLeft: 'auto' }}>
                                        <a href="https://btech-ehiremo.000webhostapp.com/eHireMo/frontend/index.php" target="_blank" rel="noreferrer" style={{
                                            textDecoration: 'none',
                                            color: '#ff4c60'
                                        }}>View</a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid><br /><br />

                    <Grid container spacing={2}>
                        <Grid item sm={4} xs={12}>
                            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://firebasestorage.googleapis.com/v0/b/midterm-redux.appspot.com/o/wx.jpg?alt=media&token=59624358-6601-4f4b-ac57-656c2a6303c0"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Wefixit mobile app
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            service finder application made with react native and php as backend
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" style={{ marginLeft: 'auto' }}>
                                        <a href="https://drive.google.com/file/d/1xZGsduTM10c5JPqHIQCsF_tz0xWKElvR/view?usp=sharing" target="_blank" rel="noreferrer" style={{
                                            textDecoration: 'none', color: '#ff4c60'
                                        }}>View</a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <Card sx={{ maxWidth: 345, boxShadow: 3, height: 300 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://firebasestorage.googleapis.com/v0/b/midterm-redux.appspot.com/o/sad.png?alt=media&token=6fac383b-1fd7-4556-ac7f-d18398bbba99"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Student Review
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            made with react js, firebase and redux
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" style={{ marginLeft: 'auto' }}>
                                        <a href="https://7fa22fb3.redux-midterm.pages.dev/studentlist" target="_blank"
                                            rel="noreferrer"
                                            style={{ textDecoration: 'none', color: '#ff4c60', marginTop: 20 }}>View</a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <Card sx={{ maxWidth: 345, boxShadow: 3, height: 300 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://firebasestorage.googleapis.com/v0/b/midterm-redux.appspot.com/o/asdas.png?alt=media&token=cddcb32c-fe01-4d29-ba74-82b6a42c4743"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Awake social media
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            made with react js, firebase
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" style={{ marginLeft: 'auto' }}>
                                        <a href="https://awake-l0b.pages.dev/login" target="_blank" rel="noreferrer" style={{
                                            textDecoration: 'none',
                                            color: '#ff4c60', marginTop: 20
                                        }}>View</a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid><br /><br />

                    <Grid container spacing={2}>
                        <Grid item sm={4} xs={12}>
                            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://firebasestorage.googleapis.com/v0/b/midterm-redux.appspot.com/o/fbclone.png?alt=media&token=8bb85766-cb00-4b60-99db-60726899392a"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Facebook clone
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            simple facebook UI made with next js, tailwind css, firebase
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" style={{ marginLeft: 'auto' }}>
                                        <a href="https://facebook-clone-green-zeta.vercel.app/" target="_blank" rel="noreferrer" style={{
                                            textDecoration: 'none', color: '#ff4c60'
                                        }}>View</a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid><br /><br />
                    {/* <Typography><br />
                        The android apps made with react native, and web apps made with php and mysql upload is to be follow.
                    </Typography> */}

                </Root>

                <Root style={{
                    margin: 'auto',
                    // color: "#14265c",
                    marginTop: 70,
                }}>

                    <Grid container style={{ width: 300 }}>
                        <Grid item xs={2} >
                            <GrainIcon style={{ fontSize: 50, postion: 'absolute', zIndex: -1, color: '#878787' }} />
                        </Grid>
                        <Grid item xs={10} >
                            <Typography style={{
                                fontSize: 34, fontWeight: 'bold',
                                // marginBottom: 50, marginLeft: 30
                            }} >
                                Contact me
                            </Typography>
                        </Grid>
                    </Grid>
                    <br />

                    <Grid container spacing={2} >
                        <Grid item sm={4} xs={12}>
                            <Typography style={{ fontSize: 30, fontWeight: 'bold' }}>
                                Lets talk about everything
                            </Typography><br />
                            <Typography>
                                Don't like forms? send me an <u style={{ cursor: 'pointer', color: '#ff4c60' }} >email</u>
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

            </Paper>
        </ThemeProvider>
    )
}

export default Home;