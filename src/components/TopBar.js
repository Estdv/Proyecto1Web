import React from "react";
import "./TopBar.scss";

export default class TopBar extends React.Component {
  render() {
    return (
        <div className="topnav">
            <a className="ward" href="#">{"<"}</a>
            <a className="ward" href="#">{">"}</a>
           
            <a href="#" className="reg">Sign up</a>
            <a href="#" className="log">Log in</a>
        </div>
    );
  };
};