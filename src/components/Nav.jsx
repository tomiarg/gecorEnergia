import gecorIcon from '../assets/img/gecorIcon.png'
import { Whatsapp,Instagram, Mail } from './svgs'


export const Nav = () => {
  return (
    <nav className="nav">
       <div className="nav__imagen">
        <img src={gecorIcon} alt="Ícono Gecor" />
       </div>
       <div className="nav__menu">
            <ul className='nav__list nav__list-guide'>
                <li><a href="#">Equipos</a></li>
                <li><a href="#">Fabricación</a></li>
                <li><a href="">Alquiler</a></li>
                <li><a href="">Servicio Técnico</a></li>
            </ul>
       </div>
       <div className="nav__menu">
            <ul className='nav__list'>
                <li><a href="#"><Instagram/></a></li>
                <li><a href="#"><Whatsapp/></a></li>
                <li><a href="#"><Mail/></a></li>
               
            </ul>

       </div>
    </nav>
  )
}
