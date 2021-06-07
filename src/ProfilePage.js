import React, { useContext } from "react";
import { UserContext } from "../src/UserProvider";
import anonymous from "./anonymous.png";
import "./ProfilePage.css";
import Statistics from "./Statistics";
 


const ProfilePage = () => {
  const user = useContext(UserContext);

  return (
    <div className = "mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8 items-center">
      <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
      <div id="floating">
        <Statistics />
      </div>
        <img
          style={{
            backgroundSize: "cover",
            height: "300px",
            width: "300px"
          }}
          src={anonymous}
          className="border border-blue-300"
        ></img>
        <div className = "md:pl-4" id="names">
        <h1 className = "text-2xl font-semibold"><strong>Information</strong></h1>
          <h2 className = "text-2xl font-semibold"><strong>Name: </strong>{user ? user.displayName : "Annonymous"}</h2>
          <h2 className = "text-2xl font-semibold"><strong>E-mail: </strong>{user ? user.email : ""}</h2>
        </div>
      </div>
      
    </div>
  ) 
};
export default ProfilePage;