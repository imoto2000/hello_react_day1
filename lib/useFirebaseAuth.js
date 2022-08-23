import { useState, useEffect } from "react";
import { auth } from "@/plugins/firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState) => {
    console.log(">>>>>>>>>>>>> caelled onAuthStateChanged");

    if (!authState) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };

  const clear = () => {
    setAuthUser(null);
    setLoading(false);
  };

  const _signInWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const _createUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const _signOut = () => signOut(auth).then(clear);

  useEffect(() => {
    console.log(">>>>>>> called useEffect");
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();

    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     console.log(">>>>>> onAuthStateChanged with user");

    //     setLoading(true);

    //     const formattedUser = formatAuthUser(user);

    //     setAuthUser(formattedUser);

    //     setLoading(false);
    //   } else {
    //     console.log(">>>>>> onAuthStateChanged without user");
    //     setLoading(false);
    //     return;
    //   }
    // });
  }, []);

  return {
    authUser,
    loading,
    _signInWithEmailAndPassword,
    _createUserWithEmailAndPassword,
    _signOut,
  };
}
