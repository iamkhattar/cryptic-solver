import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import BottomTab from "./navigation/tab-navigator/BottomTab";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <BottomTab />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343a40"
  }
});
