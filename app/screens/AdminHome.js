import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import AppHeader from "../components/AppHeader";
import AdminCard from "../components/admin/AdminCard";
import { COLORS, FONTS } from "../constants/theme";

const AdminHome = ({ navigation }) => {
  return (
    <AppScreen style={{ backgroundColor: COLORS.bg }}>
      <AppHeader />
      <Text style={styles.title}>Admin Dashboard</Text>

      <View style={styles.cardsContainer}>
        <AdminCard
          title="Add Worker"
          source={require("../../assets/icons/adminIcons/add.png")}
          mRight={10}
          onPress={() => navigation.navigate("addWorker")}
        />
        <AdminCard
          title="All Worker"
          source={require("../../assets/icons/adminIcons/manage.png")}
          mLeft={10}
          onPress={() => navigation.navigate("allWorkers")}
        />
      </View>
    </AppScreen>
  );
};

export default AdminHome;

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: 20,
    marginTop: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
});
