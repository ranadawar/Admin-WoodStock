import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants/theme";

const AppButton = ({
  onPress,
  style,
  bg = COLORS.primary,
  title = "Submit",
  textColor = COLORS.white,
}) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, { backgroundColor: bg }]}
      onPress={onPress}
    >
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
    borderRadius: 5,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.white,
  },
});
