import React from 'react'
import './style.css'
import ebytrLogo from '../../images/logoEbytr.png'

export default function index() {
  return (
    <form id="form-login">
      <div id="container-login">
        <div id="div-logo">
          <img src={ ebytrLogo } alt="logo da Ebyty" />
        </div>
        <div id="container-inputs">
          <label htmlFor="">E-mail</label>
          <input type="email" id="input-email" />

          <label htmlFor="">Password</label>
          <input type="password" input-password />
        </div>
        <button type="button">Login</button>
      </div>
    </form>
  )
}
