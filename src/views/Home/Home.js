import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Copyright from "../../components/Copyright";

//import TextConverter from "../../components/TextConverter";

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
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));


export default function Checkout() {

    const classes = useStyles();

    const onSubmit = (e) => {

        e.preventDefault();

        let text = e.target.text.value

        //TextConverter(text)
    }


    return (
        <React.Fragment>

            <CssBaseline />

            <AppBar position="absolute" color="primary" className={classes.appBar}>

                <Toolbar>

                    <Typography variant="h6" color="inherit" noWrap>Tangent Holdings</Typography>

                </Toolbar>

            </AppBar>

            <main className={classes.layout}>

                <Paper className={classes.paper}>

                    <form className={classes.form} noValidate onSubmit={onSubmit}>


                        <Typography component="h1" variant="h4" align="center">Text to Speech Converter</Typography>

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
                                        autoComplete="billing address-line1"
                                    />

                                </Grid>


                                <Grid item xs={12}>

                                    <FormControlLabel
                                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                        label="Use this address for payment details"
                                    />

                                </Grid>

                            </Grid>

                        </React.Fragment>

                        <React.Fragment>

                            <div className={classes.buttons}>

                                <Button variant="contained" color="primary" className={classes.button}>Convert</Button>

                            </div>

                        </React.Fragment>


                    </form>

                </Paper>

                <Copyright />

            </main>

        </React.Fragment>
    );
}