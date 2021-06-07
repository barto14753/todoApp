import React, { useState } from "react";
import { Link } from "@reach/router";
import { auth, signInWithGoogle } from "../src/firebase";
import '../src/SignUp.css';
import Button from 'react-bootstrap/Button';


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then(
      res => {
        res.user.updateProfile(
          {
            displayName: displayName
          }
        )
      }
    )
    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };
  return (
    <div className="mt-8">
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8 text-center">
        {error !== null && (
          <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
            {error}
          </div>
        )}
	  <h1 className="text-3xl mb-2 text-center font-bold">Sign Up</h1>

        <form>
          <table>
            <tr>
              <td>
              <label htmlFor="displayName" className="block">
                Display Name:
              </label>
              </td>
			  <td>
			  	<input
					type="text"
					className="my-1 p-1 w-full "
					name="displayName"
					value={displayName}
					placeholder="Name"
					id="displayName"
					onChange={event => onChangeHandler(event)}
          		/>
			  </td>
            </tr>

			<tr>
				<td>
					<label htmlFor="userEmail" className="block">
            			Email:
          			</label>
				</td>
				<td>
					<input
						type="email"
						className="my-1 p-1 w-full"
						name="userEmail"
						value={email}
						placeholder="Email"
						id="userEmail"
						onChange={event => onChangeHandler(event)}
					/>
				</td>
			</tr>

			<tr>
				<td>
					<label htmlFor="userPassword" className="block">
						Password:
					</label>
				</td>
				<td>
					<input
						type="password"
						className="mt-1 mb-3 p-1 w-full"
						name="userPassword"
						value={password}
						placeholder="Password"
						id="userPassword"
						onChange={event => onChangeHandler(event)}
					/>
				</td>
			</tr>
          </table>
          <Button
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
          </Button>
        </form>
        <div className="text-center my-3" id="or">or</div>
        <Button onClick={event => {
          signInWithGoogle();
        }}>
          Sign Up with Google
        </Button>
        <div className="text-center my-3" id="acc">
          Already have an account?{" "}
          <Link to="/signIn" className="text-blue-500 hover:text-blue-600">
            Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignUp;