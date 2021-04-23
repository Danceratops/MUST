import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from "react-native";

export default function TourInfoBuddy({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.header}>M.U.S.T</Text>
                <Text style={styles.subheader}>Mobile Urban Safety Tracker</Text>
            </View>
            <View style={styles.paragraphContainer}>
                <Text style={styles.subheader}>Info Buddy</Text>
                <Text style={styles.paragraphs}>
                    Tell the buddy a radius around you to gather information. Info Buddy will update information as you move.
            </Text>
            </View>
            <View style={styles.tourRow}>
                <TouchableWithoutFeedback style={styles.arrowLeft} onPress={() => navigation.navigate('TourHeat')}>
                    <Image source={require("../../assets/arrowLeft.png")} />
                </TouchableWithoutFeedback>
                <Image style={styles.imageRow} source={require("../../assets/circleBuddy.png")} />
                <TouchableWithoutFeedback style={styles.arrowRight} onPress={() => navigation.navigate('TourSilent')}>
                    <Image source={require("../../assets/arrowRight.png")} />
                </TouchableWithoutFeedback>
            </View>
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
        justifyContent: 'space-between',
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

    bottomText: {
        fontSize: 11,
    },

    bottomTextLink: {
        fontSize: 11,
        color: "#4D2D52"
    }
});
