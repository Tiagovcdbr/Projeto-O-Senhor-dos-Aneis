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
    <ContentTrailer>
      <Zoom duration={2500}>
        <div className='video-thumb'>
          <div className='video-still'>
            <Zoom>
              <video
                className='video-bg'
                src={"/assets/videos/Discurso do Bilbo.mp4"} 
                autoplay='1'
                allowfullscreen="1"
                loop
                muted                      
              />
            </Zoom>
          </div>
          
          <div className='video-border-decoration-top-left'>
            <img className='video-border-decoration' src='/assets/images/LOTR.png' alt='/' />
          </div>
          <div className='video-border-decoration-top-right'>
            <img className='video-border-decoration' src='/assets/images/LOTR.png' alt='/' />
          </div>
          <div className='video-border-decoration-bottom-left'>
            <img className='video-border-decoration' src='/assets/images/LOTR.png' alt='/' />
          </div>
          <div className='video-border-decoration-bottom-right'>
            <img className='video-border-decoration' src='/assets/images/LOTR.png' alt='/' />
          </div>
        </div>
      </Zoom>
      
    </ContentTrailer>
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
    transform: rotate(125deg);

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
    transform: rotate(90deg);

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
  transition: all .33s ease-in-out;

  @media(max-width: 1900px) {
    margin-top: -150px;
  }

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

const ContentTrailer = styled.div`
  position: absolute;
  max-width: 400px;
  min-width: 380px;
  height: 320px;

  animation-fill-mode: both;
  animation-duration: 3000ms;
  animation-delay: 0ms;
  animation-iteration-count: 1;
  opacity: 1;
  animation-name: react-reveal-607813993386296-1;

  .video-bg {
    height: 246px;
  }
  
    .video-thumb {
      display: inline-block;
      padding: 0;
      margin-left: 130px;
      margin-top: 50px;
      max-width: 600px;
      width: 100%;
      height: 250px;
      position: relative;
      z-index: 0;
      cursor: pointer;
      border: 2px solid  rgb(255,202,1,1);
      -webkit-transition: all .33s ease-in-out;
      transition: all .33s ease-in-out;
    }

    @media(max-width: 1100px) {
      .video-thumb {
        position: relative;
        max-width: 500px;
        height: 280px;
        top: 600px;
        margin: 50px auto;
        display: block;
        justify-content: space-around;
        -webkit-transition: all .33s ease-in-out;
        transition: all .33s ease-in-out;
      }
    }

    @media(max-width: 964px) {
      .video-thumb {
        position: relative;
        max-width: 500px;
        height: 280px;
        margin-top: 50px;
        top: 600px;
        margin-right: 180px;
        display: block;
        justify-content: space-around;
        -webkit-transition: all .33s ease-in-out;
        transition: all .33s ease-in-out;
      }
    }

    @media(max-width: 800px) {
      .video-thumb {
        position: relative;
        max-width: 500px;
        height: 280px;
        margin-top: 50px;
        top: 600px;
        margin-right: 90px;
        display: block;
        justify-content: space-around;
        -webkit-transition: all .33s ease-in-out;
        transition: all .33s ease-in-out;
      }
    }

    @media(max-width: 640px) {
      .video-thumb {
        position: relative;
        max-width: 500px;
        height: 280px;
        margin-top: 50px;
        top: 600px;
        margin-right: 70px;
        display: block;
        justify-content: space-around;
        -webkit-transition: all .33s ease-in-out;
        transition: all .33s ease-in-out;
      }
    }

    @media(max-width: 580px) {
      .video-thumb {
        position: relative;
        max-width: 500px;
        height: 280px;
        margin-top: 50px;
        top: 600px;
        align-items: center;
        justify-content: center;
        margin-right: 40px;
        display: block;
        justify-content: space-around;
        -webkit-transition: all .33s ease-in-out;
        transition: all .33s ease-in-out;
      }
    }

    @media(max-width: 550px) {
      .video-thumb {
        position: relative;
        max-width: 400px;
        height: 225px;
        margin-top: 50px;
        top: 400px;
        align-items: center;
        justify-content: center;
        margin-right: 70px;
        display: block;
        justify-content: space-around;
        -webkit-transition: all .33s ease-in-out;
        transition: all .33s ease-in-out;
      }
    }

    @media(max-width: 410px) {
      .video-thumb {
        position: relative;
        max-width: 250px;
        height: 140px;
        margin-top: 50px;
        top: 250px;
        align-items: center;
        justify-content: center;
        margin-right: 70px;
        display: block;
        justify-content: space-around;
        -webkit-transition: all .33s ease-in-out;
        transition: all .33s ease-in-out;
      }
    }

    .video-still {
      overflow: hidden;
      display: block;
      width: 100%;
      position: relative;
      overflow: hidden;
      margin-bottom: 0;

        img {
          width: 100%;
        }
    }

    @media(max-width: 1100px) {
      .video-still {
        width: 100%; 
        position: absolute;          
      }
    }

    .play-btn-home {
      width: 75%;
      height: auto;
      position: absolute;
      bottom: calc(0% - 35px);
      left: 12%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      background-color: rgb(255,202,1,1);
      padding: 10px;
    }

    .play-btn {
      width: 50px;
      height: 50px;
      display: inline-block;
      border-right: 1px solid #000;
      padding: 0;
      margin-right: 10px;
    }

    .trailler-title {
      text-transform: uppercase;
      font-family: Arial,sans-serif;
      text-shadow: none;
      font-weight: 700;
      font-size: .80em;
      color: #000;
      text-align: center;
    }

    .video-border-decoration-top-left img {
      position: absolute;
      width: 30px;
      top: -21.5px;
      left: -23.5px;
      -webkit-transform: rotate(0deg);
      background-image: radial-gradient(rgb(255,202,1,1) 0px, rgba(13, 149, 255, 0) 45%);
      transform: rotate(0deg);
    }

    .video-border-decoration {
      opacity: 1;
      -webkit-transition: opacity .3s;
      transition: opacity .3s;
    }

    .video-border-decoration-top-right img {
      width: 30px;
      position: absolute;
      top: -22px;
      right: -20px;
      -webkit-transform: rotate(90deg);
      background-image: radial-gradient(rgb(255,202,1,1) 0px, rgba(13, 149, 255, 0) 45%);
      transform: rotate(90deg);
    }

    .video-border-decoration {
      opacity: 1;
      -webkit-transition: opacity .3s;
      transition: opacity .3s;
    }

    .video-border-decoration-bottom-left img {
      width: 30px;
      position: absolute;
      bottom: -22px;
      left: -20px;
      -webkit-transform: rotate(270deg);
      background-image: radial-gradient(rgb(255,202,1,1) 0px, rgba(13, 149, 255, 0) 45%);
      transform: rotate(270deg);
    }

    .video-border-decoration {
      opacity: 1;
      -webkit-transition: opacity .3s;
      transition: opacity .3s;
    }


    .video-border-decoration-bottom-right img {
      width: 30px;
      position: absolute;
      bottom: -21px;
      right: -22.5px;
      -webkit-transform: rotate(180deg);
      background-image: radial-gradient(rgb(255,202,1,1) 0px, rgba(13, 149, 255, 0) 45%);
      transform: rotate(180deg);
    }

    .video-border-decoration {
      opacity: 1;
      -webkit-transition: opacity .3s;
      transition: opacity .3s;
    }
`;