import * as React from 'react';
import './Projects.scss'

import Layout from './layout/Layout';

import Tenzies from '../../images/Tenzies.jpeg'



function Projects() {
    return (
        <div className='main--Projects'>
            <Layout linkGitHub="https://github.com/Vinicius-AMelo/dice-roll-game" linkPages="https://vinicius-amelo.github.io/dice-roll-game/" img={Tenzies} />
        </div>
    )
}
export default Projects
