import React, { useEffect, useState } from "react";
import firebase from "../utils/firebase";

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return <AuthContext.Provider value={{ user }}>{props.children}</AuthContext.Provider>
};
