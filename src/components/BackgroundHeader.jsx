import image1 from "../assets/img/fabricaLuz.jpg"
import image2 from "../assets/img/alejado.jpg"
import image3 from "../assets/img/rayoCiudad.jpg"


export const BackgroundHeader = ({playStatus, heroCount}) => {
 
    if(playStatus){
        return(
            <img src={image1} alt="Imagen Galpón" className="background"/>
        )
    }else if(heroCount === 0){
        return <img src={image1} alt="Imagen Galpón" className="background" />
    }else if(heroCount === 1){
        return <img src={image2} alt="Imagen energía" className="background" />
    }else if(heroCount === 2){
        return <img src={image3} alt="Ciudad con Rayo" className="background" />
    }
  
}
