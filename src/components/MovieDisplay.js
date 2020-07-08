import React from 'react';
import MovieCard from "./MovieCard";

const displayStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around'
}

const MovieDisplay = () => {
    const movies = [
        {
            "Title": "The Great Gatsby",
            "Year": "2013",
            "imdbID": "tt1343092",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "The Great Escape",
            "Year": "1963",
            "imdbID": "tt0057115",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNzA2NmYxMWUtNzBlMC00MWM2LTkwNmQtYTFlZjQwODNhOWE0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
            "Title": "Oz the Great and Powerful",
            "Year": "2013",
            "imdbID": "tt1623205",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMyMzQ1ODM1MF5BMl5BanBnXkFtZTcwMjE2MTQxOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "The Great Dictator",
            "Year": "1940",
            "imdbID": "tt0032553",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        },
        {
            "Title": "The Great Wall",
            "Year": "2016",
            "imdbID": "tt2034800",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjA3MjAzOTQxNF5BMl5BanBnXkFtZTgwOTc5OTY1OTE@._V1_SX300.jpg"
        },
        {
            "Title": "The Great Beauty",
            "Year": "2013",
            "imdbID": "tt2358891",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjg5NmI3NmUtZDQ2Mi00ZTI0LWE0YzAtOGRhOWJmNDJkOWNkXkEyXkFqcGdeQXVyMzIzNDU1NTY@._V1_SX300.jpg"
        },
        {
            "Title": "The Great Debaters",
            "Year": "2007",
            "imdbID": "tt0427309",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTQxMDc1NzkwMF5BMl5BanBnXkFtZTcwMDI5MjU1MQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Great Expectations",
            "Year": "1998",
            "imdbID": "tt0119223",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDFiODQ3ZmEtZDQwYS00ZmQ4LWIxYzItYzM2YmVhNDRmZmFiXkEyXkFqcGdeQXVyNTk5Nzg1NjQ@._V1_SX300.jpg"
        },
        {
            "Title": "The Great Mouse Detective",
            "Year": "1986",
            "imdbID": "tt0091149",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDUzMTliZDYtMmRjZS00Zjk3LWIwZjEtZjc4N2NjYjdmY2FjXkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SX300.jpg"
        },
        {
            "Title": "The Great Outdoors",
            "Year": "1988",
            "imdbID": "tt0095253",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZDVkNDQ3MDItZTBlOS00ZGU0LTk0ZDUtYmE2YzNmOTM4YzBhXkEyXkFqcGdeQXVyMjU5OTg5NDc@._V1_SX300.jpg"
        }
    ];

    return (
        <div style={displayStyle}>
            {
                movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)
            }
        </div>
    )
} 

export default MovieDisplay;