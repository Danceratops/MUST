import React from "react";
import { View, Image } from "react-native";

type LogoProps = {
  logoType: string;
};

export default function Logo({ logoType }: LogoProps) {
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
