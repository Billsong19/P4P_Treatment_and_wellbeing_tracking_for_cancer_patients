import * as React from "react";
import {
  Text,
  View,
  Button,
  Pressable,
  TouchableHighlight,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "../styles";
import dayjs from "dayjs";
import { getUserContext } from "../components/UserContext.js";
import { useState } from "react";

export const HomeScreen = ({ navigation }) => {
  const context = getUserContext();
  const user = context.user;

  const renderSimpleReminder = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.tealBorder,
        styles.tealBackground50,
        styles.datedReminder,
        { flexDirection: "row" },
      ]}
      onPress={
        () => navigation.navigate("Reminders") //, { reminderId: `${route.params.condition}`}
      }
    >
      <Text style={{ flex: 3, fontSize: 18, paddingEnd: 10 }}>
        {item.title}
      </Text>
      <Text style={{ flex: 1, fontSize: 18 }}>
        {item.frequency === 2 ? "Daily" : dayjs(item.date).format("D MMM")}
      </Text>
      <Text style={{ flex: 1, fontSize: 18 }}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../public/bmbgHome.png")}
        resizeMode="cover"
        style={{
          flex: 1,
        }}
      >
        <View style={[styles.wideTile, styles.blueDivider]}>
          <Text>Welcome back {user == null ? "..." : user.first_name}</Text>
          <Text style={{ fontSize: 20.0, marginVertical: 10 }}>
            {user == null ? "..." : `${user.condition.treatment_period}`} weeks
            since diagnosis
          </Text>
          <TouchableHighlight
            underlayColor={"#8AB6DF"}
            style={[
              styles.smallShadow,
              styles.wideButton,
              styles.blueBackground,
              { marginBottom: "1%" },
            ]}
            onPress={() => navigation.navigate("Wellbeing Journal")}
          >
            <Text
              style={[
                styles.subHeader,
                { marginHorizontal: "auto", color: "#fff" },
              ]}
            >
              How are you feeling today?
            </Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.wideTile, styles.tealDivider]}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={[styles.mainHeader, { marginVertical: 10, flex: 1 }]}>
              Upcoming Reminders
            </Text>
            <TouchableHighlight
              style={{ borderRadius: 4 }}
              underlayColor={"#EEE"}
              onPress={() => navigation.navigate("Reminders")}
            >
              <Text
                style={{
                  fontSize: 14,
                  margin: 10,
                  alignSelf: "flex-end",
                  flex: 1,
                  color: "grey",
                }}
              >
                See all {">"}
              </Text>
            </TouchableHighlight>
          </View>
          <FlatList
            data={user}
            renderItem={renderSimpleReminder}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={[styles.wideTile]}>
          <Text style={[styles.mainHeader, { marginVertical: 10 }]}>
            Patient Support
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TouchableHighlight
              underlayColor={"#8ADFB6"}
              style={[styles.halfButton, styles.greenBackground]}
              onPress={() => navigation.navigate("Contact Healthcare Provider")}
            >
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: "auto",
                  textAlign: "center",
                }}
              >
                Contact Healthcare Provider
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={"#8ADFB6"}
              style={[styles.halfButton, styles.greenBackground]}
              onPress={() => navigation.navigate("More Help")}
            >
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: "auto",
                  textAlign: "center",
                }}
              >
                More Help
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
