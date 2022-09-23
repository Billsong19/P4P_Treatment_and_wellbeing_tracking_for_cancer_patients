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
import { UserContext } from "../components/UserContext.js";
import { useContext, useState, useEffect } from "react";

export const ProfileScreen = ({ navigation }) => {
  const { USER_ID } = useContext(UserContext);
  const [user, setUser] = useState(null);
  //fetches data from api
  useEffect(() => {
    fetch("http://localhost:5000/userDetails/" + USER_ID, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  const DATA = {
    _id: "63031ef7deaf0892071eae0e",
    first_name: "Walter",
    last_name: "White",
    date_of_birth: "1999-01-25T02:00:00.000Z",
    condition: {
      cancer_type: "Lung",
      cancer_stage: "Stage 4",
      last_update_date: "2019-01-25T02:00:00.000Z",
      treatment_period: 32,
    },
    contacts: [
      { title: "GP", name: "Skyler", phone: "555-555-5555" },
      { title: "Nurse", name: "Hank", phone: "556-555-5555" },
    ],
    journal: [
      {
        phys_wlbing_rating: 7,
        ment_wlbing_rating: 4,
        date: "2020-01-25T02:00:00.000Z",
        symptoms: [Array],
      },
      {
        phys_wlbing_rating: 6,
        ment_wlbing_rating: 3,
        date: "2020-02-26T02:00:00.000Z",
        symptoms: [],
      },
    ],
    reminders: [
      {
        title: "Appointment",
        start_date: "2020-01-30T02:00:00.000Z",
        frequency: "monthly",
        description: "At the Hospital",
        completed: true,
      },
      {
        title: "Strength exercises",
        start_date: "2020-02-25T02:00:00.000Z",
        frequency: "daily",
      },
    ],
  };

  return (
    <ScrollView>
      <View
        style={[styles.wideTile, styles.blueDivider, { flexDirection: "row" }]}
      >
        <View style={{ flex: 1, padding: 10 }}>
          <Text style={{ fontSize: 20 }}>{DATA.name}</Text>
          <Text>{DATA.age}</Text>
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
          <Text style={styles.subHeader}>{DATA.cancer_type} </Text>
          <Text style={{ marginLeft: "auto" }}>
            Diagnosed: {DATA.diagnosis_date}
          </Text>
        </View>

        <View style={{ flexDirection: "row", margin: 6 }}>
          <Text style={styles.subHeader}>{DATA.stage} </Text>
          <Text style={{ marginLeft: "auto" }}>
            as of: {DATA.last_stage_update}
          </Text>
        </View>

        <View style={{ margin: 6 }}>
          <Text style={styles.subHeader}>
            {DATA.treatment_period} treatment period
          </Text>
        </View>
        <Pressable
          style={[styles.conditionButton, styles.tealSide]}
          onPress={() =>
            navigation.navigate("Details", {
              condition: `${DATA.cancer_type}`,
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
              condition: `${DATA.cancer_type}`,
              section: 2,
            })
          }
        >
          <Text>Course of Disease</Text>
        </Pressable>
      </View>

      <View style={[styles.wideTile, styles.greenDivider]}>
        <Text style={styles.mainHeader}>Treatment Staff</Text>
        {DATA.contacts.map((contact, index) => {
          return (
            <View
              style={[styles.yellowDivider, { paddingVertical: 5 }]}
              key={index}
            >
              <Text>{staff_member.title}</Text>
              <Text>{staff_member.name}</Text>
              <Text
                style={{ color: "blue" }}
                onPress={() => {
                  Linking.openURL(`tel:${staff_member.phone}`);
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
