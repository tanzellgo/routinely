import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackActions } from "@react-navigation/native";
import SigHeader from "../components/General/SigHeader";
import { Input, Icon } from "react-native-elements";

export default function SignIn({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topTab}>
        <TouchableOpacity style={styles.backButton}>
          <Icon
            name="chevron-left"
            type="feather"
            color="#000"
            size={32}
            onPress={() => navigation.dispatch(StackActions.pop(1))}
          />
        </TouchableOpacity>
        <SigHeader label={"Sign In"} />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.form}
      >
        <Input style={styles.input} label="Email" />

        <Input style={styles.input} label="Password" secureTextEntry={true} />

        <TouchableWithoutFeedback>
          <Text style={styles.print}>Forgot your password?</Text>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <TouchableOpacity style={styles.ctaButtonWrapper} onPress={() => true}>
        <Text style={styles.ctaButton}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    minHeight: "100%",
  },
  topTab: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
    paddingBottom: 10,
    marginTop: 10,
  },
  backButton: {
    position: "absolute",
    top: 30,
    left: 25,
    width: 30,
    height: 30,
  },
  form: {
    alignSelf: "center",
    width: "90%",
    marginTop: 60,
  },
  input: {
    alignSelf: "center",
    fontFamily: "inter-semibold",
    fontSize: 22,
    color: "#000",
  },
  print: {
    fontFamily: "inter-regular",
    fontSize: 15,
    color: "#DADADA",
    textAlign: "center",
    marginTop: 25,
  },
  ctaButtonWrapper: {
    alignSelf: "center",
    position: "absolute",
    bottom: 10,
    width: "90%",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 100,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    marginBottom: 15,
    marginHorizontal: 0,
    marginTop: 25,
  },
  ctaButton: {
    fontFamily: "inter-semibold",
    color: "#000",
    fontSize: 15,
    marginVertical: 3,
  },
});
