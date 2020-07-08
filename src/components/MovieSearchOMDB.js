import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import SearchBar from "../layout/SearchBar";
import MovieDisplay from "./MovieDisplay";

const useStyles = makeStyles((theme) => ({
    layout: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        flexGrow: 1,
        margin: '0 1rem 0.5rem 1rem'
    }
}));

const PATH_BASE='http://www.omdbapi.com/?apikey=d31ec762'
const PARAM_SEARCH_TITLE='&s='
const PARAM_SEARCH_ID='&i='

const MovieSearchOMDB = () => {
    const classes = useStyles();

    const [movies, setMovies] = useState([]);

    const searchMoviesByTitle = async (searchText) => {
        try {
            const res = await axios.get(`${PATH_BASE}${PARAM_SEARCH_TITLE}${searchText}`)
            console.log(res.data.Search);
            setMovies(res.data.Search);
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
        }
    }

    const searchMoviesById = async (searchText) => {
        try {
            const res = await axios.get(`${PATH_BASE}${PARAM_SEARCH_ID}${searchText}`)
            console.log(res);
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

    return (
        <div className={classes.layout}>
            <Header />
            <div className={classes.content} >
                <SearchBar searchMoviesByTitle={searchMoviesByTitle} />
                <MovieDisplay moviesToDisplay={movies} />
            </div>
            <Footer />
        </div>
    )
}

export default MovieSearchOMDB;