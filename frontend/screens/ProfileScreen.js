import * as React from "react";
import {
  Pressable,
  Text,
  View,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../styles";
import { getUserContext } from "../userContext.js";

export const ProfileScreen = ({ navigation }) => {
  const { user } = getUserContext();

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
            {user ? user.first_name : "..."}
          </Text>
          <Text>{user ? user.age : "..."}</Text>
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
            {user ? user.condition.cancer_type :  "..." }{" "}
          </Text>
          <Text style={{ marginLeft: "auto" }}>
            Diagnosed: {user ? user.condition.last_update_date.substring(0, 10) : "..."}
          </Text>
        </View>

        <View style={{ flexDirection: "row", margin: 6 }}>
          <Text style={styles.subHeader}>
            {user ? user.condition.cancer_stage : "..."}
          </Text>
          <Text style={{ marginLeft: "auto" }}>
            as of:
            {user
              ? ` ${user.condition.last_update_date.substring(0, 10)}`
              : "..."}
          </Text>
        </View>
        <View style={{ margin: 6 }}>
          <Text style={styles.subHeader}>
            {user ? user.condition.treatment_period : "..."} weeks into treatment period
          </Text>
        </View>
      </View>

      <View style={[styles.wideTile, styles.greenDivider, styles.smallShadow]}>
        <Text style={styles.mainHeader}>Treatment Staff</Text>
        {user?.contacts.map((staff_member, index) => {
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
