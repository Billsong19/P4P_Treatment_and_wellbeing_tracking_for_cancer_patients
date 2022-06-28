import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "./screens/HomeScreen";
import { WellbeingJournalScreen } from "./screens/WellbeingJournalScreen";
import { RemindersScreen } from "./screens/RemindersScreen";
import { LibraryScreen } from "./screens/LibraryScreen";
import { ConditionScreen } from "./screens/ConditionScreen";
import { DetailsScreen } from "./screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Wellbeing Journal"
          component={WellbeingJournalScreen}
        />
        <Stack.Screen
          name="Reminder"
          component={RemindersScreen}
        />
        <Stack.Screen
          name="Info Library"
          component={LibraryScreen}
        />
        <Stack.Screen
          name="Condition"
          component={ConditionScreen}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
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