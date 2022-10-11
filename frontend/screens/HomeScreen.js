import * as React from "react";
import {
  Text,
  View,
  TouchableHighlight,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "../styles";
import dayjs from "dayjs";
import { getUserContext } from "../userContext.js";
import { Frequencies } from "../public/Frequencies";
import { getReminderContext } from "../reminderContextProvider";

export const HomeScreen = ({ navigation }) => {
  const context = getUserContext();
  const user = context.user;

  const reminderContext = getReminderContext();
  const reminders = reminderContext.reminders;

  const [homeReminders, setHomeReminders] = React.useState([]);

  React.useEffect(() => {
    // keeps track of up to 3 future and incomplete reminders to display on the home page
    setHomeReminders(reminders.filter((reminder) => reminder.complete === false
     && (dayjs().isBefore(dayjs(reminder.date_time)) 
     || reminder.frequency === Frequencies.Daily)).slice(0,3));
  }, [reminders])

  const renderSimpleReminder = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.tealBorder,
        styles.tealBackground50,
        styles.datedReminder,
        { flexDirection: "row" },
      ]}
      onPress={
        () => navigation.navigate("Reminders")
      }
    >
      <Text style={{ flex: 3, fontSize: 18, paddingEnd: 10 }}>
        {item.title}
      </Text>
      <Text style={{ flex: 1, fontSize: 18 }}>
        {item.frequency === Frequencies.Daily ? "Daily" : dayjs(item.date_time).format("D MMM")}
      </Text>
      <Text style={{ flex: 1, fontSize: 18 }}>{dayjs(item.date_time).format("HH:mm")}</Text>
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
          <Text>Welcome back {user ? user.first_name : "..."}</Text>
          <Text style={{ fontSize: 20.0, marginVertical: 10 }}>
            {user ? `${user?.condition.treatment_period}` : "..."} weeks
            since diagnosis
          </Text>
          <TouchableHighlight
            underlayColor={"#8AB6DF"}
            style={ context.journalComplete ? 
              [styles.smallShadow,
              styles.wideButton,
              { marginBottom: "1%",
                backgroundColor: "#999" }]
              : 
              [styles.smallShadow,
              styles.wideButton,
              styles.blueBackground,
              { marginBottom: "1%" },
              ]}
            onPress={() => navigation.navigate("Wellbeing Journal")}
            disabled={context.journalComplete}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={[
                  styles.subHeader,
                  { marginHorizontal: "auto", color: "#fff" },
                ]}
              >
                { context.journalComplete ? "Daily Journal Entry Completed" : "Add to Daily Wellbeing Journal" }
              </Text>
            </View>
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
          { homeReminders.length > 0 ? 
            <FlatList
              data={homeReminders}
              renderItem={renderSimpleReminder}
              keyExtractor={(item, index) => index}
            />
            : <Text style={[styles.subHeader2, {alignSelf: "center", margin: 10}]}>
              No Upcoming Reminders
            </Text>
          }
        </View>
        <View style={[styles.wideTile]}>
          <Text style={[styles.mainHeader, { marginVertical: 10 }]}>
            Patient Support
          </Text>
          <View>
            <TouchableHighlight
              underlayColor={"#8ADFB6"}
              style={[styles.smallShadow, styles.wideButton, styles.greenBackground, {marginBottom: 10}]}
              onPress={() => navigation.navigate("Contact Healthcare")}
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
              style={[styles.smallShadow, styles.wideButton, styles.greenBackground, {marginBottom: 10}]}
              onPress={() => navigation.navigate("Patient Support")}
            >
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: "auto",
                  textAlign: "center",
                }}
              >
                Support Organisations
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
