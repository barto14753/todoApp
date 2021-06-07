import React, { useContext } from "react";
import { UserContext } from "../src/UserProvider";
import './Statistics.css';
import Badge from 'react-bootstrap/Badge';



const Statistics = () => {
    const user = useContext(UserContext);
    return (
        <div>
             <div id="container">
                <h1>Statistics<Badge variant="success">New</Badge></h1>
            </div>
        </div>
       
    )
};
export default Statistics;