import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import TextPicture from '../assets/ttsNav.png'
import SpeechPicture from '../assets/sttNav.png'
import DexLabsPicture from '../assets/dex-logo.png'

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    logo: {
        width: 100,
        //paddingRight: 20
    }

}));


export default function NavBar(props) {

    const classes = useStyles();

    return (
        <React.Fragment>

            <CssBaseline />

            <AppBar position="absolute" color="primary" className={classes.appBar}>

                <Toolbar>

                    {<img src={props.logo === "TTS" ? TextPicture : props.logo === "home" ? DexLabsPicture : SpeechPicture} alt="logo" className={classes.logo} />}

                    <Typography variant="h6" color="inherit" noWrap>{props.heading}</Typography>

                </Toolbar>

            </AppBar>

        </React.Fragment>
    );
}