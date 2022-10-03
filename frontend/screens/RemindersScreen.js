import * as React from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import styles from "../styles.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import Reminder from "../components/Reminder";
import ReminderModal from "../components/ReminderModal.js";
import { Frequencies } from "../public/Frequencies.js";
import { DaysOfWeek } from "../public/DaysOfWeek.js";
import dayjs from "dayjs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getUserContext } from "../components/UserContext.js";
import SelectInput from "@mui/material/Select/SelectInput.js";

var weekday = require("dayjs/plugin/weekday");
dayjs.extend(weekday);

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "Take a walk",
//     complete: true,
//     frequency: 2,
//     date: "",
//     time: "",
//     details: "Aim for above 15 mins duration",
//   }]

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
  const [newDateTime, setNewDateTime] = React.useState(new Date());
  const [isEdit, setEdit] = React.useState(false);
  const [editId, setEditId] = React.useState(-1);
  const [loading, setLoading] = React.useState(true);

  const dailyRems = []; //an array of reminders for storing 'daily' reminders
  const datedRems = []; //an array that stores [key: date, value: [array of relevant reminders]] pairs

  const { user } = getUserContext();

  function userIsNull() {
    return user == null;
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!isModalVisible);
          }}
          disabled={loading}
        >
          <Ionicons name="add" size={36} color={loading ? "#666" : "#000"} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, loading]);

  React.useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      setData(await getData());
    };

    console.log("checking userisnull");
    if (userIsNull()) {
      fetchData().then(() => setLoading(false));
    } else {
      console.log("user is not null");
      console.log(user.reminders);
      setData(sortDataByDateTime(user.reminders));
      console.log(data);
      setLoading(false);
    }
  }, []);

  const setUpEditModal = ({ title, details, date_time, frequency, id }) => {
    setEdit(true);
    setNewTitle(title);
    setNewDescription(details);
    setNewFrequency(frequency);
    setNewDateTime(date_time);
    setEditId(id);
    setModalVisible(!isModalVisible);
  };

  const renderReminder = ({ item }) => (
    <Reminder
      id={item.id}
      title={item.title}
      complete={item.complete}
      details={item.details}
      frequency={item.frequency}
      date_time={item.date_time}
      data={data}
      setData={setData}
      setUpEditModal={setUpEditModal}
    />
  );

  const renderDates = ({ item }) => (
    <View style={{ marginBottom: "2%" }}>
      <Text>{item.date}</Text>
      <View
        style={{
          width: "100%",
          borderBottomColor: "#EEE",
          borderBottomWidth: 1,
        }}
      />
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
      } else {
        let dateIndex = datedRems.findIndex(
          (obj) =>
            obj.date === dayjs(reminder.date_time).format("dddd DD MMMM YYYY")
        );
        if (dateIndex === -1) {
          datedRems.push({
            date: dayjs(reminder.date_time).format("dddd DD MMMM YYYY"),
            rems: [reminder],
          });
        } else {
          datedRems[dateIndex].rems.push(reminder);
        }
      }
    });
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ReminderModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newDescription={newDescription}
        setNewDescription={setNewDescription}
        newDateTime={newDateTime}
        setNewDateTime={setNewDateTime}
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
      <View
        style={[
          styles.wideTile,
          styles.blueBackground,
          { marginTop: 5, maxHeight: 250 },
        ]}
      >
        <Text style={[styles.subHeader, { color: "#FFF" }]}>
          Daily Reminders
        </Text>
        <FlatList
          data={dailyRems}
          renderItem={renderReminder}
          keyExtractor={(item) => item.id}
        />
      </View>
      {loading && (
        <Text style={{ alignSelf: "center", margin: 20 }}>loading...</Text>
      )}
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
      ></View>
    </View>
  );
};

// Sorts all reminders in the data by date and time, daily reminders use an old date as they only need to be sorted by time
export function sortDataByDateTime(data) {
  let tempData = [];
  if (!data) {
    throw new Error("data is null");
  } else {
    tempData = [...data];
    tempData.sort((a, b) =>
      dayjs(
        (a.frequency === Frequencies.Daily
          ? dayjs(a.date_time).set("year", 2020).set("month", 1).set("date", 1)
          : dayjs(a.date_time)) -
          dayjs(
            b.frequency === Frequencies.Daily
              ? dayjs(b.date_time)
                  .set("year", 2020)
                  .set("month", 1)
                  .set("date", 1)
              : dayjs(b.date_time)
          )
      )
    );
  }
  return tempData;
}
