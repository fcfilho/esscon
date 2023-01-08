import styled from "styled-components";

export const MaisonMariaThereza = styled.div`
  text-align: center;
  width: 100vw;

  img{
    border: thick double rgba(22, 74, 115, .9);
    border-radius: 3px;
  }

  .hero {
    align-items: center;
    border-bottom: 1px solid #999;
    display: flex;
    justify-content: space-around;
    margin: 0 30px;
    padding: 15px;

    img {
      border: none;
    }

    @media (max-width: 768px) {
      flex-direction: column ;
    }
  } 
  
  .inner-wrapper {
    align-items: center;
    color: #111;
    display: flex;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20px;
    font-weight: 400;
    justify-content: space-around;
    margin: 15px 0;
    width: 100%;
    padding: 45px 30px;

    .hero{
      border-bottom: 1px solid #999;

      @media (max-width: 768px) {
        margin: 0;
        width: 100vw;
      }
    }

    p {
      font-size: 14px;
      padding-bottom: 30px;
    }

    @media (max-width: 768px) {
      flex-direction: column ;
      padding: 15px;
    }
  }

  .navbarLink {
    color: #111;
    padding: 3px 9px;
  }

  .pic {
    text-align: center;
    width: 50vw;

    @media (max-width: 768px) {
      padding: 0 10px;
      text-align: center;
    }
  }

  .text {
    background: linear-gradient(rgba(22, 74, 115, .01), rgba(22, 74, 115, .1));
    border-radius: 6px;
    padding: 0 45px;
    text-align: justify;
    width: 50vw;

    @media (max-width: 768px) {
      padding: 0 10px;
      margin: 10px 0;
      text-align: center;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column ;
  }

  .titulo {
    background: linear-gradient(rgba(22, 74, 115, .6), rgba(22, 74, 115, .9));
    border-radius: 1px 100px / 120px;
    color: yellow;
    font-family: 'Dancing Script';
    font-size: 2.1rem;
    font-weight: 600;
    padding: 15px;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .subTitulo {
    font-size: 1.2rem;
    padding: 15px 30px;
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .descricao {
    align-items: center;
    font-size: 1rem;
    line-height: 2.1;
    padding: 15px 30px;

    @media (max-width: 768px) {
      font-size: .8rem;
    }

    li {
      list-style: square;
      line-height: 3;
    }
  }
`;
