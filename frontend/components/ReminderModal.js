import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  Modal,
  TouchableOpacity,
  TextInput,
  Pressable,
  Alert,
  Platform,
} from "react-native";
import styles, { swGreen, swOrange } from "../styles.js";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import { Frequencies } from "../public/Frequencies.js";
import { DaysOfWeek } from "../public/DaysOfWeek.js";
import { getReminderContext } from "../reminderContextProvider";

var weekday = require("dayjs/plugin/weekday");
dayjs.extend(weekday);

/*
  ReminderModal is a component for use in the RemindersScreen, it can be used to create new reminders
  as well as to edit pre-existing ones configurable throught the status of props.editId.
  The date picker will default to current time upon opening to create a new reminder, or if the provided
  date time for the edit request is invalid.
*/
export default ReminderModal = (props) => {
  const reminderContext = getReminderContext();
  let reminder = reminderContext.getReminderById(props.editId);

  const [dateTime, setDateTime] = React.useState(new Date());
  const [pickerMode, setPickerMode] = React.useState("date");
  const [pickerVisible, setPickerVisible] = React.useState(false);
  const [processing, setProcessing] = React.useState(false);
  const [weeklyDay, setWeeklyDay] = React.useState(DaysOfWeek.Sunday);
  const [newFrequency, setNewFrequency] = React.useState(0);
  const [newTitle, setNewTitle] = React.useState("");
  const [newDescription, setNewDescription] = React.useState("");

  const clearModal = () => {
    setNewTitle("");
    setNewDescription("");
    setNewFrequency(0);
    props.setEditId(null);
    props.setModalVisible(!props.isModalVisible);
    setWeeklyDay(DaysOfWeek.Sunday);
    setDateTime(new Date());
    setProcessing(false);
  };

  const saveReminder = () => {
    setProcessing(true);
    if (props.editId) {
      const updatedReminder = {
        _id: props.editId,
        title: newTitle,
        complete: false,
        frequency: newFrequency,
        date_time:
          newFrequency === Frequencies.Weekly
          // if weekly, set date_time to next occurence for the given weekday
          ? dayjs().weekday(weeklyDay).set("h", dayjs(dateTime).get("h")).set("m", dayjs(dateTime).get("m"))
          : dayjs(dateTime),
        details: newDescription,
      };
      reminderContext.editReminder(updatedReminder);
    } else {
      const newReminder = {
        _id: uuidv4(),
        title: newTitle,
        complete: false,
        frequency: newFrequency,
        date_time:
            newFrequency === Frequencies.Weekly
            // if weekly, set date_time to next occurence for the given weekday
            ? dayjs().weekday(weeklyDay).set("h", dayjs(dateTime).get("h")).set("m", dayjs(dateTime).get("m"))
            : dayjs(dateTime),
        details: newDescription,
      };
      reminderContext.addReminder(newReminder);
    }
    clearModal();
  };

  const deleteReminder = (deleteId) => {
    setProcessing(true);
    reminderContext.deleteReminder(deleteId);
    clearModal();
  };

  const onPickerChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setPickerVisible(false);
    setDateTime(currentDate);
  };

  const showPicker = (mode) => {
    if (Platform.OS === "android") {
      setPickerVisible(false);
    }
    setPickerMode(mode);
    setPickerVisible(true);
  };

  const renderRadioDOW = (dayOfWeek) => {
    return (
      <View style={{ flex: 1, margin: 10 }} key={dayOfWeek}>
        <Pressable
          style={[styles.emptyRadioButton, styles.blueBorder]}
          onPress={() => setWeeklyDay(DaysOfWeek[dayOfWeek])}
        >
          {weeklyDay == DaysOfWeek[dayOfWeek] && (
            <View style={styles.radioFill} />
          )}
        </Pressable>
        <Text style={{ alignSelf: "center" }}>{dayOfWeek.substring(0, 2)}</Text>
      </View>
    );
  };

  React.useEffect(() => {
    if (!props.editId) {
      setDateTime(new Date());
      setNewFrequency(0);
      setNewTitle("");
      setNewDescription("")
      setWeeklyDay(DaysOfWeek.Sunday)
    } else {
      reminder = reminderContext.getReminderById(props.editId);
      setDateTime(dayjs(reminder.date_time))
      setNewFrequency(reminder.frequency);
      setNewTitle(reminder.title);
      setNewDescription(reminder.details);
      setWeeklyDay(DaysOfWeek[dayjs(reminder.date_time).format("dddd")])
    }
  }, [props.editId]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isModalVisible}
      onRequestClose={() => props.setModalVisible(false)}
    >
      <ScrollView style={styles.modalBase}>
        <Text style={[styles.mainHeader, { marginBottom: "4%" }]}>
          {props.editId ? "Edit Reminder" : "Add New Reminder"}
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
          multiline={true}
          textAlignVertical="top"
          value={newDescription}
          onChangeText={setNewDescription}
        />
        <Text style={styles.subHeader}>When</Text>
        {Platform.OS === "android" && (
          <View style={{
            flexDirection:
              newFrequency === Frequencies.Weekly ? "column" : "row",
            justifyContent: "center",
          }}>
            <TouchableOpacity
              onPress={() => {
                showPicker("time");
              }}
              style={styles.dateButton}
            >
              <Text style={styles.subHeader}>
                {dayjs(dateTime).format("HH:mm")}
              </Text>
            </TouchableOpacity>
            {newFrequency === Frequencies.Once && (
              <TouchableOpacity
                onPress={() => {
                  showPicker("date");
                }}
                style={styles.dateButton}
              >
                <Text style={styles.subHeader}>
                  {dayjs(dateTime).format("ddd D MMM YYYY")}
                </Text>
              </TouchableOpacity>
            )}
            {pickerVisible && (
              <DateTimePicker
                style={
                  newFrequency === Frequencies.Weekly
                    ? { alignSelf: "flex-start" }
                    : { alignSelf: "center" }
                }
                value={new Date(dateTime)}
                mode={pickerMode}
                onChange={onPickerChange}
              />
            )}
          </View>
        )}
        {Platform.OS === "ios" && (
          <View style={{
              margin: 5,
              flexDirection:
                newFrequency === Frequencies.Weekly ? "column" : "row",
              justifyContent: "center",
             }}>
            <DateTimePicker
              style={
                newFrequency === Frequencies.Once
                  ? { width: 215 }
                  : { width: 94, alignSelf: "center" }
              }
              value={new Date(dateTime)}
              mode={
                newFrequency === Frequencies.Once ? "datetime" : "time"
              }
              onChange={onPickerChange}
              minimumDate={
                newFrequency === Frequencies.Once && new Date()
              }
            />
          </View>
        )}
        {newFrequency === Frequencies.Weekly && (
          <View style={{ display: "flex", flexDirection: "row" }}>
            {Object.keys(DaysOfWeek).map((day) => {
              return renderRadioDOW(day);
            })}
          </View>
        )}
        <Text style={styles.subHeader}>Frequency</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ flex: 1, margin: 10 }}>
            <Pressable
              style={[styles.emptyRadioButton, styles.blueBorder]}
              onPress={() => setNewFrequency(Frequencies.Once)}
            >
              {newFrequency == Frequencies.Once && (
                <View style={styles.radioFill} />
              )}
            </Pressable>
            <Text style={{ alignSelf: "center" }}>Once</Text>
          </View>
          <View style={{ flex: 1, margin: 10 }}>
            <Pressable
              style={[styles.emptyRadioButton, styles.blueBorder]}
              onPress={() => setNewFrequency(Frequencies.Weekly)}
            >
              {newFrequency == Frequencies.Weekly && (
                <View style={styles.radioFill} />
              )}
            </Pressable>
            <Text style={{ alignSelf: "center" }}>Weekly</Text>
          </View>
          <View style={{ flex: 1, margin: 10 }}>
            <Pressable
              style={[styles.emptyRadioButton, styles.blueBorder]}
              onPress={() => setNewFrequency(Frequencies.Daily)}
            >
              {newFrequency == Frequencies.Daily && (
                <View style={styles.radioFill} />
              )}
            </Pressable>
            <Text style={{ alignSelf: "center" }}>Daily</Text>
          </View>
        </View>
        <Pressable
          disabled={processing}
          style={[
            styles.wideButton,
            {
              margin: 10,
              marginHorizontal: "30%",
              backgroundColor: processing ? "#CCC" : swGreen,
            },
          ]}
          onPress={() => saveReminder()}
        >
          <Text style={[styles.mainHeader, { alignSelf: "center" }]}>
            {processing ? "Saving" : props.editId ? "Save" : "Add"}
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.wideButton,
            {
              margin: 10,
              marginHorizontal: "30%",
              backgroundColor: processing ? "#CCC" : swOrange,
            },
          ]}
          onPress={() => clearModal()}
        >
          <Text
            style={{
              fontSize: 16,
              alignSelf: "center",
            }}
          >
            Cancel
          </Text>
        </Pressable>
        {props.editId && (
          <Pressable
            style={[
              styles.wideButton,
              {
                borderRadius: 4,
                padding: 8,
                marginTop: 50,
                marginHorizontal: "30%",
                borderWidth: 2,
                borderStyle: "solid",
                borderColor: "#CF3028",
              },
            ]}
            onPress={async () =>
              Alert.alert(
                "Delete Reminder",
                `Are you sure you want to delete your reminder: ${reminder.title}?`,
                [
                  {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel",
                  },
                  { text: "YES", onPress: () => deleteReminder(props.editId) },
                ]
              )
            }
          >
            <Text
              style={[
                styles.subHeader,
                {
                  fontSize: 16,
                  alignSelf: "center",
                  color: "#CF3028",
                },
              ]}
            >
              Delete
            </Text>
          </Pressable>
        )}
      </ScrollView>
    </Modal>
  );
};
