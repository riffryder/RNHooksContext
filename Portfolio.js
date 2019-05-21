import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import useCustom from "./customHook";

const Home = () => {
  const [globalState, setGlobalState] = useCustom();

  const addPortfolioValue = () => {
    const newPortfolioValue = globalState.portfolioValue + 100
    const newRank = globalState.rank - 1
    setGlobalState({ portfolioValue: newPortfolioValue, rank: newRank })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Current Portfolio Value: ${globalState.portfolioValue}
      </Text>
      <Text style={styles.welcome}>
        Percent Change: {globalState.portfolioChange} %
      </Text>
      <Text style={styles.instructions}>Current Rank: {globalState.rank}</Text>
      <TouchableOpacity style={styles.button} onPress={() => addPortfolioValue()}>
        <Text>Add $100 to portfolio</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  button: {
    backgroundColor: "lightblue",
    marginTop: 10,
    padding: 10,
    borderRadius: 10
  }
});

export default Home;
