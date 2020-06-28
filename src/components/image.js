import React from 'react'
// Importo el hook useStaticQuery desde gatsby
import { graphql, StaticQuery, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export default function Image({ name }) {

  // Creamos una constante que contendrá todo lo que nos devuelva el hook pasando entre parentesis el query para graphql
  const data = useStaticQuery(
    graphql`
      query GET_IMAGE {
        icon: file(relativePath: {eq: "icon.png"}){
          childImageSharp {
            fluid(maxWidth: 1000){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }`
  )
  return <Img fluid={data[name].childImageSharp.fluid} />


}
