import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

//Components
// eslint-disable-next-line no-unused-vars
import { authentication, db } from "../../firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useStateValue } from "../../StateProvider";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    authentication.onAuthStateChanged((authUser) => {
      console.log("The user is", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signIn = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(authentication, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  const register = (event) => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt="amazon"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />

          <h5>Password</h5>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <br />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon Clone's Conditions of Use and
          Privacy Notice.
        </p>
        <div class="login__text">
          <h5>New to Amazon?</h5>
        </div>
        <button className="login__registerButton" onClick={register}>
          Create an Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
