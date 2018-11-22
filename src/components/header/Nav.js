import React from 'react';


const Nav = props => {  
    return (
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-light bg-menu">
        <a class="navbar-brand" href="#"><img className="img-fluid" src="%PUBLIC_URL%/../assets/img/logomarca-wd.png" alt=""></img></a>
        <button class="navbar-toggler text-light" type="button" data-toggle="collapse" data-target="#menuMob" aria-controls="menuMob" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>        
        <div class="collapse navbar-collapse" id="menuMob">
          <ul class="navbar-nav mr-auto ml-auto text-light">
            <li class="nav-item active">
              <a class="nav-link text-light" href="#">Início <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">Sobre</a>
            </li>            
            <li class="nav-item">
              <a class="nav-link text-light" href="#">Serviços</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">Contato</a>
            </li>
          </ul>
          <div class="redes">
              <a className="face" href="https://www.facebook.com/webgrad.com.br/" target="_blang" title=""><i className="fab fa-facebook-f"></i></a>
              <a className="google" href="https://plus.google.com/+WebgradBr" title=""><i className="fab fa-google-plus-g"></i></a>
              <a className="git" href="https://github.com/pauloupgrad" title=""><i className="fab fa-github-alt"></i></a>
              <a className="twitter" href="https://twitter.com/webgraddesigner" title=""><i className="fab fa-twitter"></i></a>    
          </div> 
         </div> 
        </nav>
      </div>
    );
  }


export default Nav;