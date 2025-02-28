import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../config/firebase"; // Firebase instance

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
            try {
              const idToken = await user.getIdToken(); // Get the ID token
              setToken(idToken);
            } catch (error) {
              console.error("Error fetching ID token:", error);
            }
          } else {
            setToken(null);
          }
          setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
