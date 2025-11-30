import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  footer: {
    padding: 15,
    flexDirection: "row",
    backgroundColor: "#478498ff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: 600,
    color: "white",
  },
});

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.title}>© 2025 Gen Quotes. All Rights Reserved</Text>
    </View>
  );
};

export default Footer;
