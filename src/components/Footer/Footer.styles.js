import styled from "styled-components";

export const Footer = styled.div`
  background: radial-gradient(rgba(22, 74, 115, 1), rgba(22, 74, 115, .9)); // Azul Royal #164A73
  bottom: 0;
  display: flex;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 20px;
  font-weight: 400;
  height: auto;
  justify-content: space-around;
  left: 0;
  margin: 0;
  right: 0;
  text-align: center;
  padding: 45px 9px;
  width: 100vw;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }

  .inner-wrapper {
    color: #ccc;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin: 15px 21px;
    width: 90vw;

    h4 {
      border-bottom: 1px solid #ccc;
      font-family: 'Prosto One', cursive, sans-serif;
      font-size: 20px;
      font-weight: 400;
      margin-bottom: 9px;
      padding: 6px 9px; 
    }
  }

  .navbar-LinkContainer {
    display: flex;
    flex-direction: column;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 14px;
    font-weight: 400;

    p {
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 14px;
      font-weight: 400;
      text-align: left;
      text-decoration: none;
      padding-left: 21px;
      padding-top: 9px; 
    }
  }

  .navbar-Link {
    color: #ccc;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    padding: 12px 0px 9px 21px;

    a {
      color: #ccc;
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 14px;
      font-weight: 400;
      text-decoration: none;
      line-height: 17px;
      margin-bottom: 0px;
      min-width: 170px;

      @media(max-width: 768) {
        margin-bottom: 7px;
      }

      &:last-child {
        margin-bottom: 0;
      }
      
      &:hover {
        //font-family: 'Caros Soft Bold';
      }
    }
    
  }

  .nav-item {
    padding-bottom: 18px;
  }

  .nav-link {
    color: #ccc;

    &:hover {
      border-bottom: 1px solid #ccc;
    }
  }

  .social-media {
    &__icon {
      align-items: center;
      background-color: transparent;

      // background-color: rgba(255, 255, 255, 0.9);
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 3%;
      color: #ccc;
      display: inline-flex; 
      height: 30px;
      margin-left: 0px;
      justify-content: center;
      overflow: hidden;
      width: 100%;
      transition: background-color .15s ease-in-out;
      text-indent: -1000px;

      @media(min-width: 768) {
        margin-left: initial;
      }

      &:hover {
        // background-color: rgba(255, 2555, 255, 0.3);
        border-bottom: 1px solid #ccc;
      }

      &--whatsapp {
        background-image: url(/images/icons/logo-whatsapp.svg);
        background-position: 3px 3px;
        background-size: 9%;
      }

      &--fone {
        background-image: url(/images/icons/phone.png);
        background-position: 3px 3px;
        background-size: 9%;
      }

    }
  }

`;
