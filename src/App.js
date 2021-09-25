import React, { Suspense, useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import { AuthContext } from "./Auth/authContext";
import { LinearProgress } from "@mui/material";
import SignUp from "./pages/signup/Signup";
import { useAuth } from "./hooks/auth-hook";
const Home = React.lazy(() => import("./pages/home/Home"));


export default function App() {
  const { isLoggedIn, user, login, logout} = useAuth();

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        user:user,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <Suspense
          fallback={
            <div>
              <LinearProgress color="secondary" />
            </div>
          }
        >
          <Switch>
            <Route exact path="/">
              {user ? <Home /> : <Redirect to="/register" />}
            </Route>
            <Route path="/register">
              {!user ? <SignUp /> : <Redirect to="/" />}
            </Route>
            <Route path="/login">
              {!user ? <Login /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </AuthContext.Provider>
  );
}
