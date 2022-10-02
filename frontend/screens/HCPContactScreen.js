import * as React from "react";
import { Text, View, Pressable, ScrollView } from "react-native";
import styles from "../styles";
import { Linking } from "react-native";
import { getUserContext } from "../components/UserContext";

export const HCPContactScreen = ({ navigation }) => {
  const { user } = getUserContext();

  function userIsNull() {
    return user == null;
  }

  const listItems = userIsNull() ? (
    <Text> loading... </Text>
  ) : (
    user.contacts.map((item, index) => (
      <View key={index} style={[styles.wideTile, styles.blueBorder]}>
        <Text>{`${item.title} ${item.name}`}</Text>
        <Text
          style={{ color: "blue" }}
          onPress={() => {
            Linking.openURL(`tel:${item.phone}`);
          }}
        >
          {item.phone}
        </Text>
      </View>
    ))
  );
  return listItems;
};
