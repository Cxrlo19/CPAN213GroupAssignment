import { getRandomQuote } from "../utils/api";
import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
  quoteText: {
    fontSize: 24,
    fontStyle: "italic",
    textAlign: "center",
    color: "#FFF",
    marginBottom: 20,
  },

  quoteButton: {
    backgroundColor: "#1F2937",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 5,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
});

const HomeScreenComp = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  const spring = useRef(new Animated.Value(0)).current;

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

  const springAnim = () => {
    Animated.spring(spring, {
      toValue: 1,
      friction: 5,
      velocity: 35,
      useNativeDriver: true,
    }).start();
  };

  const springStyle = {
    transform: [
      {
        translateY: spring.interpolate({
          inputRange: [0, 1],
          outputRange: [35, 0],
        }),
      },
    ],
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  useEffect(() => {
    spring.setValue(0);
    springAnim();
  });

  return (
    <LinearGradient
      colors={["#38F8EA", "#8B5CF6", "#71589D"]}
      style={styles.container}
    >
      {loading ? (
        <ActivityIndicator size="large" color={"#007AFF"} />
      ) : (
        <Animated.Text style={[styles.quoteText, springStyle]}>
          {quote}
        </Animated.Text>
      )}

      <TouchableOpacity style={styles.quoteButton} onPress={fetchQuote}>
        <Text style={styles.buttonText}>New Quote</Text>
      </TouchableOpacity>
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
