import * as React from 'react'
import '../../sass/About.scss'
import logo from '../../images/sharingan.gif'

function About() {
    return (
        <section className="main--About">
            <div>
                <h1>About...</h1>
                <hr />
                <p>Sem medo de arriscar e encarar novos desafios, decidi que seguir a área jurídica não seria a melhor escolha para o meu futuro profissional e também pessoal, então depois de 3 anos cursando Direito, decidi trancar a faculdade para estudar programação, área pela qual me apaixonei desde que projetei meu TCC no técnico em Mecânica Industrial, automatizando uma linha de produção em Arduino (C++). Digo que me apaixonei pela área de programação porque é onde eu sinto as minhas habilidades em lógica fluindo naturalmente a cada código que eu escrevo e cada problema que me aparece. Resolver problemas nos meus códigos não se tornou uma questão de 'se', mas de 'quando' eu conseguiria resolver o problema e a euforia de ter uma ideia, por em prática e ver o problema ser resolvido se compara a poucas coisas que já senti na vida e isso vem se tornando uma das minhas experiências favoritas de uns meses pra cá, então a programação se tornou mais do que um achado de carreira, mas um achado de sentido de vida.</p>
            </div>
            <img src={logo} alt="" />
        </section>
    )
}

export default About