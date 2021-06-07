import React, { useContext } from "react";
import { Router } from "@reach/router";
import ProfilePage from "./ProfilePage";
import '../src/Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import logo from "./logo.png";
import SignOut from "../src/SignOut";
import { UserContext } from "../src/UserProvider";


const MyNavbar = () =>
{
    const user = useContext(UserContext);

    return(
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">
            <img
            alt=""
            src={logo}
            width="29"
            height="29"
            id="img"
            className="d-inline-block align-top"
        />{' '}
            ToDoApp
            </Navbar.Brand>
            

            {user ?
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/todo">ToDo</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
            :
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/signUp">SignUp</Nav.Link>
                <Nav.Link href="/signIn">SignIn</Nav.Link>
            </Nav>
            }

            {user ?
            <Navbar.Collapse className="justify-content-end">                
                <Navbar.Text>
                    Signed in as: <a href="#login">{user.displayName}</a>
                </Navbar.Text>
                <SignOut/>
            </Navbar.Collapse>
            :
            <Navbar.Collapse className="justify-content-end">
                 <Badge pill variant="light">
                    You need an account
                </Badge>{' '}
            </Navbar.Collapse>}
        </Navbar>
    );
};
export default MyNavbar;