import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import app from "../Firebase/firebase.confige";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const provider = new GoogleAuthProvider();
export const AuthContext = createContext();
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  const creatUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login
  const signin = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout
  const logOut = () => {
    setloading(true);
    signOut(auth);
  };

  // Google Login
  const googleLogin = () =>{
    
    // return signInWithPopup(auth, provider);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("currentUser", currentUser);
      setloading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    creatUser,
    signin,
    logOut,
    googleLogin
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
