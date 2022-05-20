import React, { useState } from 'react';
import './Layout.scss'

import { IoCloseSharp } from 'react-icons/io5'


function Layout({ linkPages, linkGitHub, img }) {

    const [active, setActive] = useState(false);

    function activeClass() {
        setActive(!active)
    }

    return (
        <div className='main--Layout'>
            <div onClick={activeClass} className={!active ? 'Layout' : 'Layout active'} >
                {active && <IoCloseSharp className='closeWindow' />}
                <div className='content'><img src={img} alt="z" />
                </div>
                {active && <div className='infos'>
                    <a target='_blank'
                        rel='noreferrer'
                        href={linkGitHub}>
                        GitHuB
                    </a>
                    <a target='_blank'
                        rel='noreferrer'
                        href={linkPages}>
                        Pages
                    </a>
                </div>}
            </div >
        </div>
    );
}

export default Layout;