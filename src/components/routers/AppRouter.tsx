import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { JournalScreen } from "../journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { firebase } from "../../firebase/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";
import { useState } from "react";
import { PublicRoute } from "./PublicRoutes";
import { PrivateRoute } from "./PrivateRoutes";

export const AppRouter = () => {
  const dispatch: any = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName!));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, []);

  if (checking) {
    return <h1>Espere...</h1>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRoute isAuthenticated={isLoggedIn}>
              <AuthRouter />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isLoggedIn}>
              <JournalScreen />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </BrowserRouter>
  );
};
