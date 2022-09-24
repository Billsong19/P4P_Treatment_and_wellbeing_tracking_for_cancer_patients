import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import {
    DefaultTheme,
    NavigationContainer,
    StackActions,
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
import { MoreHelpScreen } from "./screens/MoreHelpScreen.js";
import { ProfileScreen } from "./screens/ProfileScreen.js";
import Ionicons from "@expo/vector-icons/Ionicons";

const BottomTab = createBottomTabNavigator();

const navTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "transparent",
    },
};

const config = {
    animation: 'spring',
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
                        >
                            <Ionicons
                                name="person-sharp"
                                size={24}
                                style={{
                                    margin: 5
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
                name="Contact Healthcare Provider"
                component={HCPContactScreen}
            />
            <Stack.Screen name="More Help" component={MoreHelpScreen} />
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
            screenOptions={{
                transitionSpec: {
                    open: config,
                    close: config,
                },
            }}
        >
            <Stack.Screen name="Info Library" component={LibraryScreen} />
            <Stack.Screen name="Condition" component={ConditionScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
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
        // </ImageBackground>
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
