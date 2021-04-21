import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback } from "react-native";

import Logo from "../components/Logo";

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.header}>M.U.S.T</Text>
                <Text style={styles.subheader}>Mobile Urban Safety Tracker</Text>
            </View>
            <View style={styles.logoContainer}>
                <Logo logoType="fullColor" />
            </View>
            <View style={styles.box}>
                <Text style={styles.boxText}>Login</Text>
                <TextInput
                    style={styles.input}
                    autoCompleteType="email"
                    keyboardType="email-address"
                    placeholder="Email"
                    returnKeyType='next'
                />
                <TextInput
                    style={styles.input}
                    autoCompleteType="password"
                    placeholder="Password"
                    returnKeyType='done'
                />
                <Button
                    color="#2E839A"
                    title="Log In"
                    onPress={() => {
                        navigation.navigate('Welcome');
                    }}
                    accessibilityLabel="Log in to your account."
                />
            </View>
            <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>Don't have an account? </Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('SignUp')}><Text style={styles.bottomTextLink}>Make One Here</Text></TouchableWithoutFeedback>
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

    box: {
        borderWidth: 1,
        borderColor: "#4D2D52",
        backgroundColor: "#ffffff",
        width: 300,
        height: 300,
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center'
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

    input: {
        borderWidth: 1,
        borderColor: "#4D2D52",
        backgroundColor: "#F6F6F6",
        alignSelf: 'stretch',
        height: 40,
        paddingLeft: 10
    },

    bottomText: {
        fontSize: 11,
    },

    bottomTextLink: {
        fontSize: 11,
        color: "#4D2D52"
    }
});