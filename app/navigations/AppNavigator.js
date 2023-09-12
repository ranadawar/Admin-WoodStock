import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminHome from "../screens/AdminHome";
import AddWorker from "../screens/AddWorker";
import AllWorkers from "../screens/AllWorkers";
import WorkerDetails from "../screens/WorkerDetails";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={AdminHome} />
      <Stack.Screen name="addWorker" component={AddWorker} />
      <Stack.Screen name="allWorkers" component={AllWorkers} />
      <Stack.Screen name="workerDetails" component={WorkerDetails} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
