import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => {
    return (
        <AppBar position="static" style={{marginBottom: '1rem'}}>
            <Toolbar>
                <Typography variant="h5">
                    Movie Search OMDB
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
