import React from 'react';
import {Link} from 'react-router-dom';
import {Component} from 'react';
import { Zoom } from 'react-awesome-reveal';
import Fade from 'react-reveal/Fade';

import './Header.css';

class Header extends Component {

  state ={
      isOpen:false
  }
  handleClick = () =>{
      this.setState({
          isOpen:!this.state.isOpen
      })
  }

  closeNavbar = () => {
      this.setState({
          isOpen: false
      })
  }

  render() {

    <audio
      src={"/assets/audios/LOTR_audio.mp3"}
      autoplay='1'
      loop      
    />
    
    return(
      <nav>
        <div className="logoArea">
          <div className="logo">
            <Zoom duration ={2000}>
              <Link to='/'> <img src="./assets/logo/Lord-of-the-rings.png" alt=""/></Link>
            </Zoom>
        </div>

        <div className='ring'>
          <Zoom duration={2500}>
            <img src='/assets/images/LOTR.png' alt='' />
          </Zoom>
        </div>
      

        <div className="btn" onClick={this.handleClick}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        </div>
        <ul className={this.state.isOpen ? 'showNav': 'undefined'}>
        <Fade right duration={2500}>
          <li><Link to='duas_torres' onClick={this.closeNavbar}>As Duas Torres</Link></li>
          <li><Link to='/retorno_rei' onClick={this.closeNavbar} >O Retorno do Rei</Link></li>
          <li><Link to='/personagens' onClick={this.closeNavbar}>Personagens</Link></li>
          <li><Link to='/hobbit' onClick={this.closeNavbar}>O Hobbit</Link></li>
        </Fade>
        </ul>
      </nav>
    )
  }
}

export default Header;
