import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
// import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Landing from "./screens/Landing";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Home from "./screens/Home";
import Create from "./screens/Create";
import Profile from "./screens/Profile";
import ProfileSettings from "./screens/ProfileSettings";
import NavigationTab from "./components/General/NavigationTab";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const getFonts = () =>
  Font.loadAsync({
    "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
    "inter-semibold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        style: {
          shadowRadius: 1,
          shadowOffset: {
            width: 0,
            height: -10,
          },
          shadowColor: "#000000",
          elevation: 4,
        },
      }}
      tabBar={(props) => <NavigationTab {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {currentUser || true ? (
            <>
              <Stack.Screen name="MainTabs" component={MainTabs} />
              <Stack.Screen
                name="ProfileSettings"
                component={ProfileSettings}
              />
            </>
          ) : (
            <>
              <Stack.Screen name="Landing" component={Landing} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="SignIn" component={SignIn} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
