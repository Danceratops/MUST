import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Logo from "./components/Logo";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>M.U.S.T</Text>
      <Text style={styles.subheader}>Mobile Urban Safety Tracker</Text>
      <Logo logoType="fullColor" />
      <Text style={styles.paragraphs}>
        Because the world is dangerous, you need someone to watch your back.
      </Text>
      {/* make this a component */}
      <View style={styles.nextButton}>
        <Image source={require("./assets/next.png")} />
        <Text>Feel Safe Today</Text>
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
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});
