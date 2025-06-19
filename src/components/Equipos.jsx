import { LuzSolar,Thunder } from "./svgs"


export const Equipos = () => {
  return (
    <section className="equipos" id="Equipado">
        <h2 className="equipos__heading">Equipos confiables</h2>
        <p className="equipos__frase">Energía sin interrupciones, donde y cuando la necesites</p>
        <div className="equipos__grid">
           
        
            <div className="equipos__equipo">

              <div>
                <h1 className="equipos__arg">Industria Argentina</h1>
                <p> Fabricados en Argentina, en cada detalle de fabricación los estándares más altos.</p>

              </div>
              <div>
                <h1>Servicio receptivo.</h1>
                <p> Presupuestos el mismo día. Envío a tiempo. Garantías que cumplen lo que prometen, sin semanas de tiempo de espera ni cargos sorpresa.</p>
              </div>

                
            </div>
             <div className="equipos__equipo">
                <Thunder/>
                <h3>Grupos electrógrenos Potentes</h3>
                <p>Alta potencia y rendimiento continuo para tus proyectos más exigentes.</p>
            </div>

        </div>
    </section>
  )
}
