import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
    return (
        <AppBar position="static" style={{ alignItems: 'center'}}>
            <Toolbar>
                <Typography variant="body2">
                    Site Created by: Garima Khandekar
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;
