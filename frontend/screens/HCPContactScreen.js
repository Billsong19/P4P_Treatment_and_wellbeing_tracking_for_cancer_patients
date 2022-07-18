import * as React from "react";
import { Text, View, Pressable, ScrollView } from "react-native";
import styles from "../styles";
import { Linking } from "react-native";

export const HCPContactScreen = ({ navigation }) => {
    const DATA = [
        { provider: "Dr. Smith, GP", phone: "123-456-7890" },
        { provider: "Emergency Services", phone: "111" },
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
