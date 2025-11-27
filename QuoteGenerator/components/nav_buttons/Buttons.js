import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

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

const HomeButton = ({ navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("Home")}>
      <Text style={styles.btn_txt}>Home</Text>
    </Pressable>
  );
};

const AboutButton = ({ navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("About")}>
      <Text style={styles.btn_txt}>About</Text>
    </Pressable>
  );
};

const FavouriteButton = ({ navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("Favourite")}>
      <Text style={styles.btn_txt}>Favourite</Text>
    </Pressable>
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
