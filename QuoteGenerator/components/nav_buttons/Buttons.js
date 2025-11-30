import { View, Text, StyleSheet, Pressable, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";

const styles = StyleSheet.create({
  btn_txt: {
    color: "white",
    fontSize: 16,
    fontWeight: 600,
  },
  nav: {
    flexDirection: "row",
    gap: 35,
  },
});

const NavigationLink = (props) => {
  const hover = useRef(new Animated.Value(0)).current;

  const changeColor = (toValue) => {
    Animated.timing(hover, {
      toValue,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const txtColor = hover.interpolate({
    inputRange: [0, 1],
    outputRange: ["white", "#8B5CF6"],
  });

  return (
    <Pressable
      onPress={props.onPress}
      // For pc
      onHoverIn={() => changeColor(1)}
      onHoverOut={() => changeColor(0)}
      // For movile
      onPressIn={() => changeColor(1)}
      onPressOut={() => changeColor(0)}
    >
      <Animated.Text style={[styles.btn_txt, { color: txtColor }]}>
        {props.Text}
      </Animated.Text>
    </Pressable>
  );
};

const HomeButton = ({ navigation }) => {
  return (
    <NavigationLink Text="Home" onPress={() => navigation.navigate("Home")} />
  );
};

const AboutButton = ({ navigation }) => {
  return (
    <NavigationLink Text="About" onPress={() => navigation.navigate("About")} />
  );
};

const FavouriteButton = ({ navigation }) => {
  return (
    <NavigationLink
      Text="Favourite"
      onPress={() => navigation.navigate("Favourite")}
    />
  );
};

const Buttons = ({ navigation }) => {
  return (
    <View style={styles.nav}>
      <HomeButton navigation={navigation} />
      <AboutButton navigation={navigation} />
      <FavouriteButton navigation={navigation} />
    </View>
  );
};

export default Buttons;
