import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet } from "react-native";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

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

const FavouriteScreenComp = () => {
  return (
    <LinearGradient
      colors={["#38F8EA", "#8B5CF6", "#71589D"]}
      style={styles.container}
    ></LinearGradient>
  );
};

const FavouriteScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Header navigation={navigation} />
      <FavouriteScreenComp navigation={navigation} />
      <Footer />
    </View>
  );
};

export default FavouriteScreen;
