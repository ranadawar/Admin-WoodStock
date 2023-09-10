import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    EncodeSansBold: require("./assets/fonts/Poppins-Bold.ttf"),
    EncodeSansBoldItalic: require("./assets/fonts/Poppins-BoldItalic.ttf"),
    EncodeSansSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    EncodeSansSemiBoldItalic: require("./assets/fonts/Poppins-SemiBoldItalic.ttf"),
    EncodeSansMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    EncodeSansMediumItalic: require("./assets/fonts/Poppins-MediumItalic.ttf"),
    EncodeSansRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    EncodeSansRegularItalic: require("./assets/fonts/Poppins-Italic.ttf"),
    EncodeSansLight: require("./assets/fonts/Poppins-Light.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
