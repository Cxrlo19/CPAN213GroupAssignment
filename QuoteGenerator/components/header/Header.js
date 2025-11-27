import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import NavButtons from "../nav_buttons/Buttons";

const styles = StyleSheet.create({
  header: {
    padding: 15,
    flexDirection: "row",
    backgroundColor: "#478498ff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    color: "white",
  },
  nav: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Gen Quotes</Text>
      <View style={styles.nav}>
        <NavButtons navigation={navigation} />
      </View>
    </View>
  );
};

export default Header;
