import React from 'react'
import { BsTelephone, BsWhatsapp, BsFillGeoAltFill, BsMailbox } from "react-icons/bs";

import * as Styled from '../Contato/Contato.styles';

const Contato = () => {
  return (
    <Styled.Contato>
      <div className='header'>Contato</div>
      <div className='inner-wrapper'>        
        <div className='map'>
          <a href='https://www.google.com/maps/place/Praça+Pedro+Sanches,+145+-+Centro,+Poços+de+Caldas+-+MG,+37701-004/@-21.7870639,-46.5699273,17z/data=!3m1!4b1!4m5!3m4!1s0x94c9dceec163fd17:0x86ed526ccaa5e900!8m2!3d-21.7870639!4d-46.5677386' target='_new'>
            <div className='map__over'>&nbsp;</div>
          </a>
        </div>         

        <div className='fones'>
          <h3>Nossos Contatos</h3>
          <a href="mailto:contato@construtoraessencial.com.br?subject=Informações sobre os empreendimentos" 
            target="_blank" rel="noopener noreferrer">
              <p className='content__whatsapp'><BsMailbox /> E-mail</p>
          </a>

          <h4>Vendas</h4>          
          <p className='content__whatsapp'><BsWhatsapp /> (35) 3722-3840</p>
          
          <a href="https://api.whatsapp.com/send?phone=5535988893840&text=Olá,%20Tenho%20interesse%20em%20saber%20mais%20sobre%20os%20empreendimentos,%20da%20Essencial%20Construtora,%20obrigado!" 
            target="_blank" rel="noopener noreferrer">
              <p className='content__whatsapp'><BsWhatsapp /> (35) 9 8889-3840</p>
          </a>

          <h4>Escritório</h4>
          <a href="https://api.whatsapp.com/send?phone=5535999872627&text=Olá,%20Tenho%20interesse%20em%20saber%20mais%20sobre%20a%20empresa%20Essencial%20Construtora%20e%20Incorporadora,%20obrigado!" 
            target="_blank" rel="noopener noreferrer">
              <p className='content__whatsapp'><BsWhatsapp /> (35) 9 9987-2627</p>
          </a>
        </div>

      </div>
    </Styled.Contato>
  )
}

export default Contato;
