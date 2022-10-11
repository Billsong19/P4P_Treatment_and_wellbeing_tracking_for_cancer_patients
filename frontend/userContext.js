//context  for user data
import { createContext, useEffect, useState, useContext } from "react";
import { GetUserData, AddJournalEntry } from "./songwardAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

const UserContext = createContext();
const USER_ID = "63031ef7deaf0892071eae0e";

const getLocalUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@user");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log(error);
  }
};

const storeLocalUser = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@user", jsonValue);
  } catch (error) {
    console.log(error);
  }
};

const getLocalEntries = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@journal");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log(error);
  }
};

const storeLocalEntries = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@journal", jsonValue);
  } catch (error) {
    console.log(error);
  }
};

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [localJournal, setLocalJournal] = useState(null);
  const [journalComplete, setJournalComplete] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const fetchLocalData = async () => {
      setUser((await getLocalUser()).user);
    };

    const storeData = async (data) => {
      return await storeLocalUser(data);
    };
    
    //attempt to fetch server data and fall back on local if not available
    GetUserData(USER_ID).then((data) => {
      setUser(data);
      storeData(data);
      setLoadingUser(false);
    }).catch((error) => {
      fetchLocalData();
      setLoadingUser(false);
    });
  }, []);

  useEffect(() => {
    const fetchJournal = async () => {
      setLocalJournal(await getLocalEntries());
    }
    fetchJournal();  
  }, [])

  useEffect(() => {
    if (localJournal) {
      // user should only be able to enter one journal per day
      if (dayjs(localJournal.last_updated).set("hour", 23).set("minute", 59).set("second", 59).isAfter(dayjs())){
        setJournalComplete(true);
      } else {
        setJournalComplete(false);
      }
      if (localJournal?.entries.length > 0) {
        // attempts to send all offline-created journal entries to the server
        try {
          localJournal.entries.map((journalData) => {
            AddJournalEntry(USER_ID, journalData);
          })
          const emptyLocalJournalStorage = async () => {
            storeLocalEntries({last_updated: localJournal.last_updated, entries: []});
          };
          emptyLocalJournalStorage();
        } catch (error) {
          console.log(error)
        }
      }
    }
  }, [localJournal]);

  function completeJournal() {
    setJournalComplete(true);
  }

  return (
    <UserContext.Provider value={{ user: user, journalComplete: journalComplete, completeJournal }}>
      {children}
    </UserContext.Provider>
  );
}

export function getUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
