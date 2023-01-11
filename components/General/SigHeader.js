import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function SigHeader({ label, subHeader }) {
  return (
    <View style={styles.headerGroup}>
      <Svg
        width={17}
        height={18}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.sigSvg}
      >
        <Path
          d="M3.484 8.97a1.806 1.806 0 01-.534-2.471 1.743 1.743 0 012.435-.527l4.368 2.861a1.806 1.806 0 01.534 2.471 1.743 1.743 0 01-2.435.527L3.484 8.97z"
          fill="#000"
        />
      </Svg>
      <Text
        style={subHeader ? styles.subHeaderGroupLabel : styles.headerGroupLabel}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerGroup: {
    position: "relative",
    padding: 2,
  },
  headerGroupLabel: {
    fontFamily: "inter-semibold",
    fontSize: 25,
    marginTop: 3,
    marginLeft: 11,
    marginBottom: 10,
  },
  subHeaderGroupLabel: {
    fontFamily: "inter-semibold",
    fontSize: 15,
    marginTop: 7,
    marginLeft: 15,
    marginBottom: 10,
  },
  sigSvg: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});
