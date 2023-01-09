import React, { useState, useEffect } from 'react';
import { getTopNav } from '../Data/MainNav.data';
import * as Styled from './Footer.styles'

// import { 
//   Container,
//   InnerContainer,
//   NavbarLinkContainer,
//   NavbarLink } from './Footer.styles';

function Footer() {
  
  const [navItems, setNavItems] = useState([]);
  useEffect(() => {
    setNavItems(getTopNav());
  }, [])

  return(
    <Styled.Footer>
        <div className='inner-wrapper'>
          <h4>Contato</h4>
          <div className='navbar-LinkContainer'>
            <p>Escritório:</p>
            <div className='navbar-Link'>
              <div className='social-media__icon social-media__icon--whatsapp'>
                <a 
                  href="https://api.whatsapp.com/send?phone=5535999872627&text=Olá,%20Tenho%20interesse%20em%20saber%20mais%20sobre%20a%20empresa%20Essencial%20Construtora%20&%20Incorporadora,%20obrigado!" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <br/>(35) 9 9987-2627
                </a>
              </div>
            </div>
            
            <br/>
            <p>Vendas:</p>
            <div className='navbar-Link'>
              <div className='social-media__icon social-media__icon--whatsapp'>
                <a 
                href="https://api.whatsapp.com/send?phone=5535998893840&text=Olá,%20Tenho%20interesse%20em%20saber%20mais%20sobre%20os%20empreendimentos,%20obrigado!" 
                target="_blank"
                rel="noopener noreferrer"
                >
                  <br/>(35) 9 9889-3840
                </a>
              </div>

              <div className='social-media__icon social-media__icon--fone'>
                <br/>(35) 3722-3840
              </div>
            </div>

          </div>
        </div>

        <div className='inner-wrapper'>
          <h4>Localização</h4>
          <div className='navbar-LinkContainer'>
            <div className='navbar-Link'> 
              <a href='https://www.google.com/maps/place/Praça+Pedro+Sanches,+145+-+Centro,+Poços+de+Caldas+-+MG,+37701-004/@-21.7870639,-46.5699273,17z/data=!3m1!4b1!4m5!3m4!1s0x94c9dceec163fd17:0x86ed526ccaa5e900!8m2!3d-21.7870639!4d-46.5677386' target='_new'>
                Praça pedro Sanches, 145 - Centro
              </a>
            </div>
          </div>
        </div>


        <div className='inner-wrapper'>
          <h4>Empreendimentos</h4>
          <div className='navbar-LinkContainer'>
            <div className='navbar-Link' to='/maisonmariathereza'>Maison Maria Tereza</div>
            <div className='navbar-Link' to='/maisonesperance'>Maison Esperance</div>
          </div>
        </div>

        <div className='inner-wrapper'>
          <h4>Menu</h4>
          <div className='navbar-LinkContainer'>
            <div className='navbar-Link'>
              <ul>
                {navItems.map((item) => (
                <li key={item.id} className='nav-item'>
                  <a href={item.href} className='nav-link'>{item.label}</a>
                </li>
                ))}
              </ul>

            </div>
          </div>

        </div>
      
    </Styled.Footer>
  )
}

export default Footer;
