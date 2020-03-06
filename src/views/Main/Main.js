import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Home from '../Home/Home';


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
                </Switch>
            </main>
        );
    }
}

export default Main;