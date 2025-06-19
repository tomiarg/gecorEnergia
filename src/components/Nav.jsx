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
                <li><a href="#Equipado">Equipos</a></li>
                <li><a href="#Servicios">Servicios</a></li>
                <li><a href="#Contact">Contacto</a></li>
            </ul>
       </div>
       <div className="nav__menu">
            <ul className='nav__list'>
                <li><a href="https://www.instagram.com/gecor.generadores?igsh=MTZzenZ1ZDR0Nno5bA%3D%3D&utm_source=qr" target="_blank"><Instagram/></a></li>
                <li><a href="https://wa.me/543515315425" target="_blank" ><Whatsapp/></a></li>
                <li><a href="mailto:comercial@gecor.com" target="_blank"><Mail/></a></li>
               
            </ul>

       </div>
    </nav>
  )
}
