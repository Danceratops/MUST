import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from "react-native";

export default function TourHeatMap({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.header}>M.U.S.T</Text>
                <Text style={styles.subheader}>Mobile Urban Safety Tracker</Text>
            </View>
            <View style={styles.paragraphContainer}>
                <Text style={styles.subheader}>HeatMap Mode</Text>
                <Text style={styles.paragraphs}>
                    With HeatMap Mode, you have access to all kinds of useful information.
                    Interact with the map to see various crime-rate statistics.
            </Text>
            </View>
            <View style={styles.tourRow}>
                <Image style={styles.imageRow} source={require("../../assets/circleHeat.png")} />
                <View style={styles.arrowRow}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('TourInfo')}>
                        <Image source={require("../../assets/arrowRight.png")} />
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 50,
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
        right: 0
    },

    bottomText: {
        fontSize: 11,
    },

    bottomTextLink: {
        fontSize: 11,
        color: "#4D2D52"
    }
});
