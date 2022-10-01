import * as React from "react";
import {
    FlatList,
    Animated,
    Text,
    View,
    ScrollView,
    Modal,
    Image,
    TouchableHighlight,
    TextInput,
    Pressable,
} from "react-native";
import styles from "../styles.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import CheckBox from 'expo-checkbox';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUpEditModal } from "./ReminderModal.js";
import { Frequencies } from "../public/Frequencies.js"

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("@reminders", jsonValue);
    } catch (e) {
        console.log(e);
    }
};

/*
    Reminder is a component used to display a reminder in the reminders screen. It starts off in a
    collapsed view and when tapped (anywhere other than the checkbox), expands to show details as well a
    button which opens the ReminderModal to edit the selected reminder through the setUpEditModal prop.
*/
export default Reminder = ({ id, title, time, details, complete, frequency, date, data, setData, setUpEditModal }) => {
    const startingHeight = 35
    const [key, setKey] = React.useState(0);
    const [titleHeight, setTitleHeight] = React.useState(35);
    const [isExpanded, setExpanded] = React.useState(false);
    const [isComplete, setComplete] = React.useState(complete);
    const [fullHeight, setFullHeight] = React.useState(startingHeight);
    const animatedHeight = React.useRef(
        new Animated.Value(startingHeight)
    ).current;
    const fadeAnim = React.useRef(new Animated.Value(0)).current;
    const semiFadeAnim = React.useRef(new Animated.Value(isComplete ? 0.5 : 1)).current;

    React.useEffect(() => {
        Animated.spring(animatedHeight, {
            friction: 100,
            toValue: isExpanded ? fullHeight : startingHeight,
            useNativeDriver: false,
        }).start();
    }, [isExpanded, fullHeight]);

    React.useEffect(() => {
        if (isExpanded) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 100,
                useNativeDriver: false,
            }).start();
        }
    }, [isExpanded]);

    React.useEffect(() => {
        if (isComplete) {
            Animated.timing(semiFadeAnim, {
                toValue: 0.5,
                duration: 500,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(semiFadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
            }).start();
        }
    }, [isComplete]);

    React.useEffect(() => {
        setExpanded(false);
        setFullHeight(startingHeight);
    }, [id, title, time, details, complete, frequency,date])

    React.useEffect(() => {
        setKey(key+1)
    }, [fullHeight])

    const onLayout = (e) => {
        let { x, y, width, height } = e.nativeEvent.layout;
        height = Math.floor(height) + 17;
        if (height > fullHeight) {
            setFullHeight(height);
        }
    };

    const toggleComplete = async () => {
        const index = data.findIndex((reminder) => reminder.id === id);
        data[index] = {
            id: id,
            title: title,
            complete: !isComplete,
            frequency: frequency,
            time: time,
            date: date,
            details: details,
        };
        setData(data);
        setComplete(!isComplete);
        await storeData(data);
    };

    return (
        <Pressable
            onLongPress={() => setUpEditModal({title, details, date, time, frequency, id})}
            onPress={() => setExpanded(!isExpanded)}
        >
            <Animated.View
                style={
                    frequency === Frequencies.Daily
                        ? [
                              styles.blueBorder,
                              styles.dailyReminder,
                              { height: animatedHeight,
                                opacity: semiFadeAnim },
                          ]
                        : [
                              styles.tealBorder,
                              styles.tealBackground50,
                              styles.datedReminder,
                              { height: animatedHeight,
                                opacity: semiFadeAnim },
                          ]
                }
            >
                <View onLayout={onLayout} key={key}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ flex: 3, fontSize: 18 }} numberOfLines={isExpanded ? 0 : 1}>{title}</Text>
                        <Text style={{ flex: 1, fontSize: 18 }}>{time}</Text>
                        <CheckBox
                            value={isComplete}
                            style={styles.remindersCheck}
                            onValueChange={() => {
                                toggleComplete();
                                setExpanded(isExpanded);
                            }}
                        />
                    </View>
                    <Animated.View style={{ opacity: fadeAnim }}>
                        <ScrollView style={{height: 0}}>
                            <Text>{details}</Text>
                        </ScrollView>
                        <Text
                            style={{ marginBottom: 2, maxWidth: '90%', marginTop: 4 }}
                        >
                            {details}
                        </Text>
                        <TouchableHighlight
                            style={{
                                position: "absolute",
                                right: 2,
                                padding: 4,
                                borderRadius: 15,
                                bottom: -12,
                            }}
                            onPress={() => setUpEditModal({title, details, date, time, frequency, id})}
                            underlayColor={"rgba(0,0,0,0.1)"}
                        >
                            <Ionicons name="ellipsis-horizontal" size={24} />
                        </TouchableHighlight>
                    </Animated.View>
                </View>
            </Animated.View>
        </Pressable>
    );
};