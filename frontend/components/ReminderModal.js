import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  Modal,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import styles from "../styles.js";
import { CheckBox } from "expo-checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@reminders", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export default ReminderModal = (props) => {
  const [dateTime, setDateTime] = React.useState(new Date());
  const [pickerMode, setPickerMode] = React.useState("date");
  const [pickerVisible, setPickerVisible] = React.useState(false);

  const clearModal = () => {
    props.setNewTitle("");
    props.setNewDescription("");
    props.setNewFrequency(0);
    props.setEditId(-1);
    props.setEdit(false);
    props.setModalVisible(!props.isModalVisible);
    setDateTime(new Date());
  };

  const saveReminder = async (data, setData) => {
    let tempRems = (props.data == null) ? [] : [...props.data];
    if (props.isEdit) {
      const index = data.findIndex((reminder) => reminder.id === props.editId);
      tempRems[index] = {
        id: props.editId,
        title: props.newTitle,
        complete: false,
        frequency: props.newFrequency,
        date: dayjs(dateTime).format("YYYY/MM/DD"),
        time: dayjs(dateTime).format("HH:mm"),
        details: props.newDescription,
      };
    } else {
      tempRems.push({
        id: uuidv4(),
        title: props.newTitle,
        complete: false,
        frequency: props.newFrequency,
        date: dayjs(dateTime).format("YYYY/MM/DD"),
        time: dayjs(dateTime).format("HH:mm"),
        details: props.newDescription,
      });
    }
    setData(tempRems);
    await storeData(tempRems);
    clearModal();
  };

  const onPickerChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setPickerVisible(false);
    setDateTime(currentDate);
  };

  const showPicker = (mode) => {
    if (Platform.OS === 'android') {
      setPickerVisible(false);
      // for iOS, add a button that closes the picker
    }
    setPickerMode(mode);
    setPickerVisible(true);
  };

  React.useEffect(() => {
    if (props.editId == -1) {
      setDateTime(new Date());
    } else if (
      props.newDate !== "" &&
      dayjs(props.newDate + " " + props.newTime).isValid()
    ) {
      setDateTime(new Date(dayjs(props.newDate + " " + props.newTime)));
    } else if (
      props.newTime !== "" &&
      dayjs(dayjs().format("YYYY-MM-DD") + " " + props.newTime).isValid()
    ) {
      setDateTime(
        new Date(dayjs(dayjs().format("YYYY-MM-DD") + " " + props.newTime))
      );
    } else {
      setDateTime(new Date());
    }
  }, [props.editId]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isModalVisible}
      onRequestClose={() => {
        setModalVisible(!props.isModalVisible);
      }}
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
          style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
        >
          <TouchableOpacity
            onPress={() => {showPicker("time")}}
            style={styles.dateButton}
          >
            <Text style={styles.subHeader}>
              {dayjs(dateTime).format("HH:mm")}
            </Text>
          </TouchableOpacity>
          {props.newFrequency === 0 && 
          <TouchableOpacity
            onPress={() => {showPicker("date")}}
            style={styles.dateButton}
          >
            <Text style={styles.subHeader}>
              {dayjs(dateTime).format("ddd D MMM YYYY")}
            </Text>
          </TouchableOpacity>
          }
          {pickerVisible && 
          <DateTimePicker
            style={
              props.newFrequency === 1
                ? { alignSelf: "flex-start" }
                : { alignSelf: "center" }
            }
            value={dateTime}
            mode={pickerMode}
            onChange={onPickerChange}
          />
          }
          {/* {props.newFrequency === 1
                        ? <View>
                            <View>
                                <Text>M</Text>
                                <CheckBox
                                    value={isMonday}
                                    style={styles.remindersCheck}
                                    onValueChange={() => {
                                        setMonday(!isMonday)
                                    }}
                                />
                            </View>
                        </View>
                        : null} */}
        </View>
        <Text style={styles.subHeader}>Frequency</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ flex: 1, margin: 10 }}>
            <Pressable
              style={[styles.emptyRadioButton, styles.blueBorder]}
              onPress={() => props.setNewFrequency(0)}
            >
              {props.newFrequency == 0 ? (
                <View style={styles.radioFill} />
              ) : null}
            </Pressable>
            <Text style={{ alignSelf: "center" }}>Once</Text>
          </View>
          <View style={{ flex: 1, margin: 10 }}>
            <Pressable
              style={[styles.emptyRadioButton, styles.blueBorder]}
              onPress={() => props.setNewFrequency(1)}
            >
              {props.newFrequency == 1 ? (
                <View style={styles.radioFill} />
              ) : null}
            </Pressable>
            <Text style={{ alignSelf: "center" }}>Weekly</Text>
          </View>
          <View style={{ flex: 1, margin: 10 }}>
            <Pressable
              style={[styles.emptyRadioButton, styles.blueBorder]}
              onPress={() => props.setNewFrequency(2)}
            >
              {props.newFrequency == 2 ? (
                <View style={styles.radioFill} />
              ) : null}
            </Pressable>
            <Text style={{ alignSelf: "center" }}>Daily</Text>
          </View>
        </View>
        <Pressable
          style={[
            styles.wideButton,
            styles.greenBackground,
            { margin: 10, marginHorizontal: "30%" },
          ]}
          onPress={() => saveReminder(props.data, props.setData)}
        >
          <Text style={[styles.mainHeader, { alignSelf: "center" }]}>
            {props.isEdit ? "Save" : "Add"}
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
              alignSelf: "center",
            }}
          >
            Cancel
          </Text>
        </Pressable>
        {props.isEdit ? (
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
            onPress={async () => {
              let tempRems = [...props.data];
              let index = tempRems.findIndex(
                (reminder) => reminder.id === props.editId
              );
              if (index !== -1) tempRems.splice(index, 1);
              props.setData(tempRems);
              clearModal();
              await storeData(tempRems);
            }}
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
        ) : null}
      </ScrollView>
    </Modal>
  );
};
