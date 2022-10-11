//context  for user data
import { createContext, useEffect, useState, useContext } from "react";
import { GetUserData } from "./songwardAPI";
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
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    // attempts to send all journal entries stored created offline to the server
    const fetchJournal = async () => {
      setLocalJournal(getLocalEntries());
    }
    fetchJournal();
    if (localJournal) {
      try {
        localJournal.map((journalEntry) => {
          AddJournalEntry(user._id, journalData);
        })
        const emptyLocalJournalStorage = async () => {
          storeLocalEntries([]);
        };
        emptyLocalJournalStorage();
      } catch (error) {
        console.log(error)
      }
    }

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

  return (
    <UserContext.Provider value={{ user: user }}>
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
