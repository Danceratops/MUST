import React from "react";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

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
            }}
        ></MapView>
    );
}