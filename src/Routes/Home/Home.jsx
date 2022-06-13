import React from 'react';
import '../../sass/Home.scss'
import logo from '../../images/sasuke-naruto.gif'


function Home() {
    return (
        <section className="main--Home">
            <div className="home">
                <header>
                    <h2>
                        Olá, meu nome é
                    </h2>
                    <h1>
                        Vinícius Melo
                    </h1>

                </header>
                <p>A temática deste site foi inspirado no poder do Sharingan do anime Naruto, devido a grande semelhança entre a logo do React e o poder em questão.

                    No mundo do Naruto este poder é capaz de fazer com que outras pessoas entrem no reino dos sonhos, e é isso que eu quero apresentar a quem está acessando o meu portifólio, o MEU sonho de ser programador, por aqui você vai poder ver os meus feitos como ninja (Projetos), os meus jutsus (Tecnologias) e além disso se você for um Tech Recruiter e Ninja como eu, pode fazer parte deste sonho comigo, me dando uma oportunidade de mostrar todas as minhas habilidades e evoluir cada vez mais. Aproveitem.
                </p>
            </div>
            <img src={logo} alt="" />
        </section>
    )
}

export default Home