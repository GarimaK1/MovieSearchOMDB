import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MovieDetails from "./MovieDetails";
import axios from 'axios';
import PropTypes from 'prop-types';

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

const PATH_BASE = 'https://www.omdbapi.com/?apikey=d31ec762'
const PARAM_SEARCH_ID = '&i='

const MovieCard = ({ movie }) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [movieDetails, setMovieDetails] = useState(movie);

    const {Actors, Country, Language, Plot} = movieDetails;

    const searchMoviesById = async (searchText) => {
        try {
            const res = await axios.get(`${PATH_BASE}${PARAM_SEARCH_ID}${searchText}`)
            // console.log(res.data);
            setMovieDetails(res.data);
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        }
    }

    const handleModalOpen = () => {
        // console.log('Modal opened');
        searchMoviesById(movie.imdbID);
        setOpen(true);
    };

    const handleModalClose = () => {
        setOpen(false);
    };

    return (
        <Card className={classes.root}>
            <CardActionArea
                onClick={handleModalOpen}
            >
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
            <MovieDetails
                movie={movie} 
                open={open}
                actors={Actors}
                country={Country}
                language={Language}
                plot={Plot}
                handleModalClose={handleModalClose}
            />
        </Card>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default MovieCard;