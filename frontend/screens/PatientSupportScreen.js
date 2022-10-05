import * as React from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles";
import { Linking } from "react-native";
import supportData from "../public/supportData";
import Ionicons from "@expo/vector-icons/Ionicons";

export const PatientSupportScreen = ({ navigation }) => {
    return (
        <View style={{backgroundColor: "#FFF", height: "100%"}}>
            {supportData.map((item, index) => (
            <View style={[styles.supportView, {backgroundColor: item.color}]} key={index}>
                <Image
                    source={item.img}
                    style={{height: 80, width: 100, marginEnd: 10}}
                    resizeMode="contain"
                    />
                <View>
                    <Text style={[ styles.mainHeader, {color: item.text_color}]}>{item.name}</Text>
                    <View style={{flexDirection: "row"}}>
                        <Ionicons
                            name="call"
                            color={item.text_color}
                            size={20}
                            style={{marginEnd: 5}}
                        />
                        <Text
                            style={[ styles.subHeader, { color: item.text_color }]}
                            onPress={() => {
                                Linking.openURL(`tel:${item.phone}`);
                            }}
                        >
                            {item.phone}
                        </Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Ionicons
                                name="link"
                                color={item.text_color}
                                size={20}
                                style={{marginEnd: 5}}
                            />
                        <Text
                            style={[ styles.subHeader, { color: item.text_color, textDecorationLine: "underline", width: "77%" }]}
                            onPress={() => {
                                Linking.openURL(item.link);
                            }}
                            numberOfLines={1}
                        >{item.link}</Text>
                    </View>
                </View>
            </View>
            ))
            }
        </View>
    )
};
