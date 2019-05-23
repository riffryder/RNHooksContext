import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import { AssetsConsumer } from "./AssetsContext";
class News extends Component {
  handleChangeWeight = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <AssetsConsumer>
          {({ assets }) => {
            console.log("ASSETS", assets);
            return this.renderAssets(assets);
          }}
        </AssetsConsumer>
      </View>
    );
  }

  renderAssets(assets) {
    if (!assets) {
      return;
    }

    return assets.map((asset, index) => {
      return (
        <View key={index} style={{ flex: 1, flexDirection: "row" }}>
          <Image
            source={{ uri: asset.imageRef }}
            style={{ height: 32, width: 32 }}
          />
          <Text style={styles.welcome}>{asset.symbol}</Text>
          <Text style={styles.welcome}>{asset.company}</Text>
          <Text style={styles.welcome}>{asset.weight}</Text>
        </View>
      );
    })
  }
}

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

export default News;
