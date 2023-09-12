import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import * as Yup from "yup";
import { COLORS, FONTS } from "../constants/theme";
import { AppForm, AppFormField, SubmitButton } from "../components/form";
import CustomSwitch from "../components/CustomSwitch";
import AppScreen from "../components/AppScreen";
import AppHeader from "../components/AppHeader";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().label("Phone"),
  password: Yup.string().required().min(4).label("pPassword"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .label("Confirm Password"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const AddWorker = ({ navigation }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const onChangeSwitch = () => {
    setIsAdmin(!isAdmin);
  };

  const handleSubmit = (values) => {
    console.log(values); //these will be all the values of the form user entered
    console.log(isAdmin); //this will be true or false
  };
  return (
    <AppScreen style={{ backgroundColor: COLORS.bg }}>
      <AppHeader isGoBack={true} onPress={() => navigation.goBack()} />
      <Text style={styles.screenTitle}>Add Worker</Text>
      <View style={styles.formContainer}>
        <AppForm
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}
        >
          <Text style={styles.phoneNumber}>Worker Name</Text>

          <AppFormField name="name" placeholder="Name" />
          <Text style={styles.phoneNumber}>Worker Email</Text>

          <AppFormField name="email" placeholder="Email" />
          <Text style={styles.phoneNumber}>Worker Phone Number</Text>

          <AppFormField name="phone" placeholder="Phone" />
          <Text style={styles.phoneNumber}>Worker Password</Text>
          <AppFormField
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <Text style={styles.phoneNumber}>Confirm Worker Password</Text>

          <AppFormField
            name="confirmPassword"
            placeholder="Confirm Password"
            secureTextEntry
          />

          <View style={{ marginTop: 10 }}>
            <CustomSwitch
              label="Is an Admin"
              isEnabled={isAdmin}
              onChangeValue={onChangeSwitch}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <SubmitButton title="Add Worker" />
          </View>
        </AppForm>
      </View>
    </AppScreen>
  );
};

export default AddWorker;

const styles = StyleSheet.create({
  formContainer: {
    marginHorizontal: 20,
  },
  screenTitle: {
    fontFamily: FONTS.semiBold,
    fontSize: 24,
    textAlign: "center",
    color: COLORS.primary,
    marginBottom: 10,
  },
  phoneNumber: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    marginTop: 5,
    marginBottom: -5,
  },
});
