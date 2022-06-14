import React, { useState } from 'react';
import '../../../sass/Layout.scss'

import { FaAtlas, FaGithub } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'


function Layout({ linkPages, linkGitHub, img, techs, projectName, projectDescription }) {

    const [active, setActive] = useState(false);

    function showWindow() {
        setActive(true)
    }

    function closeWindow() {
        setActive(false)
    }


    return (
        <div className='main--Layout'>
            {active && <div className='shadow'></div>}
            <div onClick={showWindow} className='Layout' >
                <img src={img} alt="z" />
            </div >
            {active &&
                <div className='active' >
                    <IoCloseSharp onClick={closeWindow} className='closeWindow' />
                    <img src={img} alt="z" />


                    <div className='infos'>
                        <div className='techs'>
                            {techs.map((tech, index) => <p key={index}>{tech}</p>)}
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
                                <FaAtlas />
                            </a>
                        </div>
                    </div>
                </div>}

        </div>
    );
}

export default Layout;