import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'
export default function cancelation() {
  return (
    <div>
      <SEO title="Cancelar compra" />
      <Purchase>
        <h2>Compra cancelada</h2>
        <span rol="img" aria-label="emoji">😥</span>
        <p>Es una pena que hayas cancelado tu pedido</p>
        <p>Recuerda que puedes hacer uno nuevo pedido cuando desees, ¡aquí estamos para ti!</p>
        <Link to="/">
          <Button>Volver al catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
