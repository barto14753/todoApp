import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "../src/SignIn";
import SignUp from "../src/SignUp";
import Application from "../src/Application";
import UserProvider from "../src/UserProvider";
import ProfilePage from "../src/ProfilePage";
import { UserContext } from "../src/UserProvider";
import MyNavbar from "./Navbar";
import Footer from "./footer";
import "../src/App.css"

function App() {
  return (
    
      <UserProvider>
        <div className="full-page">
          <MyNavbar />
          <Application />
        </div>
        <Footer />
    </UserProvider>
    
    
  );
}
export default App;