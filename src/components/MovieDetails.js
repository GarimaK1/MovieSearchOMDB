import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';

const imgStyle = {
    margin: 'auto',
    height: '300px',
    width: '250px'
}

export default function MovieDetails({ movie, handleModalClose, open, actors, country, language, plot }) {

    const { Title, Year, Poster } = movie;

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleModalClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Grid
                    container
                    // alignContent='center'
                    // alignItems='center'
                >
                    <Grid item xs='auto' style={{ margin: 'auto' }}>
                        <img src={Poster} alt={Title} style={imgStyle} />
                    </Grid>
                    <Grid item xs={9} style={{ flexGrow: 2, margin: 'auto' }} >
                        <DialogTitle id="alert-dialog-title">{Title} ({Year})</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description" >
                                Actors: {actors} 
                                Language: {language} 
                                Country: {country} 
                                Plot: {plot}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleModalClose} color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </Grid>
                </Grid>
            </Dialog>
        </div>
    );
}
