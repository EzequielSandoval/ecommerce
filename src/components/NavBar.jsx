import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../css/styles.css'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to='/'>
            <img src="https://firebasestorage.googleapis.com/v0/b/sportnike-eb926.appspot.com/o/image%2Fsportnike.png?alt=media&token=f0ea0f45-83fb-4e3d-9f9b-c8405451e91d" alt="logo" width="120" height="50" className="d-inline-block align-text-top" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to='/' className={({ isActive }) => "nav-link " + (isActive ? "active" : "")} aria-current="page" > Inicio  </NavLink>
              <NavLink to='/categoria/running' className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}  > Running  </NavLink>
              <NavLink to='/categoria/futbol' className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}  > Futbol  </NavLink>
              <NavLink to='/categoria/training' className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}  > Training  </NavLink>
              <NavLink to='/categoria/basquet' className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}  > Basquet  </NavLink>
              <NavLink to='/admin/'><button className='btn btn-sm btn-light  adminWidget'>Admin Panel</button></NavLink>
              <NavLink to='/cart' className="nav-link cartContainer"  >  <CartWidget />  </NavLink>
            </div>
          </div>
        </div>
      </nav >
    </header >
  )
}

export default NavBar