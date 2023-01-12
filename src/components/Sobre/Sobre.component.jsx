import React from 'react'
import * as Styled from '../Sobre/Sobre.styles';

const Sobre = () => {
  return (
    <Styled.Sobre>

      <div className='inner-wrapper'>

        <div className='header'>Sobre<br /><br /><br />Conheça a nossa história.</div>

        <div className='box'>
          <h2>ESSENCIAL CONSTRUTORA INCORPORADORA EIRELI</h2>
          
          <h3>SOLIDEZ E CREDIBILIDADE</h3>
          <p>Fundada em 12-06-2001 a Essencial tem sede em Poços Da Caldas - MG e hoje atua na região
          com empreendimentos de alto valor, agregando, condições vantajosas, diversas
          facilidades, foco em alta qualidade, beleza e projetos diferenciados.

          Com um desenvolvimento acima dos padrões, a Essencial é reconhecida como
          inovadora, aparecendo na revista “THE MAGAZINE OF THE NATIONAL WOOD
          FLOORING ASSOCIATION”, em MOUNT JULIET (TENNESSE - EUA), país onde
          desenvolveu inúmeros projetos marcantes na área da construção civil.</p>  
        
          <h3>O GRUPO</h3>  
          <p>Todo capital da Essencial é próprio e com quase 30 anos de mercado se destaca pela 
          grande experiência acumulada com os inúmeros projetos nos EUA e os já
          realizados em Poços Da Caldas - MG. Possui atualmente a subsidiária em MOUNT
          JULIET, gerenciada por Ashley do Carmo.</p>


          <h3>MISSÃO</h3>
          <p>Proporcionar qualidade de vida através de empreendimentos exclusivos, únicos,
          com inovação e tecnologia, mobilidade para que as pessoas vivam melhor e com estilo
          o seu precioso tempo.</p>

          <h3>VISÃO</h3>
          <p>Ser referência em qualidade, solidez na construção civil, trazem o melhor custo
          benefício para os clientes, além do bem estar.</p>

          <h3>VALORES</h3>
          <p>
            <ul>
              <li>Solidez</li>
              <li>Transparência</li>
              <li>Inovação</li>
              <li>Governança</li>
              <li>Respeito aos clientes, colaboradores, parceiros e à comunidade</li>
            </ul>
          </p>



          <h2>RECONHECIMENTO QUE FAZ A DIFERENÇA</h2>

          <h3>SOLIDEZ</h3>  
          <p>Atuação desde 2006 no mercado, com capital próprio, fazem da Essencial uma
          opção robusta e segura.</p>

          <h3>COMPROMISSO RECONHECIDO</h3>  
          <p>Nossa reputação de profissionalismo, inovação, qualidade e compromisso com obras e prazos, 
          conta com equipes qualificadas de engenheiros, arquitetos e designers.
          </p>

          <h3>SATISFAÇÃO DOS CLIENTES</h3>
          <p>Ampla maioria de clientes recomendam a Essencial em pesquisas de satisfação pós
          venda.</p>


          <h3>VALORIZAÇÃO</h3>
          <p>Seleção criteriosa de projetos, terrenos, localização e projetos de
          interiores com assinatura, faz grande diferença na comodidade, qualidade de vida e no
          potencial de valorização.</p>


          <h3>PARCERIA</h3>
          <p>A Essencial privilegia parcerias com todos os seus públicos internos, imobiliárias e
          corretores qualificados e reconhecidos. Equipe de MARKETING competente, suporte
          jurídico, fornecedores e clientes.</p>


          <h3>FACILIDADE EM CONTRATOS</h3>
          <p>Além do suporte jurídico, financeiro e contábil, a Essencial facilita pagamentos com
          financiamentos de médio e longo prazo direto com a construtora, em condições
          vantajosas.</p>

        </div>


        <div className='header'>Idealizadoras</div>
        <div className='box-incorporadora'>
          <div className='pic'>
            <img src="./images/empreendimentos/mmt/mTereza.png" alt="" />
          </div>
          
          <div className='text'>
            <div className='subTitulo'>MARIA THEREZA</div>
            <div class='descricao'>
              <p>A escolha do nome não poderia ser melhor!</p>
              <p>Uma mulher de estilo clássico, mas muito a frente do seu tempo. Nascida em nossa linda cidade, nos propôs um estilo de vida onde o simples era chique e arrojado.</p>
              <p>Em sua beleza Matriarcal nos encinos virtudes que marcam nossas vidas até hoje.</p>
              <p>É isso que queremos refletir nesta bela obra.</p>
              <p>A obra de uma vida!</p>
            </div>
          </div>
        </div>

        <div className='box-incorporadora'>
          <div className='pic'>
            <img src="./images/empreendimentos/mmt/ashleyCarmo.png" alt="" />
          </div>
          
          <div className='text'>
            <div className='subTitulo'>ASHLEY DO CARMO</div>
            <div className='descricao'>
              <p>Ashey Do Carmo had a carrer as a bank manager/financial specialist for 14 years before becoming business partner and CFO at Brown Oaks Flooring. She has transformed the company into a profitable operation by managing buider relationships and working with flooring distributors to improve quality and develop extended benefits to clients.</p>
              <p>Do Carmo has managed some of the company's largest contract jobs and grown sales beyond expectations. She manages helping homeowners, interior designers and builders to attain their dream floors in every home the team touches.</p>
              <p>Do carmo is an advocate for children in the foster system in Wilson County, Tennessee. She and her husband, Jeff, sponsor several children in the foster care system to provide Christimas to them, ranging from just a few months old to those who are almost adults. She donates school supplies to children in the foster care system. Additionally, she has donated her time at the Salvation Army's processing center for the Angel Tree program.</p>
            </div>
          </div>
        </div>

        <div className='box-incorporadora'>
          <div className='pic'>
            <img src="./images/empreendimentos/mmt/arquit.png" alt="" />
          </div>
          
          <div className='pic'>
            <img src="./images/empreendimentos/mmt/engenharia.png" alt="" />
          </div>
        </div>

      </div>




    </Styled.Sobre>
  )
}

export default Sobre
