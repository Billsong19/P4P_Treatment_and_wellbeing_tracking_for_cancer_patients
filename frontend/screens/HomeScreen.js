import * as React from "react";
import {
    Text,
    View,
    TouchableHighlight,
    ImageBackground,
    TouchableOpacity,
    FlatList,
} from "react-native";
import styles from "../styles";
import dayjs from "dayjs";

export const HomeScreen = ({ navigation }) => {
    const user = "Edward";
    const treatment_period = "Early-middle treatment period"
    const reminders = [
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Take medicine",
            complete: true,
            frequency: 2,
            date: "",
            time: "10:00",
            details: "two 50mg tablets",
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Clinic appointment",
            complete: false,
            frequency: 0,
            date: "2022-5-22",
            time: "16:30",
            details: "Clinic name, address, meeting with Dr. Name"
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d73",
            title: "Surgery prep appointment",
            complete: false,
            frequency: 0,
            date: "2022-5-28",
            time: "12:30",
            details: "Clinic name, address, meeting with Dr. Name"
        },
    ];

    const renderSimpleReminder = ({ item }) => (
        <TouchableOpacity
            style={[
                    styles.tealBorder,
                    styles.tealBackground50,
                    styles.datedReminder,
                    { flexDirection: "row" }
                    ]
                }
            onPress={
                () => navigation.navigate("Reminders") //, { reminderId: `${route.params.condition}`}
            }
            >
                <Text style={{ flex: 3, fontSize: 18, paddingEnd: 10 }}>{item.title}</Text>
                <Text style={{ flex: 1, fontSize: 18 }}>{ item.frequency === 2 ? "Daily" : dayjs(item.date).format("D MMM") }</Text>
                <Text style={{ flex: 1, fontSize: 18 }}>{item.time}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, backgroundColor: "#FFF" }}>
            <ImageBackground
                source={require("../public/bmbgHome.png")}
                resizeMode="cover"
                style={{
                    flex: 1,
                }}
            >
                <View style={[styles.wideTile, styles.blueDivider]}>
                    <Text>Welcome back {user}</Text>
                    <Text style={{ fontSize: 20.0, marginVertical: 10 }}>
                        {treatment_period}
                    </Text>
                    <TouchableHighlight
                        underlayColor={"#8AB6DF"}
                        style={[styles.smallShadow, styles.wideButton, styles.blueBackground, {marginBottom: "1%"}]}
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
                    <FlatList
                        data={reminders}
                        renderItem={renderSimpleReminder}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <View style={[styles.wideTile]}>
                    <Text style={[styles.mainHeader, { marginVertical: 10 }]}>
                        Patient Support
                    </Text>
                    <View style={{ display: "flex" }}>
                        <TouchableHighlight
                            underlayColor={"#8ADFB6"}
                            style={[styles.smallShadow, styles.wideButton, styles.greenBackground, {marginBottom: "2%"}]}
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
                            style={[styles.smallShadow, styles.wideButton, styles.greenBackground]}
                            onPress={() => navigation.navigate("More Help")}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginHorizontal: "auto",
                                    textAlign: "center",
                                }}
                            >
                                Patient Support
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};
