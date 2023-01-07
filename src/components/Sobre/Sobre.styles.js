import styled from "styled-components";

export const Sobre = styled.div`
  left: 0;
  margin: 0px;
  right: 0;
  padding: 0;
  width: 100vw;

  @media (max-width: 768px) {
    
  }

  .header {
    align-items: center;
    color: rgba(22, 74, 115, 1); 
    font-family: 'Prosto One', cursive, sans-serif;
    font-size: 32px;
    font-weight: 600;
    margin-top: 30px;
    padding: 18px 0;
    padding-left: 10%;
    position: relative;
    /* text-shadow: 1px 3px 3px #eee; */
    width: 100vw;

    @media (max-width: 768px) {
      margin-top: 15px;
      padding-left: 5%;
    }
  }

  .inner-wrapper { 
    align-items: center;
    color: #333;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin: 30px 0;
    padding: 30px 0;
    width: 100vw;

    p {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      margin: 15px 0;
      padding: 15px 0;
    }
  }


  .box {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 30px;
    text-align: left;
    width: 100vw;

    h2 {
      font-size: 18px;
      padding: 30px;
    }

    h3 {
      font-size: 16px;
      padding: 5px 45px 0px 45px;
      width: 100%;
    }

    p {
      font-size: 14px;
      line-height: 2.1;
      text-align: justify;
      padding: 15px 60px 30px 60px;
      width: 100%;
    }

    @media (max-width: 768px) {
      padding: 15px;
    }
  }


  .box-incorporadora {
    align-items: center;
    color: #111;
    display: flex;
    justify-content: space-around;
    margin: 0;
    width: 100vw;
    padding: 30px 10px;

    img{
      /* border: thick double; */
      border: .18rem solid;
      border-radius: 3px;
    }

    @media (max-width: 768px) {
      flex-direction: column ;
    }
  }

  .pic {
    text-align: center;
    width: 50vw;
  }

  .text {
    padding: 0 45px;
    text-align: justify;
    width: 50vw;
    
    @media (max-width: 768px) {
      padding: 0px;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column ;
  }

  .titulo {
    font-size: 1.5rem;
    padding: 15px 30px;
  }

  .subTitulo {
    font-size: 1.2rem;
    padding: 15px 30px;
    text-align: center;
  }

  .descricao {
    align-items: center;
    font-size: 14px;
    line-height: 2.1;
    padding: 15px 30px;
  }

`;
