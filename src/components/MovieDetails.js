import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const styles = {
    imgStyle: {
        height: '350px',
        width: '250px',
        margin: '0.5rem'
    },
    contentStyle: {
        display: 'flex',
        flexDirection: 'column'
    },
    gridItemStyle: {
        margin: 'auto'
    }
}

const { imgStyle, contentStyle, gridItemStyle} = styles;

export default function MovieDetails({ movie, handleModalClose, open, actors, country, language, plot }) {

    const { Title, Year, Poster } = movie;

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleModalClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth="lg"
            >
                <Grid
                    container
                >
                    <Grid
                        item
                        xs='auto'
                        style={gridItemStyle}
                    >
                        <img src={Poster} alt={Title} style={imgStyle} />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        lg={9}
                        style={gridItemStyle}
                    >
                        <DialogTitle id="alert-dialog-title">{Title} ({Year})</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description" style={contentStyle}>
                                {language && <span><strong>Language:</strong> {language}</span>}
                                {country && <span><strong>Country:</strong> {country}</span>}
                                {plot && <span><strong>Plot:</strong> {plot}</span>}
                                {actors && <span><strong>Actors:</strong> {actors}</span>}
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

MovieDetails.propTypes = {
    movie: PropTypes.object.isRequired,
    handleModalClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    actors: PropTypes.string,
    country: PropTypes.string,
    language: PropTypes.string,
    plot: PropTypes.string
};
