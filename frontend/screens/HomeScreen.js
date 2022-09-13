import * as React from "react";
import {
    Text,
    View,
    Button,
    Pressable,
    TouchableHighlight,
    ImageBackground,
} from "react-native";
import styles from "../styles";

export const HomeScreen = ({ navigation }) => {
    const reminders = [
        "Muscle training - by end of day",
        "Clinic visit - Tomorrow 15:10",
        "Surgery prep appointment - 4/6 14:30",
    ];

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require("../public/bmbgHome.png")}
                resizeMode="cover"
                style={{
                    flex: 1,
                }}
            >
                <View>
                    <Text>Welcome back %user%</Text>
                    <Text style={{ fontSize: 20.0, marginVertical: 10 }}>
                        %current-treatment-period%
                    </Text>
                    <TouchableHighlight
                        underlayColor={"#8AB6DF"}
                        style={[styles.wideButton, styles.blueBackground]}
                        onPress={() => navigation.navigate("Wellbeing Journal")}
                    >
                        <Text
                            style={[
                                styles.subHeader,
                                { marginHorizontal: "auto", color: "#fff" },
                            ]}
                        >
                            How are you feeling today?
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={[styles.wideTile, styles.tealDivider]}>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text
                            style={[
                                styles.mainHeader,
                                { marginVertical: 10, flex: 1 },
                            ]}
                        >
                            Upcoming Reminders
                        </Text>
                        <TouchableHighlight
                            style={{ borderRadius: 4 }}
                            underlayColor={"#EEE"}
                            onPress={() => navigation.navigate("Reminders")}
                        >
                            <Text
                                style={{
                                    fontSize: 14,
                                    margin: 10,
                                    alignSelf: "flex-end",
                                    flex: 1,
                                    color: "grey",
                                }}
                            >
                                See all {">"}
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        {reminders.map((reminder, index) => {
                            return (
                                <TouchableHighlight
                                    underlayColor={"#EEE"}
                                    key={index}
                                    style={[
                                        styles.reminderButton,
                                        styles.tealBorder,
                                        {
                                            display: "flex",
                                            flexDirection: "row",
                                        },
                                    ]}
                                    onPress={
                                        () => navigation.navigate("Reminders") //, { reminderId: `${route.params.condition}`}
                                    }
                                >
                                    <View
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                        }}
                                    >
                                        <View
                                            style={[
                                                styles.dot,
                                                styles.blueBackground,
                                            ]}
                                        />
                                        <Text style={{ fontSize: 20 }}>
                                            {reminder}
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            );
                        })}
                    </View>
                </View>
                <View style={[styles.wideTile]}>
                    <Text style={[styles.mainHeader, { marginVertical: 10 }]}>
                        Patient Support
                    </Text>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <TouchableHighlight
                            underlayColor={"#8ADFB6"}
                            style={[styles.halfButton, styles.greenBackground]}
                            onPress={() =>
                                navigation.navigate(
                                    "Contact Healthcare Provider"
                                )
                            }
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginHorizontal: "auto",
                                    textAlign: "center",
                                }}
                            >
                                Contact Healthcare Provider
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={"#8ADFB6"}
                            style={[styles.halfButton, styles.greenBackground]}
                            onPress={() => navigation.navigate("More Help")}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginHorizontal: "auto",
                                    textAlign: "center",
                                }}
                            >
                                More Help
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};
