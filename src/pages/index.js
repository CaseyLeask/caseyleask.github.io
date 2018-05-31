import React from 'react'
import Link from 'gatsby-link'

import './index.css'

import profile from "./profile.jpeg";

const IndexPage = () => (
  <main>
    <img src={ profile }
         alt="Profile Picture" />
    <h1>Come work with me</h1>
    <p>Email: Firstname and Lastname at gmail dot com.</p>
    <p>Twitter: <a href="https://twitter.com/CaseyLeask">@CaseyLeask</a></p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/casey-leask-099aa922/">https://www.linkedin.com/in/casey-leask-099aa922/</a></p>
    <p>I’m looking for a new role as CTO or VP/Head of Engineering (or COO), or similar, remote or in Melbourne.</p>
  </main>
)

export default IndexPage
