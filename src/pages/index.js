import React from "react"
// Traigo graphql desde gatsby, que es la que me va a ayudar a conectarme con el server interno de graphql de gatsby
import { Link, graphql } from "gatsby"
import { Jumbo } from '../components'
import { SEO } from "../components"

// Ahora defino una variable exportada que es igual a grapqhql quien a su vez dentro de las tag template strings (backteets) irá el query para la descripción
export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          # Este siteMetadata es el que nosotros configuramos en gatsby-config.js (en ese archivo hay un objeto llamado así)
          siteMetadata {
            # Pido la descripción
            description
          }
        }
      }
    }
  }
`
// Una vez se realice la consulta de graphql esta información me la coloca como prop en el objeto "data", por lo cual hacemos destructuring para traer data en mi index
const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    {/* A Jumbo le envio como prop, la descripción obtenida a partir de la información del objeto data que me trae mi query de graphql */}
    {/* eslint-disable-next-line react/prop-types */}
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/thanks">Go to thanks</Link>
    <br />
    <Link to="/cancelation">Go to cancelation</Link>
  </>
)


export default IndexPage
