import * as React from "react";
import { Text, View, Pressable, Image, TextInput, Button } from "react-native";
import styles from "../styles";

export const AddReminderScreen = ({ navigation }) => {
    return (
        <View>
            <TextInput
                style={[styles.wideTile, styles.blueBorder]}
                placeholder="Title"
                multiline="false"
            />
            <TextInput
                style={[styles.wideTile, styles.blueBorder]}
                placeholder="Description"
                multiline="true"
            />
            <TextInput
                style={[styles.wideTile, styles.blueBorder]}
                placeholder="Frequency"
                multiline="false"
            />
            <TextInput
                style={[styles.wideTile, styles.blueBorder]}
                placeholder="Start Date"
                multiline="false"
            />
            <TextInput
                style={[styles.wideTile, styles.blueBorder]}
                placeholder="Time"
                multiline="false"
            />
            <TextInput
                style={[styles.wideTile, styles.blueBorder]}
                placeholder="End Date"
                multiline="false"
            />
            <Button
                title="Add Reminder"
                onPress={() => navigation.navigate("Reminders")}
            ></Button>
        </View>
    );
};
