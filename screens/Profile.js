import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SigHeader from "../components/General/SigHeader";
import { ButtonGroup, ListItem, Avatar } from "react-native-elements";

export default function Profile({ navigation }) {
  const [DATA, setDATA] = useState([
    {
      id: 0,
      title: "Wake Up on 5am",
      duration: 0,
      finished: true,
      details: ["First Item", "Second Item"],
      showDetails: false,
    },
    {
      id: 1,
      title: "Wake Up on 5am",
      duration: 0,
      finished: true,
      details: ["First Item", "Second Item"],
      showDetails: false,
    },
    {
      id: 2,
      title: "Wake Up on 5am",
      duration: 0,
      finished: false,
      details: ["First Item", "Second Item"],
      showDetails: false,
    },
    {
      id: 3,
      title: "Wake Up on 5am",
      duration: 0,
      finished: false,
      details: ["First Item", "Second Item"],
      showDetails: false,
    },
    {
      id: 4,
      title: "Wake Up on 5am",
      duration: 0,
      finished: false,
      details: ["First Item", "Second Item"],
      showDetails: false,
    },
  ]);

  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.topTab}>
          <TouchableOpacity
            style={styles.settingsButton}
            onPress={() => navigation.navigate("ProfileSettings")}
          >
            <Text style={styles.buttonLabel}>Settings</Text>
          </TouchableOpacity>
          <SigHeader label={"Profile"} />
          <TouchableOpacity
            style={styles.logOutButton}
            onPress={() => console.log("logout!")}
          >
            <Text style={styles.buttonLabel}>Logout</Text>
          </TouchableOpacity>
        </View>

        <Image
          style={styles.profilePicture}
          source={require("../assets/images.jpeg")}
        />

        <Text style={styles.profileName}>Old Ross Geller</Text>

        <ButtonGroup
          buttonStyle={{ width: "100%" }}
          buttonContainerStyle={{
            borderWidth: 0,
            borderRightWidth: 0,
          }}
          buttons={["CURRENT", "PERSONAL", "COMPLETED"]}
          containerStyle={{
            borderWidth: 0,
            marginBottom: 20,
          }}
          disabled={[3, 4]}
          disabledStyle={{}}
          disabledTextStyle={{}}
          disabledSelectedStyle={{}}
          disabledSelectedTextStyle={{}}
          innerBorderStyle={{}}
          onPress={(selectedIdx) => setSelectedIndex(selectedIdx)}
          selectedButtonStyle={{
            borderBottomWidth: 2,
            borderBottomColor: "#000",
            backgroundColor: "none",
          }}
          selectedIndex={selectedIndex}
          selectedTextStyle={{ color: "#000" }}
          textStyle={{ fontFamily: "inter-semibold" }}
        />

        {DATA.map((item, index) => (
          <ListItem
            key={index}
            Component={TouchableHighlight}
            containerStyle={{ paddingHorizontal: 40 }}
            disabledStyle={{ opacity: 0.5 }}
            onLongPress={() => console.log("onLongPress()")}
            onPress={() => console.log("onLongPress()")}
            pad={20}
          >
            <Image
              style={{ width: 70, height: 70, borderRadius: 10 }}
              source={require("../assets/images.jpeg")}
            />
            <ListItem.Content>
              <Text style={styles.routineSubHeader}>Routine:</Text>
              <Text style={styles.routineHeader}>Number {index}</Text>
            </ListItem.Content>
          </ListItem>
        ))}
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
  settingsButton: {
    position: "absolute",
    top: 35,
    left: 25,
  },
  logOutButton: {
    position: "absolute",
    top: 35,
    right: 25,
  },
  buttonLabel: {
    fontFamily: "inter-regular",
    fontSize: 15,
    color: "#7D7171",
  },
  profilePicture: {
    alignSelf: "center",
    width: 150,
    height: 150,
    borderRadius: 100,
    marginVertical: 10,
  },
  profileName: {
    alignSelf: "center",
    fontFamily: "inter-semibold",
    fontSize: 22,
    color: "#000",
    marginTop: 5,
    marginBottom: 40,
  },
  routineSubHeader: {
    fontFamily: "inter-regular",
    fontSize: 13,
    color: "#000",
  },
  routineHeader: {
    fontFamily: "inter-semibold",
    fontSize: 20,
    color: "#000",
  },
});
