import {
  Alert,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import AppScreen from "../components/AppScreen";
import { COLORS, FONTS } from "../constants/theme";
import AppForm from "../components/form/AppForm";

import * as Yup from "yup";
import AppFormField from "../components/form/AppFormField";
import SubmitButton from "../components/form/SubmitButton";
import { auth } from "../../firebase";

import LottieView from "lottie-react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const handleLogin = (values) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Loggedin");
        Alert.alert("Success", "User logged in successfully");

        const jSonUser = JSON.stringify(user);
        //set user in async

        AsyncStorage.setItem("user", jSonUser);

        setLoading(false);
        // ...
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message;
        Alert.alert("Error", errorMessage);
        console.log(err);
      });
  };
  return (
    <>
      <AppScreen>
        <View style={styles.mainContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.topContainer}>
              <Image
                resizeMode="contain"
                source={require("../../assets/images/nobg.png")}
                style={{ width: 220, height: 220 }}
              />
              <Text style={styles.title}>Admin Login</Text>
            </View>

            <View style={styles.formContainer}>
              <AppForm
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={(values) => handleLogin(values)}
              >
                <AppFormField name="email" placeholder="Enter Email" />
                <AppFormField
                  name="password"
                  placeholder="Enter Password"
                  secureTextEntry
                />

                <View style={{ marginTop: -20 }}>
                  <SubmitButton title="Login" />
                </View>
              </AppForm>
            </View>
          </ScrollView>
        </View>
      </AppScreen>
      <Modal visible={loading}>
        <View style={styles.mainModal}>
          <Text style={styles.alertTitle}>We are logging you in!</Text>
          <Text style={styles.alert}>Make sure your internet connection</Text>

          <View style={{ width: 225, height: 225 }}>
            <LottieView
              loop
              autoPlay
              source={require("../../assets/animations/ani.json")}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  alertTitle: {
    fontFamily: FONTS.semiBold,
    fontSize: 20,
  },
  alert: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  mainModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  title: {
    fontFamily: FONTS.bold,
    textAlign: "center",
    fontSize: 24,
    color: COLORS.primary,
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});
