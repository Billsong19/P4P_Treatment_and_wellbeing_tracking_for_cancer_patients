import * as React from "react";
import {
    Text,
    View,
    Button,
    Pressable,
} from "react-native";
import styles from "../styles";

export const HomeScreen = ({ navigation }) => {
    const reminders = ["Muscle training - by end of day", "Clinic visit - Tomorrow 15:10", "Surgery prep appointment - 4/6 14:30"]

    return (
        <View>
            <View style={[styles.wideTile, styles.blueDivider]}>
                <Text>Welcome back %user%</Text>
                <Text style={{ fontSize: "20px", marginVertical: "10px" }}>
                    %current-treatment-period%
                </Text>
                <Pressable
                    style={[styles.wideButton, styles.blueBackground]}
                    onPress={() => navigation.navigate("Wellbeing Journal")}
                >
                    <Text
                        style={{ fontSize: "20px", marginHorizontal: "auto" }}
                    >
                        How are you feeling today?
                    </Text>
                </Pressable>
            </View>
            <View style={[styles.wideTile, styles.tealDivider]}>
                <div style={{ display: "flex", flexDirection: "row"}}>
                    <Text style={[styles.mainHeader, {marginVertical: "10px", flex: 1 }]}>
                        Upcoming Reminders
                    </Text>
                    <Pressable
                        onPress={() => navigation.navigate("Reminders")}
                    >
                        <Text
                            style={{ fontSize: "14px", margin: "10px", alignSelf: "flex-end", flex: 1, color: "grey"}}
                        >
                            See all {'>'}
                        </Text>
                    </Pressable>
                </div>
                {reminders.map((reminder, index) => {
                    return <Pressable
                            key={index}
                            style={[styles.reminderButton, styles.tealBorder, {display: 'flex', flexDirection: "row"}]}
                            onPress={() =>
                            navigation.navigate('Reminders') //, { reminderId: `${route.params.condition}`}
                        }
                        >
                            <View style={[styles.dot, styles.blueBackground]}/>
                            <Text style={{ fontSize: "16px"}}>{reminder}</Text>
                        </Pressable>
                })}
            </View>
            <View style={[styles.wideTile]}>
                <Text style={[styles.mainHeader, { marginVertical: "10px" }]}>
                    Patient Support
                </Text>
                <div style={{ display: "flex" }}>
                    <Pressable
                        style={[styles.halfButton, styles.greenBackground]}
                        onPress={() =>
                            navigation.navigate("Contact Healthcare Provider")
                        }
                    >
                        <Text
                            style={{
                                fontSize: "20px",
                                marginHorizontal: "auto",
                                textAlign: "center",
                            }}
                        >
                            Contact Healthcare Provider
                        </Text>
                    </Pressable>
                    <Pressable
                        style={[styles.halfButton, styles.greenBackground]}
                        onPress={() => navigation.navigate("More Help")}
                    >
                        <Text
                            style={{
                                fontSize: "20px",
                                marginHorizontal: "auto",
                                textAlign: "center",
                            }}
                        >
                            More Help
                        </Text>
                    </Pressable>
                </div>
            </View>
        </View>
    );
};
