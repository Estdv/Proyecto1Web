import React from "react";
import "./Tablero.scss";
import Iconos from "./Iconos";

export default class Tablero extends React.Component {
  render() {
    return (
        <div id="Tablero">
          <Iconos></Iconos>
        </div>     
    );
  };
};