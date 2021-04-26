import React from "react";
import GetLocation from 'react-native-get-location';
import { Alert } from "react-native";

export default function APIController(mode, distance) {

    /* apiCall will be the string returned to caller methods to make REST API call */
    var apiCall = "https://api.crimeometer.com/v1/incidents/raw-data?";

    state = {
        lat: 41.081757,
        lon: -81.511452,
        endDate: null,
        initDate: null,
        datetime_ini: null,
    }

    /* get current position for lat/lon */
    navigator.geolocation.getCurrentPosition(function (position) {
        state.lat = position.coords.latitude;
        state.lon = position.coords.longitude;
    })

    /* get current date & time */
    var today = new Date();

    state.endDate = today.toISOString();
    state.initDate = new Date(today.setFullYear(today.getFullYear() - 1)).toISOString();

    if (mode === "silentMode") {

        /* Construct silentMode apiCall string */
        apiCall = `https://api.crimeometer.com/v1/incidents/stats?lat=${state.lat}&lon=${state.lon}&distance=${distance}&datetime_ini=${state.initDate}&datetime_end=${state.endDate}&page_size=10`;

        return apiCall;
    } else if (mode === "infoBuddy") {

        /* Construct infoBuddy apiCall string */
        apiCall += `lat=${state.lat}&lon=${state.lon}&distance=${distance}&datetime_ini=${state.initDate}&datetime_end=${state.endDate}&page_size=50`;

        return apiCall;
    } else if (mode === "heatMap") {

        /* Construct heatMap apiCall string */
        apiCall += `lat=${state.lat}&lon=${state.lon}&distance=${distance}&datetime_ini=${state.initDate}&datetime_end=${state.endDate}&page_size=50`;

        return apiCall;
    } else {
        return (
            Alert.alert('APIController ERROR: Invalid API Mode')
        );
    }
}
