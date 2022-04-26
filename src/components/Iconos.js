import React from "react";
import "./iconos.scss";
import Imagen1 from "../imagenes/manre.jpg";
import Imagen2 from "../imagenes/excen.jpg";
import Imagen3 from "../imagenes/reme.png";
import Imagen4 from "../imagenes/lispop.jpg";
import Imagen5 from "../imagenes/salsa.jpg";
import Imagen6 from "../imagenes/piano.jpg";
import Imagen7 from "../imagenes/burgir.jpg";
import Imagen8 from "../imagenes/piano2.jpg";
import Imagen9 from "../imagenes/topgua.jpg";
import Imagen10 from "../imagenes/topg.jpg";
import Imagen11 from "../imagenes/andes.jpg";
import Imagen12 from "../imagenes/lofi.jpg";
import Imagen13 from "../imagenes/piano3.jpg";
import Imagen14 from "../imagenes/guitarra.jpg";
import Imagen15 from "../imagenes/concentra.jpg";
import Imagen16 from "../imagenes/energia.jpg";
import Imagen17 from "../imagenes/hits.jpg";
import Imagen18 from "../imagenes/sad.jpg";
import Imagen19 from "../imagenes/pool.jpg";
import Imagen20 from "../imagenes/llora.jpg";
import Imagen21 from "../imagenes/reposaito.jpg";
import Imagen22 from "../imagenes/happy.jpg";

export default class Iconos extends React.Component {
  render() {
    return (
        <div className="iconos">
            <h2><a href="">Nuestros exítos destacados de hoy.</a></h2>
            <table>
                <tbody>
                  <tr>
                    <th><img src={Imagen1}></img><h4>MANSION REGGUETON</h4><h5>De la Calle a la CIMA con Ryan Castro</h5><button className="boton"></button><button className="boton"></button></th>
                    <th><img src={Imagen2}></img><h4>Éxitos Centroamérica</h4><h5>Los exitos de momento en Centroamérica</h5><button className="boton"></button><button className="boton"></button></th>
                    <th><img src={Imagen3}></img><h4>La Reina: Exitos de Mexico</h4><h5>¡las mas poderosas y llegaderas de nuestra</h5><button className="boton"></button></th>
                    <th><img src={Imagen4}></img><h4>La Lista Pop</h4><h5>Los exitos del pop latino featuring Danny</h5><button className="boton"></button></th>
                    <th><img src={Imagen5}></img><h4>Dame Salsa</h4><h5>¡Quiero Salsa, dame Salsa! Foto: Marc</h5><button className="boton"></button></th>
                    <th><img src={Imagen6}></img><h4>Cena con Piano</h4><h5>Disfruta de tu valada en la sedosa compañia de</h5><button className="boton"></button></th>
                    <th><img src={Imagen7}></img><h4>maldita Hamburguesa</h4><h5>Musica motivacional para quemar esa</h5><button className="boton"></button></th>
                    <th><img src={Imagen8}></img><h4>Piano de Fondo</h4><h5>La sutileaz del piano para enriquecer tu</h5><button className="boton"></button></th>
                  </tr>
                </tbody>

            </table>
            <h2><a href="">Charts</a></h2>
            <table>
                <tbody>
                  <tr>
                    <th><img src={Imagen9}></img><h4>Top 50-Guatemala</h4><h5>Your daily update of the most played tracks</h5><button className="boton"></button></th>
                    <th><img src={Imagen10}></img><h4>Top 50-Global</h4><h5>Your daily update of the most played tracks</h5><button className="boton"></button></th>
               
                  </tr>
                </tbody>
            </table>
           
            <h2><a href="">Focus</a></h2>
            <h6><a href="">Music to help you concentrate.</a></h6>
            <table>
                <tbody>
                  <tr>
                    <th><img src={Imagen11}></img><h4>Entre los Andes</h4><h5>Concentrate con el aire de la cordillera de los</h5><button className="boton"></button></th>
                    <th><img src={Imagen12}></img><h4>lofi beats</h4><h5>purrrr with beats to chill, relax, study, cod</h5><button className="boton"></button></th>
                    <th><img src={Imagen8}></img><h4>Piano de Fondo</h4><h5>La sutileaz del piano para enriquecer tu</h5><button className="boton"></button></th>
                    <th><img src={Imagen13}></img><h4>Peaceful Piano</h4><h5>Relax and indulge with beautiful piano pieces</h5><button className="boton"></button></th>
                    <th><img src={Imagen14}></img><h4>Guitarra Tranquila</h4><h5>Canciones instrumentales de</h5><button className="boton"></button></th>
                    <th><img src={Imagen15}></img><h4>Concentracion Pe</h4><h5>Concentrate al maximo, sin</h5><button className="boton"></button></th>
                  </tr>
                </tbody>
            </table>
            <h2><a href="">Mood</a></h2>
            <h6><a href="">Playlists to match your mood.</a></h6>
            <table>
                <tbody>
                  <tr>
                    <th><img src={Imagen16}></img><h4>Energia Positiva</h4><h5>Buena vibra y energia positiva</h5><button className="boton"></button></th>
                    <th><img src={Imagen17}></img><h4>Hits Alegres</h4><h5>¡Tu dosis de energia para alegrarte el dia!</h5><button className="boton"></button></th>
                    <th><img src={Imagen18}></img><h4>Que Sad!</h4><h5>Tristeza independiente para aquellos dias de</h5><button className="boton"></button></th>
                    <th><img src={Imagen19}></img><h4>Pool Party</h4><h5>¡Al agua! Nosotros ponemos la musica.</h5><button className="boton"></button></th>
                    <th><img src={Imagen20}></img><h4>Hora de Lloracion</h4><h5>a llorar a la lloreria</h5><button className="boton"></button></th>
                    <th><img src={Imagen21}></img><h4>reposaito</h4><h5>manejando la tranquilidad</h5><button className="boton"></button></th>
                    <th><img src={Imagen22}></img><h4>Happy Hits</h4><h5>Hits to boost your mood and fill you with</h5><button className="boton"></button></th>
                  </tr>
                </tbody>
            </table>
            
        </div>
    );
  };
};