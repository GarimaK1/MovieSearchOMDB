import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 270,
        margin: '0.5rem'
    },
    img: {
        margin: '0.5rem',
        height: '300px',
        width: '250px'
    },
});

const MovieCard = ({ movie }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    className={classes.img}
                    alt={movie.Title}
                    image={movie.Poster}
                    title={movie.Title}
                />
            </CardActionArea>
            <Typography gutterBottom align="center" variant="subtitle1" >
                {movie.Title}
            </Typography>
        </Card>
    )
}

export default MovieCard;