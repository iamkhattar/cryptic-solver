import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  AsyncStorage
} from "react-native";
import { StackActions } from "@react-navigation/native";
import axios from "axios";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorString, setErrorString] = useState("");

  const changeEmail = val => {
    setEmail(val);
  };
  const changePassword = val => {
    setPassword(val);
  };

  const onSubmit = async () => {
    //Check if Email is Empty
    if (email == "") {
      setErrorString("Email can't be empty");
      setError(true);
      setTimeout(() => setError(false), 3000);
    } else if (password == "") {
      setErrorString("Password can't be empty");
      setError(true);
      setTimeout(() => setError(false), 3000);
    } else if (password.length < 6) {
      setErrorString("Password less than 6 characters");
      setError(true);
      setTimeout(() => setError(false), 3000);
    }

    //Send Request

    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    };
    const body = JSON.stringify({ email, password });

    //Send Request
    try {
      const res = await axios.post(
        "https://devweb2019.cis.strath.ac.uk/vib16216-nodejs/api/auth",
        body,
        config
      );

      const responseToken = res.data.token;
      setToken(responseToken);
      navigation.dispatch(
        StackActions.replace("LoggedIn", { token: responseToken })
      );
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

  const setToken = async token => {
    await AsyncStorage.setItem("token", token);
  };
  const getToken = async () => {
    var val = await AsyncStorage.getItem("token");
    if (val != null)
      navigation.dispatch(StackActions.replace("LoggedIn", { token: val }));
  };
  useEffect(() => {
    getToken();
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
          <Text style={styles.heading}>Sign into your account</Text>
          {error && (
            <TouchableOpacity disabled={true} style={styles.errorWrapper}>
              <Text style={styles.searchTextStyle}>{errorString}</Text>
            </TouchableOpacity>
          )}
          <TextInput
            style={styles.textInputStyle}
            onChangeText={changeEmail}
            placeholder="Email ID"
            autoCapitalize="none"
          ></TextInput>
          <TextInput
            style={styles.textInputStyle}
            secureTextEntry={true}
            onChangeText={changePassword}
            placeholder="Password"
          ></TextInput>
          <TouchableOpacity
            style={styles.touchableOpacityStyle}
            onPress={e => onSubmit(e)}
          >
            <Text style={styles.searchTextStyle}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerLinkWrapper}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.registerLinkText}>
              Not a user? Register Here.
            </Text>
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
  }
});

export default Login;
