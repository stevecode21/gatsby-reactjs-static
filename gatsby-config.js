module.exports = {
  siteMetadata: {
    title: `Platzi Swag`,
    description: `La mejor merch de Platzi disponible para ti`,
    author: `@stevecode21`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        pathToConfigModule: "src/utils/typography.js"
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
