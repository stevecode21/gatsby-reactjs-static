// Voy a importar la librería instalada (dotenv) para leer las variables de entorno y la configuramos
require("dotenv").config({
  // Aquí le digo cual es la ubicación de nuestro archivo, el cual será el de las variables de entorno (teniendo en cuenta que estamos trabajando en desarrollo), pero como también queremos estar listos para producción lo que haremos será decirle que cuando estemos en desarrollo tome la configuración de ese archivo en desarrollo y cuando ya estemos en producción, tome la configuración de ese archivo en producción
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Platzi Swag`,
    description: `La mejor merch de Platzi disponible para ti`,
    author: `@stevecode21`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Agrego el plugin de stripe, este no necesita configuración, este plugin lo que hace es colocar el API de stripe disponible para mi en el navegador
    `gatsby-plugin-stripe`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },

    },
    // Aqui voy a configurar el plugin de typography
    {
      // Tendré 2 propiedades, pues, cuando un plugin requiere de configuración, requiere de estas 2 propiedades:
      // resolve será el plugin que va a resolver
      resolve: `gatsby-plugin-typography`,
      // options buscará nuestra configuración de typography desde el archivo creado en utils
      options: {
        // Esta propiedad debe apuntar hacia la ruta de nuestra configuración
        pathToConfigModule: `src/utils/typography`
      }
    },
    //El segundo plugin de stripe si requiere una pequeña configuración:
    {
      // agrego el resolve para resolver la configuración del plugin, este me sirve para poder traer productos de mi tienda en stripe
      resolve: `gatsby-source-stripe`,
      // Las opciones requeriran 2 piezas fundamentales
      options: {
        // Que voy a obtener de stripe, en este caso objects, dentro de un arreglo, agrego Sku, que significa Stock-keeping unit
        objects: ["Price"],
        // La segunda será la secret key de mi API
        secretKey: process.env.STRIPE_SK,
        downloadFiles: true,
      }
    },
    {
      resolve: `@hot-loader/react-dom`,
      options: {
        alias: {
          'react-dom': `@hot-loader/react-dom`
        }
      }
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
