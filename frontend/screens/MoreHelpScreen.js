import * as React from "react";
import { Text, View, Pressable, ScrollView } from "react-native";
import styles from "../styles";
import { Linking } from "react-native";

export const MoreHelpScreen = ({ navigation }) => {
    const DATA = [
        { provider: "Cancer Helpline", phone: "0800 226 237" },
        { provider: "Look Good Feel Better Classes", phone: "0800 865 432" },
    ];
    const listItems = DATA.map((item) => (
        <View style={[styles.wideTile, styles.blueBorder]}>
            <Text>{item.provider}</Text>
            <Text
                style={{ color: "blue" }}
                onPress={() => {
                    Linking.openURL(`tel:${item.phone}`);
                }}
            >
                {item.phone}
            </Text>
        </View>
    ));
    return listItems;
};
