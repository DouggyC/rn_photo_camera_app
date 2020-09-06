import * as React from "react";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StatusBar } from "expo-status-bar";

// COMPONENTS
import Layout from "./components/Layout";
import CameraScreen from "./components/CameraScreen";
import CameraPictureDetails from "./components/CameraPictureDetails";
import ViewImageScreen from "./components/ViewImageScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Layout">
        <Stack.Screen name="Layout" component={Layout} />
        <Stack.Screen name="Camera Screen" component={CameraScreen} />
        <Stack.Screen name="View Image Screen" component={ViewImageScreen} />
        <Stack.Screen name="Camera Picture Details" component={CameraPictureDetails} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

