import { createContext, useContext, Context } from "react";
import useFirebaseAuth from "@/plugins/useFirebaseAuth";

const authUserContext = createContext({
  authUser: null,
  loading: true,
  _signInWithEmailAndPassword: async () => {},
  _createUserWithEmailAndPassword: async () => {},
  _signOut: async () => {},
});

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}

export const useAuth = () => useContext(authUserContext);
