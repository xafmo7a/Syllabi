const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Statistics from "./screens/Statistics";
import Component15 from "./screens/Component15";
import SuccessfullyJoined from "./screens/SuccessfullyJoined";
import Profile from "./screens/Profile";
import EventSummary from "./screens/EventSummary";
import Component12 from "./screens/Component12";
import PrivateOrPublic from "./screens/PrivateOrPublic";
import Material from "./screens/Material";
import Profile1 from "./screens/Profile1";
import Students from "./screens/Students";
import CreatePostTime from "./screens/CreatePostTime";
import RoomDetails from "./screens/RoomDetails";
import CreateTick from "./screens/CreateTick";
import Create from "./screens/Create";
import Login from "./screens/Login";
import ScrollRoom from "./screens/ScrollRoom";
import Welcome from "./screens/Welcome";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    Poppins: require("./assets/fonts/Poppins.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
    Roboto: require("./assets/fonts/Roboto.ttf"),
    Roboto_regular: require("./assets/fonts/Roboto_regular.ttf"),
    Roboto_semibold: require("./assets/fonts/Roboto_semibold.ttf"),
    Inter: require("./assets/fonts/Inter.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    Urbanist: require("./assets/fonts/Urbanist.ttf"),
    Urbanist_medium: require("./assets/fonts/Urbanist_medium.ttf"),
    Urbanist_semibold: require("./assets/fonts/Urbanist_semibold.ttf"),
    Urbanist_bold: require("./assets/fonts/Urbanist_bold.ttf"),
    "DM Sans": require("./assets/fonts/DM_Sans.ttf"),
    "DM Sans_regular": require("./assets/fonts/DM_Sans_regular.ttf"),
    "DM Sans_medium": require("./assets/fonts/DM_Sans_medium.ttf"),
    Mulish: require("./assets/fonts/Mulish.ttf"),
    Mulish_regular: require("./assets/fonts/Mulish_regular.ttf"),
    Mulish_bold: require("./assets/fonts/Mulish_bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Statistics"
              component={Statistics}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component15"
              component={Component15}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SuccessfullyJoined"
              component={SuccessfullyJoined}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EventSummary"
              component={EventSummary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component12"
              component={Component12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PrivateOrPublic"
              component={PrivateOrPublic}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Material"
              component={Material}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile1"
              component={Profile1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Students"
              component={Students}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreatePostTime"
              component={CreatePostTime}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RoomDetails"
              component={RoomDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateTick"
              component={CreateTick}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Create"
              component={Create}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ScrollRoom"
              component={ScrollRoom}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Login />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
