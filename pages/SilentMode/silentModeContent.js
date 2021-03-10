import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";
import {
    StyleSheet,
    Text,
    View,
    Image
} from "react-native";

export default function SilentModeContent({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.header}>In Silent Mode</Text>
            </View>
            {/* animate this */}
            <View style={styles.nextButton}>
                <Image style={styles.innerCircle} source={require("../../assets/SilentModeLogo.png")} />
            </View>
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
        justifyContent: 'flex-start',
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
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        backgroundColor: '#58CFCF',
        borderRadius: 200,
        width: 350,
        height: 350
    },

    innerCircle: {

    }
});
