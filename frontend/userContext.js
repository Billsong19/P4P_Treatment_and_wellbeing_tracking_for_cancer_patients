//context  for user data
import { createContext, useEffect, useState, useContext } from "react";
import { GetUserData } from "./songwardAPI";

const UserContext = createContext();
const USER_ID = "63031ef7deaf0892071eae0e";

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  useEffect(() => {
      GetUserData(USER_ID).then((data) => {
        setUser(data);
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
