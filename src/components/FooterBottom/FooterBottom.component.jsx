import React from "react";
import * as Styled from './FooterBottom.styles';

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return(
    <Styled.FooterBottom>
    
      <div className='inner-wrapper'>
        <div className='navbarLink'>Todos os Direitos Reservados &#0174; {currentYear}</div>          
      </div>

      <div className='inner-wrapper'>
        <div className='navbarLink'>Políticas Privacidade</div>
      </div>

      <div className='inner-wrapper'>
        <div className='navbarLink'>cresci: 41395</div>
      </div>

    </Styled.FooterBottom>
  )

}

export default FooterBottom;
// Copyright &#169;
