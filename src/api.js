const url = process.env.REACT_APP_TRIP_PLANNER_API_URL;

export const getTravelOptions = (params) => {
    console.log(params);
    console.log(url);

    // Input validation
    if (parseFloat(params.value_ten_hours) <= parseFloat(params.value_one_hour)) {
        console.log("invalid inputs: value_ten_hours <= value_one_hour");
    } else {
        return fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
        .then(res => res.json())
        .then(data => {
            console.log("API called");
            console.log(data);
            return data;
        });
    }
};
