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
import { getUserContext } from "../userContext.js";
import { sortDataByDateTime } from "../components/ReminderModal.js";

var weekday = require("dayjs/plugin/weekday");
dayjs.extend(weekday);

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
      return await getData();
    };

    let tempData = null;
    if (userIsNull()) {
      fetchData().then((fetch) => tempData = fetch);
    } else {
      tempData = user.reminders;
      setLoading(false);
    }
    setData(sortDataByDateTime(cleanUpReminders(tempData)));
    categoriseReminders(data);
  }, []);

  const setUpEditModal = ({ title, details, date_time, frequency, id }) => {
    setEdit(true);
    setNewTitle(title);
    setNewDescription(details);
    setNewFrequency(frequency);
    setNewDateTime(new Date(date_time));
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

  const cleanUpReminders = (data) => {
    if (data !== null) {
      let tempData = [...data];
      data.map((reminder, index) => {
        if (reminder.frequency !== Frequencies.Daily) {
          //reset daily
        } else {
          // clean up old reminders, delete them if complete, set missed if not complete, and repeat if weekly frequency
          if (dayjs().isAfter(reminder.date_time)) {
            if (reminder.frequency === Frequencies.Weekly) {
              const nextWeekRem = reminder
              nextWeekRem.date_time = dayjs(nextWeekRem.date_time).add(7, 'd')
              tempData.push(nextWeekRem)
            }
            if (reminder.complete) {
              tempData.splice(index, 1)
            }
          }
        }
      });
      return tempData;
    }
  }

  // sort reminders into daily, and dated, with dated being further sorted into dates
  const categoriseReminders = (data) => {
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
  }

  categoriseReminders(data);

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
        { dailyRems.length > 0 ? 
        <FlatList
          data={dailyRems}
          renderItem={renderReminder}
          keyExtractor={(item) => item.id}
        />
        : <Text style={[styles.subHeader2, {alignSelf: "center", margin: 10, color: "#FFF"}]}>No Daily Reminders</Text>
        }
      </View>
      {loading && (
        <Text style={{ alignSelf: "center", margin: 20 }}>loading...</Text>
      )}
      { datedRems.length > 0 ?
      <FlatList
        style={styles.wideTile}
        data={datedRems}
        renderItem={renderDates}
        keyExtractor={(item) => item.date}
      />
      : <Text style={{alignSelf: "center", margin: 20}}>No Upcoming Reminders</Text>
        }
      <View
        style={{
          position: "absolute",
          bottom: 0,
          alignSelf: "flex-end",
          marginBottom: 10,
          marginRight: 10,
        }}
      />
    </View>
  );
};