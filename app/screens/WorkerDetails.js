import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import AppHeader from "../components/AppHeader";
import { COLORS, FONTS } from "../constants/theme";
import CustomSwitch from "../components/CustomSwitch";

const WorkerDetails = ({ navigation, route }) => {
  const worker = route.params;
  console.log(worker);

  const sendEmail = () => {
    console.log("send email");
  };
  const callWorker = () => {
    console.log("call worker");
  };

  const handleChangeAdmin = () => {
    if (worker.isAdmin) {
      console.log("make admin false");
      Alert.alert(
        "Are you sure you want to remove admin rights from this worker?",
        "",
        [
          {
            text: "Yes",
            onPress: () => console.log("Yes, remove admin rights"),
          },
          {
            text: "No",
            onPress: () => console.log("No, do not remove admin rights"),
          },
        ]
      );
    } else {
      console.log("make admin true");
      Alert.alert(
        "Are you sure you want to give admin rights to this worker?",
        "",
        [
          {
            text: "Yes",
            onPress: () => console.log("Yes, give admin rights"),
          },
          {
            text: "No",
            onPress: () => console.log("No, do not give admin rights"),
          },
        ]
      );
    }
  };
  return (
    <AppScreen style={{ backgroundColor: COLORS.bg }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppHeader isGoBack={true} onPress={() => navigation.goBack()} />
        <Text style={styles.screenTitle}>Worker Details</Text>
        <View style={styles.mainContainer}>
          <Image
            resizeMode="contain"
            style={{ width: 130, height: 130, alignSelf: "center" }}
            source={require("../../assets/icons/adminIcons/driver.png")}
          />
          <Text style={styles.name}>{worker.name}</Text>

          <View style={{ padding: 15 }}>
            <CustomSwitch
              label="Is an Admin"
              isEnabled={worker.isAdmin}
              onChangeValue={handleChangeAdmin}
            />
          </View>

          <View style={styles.btns}>
            <TouchableOpacity onPress={sendEmail} style={styles.innerRow}>
              <Image
                source={require("../../assets/icons/adminIcons/mail.png")}
                style={styles.contactBtnIcon}
              />
              <Text style={styles.this}>Send Mail to Worker</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={callWorker} style={styles.innerRow}>
              <Image
                source={require("../../assets/icons/adminIcons/phone.png")}
                style={styles.contactBtnIcon}
              />
              <Text style={styles.this}>Call Worker</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </AppScreen>
  );
};

export default WorkerDetails;

const styles = StyleSheet.create({
  btns: {
    marginTop: 30,
    justifyContent: "space-around",
  },

  contactBtnIcon: {
    width: 50,
    height: 50,
  },
  innerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  name: {
    fontSize: 24,
    fontFamily: FONTS.semiBold,
    textAlign: "center",
    marginVertical: 10,
  },
  screenTitle: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 25,
    fontFamily: FONTS.semiBold,
  },
  emai: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
  },
  this: {
    fontSize: 18,
    fontFamily: FONTS.medium,
    marginLeft: 20,
  },
});
