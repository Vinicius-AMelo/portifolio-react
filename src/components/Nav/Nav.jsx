import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaUserAlt, FaTools, FaLaptopCode, FaEnvelope } from 'react-icons/fa'
import './Nav.scss'

import Foto from '../../images/fundo.jpg'

function Nav() {
    return (
        <nav className='main--Nav'>
            <div className='foto'>
                <img src={Foto} alt="foto" />
            </div>
            <ul>
                <li>
                    <NavLink
                        exact activeclassname='active'
                        className='Home'
                        to='/portifolio-react/'>
                        <FaHome />
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink
                        exact activeclassname='active'
                        className='Techs'
                        to='/portifolio-react/Technologies'>
                        <FaTools />
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink
                        exact activeclassname='active'
                        className='About'
                        to='/portifolio-react/About'>
                        <FaUserAlt />
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink
                        exact activeclassname='active'
                        className='Projects'
                        to='/portifolio-react/Projects'>
                        <FaLaptopCode />
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink
                        exact activeclassname='active'
                        className='Contact'
                        to='/portifolio-react/Contact'>
                        <FaEnvelope />
                    </NavLink>
                    <hr />
                </li>
            </ul>
        </nav>
    )
}

export default Nav