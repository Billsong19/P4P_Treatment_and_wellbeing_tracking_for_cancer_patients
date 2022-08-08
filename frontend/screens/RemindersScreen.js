import * as React from "react";
import {
    FlatList,
    Text,
    View,
    ScrollView,
    StatusBar,
    StyleSheet,
    Button,
    Image,
    TouchableOpacity,
} from "react-native";
import plusImage from "../public/plus.svg";
import styles from "../styles.js";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Take a walk",
        complete: true,
        date: "daily",
        time: "",
        details: "Aim for above 15 mins duration",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Take medicine",
        complete: true,
        date: "daily",
        time: "10:00",
        details: "two 50mg tablets",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f64",
        title: "Take medicine",
        complete: false,
        date: "daily",
        time: "15:00",
        details: "two 50mg tablets",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Clinic appointment",
        complete: false,
        date: "20/5/2022",
        time: "16:30",
        details: "Clinic name, address, meeting with Dr. Name"
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d73",
        title: "Clinic appointment",
        complete: false,
        date: "28/5/2022",
        time: "12:30",
        details: "Clinic name, address, meeting with Dr. Name"
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d74",
        title: "idk",
        complete: false,
        date: "28/5/2022",
        time: "17:30",
        details: "Clinic name, address, meeting with Dr. Name"
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d75",
        title: "Reminder",
        complete: false,
        date: "28/5/2022",
        time: "",
        details: "",
    },
];

const tempDailyRems = [];
const tempDatedRems = [];

DATA.map((reminder) => {
    if (reminder.date === "daily") {
        tempDailyRems.push(reminder);
    } else {
        //TODO implement date sorting since this functioanlity is entirely FE and users can add reminders
        let dateIndex = tempDatedRems.findIndex((obj) => obj.date === reminder.date);
        if (dateIndex === -1) {
            tempDatedRems.push({date: reminder.date, rems: [reminder]});
        } else {
            tempDatedRems[dateIndex].rems.push(reminder);
        }
    }
});

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

export const RemindersScreen = ({ navigation, data }) => {
    const [dailyRems, setDailyRems] = React.useState(tempDailyRems); //simply an array of reminders for storing 'daily' reminders
    const [datedRems, setDatedRems] = React.useState(tempDatedRems); //an array that contains [key: date, value: [array of relevant reminders]] pairs

    console.log(datedRems);
    console.log(dailyRems);

    

    

    return (
        <View style={{ flex: 1 }}>
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
                        console.log("hi");
                        navigation.navigate("Add Reminder");
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

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: StatusBar.currentHeight || 0,
//     },
//     item: {
//         backgroundColor: "lightblue",
//         padding: 20,
//         marginVertical: 8,
//         marginHorizontal: 16,
//     },
//     title: {
//         fontSize: 32,
//     },
// });
