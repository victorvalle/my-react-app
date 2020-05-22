import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="Illustration">
      <img src={require('../images/illustration.png')} width="auto"/>
    </div>
    <div className="MainCall">
      <h1>María and Víctor</h1>
      <p>Queremos que seais parte de nuestra historia y para ello necesitamos vuestra confirmación</p>
      <Link to="/Buy"><button>CONFIRMAR</button></Link>
    </div>
  </div>
)

export default Header
