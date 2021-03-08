import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>M.U.S.T</Text>
      <Text style={styles.subheader}>Mobile Urban Safety Tracker</Text>
      <View style={styles.box}>
        <Text style={styles.boxText}>Sign Up</Text>
        <TextInput
          style={styles.input}
          autoCompleteType="name"
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          autoCompleteType="email"
          keyboardType="email-address"
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          autoCompleteType="password"
          placeholder="Password"
        />
        <TextInput
          style={styles.input}
          autoCompleteType="password"
          placeholder="Confirm Password"
        />
        <Button
          color="#2E839A"
          title="Sign Up Now"
          onPress={() => {
            console.log("Signing In");
          }}
          accessibilityLabel="Sign up for an account."
        />
      </View>
      <Text style={styles.bottomText}>Have an account already? Login Here</Text>
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
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingRight: 10,
  },

  box: {
    borderColor: "#4D2D52",
    backgroundColor: "#ffffff",
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
    borderColor: "#4D2D52",
    backgroundColor: "#F6F6F6",
  },

  bottomText: {
    fontSize: 11,
  },
});
