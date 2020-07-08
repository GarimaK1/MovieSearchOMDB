import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    divStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center"
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

const SearchBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.divStyle}>
            <Paper elevation={2}
                className={classes.Paper}
            >
                <InputBase
                    placeholder="Search movies by keywords/title"
                    className={classes.InputBase}
                    inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton color="primary" aria-label="search for movies">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    );
}

export default SearchBar;
