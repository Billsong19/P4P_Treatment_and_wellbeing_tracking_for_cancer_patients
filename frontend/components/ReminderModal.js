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

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("@reminders", jsonValue);
    } catch (e) {
        console.log(e);
    }
};

export default ReminderModal = (props) => {

    const clearModal = () => {
        props.setNewTitle("");
        props.setNewDescription("");
        props.setNewTime("00:00");
        props.setNewDate("1/1/2022");
        props.setNewFrequency(0);
        props.setEditId(-1);
        props.setEdit(false);
        props.setModalVisible(!props.isModalVisible);
    };

    const saveReminder = async (data, setData) => {
        let tempRems = [...props.data];
        if (props.isEdit) {
            const index = data.findIndex(
                (reminder) => reminder.id === props.editId
            );
            tempRems[index] = {
                id: props.editId,
                title: props.newTitle,
                complete: false,
                frequency: props.newFrequency,
                date: props.newDate,
                time: props.newTime,
                details: props.newDescription,
            };
        } else {
            tempRems.push({
                id: uuidv4(),
                title: props.newTitle,
                complete: false,
                frequency: props.newFrequency,
                time: props.newTime,
                date: props.newDate,
                details: props.newDescription,
            })
        }
        setData(tempRems);
        await storeData(tempRems);
        clearModal();
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.isModalVisible}
            onRequestClose={() => {
                setModalVisible(!props.isModalVisible);
            }}
        >
            <View style={styles.modalBase}>
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
                    textAlignVertical='top'
                    value={props.newDescription}
                    onChangeText={props.setNewDescription}
                />
                <Text style={styles.subHeader}>When</Text>
                <View style={{ display: "flex", flexDirection: "row" }}></View>
                <Text style={styles.subHeader}>Frequency</Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <View style={{ flex: 1, margin: 10 }}>
                        <Pressable
                            style={[
                                styles.emptyRadioButton,
                                styles.blueBorder,
                            ]}
                            onPress={() => props.setNewFrequency(0)}
                        >
                            {props.newFrequency == 0 ? (
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
                            onPress={() => props.setNewFrequency(1)}
                        >
                            {props.newFrequency == 1 ? (
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
                            onPress={() => props.setNewFrequency(2)}
                        >
                            {props.newFrequency == 2 ? (
                                <View style={styles.radioFill} />
                            ) : null}
                        </Pressable>
                        <Text style={{ margin: "auto" }}>Daily</Text>
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
                    <Text
                        style={[
                            styles.mainHeader,
                            { marginHorizontal: "auto" },
                        ]}
                    >
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
                            marginHorizontal: "auto",
                        }}
                    >
                        Cancel
                    </Text>
                </Pressable>
                {props.isEdit ? (
                    <Pressable
                        style={[
                            {
                                borderRadius: 4,
                                padding: 8,
                                marginTop: 50,
                                marginHorizontal: "auto",
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
    )
}