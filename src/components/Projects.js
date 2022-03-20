import { Typography, Grid } from '@mui/material';
import React from 'react';

import GrainIcon from '@mui/icons-material/Grain';

import ProjectCard from '../components/ProjectCard';
import projects from "../utils/data";

const Projects = ({Root}) => {
  return (
    <Root style={{
        margin: 'auto',
        marginTop: 70
    }}
        id="project">

        <Grid container style={{ width: 300 }}>
            <Grid item xs={2} >
                <GrainIcon style={{ fontSize: 50, postion: 'absolute', zIndex: -1, color: '#878787' }} />
            </Grid>
            <Grid item xs={10} >
                <Typography style={{
                    fontSize: 34, 
                    // marginBottom: 50, marginLeft: 30
                }} >
                    Projects
                </Typography>
            </Grid>
        </Grid>
        <br />

        <Grid container spacing={2}>
            {projects.map((item, index) => (
                <ProjectCard key={index} img={item.img} title={item.title}
                    subtitle={item.subtitle} link={item.link} />
            ))}
        </Grid><br />

    </Root>
  )
}

export default Projects