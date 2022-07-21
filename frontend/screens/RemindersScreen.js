import * as React from "react";
import {
    FlatList,
    Text,
    View,
    StatusBar,
    StyleSheet,
    Button,
    Image,
    TouchableOpacity,
} from "react-native";
import plusImage from "../public/plus.svg";
import styles from "../styles.js";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Take a walk",
        complete: true,
        frequency: "Daily",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Take medicine",
        complete: false,
        frequency: "Daily",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Strength exercises",
        complete: false,
        frequency: "Weekly",
    },
];

const Item = ({ title, complete, frequency }) => {
    return (
        <View style={[styles.wideTile, styles.blueBorder, { margin: 10 }]}>
            <Text style={{ fontSize: 32 }}>{title}</Text>
            <Text>{complete ? "done" : "not done"}</Text>
            <Text>{frequency}</Text>
        </View>
    );
};

export const RemindersScreen = ({ navigation, data }) => {
    const renderItem = ({ item }) => (
        <Item
            title={item.title}
            complete={item.complete}
            frequency={item.frequency}
        />
    );

    return (
        <View style={{ flex: 1 }}>
            <View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View
                style={{
                    position: "absolute",
                    bottom: 0,
                    alignSelf: "flex-end",
                    marginBottom: 10,
                    marginRight: 10,
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        console.log("hi");
                        navigation.navigate("Add Reminder");
                    }}
                >
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={plusImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: StatusBar.currentHeight || 0,
//     },
//     item: {
//         backgroundColor: "lightblue",
//         padding: 20,
//         marginVertical: 8,
//         marginHorizontal: 16,
//     },
//     title: {
//         fontSize: 32,
//     },
// });
