// import React, { useState, useEffect } from 'react'
import React, { useState, useEffect } from 'react'
import Button from '../Button';
import { getEmprNavMmt } from '../Data/EmprNavMmt.data';
import { getEmprNavMe } from '../Data/EmprNavMe.data';
import { getEmprNavRcr } from '../Data/EmprNavRcr.data';
import { getEmprNavMD } from '../Data/EmprNavMD.data';
import * as Styled from './Card.styles';

function Card({ openEmpreendimentos }) {

  const [navItemsRcr, setNavItemsRcr] = useState([]);
  useEffect(() => {
    setNavItemsRcr(getEmprNavRcr());
  }, [])

  const [navItemsMmt, setNavItemsMmt] = useState([]);
  useEffect(() => {
    setNavItemsMmt(getEmprNavMmt());
  }, [])

  const [navItemsMe, setNavItemsMe] = useState([]);
  useEffect(() => {
    setNavItemsMe(getEmprNavMe());
  }, [])

  const [navItemsMD, setNavItemsMD] = useState([]);
  useEffect(() => {
    setNavItemsMD(getEmprNavMD());
  }, [])

  return (
    <Styled.Card>

      <div className='card'>
        <div className='imgBox'>
          <img className='imgBox__image' src='./images/empreendimentos/empreend_MMT.png' alt='' />
        </div>

        <div className='tipo'>LANÇAMENTO</div>
        <div className='tipo__comentario'>5 Andares - Cobertura - 75m2 e 120m2</div>

        <div className='content'>
          <div className='content__tittle'>MAISON MARIA THEREZA</div>
          <div className='content__description'>Alto padrão</div>
          <div className='content__local'>Poços de Caldas - MG</div>
          {navItemsMmt.map((item) => (
              <Button key={item.id}>
                <a href={item.href} className='nav__link'>{item.label}</a>
              </Button>
            ))
          }
        </div>  
      </div>


      <div className='card'>
        <div className='imgBox'>
          <img className='imgBox__image' src='./images/empreendimentos/empreend_ME.png' alt='' />
        </div>

        <div className='tipo'>FUTURO LANÇAMENTO</div>
        <div className='tipo__comentario'>3 Suítes - 3 Vagas - 222,23m2</div>

        <div className='content'>
          <div className='content__tittle'>MAISON ESPERANCE</div>
          <div className='content__description'>Residencial Condomínio Fechado</div>
          <div className='content__local'>São João da Boa Vista - SP</div>
          {navItemsMe.map((item) => (
            <Button key={item.id}>
              <a href={item.href} className='nav__link'>{item.label}</a>
            </Button>
          ))
        }
        </div>
      </div>


      <div className='card'>
        <div className='imgBox'>
          <img className='imgBox__image' src='./images/empreendimentos/empreend_RCR.png' alt='' />
        </div>

        <div className='tipo'>REALIZADO</div>
        <div className='tipo__comentario'>3 Andares</div>

        <div className='content'>
          <div className='content__tittle'>Resid. CARMO & RIBEIRO</div>
          <div className='content__description'>3 Andares</div>
          <div className='content__local'>Poços de Caldas - MG</div>
          {navItemsRcr.map((item) => (
              <Button key={item.id}>
                <a href={item.href} className='nav__link'>{item.label}</a>
              </Button>
            ))
          }
        </div>  
      </div>

      <div className='card'>
        <div className='imgBox'>
          <img className='imgBox__image' src='./images/empreendimentos/empreend_MD.jpg' alt='' />
        </div>

        <div className='tipo'>REALIZADO</div>
        <div className='tipo__comentario'>Acabamentos em madeira</div>

        <div className='content'>
          <div className='content__tittle'>MANSÃO DARLINGTON</div>
          <div className='content__description'>Tipologia 15.000 m2</div>
          <div className='content__local'>MAHWAH – New Jersey - EUA</div>
          {navItemsMD.map((item) => (
              <Button key={item.id}>
                <a href={item.href} className='nav__link'>{item.label}</a>
              </Button>
            ))
          }
        </div>  
      </div>
      
    </Styled.Card>
  )
}

export default Card;

// navItems.map((item) => (
//   <li key={item.id} className='nav__item'>
//     <a href={item.href} className='nav__link'>{item.label}</a>
//   </li>
//   ))}


// https://www.terabox.com/sharing/link?surl=IH3bIeZJTFUT-6RAzhqLEw&path=%2Fess_vds