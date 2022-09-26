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
import AsyncStorage from "@react-native-async-storage/async-storage";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";
import Reminder from "../components/Reminder";
import ReminderModal from "../components/ReminderModal.js";
import { Frequencies } from "../public/Frequencies.js"
import { DaysOfWeek } from "../public/DaysOfWeek.js"
import dayjs from "dayjs";
import Ionicons from "@expo/vector-icons/Ionicons";

var weekday = require('dayjs/plugin/weekday')
dayjs.extend(weekday)

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Take a walk",
        complete: true,
        frequency: 2,
        date: "",
        time: "",
        details: "Aim for above 15 mins duration",
        
    },
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
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f64",
        title: "Take medicine",
        complete: false,
        frequency: 2,
        date: "",
        time: "15:00",
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
        title: "Clinic appointment",
        complete: false,
        frequency: 0,
        date: "2022-5-28",
        time: "12:30",
        details: "Clinic name, address, meeting with Dr. Name"
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d74",
        title: "idk",
        complete: false,
        frequency: 0,
        date: "2022-7-1",
        time: "17:30",
        details: "Clinic name, address, meeting with Dr. Name"
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d75",
        title: "Reminder",
        complete: false,
        frequency: 1,
        date: "2022-8-2",
        time: "",
        details: "",
    },
];

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
    const [newFrequency, setNewFrequency] = React.useState(0);
    const [newTitle, setNewTitle] = React.useState("");
    const [newDescription, setNewDescription] = React.useState("");
    const [newTime, setNewTime] = React.useState("");
    const [newDate, setNewDate] = React.useState("");
    const [isEdit, setEdit] = React.useState(false);
    const [editId, setEditId] = React.useState(-1);
    const [loading, setLoading] = React.useState(true);

    const dailyRems = []; //an array of reminders for storing 'daily' reminders
    const datedRems = []; //an array that stores [key: date, value: [array of relevant reminders]] pairs

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity
                onPress={() => {
                    setModalVisible(!isModalVisible);
                }}
                disabled={loading}
            >
                <Ionicons
                    name="add"
                    size={36}
                />
            </TouchableOpacity>
          ),
        });
      }, [navigation, loading]);

    React.useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            setData(await getData());
        };
        fetchData().then(() => setLoading(false));
        if (data !== null) {
            let tempData = [...data]
            tempData.sort((a,b) => 
                dayjs((a.frequency === Frequencies.Daily ? "2022-01-01" : (a.frequency === Frequencies.Weekly) ? dayjs().weekday(DaysOfWeek[dayjs(a.date).format('dddd')]).format("YYYY-MM-DD") : a.date) + a.time) 
                - dayjs((b.frequency === Frequencies.Daily ? "2022-01-01" : (b.frequency === Frequencies.Weekly) ? dayjs().weekday(DaysOfWeek[dayjs(b.date).format('dddd')]).format("YYYY-MM-DD") : b.date) + b.time)
                );
            setData(tempData);
        }
    }, []);

    const setUpEditModal = ({title, details, date, time, frequency, id}) => {
        setEdit(true);
        setNewTitle(title);
        setNewDescription(details);
        setNewFrequency(frequency);
        setNewDate(date);
        setNewTime(time);
        setEditId(id);
        setModalVisible(!isModalVisible);
    };

    const renderReminder = ({ item }) => (
        <Reminder
            id={item.id}
            title={item.title}
            time={item.time}
            complete={item.complete}
            details={item.details}
            frequency={item.frequency}
            date={item.date}
            data={data}
            setData={setData}
            setUpEditModal={setUpEditModal}
        />
    );

    const renderDates = ({ item }) => (
        <View style={{ marginBottom: "2%" }}>
            <Text>{dayjs(item.date).isValid() ? dayjs(item.date).format("dddd DD MMMM YYYY") : `${item.date}`}</Text>
            <View style={{
                width: "100%",
                borderBottomColor: "#EEE",
                borderBottomWidth: 1,
            }} />
            <FlatList
                data={item.rems}
                renderItem={renderReminder}
                keyExtractor={(item) => item.id}
            />
        </View>
    );

    if (data !== null) {
        data.map((reminder) => {
            if (reminder.frequency === Frequencies.Daily) {
                dailyRems.push(reminder);
            } else if (reminder.frequency === Frequencies.Weekly) {
                let dayOfWeek = dayjs().weekday(DaysOfWeek[dayjs(reminder.date).format('dddd')]).format("YYYY-MM-DD");
                let dateIndex = datedRems.findIndex(
                    (obj) => obj.date === dayOfWeek
                )
                if (dateIndex === -1) {
                    datedRems.push({ date: dayOfWeek, rems: [reminder] });
                } else {
                    datedRems[dateIndex].rems.push(reminder);
                }
            } else {
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
    }

    return (
        <View style={{ flex: 1 }}>
            <ReminderModal 
                isModalVisible={isModalVisible}
                setModalVisible={setModalVisible}
                newTitle={newTitle}
                setNewTitle={setNewTitle}
                newDescription={newDescription}
                setNewDescription={setNewDescription}
                newDate={newDate}
                setNewDate={setNewDate}
                newTime={newTime}
                setNewTime={setNewTime}
                newFrequency={newFrequency}
                setNewFrequency={setNewFrequency}
                isEdit={isEdit}
                setEdit={setEdit}
                editId={editId}
                setEditId={setEditId}
                data={data}
                setData={setData}
            />
            <View
                style={[
                    styles.underModal,
                    { display: isModalVisible ? "flex" : "none" },
                ]}
            />
            <View style={[styles.wideTile, styles.blueBackground, {marginTop: 5, maxHeight: 250}]}>
                <Text style={[styles.subHeader, { color: "#FFF" }]}>
                    Daily Reminders
                </Text>
                <FlatList
                    data={dailyRems}
                    renderItem={renderReminder}
                    keyExtractor={(item) => item.id}
                />
            </View>
            { loading ? <Text style={{alignSelf: "center", margin: 20}}>loading...</Text> : null }
            <FlatList
                style={styles.wideTile}
                data={datedRems}
                renderItem={renderDates}
                keyExtractor={(item) => item.date}
            />
            <View
                style={{
                    position: "absolute",
                    bottom: 0,
                    alignSelf: "flex-end",
                    marginBottom: 10,
                    marginRight: 10,
                }}
            >
            </View>
        </View>
    );
};
