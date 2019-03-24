import React from "react";

const initial_state = {
    origin_lat: "37.7886393",
    origin_lon: "-122.4038808",
    destination_lat: "38.8976805",
    destination_lon: "-77.0387185",
    travel_date: "01/06/2019",
    value_one_hour: "20",
    value_ten_hours: "150",
};

class TravelOptionsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = initial_state;

        this.handleText = this.handleText.bind(this);
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.handleSave(this.state);
        this.setState(initial_state);
    };

    handleText(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <React.Fragment>
                <form onSubmit={ this.handleSubmit }>
                    <p>Origin Latitude:       <input onChange={ this.handleText } name="origin_lat"      type="text" value={ this.state.origin_lat }/></p>
                    <p>Origin Longitude:      <input onChange={ this.handleText } name="origin_lon"      type="text" value={ this.state.origin_lon }/></p>
                    <p>Destination Latitude:  <input onChange={ this.handleText } name="destination_lat" type="text" value={ this.state.destination_lat }/></p>
                    <p>Destination Longitude: <input onChange={ this.handleText } name="destination_lon" type="text" value={ this.state.destination_lon }/></p>
                    <p>Travel Date:           <input onChange={ this.handleText } name="travel_date"     type="text" value={ this.state.travel_date }/></p>
                    <p>Value of One Hour:     <input onChange={ this.handleText } name="value_one_hour"  type="text" value={ this.state.value_one_hour }/></p>
                    <p>Value of Ten Hours:    <input onChange={ this.handleText } name="value_ten_hours" type="text" value={ this.state.value_ten_hours }/></p>
                    <button>Get Travel Options</button>
                </form>
            </React.Fragment>
        )
    }
}

export default TravelOptionsForm;
