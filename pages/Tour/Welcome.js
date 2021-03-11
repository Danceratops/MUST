import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
} from "react-native";

export default function Welcome({ route, navigation }) {
    const { name } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.header}>M.U.S.T</Text>
                <Text style={styles.subheader}>Mobile Urban Safety Tracker</Text>
            </View>
            <View style={styles.paragraphContainer}>
                <Text style={styles.subheader}>Welcome, {name}</Text>
                <Text style={styles.paragraphs}>
                    With M.U.S.T in your hands, you have access to crime data across the nation.
                    First, let us tell you what your new tool can do.
                </Text>
            </View>
            <View style={styles.mapButton}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('TourHeat')}>
                    <Image source={require("../../assets/map.png")} />
                </TouchableWithoutFeedback>
                <Text>Get Started</Text>
            </View>
            <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>Skip Tour </Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('InfoBuddy')}><Text style={styles.bottomTextLink}>Here</Text></TouchableWithoutFeedback>
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

    bottomTextContainer: {
        flexDirection: 'row'
    },

    paragraphContainer: {
        alignItems: 'center'
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

    mapButton: {
        justifyContent: "flex-start",
        alignItems: "center",
    },

    bottomTextLink: {
        fontSize: 11,
        color: "#4D2D52"
    }
});