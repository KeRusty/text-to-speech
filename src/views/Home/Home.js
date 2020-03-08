import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavBar from "../../components/NavBar";
import Cards from "../../components/Cards";

const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cardData = [
    { heading: "Text To Speech", content: "Convert Text To Speech Here", link: "/TTSConverter" },
    { heading: "Speech To Text", content: "Convert Speech To Text Here", link: "/SpeechConerter" },
];


export default function Dashboard(props) {
    const classes = useStyles();

    return (
        <React.Fragment>

            <CssBaseline />

            <NavBar heading={"Text to Speech Converter"} />

            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">

                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Text To Speech & Speech To Text
                        </Typography>

                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Converter
                        </Typography>

                    </Container>

                </div>

                <Cards cardData={cardData} />

            </main>

        </React.Fragment>
    );
}