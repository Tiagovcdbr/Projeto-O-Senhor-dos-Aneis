import React from 'react';
import {Link} from 'react-router-dom';
import {Component} from 'react';

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
          <Link to='/'> <img src="./assets/logo/Lord-of-the-rings.png" alt=""/> </Link>
        </div>

        <div className='ring'>
          <img src='/assets/images/LOTR.png' alt='' />
        </div>
      

        <div className="btn" onClick={this.handleClick}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        </div>
        <ul className={this.state.isOpen ? 'showNav': 'undefined'}>
          <li><Link to='duas_torres' onClick={this.closeNavbar}>As Duas Torres</Link></li>
          <li><Link to='/retorno_rei' onClick={this.closeNavbar} >O Retorno do Rei</Link></li>
          <li><Link to='/personagens' onClick={this.closeNavbar}>Personagens</Link></li>
          <li><Link to='/hobbit' onClick={this.closeNavbar}>O Hobbit</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Header;
