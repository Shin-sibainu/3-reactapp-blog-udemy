import { signOut } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  return (
    <div className="loginPage">
      <p>ログアウトする</p>
      <button className="loginButton" onClick={logout}>
        ログアウト
      </button>
    </div>
  );
};

export default Logout;
