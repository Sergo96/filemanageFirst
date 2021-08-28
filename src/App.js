import React from "react";
import "./App.css";
import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "./firebase";

import { useDispatch, useSelector } from "react-redux";
import {
  setActiveUser,
  setUserLogOutState,
  selectUserName,
  // selectUserEmail,
} from "./features/userSlice";

import Header from "./components/header/index";

const App = () => {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  // const userEmail = useSelector(selectUserEmail);

  const handleSignIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      dispatch(
        setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email,
        })
      );
    });
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogOutState());
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="App">
      {userName ? (
        <>
          <Header />
          <button onClick={handleSignOut}>Sign out</button>
        </>
      ) : (
        <button onClick={handleSignIn}>Sign in</button>
      )}
    </div>
  );
};

export default App;
