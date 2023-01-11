import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Badge({ index, label, color, selected, toggle }) {
  if (toggle !== undefined) {
    return (
      <TouchableOpacity
        key={index}
        style={
          selected ? { ...styles.badge, backgroundColor: color } : styles.badge
        }
        onPress={toggle}
      >
        <Text>{label}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <View key={index} style={{ ...styles.badge, backgroundColor: color }}>
        <Text>{label}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  badge: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: "#E5E5E5",
    borderRadius: 10,
    marginRight: 5,
    marginBottom: 5,
  },
});
