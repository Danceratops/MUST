import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    useWindowDimensions
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import HTML from "react-native-render-html";

const htmlContent = `
    <div id="crimeometer-container" >
        <div id="crime-map">                                      
            <script id="crimeometer-google-maps-control-v2"
                data-xak="i2NL9Rg6VM7xPSgTeWyA23Hun7Q8U13c3aqXQdS5"
                data-pxak="osWjuJUAOE4DN3SelA94SaqMe8VOrI8770JY1nc1"
                data-zoom="15"
                data-lat="41.0772"
                data-lon="-81.534744"
                data-distance="10mi"
                data-datetime-ini="2020-05-01 00:00:00"
                data-datetime-end="2021-04-26 00:00:00"
                data-max-incidents="20000"
                src="https:dvk.crimeometer.com/crimeometer-google-maps-control-v2.js"
                >
            </script>
        </div>
    </div>
`;

/*
    <script
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCLSz-vEosa4fAyukT-q5-0u4UkWF_MXWM&callback=crimeometer-map">
    </script>
*/

// navigation object should have elements lat, long, latDelta, longDelta to pass to the Google Maps API

export default function HeatMap() {

    return (

        <MapView
            style={{ flex: 1 }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            initialRegion={{
                latitude: 41.0772,
                longitude: -81.534744,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}>

            <HTML source={{ html: htmlContent }} />

        </MapView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10,
        backgroundColor: "#F6F6F6",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 50
    },
});
