import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Zoom } from 'react-awesome-reveal';

const MiddleEarth = () => {
  return (
    <Container>
      <div className='container-hidden-image'>
        <div className='hidden-image'>
          <img src='/assets/background/terra_media_LOTR.png' alt='' />
        </div>
      </div>
      <StyleHeader>
      <div className='text-header'>
      <Fade left duration={2500}>
        <h2>Terra Média</h2>
      </Fade>
      </div>
      <Fade left duration={2500}>
        <div className='border-bottom'>
          <span className='left-ring'>
            <img src='/assets/images/LOTR.png' alt='' />
          </span>
          <span className='center-ring'>
            <img src='/assets/images/LOTR.png' alt='' />
          </span>
          <span className='right-ring'>
            <img src='/assets/images/LOTR.png' alt='/' />
          </span>
        </div>
      </Fade>
      <Zoom duration={2500}>
        <div className='bg-history'>
          <div className='info-history'>
            <div className='top-border'>
              <span className='left-ring'>
                <img src='/assets/images/LOTR.png' alt='/' />
              </span>
              <span className='right-ring'>
                <img src='/assets/images/LOTR.png' alt='/' />
              </span>            
            </div>          
              <div className='text-history'>
                <span>A Primeira Era dos Anos do Sol começou quando os Valar 
                fizeram o Sol e a Lua a partir dos últimos fruto e flor das 
                Árvores moribundas. Depois de várias grandes batalhas, a 
                Longa Paz durou centenas de anos.</span>
                        
                <span>No final da era, tudo o que restava dos Elfos e Homens livres 
                era uma povoação na boca do rio Sirion. Entre eles estava Eärendil, 
                cuja esposa Elwing possuía um Silmaril que os seus avós Beren e 
                Lúthien tinham recuperado da coroa de Morgoth.</span> 

                <span>A Terra Média, tornou-se aparente que Sauron, o principal servo 
                de Morgoth, estava ativo de novo. Trabalhou com os ferreiros élficos 
                em Eregion no ofício dos anéis, e forjou o Um Anel para os dominar a 
                todos. Os Elfos ficaram cientes da sua existência, e deixaram de usar 
                os seus aneis.</span> 

                <span>A Terceira Era assistiu ao aumento do poder dos reinos de Arnor e 
                Gondor. Na época de O Senhor dos Anéis, Sauron tinha recuperado muita 
                da sua força anterior, e procurava o Um Anel.</span> 

                <span>Ele descobriu que estava na posse de um Hobbit e mandou os nove 
                Espectros do Anel para o recuperar. O portador do anel, Frodo Baggins, 
                viajou para Rivendell, onde se decidiu que o Anel tinha de ser destruído 
                da única forma possível: atirando-o para o fogo da Montanha da Perdição. 
                Frodo partiu para a jornada com oito companheiros. <b>A Sociedade do Anel.</b> 
                </span>   
                               
            </div>
          </div>
        </div>
      </Zoom>
    </StyleHeader>
    </Container>
  )
}

export default MiddleEarth;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 56.2rem;
  background: black;

  animation-fill-mode: both;
  animation-duration: 1000ms;
  animation-delay: 0ms;
  animation-iteration-count: 1;
  opacity: 1;
  animation-name: react-reveal-607813993386296-1;

  .container-hidden-image {
    margin: 0;
    width: 100%;
  }

  @media(max-width: 1900px) {
    .container-hidden-image {
      margin-top: -50px;
      height: 378px;
    }
  } 

  @media(max-width: 1100px) {
    .container-hidden-image {
      margin-top: -50px;
      height: 358px;
    }
  }
  
  @media(max-width: 550px) {
    .container-hidden-image {
      margin-top: -50px;
      height: 258px;
    }
  } 


  .hidden-image img {    
    width: 100%;
    height: 100vh;
    background-size: cover;
    object-fit: cover;
    -o-object-fit: cover;   
  }

  @media(max-width: 1900px) {
    .hidden-image img {
      bottom: 150px;
    }
  }
`;

const StyleHeader = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  bottom: -597px;
  animation-fill-mode: both;
  animation-duration: 1000ms;
  animation-delay: 0ms;
  animation-iteration-count: 1;
  opacity: 1;
  animation-name: react-reveal-607813993386296-1;

  @media(max-width: 1900px) {
    position: relative;
    top: -23.6rem;
  }

  @media(max-width: 1100px) {
    position: relative;
    top: -22.3rem;
  }

  @media(max-width: 550px) {
    position: relative;
    top: -16.1rem;
  }

  .text-header h2 {
    font-size: 1.8em;
    width: 100%;
    max-width: 1100px;
    text-align: center;
    margin: 0 auto;
    line-height: 1;
    display: block;
    font-family: 'Playfair Display SC', serif;
    position: relative;
    color: #fff;
    text-transform: uppercase;
    padding: 10px 20px 5px;
    text-shadow: -1px -1px 4px #ff004f,-2px -2px 4px #000;
    overflow: hidden;
    z-index: 0;
    font-weight: 300;
    background: -webkit-linear-gradient(left,rgba(8,19,32,0),#081320 25%,#081320 75%,rgba(8,19,32,0));
    background: linear-gradient(90deg,rgba(8,19,32,0) 0,#081320 25%,#081320 75%,rgba(8,19,32,0));

    &::after {
        content: "";
        display: block;
        position: absolute;
        width: 50%;
        height: 100%;
        bottom: -50%;
        left: 25%;
        z-index: -1;
        
        background: -webkit-radial-gradient(center,ellipse cover,rgb(255,202,1,1) 0,rgba(13,149,255,0) 60%);
        background: -webkit-radial-gradient(center,ellipse,rgb(255,202,1,1) 0,rgba(13,149,255,0) 60%);
        background: radial-gradient(ellipse at center,rgb(255,202,1,1) 0,rgba(13,149,255,0) 60%);
        background-color: rgba(0, 0, 0, 0);
        background-position-x: 0%;
        background-position-y: 0%;
        background-repeat: repeat;
        background-attachment: scroll;
        background-image: radial-gradient(rgb(255,202,1,1) 0px, rgba(13, 149, 255, 0) 70%);
        background-size: auto;
        background-origin: padding-box;
        background-clip: border-box;
      }
  }  

  .border-bottom {
    height: 2px;
    width: 50%;
    margin: 0 auto;
    position: relative;
    background-color: rgb(255,202,1,1);
  }

  .left-ring img {
    width: 30px;
    position: absolute;
    margin-left: -22px;
    top: -15px;

    background: radial-gradient(ellipse at center,rgb(255,202,1,1) 0,rgba(13,149,255,0) 60%);
    background-color: rgba(0, 0, 0, 0);
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: repeat;
    background-attachment: scroll;
    background-image: radial-gradient(rgb(255,202,1,1) 0px, rgba(13, 149, 255, 0) 45%);
    background-size: auto;
    background-origin: padding-box;
    background-clip: border-box;
  }

  .center-ring img {
    width: 30px;
    left: calc(50% - 19.5px);
    position: relative;
    align-items: center;
    justify-items: center;
    top: -10px;

    background: radial-gradient(ellipse at center,rgb(255,202,1,1) 0,rgba(13,149,255,0) 60%);
    background-color: rgba(0, 0, 0, 0);
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: repeat;
    background-attachment: scroll;
    background-image: radial-gradient(rgb(255,202,1,1) 0px, rgba(13, 149, 255, 0) 45%);
    background-size: auto;
    background-origin: padding-box;
    background-clip: border-box;
  }

  .right-ring img {
    width: 30px;
    position: absolute;
    right: -20px;
    top: -16px;

    background: radial-gradient(ellipse at center,rgb(255,202,1,1) 0,rgba(13,149,255,0) 60%);
    background-color: rgba(0, 0, 0, 0);
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: repeat;
    background-attachment: scroll;
    background-image: radial-gradient(rgb(255,202,1,1) 0px, rgba(13, 149, 255, 0) 45%);
    background-size: auto;
    background-origin: padding-box;
    background-clip: border-box;
  }

  .bg-history {
    position: relative;
    margin: 0 auto;
    top: 24.5em;    
    width: 660px;
    height: 450px;
    -webkit-transition: all .33s ease-in-out;
    transition: all .33s ease-in-out;

    font-family: MyriadPro-Cond,Arial,sans-serif;
  }

  @media(max-width: 1900px) {
    .bg-history {
      position: relative;
      top: 320px;
      height: 430px;
    }
  }

  @media(max-width: 1100px) {
    .bg-history {
      position: relative;
      top: 350px;
      height: 450px;
    }
  }

  @media(max-width: 640px) {
    .bg-history {
      width: 100%;
      position: relative;
      top: 350px;
      height: 450px;
    }
  }

  @media(max-width: 550px) {
    .bg-history {
      top: 200px;
      height: 500px;
    }
  }

  @media(max-width: 440px) {
    .bg-history {
      top: 100px;
      height: 550px;
    }
  }


  @media(max-width: 380px) {
    .bg-history {
      top: 100px;
      height: 550px;
    }
  }
  
   .info-history {
    position: relative;
    width: 100%; 
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: end;
    justify-content: flex-end;
  }

  .top-border {
    margin: 0 auto;
    width: 520px;
    height: 2px;
    position: relative;
    background-color: rgb(255,202,1,1);       
  }

  @media(max-width: 640px) {
    .top-border {
      width: 79%;
    }
  }

  span.left-diamond img {
    opacity: 1;
    margin-top: -2px;
  }  

  .text-history {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    max-width: 600px;
    margin: 0 auto;

    background: -webkit-linear-gradient(top,rgba(5,37,78,.5),rgba(5,37,78,.5) 75%,rgba(5,37,78,0));
    background: linear-gradient(180deg,rgba(5,37,78,.5) 0,rgba(5,37,78,.5) 75%,rgba(5,37,78,0));

    & span {
      position: relative;
      top: 2rem;
      margin: 6px auto;
      color: #fff;
      font-size: 14px;
      text-align: center;
      font-family: MyriadPro-Cond,Arial,sans-serif;

      @media(max-width: 380px) {
        font-size: 12px;
      }
    }
  }
`;