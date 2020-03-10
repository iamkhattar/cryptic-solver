import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import TabIcon from "./TabIcon";

import HomeStack from "../stack-navigator/HomeStack";
import AccountStack from "../stack-navigator/AccountStack";

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "#343a40",
        inactiveBackgroundColor: "#343a40",
        safeAreaInset: { bottom: "never", top: "always" },
        style: {
          borderTopWidth: 0
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="md-home" />
          )
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStack}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="md-person" />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
