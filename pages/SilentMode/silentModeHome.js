import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
} from "react-native";

export default function SilentModeHome({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.header}>Enter Silent Mode?</Text>
            </View>
            <View style={styles.nextButton}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('SilentModeContent')}>
                    <Image source={require("../../assets/BigNext.png")} />
                </TouchableWithoutFeedback>
                <Text>Lets Go</Text>
            </View>
            <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>Silent Mode will notify you only if you enter a high crime area.</Text>
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
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 50
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
        justifyContent: "flex-start",
        alignItems: "center",
    }
});
