import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import Landing from "../../components/search/Landing";
import Solution from "../../components/search/Solution";

const Home = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Landing} />
      <Stack.Screen name="Solution" component={Solution} />
    </Stack.Navigator>
  );
};

export default Home;
