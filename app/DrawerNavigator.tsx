import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import BottomTabNav from "./BottomTabNav"; // Importa o BottomTabNav
import { createStackNavigator } from "@react-navigation/stack";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="HomeTabs">
      <Drawer.Screen
        name="HomeTabs"
        component={BottomTabNav}
        options={{
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={BottomTabNav}
        options={{
          title: "Profile",
        }}
        initialParams={{ screen: "Profile" }}
      />
    </Drawer.Navigator>
  );
}
