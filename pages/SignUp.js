import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback } from "react-native";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.header}>M.U.S.T</Text>
        <Text style={styles.subheader}>Mobile Urban Safety Tracker</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxText}>Sign Up</Text>
        <TextInput
          style={styles.input}
          autoCompleteType="name"
          placeholder="Name"
          returnKeyType='go'
        />
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
          returnKeyType='next'
        />
        <TextInput
          style={styles.input}
          autoCompleteType="password"
          placeholder="Confirm Password"
          returnKeyType='done'
        />
        <Button
          color="#2E839A"
          title="Sign Up Now"
          onPress={() => {
            console.log("Signing Up");
          }}
          accessibilityLabel="Sign up for an account."
        />
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Have an account already? </Text>
        <TouchableWithoutFeedback onPress={() => console.log("Moving to login")}><Text style={styles.bottomTextLink}>Login Here</Text></TouchableWithoutFeedback>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    paddingTop: 15,
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
    height: 450,
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
