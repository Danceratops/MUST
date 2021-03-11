import { StatusBar } from "expo-status-bar";
import React from "react";
import { Icon } from 'react-native-elements';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableWithoutFeedback } from "react-native";

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.header}>M.U.S.T</Text>
                <Text style={styles.subheader}>Mobile Urban Safety Tracker</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.boxText}>Feedback</Text>
                <View style={styles.buttonRows}>
                    <Icon name='thumbs-up' color='#4D2D52' type='feather' raised={true} containerStyle={styles.feedbackContainer} />
                    <Icon name='thumbs-down' color='#4D2D52' type='feather' raised={true} containerStyle={styles.feedbackContainer} />
                </View>
                <TextInput
                    style={styles.input}
                    returnKeyType='done'
                    multiline={true}
                    textAlignVertical='top'
                />
                <Button
                    color="#2E839A"
                    title="Submit Feedback"
                    accessibilityLabel="Submit your feedback."
                />
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
        paddingLeft: 10,
        paddingRight: 10,
    },

    headingContainer: {
        textAlign: 'center',
        alignItems: 'center'
    },

    box: {
        borderWidth: 1,
        borderColor: "#4D2D52",
        backgroundColor: "#ffffff",
        width: 300,
        height: 500,
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center',
        marginTop: 50
    },

    header: {
        color: "#000",
        fontSize: 64,
    },

    subheader: {
        fontSize: 24,
    },

    boxText: {
        color: "#2E839A",
        fontSize: 28,
    },

    buttonRows: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    feedbackContainer: {
        borderWidth: 1,
        borderColor: '#4D2D52',
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        borderWidth: 1,
        borderColor: "#4D2D52",
        backgroundColor: "#F6F6F6",
        alignSelf: 'stretch',
        height: 250,
        paddingLeft: 10
    }
});