import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import { CheckBox, Overlay } from "react-native-elements";
import { Icon } from "react-native-elements/dist/icons/Icon";
import SigHeader from "./SigHeader";

export default function ToDoItem({
  id,
  title,
  duration,
  finished,
  details,
  showDetails,
  toggleFinished,
  toggleShowDetails,
  descriptionOnly,
}) {
  return (
    <>
      <View style={styles.toDoItemGroup}>
        <View style={styles.toDoItemContent}>
          {descriptionOnly ? null : (
            <CheckBox
              onPress={toggleFinished(id)}
              checked={finished}
              checkedColor="#a3a3a3"
              uncheckedColor="#000"
            />
          )}
          <View>
            <Text
              style={
                descriptionOnly
                  ? styles.toDoItemContentTitleNeutral
                  : finished
                  ? styles.toDoItemContentTitleFinished
                  : styles.toDoItemContentTitleNeutral
              }
            >
              {title}
            </Text>
            <Text
              style={
                descriptionOnly
                  ? styles.toDoItemContentDurationUnfinished
                  : finished
                  ? styles.toDoItemContentDurationFinished
                  : styles.toDoItemContentDurationUnfinished
              }
            >
              {duration} minutes
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.toDoItemContentDetailsButton}
          onPress={toggleShowDetails(id)}
        >
          <Svg
            width={4}
            height={18}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M2 10a1 1 0 100-2 1 1 0 000 2zM2 3a1 1 0 100-2 1 1 0 000 2zM2 17a1 1 0 100-2 1 1 0 000 2z"
              stroke={descriptionOnly ? "#000" : finished ? "#a3a3a3" : "#000"}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>

        <Overlay
          isVisible={showDetails}
          overlayStyle={styles.toDoItemDetails}
          onBackdropPress={toggleShowDetails(id)}
        >
          <SigHeader subHeader label="More info !" />
          <Icon
            name="x-circle"
            type="feather"
            color="#969696"
            onPress={toggleShowDetails(id)}
            containerStyle={styles.toDoItemDetailsClose}
          />
          <Text style={styles.toDoItemDetail}>{details}</Text>
        </Overlay>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  toDoItemGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 100,
    paddingVertical: 5,
    paddingRight: 20,
    marginBottom: 10,
  },
  toDoItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  toDoItemContentTitleFinished: {
    fontFamily: "inter-semibold",
    fontSize: 15,
    color: "#a3a3a3",
    textDecorationLine: "line-through",
  },
  toDoItemContentTitleNeutral: {
    fontFamily: "inter-semibold",
    fontSize: 15,
    color: "#000",
  },
  toDoItemContentDurationFinished: {
    fontFamily: "inter-regular",
    fontSize: 10,
    color: "#a3a3a3",
    textDecorationLine: "line-through",
  },
  toDoItemContentDurationUnfinished: {
    fontFamily: "inter-regular",
    fontSize: 10,
    color: "#000",
  },
  toDoItemContentDetailsButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  toDoItemDetails: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 25,
  },
  toDoItemDetailsClose: {
    position: "absolute",
    top: 20,
    right: 25,
  },
  toDoItemDetail: {
    fontFamily: "inter-regular",
    fontSize: 12,
    marginLeft: 15,
  },
});
