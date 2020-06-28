// Con COMMONJS importamos path
/* Recordemos que siempre que trabajemos sobre la API de Gatsby vamos a trabajar en NodeJS */
const path = require('path')

// Exportamos un método de la API de Gatsby
// Este método recibe una función y dado a que esta función va a resolver un query y va a realizar cierta acción con el resultado va a ser una función asíncrona
// Destructuro 2 piezas del callback: graphql y un método llamado actions
exports.createPages = async ({ graphql, actions }) => {
  // Destructuramos el método createPage de las actions
  const { createPage } = actions
  // Importo el template components Product, esto es posible gracias a path
  const productTemplate = path.resolve(`src/templates/Product.js`)
  // Aqui voy a definir un resultado de acuerdo a una llamada asíncrona de un query que vamos a traer
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
  // Haremos una validación para manejar los errores, si el resultado tiene algún error
  if (result.errors) {
    // Vamos a ejecutar un error
    throw result.errors
  }

  // Del resultado voy a recorrer los edges de cada uno de mis productos
  // El foreach recibirá un callback con el nodo (cada uno de los productos)
  result.data.allStripePrice.edges.forEach(({ node }) => {
    // Si ya estoy iterando a cada uno de los productos, voy a generar una página con el método extraido createPage
    createPage({
      // createPage es un objeto que toma una serie de configuraciones, la primera, el path: en qué path se va a localizar esta vista, la cual será una ruta con el id de cada uno de mis nodos (productos)
      path: `${node.id}`,
      // lo que sigue es configurar un componente que resuelva cada uno de estos productos, productTemplate
      component: productTemplate,
    })
  })
}

