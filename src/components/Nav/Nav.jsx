import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaUserAlt, FaTools, FaLaptopCode, FaEnvelope } from 'react-icons/fa'
import './Nav.scss'

import Foto from '../../images/react-js.png'
import black from '../../images/icon-1.1s-200px.png'

function Nav() {
    return (
        <nav className='main--Nav'>
            <div className='foto'>
                <img className='presha' src={black} alt="" />
                <img src={Foto} alt="foto" />
            </div>
            <ul>
                <li>
                    <NavLink
                        exact={true} activeclassname='active'
                        className='Home'
                        to='/'>
                        <FaHome />
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink
                        exact={true} activeclassname='active'
                        className='Techs'
                        to='/Technologies'>
                        <FaTools />
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink
                        exact={true} activeclassname='active'
                        className='About'
                        to='/About'>
                        <FaUserAlt />
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink
                        exact={true} activeclassname='active'
                        className='Projects'
                        to='/Projects'>
                        <FaLaptopCode />
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink
                        exact={true} activeclassname='active'
                        className='Contact'
                        to='/Contact'>
                        <FaEnvelope />
                    </NavLink>
                    <hr />
                </li>
            </ul>
        </nav>
    )
}

export default Nav