import React from 'react';

import '../assets/style/Header.scss';
import logo from '../assets/static/eso.png';
import userIcon from '../assets/static/user-icon.png';

const Header= () =>{
    return (
        <header className="header">
          <img  className="header__img" src={logo} alt=""/>
          <div className="header__menu">
            <div className="header__menu--profile">
              <img src={userIcon} alt=""/>
        <p className="Perfil">Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>

    );

}

export default Header;
