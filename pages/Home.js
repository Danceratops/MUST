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

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.header}>M.U.S.T</Text>
        <Text style={styles.subheader}>Mobile Urban Safety Tracker</Text>
      </View>
      <Logo logoType="fullColor" />
      <Text style={styles.paragraphs}>
        Because the world is dangerous, you need someone to watch your back.
      </Text>
      <View style={styles.nextButton}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('SignUp')}>
          <Image source={require("../assets/next.png")} />
        </TouchableWithoutFeedback>
        <Text>Feel Safe Today</Text>
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Have an account already? </Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}><Text style={styles.bottomTextLink}>Login Here</Text></TouchableWithoutFeedback>
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
  },

  bottomTextLink: {
    fontSize: 11,
    color: "#4D2D52"
  }
});
