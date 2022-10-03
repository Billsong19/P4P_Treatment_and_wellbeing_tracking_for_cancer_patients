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
import { CheckBox } from "expo-checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import { Frequencies } from "../public/Frequencies.js";
import { DaysOfWeek } from "../public/DaysOfWeek.js";
import { sortDataByDateTime } from "../screens/RemindersScreen.js";

var weekday = require("dayjs/plugin/weekday");
dayjs.extend(weekday);

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@reminders", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

/*
  ReminderModal is a component for use in the RemindersScreen, it can be used to create new reminders
  as well as to edit pre-existing ones configurable throught the status of props.isEdit.
  The date picker will default to current time upon opening to create a new reminder, or if the provided
  date time for the edit request is invalid. ReminderModal is highly dependent on being passed a 
  set of data from RemindersScreen as props.
*/
export default ReminderModal = (props) => {
  const [dateTime, setDateTime] = React.useState(new Date());
  const [pickerMode, setPickerMode] = React.useState("date");
  const [pickerVisible, setPickerVisible] = React.useState(false);
  const [processing, setProcessing] = React.useState(false);
  const [weeklyDay, setWeeklyDay] = React.useState(DaysOfWeek.Sunday);

  const clearModal = () => {
    props.setNewTitle("");
    props.setNewDescription("");
    props.setNewFrequency(0);
    props.setEditId(-1);
    props.setEdit(false);
    props.setModalVisible(!props.isModalVisible);
    setWeeklyDay(DaysOfWeek.Monday);
    setDateTime(new Date());
    setProcessing(false);
  };

  const saveReminder = (data, setData) => {
    setProcessing(true);
    let tempRems = props.data == null ? [] : [...props.data];
    if (props.isEdit) {
      const index = data.findIndex((reminder) => reminder.id === props.editId);
      if (index >= 0) {
        tempRems[index] = {
          id: props.editId,
          title: props.newTitle,
          complete: false,
          frequency: props.newFrequency,
          date_time:
            props.newFrequency === Frequencies.Daily
              ? dayjs()
              : props.newFrequency === Frequencies.Weekly
              ? dayjs().weekday(weeklyDay)
              : dayjs(dateTime),
          details: props.newDescription,
        };
      } else {
        Alert.alert("An error occurred while saving the reminder");
      }
    } else {
      tempRems.push({
        id: uuidv4(),
        title: props.newTitle,
        complete: false,
        frequency: props.newFrequency,
        date_time:
          props.newFrequency === Frequencies.Daily
            ? dayjs()
            : props.newFrequency === Frequencies.Weekly
            ? dayjs().weekday(weeklyDay)
            : dayjs(dateTime),
        details: props.newDescription,
      });
    }

    setData(sortDataByDateTime(tempRems));
    const saveData = async (data) => {
      storeData(data);
    };
    saveData(tempRems);
    clearModal();
  };

  const deleteReminder = (delId) => {
    let tempRems = [...props.data];
    let index = tempRems.findIndex((reminder) => reminder.id === delId);
    if (index !== -1) tempRems.splice(index, 1);
    props.setData(tempRems);
    clearModal();
    const saveData = async (data) => {
      storeData(data);
    };
    saveData(tempRems);
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
    if (props.editId == -1) {
      setDateTime(new Date());
    } else if (
      props.newDate !== "" &&
      props.newFrequency === Frequencies.Once &&
      dayjs(props.newDate + " " + props.newTime).isValid()
    ) {
      setDateTime(new Date(dayjs(props.newDate + " " + props.newTime)));
    } else if (
      props.newTime !== "" &&
      dayjs(dayjs() + " " + props.newTime).isValid()
    ) {
      setDateTime(new Date(dayjs(dayjs() + " " + props.newTime)));
    } else {
      setDateTime(new Date());
    }
    if (props.newFrequency === Frequencies.Weekly) {
      setWeeklyDay(DaysOfWeek[dayjs(props.newDate).format("dddd")]);
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
          {props.isEdit ? "Edit Reminder" : "Add New Reminder"}
        </Text>
        <Text style={styles.subHeader}>Title</Text>
        <TextInput
          id="TitleInput"
          style={styles.textEntry}
          value={props.newTitle}
          onChangeText={props.setNewTitle}
        />
        <Text style={styles.subHeader}>Description</Text>
        <TextInput
          style={styles.largeTextEntry}
          multiline={true}
          textAlignVertical="top"
          value={props.newDescription}
          onChangeText={props.setNewDescription}
        />
        <Text style={styles.subHeader}>When</Text>
        <View
          style={{
            display: "flex",
            flexDirection:
              props.newFrequency === Frequencies.Weekly ? "column" : "row",
            justifyContent: "center",
          }}
        >
          {Platform.OS === "android" && (
            <View>
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
              {props.newFrequency === Frequencies.Once && (
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
                    props.newFrequency === Frequencies.Weekly
                      ? { alignSelf: "flex-start" }
                      : { alignSelf: "center" }
                  }
                  value={dateTime}
                  mode={pickerMode}
                  onChange={onPickerChange}
                />
              )}
            </View>
          )}
          {Platform.OS === "ios" && (
            <View style={{ margin: 5 }}>
              <DateTimePicker
                style={
                  props.newFrequency === Frequencies.Once
                    ? { width: 215 }
                    : { width: 94, alignSelf: "center" }
                }
                value={dateTime}
                mode={
                  props.newFrequency === Frequencies.Once ? "datetime" : "time"
                }
                onChange={onPickerChange}
                minimumDate={
                  props.newFrequency === Frequencies.Once && new Date()
                }
              />
            </View>
          )}
          {props.newFrequency === Frequencies.Weekly && (
            <View style={{ display: "flex", flexDirection: "row" }}>
              {Object.keys(DaysOfWeek).map((day) => {
                return renderRadioDOW(day);
              })}
            </View>
          )}
        </View>
        <Text style={styles.subHeader}>Frequency</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ flex: 1, margin: 10 }}>
            <Pressable
              style={[styles.emptyRadioButton, styles.blueBorder]}
              onPress={() => props.setNewFrequency(Frequencies.Once)}
            >
              {props.newFrequency == Frequencies.Once && (
                <View style={styles.radioFill} />
              )}
            </Pressable>
            <Text style={{ alignSelf: "center" }}>Once</Text>
          </View>
          <View style={{ flex: 1, margin: 10 }}>
            <Pressable
              style={[styles.emptyRadioButton, styles.blueBorder]}
              onPress={() => props.setNewFrequency(Frequencies.Weekly)}
            >
              {props.newFrequency == Frequencies.Weekly && (
                <View style={styles.radioFill} />
              )}
            </Pressable>
            <Text style={{ alignSelf: "center" }}>Weekly</Text>
          </View>
          <View style={{ flex: 1, margin: 10 }}>
            <Pressable
              style={[styles.emptyRadioButton, styles.blueBorder]}
              onPress={() => props.setNewFrequency(Frequencies.Daily)}
            >
              {props.newFrequency == Frequencies.Daily && (
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
          onPress={() => saveReminder(props.data, props.setData)}
        >
          <Text style={[styles.mainHeader, { alignSelf: "center" }]}>
            {processing ? "Saving" : props.isEdit ? "Save" : "Add"}
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
        {props.isEdit && (
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
                `Are you sure you want to delete your reminder: ${props.newTitle}?`,
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
