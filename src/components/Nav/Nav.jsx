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
                        to='/'>
                        <FaHome />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact activeclassname='active'
                        className='Techs'
                        to='/Technologies'>
                        <FaTools />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact activeclassname='active'
                        className='About'
                        to='/About'>
                        <FaUserAlt />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact activeclassname='active'
                        className='Projects'
                        to='/Projects'>
                        <FaLaptopCode />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact activeclassname='active'
                        className='Contact'
                        to='/Contact'>
                        <FaEnvelope />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav