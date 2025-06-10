import { Farm, House, LuzSolar,Thunder } from "./svgs"


export const Equipos = () => {
  return (
    <section className="equipos">
        <h2 className="equipos__heading">Equipos confiables</h2>
        <p className="equipos__frase">Energía sin interrupciones, donde y cuando la necesites</p>
        <div className="equipos__grid">
            <div className="equipos__equipo">
                <Thunder/>
                <h3>Generadores a Diésel</h3>
                <p>Alta potencia y rendimiento continuo para tus proyectos más exigentes.</p>
            </div>
            <div className="equipos__equipo">
                <House/>
                <h3>Generadores a Gas</h3>
                <p>La solución eficiente y silenciosa para hogares, barrios cerrados y sistemas de respaldo 24/7.</p>
            </div>
            <div className="equipos__equipo">
                <Farm/>
                <h3>Generadores Biodiesel</h3>
                <p>Convertí residuos orgánicos en energía limpia y aprovechá al máximo tus recursos.</p>
            </div>
            <div className="equipos__equipo">
               <LuzSolar/>
                <h3>Generadores a luz Solar</h3>
                <p>Autonomía energética total con sistemas solares confiables y sustentables.</p>
            </div>
        </div>
    </section>
  )
}
