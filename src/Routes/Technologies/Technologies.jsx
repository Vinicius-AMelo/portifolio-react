import React, { useState } from 'react'

import Typed from 'react-typed';
import '../../sass/Technologies.scss'
import { SiHtml5, SiCss3, SiJavascript, SiGit, SiTypescript, SiReact, SiSass, SiRedux, SiTailwindcss, SiNextdotjs } from 'react-icons/si'


function Technologies() {

    const [techs, setTechs] = useState(9);

    function bigIcon(e) {
        if (techs === 1 || techs === 2 || techs === 8) {
            setTimeout(() => { setTechs(e) }, 2500)
        }
        else {
            setTimeout(() => { setTechs(e) }, 2200)
        }
    }

    return (
        <section className="main--Technologies">
            <h1>Meus principais Jutsus são:
                <p>
                    <Typed onStringTyped={bigIcon}
                        className='name'
                        strings={[
                            'HTML5',
                            'CSS3',
                            'JavaScript',
                            'TypeScript',
                            'Git',
                            'React',
                            'NextJS',
                            'Redux6',
                            'SASS',
                            'TailwindCSS',
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
                <SiJavascript className={techs === 1 ? 'JS active' : 'JS'} />
                <SiTypescript className={techs === 2 ? 'TS active' : 'TS'} />
                <SiGit className={techs === 3 ? 'GIT active' : 'GIT'} />
                <SiReact className={techs === 4 ? 'REACT active' : 'REACT'} />
                <SiNextdotjs className={techs === 5 ? 'NEXTJS active' : 'NEXTJS'} />
                <SiRedux className={techs === 6 ? 'REDUX active' : 'REDUX'} />
                <SiSass className={techs === 7 ? 'SASS active' : 'SASS'} />
                <SiTailwindcss className={techs === 8 ? 'TAILWIND active' : 'TAILWIND'} />
            </article>
        </section>
    )
}

export default Technologies