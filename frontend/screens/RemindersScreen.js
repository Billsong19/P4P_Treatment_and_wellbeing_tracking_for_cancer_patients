import * as React from "react";
import {
    FlatList,
    Animated,
    Text,
    View,
    ScrollView,
    CheckBox,
    Modal,
    Image,
    TouchableOpacity,
    TextInput,
    Pressable,
} from "react-native";
import plusImage from "../public/plus.svg";
import styles from "../styles.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/Ionicons";
import { v4 as uuidv4 } from "uuid";

// const DATA = [
//     {
//         id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//         title: "Take a walk",
//         complete: true,
//         date: "daily",
//         time: "",
//         details: "Aim for above 15 mins duration",
//     },
//     {
//         id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//         title: "Take medicine",
//         complete: true,
//         date: "daily",
//         time: "10:00",
//         details: "two 50mg tablets",
//     },
//     {
//         id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f64",
//         title: "Take medicine",
//         complete: false,
//         date: "daily",
//         time: "15:00",
//         details: "two 50mg tablets",
//     },
//     {
//         id: "58694a0f-3da1-471f-bd96-145571e29d72",
//         title: "Clinic appointment",
//         complete: false,
//         date: "20/5/2022",
//         time: "16:30",
//         details: "Clinic name, address, meeting with Dr. Name"
//     },
//     {
//         id: "58694a0f-3da1-471f-bd96-145571e29d73",
//         title: "Clinic appointment",
//         complete: false,
//         date: "28/5/2022",
//         time: "12:30",
//         details: "Clinic name, address, meeting with Dr. Name"
//     },
//     {
//         id: "58694a0f-3da1-471f-bd96-145571e29d74",
//         title: "idk",
//         complete: false,
//         date: "28/5/2022",
//         time: "17:30",
//         details: "Clinic name, address, meeting with Dr. Name"
//     },
//     {
//         id: "58694a0f-3da1-471f-bd96-145571e29d75",
//         title: "Reminder",
//         complete: false,
//         date: "28/5/2022",
//         time: "",
//         details: "",
//     },
// ];

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("@reminders", jsonValue);
    } catch (e) {
        console.log(e);
    }
};

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem("@reminders");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log(e);
    }
};

export const RemindersScreen = ({ navigation }) => {
    const [data, setData] = React.useState([]);
    const [isModalVisible, setModalVisible] = React.useState(false);
    const [frequency, setFrequency] = React.useState(0);
    const [newTitle, setNewTitle] = React.useState("");
    const [newDescription, setNewDescription] = React.useState("");
    const [newTime, setNewTime] = React.useState("00:00");
    const [newDate, setNewDate] = React.useState("1/1/2022");
    const [isEdit, setEdit] = React.useState(false);
    const [editId, setEditId] = React.useState(-1);

    const dailyRems = []; //simply an array of reminders for storing 'daily' reminders
    const datedRems = []; //an array that contains [key: date, value: [array of relevant reminders]] pairs

    const Reminder = ({ id, title, time, details, complete, date }) => {
        const startingHeight = 30;
        const [isExpanded, setExpanded] = React.useState(false);
        const [isComplete, setComplete] = React.useState(complete);
        const [fullHeight, setFullHeight] = React.useState(startingHeight);
        const animatedHeight = React.useRef(
            new Animated.Value(startingHeight)
        ).current;
        const fadeAnim = React.useRef(new Animated.Value(0)).current;

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

        const onTextLayout = (e) => {
            let { x, y, width, height } = e.nativeEvent.layout;
            height = Math.floor(height) + startingHeight + 15;
            if (height > startingHeight) {
                setFullHeight(height);
            }
        };

        const setUpEditModal = () => {
            setEdit(true);
            setNewTitle(title);
            setNewDescription(details);
            setNewTime(time);
            setEditId(id);
            setModalVisible(!isModalVisible);
        };

        const toggleComplete = async () => {
            const index = data.findIndex((reminder) => reminder.id === id);
            data[index] = {
                id: id,
                title: title,
                complete: !isComplete,
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
                        date === "daily"
                            ? [
                                  styles.blueBorder,
                                  styles.dailyReminder,
                                  { height: animatedHeight },
                              ]
                            : [
                                  styles.tealBorder,
                                  styles.tealBackground50,
                                  styles.datedReminder,
                                  { height: animatedHeight },
                              ]
                    }
                >
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ flex: 2 }}>{title}</Text>
                        <Text style={{ flex: 1 }}>{time}</Text>
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
                        <Text
                            style={{ marginVertical: 10, maxWidth: "90%" }}
                            onLayout={(e) => {
                                onTextLayout(e);
                            }}
                        >
                            {details}
                        </Text>
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                right: "1%",
                                bottom: details ? 6 : 0,
                            }}
                            onPress={() => setUpEditModal()}
                        >
                            <Icon name="ellipsis-horizontal" size={20} />
                        </TouchableOpacity>
                    </Animated.View>
                </Animated.View>
            </Pressable>
        );
    };

    const renderDaily = ({ item }) => (
        <Reminder
            id={item.id}
            title={item.title}
            time={item.time}
            complete={item.complete}
            details={item.details}
            date="daily"
        />
    );

    const renderDated = ({ item }) => (
        <Reminder
            id={item.id}
            title={item.title}
            time={item.time}
            complete={item.complete}
            details={item.details}
            date={item.date}
        />
    );

    const renderDates = ({ item }) => (
        <View style={{ marginBottom: "2%" }}>
            <Text>{item.date}</Text>
            <hr style={{ width: "100%" }} />
            <FlatList
                data={item.rems}
                renderItem={renderDated}
                keyExtractor={(item) => item.id}
            />
        </View>
    );

    React.useEffect(() => {
        const fetchData = async () => {
            setData(await getData());
        };
        fetchData();
    }, []);

    data.map((reminder) => {
        if (reminder.date === "daily") {
            dailyRems.push(reminder);
        } else {
            //TODO implement date sorting since this functionality is entirely FE and users can add reminders
            let dateIndex = datedRems.findIndex(
                (obj) => obj.date === reminder.date
            );
            if (dateIndex === -1) {
                datedRems.push({ date: reminder.date, rems: [reminder] });
            } else {
                datedRems[dateIndex].rems.push(reminder);
            }
        }
    });

    const clearModal = () => {
        setNewTitle("");
        setNewDescription("");
        setNewTime("00:00");
        setNewDate("1/1/2022");
        setFrequency(0);
        setEditId(-1);
        setEdit(false);
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={{ flex: 1 }}>
            <Modal
                animationType="slide"
                transparent="true"
                visible={isModalVisible}
                onRequestClose={() => {
                    setModalVisible(!isModalVisible);
                }}
            >
                <View style={styles.modalBase}>
                    <Text style={[styles.mainHeader, { marginBottom: "4%" }]}>
                        {isEdit ? "Edit Reminder" : "Add New Reminder"}
                    </Text>
                    <Text style={styles.subHeader}>Title</Text>
                    <TextInput
                        id="TitleInput"
                        style={styles.textEntry}
                        value={newTitle}
                        onChangeText={setNewTitle}
                    />
                    <Text style={styles.subHeader}>Description</Text>
                    <TextInput
                        style={styles.largeTextEntry}
                        multiline="true"
                        value={newDescription}
                        onChangeText={setNewDescription}
                    />
                    <Text style={styles.subHeader}>When</Text>
                    <div style={{ display: "flex" }}></div>
                    <Text style={styles.subHeader}>Frequency</Text>
                    <div style={{ display: "flex" }}>
                        <View style={{ flex: 1, margin: 10 }}>
                            <Pressable
                                style={[
                                    styles.emptyRadioButton,
                                    styles.blueBorder,
                                ]}
                                onPress={() => setFrequency(0)}
                            >
                                {frequency == 0 ? (
                                    <View style={styles.radioFill} />
                                ) : null}
                            </Pressable>
                            <Text style={{ margin: "auto" }}>Once</Text>
                        </View>
                        <View style={{ flex: 1, margin: 10 }}>
                            <Pressable
                                style={[
                                    styles.emptyRadioButton,
                                    styles.blueBorder,
                                ]}
                                onPress={() => setFrequency(1)}
                            >
                                {frequency == 1 ? (
                                    <View style={styles.radioFill} />
                                ) : null}
                            </Pressable>
                            <Text style={{ margin: "auto" }}>Weekly</Text>
                        </View>
                        <View style={{ flex: 1, margin: 10 }}>
                            <Pressable
                                style={[
                                    styles.emptyRadioButton,
                                    styles.blueBorder,
                                ]}
                                onPress={() => setFrequency(2)}
                            >
                                {frequency == 2 ? (
                                    <View style={styles.radioFill} />
                                ) : null}
                            </Pressable>
                            <Text style={{ margin: "auto" }}>Daily</Text>
                        </View>
                    </div>
                    <Pressable
                        style={[
                            styles.wideButton,
                            styles.greenBackground,
                            { margin: 10, marginHorizontal: "30%" },
                        ]}
                        onPress={async () => {
                            if (isEdit) {
                                const index = data.findIndex(
                                    (reminder) => reminder.id === editId
                                );
                                data[index] = {
                                    id: editId,
                                    title: newTitle,
                                    complete: false,
                                    time: newTime,
                                    date: frequency === 3 ? "daily" : newDate,
                                    details: newDescription,
                                };
                                setData(data);
                            } else {
                                setData([
                                    ...data,
                                    {
                                        id: uuidv4(),
                                        title: newTitle,
                                        complete: false,
                                        time: newTime,
                                        date:
                                            frequency === 3 ? "daily" : newDate,
                                        details: newDescription,
                                    },
                                ]);
                            }
                            await storeData(data);
                            clearModal();
                        }}
                    >
                        <Text
                            style={[
                                styles.mainHeader,
                                { marginHorizontal: "auto" },
                            ]}
                        >
                            {isEdit ? "Save" : "Add"}
                        </Text>
                    </Pressable>
                    <Pressable
                        style={[
                            styles.wideButton,
                            styles.orangeBackground,
                            { margin: 10, marginHorizontal: "30%" },
                        ]}
                        onPress={() => clearModal()}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                marginHorizontal: "auto",
                            }}
                        >
                            Cancel
                        </Text>
                    </Pressable>
                    {isEdit ? (
                        <Pressable
                            style={[
                                {
                                    borderRadius: 4,
                                    padding: 8,
                                    marginTop: 50,
                                    marginHorizontal: "auto",
                                    border: "2 solid #CF3028",
                                },
                            ]}
                            onPress={async () => {
                                let tempRems = [...data];
                                let index = tempRems.findIndex(
                                    (reminder) => reminder.id === editId
                                );
                                if (index !== -1) tempRems.splice(index, 1);
                                setData(tempRems);
                                await storeData(data);
                                clearModal();
                            }}
                        >
                            <Text
                                style={[
                                    styles.subHeader,
                                    {
                                        fontSize: 16,
                                        marginHorizontal: "auto",
                                        color: "#CF3028",
                                    },
                                ]}
                            >
                                Delete
                            </Text>
                        </Pressable>
                    ) : null}
                </View>
            </Modal>
            <View
                style={[
                    styles.underModal,
                    { display: isModalVisible ? "block" : "none" },
                ]}
            />
            <View style={[styles.wideTile, styles.blueBackground]}>
                <Text style={[styles.subHeader, { color: "#FFF" }]}>
                    Daily Reminders
                </Text>
                <FlatList
                    data={dailyRems}
                    renderItem={renderDaily}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <ScrollView style={styles.wideTile}>
                <FlatList
                    data={datedRems}
                    renderItem={renderDates}
                    keyExtractor={(item) => item.date}
                />
            </ScrollView>
            <View
                style={{
                    position: "absolute",
                    bottom: 0,
                    alignSelf: "flex-end",
                    marginBottom: 10,
                    marginRight: 10,
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        setModalVisible(!isModalVisible);
                    }}
                >
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={plusImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};
