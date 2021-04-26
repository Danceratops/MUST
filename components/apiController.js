import React from "react";
import GetLocation from "react-native";

export default function APIController({mode, distance}) {
    
    /* apiCall will be the string returned to caller methods to make REST API call */
    var apiCall = "https://api.crimeometer.com/v1/incidents/raw-data?";

    state = { 
        lat: null,
        lon: null,
        date: null,
        time: null,
        datetime_ini: null,
    }

    /* For now, set initiating date/time here */
    datetime_ini = '2021-03-01 00:00:01';

    /* get current position for lat/lon */
    navigator.geolocation.getCurrentPosition(function(position){
        lat = position.coords.latitude;
        lon = position.coords.longitude;
    })

    /* get current date & time */
    var today = new Date(),
    temp_time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(),
    temp_date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    time = temp_time;       /* Somewhat unecessary variable storage here - will probably wipe before merge */
    date = temp_date;

    if(mode === "silentMode") {
        
        /* Construct silentMode apiCall string */
        apiCall += 'lat=' + lat + '&lon=' + lon + '&distance=' + distance + '&datetime_ini=' + '&datetime_end=' + date + ' ' + time + '&page=1';

        return apiCall;
    } else if (mode === "infoBuddy") {
        
        /* Construct infoBuddy apiCall string */
        apiCall += 'lat=' + lat + '&lon=' + lon + '&distance=' + distance + '&datetime_ini=' + '&datetime_end=' + date + ' ' + time + '&page=1';
    
        return apiCall;
    } else if (mode === "heatMap") {

        /* Construct heatMap apiCall string */
        apiCall += 'lat=' + lat + '&lon=' + lon + '&distance=' + distance + '&datetime_ini=' + '&datetime_end=' + date + ' ' + time + '&page=1';
        
        return apiCall;
    } else {
        return(
            Alert.alert('APIController ERROR: Invalid API Mode')
        );
    }
}
