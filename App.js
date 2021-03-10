import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import TourHeatMap from "./pages/TourHeatMap";
import TourInfoBuddy from "./pages/TourInfoBuddy";
import TourSilentMode from "./pages/TourSilentMode";

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
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} initialParams={{ name: user.name }} />
        <Stack.Screen name="TourHeat" component={TourHeatMap} options={{ headerShown: false }} />
        <Stack.Screen name="TourInfo" component={TourInfoBuddy} options={{ headerShown: false }} />
        <Stack.Screen name="TourSilent" component={TourSilentMode} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
