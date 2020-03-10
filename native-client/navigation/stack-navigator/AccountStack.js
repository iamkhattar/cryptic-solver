import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";
import LoggedIn from "../../components/auth/LoggedIn";
import History from "../../components/past-searches/History";

const AccountStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="LoggedIn" component={LoggedIn} />
    </Stack.Navigator>
  );
};

export default AccountStack;
