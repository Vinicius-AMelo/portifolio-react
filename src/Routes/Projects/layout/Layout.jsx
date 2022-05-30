import React, { useState } from 'react';
import './Layout.scss'

import { FaLaptop, FaGithub } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'


function Layout({ linkPages, linkGitHub, img, techs, projectName, projectDescription }) {

    const [active, setActive] = useState(false);

    function showWindow() {
        setActive(!active)
    }

    function closeWindow() {
        setActive(false)
    }


    return (
        <div className='main--Layout'>
            {active && <div className='cc'><IoCloseSharp onClick={closeWindow} className='closeWindow' /></div>}
            <div onClick={showWindow} className='Layout' >
                <img src={img} alt="z" />

                {active &&


                    <div onClick={showWindow} className='active' >
                        <img src={img} alt="z" />


                        <div className='infos'>
                            <div className='techs'>
                                {techs.map(tech => <p>{tech}</p>)}
                            </div>
                            <h1>{projectName}</h1>
                            <p>{projectDescription}</p>


                            <div className='buttons'>

                                <a target='_blank'
                                    rel='noreferrer'
                                    href={linkGitHub}>
                                    <FaGithub />
                                </a>
                                <a target='_blank'
                                    rel='noreferrer'
                                    href={linkPages}>
                                    <FaLaptop />
                                </a>
                            </div>
                        </div>
                    </div>}
            </div >
        </div>
    );
}

export default Layout;