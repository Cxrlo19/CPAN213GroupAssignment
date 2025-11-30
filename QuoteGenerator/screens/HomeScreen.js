import { getRandomQuote } from "../utils/api";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

//Waiting for the styles from Dustin
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
  quoteText: {
    fontSize: 24,
    fontStyle: "italic",
    textAlign: "center",
    color: "#FFF",
    marginBottom: 20,
  },
});

const HomeScreenComp = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const data = await getRandomQuote();
        if (data) {
          setQuote(`${data.content} - ${data.author}`);
        }
      } catch (error) {
        console.error("Error in fetchQuote:", error);
      } finally {
        setLoading(false);
      }
    }, 1500);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <LinearGradient
      colors={["#38F8EA", "#8B5CF6", "#71589D"]}
      style={styles.container}
    >
      {loading ? (
        <ActivityIndicator size="large" color={"#007AFF"} />
      ) : (
        <Text style={styles.quoteText}>{quote}</Text>
      )}
      {/* Waiting for the button from dustin */}
    </LinearGradient>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Header navigation={navigation} />
      <HomeScreenComp navigation={navigation} />
      <Footer />
    </View>
  );
};

export default HomeScreen;
