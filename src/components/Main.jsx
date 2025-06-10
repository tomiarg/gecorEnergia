import motor1 from "../assets/img/motorRojo.jpg"
import motor2 from "../assets/img/grupoInsonoro2.jpg"
import motor3 from "../assets/img/motorDentro.jpg"

export const Main = () => {
  return (
    <main className="main">
        <div className="main__box">
            <img className="main__imagen" src={motor1} alt="Motor Armado" />
            <h3>Fabricación</h3>
            <p>Diseñamos y fabricamos generadores a medida para cada necesidad.</p>
        </div>
        <div className="main__box">
            <img className="main__imagen" src={motor2} alt="Grupo Electrógeno" />
            <h3>Venta y Alquiler</h3>
            <p>Soluciones inmediatas en generación eléctrica, disponibles para alquilar o comprar.</p>
            
        </div>
        <div className="main__box">
            <img className="main__imagen" src={motor3} alt="Motor Armado" />
            <h3>Servicio Técnico</h3>
            <p>Mantenimiento y reparación profesional para un rendimiento sin interrupciones.</p>
        </div>

    </main>
  )
}
