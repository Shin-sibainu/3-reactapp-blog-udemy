import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className="loginPage">
      <p>ログアウトする</p>
      <button className="loginButton" onClick={loginInWithGoogle}>
        ログアウト
      </button>
    </div>
  );
};

export default Logout;
