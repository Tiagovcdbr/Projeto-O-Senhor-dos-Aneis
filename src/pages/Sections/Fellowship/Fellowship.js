import React from 'react'
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import { Zoom } from 'react-awesome-reveal';

const Fellowship = () => {
  return (
    <Container>
      <div className='container-hidden-image'>
        <div className='hidden-image'>
          <img src='/assets/background/cenarios_do_filme_senhor_dos_aneis.webp' alt='' />
        </div>
      </div>
      <StyleHeader>
      <div className='text-header'>
      <Fade left  duration={3000}>
        <h2>O Condado</h2>
      </Fade>
      </div>
      <Fade left duration={3000}>
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
      <ContainerLogo>
        <div className='logo'>
          <Zoom duration={2500}>
            <img src='/assets/logo/lord-of-the-rings1.png' alt='logo' />
          </Zoom>
        </div>
      </ContainerLogo>
      <Zoom duration={3000}>
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
                <span>O rio Brandevin limita o Condado pelo leste. 
                Hobbits também vivem na Terra dos Buques, que fica a 
                leste do rio e a oeste da Cerca que protege o Condado 
                de invasões das árvores da Floresta Velha;</span>
                        
                <span>No entanto, a Terra dos Buques não foi reconhecida 
                formalmente como parte do Condado ate o fim da Guerra do 
                Anel, quando foi oficialmente cedida ao Condado pelo Rei 
                Elessar.</span> 

                <span>Pelo norte e pelo oeste, o Condado é limitado pelas 
                antigas estrada sul e estrada leste e por traços geográficos 
                como as Colinas das Torres.</span> 

                <span>O Condado é descrito como uma terra pequena mas bonita 
                e frutífera, amada por seus habitantes.</span> 

                <span>Os Hobbits possuem um extensivo sistema de agricultura 
                no Condado mas não são industrializados. Vários recursos podem 
                ser encontrados no Condado, incluindo cereais, frutas, 
                madeira e erva-de-fumo.</span>   
                               
            </div>
          </div>
        </div>
      </Zoom>
      <ContainerCharacter>
        <div className='container'>
          <div className='character-profile'>
            <span className='image-background'>
              <Fade delay={1200}>
                <img src='/assets/images/The-Hobbit-Transparent-Background.png' alt='bilbo' />
              </Fade>
            </span>
          </div>
        </div>
    </ContainerCharacter>
    </StyleHeader>    
    </Container>
  )
}

export default Fellowship;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: -4px;
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
  margin-top: -56.4rem;
  animation-fill-mode: both;
  animation-duration: 1000ms;
  animation-delay: 0ms;
  animation-iteration-count: 1;
  opacity: 1;
  animation-name: react-reveal-607813993386296-1;

  @media(max-width: 1900px) {
    position: relative;
    margin-top: -23.6rem;
  }

  @media(max-width: 1100px) {
    position: relative;
    margin-top: -22.4rem;
  }

  @media(max-width: 550px) {
    position: relative;
    margin-top: -16.1rem;
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
    max-width: 660px;
    height: 350px;
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
      top: 150px;
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

const ContainerLogo = styled.div`

  animation-fill-mode: both;
  animation-duration: .33.5s;
  animation-delay: 100ms;
  animation-iteration-count: 1;
  opacity: 1;
  animation-name: react-reveal-607813993386296-1;

  .logo img {
    position: absolute;
    width: 35rem;
    right: 0;
    margin-right: 50px;
    margin-top: -30px;

    @media(max-width: 750px) {
      width: 35rem;
    }

    @media(max-width: 605px) {
      width: 25rem;
    }

    @media(max-width: 500px) {
      width: 20rem;
    }

    @media(max-width: 500px) {
      width: 20rem;
    }

    @media(max-width: 400px) {
      width: 15rem;
      margin-top: -10px;
    }

    @media(max-width: 310px) {
      width: 13rem;
      margin-top: -10px;
      margin-left: 20px;
    }
  }
`

const ContainerCharacter = styled.div`
  width: 100%;
  z-index: 0;
  position: relative;

  .container {
    max-width: 1100px;
    display: flex;
    width: 50%;
    -moz-box-align: center;
    flex-wrap: wrap;
    padding: 0px 20px 20px;
    
    width: 100%;
    margin-left: calc(100% - 1100px);
    position: relative;
    transition: 0.5s ease-in-out;

    animation-fill-mode: both;
    animation-duration: 3000ms;
    animation-delay: 0ms;
    animation-iteration-count: 1;
    opacity: 1;
    animation-name: react-reveal-607813993386296-1;
  }

    .character-profile {
      position: absolute;
      width: 50%;
      top: -130px;
      left: 480px;
      max-width: 817px;
      z-index: -1;

      animation-fill-mode: both;
      animation-duration: .33s;
      animation-iteration-count: 1;
      transition: all .77s ease-in-out;
      opacity: 1;
      animation-name: react-reveal-607813993386296-1;
    }

    @media(max-width: 1100px) {
      .character-profile {
        position: absolute;
        width: 100%;
      }
    }

    @media(max-width: 605px) {
      .character-profile {
        overflow: hidden;
        max-width: 450px;
      }
    }

    @media(max-width: 460px) {
      .character-profile {
        overflow: hidden;
        max-width: 370px;
      }
    }

    @media(max-width: 375px) {
      .character-profile {
        margin-left: -100px;
      }
    }

    @media(max-width: 300px) {
      .character-profile {
        display: none;
      }
    }

    .image-background {
      color: transparent;
      display: inline-block;
      max-width: 817px;
    }

    .image-background img {
      color: transparent;
      display: inline-block;
      width: 100%;
    }

    @media(max-width: 605px) {
      .image-background {
        img {
          width: 100px;
        }
      }
    }

    @media(max-width: 280px) {
      .character-profile {
        display: none;
      }
    }

    @media(max-width: 1100px) {
      .image-background img {
        width: 600px;
        margin-top: 40px;
      }
    }  
`;