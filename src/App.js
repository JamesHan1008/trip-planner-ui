import React, { Component } from 'react';

import TravelOptionsForm from "./components/TravelOptionsForm";
import { getTravelOptions } from "./api";

class App extends Component {

    async handleGetTravelOptions(params) {
        await getTravelOptions(params);
    }

    render() {
        return (
            <TravelOptionsForm handleSave={ this.handleGetTravelOptions }/>
        );
    }
}

export default App;
