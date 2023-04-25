import React, { Component } from 'react'

export default class Navbar extends Component {
   
  render() {
    let {handle,title}=this.props;
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  category
                </a>
                <ul className="dropdown-menu">
               
            <li><button><a href="/sports" >sports</a></button></li>
            <li><button><a href="/science">science</a></button></li>
            <li><button><a href="/Health" >Health</a></button></li>
            <li><button><a href="/Entertainment">Entertainment</a></button></li>
          
          </ul>
        </li>
        </ul>
           
          </div>
        </div>
        <div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" onClick={handle}   />
  <label className="form-check-label" htmlFor="exampleRadios1">
    Dark Mode
  </label>
</div>

      </nav>
    )
  }
}
