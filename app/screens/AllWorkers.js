import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import LottieView from "lottie-react-native";
import AppScreen from "../components/AppScreen";
import AppHeader from "../components/AppHeader";
import AppTextInput from "../components/AppTextInput";
import WorkerCard from "../components/admin/WorkerCard";
import { COLORS, FONTS } from "../constants/theme";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "rana@gmai.com",
    phone: "03001234567",
    isAdmin: true,
  },
  {
    id: 2,
    //change name email phone and isAdmin to see the changes each time
    name: "Zuljam",
    email: "ahmed@gmail.com",
    phone: "03001234567",
    isAdmin: false,
  },
  {
    id: 3,
    name: "Ali Raza",
    email: "ali@gmail.com",
    phone: "03001234567",
    isAdmin: false,
  },
  {
    id: 4,
    name: "Asad",
    email: "thiss@gmail.com",
    phone: "03001234567",
    isAdmin: false,
  },
];

const AllWorkers = ({ navigation }) => {
  const [allUsers, setAllUsers] = useState(users);

  const handleChange = (text) => {
    console.log(text);
    if (text === "") {
      setAllUsers(users);
      return;
    } else if (text) {
      const filteredUsers = users.filter((user) => {
        return user.name.toLowerCase().includes(text.toLowerCase());
      });
      setAllUsers(filteredUsers);
    } else {
      setAllUsers(users);
    }
  };

  return (
    <AppScreen style={{ backgroundColor: COLORS.bg }}>
      <AppHeader isGoBack={true} onPress={() => navigation.goBack()} />

      <Text style={styles.screenTitle}>All Workers</Text>

      <View style={styles.mainContainer}>
        <AppTextInput
          placeholder="Search User by name"
          onChangeText={(text) => handleChange(text)}
        />

        {allUsers.length > 0 && (
          <View style={styles.userContainer}>
            <FlatList
              data={allUsers}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <WorkerCard
                  onPress={() => navigation.navigate("workerDetails", item)}
                  name={item.name}
                />
              )}
            />
          </View>
        )}
        {!allUsers.length && (
          <View style={styles.noUserContainer}>
            <Text style={styles.noUserText}>No User Found!</Text>
            <View style={styles.animationContainer}>
              <LottieView
                source={require("../../assets/animations/notf.json")}
                autoPlay
                loop
                style={{ width: 250, height: 250 }}
              />
            </View>
          </View>
        )}
      </View>
    </AppScreen>
  );
};

export default AllWorkers;

const styles = StyleSheet.create({
  animationContainer: {
    width: 250,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  noUserContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screenTitle: {
    fontSize: 25,
    fontFamily: FONTS.semiBold,
    textAlign: "center",
    marginBottom: 10,
  },
  userContainer: {
    flex: 1,
  },
});
