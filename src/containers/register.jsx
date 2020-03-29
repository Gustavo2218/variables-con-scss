import React from 'react';
import '../assets/style/register.scss';
const Registrer= () =>{
    return (
        <div className="Registrer">
          <title>Registro</title>
          <header class="header">
          <section class="register">
            <section class="register__container">
              <h2>Regístrate</h2>
              <form class="register__container--form">
                <input class="input" type="text" placeholder="Nombre"></input>
                <input class="input" type="text" placeholder="Correo"></input>
                <input class="input" type="password" placeholder="Contraseña"></input>
                <button class="button">Registrarme</button>
              </form>
              <a href="/">Iniciar sesión</a>
          <footer class="footer">
            <a href="/">Terminos de uso</a>
            <a href="/">Declaración de privacidad</a>
            <a href="/">Centro de ayuda</a>
          </footer>
        </section>
        </section>
        </header>
        </div>

    );
}

export default Registrer;
