import React, { useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView, Text, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";

const History = ({ route, navigation }) => {
  const { history } = route.params;
  const [searching, setSearching] = useState(false);

  const handleSearch = async e => {
    setSearching(true);
    const clue = e.clue;
    const length = e.length;
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
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Past Searches</Text>
      </View>
      <View style={styles.contentWrapper}>
        <ScrollView style={styles.contentInnerWrapper}>
          {history.map(currentHistoryItem => (
            <View
              style={styles.historyItemWrapper}
              key={currentHistoryItem._id}
            >
              <View style={styles.historyItemInnerWrapper}>
                <TouchableOpacity
                  disabled={searching}
                  style={styles.historyItemClue}
                  onPress={e => handleSearch(currentHistoryItem)}
                >
                  <Text style={styles.historyItemClueText}>
                    {currentHistoryItem.clue} ({currentHistoryItem.length})
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#343a40",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%"
  },
  headerWrapper: {
    flex: 2,
    backgroundColor: "#fa4251",
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    margin: 5
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  contentWrapper: {
    flex: 18,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    margin: 5
  },
  contentInnerWrapper: {
    height: "100%",
    width: "100%",
    flex: 1
  },
  historyItemWrapper: {
    backgroundColor: "white",
    marginTop: 5,
    flex: 1
  },
  historyItemInnerWrapper: {
    backgroundColor: "white",
    flexDirection: "row",
    flex: 1
  },
  historyItemClue: { flex: 1 },
  historyItemClueText: {
    fontSize: 20,
    padding: 10,
    fontWeight: "bold"
  }
});

export default History;
