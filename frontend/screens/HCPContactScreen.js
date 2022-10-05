import * as React from "react";
import { Text, View, Pressable } from "react-native";
import styles from "../styles";
import { Linking } from "react-native";
import { getUserContext } from "../userContext";
import Ionicons from "@expo/vector-icons/Ionicons";

export const HCPContactScreen = ({ navigation }) => {
  const { user } = getUserContext();

  function userIsNull() {
    return user == null;
  }

  return (
  <View style={{backgroundColor: "#FFF", height: "100%"}}>
    {user.contacts.map((item, index) => (
      <View
        style={[styles.contactView, { backgroundColor: item.color }]}
        key={index}
      >
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Text style={[styles.mainHeader, { flex: 1 }]}>{item.name}</Text>
          {item.title && (
            <Text style={[styles.subHeader2, { flex: 1 }]}>{item.title}</Text>
          )}
        </View>
        <View style={{ flexDirection: "row", alignContent: "center", margin: 8 }}>
          <Pressable
            style={[
              styles.greenBackground,
              styles.halfButton,
              { flexDirection: "row" },
            ]}
            onPress={() => {
              Linking.openURL(`tel:${item.phone}`);
            }}
          >
            <Ionicons name="call" size={20} style={{ marginEnd: 5 }} />
            <Text>{item.phone}</Text>
          </Pressable>
          {item.email && (
            <Pressable
              style={[
                styles.greenBackground,
                styles.halfButton,
                { flexDirection: "row", flex: 1, padding: 4 },
              ]}
              onPress={() => {
                Linking.openURL(`mailto:${item.email}`);
              }}
            >
              <Ionicons name="mail" size={20} style={{ marginEnd: 5 }} />
              <Text
                style={{ textDecorationLine: "underline", width: "77%" }}
                numberOfLines={1}
              >
                {item.email}
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    ))
    }
  </View>
  )
};
