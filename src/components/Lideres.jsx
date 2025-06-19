import icono from "../assets/img/iconoEnergia.png"
import { Correcto, Energy, EquipoTecnico, Fabricamos, Global, Thunder } from "./svgs"

export const Lideres = () => {
  return (
    <section className="lideres">
        <h2 className="lideres__heading">Fabricamos calidad, generamos confianza</h2>
        <div className="lideres__flex">
            <div className="lideres__texto">
                <ul>
                    <li className="lideres__texto--li"> <EquipoTecnico/> Servicio técnico especializado y
mantenimiento preventivo.
</li>
                    <li className="lideres__texto--li"><Correcto/> Instalaciones certificadas y seguimiento
postventa.
</li>
                    <li className="lideres__texto--li"><Fabricamos/> No solo fabricamos: acompañamos
cada etapa de tu sistema de respaldo.</li>
<li className="lideres__texto--li"><Global/> Innovación y tecnología de punta en eficiencia energética.</li>
<li className="lideres__texto--li"> <Energy/> Asesoramiento integral y soluciones a medida.</li>
                </ul>
            </div>
            <div className="lideres__imagen">
                    <img src={icono} alt="Ícono Rayo" />
            </div>
        </div>
    </section> 
 )
}
