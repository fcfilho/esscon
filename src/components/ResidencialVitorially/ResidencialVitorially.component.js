import React from 'react';
import * as Styled from './ResidencialVitorially.styles';

const ResidencialVitorially = () => {

  return(
    <Styled.ResidencialVitorially>
      <div className='hero'>
        <div className='boxText'>
          <div className='titulo'>Residencial Vitorially.</div>
          <div className= 'descricao'>
            <p>Localizado no bairro Jardim Vitória, Poços de Caldas - MG.</p>
            <p>Tipologia: 8 unidades.</p>
            <p>Entrega: Outubro de 2022.</p>
            <br /><br />
            <p>Empreendimento totalmente revitalizado pela empresa, uma reforma feita na parte interna e toda face externa, proporcionando uma majestosa fachada, e funcionamento externo,  qualidade de vida para quem  vai morar.</p>
          </div>
        </div>

        <div className='boxImg'>
          <img src="./images/empreendimentos/rv/logoRV.jpg" alt="" width='72%' height='72%' />
        </div>
        
      </div>

      <div className='inner-wrapper'>
        <div className='boxImg'>
          <img src="./images/empreendimentos/rv/frente1.jpg" alt="" width='72%' height='72%' />
        </div>
        
        <div className='boxImg'>
          <img src="./images/empreendimentos/rv/frente2.jpg" alt="" width='72%' height='72%' />
        </div>
      </div>

    </Styled.ResidencialVitorially>
  )

}

export default ResidencialVitorially;
