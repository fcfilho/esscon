import styled from "styled-components";
import Logo from '../../assets/essencial_logo.jpg';

export const Footer = styled.div`
  background: radial-gradient(rgba(22, 74, 115, 1), rgba(22, 74, 115, .9)); // Azul Royal #164A73
  border-top: 6px solid #a8061d;
  color: #ccc;

  .inner-wrapper {
    display: flex;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 15px;
    font-weight: 400;
    justify-content: space-between;
    margin: 30px 0px;
    padding: 30px 60px;

    @media(max-width: 768) {
      display: flex;
      flex-direction: column;
      padding: 40px;
    }

    .content {
      display: flex;
      flex-direction: column;

      &__header {
        border-bottom: 1px solid #eee;
        color: #eee;
        font-family: 'Prosto One', cursive, sans-serif;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 9px;
        text-align: center;
        padding: 10px;
      }

      &__endereco {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 15px;
        padding: 6px 0px 6px 9px;
      }

      &__fone {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 15px;
        padding: 6px 0px 6px 9px;

        &:hover {
          background: linear-gradient(transparent, rgba(255, 255, 255, 0.3));
          color: #fff;
        }

      }

      &__links {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 15px;
        padding: 6px 0px 6px 9px;
      }

      &__whatsapp {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 15px;
        padding: 6px 0px 6px 9px;
      }

      @media(max-width: 768) {
        flex-direction: column;
        align-items: flex-start;
        padding: 40px;
      }
    }


    nav {
      display: flex;
      flex-direction: column;

      @media(max-width: 768) {
        padding: 30px;
      }

      a {
        border-radius: 3px;
        color: #ccc;
        text-decoration: none;
        font-size: 14px;
        line-height: 9px;
        margin: 6px 0px;
        min-width: 170px;
        

        @media(max-width: 768) {
          margin: 3px 0;
        }

        &:last-child {
          margin-bottom: 0;
        }
        
        &:hover {
          background: linear-gradient(transparent, rgba(255, 255, 255, 0.3));
          color: #fff;
        }
      }

    }
  }
`;


export const LogoImg = styled((props) => {

  const logo = Logo;
  return <img src={logo} {...props} alt='Essencial - Construtora e Incorporadora' />
})`
  height: 150px;
  width: 234px;
  margin-bottom: 40px;

  @media(max-width: 768px) {
    margin-bottom: 3px;
  }
`;
