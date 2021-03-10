import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TourSilentMode({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.header}>M.U.S.T</Text>
                <Text style={styles.subheader}>Mobile Urban Safety Tracker</Text>
            </View>
            <View style={styles.paragraphContainer}>
                <Text style={styles.subheader}>Silent Mode</Text>
                <Text style={styles.paragraphs}>
                    Use silent mode in your pocket. You will see a constant color-based update on the screen determined by statistics in the area you are located.
            </Text>
            </View>
            <View style={styles.tourRow}>
                <View style={styles.arrowRow}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('TourInfo')}>
                        <Image source={require("../assets/arrowLeft.png")} />
                    </TouchableWithoutFeedback>
                </View>
                <Image style={styles.imageRow} source={require("../assets/circleSilent.png")} />
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('Home'); }} activeOpacity={0.95} style={styles.button}>
                <Text style={styles.buttonText} >Start Using M.U.S.T Now</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10,
        paddingTop: 50,
        backgroundColor: "#F6F6F6",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
    },

    headingContainer: {
        textAlign: 'center',
        alignItems: 'center'
    },

    paragraphContainer: {
        alignItems: 'center',
        textAlign: 'center'
    },

    tourRow: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    bottomTextContainer: {
        flexDirection: 'row'
    },

    header: {
        color: "#000",
        fontSize: 64,
    },

    subheader: {
        fontSize: 24,
    },

    paragraphs: {
        textAlign: "center",
        fontSize: 18,
    },

    arrowRow: {
        position: 'absolute',
        left: 0
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
