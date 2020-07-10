import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    divStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: 'column'
    },
    Paper: {
        width: '100%',
        margin: '0 0 1rem 0',
        display: 'flex',
        alignItems: 'center',
    },
    InputBase: {
        width: '100%',
        paddingLeft: '0.5rem',
    }
}));

const SearchBar = ({ searchMoviesByTitle}) => {
    const classes = useStyles();

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        searchMoviesByTitle('great');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = () => {
        searchMoviesByTitle(searchText);
        setSearchText('');
    }

    const handleChange = e => {
        setSearchText(e.target.value);
    }

    const handleKeyPress = e => {
        if (e.key === "Enter" || e.which === 13) {
            handleSubmit();
        }
    }

    return (
        <div className={classes.divStyle}>
            <Paper className={classes.Paper}>
                <InputBase
                    name="search"
                    type="text"
                    placeholder="Search movies by keywords/title"
                    className={classes.InputBase}
                    inputProps={{ 'aria-label': 'search movies' }}
                    value={searchText}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                />
                <IconButton color="primary" aria-label="search for movies" onClick={handleSubmit}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    );
}

SearchBar.propTypes = {
    searchMoviesByTitle: PropTypes.func.isRequired,
};

export default SearchBar;
