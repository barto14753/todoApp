import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import Home from "./Home";
import PasswordReset from "./PasswordReset";
import ToDo from "./ToDo";
import { UserContext } from "../src/UserProvider";

function Application() {
  const user = useContext(UserContext);

  return (
        user ?
        <Router>
          <Home path="/" />
          <ToDo path="/todo" />
          <ProfilePage path="/profile"/>
          <ProfilePage path="/signUp"/>
          <ProfilePage path="/signIn"/>
        </Router>
      :
        <Router>
          <Home path="/" />
          <SignUp path="signUp" />
          <SignIn path="/signIn" />
          <PasswordReset path = "/passwordReset" />
        </Router>

  );
}
export default Application;