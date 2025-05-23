import React, { createContext, useEffect, useState } from "react";
import { auth } from "./../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
const userLogin =(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
}

  const logOut =()=>{
    setLoading(true);
    signOut(auth);
};


  const userInfo = {
    user,
    setUser,
    loading,
    createUser,
    logOut,
    userLogin,
    
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
