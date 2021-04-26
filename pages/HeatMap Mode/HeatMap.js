import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
    Platform, 
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

/* class App extends React.Component {
    render() {
        return (
            <MapView
               style={{ flex: 1 }}
               provider={PROVIDER_GOOGLE}
               showsUserLocation
               initialRegion={{
               latitude: 41.0772,
               longitude: -81.534744,
               latitudeDelta: 0.0,
            longitudeDelta: 0.0}}
        ></MapView>
        );
     }
  } */
  
            /* <MapView
               style={{ flex: 1 }}
               provider={PROVIDER_GOOGLE}
               showsUserLocation
               initialRegion={{
               latitude: 41.0772,
               longitude: -81.534744,
               latitudeDelta: 0.0,
            longitudeDelta: 0.0}}
        ></MapView> */
/*
        return (        
            <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Location', {
                title: 'Ohio',
                rating: 23,
                crimesArray: ['Theft', 'Murder', 'Car Jacking', 'Assault'],
                timesArray: ['6 A.M', '9 P.M', '12 A.M']
            })}>
            </TouchableWithoutFeedback>
            <StatusBar style="auto" />
        </View >

*/
//
// navigation object should have elements lat, long, latDelta, longDelta to pass to the Google Maps API
//
export default function HeatMap({ navigation }) {

    return (
        <MapView
            style={{ flex: 1 }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            initialRegion={{
            latitude: 41.0772,
            longitude: -81.534744,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421}}
    ></MapView>
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