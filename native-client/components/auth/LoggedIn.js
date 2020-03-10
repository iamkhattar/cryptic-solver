import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  Button,
  AsyncStorage
} from "react-native";

import { StackActions } from "@react-navigation/native";
import axios from "axios";

const LoggedIn = ({ route, navigation }) => {
  const { token } = route.params;

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    navigation.dispatch(StackActions.replace("Login"));
  };

  const handleHistory = async () => {
    //Get Users Details
    try {
      var config = {
        headers: {
          "x-auth-token": token
        }
      };
      const res = await axios.get(
        "https://devweb2019.cis.strath.ac.uk/vib16216-nodejs/api/auth",
        config
      );
      const history = res.data.history;
      navigation.navigate("History", { history });
    } catch (err) {
      await AsyncStorage.removeItem("token");
      navigation.navigate("Login");
    }
  };

  const isTokenPresent = async () => {
    if (token == "") {
      await AsyncStorage.removeItem("token");
      navigation.navigate("Login");
    }
  };

  useEffect(() => {
    isTokenPresent();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.logoWrapper}>
          <Image
            style={styles.logoStyle}
            source={require("../../assets/logo.png")}
          />
        </View>
        <View style={styles.formWrapper}>
          <TouchableOpacity
            style={styles.touchableOpacityStyle}
            onPress={handleHistory}
          >
            <Text style={styles.searchTextStyle}>PAST SEARCHES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacityStyle}
            onPress={handleLogout}
          >
            <Text style={styles.searchTextStyle}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#343a40",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  contentWrapper: {
    flex: 1,
    height: "100%"
  },
  logoWrapper: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  logoStyle: { flex: 1, width: "90%", height: "90%", resizeMode: "contain" },
  formWrapper: { flex: 3, alignItems: "center", justifyContent: "center" },
  touchableOpacityStyle: {
    backgroundColor: "#fa4251",
    width: "90%",
    height: "20%",
    margin: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  searchTextStyle: { fontSize: 20, fontWeight: "bold", color: "white" }
});

export default LoggedIn;
