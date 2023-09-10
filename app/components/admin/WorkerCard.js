import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../constants/theme";

const WorkerCard = ({ name = "name", onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <Image
        resizeMode="contain"
        source={require("../../../assets/icons/adminIcons/driver.png")}
        style={{ width: 60, height: 60 }}
      />
      <Text style={styles.title}>{name}</Text>
      <MaterialCommunityIcons
        name="chevron-right"
        color={COLORS.primary}
        size={25}
      />
    </TouchableOpacity>
  );
};

export default WorkerCard;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.medium,
    marginLeft: 20,
    flex: 1,
  },
});
