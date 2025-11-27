import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Button, StyleSheet } from "react-native";
import Header from "../components/header/Header";

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});

const AboutScreenComp = () => {
  return (
    <LinearGradient
      colors={["#38F8EA", "#8B5CF6", "#71589D"]}
      style={styles.container}
    ></LinearGradient>
  );
};

const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Header navigation={navigation} />
      <AboutScreenComp navigation={navigation} />
    </View>
  );
};

export default AboutScreen;
