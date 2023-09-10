import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/theme";

const CustomSwitch = ({
  label = "Save card for future use",
  isEnabled,
  onChangeValue,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        trackColor={{ false: COLORS.secondarydark, true: COLORS.primary }}
        thumbColor={isEnabled ? COLORS.pureWhite : COLORS.grayText}
        ios_backgroundColor={COLORS.secondarydark}
        onValueChange={onChangeValue}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.primary,
  },
});

export default CustomSwitch;
