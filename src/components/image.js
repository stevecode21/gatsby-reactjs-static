// Vamos a crear un componente funcional
import React from 'react'
// Importo graphql y un static query componente
import { graphql, StaticQuery } from 'gatsby'
// Importo también mi componente Img de Gatsby
import Img from 'gatsby-image'

// Este prop name destructuring me indica el nombre de la imagen que finalmente se va a devolver en mi prop render de StaticQuery
export default function Image({ name }) {
  return (
    // Como StaticQuery es un componente de render props, este necesita 2 props en particular el query y un render
    <StaticQuery
      // Esta prop contiene el query con el que pedimos mi imagen en específico, en este caso icon
      query={graphql`
      query GET_IMAGE {
        icon: file(relativePath: {eq: "icon.png"}){
          childImageSharp {
            fluid(maxWidth: 1000){
              # Como la imagen requiere varia información para funcionar, Gatsby nos provee de un fragment que se llama GatsbyImageSharpFluid
              ...GatsbyImageSharpFluid
            }
          }
        }
      }`}
      // Esta segunda prop me servirá para renderizar la imagen gracias al query, StaticQuery trae la información y se la pone disponible al render en un callback y este callback trae la información en una propiedad llamada data
      // Por lo cual render recibe una función, esta función me dice que voy a devolver, lo cual será un componente Image el cual va a usar lo que sea que me devuelva mi query, pero en un prop llamado fluid porque este es el tipo de imagen que me devolvió mi query
      // El valor de fluid será lo que sea que esté en mi data y entre los corchetes pondremos name, que va a ser un prop que yo voy a recibir, así cuando yo necesite otra imagen, puedo traer el query de esta imagen u nombrarlo cuando yo declare mi componente image trayendo asi el prop name
      // con .childImageSharp.fluid traigo la información que necesito que también incluirá el maxWidth
      render={data => <Img fluid={data[name].childImageSharp.fluid} />}
    />

  )
}
