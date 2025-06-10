import icono from "../assets/img/iconoEnergia.png"

export const Lideres = () => {
  return (
    <section className="lideres">
        <h2 className="lideres__heading">Somos Líderes en el Mercado</h2>
        <div className="lideres__flex">
            <div className="lideres__texto">
                <ul>
                    <li className="lideres__texto--li">Servicio técnico especializado y
mantenimiento preventivo.
</li>
                    <li className="lideres__texto--li">Instalaciones certificadas y seguimiento
postventa.
</li>
                    <li className="lideres__texto--li">No solo fabricamos: acompañamos
cada etapa de tu sistema de respaldo.</li>
<li className="lideres__texto--li"> Innovación y tecnología de punta en eficiencia energética</li>
<li className="lideres__texto--li"> Asesoramiento integral y soluciones a medida</li>
                </ul>
            </div>
            <div className="lideres__imagen">
                    <img src={icono} alt="Ícono Rayo" />
            </div>
        </div>
    </section> 
 )
}
