import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";
import {
    StyleSheet,
    Text,
    View,
    Image
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SilentModeContent({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.header}>In Silent Mode</Text>
            </View>
            <View style={styles.nextButton}>
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
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        marginBottom: 50,
        backgroundColor: '#58CFCF',
        borderRadius: 200,
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
