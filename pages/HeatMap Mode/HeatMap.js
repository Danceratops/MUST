import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableWithoutFeedback
} from "react-native";

export default function HeatMap({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Location', {
                title: 'Texas',
                rating: 23,
                crimesArray: ['Theft', 'Murder', 'Car Jacking', 'Assault'],
                timesArray: ['6 A.M', '9 P.M', '12 A.M']
            })}>
                <Image source={require("../../assets/placeholderMap.png")} />
            </TouchableWithoutFeedback>
            <StatusBar style="auto" />
        </View >
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
});
