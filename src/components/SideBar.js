import React from "react";
import "./SideBar.scss";
import Img1 from "../imagenes/SpotLOGO.jpg";
import Img2 from "../imagenes/home.png";
import Img3 from "../imagenes/Buscar.jpg";
import Img4 from "../imagenes/library.png";
import Img5 from "../imagenes/Playlist.jpg";
import Img6 from "../imagenes/Like.jpg";

export default class SideBar extends React.Component {
  render() {
    return (
        <div className="sidenav">
            <ul>
                <img src={Img1} id="logo"></img>
                <li><a href="#"><img src={Img2}></img>Home</a></li>
                <li><a href="#"><img src={Img3}></img>Search</a></li>
                <li><a href="#"><img src={Img4}></img>Your Library</a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a href="#"><img src={Img5}></img>Create Playlist</a></li>
                <li><a href="#"><img src={Img6}></img>Liked songs</a></li>
              
              
                <li><h6 className="extras">Cookies<br />Privacy</h6></li>
            </ul>
        </div>
    );
  };
};