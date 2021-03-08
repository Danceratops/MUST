import React from "react";
import { View, Image } from "react-native";

export default function Logo({ logoType }) {
  if (logoType === "fullColor") {
    return (
      <View>
        <Image source={require("../assets/FullColorLogo.png")} />
      </View>
    );
  } else if (logoType === "whiteColor") {
    return (
      <View>
        <Image source={require("../assets/WhiteLogo.png")} />
      </View>
    );
  } else {
    return (
      <View>
        <Image source={require("../assets/FullColorLogo.png")} />
      </View>
    );
  }
}
