import * as React from "react";
import {
  Animated,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Alert,
  Pressable,
} from "react-native";
import styles from "../styles.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import CheckBox from "expo-checkbox";
import { Frequencies } from "../public/Frequencies.js";
import { getReminderContext } from "../reminderContextProvider";
import dayjs from "dayjs";

/*
    Reminder is a component used to display a reminder in the reminders screen. It starts off in a
    collapsed view and when tapped (anywhere other than the checkbox), expands to show details as well a
    button which opens the ReminderModal to edit the selected reminder through the setUpEditModal prop.
*/
export default Reminder = ({ _id, setUpEditModal }) => {
  const reminderContext = getReminderContext();
  const reminder = reminderContext.getReminderById(_id);

  const startingHeight = 35;
  const [key, setKey] = React.useState(0);
  const [titleHeight, setTitleHeight] = React.useState(35);
  const [isExpanded, setExpanded] = React.useState(false);
  const [isComplete, setComplete] = React.useState(reminder.isComplete);
  const [fullHeight, setFullHeight] = React.useState(startingHeight);
  const animatedHeight = React.useRef(
    new Animated.Value(startingHeight)
  ).current;
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const semiFadeAnim = React.useRef(
    new Animated.Value(isComplete ? 0.5 : 1)
  ).current;

  React.useEffect(() => {
    Animated.spring(animatedHeight, {
      friction: 100,
      toValue: isExpanded ? fullHeight : startingHeight,
      useNativeDriver: false,
    }).start();
  }, [isExpanded, fullHeight]);

  React.useEffect(() => {
    if (isExpanded) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }).start();
    }
  }, [isExpanded]);

  React.useEffect(() => {
    if (isComplete) {
      Animated.timing(semiFadeAnim, {
        toValue: 0.5,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(semiFadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [isComplete]);

  React.useEffect(() => {
    setExpanded(false);
    setFullHeight(startingHeight);
  }, [_id, reminder]);

  React.useEffect(() => {
    setKey(key + 1);
  }, [fullHeight]);

  const onLayout = (e) => {
    let { x, y, width, height } = e.nativeEvent.layout;
    height = Math.floor(height) + 17;
    if (height > fullHeight) {
      setFullHeight(height);
    }
  };

  const toggleComplete = async (toggleTo = true) => {
    setComplete(toggleTo);
    const updatedRem = {
      _id: _id,
      title: reminder.title,
      complete: toggleTo,
      frequency: reminder.frequency,
      date_time: reminder.date_time,
      details: reminder.details,
    };
    reminderContext.editReminder(updatedRem);
  };

  let isMissed = false;
  if (reminder?.frequency === Frequencies.Daily) {
    isMissed = dayjs().isAfter(dayjs().set('hour', dayjs(reminder?.date_time).get('hour')).set('minute', dayjs(reminder?.date_time).get('minute')))
  } else {
    isMissed = dayjs().isAfter(reminder?.date_time)
  }

  return (
    <Pressable
      onLongPress={() =>
        setUpEditModal(_id)
      }
      onPress={() => setExpanded(!isExpanded)}
    >
      <Animated.View
        style={
          reminder.frequency === Frequencies.Daily
            ? [
                styles.blueBorder,
                styles.dailyReminder,
                { height: animatedHeight, opacity: semiFadeAnim },
              ]
            : isMissed ?
            [
              styles.orangeBorder,
              styles.orangeBackground50,
              styles.datedReminder,
              { height: animatedHeight, opacity: semiFadeAnim },
            ]
            : [
                styles.tealBorder,
                styles.tealBackground50,
                styles.datedReminder,
                { height: animatedHeight, opacity: semiFadeAnim },
              ]
        }
      >
        <View onLayout={onLayout} key={key}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{ flex: 3, fontSize: 18 }}
              numberOfLines={isExpanded ? 0 : 1}
            >
              {reminder.title}
            </Text>
            <Text style={{ flex: 1, fontSize: 18 }}>
              {dayjs(reminder.date_time).format("HH:mm")}
            </Text>
            { isMissed ?
              <TouchableHighlight
                style={{
                  borderRadius: 15,
                }}
                onPress={() =>
                  Alert.alert(
                    "Reminder missed",
                    `You missed you reminder: ${reminder.title}.\nFor your own benefit try to avoid missing these.`,
                    [
                      { text: "Understood", onPress: () => toggleComplete() },
                    ]
                  )
                }
                underlayColor={"rgba(0,0,0,0.1)"}
              >
                <Ionicons
                  name="alert"
                  size={24}
                  />
              </TouchableHighlight>
              :
              <CheckBox
                value={isComplete}
                style={styles.remindersCheck}
                onValueChange={() => {
                  toggleComplete(!isComplete);
                  setExpanded(isExpanded);
                }}
              />
            }
          </View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <ScrollView style={{ height: 0 }}>
              <Text>{reminder.details}</Text>
            </ScrollView>
            <Text style={{ marginBottom: 2, maxWidth: "90%", marginTop: 4 }}>
              {reminder.details}
            </Text>
            <TouchableHighlight
              style={{
                position: "absolute",
                right: 2,
                padding: 4,
                borderRadius: 15,
                bottom: -12,
              }}
              onPress={() =>
                setUpEditModal(_id)
              }
              underlayColor={"rgba(0,0,0,0.1)"}
            >
              <Ionicons name="ellipsis-horizontal" size={24} />
            </TouchableHighlight>
          </Animated.View>
        </View>
      </Animated.View>
    </Pressable>
  );
};
