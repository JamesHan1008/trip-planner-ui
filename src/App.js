import React, { Component } from 'react';

import TravelOptionsForm from "./components/TravelOptionsForm";
import { getTravelOptions } from "./api";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };

        this.handleGetTravelOptions = this.handleGetTravelOptions.bind(this);
    }

    async handleGetTravelOptions(params) {
        let data = await getTravelOptions(params);

        this.setState({
            data: data,
        });
    }

    render() {
        return (
            <React.Fragment>
                <TravelOptionsForm handleSave={ this.handleGetTravelOptions }/>
                {
                    this.state.data == null ?
                        <h1>Invalid inputs</h1>
                        :
                        <React.Fragment>
                            <h1>Travel Options</h1>
                            <table border="1">
                                <tbody>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Origin Airport</th>
                                        <th>Destination Airport</th>
                                        <th>Airlines</th>
                                        <th>Flight Cost</th>
                                        <th>Driving Distance</th>
                                        <th>Driving Distance in Meters</th>
                                        <th>Gas Cost</th>
                                        <th>Travel Method</th>
                                        <th>Travel Time</th>
                                        <th>Travel Time in Seconds</th>
                                        <th>Equivalent Travel Cost</th>
                                    </tr>
                                    {this.state.data.map(function(item, key) {
                                        return (
                                            <tr key = {key}>
                                                <td>{item.rank}</td>
                                                <td>{item.origin_airport}</td>
                                                <td>{item.destination_airport}</td>
                                                <td>{item.airlines == null ? "" : item.airlines.join(", ")}</td>
                                                <td>{item.flight_cost}</td>
                                                <td>{item.driving_distance}</td>
                                                <td>{item.driving_distance_meters}</td>
                                                <td>{item.gas_cost.toFixed(2)}</td>
                                                <td>{item.travel_method}</td>
                                                <td>{item.travel_time}</td>
                                                <td>{item.travel_time_seconds}</td>
                                                <td>{item.equivalent_travel_cost.toFixed(2)}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </React.Fragment>
                }
            </React.Fragment>
        );
    }
}

export default App;
