import React from "react"
import { auth } from "../src/firebase";
import Button from 'react-bootstrap/Button';
import "../src/SignOut.css";


const SignOut = () =>
{
    const logout = () =>
    {
        auth.signOut();
    };

    return (
        <Button variant="danger" onClick={event => {logout()}}>Logout</Button>
    )
};
export default SignOut;