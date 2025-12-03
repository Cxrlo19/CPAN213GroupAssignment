import { getRandomQuote } from "../utils/api";
import React, { useEffect, useState } from "react";
// New imports and style -Noah
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet,
  Modal,
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
  //Noah styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 14,
    marginBottom: 20,
  },
  modalButtonsRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  //
});

const HomeScreenComp = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [savedQuotes, setSavedQuotes] = useState([]);

  // Noah: safer version that will ALWAYS show something
  const fetchQuote = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const data = await getRandomQuote();
        if (data) {
          setQuote(`${data.content} - ${data.author}`);
        } else {
          setQuote("Could not load a quote right now.");
        }
      } catch (error) {
        console.error("Error in fetchQuote:", error);
        setQuote("Could not load a quote right now.");
      } finally {
        setLoading(false);
      }
    }, 1500);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  //State + handlers NOAH
  const handleSavePress = () => {
    if (!quote) return;
    setShowSaveModal(true);
  };

  const confirmSaveQuote = () => {
    setSavedQuotes((prev) => [...prev, quote]);
    setShowSaveModal(false);
  };

  const cancelSaveQuote = () => {
    setShowSaveModal(false);
  };

  return (
    <>
      <LinearGradient
        colors={["#38F8EA", "#8B5CF6", "#71589D"]}
        style={styles.container}
      >
        {loading ? (
          <ActivityIndicator size="large" color={"#007AFF"} />
        ) : (
          // save button + modal noah
          <>
            <Text style={styles.quoteText}>{quote}</Text>
            {quote ? (
              <Button title="Save Quote" onPress={handleSavePress} />
            ) : null}
          </>
        )}
      </LinearGradient>

      {/* Modal NOAH */}
      <Modal
        visible={showSaveModal}
        transparent={true}
        animationType="fade"
        onRequestClose={cancelSaveQuote}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Save this quote?</Text>
            <Text style={styles.modalText}>
              You wanna add this quote to your saved list?
            </Text>
            <View style={styles.modalButtonsRow}>
              <Button title="Cancel" onPress={cancelSaveQuote} />
              <Button title="Save" onPress={confirmSaveQuote} />
            </View>
          </View>
        </View>
      </Modal>
    </>
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
