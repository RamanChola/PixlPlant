import { useState, useCallback, useEffect } from "react";

export const useAuth = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
   
  const login = useCallback((userName) => {
    setUser(userName);
    setIsLoggedIn(true);
    localStorage.setItem("userData", JSON.stringify({ userName }));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.userName) {
      login(storedData.userName);
    }
  }, [login]);
  return { isLoggedIn,user, login, logout, };
}