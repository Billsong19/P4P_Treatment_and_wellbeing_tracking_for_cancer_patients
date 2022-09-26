import * as React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  ScrollView,
} from "react-native";
import styles from "../styles";
import { getUserContext } from "../components/UserContext.js";
import { useContext, useState, useEffect } from "react";

export const ProfileScreen = ({ navigation }) => {
  const { user } = getUserContext();

  function userIsNull() {
    return user == null;
  }

  return (
    <ScrollView>
      <View
        style={[styles.wideTile, styles.blueDivider, { flexDirection: "row" }]}
      >
        <View style={{ flex: 1, padding: 10 }}>
          <Text style={{ fontSize: 20 }}>
            {userIsNull() ? "..." : `${user.first_name} ${user.last_name}`}
          </Text>
          <Text>{userIsNull() ? "..." : user.age}</Text>
        </View>
        <Pressable
          style={[
            styles.halfButton,
            styles.blueBackground,
            { alignSelf: "flex-end" },
          ]}
          onPress={() => navigation.navigate("Wellbeing Journal")}
        >
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: "auto",
              textAlign: "center",
            }}
          >
            View wellbeing journal
          </Text>
        </Pressable>
      </View>

      <View style={[styles.wideTile, styles.tealDivider]}>
        <Text style={styles.mainHeader}>Condition Information</Text>
        <View style={{ flexDirection: "row", margin: 6 }}>
          <Text style={styles.subHeader}>
            {userIsNull() ? "..." : user.condition.cancer_type} Cancer
          </Text>
          <Text style={{ marginLeft: "auto" }}>
            {userIsNull() ? "..." : user.condition.cancer_stage}
          </Text>
        </View>

        <View style={{ flexDirection: "row", margin: 6 }}>
          <Text style={styles.subHeader}>{user.stage} </Text>
          <Text style={{ marginLeft: "auto" }}>
            as of:
            {userIsNull()
              ? "..."
              : ` ${user.condition.last_update_date.substring(0, 10)}`}
          </Text>
        </View>

        <View style={{ margin: 6 }}>
          <Text style={styles.subHeader}>
            {userIsNull() ? "..." : user.treatment_period} treatment period
          </Text>
        </View>
        <Pressable
          style={[styles.conditionButton, styles.tealSide]}
          onPress={() =>
            navigation.navigate("Details", {
              condition: userIsNull() ? "..." : `${user.cancer_type}`,
              section: 1,
            })
          }
        >
          <Text>Chance of Recovery</Text>
        </Pressable>
        <Pressable
          style={[styles.conditionButton, styles.greenSide]}
          onPress={() =>
            navigation.navigate("Details", {
              condition: userIsNull() ? "..." : `${user.cancer_type}`,
              section: 2,
            })
          }
        >
          <Text>Course of Disease</Text>
        </Pressable>
      </View>

      <View style={[styles.wideTile, styles.greenDivider]}>
        <Text style={styles.mainHeader}>Treatment Staff</Text>
        {userIsNull()
          ? {}
          : user.contacts.map((contact, index) => {
              return (
                <View
                  style={[styles.yellowDivider, { paddingVertical: 5 }]}
                  key={index}
                >
                  <Text>{contact.title}</Text>
                  <Text>{contact.name}</Text>
                  <Text
                    style={{ color: "blue" }}
                    onPress={() => {
                      Linking.openURL(`tel:${contact.phone}`);
                    }}
                  >
                    {contact.phone}
                  </Text>
                </View>
              );
            })}
      </View>
    </ScrollView>
  );
};
