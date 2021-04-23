import "react-native-gesture-handler";
import React from "react";
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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

const ContentStack = createBottomTabNavigator();

function ContentStackScreen() {
  return (
    <ContentStack.Navigator initialRouteName="SilentModeHome">
      <ContentStack.Screen name="HeatMap" component={HeatMap} />
      <ContentStack.Screen name="InfoBuddy" component={InfoBuddy} />
      <ContentStack.Screen name="SilentModeHome" component={SilentModeHome} />
      <ContentStack.Screen name="Feedback" component={Feedback} />
    </ContentStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Exit" component={Exit} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} initialParams={{ name: user.name }} />
        <Stack.Screen name="TourHeat" component={TourHeatMap} options={{ headerShown: false }} />
        <Stack.Screen name="TourInfo" component={TourInfoBuddy} options={{ headerShown: false }} />
        <Stack.Screen name="TourSilent" component={TourSilentMode} options={{ headerShown: false }} />
        <Stack.Screen name="SilentModeContent" component={SilentModeContent} options={{ headerShown: false }} />
        <Stack.Screen name="Location" component={Location} options={{ headerShown: false }} />
        <Stack.Screen name="Content" component={ContentStackScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
