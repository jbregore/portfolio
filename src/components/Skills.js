import { Typography, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import GrainIcon from '@mui/icons-material/Grain';


const Skills = ({Root}) => {
    return (
        <Root style={{
            margin: 'auto',
            // color: "#14265c",
            marginTop: 60
        }}
            id="skills"
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
    )
}

export default Skills