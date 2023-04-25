import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { provider, auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/action/user";
const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(addUser(result.user));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <div className="login__title">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
          alt=""
        />
      </div>
      <Button onClick={signIn}>sign in</Button>
    </div>
  );
};

export default Login;
