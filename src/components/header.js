import React from 'react'
import Link from 'gatsby-link'

import './header.css'

const Header = ({ siteTitle }) => (
  <header style={{
    'width': '100%',
    'height': '3em',
    'background-color': 'aliceblue'
  }}>
    <section>
      <h3>Hello! My name is Casey Leask.</h3>
    </section>
  </header>
)

export default Header
