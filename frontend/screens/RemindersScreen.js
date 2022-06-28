import * as React from "react";
import { FlatList, Text, View, StatusBar, StyleSheet } from "react-native";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Reminder",
        complete: true,
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Reminder",
        complete: false,
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Reminder",
        complete: false,
    },
];

const Item = ({ title, complete }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text>{complete ? "done" : "not done"}</Text>
    </View>
);

export const RemindersScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <Item title={item.title} complete={item.complete} />
    );

    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            {/* <Button
                title="Back to Home"
                onPress={() => navigation.navigate("Home")}
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: "lightblue",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
