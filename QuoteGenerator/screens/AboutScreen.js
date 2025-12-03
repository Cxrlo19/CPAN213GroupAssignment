import React from "react";
import { LinearGradient } from "expo-linear-gradient";
// imports and styles Noah
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
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
  about: {
    backgroundColor: "#fff",
    boxShadow: "-3px 4px 14px -2px rgba(0, 0, 0, 0.65)",
    alignItems: "center",
    width: "80%",
    height: 250,
    borderRadius: 8,
  },
  titleBox: {
    backgroundColor: "#478498ff",
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    width: "100%",
    padding: 20,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
  aboutIntroBox: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  aboutText: {
    fontWeight: 600,
  },
  // styles NOAH
  infoButton: {
    marginTop: 10,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#007AFF",
  },
  infoButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});

const AboutScreenComp = () => {
  //app NOAH
  const showAppInfo = () => {
    Alert.alert(
      "App Info",
      "Gen Quotes / Quote Generator\nSimple quote app for CPAN 213.\nStudent: Noah Park"
    );
  };

  return (
    <LinearGradient
      colors={["#38F8EA", "#8B5CF6", "#71589D"]}
      style={styles.container}
    >
      <View style={styles.about}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>About Gen Quotes/Quote Generator</Text>
        </View>
        <View style={styles.aboutIntroBox}>
          <Text style={styles.aboutText}>
            This app uses an API to fetch quotes and grab a random quote
            everytime the user wishes to press the button to display said quote.
          </Text>
        </View>
        <Pressable style={styles.infoButton} onPress={showAppInfo}>
          <Text style={styles.infoButtonText}>App Info</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Header navigation={navigation} />
      <AboutScreenComp navigation={navigation} />
      <Footer />
    </View>
  );
};

export default AboutScreen;
