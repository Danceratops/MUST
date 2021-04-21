import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import APIController from "./components/apiController";
import Home from "./pages/Home";
import Exit from "./pages/Exit";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Feedback from "./pages/Feedback";
import Welcome from "./pages/Tour/Welcome";
import TourHeatMap from "./pages/Tour/TourHeatMap";
import TourInfoBuddy from "./pages/Tour/TourInfoBuddy";
import TourSilentMode from "./pages/Tour/TourSilentMode";
import SilentModeHome from "./pages/SilentMode/silentModeHome";
import SilentModeContent from "./pages/SilentMode/silentModeContent";
import HeatMap from "./pages/HeatMap Mode/HeatMap";
import Location from "./pages/Location";
import InfoBuddy from "./pages/InfoBuddy/InfoBuddyHome";

const Stack = createStackNavigator();

var user = {
  email: "email@email.com",
  password: "password",
  name: "Danielle Reed"
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Exit" component={Exit} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Feedback" component={Feedback} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} initialParams={{ name: user.name }} />
        <Stack.Screen name="TourHeat" component={TourHeatMap} options={{ headerShown: false }} />
        <Stack.Screen name="TourInfo" component={TourInfoBuddy} options={{ headerShown: false }} />
        <Stack.Screen name="TourSilent" component={TourSilentMode} options={{ headerShown: false }} />
        <Stack.Screen name="SilentModeHome" component={SilentModeHome} />
        <Stack.Screen name="SilentModeContent" component={SilentModeContent} />
        <Stack.Screen name="HeatMap" component={HeatMap} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="InfoBuddy" component={InfoBuddy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
