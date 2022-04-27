import React from 'react'
import Logo from '../components/img/logo/sportnike.png'

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={Logo} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
              Bootstrap
          </a>
          <a className="navbar-brand" href="#">Sport Nike</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              <a className="nav-link" href="#">Running</a>
              <a className="nav-link" href="#">Futbol</a>
              <a className="nav-link" href="#">Training</a>
              <a className="nav-link" href="#">Tenis</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar