import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Solution = ({ route, navigation }) => {
  const { clue, length, solutions } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.clueWrapper}>
        <Text style={styles.clueText}>
          {clue} ({length})
        </Text>
      </View>
      <View style={styles.solutionWrapper}>
        <ScrollView style={styles.solutionInnerWrapper}>
          {solutions.map(currentSolution => (
            <View
              key={currentSolution.solution}
              style={styles.solutionElementWrapper}
            >
              <View style={styles.solutionTop}>
                <View style={styles.solutionTopInner}>
                  <Text style={styles.solutionElementSolution}>
                    {currentSolution.solution}
                  </Text>
                </View>
                <View style={styles.solutionTopInnerPercentage}>
                  <Text style={styles.solutionElementPercentage}>
                    {currentSolution.percentage}
                  </Text>
                </View>
              </View>

              <View style={styles.solutionBottom}>
                <Text>{currentSolution.reason}</Text>
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
    backgroundColor: "#343a40",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  clueWrapper: {
    flex: 2,
    backgroundColor: "#fa4251",
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    margin: 5
  },
  clueText: {
    color: "white",
    fontSize: 20
  },
  solutionWrapper: {
    flex: 18,
    alignItems: "center",
    width: "95%",
    margin: 5
  },
  solutionInnerWrapper: {
    height: "100%",
    width: "100%"
  },
  solutionElementWrapper: {
    backgroundColor: "white",
    flex: 1,
    marginTop: 7,
    width: "100%",
    justifyContent: "center",
    padding: 7
  },
  solutionElementSolution: {
    fontSize: 35,
    fontWeight: "bold"
  },
  solutionElementPercentage: {
    fontSize: 35
  },
  solutionTop: { flex: 2, flexDirection: "row" },
  solutionBottom: { flex: 3 },
  solutionTopInner: { flex: 8, alignItems: "center", flexDirection: "row" },
  solutionTopInnerPercentage: {
    flex: 3,
    flexDirection: "row-reverse",
    alignItems: "center"
  }
});

export default Solution;
