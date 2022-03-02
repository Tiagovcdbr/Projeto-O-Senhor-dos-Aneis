import React from 'react'
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';

const Main = () => {
  return (
    <Container>
      <video
        className='video-bg'
        src={"/assets/videos/senhor dos aneis argonath_HD.mp4"} 
        autoplay='1'
        allowfullscreen="1"
        loop
        muted
      />
      <ContainerLogo>
        <div className='logo'>
          <Zoom duration={2500}>
            <img src='/assets/logo/lord-of-the-rings1.png' alt='logo' />
          </Zoom>
        </div>
      </ContainerLogo>
    </Container>
  )
}

export default Main;

const Container = styled.div`
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  height: 100%;
  opacity: 1;
  background: black;

  .video-bg {
    position: absolute;
    
    width: 100%;
    height: 100%;
    background-color: #000;

    object-fit: cover;
    -o-object-fit: cover;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`

const ContainerLogo = styled.div`

  animation-fill-mode: both;
  animation-duration: .33.5s;
  animation-delay: 100ms;
  animation-iteration-count: 1;
  opacity: 1;
  animation-name: react-reveal-607813993386296-1;

  .logo img {
    position: absolute;
    width: 44rem;
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