import React from "react";
import Tablero from "./Tablero";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import "./App.scss"

class StartApp extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <div className="SideBar"><SideBar/></div>
        <div className="TopBar"><TopBar/></div>
        <div className="Tablero"><Tablero/></div>
      </div>
    )
  }
}

export default StartApp;