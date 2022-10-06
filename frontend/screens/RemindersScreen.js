import * as React from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import styles from "../styles.js";
import "react-native-get-random-values";
import Reminder from "../components/Reminder";
import ReminderModal from "../components/ReminderModal.js";
import { Frequencies } from "../public/Frequencies.js";
import dayjs from "dayjs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getReminderContext } from "../reminderContextProvider";

var weekday = require("dayjs/plugin/weekday");
dayjs.extend(weekday);

export const RemindersScreen = ({ navigation }) => {
  const [data, setData] = React.useState([]);
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [editId, setEditId] = React.useState(null);

  const reminderContext = getReminderContext();
  const reminders = reminderContext.reminders;
  const loading = reminderContext.isLoading;

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
          <Ionicons name="add" size={36} color={loading ? "#666" : "#000"} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, loading]);

  const setUpEditModal = (_id) => {
    setEditId(_id);
    setModalVisible(!isModalVisible);
  };

  const renderReminder = ({ item }) => (
    <Reminder
      _id={item._id}
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
        keyExtractor={(item) => item._id}
      />
    </View>
  );

    // sort reminders into daily, and dated, with dated being further sorted into dates
    const categoriseReminders = (data) => {
      if (data !== null) {
        data.map((reminder) => {
          if (reminder.frequency === Frequencies.Daily) {
            dailyRems.push(reminder);
          } else {
            let dateIndex = datedRems.findIndex(
              (obj) =>
                obj.date === dayjs(reminder?.date_time).format("dddd DD MMMM YYYY")
            );
            if (dateIndex === -1) {
              datedRems.push({
                date: dayjs(reminder?.date_time).format("dddd DD MMMM YYYY"),
                rems: [reminder],
              });
            } else {
              datedRems[dateIndex].rems.push(reminder);
            }
          }
        });
      }
    }

  categoriseReminders(reminders);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ReminderModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        editId={editId}
        setEditId={setEditId}
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
          keyExtractor={(item) => item._id}
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