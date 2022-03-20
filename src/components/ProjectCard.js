import {
    Card, CardActionArea, CardActions,
    CardContent, CardMedia, Grid, Typography,
    Button
} from '@mui/material'
import React from 'react'

const ProjectCard = ({img, title, subtitle, link}) => {
    return (
        <Grid item sm={4} xs={12} style={{marginBottom: 20}}>
            <Card sx={{ maxWidth: 345, boxShadow: 3, height: 320, position: 'relative' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {subtitle}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{position: 'absolute', bottom: 0, right: 10}}>
                    <Button size="small" color="primary" style={{ marginLeft: 'auto' }}>
                        <a href={link} target="_blank" rel="noreferrer" style={{
                            textDecoration: 'none', color: '#ff4c60',
                        }}>View</a>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ProjectCard