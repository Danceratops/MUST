import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
} from "react-native";

import Logo from "../components/Logo";

export default function Exit({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.header}>M.U.S.T</Text>
                <Text style={styles.subheader}>Mobile Urban Safety Tracker</Text>
            </View>
            <Logo logoType="fullColor" />
            <Text style={styles.paragraphs}>
                We hope you got there safe. Please take the time to let us know how we did with your trip today.      </Text>
            <View style={styles.nextButton}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Feedback')}>
                    <Image source={require("../assets/next.png")} />
                </TouchableWithoutFeedback>
                <Text>Leave Us FeedBack</Text>
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

    nextButton: {
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 100
    },

    bottomTextLink: {
        fontSize: 11,
        color: "#4D2D52"
    }
});
