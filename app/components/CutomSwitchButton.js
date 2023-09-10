import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomSwitchButton = () => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSwitch = () => {
    setIsSelected(!isSelected);
  };

  return (
    <TouchableOpacity
      style={[
        styles.switchButton,
        isSelected ? styles.selectedButton : styles.nonSelectedButton,
      ]}
      onPress={toggleSwitch}
    >
      <Text style={isSelected ? styles.selectedText : styles.nonSelectedText}>
        {isSelected ? "Selected" : "Not Selected"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    margin: 10,
  },
  selectedButton: {
    backgroundColor: "black",
  },
  nonSelectedButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
  },
  selectedText: {
    color: "white",
    fontSize: 16,
  },
  nonSelectedText: {
    color: "black",
    fontSize: 16,
  },
});

export default CustomSwitchButton;
