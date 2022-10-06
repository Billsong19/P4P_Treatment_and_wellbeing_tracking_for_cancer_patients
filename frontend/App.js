import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./screens/HomeScreen";
import { WellbeingJournalScreen } from "./screens/WellbeingJournalScreen";
import { RemindersScreen } from "./screens/RemindersScreen";
import { LibraryScreen } from "./screens/LibraryScreen";
import { ConditionScreen } from "./screens/ConditionScreen";
import { DetailsScreen } from "./screens/DetailsScreen";
import { HCPContactScreen } from "./screens/HCPContactScreen.js";
import { PatientSupportScreen } from "./screens/PatientSupportScreen.js";
import { ProfileScreen } from "./screens/ProfileScreen.js";
import { NoteScreen } from "./screens/NoteScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { UserContextProvider } from "./userContext";
import { ReminderContextProvider } from "./reminderContextProvider";

const BottomTab = createBottomTabNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function HomeScreens() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Profile");
              }}
              style={{flexDirection: "row"}}
            >
              <Text style={{alignSelf: "center"}}>Profile</Text>
              <Ionicons
                name="person-sharp"
                size={24}
                style={{
                  margin: 5,
                }}
              />
            </TouchableOpacity>
          );
        },
      })}
    >
      <Stack.Screen name="Songward" component={HomeScreen} />
      <Stack.Screen
        name="Wellbeing Journal"
        component={WellbeingJournalScreen}
      />
      <Stack.Screen
        name="Contact Healthcare"
        component={HCPContactScreen}
      />
      <Stack.Screen name="Patient Support" component={PatientSupportScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function RemindersScreens() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Reminders List" component={RemindersScreen} />
    </Stack.Navigator>
  );
}

function InfoLibScreens() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Notes");
              }}
              style={{flexDirection: "row"}}
            >
              <Text style={{alignSelf: "center"}}>Notes</Text>
              <Ionicons
                name="reader"
                size={24}
                style={{
                  margin: 5,
                }}
              />
            </TouchableOpacity>
          );
        },
        transitionSpec: {
          open: config,
          close: config,
        },
      })}
    >
      <Stack.Screen name="Info Library" component={LibraryScreen} />
      <Stack.Screen name="Condition" component={ConditionScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Notes" component={NoteScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <UserContextProvider>
      <ReminderContextProvider>
        <NavigationContainer theme={navTheme}>
          <BottomTab.Navigator
            initialRouteName="Home"
            backBehavior="initialRoute"
            lazy="false"
          >
            <BottomTab.Screen
              name="Information Library"
              component={InfoLibScreens}
              options={{
                headerShown: false,
                tabBarActiveTintColor: "#75A9D9",
                tabBarLabelStyle: {fontSize: 14},
                tabBarIcon: (tabInfo) => (
                  <Ionicons
                    name="library"
                    size={24}
                    color={tabInfo.focused ? "#75A9D9" : "#8e8e8f"}
                  />
                ),
              }}
            />
            <BottomTab.Screen
              name="Home"
              component={HomeScreens}
              options={{
                headerShown: false,
                tabBarActiveTintColor: "#75A9D9",
                tabBarLabelStyle: {fontSize: 14},
                tabBarIcon: (tabInfo) => (
                  <Ionicons
                    name="home-sharp"
                    size={24}
                    color={tabInfo.focused ? "#75A9D9" : "#8e8e8f"}
                  />
                ),
              }}
            />
            <BottomTab.Screen
              name="Reminders"
              component={RemindersScreens}
              options={{
                headerShown: false,
                tabBarActiveTintColor: "#75A9D9",
                tabBarLabelStyle: {fontSize: 14},
                tabBarIcon: (tabInfo) => (
                  <Ionicons
                    name="list"
                    size={24}
                    color={tabInfo.focused ? "#75A9D9" : "#8e8e8f"}
                  />
                ),
              }}
            />
          </BottomTab.Navigator>
        </NavigationContainer>
      </ReminderContextProvider>
    </UserContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
