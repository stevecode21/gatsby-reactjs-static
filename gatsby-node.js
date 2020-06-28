/* Recordemos que siempre que trabajemos sobre la API de Gatsby vamos a trabajar en NodeJS */
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/Product.js`)
  const result = await graphql(`
  query GET_PRODUCTS_BY_PRICE{
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
  `)
  if (result.errors) {
    throw result.errors
  }

  result.data.allStripePrice.edges.forEach(({ node }) => {
    createPage({
      path: `${node.id}`,
      component: productTemplate,
      // Obtengo el contexto y lo que le envio es el nodo (cada uno de los productos que vienen de mi query)
      context: node
    })
  })
}

