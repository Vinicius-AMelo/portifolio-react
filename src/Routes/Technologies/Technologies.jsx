import React, { useState } from 'react'

import Typed from 'react-typed';
import './Technologies.scss'
import { SiHtml5, SiCss3, SiJavascript, SiGit, SiTypescript, SiReact, SiSass, SiMongodb } from 'react-icons/si'


function Technologies() {

    const [techs, setTechs] = useState('');

    function bigIcon(e) {
        setTimeout(() => { setTechs(e) }, 2000)
    }

    return (
        <div className="main--Technologies">
            <h1>Minhas principais tecnologias são:
                <p>
                    <Typed onStringTyped={bigIcon}
                        className='name'
                        strings={[
                            'HTML5',
                            'CSS3',
                            'JavaScript',
                            'MongoDB',
                            'Git',
                            'TypeScript',
                            'React',
                            'SASS'
                        ]}
                        typeSpeed={50}
                        backDelay={2000}
                        backSpeed={0}
                        loop >
                    </Typed>
                </p>
            </h1>
            <article>
                <SiHtml5 className={techs === 7 ? 'HTML active' : 'HTML'} />
                <SiCss3 className={techs === 0 ? 'CSS3 active' : 'CSS3'} />
                <SiJavascript className={techs === 1 ? 'JS active' : 'JS'} />
                <SiMongodb className={techs === 2 ? 'MONGODB active' : 'MONGODB'} />
                <SiGit className={techs === 3 ? 'GIT active' : 'GIT'} />
                <SiTypescript className={techs === 4 ? 'TS active' : 'TS'} />
                <SiReact className={techs === 5 ? 'REACT active' : 'REACT'} />
                <SiSass className={techs === 6 ? 'SASS active' : 'SASS'} />
            </article>
        </div>
    )
}

export default Technologies