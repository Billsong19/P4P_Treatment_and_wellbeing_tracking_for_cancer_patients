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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from "./screens/HomeScreen";
import { WellbeingJournalScreen } from "./screens/WellbeingJournalScreen";
import { RemindersScreen } from "./screens/RemindersScreen";
import { LibraryScreen } from "./screens/LibraryScreen";
import { ConditionScreen } from "./screens/ConditionScreen";
import { DetailsScreen } from "./screens/DetailsScreen";
import { HCPContactScreen } from "./screens/HCPContactScreen.js";
import { MoreHelpScreen } from "./screens/MoreHelpScreen.js";
import { AddReminderScreen } from "./screens/AddReminderScreen.js";
import { ProfileScreen } from "./screens/ProfileScreen.js";
import userIcon from "./public/user-solid.svg";



const BottomTab = createBottomTabNavigator();

const navTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "transparent",
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
                        <Image
                            style={{
                                width: 30,
                                height: 40,
                                marginTop: 5,
                                marginRight: 10,
                            }}
                            source={userIcon}
                        />
                    </TouchableOpacity>
                );
            },
        })}>
            <Stack.Screen name="Home" component={HomeScreen} />
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
    )
}

function RemindersScreens() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Reminders"
                component={RemindersScreen}
            />
            <Stack.Screen
                name="Add Reminder"
                component={AddReminderScreen}
            />
            </Stack.Navigator>
    )
}

function InfoLibScreens() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Info Library"
                component={LibraryScreen}
            />
            <Stack.Screen
                name="Condition"
                component={ConditionScreen}
            />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    )
}

export default function App() {
    return (
        <ImageBackground
            source={require("./public/bmbg.png")}
            style={{ width: "100vw", height: "100vh", position: "absolute" }}
        >
            <NavigationContainer theme={navTheme}>
                
                
                <BottomTab.Navigator
                    initialRouteName="Home"
                >  
                    <BottomTab.Screen
                        name="Information Library"
                        component={InfoLibScreens}
                        options={{ 
                            headerShown: false,
                            // tabBarIcon: () => (<Icon></Icon>) 
                        }}
                    /> 
                    <BottomTab.Screen
                        name="Home"
                        component={HomeScreens}
                        options={{ headerShown: false }}
                    />
                    <BottomTab.Screen
                        name="Reminders"
                        component={RemindersScreens}
                        options={{ headerShown: false }}
                    />    
                </BottomTab.Navigator>
            </NavigationContainer>
        </ImageBackground>
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
