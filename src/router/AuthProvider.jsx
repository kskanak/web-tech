import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
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

  // sign out implement

  const handleLogout = () => {
    return signOut(auth);
  };
  // google sign in

  const handleGooglesignIn = (googleProvider) => {
    return signInWithPopup(auth, googleProvider);
  };

  // github sign in
  const handleGithubsignIn = (githubProvider) => {
    return signInWithPopup(auth, githubProvider);
  };
  // onauth change implement
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    handleSignUp,
    handleLogin,
    updateUserProfile,
    handleLogout,
    handleGooglesignIn,
    handleGithubsignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
