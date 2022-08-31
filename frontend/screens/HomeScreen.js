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
    const reminders = ["Muscle training - by end of day", "Clinic visit - Tomorrow 15:10", "Surgery prep appointment - 4/6 14:30"]

    return (
        <View>
            <ImageBackground
            source={require("../public/bmbgHome.png")}
            style={{ width: "100vw", height: "calc(100vh - 80px)", position: "absolute" }}
        >
            <View style={[styles.wideTile, styles.blueDivider]}>
                <Text>Welcome back %user%</Text>
                <Text style={{ fontSize: "20px", marginVertical: "10px" }}>
                    %current-treatment-period%
                </Text>
                <TouchableHighlight
                    underlayColor={'#8AB6DF'}
                    style={[styles.wideButton, styles.blueBackground]}
                    onPress={() => navigation.navigate("Wellbeing Journal")}
                >
                    <Text
                        style={[styles.subHeader, { marginHorizontal: "auto", color: '#fff' }]}
                    >
                        How are you feeling today?
                    </Text>
                </TouchableHighlight>
            </View>
            <View style={[styles.wideTile, styles.tealDivider]}>
                <div style={{ display: "flex", flexDirection: "row"}}>
                    <Text style={[styles.mainHeader, {marginVertical: "10px", flex: 1 }]}>
                        Upcoming Reminders
                    </Text>
                    <TouchableHighlight
                        style={{borderRadius: '4px'}}
                        underlayColor={'#EEE'}
                        onPress={() => navigation.navigate("Reminders")}
                    >
                        <Text
                            style={{ fontSize: "14px", margin: "10px", alignSelf: "flex-end", flex: 1, color: "grey"}}
                        >
                            See all {'>'}
                        </Text>
                    </TouchableHighlight>
                </div>
                {reminders.map((reminder, index) => {
                    return <TouchableHighlight
                            underlayColor={'#EEE'}
                            key={index}
                            style={[styles.reminderButton, styles.tealBorder, {display: 'flex', flexDirection: "row"}]}
                            onPress={() =>
                            navigation.navigate('Reminders') //, { reminderId: `${route.params.condition}`}
                        }
                        >
                            <View style={{display: 'flex', flexDirection: "row"}}>
                                <View style={[styles.dot, styles.blueBackground]}/>
                                <Text style={{ fontSize: "16px"}}>{reminder}</Text>
                            </View>
                        </TouchableHighlight>
                })}
            </View>
            <View style={[styles.wideTile]}>
                <Text style={[styles.mainHeader, { marginVertical: "10px" }]}>
                    Patient Support
                </Text>
                <div style={{ display: "flex" }}>
                    <TouchableHighlight
                        underlayColor={'#8ADFB6'}
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
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'#8ADFB6'}
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
                    </TouchableHighlight>
                </div>
            </View>
            </ImageBackground>
        </View>
    );
};
