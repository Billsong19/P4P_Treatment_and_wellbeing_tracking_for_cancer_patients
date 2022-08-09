import * as React from "react";
import {
    FlatList,
    Text,
    View,
    ScrollView,
    StatusBar,
    StyleSheet,
    Button,
    Modal,
    Image,
    TouchableOpacity,
    TextInput,
    Pressable,
} from "react-native";
import plusImage from "../public/plus.svg";
import styles from "../styles.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const Reminder = ({ title, time, details, complete, daily }) => {
    return (
        <View style={daily ? [styles.blueBorder, styles.dailyReminder] : [styles.tealBorder, styles.tealBackground50, styles.datedReminder]}>
            <Text>{title}</Text>
            <Text>{time}</Text>
            <Text>{complete ? "done" : "not done"}</Text>
            <Text>{details}</Text>
        </View>
    );
};

const renderDaily = ({ item }) => (
    <Reminder
        title={item.title}
        time={item.time}
        complete={item.complete}
        details={item.details}
        daily={true}
    />
);

const renderDated = ({ item }) => (
    <Reminder
        title={item.title}
        time={item.time}
        complete={item.complete}
        details={item.details}
        daily={false}
    />
);

const renderDates = ({ item }) => (
    <View style={{marginBottom: '2%'}}>
        <Text>{item.date}</Text>
        <hr style={{width: '100%'}}/>
        <FlatList
            data={item.rems}
            renderItem={renderDated}
            keyExtractor={(item) => item.id}
        />
    </View>
);

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('@reminders', jsonValue);
    } catch (e) {
        console.log(e);
    }
}

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@reminders')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.log(e)
    }
}

export const RemindersScreen = ({ navigation }) => {
    const [data, setData] = React.useState([]); 
    const [isModalVisible, setModalVisible] = React.useState(false);
    const [frequency, setFrequency] = React.useState(0);
    const [newTitle, setNewTitle] = React.useState("");
    const [newDescription, setNewDescription] = React.useState("");
    const [newTime, setNewTime] = React.useState("00:00");
    const [newDate, setNewDate] = React.useState("1/1/2022");

    const dailyRems = []; //simply an array of reminders for storing 'daily' reminders
    const datedRems = []; //an array that contains [key: date, value: [array of relevant reminders]] pairs

    React.useEffect(() => {
        const fetchData = async () => {
            setData(await getData());
        }
        console.log("fetch");
        fetchData();
    }, [])

    data.map((reminder) => {
        if (reminder.date === "daily") {
            dailyRems.push(reminder);
        } else {
            //TODO implement date sorting since this functionality is entirely FE and users can add reminders
            let dateIndex = datedRems.findIndex((obj) => obj.date === reminder.date);
            if (dateIndex === -1) {
                datedRems.push({date: reminder.date, rems: [reminder]});
            } else {
                datedRems[dateIndex].rems.push(reminder);
            }
        }
    });

    return (
        <View style={{ flex: 1 }}>
            <Modal
                animationType="slide"
                transparent="true"
                visible={isModalVisible}
                onRequestClose={() => {setModalVisible(!isModalVisible)}}>
                <View style={styles.modalBase}>
                    <Text style={[styles.mainHeader, {marginBottom: '4%'}]}>Add New Reminder</Text>
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
                        multiline='true'
                        value={newDescription}
                        onChangeText={setNewDescription}
                    />
                    <Text style={styles.subHeader}>When</Text>
                    <div style={{display: 'flex'}}>
                        <TextInput style={styles.textEntry}></TextInput>
                        <TextInput style={styles.textEntry}></TextInput>
                    </div>
                    <Text style={styles.subHeader}>Frequency</Text>
                    <div style={{display: 'flex'}}>
                        <View style={{flex: 1, margin: '10px'}}>
                            <Pressable
                                style={[styles.emptyRadioButton, styles.blueBorder]}
                                onPress={() => setFrequency(0)}
                                >
                                    {frequency==0 ? <View style={styles.radioFill}/> : null}
                            </Pressable>
                            <Text style={{margin: 'auto'}}>Once</Text>
                        </View>
                        <View style={{flex: 1, margin: '10px'}}>
                            <Pressable
                                style={[styles.emptyRadioButton, styles.blueBorder]}
                                onPress={() => setFrequency(1)}
                                >
                                    {frequency==1 ? <View style={styles.radioFill}/> : null}
                            </Pressable>
                            <Text style={{margin: 'auto'}}>Monthly</Text>
                        </View>
                        <View style={{flex: 1, margin: '10px'}}>
                            <Pressable
                                style={[styles.emptyRadioButton, styles.blueBorder]}
                                onPress={() => setFrequency(2)}
                                >
                                    {frequency==2 ? <View style={styles.radioFill}/> : null}
                            </Pressable>
                            <Text style={{margin: 'auto'}}>Weekly</Text>
                        </View>
                        <View style={{flex: 1, margin: '10px'}}>
                            <Pressable
                                style={[styles.emptyRadioButton, styles.blueBorder]}
                                onPress={() => setFrequency(3)}
                                >
                                    {frequency==3 ? <View style={styles.radioFill}/> : null}
                            </Pressable>
                            <Text style={{margin: 'auto'}}>Daily</Text>
                        </View>
                    </div>
                    <Pressable
                        style={[styles.wideButton, styles.greenBackground, {margin: '10px', marginHorizontal: '30%'}]}
                        onPress={() => {
                            setData([...data, {id: "1", title: newTitle, complete: false, time: newTime, date: frequency===3 ? "daily" : newDate, details: newDescription}]);
                            storeData(data);
                            setNewTitle("");
                            setNewDescription("");
                            setNewTime("00:00");
                            setNewDate("1/1/2022");
                            setFrequency(0);
                            setModalVisible(!isModalVisible);
                        }}
                    >
                        <Text style={{ fontSize: "20px", marginHorizontal: "auto" }}>Add</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.wideButton, styles.orangeBackground, {margin: '10px', marginHorizontal: '30%'}]}
                        onPress={() => {setModalVisible(!isModalVisible)}}
                    >
                        <Text style={{ fontSize: "16px", marginHorizontal: "auto" }}>Cancel</Text>
                    </Pressable>
                </View>
            </Modal>
            <View style={[styles.underModal, {display: isModalVisible ? 'block' : 'none'}]}/>
            <View style={[styles.wideTile, styles.blueBackground]}>
                <Text style={[styles.subHeader, {color: '#FFF'}]}>Daily Reminders</Text>
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
                        setModalVisible(!isModalVisible)
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