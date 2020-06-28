import React from 'react'
// Aqui importate mi ProductDetail
import { ProductDetail } from '../components'
// Gracias al context que declaré en mi archivo de gatsby-node.js, lo que puedo obtener alhora es un prop llamado pageContext, en este prop es donde yo voy a obtener toda la información que recibió mi query
export default function Product({ pageContext }) {
  return (
    // Devuelvo el componente ProductDetail, le envio como props todo lo que contenga pageContext, usando spread operator
    <ProductDetail {...pageContext} />

  )
}
