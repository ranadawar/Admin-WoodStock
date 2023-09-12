import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";

import { COLORS, FONTS } from "../constants/theme";
import AppButton from "../components/AppButton";
import { LinearGradient } from "expo-linear-gradient";

const WelcomeScreen = ({ navigation }) => {
  const onPressLogin = () => {
    console.log("pressed");
  };
  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <Image
            resizeMode="cover"
            source={require("../../assets/icons/real.png")}
            style={styles.image}
          />
          <Text style={styles.title}>Admin Wood Stock App</Text>
        </View>

        <View style={styles.btnContainer}>
          <AppButton
            onPress={() => navigation.navigate("login")}
            style={styles.btn1}
            title="Admin Login"
          />
        </View>
      </View>
    </AppScreen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
  },
  btn1: {
    backgroundColor: COLORS.primary,
  },
  btnContainer: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  image: {
    width: 225,
    height: 350,
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: FONTS.semiBold,
    fontSize: 20,
    marginTop: -70,
  },
});
