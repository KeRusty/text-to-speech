import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import Copyright from "../../components/Copyright";
import NavBar from "../../components/NavBar";
import AppFetch from "../../config";
import {useSnackbar} from 'notistack';
import {DropzoneArea} from 'material-ui-dropzone'
import axios from 'axios';
import {TextField} from "@material-ui/core";

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
        justifyContent: 'flex-start',
    },
    button: {
        //marginTop: theme.spacing(3),
        //marginLeft: theme.spacing(1),
        width: '100%'
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
        margin: theme.spacing(3,0,2)
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function SpeechToText() {

    const classes = useStyles();
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();

    const [file, setFile] = useState('');
    const [transcription, setTranscription] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append('file', file);
        formData.append('name', 'Tangent');

        try {
            const res = await axios.post('http://localhost:3000/SpeechConvert', formData, {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            });

            setTranscription(res.data);

        } catch (e) {
            console.log(e);
        }

        /*axios({
            url: 'http://localhost:3000/SpeechConvert',
            method: 'POST',
            data: formData
        }).then((res) => {
            console.log(res);
        }, (err) => {
            console.warn(err);
        });*/
    };

    const handleChange = (files) => {
        let file = files[0];

        setFile(file);

    };

    return (
        <React.Fragment>

            <CssBaseline/>

            <NavBar heading={"Speech to Text Converter"}/>

            <main className={classes.layout}>

                <Paper className={classes.paper}>

                    <Typography component="h1" variant="h4" align="center">Speech To Text Converter</Typography>

                    <form className={classes.form} noValidate onSubmit={onSubmit}>

                        <br/>

                        <React.Fragment>
                            <Typography variant="h6" gutterBottom>Enter an Audio File Below</Typography>

                            <Grid container spacing={3}>

                                <Grid item xs={12}>

                                    {/* commented by rangana */}
                                    <DropzoneArea
                                        onChange={handleChange}
                                        acceptedFiles={['audio/*']}
                                        filesLimit={1}
                                        dropzoneText={"Drag and drop an Audio file here or click"}
                                    />

                                    {/*<button onClick={start} disabled={isRecording}>
                                        Record
                                    </button>
                                    <button onClick={stop} disabled={!isRecording}>
                                        Stop
                                    </button>
                                    <audio src={blobURL} controls="controls"/>*/}

                                    {/*<input type="file" name="file" onChange={(e) => handleChange(e)}/>*/}

                                    <TextField className={classes.formControl} value={transcription}/>

                                </Grid>

                            </Grid>

                        </React.Fragment>

                        <React.Fragment>

                            <div className={classes.buttons}>

                                <Button variant="contained" color="primary" type="submit"
                                        className={classes.submit}>Convert</Button>

                            </div>


                        </React.Fragment>

                    </form>

                </Paper>

                <Copyright/>

            </main>

        </React.Fragment>
    );
}