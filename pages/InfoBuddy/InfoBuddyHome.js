import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";
import { Slider } from 'react-native-elements';

export default function InfoBuddy({ navigation }) {
    const [sliderValue, setSliderValue] = useState(5);
    const [buttonFlick, setButtonFlick] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.header}>How Far Out Should We Search?</Text>
            </View>
            <View style={styles.rating}>
                <Text style={styles.ratingText}>{sliderValue}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                <Slider
                    value={sliderValue}
                    onValueChange={value => setSliderValue(value)}
                    step={1}
                    maximumValue={50}
                    minimumValue={1}
                    allowTouchTrack={true}
                    minimumTrackTintColor='#2E839A'
                    maximumTrackTintColor='#b7b7b7'
                    thumbStyle={styles.thumb}
                    style={{ width: 300 }}
                />
            </View>
            <View styles={styles.buttonContainer}>
                <TouchableOpacity onPress={() => { setButtonFlick(true); }} activeOpacity={0.95} style={buttonFlick ? styles.active : styles.inactive}>
                    <Text style={buttonFlick ? styles.activeText : styles.inactiveText} >MI</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setButtonFlick(false); }} activeOpacity={0.95} style={buttonFlick ? styles.inactive : styles.active}>
                    <Text style={buttonFlick ? styles.inactiveText : styles.activeText} >KM</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Location', {
                title: sliderValue + ' Miles Out',
                rating: 23,
                crimesArray: ['Theft', 'Assault'],
                timesArray: ['5 A.M', '7 P.M', '3 A.M']
            })} activeOpacity={0.95} style={styles.button}>
                <Text style={styles.buttonText} >Show Me The Info</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
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
        paddingRight: 10
    },

    header: {
        color: "#000",
        fontSize: 56,
        textAlign: 'center'
    },

    rating: {
        borderWidth: 1,
        borderColor: '#4D2D52',
        borderRadius: 100,
        backgroundColor: '#fff',
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 5
                },
                shadowOpacity: 0.8,
                shadowRadius: 100
            },
            android: {
                elevation: 12
            }
        })
    },

    ratingText: {
        fontSize: 72,
        color: '#4D2D52'
    },

    thumb: {
        backgroundColor: '#fff',
        borderWidth: 1
    },

    buttonContainer: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    active: {
        backgroundColor: '#2E839A',
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    activeText: {
        fontSize: 24,
        color: '#fff'
    },

    inactive: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#2E839A',
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },

    inactiveText: {
        fontSize: 24,
        color: '#2E839A'
    },

    button: {
        backgroundColor: '#2E839A',
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20
    },

    buttonText: {
        color: '#fff',
        fontSize: 18
    }
});
