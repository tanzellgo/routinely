import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackActions } from "@react-navigation/native";
import { Input, Overlay } from "react-native-elements";
import { Icon } from "react-native-elements/dist/icons/Icon";
import * as ImagePicker from "expo-image-picker";

export default function ProfileSettings({ navigation }) {
  const [image, setImage] = useState(null);
  const [showImageOptions, setShowImageOptions] = useState(false);

  const pickImage = async () => {
    setShowImageOptions(false);

    // Ask the user for the permission to access the media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const openCamera = async () => {
    setShowImageOptions(false);

    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView style={styles.container}>
        <Overlay
          isVisible={showImageOptions}
          overlayStyle={styles.overlay}
          onBackdropPress={() => setShowImageOptions(false)}
        >
          <View>
            <Text style={styles.overlayHeader}>How?</Text>
            <TouchableOpacity
              style={styles.overlayButtonWrapper}
              onPress={pickImage}
            >
              <Text style={styles.overlayButton}>Pick existing photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.overlayButtonWrapper}
              onPress={openCamera}
            >
              <Text style={styles.overlayButton}>Take a new picture</Text>
            </TouchableOpacity>
          </View>
        </Overlay>

        <View>
          <Icon
            name="chevron-left"
            type="feather"
            color="#000"
            size={32}
            containerStyle={styles.icon}
            onPress={() => navigation.dispatch(StackActions.pop(1))}
          />
          <Text style={styles.header}>Settings</Text>
          <View style={styles.subHeaderCover}>
            <Text style={styles.subHeader}>
              Set up your profile photo and name as how you would want to be
              perceived in routinely.
            </Text>
          </View>

          <TouchableOpacity onPress={() => setShowImageOptions(true)}>
            <Image
              style={styles.profilePicture}
              source={image ? { uri: image } : require("../assets/images.jpeg")}
              onPress={pickImage}
            />
          </TouchableOpacity>

          <Input style={styles.profileName} placeholder="Your name" />
        </View>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonLabel}>Save</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    minHeight: "100%",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  icon: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  overlay: {
    position: "relative",
    width: "70%",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginBottom: 15,
  },
  overlayHeader: {
    fontFamily: "inter-semibold",
    fontSize: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  overlayButtonWrapper: {
    color: "#FFF",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 100,
    backgroundColor: "#000",
    marginTop: 10,
    alignItems: "center",
  },
  overlayButton: {
    color: "#fff",
  },
  header: {
    fontFamily: "inter-semibold",
    fontSize: 30,
    color: "#000",
    marginBottom: 20,
  },
  subHeaderCover: {
    borderLeftWidth: 5,
    borderLeftColor: "#FD9C66",
    paddingLeft: 15,
    marginBottom: 30,
  },
  subHeader: {
    fontFamily: "inter-regular",
    fontSize: 13,
    lineHeight: 20,
    color: "#000",
  },
  profilePicture: {
    alignSelf: "center",
    width: 150,
    height: 150,
    borderRadius: 100,
    marginVertical: 20,
  },
  profileName: {
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "inter-semibold",
    fontSize: 22,
    color: "#000",
    marginTop: 20,
  },
  saveButton: {
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 35,
    backgroundColor: "#000",
    borderRadius: 20,
    marginTop: 20,
  },
  saveButtonLabel: {
    fontFamily: "inter-semibold",
    fontSize: 15,
    color: "#fff",
  },
});
