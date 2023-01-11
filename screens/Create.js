import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SigHeader from "../components/General/SigHeader";
import { Input } from "react-native-elements";

export default function Create() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.topTab}>
          <SigHeader label={"Create"} />
        </View>
        <View style={styles.inputSection}>
          <Image
            style={styles.picture}
            source={require("../assets/images.jpeg")}
            onPress={() => console.log("clicked")}
          />

          <Input
            containerStyle={{ marginBottom: 20 }}
            inputContainerstyle={styles.name}
            label="Routine Name"
          />

          <Input
            inputContainerStyle={styles.description}
            inputStyle={{ textAlignVertical: "top", padding: 10 }}
            label="Routine Description"
            multiline={true}
            numberOfLines={5}
          />
        </View>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => console.log("clicked")}
        >
          <Text style={styles.createButtonLabel}>Create Routine</Text>
        </TouchableOpacity>
      </ScrollView>
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
  resetButton: {
    position: "absolute",
    top: 35,
    right: 25,
  },
  buttonLabel: {
    fontFamily: "inter-regular",
    fontSize: 15,
    color: "#7D7171",
  },
  inputSection: {
    paddingHorizontal: 40,
  },
  picture: {
    alignSelf: "center",
    width: "100%",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 40,
  },
  name: {
    alignSelf: "center",
    fontFamily: "inter-semibold",
    fontSize: 20,
    color: "#000",
  },
  description: {
    fontFamily: "inter-regular",
    fontSize: 10,
    color: "#000",
    padding: 5,
    marginTop: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 10,
  },
  header: {
    alignSelf: "flex-start",
    fontFamily: "inter-semibold",
    fontSize: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  createButton: {
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 35,
    marginTop: 40,
    backgroundColor: "#000",
    borderRadius: 20,
  },
  createButtonLabel: {
    fontFamily: "inter-semibold",
    fontSize: 15,
    color: "#fff",
  },
});
