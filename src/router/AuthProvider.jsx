import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState({});
  // sign up
  const handleSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // update userinfo
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  const authInfo = { user, handleSignUp, handleLogin };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
