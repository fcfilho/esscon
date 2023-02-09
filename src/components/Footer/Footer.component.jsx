import React, { useState, useEffect } from 'react';
import { getTopNav } from '../Data/MainNav.data';
import { getNavEmprLancamentos } from '../Data/EmprLancamentos.data';
import { getNavEmprFuturos } from '../Data/EmprFuturos.data';
import { getNavEmprRealizados } from '../Data/EmprRealizados.data';
import * as Styled from './Footer.styles'

import { BsTelephone, BsWhatsapp, BsFillGeoAltFill} from "react-icons/bs";


function Footer() {
  
  const [navItems, setNavItems] = useState([]);
  useEffect(() => {
    setNavItems(getTopNav());
  }, [])

  const [navItemsLancamentos, setNavItemsLancamentos] = useState([]);
  useEffect(() => {
    setNavItemsLancamentos(getNavEmprLancamentos());
  }, [])

  const [navItemsFuturosLancamentos, setNavItemsFuturosLancamentos] = useState([]);
  useEffect(() => {
    setNavItemsFuturosLancamentos(getNavEmprFuturos());
  }, [])

  const [navEmprRealizados, setNavEmprRealizados] = useState([]);
  useEffect(() => {
    setNavEmprRealizados(getNavEmprRealizados());
  }, [])

  return(
    <Styled.Footer>
      <div className='inner-wrapper'>

        <div className='content'>
          <p className='content__header'>Empreendimentos</p>
          <h4>Lançamentos:</h4>
          <br/>
          <ul>
            {navItemsLancamentos.map((item) => (
              <li key={item.id}>
                <nav>
                  <a href={item.href} className='content__links'>{item.label}</a>
                </nav>
              </li>
              ))
            }
          </ul>


          <br/><br/>
          <h4>Lançamentos Futuros:</h4>
          <br/>
          <ul>
            {navItemsFuturosLancamentos.map((item) => (
              <li key={item.id}>
                <nav>
                  <a href={item.href} className='content__links'>{item.label}</a>
                </nav>
              </li>
              ))
            }
          </ul>


          <br/><br/>
          <h4>Empreendimentos Realizados:</h4>
          <br/>
          <ul>
            {navEmprRealizados.map((item) => (
              <li key={item.id}>
                <nav>
                  <a href={item.href} className='content__links'>{item.label}</a>
                </nav>
              </li>
              ))
            }
          </ul>
        </div>



        <div className='content'>
          <p className='content__header'>Contato</p>
          <h4>Escritório:</h4>
          <br />
          <div className='content__inline'>
            <BsWhatsapp />
            <nav>
              <a href="https://api.whatsapp.com/send?phone=5535999872627&text=Olá,%20Tenho%20interesse%20em%20saber%20mais%20sobre%20a%20empresa%20Essencial%20Construtora%20&%20Incorporadora,%20obrigado!" 
                target="_blank" rel="noopener noreferrer">
                  <p className='content__whatsapp'>(35) 9 9987-2627</p>
              </a>
            </nav>
          </div>

          <br />
          <div className='content__inline'>
            <BsWhatsapp />
            <nav>
              <a href="https://api.whatsapp.com/send?phone=5535981029043&text=Olá,%20Tenho%20interesse%20em%20saber%20mais%20sobre%20a%20empresa%20Essencial%20Construtora%20&%20Incorporadora,%20obrigado!" 
                target="_blank" rel="noopener noreferrer">
                  <p className='content__whatsapp'>(19) 9 8102-9043</p>
              </a>
            </nav>
          </div>

          <br /><br />
          <h4>Vendas:</h4>
          <br />
          <div className='content__inline'>
          <BsWhatsapp />
            <nav>
              <a href="https://api.whatsapp.com/send?phone=5535988893840&text=Olá,%20Tenho%20interesse%20em%20saber%20mais%20sobre%20os%20empreendimentos,%20obrigado!" 
                target="_blank" rel="noopener noreferrer">
                  <p className='content__whatsapp'>(35) 9 8889-3840</p>
                </a>
            </nav>
          </div>

          <br />
          <div className='content__inline'>
            <BsTelephone />
            <nav>
              <p className='content__fone'>(35) 3722-3840</p>
            </nav>
          </div>

          <br /><br />
          <h4>Endereço:</h4>
          <br />
          <div className='content__inline'>
            <BsFillGeoAltFill />
            <nav>
              <a href='https://www.google.com/maps/place/Praça+Pedro+Sanches,+145+-+Centro,+Poços+de+Caldas+-+MG,+37701-004/@-21.7870639,-46.5699273,17z/data=!3m1!4b1!4m5!3m4!1s0x94c9dceec163fd17:0x86ed526ccaa5e900!8m2!3d-21.7870639!4d-46.5677386'
                target="_blank" rel="noopener noreferrer">
                  <p className='content__endereco'>Praça pedro Sanches, 145 - Centro</p>
              </a>
            </nav>
          </div>
          
        </div>


        <div className='content'>
          <p className='content__header'>Menu</p>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <nav>
                  <a href={item.href} className='content__links'>{item.label}</a>
                </nav>
              </li>
            ))}
          </ul>
        </div>

        <div className='content'>
          <nav>
            <a href="http://www.construtoraessencial.com.br">
              <Styled.LogoImg  alt="Essencial - Construtora e Incorporadora"/>
            </a>
          </nav>
        </div>

      </div>
    </Styled.Footer>
  )
}

export default Footer;

