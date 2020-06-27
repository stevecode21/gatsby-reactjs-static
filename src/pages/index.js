import React from "react"
import { graphql } from "gatsby"
// Importo mis componentes de una forma mas optimizada, adicionalmente importando Products
import { Jumbo, SEO, Products } from '../components'



export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            # Pido la descripción
            description
          }
        }
      }
    }
    # Añado el query que generamos con los productos

      # Ya tenemos acceso a la información de los precios de mis productos de stripe
    allStripePrice {
      edges {
        node {
          id
          unit_amount
          product {
            name
            metadata {
              description
              img
              wear
              }
            }
          }
        }
      }
    }
`


const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <>
      <SEO title="Home" />
      {/* eslint-disable-next-line react/prop-types */}
      <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
      {/* Agrego nuestro nuevo componente enviandole un prop con la lista de nuestro productos del query */}
      {/* eslint-disable-next-line react/prop-types */}
      <Products products={data.allStripePrice.edges} />
    </>
  )
}


export default IndexPage
