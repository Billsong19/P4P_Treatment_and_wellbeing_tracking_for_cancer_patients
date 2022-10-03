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
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../styles";
import { getUserContext } from "../userContext.js";
import { useContext, useState, useEffect } from "react";

export const ProfileScreen = ({ navigation }) => {
  const { user } = getUserContext();

  function userIsNull() {
    return user == null;
  }

  return (
    <ScrollView style={{ backgroundColor: "#FFF" }}>
      <View
        style={[
          styles.wideTile,
          styles.blueDivider,
          styles.smallShadow,
          { flexDirection: "row", marginTop: 5 },
        ]}
      >
        <View style={{ flex: 1, padding: 10 }}>
          <Text style={{ fontSize: 20 }}>
            {userIsNull() ? "..." : user.first_name}
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
              color: "#FFF",
            }}
          >
            View wellbeing journal
          </Text>
        </Pressable>
      </View>

      <View style={[styles.wideTile, styles.tealDivider, styles.smallShadow]}>
        <Text style={styles.mainHeader}>Condition Information</Text>
        <View style={{ flexDirection: "row", margin: 6 }}>
          <Text style={styles.subHeader}>
            {userIsNull() ? "..." : user.condition.cancer_type}{" "}
          </Text>
          <Text style={{ marginLeft: "auto" }}>
            Diagnosed: {userIsNull() ? "..." : user.condition.cancer_stage}
          </Text>
        </View>

        <View style={{ flexDirection: "row", margin: 6 }}>
          <Text style={styles.subHeader}>
            Stage {userIsNull() ? "..." : user.stage}
          </Text>
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
          style={[styles.conditionButton, styles.tealSide, styles.tealBorder]}
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
          style={[styles.conditionButton, styles.greenSide, styles.greenBorder]}
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

      <View style={[styles.wideTile, styles.greenDivider, styles.smallShadow]}>
        <Text style={styles.mainHeader}>Treatment Staff</Text>
        {user.contacts.map((staff_member, index) => {
          return (
            <TouchableOpacity
              style={[
                styles.greenDivider,
                styles.smallShadow,
                { marginTop: 5, padding: 5 },
              ]}
              onPress={() => navigation.navigate("Contact Healthcare Provider")}
              key={index}
            >
              <Text>{staff_member.title}</Text>
              <Text style={styles.subHeader}>{staff_member.name}</Text>
              <Text style={{ color: "blue" }}>{staff_member.phone}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};
