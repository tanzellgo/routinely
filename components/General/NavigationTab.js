import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";

const mainScreens = ["Home", "Find", "Create", "Profile"];

export default function NavigationTab({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: "#D3D3D3",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const renderIcon = () => {
          if (label === "Home") {
            return (
              <Icon
                name="home"
                type="feather"
                color={isFocused ? "#FD9C66" : "#000000"}
              />
            );
          } else if (label === "Find") {
            return (
              <Icon
                name="search"
                type="feather"
                color={isFocused ? "#FD9C66" : "#000000"}
              />
            );
          } else if (label === "Create") {
            return (
              <Icon
                name="edit"
                type="feather"
                color={isFocused ? "#FD9C66" : "#000000"}
              />
            );
          } else if (label === "Profile") {
            return (
              <Icon
                name="user"
                type="feather"
                color={isFocused ? "#FD9C66" : "#000000"}
              />
            );
          }
        };

        if (mainScreens.includes(label)) {
          return (
            <TouchableOpacity
              key={label}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 10,
              }}
            >
              {renderIcon()}
              <Text style={{ color: isFocused ? "#FD9C66" : "#222" }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        } else {
          return null;
        }
      })}
    </View>
  );
}
