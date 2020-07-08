import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const headingStyle = {
    fontWeight: 700,
    padding: '0.5rem'
}

const Header = () => {
    return (
        <AppBar position="static" style={{ marginBottom: '1rem' }}>
            <Toolbar>
                <Typography variant="h4" style={headingStyle}>
                    Movie Search OMDB
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
