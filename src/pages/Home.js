import React from "react";
import "../App.css";
import Login from "../components/Login/Login";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "../components/Feed/Feed";
import Widget from "../components/Widget/Widget";
const Home = () => {
  const user = useSelector((state) => state.userData.user);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
