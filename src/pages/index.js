import React from "react"
import { graphql } from "gatsby"
import { Jumbo } from '../components'
import { SEO } from "../components"
// Importo la librería de styled components
import styled from 'styled-components'


export const query = graphql`
  query GET_DESCRIPTION {
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
  }
`

// Aquí declaro mis estilos para un botón
const Button = styled.button`
  /* Este componente será una copia del botón */
  width: 8rem;
  background-color: #98CA3F;
  border: none;
  border-radius: 10px;
    /*Aquí puedo acceder a los props para dar estilos dinamicos, los styled-components me devuelven un callback donde yo tengo acceso a los props  */
  color: ${props => props.color};
  /* Puedo usar un selector para estilar  */
  &: hover {
    transform: scale(1.4);
  }

`
const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    {/* eslint-disable-next-line react/prop-types */}
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
  </>
)


export default IndexPage
