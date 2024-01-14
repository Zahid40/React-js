import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{backgroundColor: 'black'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" onClick={props.toogleMode} id="flexSwitchCheckDefault" />
                <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`}  htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable':'Disable'} DarkMode</label>
              </div>
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
              {/* <button className="btn btn-outline-primary" type="submit">{props.btnfind}</button> */}
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  btnfind: PropTypes.string
}

Navbar.defaultProps = {
  title: 'set title here',
  btnfind: "Find"
}
