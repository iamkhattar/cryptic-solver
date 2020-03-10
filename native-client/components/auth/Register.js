import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  Text,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import axios from "axios";
import { StackActions } from "@react-navigation/native";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(false);
  const [errorString, setErrorString] = useState("");

  const changeEmail = val => {
    setEmail(val);
  };

  const changePassword = val => {
    setPassword(val);
  };

  const changePassword2 = val => {
    setPassword2(val);
  };

  const createError = string => {
    setErrorString(string);
    setError(true);
    setTimeout(() => setError(false), 3000);
  };

  const setToken = async token => {
    await AsyncStorage.setItem("token", token);
  };

  const handleSubmit = async e => {
    if (email == "") {
      createError("Email can't be empty");
    } else if (password == "") {
      createError("Password can't be empty");
    } else if (password.length < 6) {
      createError("Password less than 6 characters");
    } else if (password != password2) {
      createError("Passwords dont match");
    }
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    };
    const body = JSON.stringify({ email, password });
    try {
      const res = await axios.post(
        "https://devweb2019.cis.strath.ac.uk/vib16216-nodejs/api/users",
        body,
        config
      );

      const token = res.data.token;
      setToken(token);
      console.log("hi");
      navigation.dispatch(StackActions.replace("LoggedIn", { token: token }));
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach(error => {
          setErrorString(error.msg);
          setError(true);
          setTimeout(() => setError(false), 3000);
        });
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardWrapper}
        behavior={Platform.OS === "ios" ? "padding" : null}
        enabled
      >
        <View style={styles.contentWrapper}>
          <View style={styles.logoWrapper}>
            <Image
              style={styles.logoStyle}
              source={require("../../assets/logo.png")}
            />
          </View>
          <View style={styles.formWrapper}>
            <Text style={styles.heading}>Sign up for an account</Text>
            {error && (
              <TouchableOpacity disabled={true} style={styles.errorWrapper}>
                <Text style={styles.searchTextStyle}>{errorString}</Text>
              </TouchableOpacity>
            )}
            <TextInput
              style={styles.textInputStyle}
              placeholder="Email ID"
              onChangeText={changeEmail}
              autoCapitalize="none"
            ></TextInput>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={changePassword}
            ></TextInput>
            <TextInput
              style={styles.textInputStyle}
              secureTextEntry={true}
              placeholder="Repeat Password"
              onChangeText={changePassword2}
            ></TextInput>
            <TouchableOpacity
              style={styles.touchableOpacityStyle}
              onPress={e => handleSubmit(e)}
            >
              <Text style={styles.searchTextStyle}>REGISTER</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registerLinkWrapper}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.registerLinkText}>
                Already a User? Login Here.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
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
  keyboardWrapper: { flex: 1 },
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
  searchTextStyle: { fontSize: 20, fontWeight: "bold", color: "white" },
  logoStyle: { flex: 1, width: "90%", height: "90%", resizeMode: "contain" },
  formWrapper: { flex: 3, alignItems: "center", justifyContent: "center" },
  registerLinkWrapper: { margin: 10 },
  registerLinkText: {
    color: "white",
    fontWeight: "bold"
  },
  heading: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    margin: 10
  },
  errorWrapper: {
    backgroundColor: "#f12c3f",
    width: "90%",
    height: "12%",
    margin: 5,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Register;
