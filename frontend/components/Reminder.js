import * as React from "react";
import {
    FlatList,
    Animated,
    Text,
    View,
    ScrollView,
    Modal,
    Image,
    TouchableOpacity,
    TextInput,
    Pressable,
} from "react-native";
import styles from "../styles.js";
import IonIcons from "@expo/vector-icons/Ionicons";
import CheckBox from 'expo-checkbox';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUpEditModal } from "./ReminderModal.js";

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("@reminders", jsonValue);
    } catch (e) {
        console.log(e);
    }
};

export default Reminder = ({ id, title, time, details, complete, frequency, date, data, setData, setUpEditModal }) => {
    const startingHeight = 35;
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
    }, [isExpanded]);

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

    const onTextLayout = (e) => {
        let { x, y, width, height } = e.nativeEvent.layout;
        height = Math.floor(height) + startingHeight + 15;
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
            onLongPress={() => toggleComplete()}
            onPress={() => setExpanded(!isExpanded)}
        >
            <Animated.View
                style={
                    frequency === 2
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
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ flex: 3, fontSize: 18 }}>{title}</Text>
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
                        <Text onLayout={(e) => {
                            onTextLayout(e);
                        }}>{details}</Text>
                    </ScrollView>
                    <Text
                        style={{ marginBottom: 2, maxWidth: '90%', marginTop: 4 }}
                    >
                        {details}
                    </Text>
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            right: "1%",
                            bottom: -4,
                        }}
                        onPress={() => setUpEditModal({title, details, date, time, frequency, id})}
                    >
                        <IonIcons name="ellipsis-horizontal" size={20} />
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>
        </Pressable>
    );
};