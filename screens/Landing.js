import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import { SocialIcon, Overlay } from "react-native-elements";

export default function Landing({ navigation }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Overlay
        isVisible={showModal}
        overlayStyle={styles.popup}
        onBackdropPress={() => setShowModal(false)}
      >
        <TouchableOpacity>
          <SocialIcon
            title="Start With Google"
            button
            light
            type="google"
            style={styles.signInWrapper}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <SocialIcon
            title="Start With Facebook"
            button
            light
            type="facebook"
            style={styles.signInWrapper}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signInWrapper}
          onPress={() => {
            setShowModal(false);
            navigation.navigate("SignIn");
          }}
        >
          <Text style={styles.ctaButton}>Sign In With Email</Text>
        </TouchableOpacity>
      </Overlay>

      <Svg
        width={185}
        height={148}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.svg}
      >
        <Path
          d="M54 38l12.573 36.277h40.686l-32.916 22.42 12.573 36.276L54 110.553l-32.916 22.42 12.573-36.276L.74 74.277h40.686L54 38z"
          fill="#000"
        />
        <Path
          d="M141.333 71l10.178 29.367h32.937l-26.646 18.149 10.178 29.367-26.647-18.149-26.646 18.149 10.178-29.367-26.646-18.149h32.936L141.333 71z"
          fill="#000"
        />
        <Path
          d="M114.733 0l8.023 23.148h25.962l-21.004 14.306 8.023 23.148-21.004-14.306L93.73 60.602l8.022-23.148-21.003-14.306h25.962L114.733 0z"
          fill="#000"
        />
      </Svg>
      <Text style={styles.header}>Lets get started!</Text>

      <TouchableOpacity
        style={styles.ctaButtonWrapper}
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.ctaButton}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.messageGroup}>
        <Text style={styles.print}> No account yet? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.printHighlight}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "stretch",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  svg: {
    marginBottom: 105,
  },
  header: {
    fontFamily: "inter-semibold",
    fontSize: 30,
    marginBottom: 35,
  },
  signInWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 100,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    marginBottom: 15,
    marginHorizontal: 0,
  },
  ctaButtonWrapper: {
    width: "70%",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 100,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    marginBottom: 15,
    marginHorizontal: 0,
  },
  ctaButton: {
    fontFamily: "inter-semibold",
    color: "#000",
    fontSize: 15,
    marginVertical: 3,
  },
  messageGroup: {
    flexDirection: "row",
    marginTop: 15,
  },
  print: {
    fontFamily: "inter-regular",
    fontSize: 15,
    color: "#DADADA",
    textAlign: "center",
  },
  printHighlight: {
    fontFamily: "inter-semibold",
    fontSize: 15,
    color: "#000",
  },
});
