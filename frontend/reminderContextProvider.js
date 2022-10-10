import { createContext, useEffect, useState, useContext } from "react";
import { AddUserReminder, UpdateUserReminder, DeleteUserReminder } from "./songwardAPI";
import { getUserContext } from "./userContext.js";
import { Frequencies } from "./public/Frequencies";
import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

const ReminderContext = createContext();

const getLocalReminders = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@reminders");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

const storeLocalReminders = async (value) => {
  try {
    const data = { last_updated: dayjs(), reminders: value }
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem("@reminders", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

// Sorts all reminders in the data by date and time, daily reminders use an old date as they only need to be sorted by time
export function sortDataByDateTime(data) {
  let tempData = [];
  console.log(data)
  if (data) {
    tempData = [...data];
    tempData.sort((a, b) =>
      dayjs(
        (a.frequency === Frequencies.Daily
          ? dayjs(a.date_time)
            .set("year", dayjs().get('y'))
            .set("month", dayjs().get("M"))
            .set("date", dayjs().get('D'))
          : dayjs(a.date_time)) -
          dayjs(
            b.frequency === Frequencies.Daily
              ? dayjs(b.date_time)
                .set("year", dayjs().get('y'))
                .set("month", dayjs().get("M"))
                .set("date", dayjs().get('D'))
              : dayjs(b.date_time)
          )
      )
    );
  }
  return tempData;
}

// resets all daily reminders at the turn of the next day, also updates their date_time to know when to reset next
function resetDailyReminders(data) {
  let tempData = [];
  console.log(data)
  if (data) {
    tempData = [...data];
    tempData.map((reminder, index) => {
      if (reminder.frequency === Frequencies.Daily) {
        if (dayjs().set("hour", 23).set("minute", 59).set("second", 59).isAfter(dayjs(reminder.date_time).set("hour", 23).set("minute", 59).set("second", 59))) {
          const updatedRem = {
            _id: reminder._id,
            title: reminder.title,
            complete: false,
            frequency: reminder.frequency,
            date_time: dayjs().set('hour', dayjs(reminder?.date_time).get('hour')).set('minute', dayjs(reminder?.date_time).get('minute')),
            details: reminder.details,
          };
          tempData[index] = updatedRem;
        }
      }
    })

    return tempData;
  }
}

/*
  Context provided that contains information about reminders for the user session
  It is populated from either local storage, or server data depending on which one is
  newest and available. Also handles manipulation of the set of reminders, and saves
  changes to both local storage and server.
*/
export function ReminderContextProvider({ children }) {
  const [reminders, setReminders] = useState([]);
  const [localData, setLocalData] = useState();
  const [loadingReminders, setLoadingReminders] = useState(true);

  const userContext = getUserContext();
  const user = userContext.user;

  useEffect(() => {
    setLoadingReminders(true);
    const fetchData = async () => {
      setLocalData(await getLocalReminders());
    };

    // Use the newest of either locally stored reminders, or server side (if available)
    let tempData = [];
    fetchData();
    console.log(user)
    if (user && localData) {
      if (dayjs(user.last_updated).isBefore(dayjs(localData.last_updated))){
        tempData = localData.reminders;
      } else {
        tempData = user.reminders;
      }
    } else if (user && !localData) {
      tempData = user.reminders;
    } else if (!user && localData) {
      tempData = localData.reminders;
    } 
    setReminders(sortDataByDateTime(resetDailyReminders(tempData)));
    setLoadingReminders(false);
  }, [user]);

  function getReminderById(id) {
    return reminders.find((reminder) => reminder._id === id);
  }

  function addReminder(reminder) {
    let tempReminders = reminders ? [...reminders] : [];
    tempReminders.push(reminder);
    setReminders(sortDataByDateTime(tempReminders));
    const saveData = async (data) => {
      storeLocalReminders(data);
    };
    saveData(tempReminders);
    AddUserReminder(user._id, reminder)
  }

  function editReminder(editReminder) {
    let tempReminders = reminders ? [...reminders] : [];
    const index = reminders.findIndex((reminder) => reminder._id === editReminder._id);
    if (index >= 0) {
      tempReminders[index] = editReminder;
      setReminders(sortDataByDateTime(tempReminders));
      const saveData = async (data) => {
        storeLocalReminders(data);
      };
      saveData(tempReminders);
      UpdateUserReminder(user._id, editReminder)
    } else {
      Alert.alert("An error occurred while saving the reminder");
    }
  }

  function deleteReminder(removeId) {
    let tempReminders = reminders ? [...reminders] : [];
    let index = tempReminders.findIndex((reminder) => reminder._id === removeId);
    if (index !== -1) {
      tempReminders.splice(index, 1);
      setReminders(tempReminders);
      const saveData = async (data) => {
        storeLocalReminders(data);
      };
      saveData(tempReminders);
      DeleteUserReminder(user._id, removeId)
    }
  };

  return (
    <ReminderContext.Provider value={{ reminders: reminders, isLoading: loadingReminders, getReminderById, addReminder, editReminder, deleteReminder }}>
      {children}
    </ReminderContext.Provider>
  );
}

export function getReminderContext() {
  const context = useContext(ReminderContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
