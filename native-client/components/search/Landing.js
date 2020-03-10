import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import axios from "axios";

const Landing = ({ navigation }) => {
  const [clue, setClue] = useState("");
  const [length, setLength] = useState("");
  const [error, setError] = useState(false);
  const [errorString, setErrorString] = useState("");
  const [searching, setSearching] = useState(false);

  const changeClue = val => {
    setClue(val);
  };

  const changeLength = val => {
    setLength(val);
  };

  const isUserLoggedIn = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token != null) return token;
    return false;
  };

  const saveSearch = async token => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token
      }
    };

    const body = JSON.stringify({ clue, length });

    try {
      const res = await axios.post(
        "https://devweb2019.cis.strath.ac.uk/vib16216-nodejs/api/history",
        body,
        config
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async () => {
    if (clue == "") {
      setErrorString("Please include a Cryptic Clue");
      setError(true);
      setTimeout(() => setError(false), 3000);
    } else if (length == "") {
      setErrorString("Length cannot be empty");
      setError(true);
      setTimeout(() => setError(false), 3000);
    } else if (isNaN(length)) {
      setErrorString("Length must be a number");
      setError(true);
      setTimeout(() => setError(false), 3000);
    } else if (clue != "" && length != "") {
      setSearching(true);

      var userToken = await isUserLoggedIn();

      if (userToken != false) {
        //Save the search
        await saveSearch(userToken);
      }

      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
      };
      const body = JSON.stringify({ clue, length });

      try {
        const res = await axios.post(
          "https://devweb2019.cis.strath.ac.uk/vib16216-nodejs/api/solve",
          body,
          config
        );

        setSearching(false);

        navigation.navigate("Solution", {
          clue: clue,
          length: length,
          solutions: res.data
        });
      } catch (err) {
        setSearching(false);
        setErrorString("Server Error! Try again later.");
        console.log(err);
        setError(true);
        setTimeout(() => setError(false), 3000);
      }
    }
  };

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
          {error && (
            <TouchableOpacity disabled={true} style={styles.errorWrapper}>
              <Text style={styles.searchTextStyle}>{errorString}</Text>
            </TouchableOpacity>
          )}
          <TextInput
            style={styles.textInputStyle}
            onChangeText={changeClue}
            placeholder="Cryptic Clue"
          ></TextInput>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={changeLength}
            placeholder="Length"
          ></TextInput>
          {!searching && (
            <TouchableOpacity
              style={styles.touchableOpacityStyle}
              onPress={e => onSubmit(e)}
            >
              <Text style={styles.searchTextStyle}>SEARCH</Text>
            </TouchableOpacity>
          )}
          {searching && (
            <TouchableOpacity
              disabled={true}
              style={styles.touchableOpacityStyle}
            >
              <ActivityIndicator size="large" color="white" />
            </TouchableOpacity>
          )}
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
  textInputStyle: {
    backgroundColor: "white",
    width: "90%",
    height: "12%",
    paddingLeft: 10,
    margin: 5
  },
  touchableOpacityStyle: {
    backgroundColor: "#fa4251",
    width: "90%",
    height: "12%",
    margin: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  errorWrapper: {
    backgroundColor: "#f12c3f",
    width: "90%",
    height: "12%",
    margin: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  errorText: {},
  searchTextStyle: { fontSize: 20, fontWeight: "bold", color: "white" },
  logoStyle: { flex: 1, width: "90%", height: "90%", resizeMode: "contain" },
  formWrapper: { flex: 3, alignItems: "center", justifyContent: "center" }
});

export default Landing;
