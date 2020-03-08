import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },

}));


export default function NavBar(props) {

    const classes = useStyles();

    return (
        <React.Fragment>

            <CssBaseline />

            <AppBar position="absolute" color="primary" className={classes.appBar}>

                <Toolbar>

                    <Typography variant="h6" color="inherit" noWrap>{props.heading}</Typography>

                </Toolbar>

            </AppBar>

        </React.Fragment>
    );
}