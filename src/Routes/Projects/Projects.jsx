import * as React from 'react';
import '../../sass/Projects.scss'

import Layout from './layout/Layout';

import Tenzies from '../../images/Tenzies.jpg'
import Cadastro from '../../images/CadastroFullStack.jpg'
import TaskList from '../../images/TaskList.jpg'
import Weather from '../../images/Weather-App.jpeg'
import Pokedex from '../../images/Pokedex.jpeg'



function Projects() {
    return (
        <section className='main--Projects'>
            <Layout linkGitHub="https://github.com/Vinicius-AMelo/dice-roll-game" linkPages="https://vinicius-amelo.github.io/dice-roll-game/" img={Tenzies} techs={['React', 'JavaScript']} projectName='Tenzie Game' projectDescription='Jogo de rolagem de dados, Projeto realizado seguindo o módulo React Basics do Curso The Frontend Developer Career Path da plataforma Scrimba.' />
            <Layout linkGitHub="https://github.com/Vinicius-AMelo/cadastro-fullstack" linkPages="https://cadastro-fullstack.vercel.app/" img={Cadastro} techs={['React', 'NextJS', 'TailwindCSS', 'TypeScript', 'Firebase']} projectName='Cadastro FullStack' projectDescription='Projeto de Cadastro simples de usuários, usando NextJS e o banco de dados do Firebase como backend, o cadastro é feito com o nome e idade, e o ID é retornado pelo próprio Firestore.' />
            <Layout linkGitHub="https://github.com/Vinicius-AMelo/task-list" linkPages="https://vinicius-amelo.github.io/task-list/" img={TaskList} techs={['React', 'JavaScript', 'ESLINT', 'LocalStorage']} projectName='Task List' projectDescription='Projeto pessoal que fiz para praticar os fundamentos do React que tinha aprendido até aquele momento.' />
            <Layout linkGitHub="https://github.com/Vinicius-AMelo/weather-app" linkPages="https://vinicius-amelo.github.io/weather-app/" img={Weather} techs={['React', 'TypeScript', 'ESLINT', 'Prettier', 'Consumo de API']} projectName='Weather App' projectDescription='Primeiro projeto consumindo uma API, usei como aprendizado do que estava vendo no momento, no início dos meus estudos em React com TypeScript.' />
            <Layout linkGitHub="https://github.com/Vinicius-AMelo/pokedex" linkPages="https://pokedex-murex-sigma.vercel.app/" img={Pokedex} techs={['React', 'TypeScript', 'Next.JS', 'ContextAPI', 'SASS', 'Consumo de API']} projectName='Pokedex' projectDescription='Meu projeto principal até então, consumindo a POKEAPI para criar uma pokedex com os 10 pokemons mais legais (minha opinião), com animações de ligar e desligar a tela e com o menu retrátil.' />

        </section>
    )
}
export default Projects
