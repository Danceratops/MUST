import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from 'axios';

import APIController from "../../components/apiController";

const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

const colorOptions = {
    blue: '#58CFCF',
    yellow: '#ffe51c',
    orange: '#ff8519',
    red: '#fc0808'
};

export default function SilentModeContent({ navigation }) {
    const access_token = 'j4qCgATUMWmSlONfiFyX9sHPj1B4mhh6gnernWX5';
    let [url, setUrl] = useState("");
    let [timer, setTimer] = useState(0);
    let [dangerRating, setDangerRating] = useState("#58CFCF");

    function buttonStyle(colorChoice) {
        return {
            backgroundColor: colorChoice
        };
    };

    useInterval(() => {
        setUrl(APIController("silentMode", '5mi'));
        setTimer(1000);

        axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': access_token
            }
        })
            .then(res => {
                if (res.data.total_incidents > 700) {
                    setDangerRating(colorOptions.red);
                } else if (res.data.total_incidents <= 700 && res.data.total_incidents > 350) {
                    setDangerRating(colorOptions.orange);
                } else if (res.data.total_incidents <= 350 && res.data.total_incidents > 100) {
                    setDangerRating(colorOptions.yellow);
                } else {
                    setDangerRating(colorOptions.blue);
                }

                setTimer(60000);
            })
            .catch(err => {
                console.log(err);
            });
    }, timer);


    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.header}>In Silent Mode</Text>
            </View>
            <View style={[styles.nextButton, buttonStyle(dangerRating)]}>
                <Image style={styles.innerCircle} source={require("../../assets/SilentModeLogo.png")} />
            </View>
            <TouchableOpacity onPress={() => { navigation.goBack() }} activeOpacity={0.95} style={styles.button}>
                <Text style={styles.buttonText} >End Silent Mode</Text>
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
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },

    headingContainer: {
        textAlign: 'center',
        alignItems: 'center'
    },

    bottomTextContainer: {
        flexDirection: 'row'
    },

    header: {
        color: "#000",
        fontSize: 64,
        textAlign: 'center'
    },

    bottomText: {
        fontSize: 11,
    },

    nextButton: {
        borderRadius: 200,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        marginBottom: 50,
        width: 350,
        height: 350
    },

    button: {
        backgroundColor: '#2E839A',
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },

    buttonText: {
        color: '#fff',
        fontSize: 18
    }
});
