import styled from "styled-components";

export const Card = styled.div` // .container
  align-items: center;
  display: flex;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 24px;
  font-weight: 400;
  justify-content: space-around;
  padding: 15px;
  position: relative;
  width: 100vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }


  .card {
    border: 0px solid blue;
    background: linear-gradient(transparent, rgba(22, 74, 115, .9));
    border-radius: 6px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    height: 441px;
    margin: 30px 15px;
    padding: 15px;
    position: relative;
    transition: 0.3s ease-in-out;
    transition-delay: 0.1s;
    max-width: 330px;

    @media (max-width: 768px) {
      margin: 30px 15px;
    }

    &:hover {
      height: 441px;
      background: linear-gradient(rgba(22, 74, 115, .9), rgba(22, 74, 115, .9));

      @media (max-width: 768px) {
        margin: 30px 15px;
      }
      
      .content {
        margin-top: -69px;
        opacity: 1;
        transition: 0.3s ease-in-out;
        transition-delay: 0.1s;
        visibility: visible;
      }

      .imgBox {
        transition: 0.3s ease-in-out;
        transition-delay: 0.1s;
        top: -6px;
      }

      .tipo {
        color: rgba(22, 74, 115, .9);
        transition: 0.3s ease-in-out;
        transition-delay: 0.1s;
        visibility: hidden;
      
        &__comentario {
          transition: 0.3s ease-in-out;
          transition-delay: 0.1s;
          visibility: hidden;
        }
      }

    }

    .imgBox {
      align-items: center;
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
      height: 260px;
      position: relative;
      top: -45px;
      transition: 0.3s ease-in-out;
      transition-delay: 0.1s;
      width: 260px;
      z-index: 1;
      
      &__image {
        border-radius: 6px;
        max-width: 100%;
      }
      
    }

    .content {
      border: 0px solid rgba(22, 74, 115, 1);
      color: #eee;
      margin-top: -60px;
      opacity: 0;
      padding: 0px;
      position: relative;
      text-align: center;
      transition: 0.3s ease-in-out;
      visibility: hidden;
      width: 100%;

      &__tittle {
        padding-top: 9px;
        padding-bottom: 3px;
      }

      &__description {
        font-size: 16px;
        padding: 6px 0px;
      }

      &__local {
        font-size: 16px;
        padding-top: 6px 0;
        padding-bottom: 21px;
      }
    }


    .tipo {
      color: #eee;
      font-size: 24px;
      margin-top: 6px;
      text-align: center;
      transition: 0.3s ease-in-out;
      transition-delay: 0.1s;
    
      &__comentario {
        color: #eee;
        font-size: 14px;
        margin-top: 21px;
        text-align: center;
        transition: 0.3s ease-in-out;
        transition-delay: 0.3s;
      }
    }


    .nav__link {
      background-color: rgba(255, 255, 255, .01);
      color: #164A73; // rgba(227, 189, 20, 1); Dourado
      width: 90vw;
      padding: 12px;


      &:hover {
        background-color: rgba(255, 255, 255, .01);
        border-radius: 9px;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
`;

