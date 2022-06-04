import React, { useState } from 'react'

import Typed from 'react-typed';
import '../../sass/Technologies.scss'
import { SiHtml5, SiCss3, SiJavascript, SiGit, SiTypescript, SiReact, SiSass, SiMongodb, SiTailwindcss, SiNextdotjs } from 'react-icons/si'


function Technologies() {

    const [techs, setTechs] = useState(7);

    function bigIcon(e) {
        if (techs === 3 || techs === 4 || techs === 8) {
            setTimeout(() => { setTechs(e) }, 2500)
        } else if (techs === 6) {
            setTimeout(() => { setTechs(e) }, 2350)
        } else {
            setTimeout(() => { setTechs(e) }, 2200)
        }
    }

    return (
        <div className="main--Technologies">
            <h1>Meus principais Jutsus são:
                <p>
                    <Typed onStringTyped={bigIcon}
                        className='name'
                        strings={[
                            'HTML5',
                            'CSS3',
                            'SASS',
                            'Git',
                            'JavaScript',
                            'TypeScript',
                            'React',
                            'MongoDB',
                            'NextJS',
                            'TailwindCSS'
                        ]}
                        typeSpeed={50}
                        backDelay={2000}
                        backSpeed={30}
                        loop >
                    </Typed>
                </p>
            </h1>
            <article>
                <SiHtml5 className={techs === 9 ? 'HTML active' : 'HTML'} />
                <SiCss3 className={techs === 0 ? 'CSS3 active' : 'CSS3'} />
                <SiSass className={techs === 1 ? 'SASS active' : 'SASS'} />
                <SiGit className={techs === 2 ? 'GIT active' : 'GIT'} />
                <SiJavascript className={techs === 3 ? 'JS active' : 'JS'} />
                <SiTypescript className={techs === 4 ? 'TS active' : 'TS'} />
                <SiReact className={techs === 5 ? 'REACT active' : 'REACT'} />
                <SiMongodb className={techs === 6 ? 'MONGODB active' : 'MONGODB'} />
                <SiTailwindcss className={techs === 7 ? 'TAILWIND active' : 'TAILWIND'} />
                <SiNextdotjs className={techs === 8 ? 'NEXTJS active' : 'NEXTJS'} />
            </article>
        </div>
    )
}

export default Technologies