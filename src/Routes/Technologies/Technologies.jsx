import * as React from 'react'
import './Technologies.scss'

import { SiHtml5, SiCss3, SiJavascript, SiGit, SiTypescript, SiReact, SiSass, SiMongodb } from 'react-icons/si'


function Technologies() {
    return (
        <div className="main--Technologies">
            <article>
                <SiHtml5 className='HTML' />
                <SiCss3 className='CSS3' />
                <SiJavascript className='JS' />
                <SiMongodb className='MONGO' />
                <SiGit className='GIT' />
                <SiTypescript className='TS' />
                <SiReact className='REACT' />
                <SiSass className='SASS' />
            </article>
        </div>
    )
}

export default Technologies