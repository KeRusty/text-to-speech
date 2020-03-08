import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Home from '../Home/Home';
import TextToSpeech from '../TextToSpeech/TextToSpeech';
import SpeechToText from "../SpeechToText/SpeechToText";


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() { }

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/TTSConverter" component={TextToSpeech} />
                    <Route exact path="/SpeechConerter" component={SpeechToText} />
                </Switch>
            </main>
        );
    }
}

export default Main;