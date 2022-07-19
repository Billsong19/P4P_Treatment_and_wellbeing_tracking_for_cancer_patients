import * as React from "react";
import { Text, View, Pressable, Image, TextInput, Button } from "react-native";
import styles from "../styles";

export const AddReminderScreen = ({ navigation }) => {
    return (
        <View>
            <TextInput
                style={styles.largeTextEntry}
                placeholder="Title"
                multiline="true"
            />
            <TextInput
                style={styles.largeTextEntry}
                placeholder="Description"
                multiline="true"
            />
            <TextInput
                style={styles.largeTextEntry}
                placeholder="Frequency"
                multiline="true"
            />
            <TextInput
                style={styles.largeTextEntry}
                placeholder="Start Date"
                multiline="true"
            />
            <TextInput
                style={styles.largeTextEntry}
                placeholder="Time"
                multiline="true"
            />
            <TextInput
                style={styles.largeTextEntry}
                placeholder="End Date"
                multiline="true"
            />
            <Button
                title="Add Reminder"
                onPress={() => navigation.navigate("Reminders")}
            ></Button>
        </View>
    );
};
