/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// Quitamos estos 2 componentes propios de gatsby, ya que no los usaremos por el momento
// import { StaticQuery, graphql } from "gatsby"
// Importamos un par de Styled-components
import { Content, Footer } from '../styles/components'
// import './layout.css'

import Header from "./header"

const Layout = ({ children }) => (
  <>
    <Header />
    {/* Modificamos el div por un styled component */}
    <Content>
      <main>{children}</main>
      {/* El Footer será nuestro componente pre definido*/}
      <Footer>
        con ♥ por
        <a href="https://www.platzi.com">Platzi</a>
      </Footer>
    </Content>
  </>
)
// }
// />
// )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
