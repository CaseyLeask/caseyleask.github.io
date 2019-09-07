import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby";

import Header from '../components/header'
import Footer from '../components/footer'
import './layout.css'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Website of Casey Leask' },
            { name: 'keywords', content: 'Casey Leask' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div style={{}}>
          {children}
        </div>
        <Footer />
      </>
    )}
  />
);