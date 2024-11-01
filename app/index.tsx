import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import DrawerNavigator from "./DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer independent>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
