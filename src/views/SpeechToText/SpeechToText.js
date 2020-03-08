import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FileCopyIcon from '@material-ui/icons/FileCopy';

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
}));


export default function TTSConverter() {

    const classes = useStyles();

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const [gender, setGender] = React.useState('');

    const [language, setLanguage] = React.useState('');

    const handleGenderChange = event => {
        setGender(event.target.value);
    };

    const handleLanguageChange = event => {
        setLanguage(event.target.value);
    };

    const onSubmit = (e) => {

        e.preventDefault();

        let text = e.target.text.value

        AppFetch.post('/ttsConvert', { text: text, gender: gender, language: language })
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

                                    <input
                                        color="primary"
                                        accept="image/*"
                                        type="file"
                                        //onChange={onChange}
                                        id="icon-button-file"
                                        style={{ display: 'none', }}
                                    />
                                    <label htmlFor="icon-button-file">
                                        <Button
                                            variant="contained"
                                            component="span"
                                            className={classes.button}
                                            size="large"
                                            color="primary"
                                        >
                                            <FileCopyIcon className={classes.extendedIcon} />
                                        </Button>
                                    </label>
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