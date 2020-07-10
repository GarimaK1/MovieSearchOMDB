import React from 'react';
import MovieCard from "./MovieCard";
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const displayStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around'
}

const MovieDisplay = ({ moviesToDisplay }) => {
    if (!moviesToDisplay) {
        return (
            <Typography gutterBottom align="center" variant="subtitle1" >
                No movies found!
            </Typography>
        )
    }
    return (
        <div style={displayStyle}>
            {
                moviesToDisplay && moviesToDisplay.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)
            }
        </div>
    )
} 

MovieDisplay.propTypes = {
    moviesToDisplay: PropTypes.array.isRequired,
};

export default MovieDisplay;