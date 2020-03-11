import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Slider from '@material-ui/core/Slider';

import Copyright from "../../components/Copyright";
import NavBar from "../../components/NavBar";
import AppFetch from "../../config";
import { useSnackbar } from 'notistack';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        minWidth: 240,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        width: 300,
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const marks = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 37,
        label: '37°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];

function valuetext(value) {
    return `${value}°C`;
}

function valueLabelFormat(value) {
    return marks.findIndex(mark => mark.value === value) + 1;
}

export default function TTSConverter() {

    const classes = useStyles();

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const [gender, setGender] = React.useState('');

    const [language, setLanguage] = React.useState('');

    const [audio, setAudio] = React.useState('');

    const [speed, setSpeed] = React.useState('');

    const [pitch, setPitch] = React.useState('');


    const handleGenderChange = event => {
        setGender(event.target.value);
    };

    const handleAudioChange = event => {
        setAudio(event.target.value);
    };

    const handleLanguageChange = event => {
        setLanguage(event.target.value);
    };

    const handleSpeedChange = event => {
        setSpeed(event.target.value);
    };

    const handlePitchChange = (event, newValue) => {
        setPitch(newValue);
    };


    const onSubmit = (e) => {

        e.preventDefault();

        let text = e.target.text.value
        let ssml

        if (text.includes("<speak>")) {
            ssml = text
        } else {
            return text
        }


        AppFetch.post('/ttsConvert', { text: text, gender: gender, language: language, audio: audio, speed: speed, pitch: pitch, ssml: ssml })
            .then(function (response) {

                enqueueSnackbar("Output.mp3 Has been Produced in Server Folder", { variant: 'success' });
                setTimeout(() => closeSnackbar, 10000)
            })
            .catch(function (error) {

                enqueueSnackbar(error.message, { variant: 'error' });
                setTimeout(() => closeSnackbar, 10000)

            });

    }


    return (
        <React.Fragment>

            <CssBaseline />

            <NavBar heading={"Text to Speech Converter"} />

            <main className={classes.layout}>

                <Paper className={classes.paper}>

                    <Typography component="h1" variant="h4" align="center">Text to Speech Converter</Typography>

                    <form className={classes.form} noValidate onSubmit={onSubmit}>

                        <br />

                        <React.Fragment>
                            <Typography variant="h6" gutterBottom>Enter Text in the Fields Below</Typography>

                            <Grid container spacing={3}>

                                <Grid item xs={12}>

                                    <TextField
                                        id="text"
                                        name="text"
                                        label="Enter Text"
                                        fullWidth
                                        multiline
                                        rowsMax="4"
                                    />

                                </Grid>

                                <Grid item xs={6}>

                                    <FormControl variant="filled" className={classes.formControl}>

                                        <InputLabel id="voiceTypeInput">Voice Type</InputLabel>

                                        <Select
                                            labelId="voiceType"
                                            id="voiceType"
                                            value={gender}
                                            onChange={handleGenderChange}
                                        >

                                            <MenuItem value={"MALE"}>Male</MenuItem>
                                            <MenuItem value={"FEMALE"}>Female</MenuItem>
                                            <MenuItem value={"NEUTRAL"}>Neutral</MenuItem>

                                        </Select>

                                    </FormControl>

                                </Grid>

                                <Grid item xs={6}>

                                    <FormControl variant="filled" className={classes.formControl}>

                                        <InputLabel id="languageInput">Language</InputLabel>

                                        <Select
                                            labelId="languageType"
                                            id="languageType"
                                            value={language}
                                            onChange={handleLanguageChange}
                                        >

                                            <MenuItem value={"en-US"}>English (United States)</MenuItem>
                                            <MenuItem value={"en-GB"}>English (United Kingdom)</MenuItem>
                                            <MenuItem value={"en-AU"}>English (Australia)</MenuItem>

                                        </Select>

                                    </FormControl>

                                </Grid>

                                <Grid item xs={6}>

                                    <FormControl variant="filled" className={classes.formControl}>

                                        <InputLabel id="audioInput">Audio</InputLabel>

                                        <Select
                                            labelId="audioType"
                                            id="audioType"
                                            value={audio}
                                            onChange={handleAudioChange}
                                        >

                                            <MenuItem value={"MP3"}>MP3 (Recommended)</MenuItem>
                                            <MenuItem value={"LINEAR16"}>LINEAR16</MenuItem>
                                            <MenuItem value={"OGG_OPUS"}>Opus Encoded Audio</MenuItem>

                                        </Select>

                                    </FormControl>

                                </Grid>

                                <Grid item xs={6}>

                                    <FormControl variant="filled" className={classes.formControl}>

                                        <InputLabel id="speedInput">Speed</InputLabel>

                                        <Select
                                            labelId="speedType"
                                            id="speedType"
                                            value={speed}
                                            onChange={handleSpeedChange}
                                        >

                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={1.5}>1.5</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={2.5}>2.5</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>

                                        </Select>

                                    </FormControl>

                                </Grid>

                                <Grid item xs={12}>

                                    <Typography id="slider" gutterBottom>Pitch</Typography>

                                    <Slider
                                        defaultValue={0}
                                        getAriaValueText={valuetext}
                                        aria-labelledby="discrete-slider"
                                        valueLabelDisplay="auto"
                                        onChange={handlePitchChange}
                                        step={0.1}
                                        marks
                                        min={-15}
                                        max={15}
                                    />

                                </Grid>

                            </Grid>

                        </React.Fragment>

                        <React.Fragment>

                            <div className={classes.buttons}>

                                <Button variant="contained" color="primary" type="submit" className={classes.submit}>Convert</Button>

                            </div>


                        </React.Fragment>

                    </form>

                </Paper>

                <Copyright />

            </main>

        </React.Fragment >
    );
}